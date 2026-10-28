import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Download, FileCheck2, Landmark, Plus, ShieldCheck, Users } from 'lucide-react'
import { causes, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import DonationWidget from '../components/DonationWidget'
import { ButtonLink, DemoTag, Eyebrow, Underlined } from '../components/ui'
import { Carousel, Motion, Particles, SplitWords, Tilt } from '../components/motion'

const faqs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes. Donations to HHF can be claimed under Section 80G when made by cheque, demand draft or online transfer. Cash qualifies only for donations below ₹2,000.' },
  { q: 'Do in-kind donations qualify for 80G?', a: 'No. Contributions in kind — food, materials, clothes, medicines — do not qualify under Section 80G, though they are always welcome.' },
  { q: 'Can I choose which cause I support?', a: 'Yes. Pick a cause in the form, or leave it as “where it’s needed most” so HHF can direct it to the most urgent need.' },
  { q: 'How do I know my money is used well?', a: 'HHF publishes annual performance reports and audited financial reports every year.' },
]

export default function Donate() {
  useSeo('Donate', 'Support free dialysis, hospital help desks, community clinics and a free school. Donations to Helping Hand Foundation qualify under Section 80G.')
  const [params] = useSearchParams()
  const purpose = params.get('purpose') ?? undefined
  const frequency = params.get('frequency') === 'monthly' ? 'monthly' : 'one-time'

  return (
    <>
      {/* Hero + form, fitted to one screen */}
      <section id="donation-form" className="on-dark relative scroll-mt-20 overflow-hidden bg-maroon-900 text-peach">
        <Particles className="opacity-50" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path d="M760 0 C 980 160, 1020 420, 1440 360 L 1440 0 Z" fill="var(--color-maroon-800)" />
        </svg>
        <div className="container-x relative grid items-center gap-10 pb-12 pt-28 md:pt-36 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-14 lg:pb-14">
          <div>
            <Eyebrow>Donate to HHF</Eyebrow>
            <h1 className="display-lg mt-4 text-white">
              <SplitWords text="Quality healthcare," /> <Underlined>without the burden.</Underlined>
            </h1>
            <p className="lede mt-5 max-w-xl">Your gift becomes free dialysis, counsellors inside government hospitals, community clinics and a free school — for families who would otherwise go without.</p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {[
                ['Free dialysis', '19,980 free sessions so far'],
                ['Hospital help desks', '1.5 lakh patients helped a year'],
                ['Community clinics', '20 centres in urban slums'],
                ['Education', '₹15,000 = a child’s school year'],
              ].map(([t, d], i) => (
                <Motion as="li" key={t} variant="left" delay={i * 80} className="flex gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                  <span><span className="block font-bold text-white">{t}</span><span className="text-sm text-peach/70">{d}</span></span>
                </Motion>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-line-dark bg-white/5 px-3 py-1.5 text-xs font-semibold"><FileCheck2 size={14} className="text-gold" aria-hidden /> 80G tax exemption</span>
              <span className="flex items-center gap-1.5 rounded-full border border-line-dark bg-white/5 px-3 py-1.5 text-xs font-semibold"><ShieldCheck size={14} className="text-gold" aria-hidden /> Audited every year</span>
            </div>
          </div>

          <Motion variant="scale" className="rounded-[22px] bg-ivory p-5 text-ink shadow-[0_40px_80px_-40px_rgb(0_0_0/0.7)] sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-[1.5rem] text-maroon-900">Make your gift</h2>
              <DemoTag>Simulated</DemoTag>
            </div>
            <DonationWidget initialPurpose={purpose} initialFrequency={frequency} />
          </Motion>
        </div>
      </section>

      {/* Causes carousel */}
      <section id="causes" className="container-x scroll-mt-20 py-14 md:py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Donate for a cause</Eyebrow>
            <h2 className="display-md mt-3">Six causes that need you now.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted">Pick one and the form above will direct your gift there.</p>
        </div>
        <div className="mt-8">
          <Carousel label="Causes">
            {causes.map((c) => (
              <div key={c.title} className="w-[78%] shrink-0 snap-start sm:w-[42%] lg:w-[23.5%]">
                <Tilt className="group h-full overflow-hidden rounded-[18px] border border-line bg-white">
                  <span className="pan block overflow-hidden"><img src={c.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></span>
                  <div className="flex flex-col p-4">
                    <h3 className="font-display text-lg leading-snug">{c.title}</h3>
                    <p className="mt-1 text-xs font-bold text-rust">{c.cost}</p>
                    <ButtonLink to={`/donate?purpose=${encodeURIComponent(c.purpose)}#donation-form`} variant="secondary" size="sm" icon="arrow" className="mt-3 self-start">
                      Give to this
                    </ButtonLink>
                  </div>
                </Tilt>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Other ways + FAQ, in one compact band */}
      <section className="border-t border-line bg-sand/45 py-14 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Eyebrow>Other ways to give</Eyebrow>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[16px] bg-ivory p-5">
                <Landmark size={22} className="text-rust" strokeWidth={1.8} aria-hidden />
                <h3 className="font-display mt-3 text-lg">Bank transfer</h3>
                <dl className="mt-2 space-y-0.5 text-xs">
                  <div className="flex justify-between gap-2"><dt className="text-muted">Bank</dt><dd className="font-semibold">{org.bank.name}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted">A/C</dt><dd className="font-mono">{org.bank.account}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted">IFSC</dt><dd className="font-mono">{org.bank.ifsc}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted">PAN</dt><dd className="font-mono">{org.bank.pan}</dd></div>
                </dl>
                <p className="mt-2 text-[0.65rem] text-muted">{org.bank.branch} · as published by HHF</p>
              </div>
              <div className="flex flex-col rounded-[16px] bg-ivory p-5">
                <Users size={22} className="text-rust" strokeWidth={1.8} aria-hidden />
                <h3 className="font-display mt-3 text-lg">Donor circle</h3>
                <p className="mt-1 flex-1 text-xs text-muted">₹1,000 a month supports ~200 families whose earner has fallen ill.</p>
                <ButtonLink to="/donate?frequency=monthly&purpose=Relief%20%26%20livelihoods#donation-form" variant="secondary" size="sm" icon="arrow" className="mt-3 self-start">Give monthly</ButtonLink>
              </div>
              <div className="flex flex-col rounded-[16px] bg-ivory p-5">
                <Download size={22} className="text-rust" strokeWidth={1.8} aria-hidden />
                <h3 className="font-display mt-3 text-lg">Reports</h3>
                <p className="mt-1 flex-1 text-xs text-muted">Annual performance and audited financial reports, 2024–2025.</p>
                <ButtonLink to="/transparency" variant="secondary" size="sm" icon="arrow" className="mt-3 self-start">View</ButtonLink>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>Questions</Eyebrow>
            <div className="mt-5 divide-y divide-maroon-900/15 border-y border-maroon-900/15">
              {faqs.map((f) => (
                <details key={f.q} className="group py-3.5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-maroon-900/20 text-maroon-800 transition-transform duration-300 group-open:rotate-45">
                      <Plus size={15} aria-hidden />
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
