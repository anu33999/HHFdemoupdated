import { Target, Eye, Globe2 } from 'lucide-react'
import { advisors, board, images, org, publishedStats, recognitions, staff, values } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, Eyebrow, SectionHeading, Underlined } from '../components/ui'
import { Motion, SplitWords, Tilt } from '../components/motion'
import FounderCard from '../components/FounderCard'

const timeline = [
  { year: '2007', text: 'Mujtaba Hasan Askari leaves Infosys and, with Hyderabad IT professionals, founds HHF — starting with medical camps and financial aid for critically ill patients. Praja Darbar opens its doors.' },
  { year: '2010s', text: 'Help desks open inside state-run hospitals, linking poor patients to free government treatment. In 2017 they are linked through a WhatsApp patient-care portal.' },
  { year: '2016', text: 'The Rotary Club of Hyderabad honours the founder with its Distinguished Citizen Award.' },
  { year: '2018', text: 'A community health centre opens with Masjid-e-Ishaq in Nawab Sahab Kunta — serving slum dwellers of every faith. More centres follow.' },
  { year: '2021', text: 'COVID-19 help desks at TIMS, Gandhi and other government hospitals guide families through admissions, tests and grief.' },
  { year: '2022', text: 'A free 55-bed home for the aged and destitute opens.' },
  { year: '2024', text: 'The free HHF School opens in Errakunta for children of migrant families. MoU with Apollo AIMSR.' },
  { year: '2025–26', text: 'MoU with NIMS for six help desks; free cataract surgeries for gig workers; the city’s first free rehab centre opens with HHF as operations partner.' },
]

const initials = (n: string) =>
  n.replace(/^(Dr\.|Prof\.|Mr\.)\s*/, '').split(' ').filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('')

export default function About() {
  useSeo('About us', `Founded in ${org.founded} by ${org.founder}, Helping Hand Foundation bridges health inequity for Hyderabad’s most vulnerable.`)
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={<>A beginning well made, <Underlined>now needs more hands.</Underlined></>}
        lede="Helping Hand Foundation works tirelessly with the weaker sections of society to bridge health inequity — making good healthcare accessible and affordable for all."
        image={images.helpdeskTeam}
        imageAlt="HHF help desk counsellors at a government hospital"
      />

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Motion><Eyebrow>Our story</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Started by IT professionals. Powered by compassion." /></h2>
          </div>
          <Motion delay={150} className="space-y-5 text-[1.05rem] text-muted">
            <p>HHF was launched by a like-minded team of Hyderabad-based IT professionals with one aim: to make healthcare accessible and affordable for the disadvantaged.</p>
            <p>What began as medical camps and financial aid for critically ill patients has grown into an ecosystem of community health centres, hospital help desks, a free dialysis centre, elder and rehab care, telemedicine and a free school.</p>
            <p>“One of my main jobs,” says founder Mujtaba Hasan Askari, “is to explain the situation to poor patients and move them from private hospitals that overcharge to government hospitals.”</p>
          </Motion>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line md:grid-cols-3 lg:grid-cols-5">
          {publishedStats.map((s, i) => (
            <Motion key={s.label} delay={i * 80} className="bg-ivory p-6 md:p-7">
              <p className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-none text-maroon-800">
                <CountUp value={s.value} display={s.display} />
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </Motion>
          ))}
        </div>
        <SourceNote className="mt-3">2025 figures as published on helpinghandf.org — to be verified before launch.</SourceNote>
      </section>

      <section className="bg-peach/55 section-y">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, label: 'Vision', text: 'To be an organisation that everyone — from service-seekers to service-enablers — trusts, admires and approaches for access to health care systems that provide quality care and cause no financial hardship to the marginalised.' },
              { icon: Target, label: 'Mission', text: 'To help the common man access good-quality healthcare at the most affordable cost; to work with the best enablers of social, healthcare and economic service; and to uplift the standard of healthcare and quality of life of the vulnerable.' },
              { icon: Globe2, label: 'SDG 3', text: 'HHF’s work aligns with the UN Sustainable Development Goal 3 — ensure healthy lives and promote well-being for all at all ages, including universal health coverage.' },
            ].map(({ icon: Icon, label, text }, i) => (
              <Motion key={label} delay={i * 120}>
                <Tilt className="h-full rounded-[22px] bg-ivory p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-rust text-white"><Icon size={22} aria-hidden /></span>
                  <p className="eyebrow mt-6">{label}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-ink">{text}</p>
                </Tilt>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Motion variant="scale">
            <FounderCard />
          </Motion>
          <div>
            <Motion><Eyebrow>Our founder</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Mujtaba Hasan Askari" /></h2>
            <Motion delay={150} className="mt-6 space-y-5 text-[1.05rem] text-muted">
              <p>A mechanical engineer who soared in his career at Infosys Technologies, Mujtaba Askari chose — at the pinnacle of that career — to leave the corporate world and dedicate his life to humanity.</p>
              <p>In 2007 he founded HHF. Today its programmes reach 5,000+ people every day, and HHF has become an integral part of Hyderabad’s community fabric. He has also partnered with Chilkur Balaji temple’s head priest to promote interfaith dialogue in the city.</p>
            </Motion>
            <Motion delay={250}>
              <blockquote className="font-display mt-8 border-l-2 border-gold pl-6 text-[1.4rem] leading-snug text-ink">“He saw their pain, and accepted them as his.”</blockquote>
            </Motion>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <SectionHeading eyebrow="What makes HHF different" title="The values behind every patient we meet" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Motion key={v.title} delay={i * 90} className="border-t-2 border-maroon-800 pt-6">
              <span className="font-display text-sm text-rust">0{i + 1}</span>
              <h3 className="display-sm mt-2">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </Motion>
          ))}
        </div>
      </section>

      <section className="on-dark bg-maroon-900 text-peach section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Nearly two decades of care.</h2>
            <p className="lede mt-5">From medical camps to an ecosystem that reaches a million lives a year.</p>
          </div>
          <ol className="relative border-l border-line-dark">
            {timeline.map((t, i) => (
              <Motion as="li" key={t.year} variant="left" delay={i * 60} className="relative pb-10 pl-9 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-maroon-900" />
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <p className="mt-2 max-w-xl text-peach/85">{t.text}</p>
              </Motion>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="Recognition" title="Honours along the way" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recognitions.map((r, i) => (
            <Motion as="li" key={r.title} delay={i * 90}>
              <Tilt className="h-full rounded-[20px] border border-line bg-white p-6">
                <p className="font-display text-2xl text-rust">{r.year}</p>
                <p className="font-display mt-3 text-xl leading-tight">{r.title}</p>
                <p className="mt-2 text-sm text-muted">{r.by}</p>
              </Tilt>
            </Motion>
          ))}
        </ul>
      </section>

      <section className="bg-sand/55 section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Our people" title="Trustees, advisors & team" lede="Healthcare professionals, dieticians, counsellors and compassionate volunteers — united by one mission." />
          <PeopleGrid title="Board of trustees" people={board} cols="lg:grid-cols-4" />
          <PeopleGrid title="Advisory council" people={advisors} cols="lg:grid-cols-4" />
          <PeopleGrid title="Key staff" people={staff} cols="lg:grid-cols-3" />
          <p className="mt-8 text-sm text-muted">Names and roles as published on helpinghandf.org. Photos can be added with consent.</p>
          <div className="mt-8"><ButtonLink to="/get-involved" variant="secondary" icon="arrow">Join the team</ButtonLink></div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}

function PeopleGrid({ title, people, cols }: { title: string; people: { name: string; role: string }[]; cols: string }) {
  return (
    <>
      <h3 className="mt-12 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">{title}</h3>
      <ul className={`mt-5 grid gap-4 sm:grid-cols-2 ${cols}`}>
        {people.map((p, i) => (
          <Motion as="li" key={p.name} variant="scale" delay={i * 50} className="flex items-center gap-4 rounded-[var(--radius-media)] bg-ivory p-5">
            <div aria-hidden className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-peach text-maroon-700">{initials(p.name)}</div>
            <div>
              <p className="font-display text-lg leading-tight">{p.name}</p>
              <p className="text-sm font-bold text-rust">{p.role}</p>
            </div>
          </Motion>
        ))}
      </ul>
    </>
  )
}
