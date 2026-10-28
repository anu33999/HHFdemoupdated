import { Fragment, useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent, type ReactNode } from 'react'
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react'

/* ------------------------------------------------------------------
   Motion toolkit. Every effect checks prefers-reduced-motion and
   falls back to a static, fully visible state.
------------------------------------------------------------------- */

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const cls = (...p: (string | false | undefined)[]) => p.filter(Boolean).join(' ')

/** True once the element has scrolled into view. */
export function useInView<T extends Element>(options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ref, inView }
}

/* ---------- Headline that rises in word by word ---------- */

export function SplitWords({ text, className, delay = 0, step = 70 }: { text: string; className?: string; delay?: number; step?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.2 })
  const words = text.split(' ')
  return (
    <span ref={ref} className={cls('split-words', inView && 'is-in', className)} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-word" aria-hidden>
            <span style={{ transitionDelay: `${delay + i * step}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  )
}

/* ---------- Generic reveal with direction variants ---------- */

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'clip' | 'fade'

export function Motion({
  children,
  className,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  style,
}: {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'figure'
  style?: CSSProperties
}) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag ref={ref as never} className={cls('mo', `mo-${variant}`, inView && 'is-in', className)} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  )
}

/* ---------- Infinite marquee ---------- */

export function Marquee({ children, speed = 40, reverse = false, className }: { children: ReactNode; speed?: number; reverse?: boolean; className?: string }) {
  return (
    <div className={cls('marquee group', className)}>
      <div className={cls('marquee-track', reverse && 'marquee-reverse')} style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ---------- 3D tilt on hover ---------- */

export function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: RPointerEvent) => {
    if (reducedMotion() || e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return (
    <div ref={ref} className={cls('tilt', className)} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
      <span aria-hidden className="tilt-glare" />
    </div>
  )
}

/* ---------- Pointer parallax container (children use data-depth) ---------- */

export function PointerParallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion() || window.matchMedia('(pointer: coarse)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        el.style.setProperty('--px', x.toFixed(3))
        el.style.setProperty('--py', y.toFixed(3))
        el.style.setProperty('--sx', `${e.clientX}px`)
        el.style.setProperty('--sy', `${e.clientY - el.getBoundingClientRect().top}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div ref={ref} className={cls('pparallax', className)}>
      {children}
    </div>
  )
}

/* ---------- Scroll-linked vertical parallax ---------- */

export function ScrollParallax({ children, className, speed = 0.12 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return
    let raf = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const mid = r.top + r.height / 2 - window.innerHeight / 2
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])
  return (
    <div ref={ref} className={cls('will-change-transform', className)}>
      {children}
    </div>
  )
}

/* ---------- Progress bar that fills when seen ---------- */

export function GrowBar({ value, className, barClassName, label }: { value: number; className?: string; barClassName?: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={cls('h-2.5 overflow-hidden rounded-full bg-sand', className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div
        className={cls('h-full rounded-full bg-gradient-to-r from-gold to-rust transition-[width] duration-[1600ms] ease-[var(--ease-out-soft)]', barClassName)}
        style={{ width: inView ? `${value}%` : '0%' }}
      />
    </div>
  )
}

/* ---------- Heartbeat (ECG) line ---------- */

export function Heartbeat({ className, stroke = 'var(--color-gold)', width = 1200 }: { className?: string; stroke?: string; width?: number }) {
  const beat = (x: number) => `L ${x} 50 L ${x + 18} 50 L ${x + 26} 30 L ${x + 34} 70 L ${x + 44} 8 L ${x + 54} 88 L ${x + 62} 42 L ${x + 70} 50`
  let d = 'M 0 50'
  for (let x = 40; x < width; x += 240) d += ' ' + beat(x)
  d += ` L ${width} 50`
  return (
    <svg viewBox={`0 0 ${width} 100`} preserveAspectRatio="none" className={cls('heartbeat', className)} aria-hidden>
      <path d={d} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" opacity="0.25" />
      <path d={d} fill="none" stroke={stroke} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" className="heartbeat-pulse" pathLength={1} />
    </svg>
  )
}

/** A heartbeat line that draws itself as the section scrolls through the viewport. */
export function ScrollDrawLine({ className, stroke = 'var(--color-rust)' }: { className?: string; stroke?: string }) {
  const ref = useRef<SVGPathElement>(null)
  const wrap = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const path = ref.current
    const box = wrap.current
    if (!path || !box) return
    if (reducedMotion()) {
      path.style.strokeDashoffset = '0'
      return
    }
    let raf = 0
    const update = () => {
      const r = box.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.3)))
      path.style.strokeDashoffset = String(1 - p)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div ref={wrap} className={className} aria-hidden>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="h-full w-full">
        <path
          ref={ref}
          d="M0 50 L 180 50 L 200 30 L 215 72 L 232 10 L 250 90 L 266 44 L 280 50 L 470 50 L 490 30 L 505 72 L 522 10 L 540 90 L 556 44 L 570 50 L 760 50 L 780 30 L 795 72 L 812 10 L 830 90 L 846 44 L 860 50 L 1000 50"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
          pathLength={1}
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        />
      </svg>
    </div>
  )
}

/* ---------- Floating plus-sign particles ---------- */

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 8 + ((i * 7) % 14),
  delay: -((i * 1.7) % 14),
  dur: 12 + ((i * 5) % 10),
  op: 0.12 + ((i * 3) % 5) / 30,
}))

export function Particles({ className }: { className?: string }) {
  return (
    <div className={cls('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, opacity: p.op }}
        />
      ))}
    </div>
  )
}

/* ---------- Scroll progress bar + back-to-top ring ---------- */

export function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? window.scrollY / h : 0)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  const r = 20
  const c = 2 * Math.PI * r
  return (
    <>
      <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold via-rust to-rust" style={{ transform: `scaleX(${p})` }} />
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })}
        className={cls(
          'fixed bottom-5 right-5 z-[55] grid h-12 w-12 place-items-center rounded-full bg-maroon-900 text-peach shadow-[0_12px_30px_-10px_rgb(54_16_10/0.7)] transition-all duration-300 hover:bg-maroon-800',
          p > 0.08 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
        aria-label="Back to top"
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
          <circle cx="24" cy="24" r={r} fill="none" stroke="rgb(245 230 208 / 0.15)" strokeWidth="2.5" />
          <circle cx="24" cy="24" r={r} fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeDasharray={c} strokeDashoffset={c * (1 - p)} strokeLinecap="round" />
        </svg>
        <ArrowUp size={18} aria-hidden />
      </button>
    </>
  )
}

/* ---------- Auto-advancing slider ---------- */

export function useAutoAdvance(count: number, ms = 6000) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused || reducedMotion() || count < 2) return
    const t = setTimeout(() => setI((v) => (v + 1) % count), ms)
    return () => clearTimeout(t)
  }, [i, paused, count, ms])
  return { i, setI, paused, setPaused }
}

/* ---------- Animated number with prefix / suffix / decimals ---------- */

export function AnimatedNumber({ value, decimals = 0, prefix = '', suffix = '', duration = 1800 }: { value: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (reducedMotion()) {
      setN(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])
  const text = `${prefix}${n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`
  const final = `${prefix}${value.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`
  return (
    <span ref={ref} aria-label={final}>
      <span aria-hidden>{text}</span>
    </span>
  )
}

/* ---------- Image stack that cycles while hovered (or auto when in view) ---------- */

export function CyclingImages({ photos, alt, className, auto = false, interval = 2600 }: { photos: string[]; alt: string; className?: string; auto?: boolean; interval?: number }) {
  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()
  useEffect(() => {
    if (photos.length < 2 || reducedMotion()) return
    if (!(hover || (auto && inView))) return
    const t = setInterval(() => setI((v) => (v + 1) % photos.length), interval)
    return () => clearInterval(t)
  }, [hover, auto, inView, photos.length, interval])
  return (
    <div ref={ref} className={cls('pan relative overflow-hidden', className)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {photos.map((src, k) => (
        <img
          key={src}
          src={src}
          alt={k === 0 ? alt : ''}
          aria-hidden={k !== 0}
          loading="lazy"
          className={cls('absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1000ms] ease-[var(--ease-out-soft)]', k === i ? 'scale-100 opacity-100' : 'scale-105 opacity-0')}
        />
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1" aria-hidden>
          {photos.map((src, k) => (
            <span key={src} className={cls('h-1.5 rounded-full bg-white transition-all duration-500', k === i ? 'w-5 opacity-100' : 'w-1.5 opacity-60')} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------- Site-wide cursor effect ----------
   Every photo frame (.media, .pan, .deck-card, .founder-face) gently pans its
   image toward the cursor. Mouse/trackpad only; disabled for touch and reduced motion. */

const PHOTO_SELECTOR = '.media, .pan, .deck-card, .founder-face'

export function CursorFX() {
  useEffect(() => {
    if (reducedMotion() || !window.matchMedia('(pointer: fine)').matches) return
    let panEl: HTMLElement | null = null
    const clear = (el: HTMLElement) => {
      el.classList.remove('is-panning')
      el.style.removeProperty('--pan-x')
      el.style.removeProperty('--pan-y')
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const photo = (e.target as Element | null)?.closest?.(PHOTO_SELECTOR) as HTMLElement | null
      if (panEl && panEl !== photo) clear(panEl)
      if (photo) {
        const b = photo.getBoundingClientRect()
        photo.style.setProperty('--pan-x', `${(((e.clientX - b.left) / b.width - 0.5) * -16).toFixed(1)}px`)
        photo.style.setProperty('--pan-y', `${(((e.clientY - b.top) / b.height - 0.5) * -16).toFixed(1)}px`)
        photo.classList.add('is-panning')
      }
      panEl = photo
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (panEl) clear(panEl)
    }
  }, [])
  return null
}

/* ---------- Horizontal carousel: scroll-snap, drag with mouse, arrow buttons ---------- */

export function Carousel({ children, label, tone = 'light' }: { children: ReactNode; label: string; tone?: 'light' | 'dark' }) {
  const track = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = track.current
    if (!t) return
    const update = () => {
      setCanPrev(t.scrollLeft > 8)
      setCanNext(t.scrollLeft + t.clientWidth < t.scrollWidth - 8)
      const max = t.scrollWidth - t.clientWidth
      setProgress(max > 0 ? t.scrollLeft / max : 0)
    }
    update()
    t.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      t.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const by = (dir: 1 | -1) => {
    const t = track.current
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: reducedMotion() ? 'auto' : 'smooth' })
  }
  const onDown = (e: RPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !track.current) return
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false }
  }
  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const t = track.current
    if (!d || !t) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 5) {
      d.moved = true
      t.classList.add('is-dragging')
    }
    if (d.moved) t.scrollLeft = d.left - dx
  }
  const onUp = () => {
    const t = track.current
    t?.classList.remove('is-dragging')
    if (drag.current?.moved && t) {
      // swallow the click that follows a drag
      const block = (ev: Event) => { ev.preventDefault(); ev.stopPropagation() }
      t.addEventListener('click', block, { capture: true, once: true })
      setTimeout(() => t.removeEventListener('click', block, { capture: true }), 50)
    }
    drag.current = null
  }

  const dark = tone === 'dark'
  const btn = `grid h-11 w-11 place-items-center rounded-full border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
    dark ? 'border-peach/30 text-peach hover:border-gold hover:text-gold' : 'border-maroon-900/20 text-maroon-900 hover:border-rust hover:bg-rust hover:text-white'
  }`
  return (
    <div>
      <div
        ref={track}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="carousel-track -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 outline-none md:-mx-10 md:scroll-px-10 md:px-10"
      >
        {children}
      </div>
      <div className="mt-6 flex items-center gap-5">
        <button type="button" className={btn} onClick={() => by(-1)} disabled={!canPrev} aria-label="Scroll left">
          <ChevronLeft size={20} aria-hidden />
        </button>
        <button type="button" className={btn} onClick={() => by(1)} disabled={!canNext} aria-label="Scroll right">
          <ChevronRight size={20} aria-hidden />
        </button>
        <div className={`relative h-[3px] flex-1 overflow-hidden rounded-full ${dark ? 'bg-white/10' : 'bg-maroon-900/10'}`} aria-hidden>
          <span className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-rust transition-[left] duration-200" style={{ left: `${progress * 75}%` }} />
        </div>
        <span className={`hidden text-xs font-semibold sm:inline ${dark ? 'text-peach/60' : 'text-muted'}`}>Drag or swipe to explore</span>
      </div>
    </div>
  )
}

