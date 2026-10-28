import { useRef, useState, type PointerEvent, type ReactNode } from 'react'
import { ArrowUpRight, Heart, MessageCircle, Play, Repeat2, Send, ThumbsUp } from 'lucide-react'
import { heroSlides, images, org, stories } from '../data/site'
import { socialIcons } from './Social'
import { reducedMotion } from './motion'

type Platform = (typeof org.socials)[number]

const feedPosts = [
  { img: images.bhaskar, text: 'With renewed vision after an HHF-sponsored eye surgery, Bhaskar is now an Assistant Central IB Officer.', date: stories[0].date },
  { img: heroSlides[0].src, text: 'Indian Oil Corporation CSR initiative for Govt. ENT Hospital, facilitated through HHF.', date: '2026-03-01' },
  { img: images.dialysis, text: '19,980 free dialysis sessions and counting — saving patients ₹5.99 crore.', date: '2026-02-10' },
  { img: images.schoolKids, text: '400 children of migrant families now study free at the HHF School.', date: '2024-07-05' },
]

const ago = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })

/** An interactive phone that previews each HHF social channel. Tilts with the cursor. */
export default function SocialPhone() {
  const [active, setActive] = useState(0)
  const tilt = useRef<HTMLDivElement>(null)
  const p = org.socials[active]

  const onMove = (e: PointerEvent) => {
    if (reducedMotion() || e.pointerType !== 'mouse' || !tilt.current) return
    const r = tilt.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    tilt.current.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`)
    tilt.current.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`)
  }
  const reset = () => {
    tilt.current?.style.setProperty('--rx', '0deg')
    tilt.current?.style.setProperty('--ry', '-8deg')
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" onPointerMove={onMove} onPointerLeave={reset}>
      {/* Platform switcher */}
      <div role="tablist" aria-label="HHF social channels" className="grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
        {org.socials.map((s, k) => {
          const Icon = socialIcons[s.label]
          const on = k === active
          return (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="social-phone-screen"
              onClick={() => setActive(k)}
              onMouseEnter={() => setActive(k)}
              className={`group flex flex-col items-center gap-2 rounded-[18px] p-3 text-center transition-all duration-300 sm:flex-row sm:gap-4 sm:p-4 sm:text-left ${on ? 'bg-gold text-maroon-950 shadow-[0_18px_40px_-20px_rgb(232_176_75/0.8)]' : 'bg-white/[0.05] text-peach ring-1 ring-line-dark hover:bg-white/10'}`}
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[14px] transition-transform duration-300 group-hover:rotate-[-8deg] ${on ? 'bg-maroon-950 text-gold' : 'bg-white/10 text-gold'}`}>
                <Icon size={20} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold sm:text-sm">{s.label}</span>
                <span className={`hidden truncate text-xs sm:block ${on ? 'text-maroon-900/80' : 'text-peach/60'}`}>{s.handle}</span>
              </span>
              <ArrowUpRight size={16} className={`hidden shrink-0 transition-opacity sm:block ${on ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} aria-hidden />
            </button>
          )
        })}
      </div>

      {/* Phone */}
      <div className="relative mx-auto w-full max-w-[340px]">
        <div aria-hidden className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl" />
        <div ref={tilt} className="social-phone relative">
          <div className="relative overflow-hidden rounded-[44px] border-[10px] border-maroon-950 bg-ivory shadow-[0_50px_90px_-40px_rgb(0_0_0/0.85)] ring-1 ring-gold/30">
            <div aria-hidden className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-maroon-950" />
            <div id="social-phone-screen" role="tabpanel" aria-label={`${p.label} preview`} className="relative h-[480px] overflow-y-auto sm:h-[560px] overscroll-contain pt-9 [scrollbar-width:none]">
              <PhoneHeader p={p} />
              <div key={p.label} className="animate-rise-in">
                <Screen p={p} />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-peach/55">Preview built from HHF’s photos and news — the live site could embed their real feeds.</p>
      </div>
    </div>
  )
}

function PhoneHeader({ p }: { p: Platform }) {
  const Icon = socialIcons[p.label]
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-ivory/95 px-4 py-3 backdrop-blur">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-maroon-900 text-white">
        <svg viewBox="0 0 40 40" width="22" height="22" aria-hidden>
          <path d="M20 34 C 10 27, 5 21, 5 14.5 C 5 9.8, 8.8 6, 13.3 6 C 16.2 6, 18.7 7.6, 20 10 C 21.3 7.6, 23.8 6, 26.7 6 C 31.2 6, 35 9.8, 35 14.5 C 35 21, 30 27, 20 34 Z" fill="#c4572a" />
          <path d="M18 12 H22 V16 H26 V20 H22 V24 H18 V20 H14 V16 H18 Z" fill="#fff" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-bold text-ink">Helping Hand Foundation</span>
        <span className="flex items-center gap-1 truncate text-[0.7rem] text-muted"><Icon size={11} aria-hidden /> {p.handle}</span>
      </span>
      <a href={p.href} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-rust px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-maroon-800">
        {p.label === 'WhatsApp' ? 'Chat' : p.label === 'YouTube' ? 'Subscribe' : 'Follow'}
      </a>
    </div>
  )
}

function Screen({ p }: { p: Platform }) {
  if (p.label === 'WhatsApp') {
    return (
      <div className="flex min-h-[480px] flex-col gap-3 bg-[#efe6d8] p-4">
        <span className="mx-auto rounded-full bg-white/70 px-3 py-1 text-[0.65rem] font-semibold text-muted">Today</span>
        <Bubble side="in">Namaste! 🙏 This is Helping Hand Foundation. How can we help you today?</Bubble>
        <Bubble side="out">I need help getting treatment at a government hospital.</Bubble>
        <Bubble side="in">Our counsellors at the help desks can guide you. You can also visit Praja Darbar, Mon–Sat, 9 AM – 5 PM.</Bubble>
        <a href={p.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#1f8f4e] px-4 py-3 text-sm font-bold text-white">
          <Send size={15} aria-hidden /> Open WhatsApp chat
        </a>
        <p className="text-center text-[0.65rem] text-muted">Example conversation — opens a real chat with {p.handle}</p>
      </div>
    )
  }
  if (p.label === 'YouTube') {
    const vids = [
      { img: heroSlides[5].src, title: 'HHF: Transforming lives, redefining charity', meta: 'Documentary' },
      { img: images.patientCare, title: 'Inside an HHF hospital help desk', meta: 'Our work' },
      { img: images.eldersWard, title: 'A day at the free Home for the Aged', meta: 'Our work' },
    ]
    return (
      <div className="space-y-4 p-3">
        {vids.map((v) => (
          <a key={v.title} href={p.href} target="_blank" rel="noreferrer" className="group block">
            <span className="relative block overflow-hidden rounded-[14px]">
              <img src={v.img} alt="" loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-black/20">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e62117] text-white"><Play size={18} className="ml-0.5 fill-white" aria-hidden /></span>
              </span>
            </span>
            <span className="mt-2 block text-sm font-bold leading-snug text-ink">{v.title}</span>
            <span className="block text-xs text-muted">{v.meta}</span>
          </a>
        ))}
      </div>
    )
  }
  if (p.label === 'Instagram') {
    const grid = [images.schoolgirls, images.dialysis, images.elderPortrait, images.helpdeskTeam, images.bhaskar, images.childCheckup, images.familyPortrait, images.ruralCamp, images.classroomGirls]
    return (
      <div>
        <div className="grid grid-cols-3 gap-4 px-4 py-4 text-center">
          {[['1M', 'lives'], ['400+', 'team'], ['20', 'centres']].map(([n, l]) => (
            <span key={l}><span className="font-display block text-xl text-maroon-900">{n}</span><span className="text-[0.65rem] text-muted">{l}</span></span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {grid.map((src) => (
            <a key={src} href={p.href} target="_blank" rel="noreferrer" className="group relative block overflow-hidden">
              <img src={src} alt="" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-maroon-950/50 opacity-0 transition-opacity group-hover:opacity-100"><Heart size={18} className="fill-white text-white" aria-hidden /></span>
            </a>
          ))}
        </div>
      </div>
    )
  }
  // Facebook, X, LinkedIn: feed posts
  const short = p.label === 'X'
  return (
    <div className="divide-y divide-line">
      {feedPosts.map((post) => (
        <article key={post.text} className="p-4">
          <p className="text-[0.82rem] leading-snug text-ink">{short ? post.text.slice(0, 110) + (post.text.length > 110 ? '…' : '') : post.text}</p>
          <img src={post.img} alt="" loading="lazy" className="mt-3 aspect-[16/10] w-full rounded-[12px] object-cover" />
          <div className="mt-3 flex items-center justify-between text-[0.7rem] font-semibold text-muted">
            <span className="flex items-center gap-4">
              {p.label === 'X' ? <><MessageCircle size={13} aria-hidden /><Repeat2 size={13} aria-hidden /><Heart size={13} aria-hidden /></> : <><ThumbsUp size={13} aria-hidden /> Like <MessageCircle size={13} aria-hidden /> Comment</>}
            </span>
            <span>{ago(post.date)}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function Bubble({ side, children }: { side: 'in' | 'out'; children: ReactNode }) {
  return (
    <p className={`max-w-[85%] rounded-[14px] px-3.5 py-2 text-[0.8rem] leading-snug shadow-sm ${side === 'in' ? 'self-start rounded-tl-[4px] bg-white text-ink' : 'self-end rounded-tr-[4px] bg-[#d9fdd3] text-ink'}`}>
      {children}
    </p>
  )
}
