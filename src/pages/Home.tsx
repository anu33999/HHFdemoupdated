import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight, Play, Quote, Droplet, Users, Building2, HandHeart, GraduationCap, Stethoscope,
  Activity, HeartPulse, ShieldCheck, Newspaper, Award, Plus, Hospital, Wallet, Coins, Microscope, Ambulance, BedDouble, Accessibility, Bone,
} from 'lucide-react'
import { achievements2025, causes, formatDate, heroSlides, hospitals, images, org, partnerLogos, pillars, press, services, stories, inclusivity } from '../data/site'
import { useSeo } from '../lib/useSeo'
import DonationWidget from '../components/DonationWidget'
import Dialog from '../components/Dialog'
import { SocialIcons, SocialRail } from '../components/Social'
import SocialPhone from '../components/SocialPhone'
import { ButtonLink, DemoTag, Eyebrow, SectionHeading, TextLink, Underlined } from '../components/ui'
import { AnimatedNumber, Carousel, CyclingImages, GrowBar, Heartbeat, Marquee, Motion, Particles, PointerParallax, SplitWords, Tilt } from '../components/motion'
import Newsletter from '../components/Newsletter'
import PhotoDeck from '../components/PhotoDeck'
import FounderCard from '../components/FounderCard'

export default function Home() {
  useSeo('', 'Helping Hand Foundation (HHF) bridges health inequity in Hyderabad — 20 free community health centres, help desks in 17 government hospitals, free dialysis, elder care and a free school.')
  return (
    <>
      <SocialRail />
      <Hero />
      <ServicesRibbon />
      <Achievements />
      <Founder />
      <OurServices />
      <Faces />
      <StoriesAndFilm />
      <Causes />
      <HospitalsBand />
      <GetInvolved />
      <DonateSection />
      <NewsAndUpdates />
      <FollowUs />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  const [video, setVideo] = useState(false)
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <PointerParallax className="relative">
        <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path d="M640 900 C 760 640, 820 420, 1040 300 C 1210 205, 1330 120, 1440 40 L 1440 900 Z" fill="var(--color-maroon-800)" />
        </svg>
        <Particles />

        <div className="container-x relative grid items-center gap-14 pb-28 pt-32 md:pt-44 lg:min-h-[min(100svh,960px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-36">
          <div className="max-w-[620px]">
            <p className="font-script animate-fade-in text-[1.7rem] text-gold">A hand of help to all — since 2007</p>
            <h1 className="display-xl mt-4 text-white lg:text-[clamp(2.6rem,4.3vw,4.3rem)]">
              <SplitWords text="Bringing good health within reach of" />{' '}
              <span className="inline-block animate-fade-in [animation-delay:700ms]">
                <Underlined>every family.</Underlined>
              </span>
            </h1>
            <p className="lede mt-7 max-w-[540px] animate-fade-in [animation-delay:500ms]">
              Uplifting individuals through healthcare and education. Helping Hand Foundation bridges health inequity in Hyderabad — free community clinics, counsellors inside government hospitals, free dialysis, elder care and a free school.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
              <button type="button" onClick={() => setVideo(true)} className="group flex items-center gap-3 rounded-[var(--radius-ui)] px-2 py-2 text-left font-semibold text-white">
                <span className="live-dot grid h-12 w-12 place-items-center rounded-full bg-white text-maroon-900 transition-transform group-hover:scale-105">
                  <Play size={18} className="ml-0.5 fill-maroon-900 text-maroon-900" aria-hidden />
                </span>
                <span>
                  Watch the HHF documentary
                  <span className="block text-xs font-medium text-peach/65">“Transforming lives, redefining charity”</span>
                </span>
              </button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {['Free dialysis', '20 health centres', '17 hospital help desks', 'Free school'].map((t, k) => (
                <li key={t} className="animate-rise-in rounded-full border border-peach/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-peach/85" style={{ animationDelay: `${900 + k * 90}ms` }}>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in [animation-delay:1200ms]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Follow us</span>
              <SocialIcons size={18} itemClassName="h-10 w-10 rounded-full border border-peach/25 bg-white/5 text-peach hover:border-gold hover:bg-gold hover:text-maroon-950" />
              <span className="text-xs text-peach/55">@HelpingHandHyd</span>
            </div>
          </div>

          {/* Swipeable deck of the helpinghandf.org banner photos */}
          <div className="relative mx-auto w-full max-w-[600px] lg:mr-0">
            <PhotoDeck slides={heroSlides} />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="animate-rise-in rounded-[16px] bg-ivory px-4 py-3.5 text-ink shadow-[0_20px_40px_-24px_rgb(0_0_0/0.6)] [animation-delay:900ms]">
                <p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
                  <span className="live-dot h-2 w-2 rounded-full bg-rust text-rust" /> Achievements 2025
                </p>
                <p className="font-display mt-1 text-[clamp(1.5rem,2.6vw,2rem)] leading-none text-maroon-900">₹103.66 Cr</p>
                <p className="text-xs font-semibold text-muted">saved for poor families</p>
              </div>
              <div className="animate-rise-in rounded-[16px] bg-maroon-950/80 px-4 py-3.5 text-peach ring-1 ring-gold/30 backdrop-blur [animation-delay:1050ms]">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">This year</p>
                <p className="font-display text-shimmer mt-1 text-[clamp(1.5rem,2.6vw,2rem)] leading-none">1 Million</p>
                <p className="text-xs font-semibold text-peach/70">lives touched</p>
              </div>
            </div>
          </div>
        </div>

        <Heartbeat className="absolute inset-x-0 bottom-6 h-16 w-full opacity-90" />
      </PointerParallax>

      <Dialog open={video} onClose={() => setVideo(false)} title="HHF: Transforming lives, redefining charity" size="lg">
        <div className="aspect-video overflow-hidden rounded-[12px] bg-black">
          {video && (
            <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/NqBbKxthMcc?autoplay=1&rel=0" title="HHF documentary" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          )}
        </div>
        <p className="mt-3 text-sm text-muted">Documentary as linked from helpinghandf.org.</p>
      </Dialog>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ServicesRibbon() {
  const items = ['Free dialysis', 'Hospital help desks', 'Community health centres', 'Home for the aged', 'Free HHF School', '24×7 telemedicine', 'Praja Darbar', 'Ambulances', 'Free cataract surgery', 'Rehab & palliative care']
  return (
    <div className="relative z-10 -mt-px bg-rust py-4 text-white">
      <Marquee speed={45}>
        {items.map((t) => (
          <span key={t} className="font-display mx-6 flex items-center gap-6 whitespace-nowrap text-xl">
            {t}
            <Plus size={16} className="text-gold" strokeWidth={3} aria-hidden />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Founder() {
  return (
    <section className="container-x section-y">
      <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="blob-b absolute inset-[6%_-3%_-2%_8%] bg-gold-soft" />
          <Motion variant="scale">
            <FounderCard />
          </Motion>
          <p className="font-script absolute -top-9 left-2 rotate-[-4deg] text-[1.8rem] text-rust">our founder ♥</p>
        </div>

        <div>
          <Motion><Eyebrow>Who we are</Eyebrow></Motion>
          <h2 className="display-lg mt-4">
            <SplitWords text="He saw their pain," />{' '}
            <em className="font-display italic text-rust"><SplitWords text="and accepted it as his." delay={300} /></em>
          </h2>
          <Motion delay={150} className="mt-7 space-y-5 text-[1.05rem] text-muted">
            <p>
              Mujtaba Hasan Askari, a mechanical engineer, was soaring in his career at Infosys Technologies when he chose to leave the corporate world. In 2007, with a team of Hyderabad-based IT professionals, he founded Helping Hand Foundation.
            </p>
            <p>
              Nearly two decades later, HHF is synonymous with “healthcare and care for all” in Hyderabad — a lifeline for families facing medical emergencies, now helping 5,000+ people every day.
            </p>
          </Motion>
          <Motion delay={250} className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">An equal-opportunity health NGO, serving</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {inclusivity.map((t, i) => (
                <Motion as="li" key={t} variant="scale" delay={300 + i * 60} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink">
                  {t}
                </Motion>
              ))}
            </ul>
          </Motion>
          <Motion delay={350} className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink to="/about" variant="secondary" icon="arrow">Our story</ButtonLink>
            <span className="flex items-center gap-2 text-sm font-semibold text-muted"><Award size={16} className="text-rust" aria-hidden /> Rotary Distinguished Citizen Award, 2016</span>
          </Motion>
        </div>
      </div>
      <ol className="mt-16 grid gap-px overflow-hidden rounded-[22px] bg-line md:grid-cols-3">
        {pillars.map((p, k) => (
          <Motion as="li" key={p.title} delay={k * 100} className="bg-peach/50 p-6 sm:p-7">
            <p className="flex items-baseline gap-3"><span className="font-display text-2xl text-rust">{['I.', 'II.', 'III.'][k]}</span><span className="font-display text-xl text-ink">{p.title}</span></p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{p.text}</p>
          </Motion>
        ))}
      </ol>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Causes() {
  return (
    <section className="container-x section-y">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Motion><p className="font-script text-[1.7rem] text-rust">Donate for a cause</p></Motion>
          <h2 className="display-lg mt-1"><SplitWords text="Choose where your kindness goes." /></h2>
        </div>
        <DemoTag>Progress bars are sample data</DemoTag>
      </div>
      <div className="mt-10"><Carousel label="Causes to support">
        {causes.map((c) => (
          <div key={c.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
            <Tilt className="group h-full overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_50px_-36px_rgb(76_22_11/0.45)]">
              <div className="pan relative overflow-hidden">
                <img src={c.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-maroon-900/85 px-3 py-1 text-xs font-bold text-peach backdrop-blur">{c.cost}</span>
              </div>
              <div className="p-6">
                <h3 className="display-sm">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                <div className="mt-5 flex justify-between text-sm font-bold">
                  <span className="text-maroon-800">{c.raised}% of goal</span>
                  <span className="text-muted">Sample</span>
                </div>
                <GrowBar value={c.raised} className="mt-2" label={`${c.title}: ${c.raised}% (sample)`} />
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <ButtonLink to={`/donate?purpose=${encodeURIComponent(c.purpose)}`} variant="primary" size="sm">Donate</ButtonLink>
                  <TextLink to="/programs">Learn more</TextLink>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </Carousel></div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function HospitalsBand() {
  return (
    <section className="border-y border-line bg-white/60 py-14">
      <div className="container-x mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="display-sm max-w-xl">HHF counsellors are on the ground in government hospitals across Telangana</h2>
        <TextLink to="/programs/hospital-help-desks">How help desks work</TextLink>
      </div>
      <Marquee speed={55}>
        {hospitals.map((h) => (
          <span key={h} className="mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-ivory px-5 py-2.5 text-sm font-semibold text-ink">
            <Hospital size={16} className="text-rust" aria-hidden /> {h}
          </span>
        ))}
      </Marquee>
      <div className="container-x mt-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">Our granters & partners</p>
      </div>
      <Marquee speed={50} reverse className="mt-6">
        {partnerLogos.map((p) => (
          <span key={p.src} className="mx-3 grid h-24 w-40 place-items-center rounded-[14px] border border-line bg-white p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_-20px_rgb(76_22_11/0.5)]">
            <img src={p.src} alt={p.name} title={p.name} loading="lazy" className="max-h-full max-w-full object-contain mix-blend-multiply" />
          </span>
        ))}
      </Marquee>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function GetInvolved() {
  const ways = [
    { icon: Users, title: 'Volunteer', text: 'Support patients at help desks, health camps and the home for the aged.', cta: 'Volunteer', to: '/get-involved#volunteer', external: false },
    { icon: GraduationCap, title: 'Intern with us', text: 'Social-work students gain hands-on experience in public health.', cta: 'Apply', to: '/get-involved#volunteer', external: false },
    { icon: Droplet, title: 'Donate blood', text: 'Register with HHF’s blood bank and be there in an emergency.', cta: 'Register', to: org.bloodDonorHref, external: true },
    { icon: Building2, title: 'Collaborate', text: 'Hospitals, companies and foundations: partner for chance, choice and change.', cta: 'Partner', to: '/get-involved#partner', external: false },
  ]
  return (
    <section className="bg-gold-soft/45 section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Join us" title={<>A beginning well made, <em className="italic text-maroon-700">now needs more hands.</em></>} lede="Give your time, your skills, your blood or your organisation’s support." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, ...w }, i) => (
            <Motion key={w.title} delay={i * 90}>
              <Tilt className="group flex h-full flex-col rounded-[20px] bg-ivory p-7">
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-rust-soft text-rust transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-rust group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="display-sm mt-6">{w.title}</h3>
                <p className="mt-2 flex-1 text-muted">{w.text}</p>
                <ButtonLink to={w.to} variant={i === 2 ? 'primary' : 'secondary'} size="sm" icon={w.external ? 'up-right' : 'arrow'} className="mt-6 self-start">
                  {w.cta}
                </ButtonLink>
              </Tilt>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function DonateSection() {
  return (
    <section id="donate" className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <Particles className="opacity-60" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L 620 0 C 520 260, 420 560, 0 760 Z" fill="var(--color-maroon-800)" />
      </svg>
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <div>
          <Motion><Eyebrow>Give today</Eyebrow></Motion>
          <h2 className="display-lg mt-4 text-white">
            <SplitWords text="Lend us a hand" /> <Underlined>to lend a hand.</Underlined>
          </h2>
          <Motion delay={150}><p className="lede mt-6 max-w-lg">Your donation funds dialysis, counsellors in hospitals, community clinics and a free school — for families who would otherwise go without.</p></Motion>
          <ul className="mt-10 space-y-4">
            {[
              [Droplet, 'A dialysis session for a patient who can’t pay'],
              [GraduationCap, '₹15,000 sends a child to the HHF School for a year'],
              [Activity, 'Help-desk counsellors who turn panic into a plan'],
              [HandHeart, 'Rent and rations when a family’s earner falls ill'],
            ].map(([Icon, t], i) => {
              const I = Icon as typeof Droplet
              return (
                <Motion as="li" key={t as string} variant="left" delay={200 + i * 100} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold"><I size={20} aria-hidden /></span>
                  <span className="text-peach/90">{t as string}</span>
                </Motion>
              )
            })}
          </ul>
          <Motion delay={600} className="mt-10 flex items-center gap-3 text-sm text-peach/70">
            <ShieldCheck size={18} className="text-gold" aria-hidden /> Donations qualify for deduction under Section 80G.
          </Motion>
        </div>
        <Motion variant="scale" delay={150} className="rounded-[22px] border border-line-dark bg-maroon-950/50 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-white">Make a gift</h3>
            <DemoTag>Simulated</DemoTag>
          </div>
          <DonationWidget tone="dark" />
        </Motion>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function FollowUs() {
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-950 text-peach section-y">
      <Particles className="opacity-40" />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Motion><Eyebrow>Follow HHF</Eyebrow></Motion>
            <h2 className="display-lg mt-4 text-white"><SplitWords text="Follow the work, every day." /></h2>
          </div>
          <Motion delay={150} className="rounded-[20px] bg-white/[0.05] p-5 ring-1 ring-line-dark sm:p-6">
            <p className="text-sm font-bold text-white">Join our newsletter</p>
            <p className="mb-4 mt-1 text-sm text-peach/70">Patient stories, new centres and ways to help. Tag <strong className="text-gold">@HelpingHandHyd</strong> to spread the word.</p>
            <Newsletter tone="dark" compact />
          </Motion>
        </div>
        <div className="mt-14">
          <SocialPhone />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

const achIcons: Record<string, typeof Droplet> = {
  wallet: Wallet, coins: Coins, heart: HeartPulse, hand: HandHeart, user: Users, hospital: Hospital, clinic: Stethoscope, lab: Microscope,
  droplet: Droplet, ambulance: Ambulance, surgery: Activity, bed: BedDouble, family: Users, elder: Accessibility, bone: Bone,
}

function Achievements() {
  const [lead, ...rest] = achievements2025
  return (
    <section aria-labelledby="ach-title" className="on-dark relative overflow-hidden bg-maroon-950 text-peach section-y">
      <Particles className="opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Motion><Eyebrow>Achievements · 2025</Eyebrow></Motion>
            <h2 id="ach-title" className="display-lg mt-4 text-white"><SplitWords text="Together, we can make a difference!" /></h2>
          </div>
          <Motion delay={150}>
            <p className="lede">Touched 1 million lives this year through our various initiatives. Every number below is a person, a family or a bill that didn’t have to be paid.</p>
          </Motion>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Motion as="li" variant="scale" className="relative col-span-2 overflow-hidden rounded-[24px] bg-rust p-7 text-white sm:col-span-3 lg:col-span-2 lg:row-span-2 sm:p-8">
            <Heartbeat className="absolute inset-x-0 top-5 h-12 w-full opacity-50" stroke="#fff" />
            <Wallet size={28} className="relative mt-10" aria-hidden />
            <p className="font-display relative mt-5 text-[clamp(2.6rem,5vw,3.8rem)] leading-none">
              <AnimatedNumber value={lead.value} decimals={lead.decimals} prefix={lead.prefix} suffix={lead.suffix} />
            </p>
            <p className="relative mt-3 text-lg font-semibold">{lead.label}</p>
            <p className="relative mt-2 text-sm text-white/80">HHF’s biggest achievement of 2025 — money that stayed with families who could least afford to lose it.</p>
          </Motion>
          {rest.map((a, k) => {
            const Icon = achIcons[a.icon] ?? HeartPulse
            return (
              <Motion as="li" key={a.label} variant="up" delay={(k % 8) * 60}>
                <Tilt className="h-full rounded-[18px] bg-white/[0.05] p-4 ring-1 ring-line-dark transition-colors hover:bg-white/[0.09] sm:p-5">
                  <Icon size={20} className="text-gold" strokeWidth={1.8} aria-hidden />
                  <p className="font-display mt-3 text-[1.55rem] leading-none text-white">
                    <AnimatedNumber value={a.value} decimals={a.decimals} prefix={a.prefix} suffix={a.suffix} />
                  </p>
                  <p className="mt-2 text-[0.78rem] font-semibold leading-snug text-peach/70">{a.label}</p>
                </Tilt>
              </Motion>
            )
          })}
        </ul>
        <p className="mt-5 text-xs text-peach/45">“Achievements 2025” as published on the helpinghandf.org homepage — to be verified before launch.</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function OurServices() {
  return (
    <section className="bg-sand/50 section-y" aria-labelledby="services-title">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Motion><Eyebrow>What we do · Key interventions</Eyebrow></Motion>
            <h2 id="services-title" className="display-lg mt-4"><SplitWords text="Lend us a hand to lend a hand of health for all." /></h2>
          </div>
          <Motion><p className="max-w-sm text-muted">Twelve services, photographed in the field. Drag to explore — hover a card for more photos.</p></Motion>
        </div>
        <div className="mt-10"><Carousel label="HHF services">
          {services.map((s, k) => (
            <div key={s.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
              <Tilt className="group h-full overflow-hidden rounded-[22px] bg-ivory shadow-[0_24px_50px_-38px_rgb(76_22_11/0.5)]">
                <Link to={s.to} className="flex h-full flex-col">
                  <div className="relative">
                    <CyclingImages photos={s.photos} alt={s.title} className="aspect-[16/11]" auto={k % 4 === 0} />
                    <span className="absolute left-4 top-4 rounded-full bg-maroon-900/85 px-3 py-1 font-display text-sm text-gold backdrop-blur">{String(k + 1).padStart(2, '0')}</span>
                    {s.photos.length > 1 && <span className="absolute right-4 top-4 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.7rem] font-bold text-maroon-800">{s.photos.length} photos</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display-sm group-hover:text-maroon-700">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] text-muted">{s.text}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-bold text-maroon-800 group-hover:text-rust">Read more <ArrowUpRight size={15} aria-hidden /></span>
                  </div>
                </Link>
              </Tilt>
            </div>
          ))}
        </Carousel></div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function StoriesAndFilm() {
  const story = stories[0]
  const [open, setOpen] = useState(false)
  return (
    <section className="container-x section-y">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Motion><Eyebrow>Stories of second chances</Eyebrow></Motion>
          <h2 className="display-lg mt-4"><SplitWords text="One surgery. A whole new future." /></h2>
        </div>
        <TextLink to="/stories">All stories</TextLink>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Motion variant="up">
          <Tilt className="group h-full overflow-hidden rounded-[24px] bg-white shadow-[0_24px_50px_-36px_rgb(76_22_11/0.5)]">
            <Link to={`/stories/${story.slug}`} className="grid h-full sm:grid-cols-[1fr_1.05fr]">
              <span className="pan relative block min-h-[240px] overflow-hidden">
                <img src={story.image} alt={story.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-maroon-800">Patient story</span>
              </span>
              <span className="flex flex-col p-6 sm:p-7">
                <Quote size={28} className="text-gold" aria-hidden />
                <span className="font-display mt-3 text-[1.45rem] leading-snug text-ink group-hover:text-maroon-700">{story.title}</span>
                <span className="mt-3 text-[0.95rem] text-muted">A farm labourer’s son kept failing police recruitment because of severe myopia. HHF sponsored a laser eye procedure — today he serves with the Intelligence Bureau.</span>
                <span className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {[['–4.5', 'myopia before'], ['100%', 'sponsored'], ['IB', 'officer today']].map(([n, l]) => (
                    <span key={l}><span className="font-display block text-2xl text-maroon-800">{n}</span><span className="text-[0.7rem] font-semibold text-muted">{l}</span></span>
                  ))}
                </span>
              </span>
            </Link>
          </Tilt>
        </Motion>
        <Motion variant="scale" delay={120}>
          <button type="button" onClick={() => setOpen(true)} className="pan group relative block h-full min-h-[320px] w-full overflow-hidden rounded-[24px] text-left">
            <img src={heroSlides[5].src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/95 via-maroon-950/50 to-maroon-950/10" />
            <span className="on-dark absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <span className="eyebrow">Watch the HHF documentary</span>
              <span className="font-display mt-2 text-[1.9rem] leading-tight text-white">HHF: Transforming lives, redefining charity</span>
              <span className="mt-6 flex items-center gap-3 font-semibold text-white">
                <span className="live-dot grid h-14 w-14 place-items-center rounded-full bg-gold text-maroon-950 transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} className="ml-1 fill-maroon-950" aria-hidden />
                </span>
                Play film
              </span>
            </span>
          </button>
        </Motion>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} title="HHF: Transforming lives, redefining charity" size="lg">
        <div className="aspect-video overflow-hidden rounded-[12px] bg-black">
          {open && <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/NqBbKxthMcc?autoplay=1&rel=0" title="HHF documentary" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
        </div>
      </Dialog>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function NewsAndUpdates() {
  const latest = [stories[2], stories[3], stories[4], stories[1]]
  return (
    <section className="border-t border-line bg-white/50 py-14 md:py-16">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Eyebrow>In the news</Eyebrow>
          <h2 className="display-sm mt-3">Recognised for showing up when it matters.</h2>
          <ul className="mt-5 space-y-2">
            {[['2016', 'Rotary Distinguished Citizen Award'], ['2021', 'COVID-19 help desks at TIMS & Gandhi'], ['2025', 'MoU with NIMS for six help desks']].map(([y, t]) => (
              <li key={y} className="flex gap-3 text-sm"><span className="font-display w-11 shrink-0 text-rust">{y}</span><span className="text-ink">{t}</span></li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {press.slice(0, 4).map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noreferrer" title={p.title} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-rust hover:text-rust">
                  <Newspaper size={12} aria-hidden /> {p.outlet} <ArrowUpRight size={12} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-end justify-between gap-4">
            <Eyebrow>News & updates</Eyebrow>
            <TextLink to="/stories">All stories</TextLink>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {latest.map((st) => (
              <li key={st.slug}>
                <Link to={`/stories/${st.slug}`} className="group flex items-center gap-3 rounded-[14px] border border-line bg-white p-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-22px_rgb(76_22_11/0.5)]">
                  <span className="pan block h-16 w-20 shrink-0 overflow-hidden rounded-[10px]"><img src={st.image} alt="" loading="lazy" className="h-full w-full object-cover" /></span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-rust">{formatDate(st.date)}</span>
                    <span className="line-clamp-2 block text-[0.88rem] font-semibold leading-snug text-ink group-hover:text-maroon-700">{st.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Faces() {
  const row1 = [images.schoolgirls, heroSlides[0].src, images.elderPortrait, images.childCheckup, images.helpdeskTeam, images.boysLaughing, images.bpCheck, heroSlides[3].src, images.dialysis]
  const row2 = [images.agedWomen, images.classroomGirls, heroSlides[6].src, images.patientCare, images.heroFamily, images.triage, heroSlides[7].src, images.ruralCamp, images.schoolKids]
  const Tile = ({ src }: { src: string }) => (
    <div className="pan mx-2 h-[150px] w-[220px] shrink-0 overflow-hidden rounded-[16px] sm:h-[190px] sm:w-[280px]">
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
    </div>
  )
  return (
    <section className="on-dark overflow-hidden bg-maroon-900 py-14 text-peach md:py-16" aria-label="Faces of HHF">
      <div className="container-x mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <Eyebrow>Faces of HHF</Eyebrow>
          <h2 className="display-md mt-3 text-white">5,000+ people reach us every single day.</h2>
        </div>
        <p className="max-w-sm text-sm text-peach/70">Patients, elders, students, counsellors and volunteers — the people at the heart of our work. Hover to pause.</p>
      </div>
      <div className="space-y-4">
        <Marquee speed={60}>{row1.map((src) => <Tile key={src} src={src} />)}</Marquee>
        <Marquee speed={70} reverse>{row2.map((src) => <Tile key={src} src={src} />)}</Marquee>
      </div>
    </section>
  )
}

