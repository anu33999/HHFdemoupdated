import { Link } from 'react-router-dom'
import { ArrowUpRight, Hospital, Newspaper, Stethoscope, Droplet, Home as HomeIcon, Ambulance, MonitorSmartphone, School, Users, Eye } from 'lucide-react'
import { hospitals, images, press, publishedStats, savings, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, Eyebrow, SafeImage, SectionHeading, Underlined } from '../components/ui'
import { GrowBar, Heartbeat, Motion, SplitWords, Tilt } from '../components/motion'

const reach = [
  { icon: Stethoscope, value: '4–5 lakh', label: 'patients get free primary care each year', note: '20 community health centres' },
  { icon: Hospital, value: '1.5 lakh', label: 'patients helped at hospital help desks yearly', note: '17 government hospitals' },
  { icon: Users, value: '30–50', label: 'people walk into Praja Darbar every day', note: '1 million+ since 2007' },
  { icon: Droplet, value: '19,980', label: 'free dialysis sessions so far', note: '10-machine centre' },
  { icon: HomeIcon, value: '55 + 35', label: 'free beds for the aged, rehab & palliative care', note: 'Plus a 20-bed free rehab centre' },
  { icon: MonitorSmartphone, value: '2 lakh', label: 'students covered by 24×7 telemedicine', note: '250–300 govt residential schools' },
  { icon: Eye, value: '600', label: 'free cataract surgeries a year', note: 'For gig workers & BPL seniors' },
  { icon: School, value: '400', label: 'children at the free HHF School', note: 'Errakunta, Hyderabad' },
  { icon: Ambulance, value: '10+', label: 'ambulances & patient transport vehicles', note: 'Centres to government hospitals' },
]

const funnel = [
  { label: 'Free primary care (CHCs)', value: 100 },
  { label: 'Hospital help desks', value: 34 },
  { label: 'Praja Darbar walk-ins', value: 3 },
  { label: 'Free dialysis sessions', value: 1.2 },
]

export default function Impact() {
  useSeo('Our impact', 'How Helping Hand Foundation touched 1 million lives in 2025 — and saved poor families crores in medical costs.')
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={<>One million lives. <Underlined>One year.</Underlined></>}
        lede="In 2025, HHF’s programmes touched a million lives across Hyderabad and Telangana — and kept crores of rupees in the pockets of families who could least afford to lose it."
      />

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line md:grid-cols-3 lg:grid-cols-5">
          {publishedStats.map((s, i) => (
            <Motion key={s.label} delay={i * 80} className="bg-white p-6 md:p-7">
              <p className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-none text-maroon-800">
                <CountUp value={s.value} display={s.display} />
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </Motion>
          ))}
        </div>
        <SourceNote className="mt-3">“Achievements 2025” as published on helpinghandf.org.</SourceNote>
      </section>

      <section className="on-dark relative overflow-hidden bg-maroon-900 text-peach section-y">
        <Heartbeat className="absolute inset-x-0 top-10 h-14 w-full opacity-40" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <Eyebrow>Money saved for families</Eyebrow>
            <h2 className="display-lg mt-4 text-white"><SplitWords text="Healthcare without the financial ruin." /></h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {savings.map((s, i) => (
              <Motion key={s.value} delay={i * 110} variant="up">
                <Tilt className="h-full rounded-[20px] border border-line-dark bg-white/[0.04] p-7">
                  <p className="font-display text-shimmer text-[2.6rem] leading-none">{s.value}</p>
                  <p className="mt-4 text-peach/90">{s.label}</p>
                  <p className="mt-3 text-sm text-gold">{s.note}</p>
                </Tilt>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Reach across programmes" title="What a year at HHF looks like" lede="Each figure comes from a specific programme HHF reports on its website." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reach.map(({ icon: Icon, ...r }, i) => (
              <Motion as="li" key={r.label} delay={(i % 3) * 90} className="flex gap-5 rounded-[var(--radius-media)] bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-rust-soft text-rust"><Icon size={22} aria-hidden /></span>
                <div>
                  <p className="font-display text-3xl leading-none text-maroon-800">{r.value}</p>
                  <p className="mt-2 font-semibold text-ink">{r.label}</p>
                  <p className="mt-1 text-sm text-muted">{r.note}</p>
                </div>
              </Motion>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Motion><Eyebrow>Scale of care</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Where people reach us each year" /></h2>
            <p className="lede mt-5">Relative scale of patients reached, using the midpoint of HHF’s published yearly figures. Community health centres reach the most people; dialysis reaches the fewest — but is the most life-critical.</p>
            <ul className="mt-10 space-y-6">
              {funnel.map((f) => (
                <li key={f.label}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{f.label}</span>
                    <span className="text-maroon-800">{f.value >= 3 ? `${f.value}%` : `${f.value}%`}</span>
                  </div>
                  <GrowBar value={Math.max(f.value, 1.5)} className="mt-2 h-3" label={`${f.label}: ${f.value}% relative to primary care`} />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Indexed to free primary care = 100%. Derived from published figures; for illustration of scale.</p>
          </div>
          <Motion variant="clip">
            <SafeImage src={images.chc} alt="Patients at an HHF community health centre" className="aspect-[4/5]" />
          </Motion>
        </div>
      </section>

      <section className="on-dark bg-maroon-950 text-peach section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Help-desk network</Eyebrow>
              <h2 className="display-lg mt-4 text-white">17 government hospitals</h2>
            </div>
            <ButtonLink to="/programs/hospital-help-desks" variant="light" size="sm">About help desks</ButtonLink>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {hospitals.map((h, i) => (
              <Motion as="li" key={h} variant="fade" delay={i * 40} className="flex items-center gap-3 border-b border-line-dark py-3 text-peach/90">
                <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-gold text-gold" /> {h}
              </Motion>
            ))}
          </ul>
          <p className="mt-4 text-xs text-peach/50">Hospitals named on helpinghandf.org.</p>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Independent coverage" title="What the press has reported" />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {press.map((p, i) => (
            <Motion as="li" key={p.href} delay={(i % 3) * 90}>
              <a href={p.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(76_22_11/0.45)]">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rust"><Newspaper size={14} aria-hidden /> {p.outlet}</span>
                <span className="font-display mt-3 flex-1 text-lg leading-snug">{p.title}</span>
                <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800">Read <ArrowUpRight size={14} aria-hidden /></span>
              </a>
            </Motion>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => (
            <Motion key={s.slug} delay={i * 90}>
              <Link to={`/stories/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-media)] bg-peach/60 p-7 transition-colors hover:bg-peach">
                <span className="font-display text-5xl leading-none text-gold">“</span>
                <h3 className="display-sm mt-2">{s.title}</h3>
                <span className="link-arrow mt-6 self-start">Read the story <ArrowUpRight size={16} aria-hidden /></span>
              </Link>
            </Motion>
          ))}
        </div>
      </section>

      <CtaBand title="Help us reach the next million." />
    </>
  )
}
