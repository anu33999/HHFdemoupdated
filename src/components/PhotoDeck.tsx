import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react'

type Slide = { src: string; alt: string; caption: string }

/**
 * A deck of photo prints. Swipe/drag the top photo (or use the arrows,
 * dots or keyboard) to send it to the back and reveal the next one.
 * Nothing advances on its own.
 */
export default function PhotoDeck({ slides }: { slides: Slide[] }) {
  const n = slides.length
  const [i, setI] = useState(0)
  const [dx, setDx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [fly, setFly] = useState<0 | 1 | -1>(0)
  const [touched, setTouched] = useState(false)
  const start = useRef<{ x: number; id: number } | null>(null)

  const go = (dir: 1 | -1) => {
    if (fly) return
    setTouched(true)
    setFly(dir)
    window.setTimeout(() => {
      setI((v) => (v + dir + n) % n)
      setFly(0)
      setDx(0)
    }, 260)
  }

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    start.current = { x: e.clientX, id: e.pointerId }
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current || start.current.id !== e.pointerId) return
    setDx(e.clientX - start.current.x)
  }
  const onUp = () => {
    if (!start.current) return
    start.current = null
    setDragging(false)
    if (Math.abs(dx) > 70) go(dx < 0 ? 1 : -1)
    else if (Math.abs(dx) < 6) go(1) // a tap shows the next photo
    else setDx(0)
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }

  const cur = slides[i]
  return (
    <div className="relative mx-auto w-full max-w-[600px] lg:mr-0">
      <div
        className="photo-deck relative aspect-[4/3.05] touch-pan-y select-none outline-none"
        role="region"
        aria-roledescription="photo deck"
        aria-label={`Photo ${i + 1} of ${n}: ${cur.caption}. Swipe or use arrow keys for more.`}
        tabIndex={0}
        onKeyDown={onKey}
      >
        {slides.map((s, k) => {
          const offset = (k - i + n) % n
          const isFront = offset === 0
          const pos = offset === 0 ? 'deck-front' : offset === 1 ? 'deck-mid' : offset === 2 ? 'deck-back' : 'deck-hidden'
          const moveX = isFront ? (fly ? -fly * 260 : dx) : 0
          return (
            <figure
              key={s.src}
              className={`deck-card ${pos} ${isFront && dragging ? 'is-dragging' : ''} absolute inset-0`}
              style={{ zIndex: n - offset, ...(isFront ? { transform: `translateX(${moveX}px) rotate(${moveX / 22}deg)`, opacity: fly ? 0 : 1 } : {}) }}
              aria-hidden={!isFront}
              {...(isFront ? { onPointerDown: onDown, onPointerMove: onMove, onPointerUp: onUp, onPointerCancel: onUp } : {})}
            >
              <img src={s.src} alt={isFront ? s.alt : ''} draggable={false} loading={offset < 3 ? 'eager' : 'lazy'} className="h-full w-full rounded-[10px] object-cover" />
            </figure>
          )
        })}
        <span aria-hidden className="stack-tape" style={{ zIndex: n + 1 }} />
        {!touched && (
          <span aria-hidden className="deck-hint pointer-events-none absolute bottom-5 left-1/2 z-[30] flex -translate-x-1/2 items-center gap-2 rounded-full bg-maroon-950/80 px-4 py-2 text-xs font-bold text-peach backdrop-blur">
            <Hand size={14} className="text-gold" /> Swipe to see more
          </span>
        )}
      </div>

      <p key={cur.src} aria-live="polite" className="animate-rise-in relative z-10 mx-auto -mt-3 w-fit max-w-[92%] rotate-[-1.2deg] rounded-[10px] bg-gold px-4 py-2 text-center text-sm font-bold leading-snug text-maroon-950 shadow-[0_14px_30px_-14px_rgb(0_0_0/0.6)]">
        {cur.caption}
      </p>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-peach/30 text-peach transition-colors hover:border-gold hover:bg-white/10 hover:text-gold" aria-label="Previous photo">
          <ChevronLeft size={20} aria-hidden />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((s, k) => (
            <button
              key={s.src}
              type="button"
              onClick={() => { setTouched(true); setI(k) }}
              aria-label={`Show photo ${k + 1}: ${s.caption}`}
              aria-current={k === i}
              className={`h-2 rounded-full transition-all duration-500 ${k === i ? 'w-7 bg-gold' : 'w-2 bg-peach/35 hover:bg-peach/70'}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full border border-peach/30 text-peach transition-colors hover:border-gold hover:bg-white/10 hover:text-gold" aria-label="Next photo">
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>
    </div>
  )
}
