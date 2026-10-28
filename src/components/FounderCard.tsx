import { useRef, useState, type PointerEvent } from 'react'
import { Award, Briefcase, HeartPulse, RotateCw, Users } from 'lucide-react'
import { images, org } from '../data/site'
import { reducedMotion } from './motion'

const facts = [
  { icon: Briefcase, title: 'Infosys → humanity', text: 'Left a soaring career as a mechanical engineer at Infosys Technologies.' },
  { icon: HeartPulse, title: 'Founded HHF in 2007', text: 'With Hyderabad IT professionals, to make healthcare affordable for all.' },
  { icon: Users, title: '5,000+ people a day', text: 'Reached by HHF’s ecosystem of programmes today.' },
  { icon: Award, title: 'Distinguished Citizen', text: 'Rotary Club of Hyderabad award, 2016.' },
]

/**
 * Founder photo as a 3D card: it tilts toward the cursor with a moving glare,
 * and flips on click / tap / Enter to reveal his story on the back.
 */
export default function FounderCard({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [flipped, setFlipped] = useState(false)

  const onMove = (e: PointerEvent) => {
    if (reducedMotion() || e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const reset = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <div className={`founder-card relative ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      <div ref={ref} className="founder-tilt relative aspect-[1/0.95]">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? 'Show founder photo' : `Flip to read about founder ${org.founder}`}
          className={`founder-flip relative block h-full w-full text-left ${flipped ? 'is-flipped' : ''}`}
        >
          {/* Front */}
          <span className="founder-face absolute inset-0 overflow-hidden rounded-[22px] bg-maroon-900 shadow-[0_40px_80px_-40px_rgb(54_16_10/0.8)]">
            <img src={images.founder} alt="Founder Mujtaba Hasan Askari (centre) receiving an award for COVID-19 relief work" className="h-full w-full object-cover" />
            <span aria-hidden className="founder-glare absolute inset-0" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-transparent p-5 pt-16 text-peach">
              <span>
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">Founder & Trustee</span>
                <span className="font-display block text-2xl leading-tight text-white">{org.founder}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur">
                <RotateCw size={13} aria-hidden /> Tap to flip
              </span>
            </span>
          </span>

          {/* Back */}
          <span className="founder-face founder-back on-dark absolute inset-0 flex flex-col overflow-hidden rounded-[22px] bg-maroon-900 p-6 text-peach shadow-[0_40px_80px_-40px_rgb(54_16_10/0.8)] sm:p-8">
            <span aria-hidden className="founder-glare absolute inset-0" />
            <span className="relative text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">The founder’s journey</span>
            <span className="font-display relative mt-2 text-[1.7rem] leading-tight text-white sm:text-3xl">“He saw their pain, and accepted it as his.”</span>
            <span className="relative mt-5 grid flex-1 content-center gap-3 sm:grid-cols-2">
              {facts.map(({ icon: Icon, title, text }) => (
                <span key={title} className="flex gap-3 rounded-[14px] bg-white/[0.06] p-3 ring-1 ring-line-dark">
                  <Icon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                  <span>
                    <span className="block text-sm font-bold text-white">{title}</span>
                    <span className="block text-xs leading-snug text-peach/75">{text}</span>
                  </span>
                </span>
              ))}
            </span>
            <span className="relative mt-4 flex items-center gap-1.5 self-end text-xs font-bold text-gold">
              <RotateCw size={13} aria-hidden /> Tap to flip back
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
