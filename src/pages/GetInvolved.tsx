import { Droplet, GraduationCap, HeartHandshake, Hospital, Stethoscope, Users, Megaphone, Home as HomeIcon, Sparkles, Shuffle, Repeat } from 'lucide-react'
import { images, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { ButtonLink, Eyebrow, SafeImage, SectionHeading } from '../components/ui'
import { Motion, SplitWords, Tilt } from '../components/motion'

const roles = [
  { icon: Hospital, label: 'Guide patients at hospital help desks' },
  { icon: Stethoscope, label: 'Support health camps & screenings' },
  { icon: HomeIcon, label: 'Spend time at the home for the aged' },
  { icon: GraduationCap, label: 'Teach or mentor at the HHF School' },
  { icon: Megaphone, label: 'Help with outreach & social media' },
  { icon: HeartHandshake, label: 'Counsel families in crisis' },
]

const why = [
  { icon: Sparkles, title: 'Chance', text: 'We give a chance to the most vulnerable and needy, by reaching out in their time of need.' },
  { icon: Shuffle, title: 'Choice', text: 'Help desks at hospitals give patients the choice to opt for affordable or free healthcare.' },
  { icon: Repeat, title: 'Change', text: 'We come together as equals with one goal: to make a difference in healthcare for those who cannot afford it.' },
]

export default function GetInvolved() {
  useSeo('Get involved', 'Volunteer, intern, donate blood or collaborate with Helping Hand Foundation in Hyderabad.')
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Lend us a hand to lend a hand."
        lede="Volunteers, interns, blood donors and partners make HHF’s work possible. Find the way that fits you."
        image={images.patientCare}
        imageAlt="HHF patient care coordinators with a family on a hospital ward"
      >
        <ButtonLink to="#volunteer" variant="primary" icon="arrow">Volunteer</ButtonLink>
        <ButtonLink to={org.bloodDonorHref} variant="outline-light">Donate blood</ButtonLink>
      </PageHero>

      <section id="volunteer" className="container-x section-y scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Motion><Eyebrow>Volunteering & internships</Eyebrow></Motion>
            <h2 className="display-lg mt-4"><SplitWords text="Your time can turn panic into a plan." /></h2>
            <Motion delay={150}>
              <p className="lede mt-5">HHF is always looking for volunteers. Social-work students can join as interns and gain hands-on experience in the non-profit sector — and a deeper understanding of social issues.</p>
            </Motion>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map(({ icon: Icon, label }, i) => (
                <Motion as="li" key={label} variant="scale" delay={i * 70} className="flex items-center gap-3 rounded-[var(--radius-ui)] bg-peach/60 px-4 py-3.5 font-semibold">
                  <Icon size={20} className="shrink-0 text-rust" strokeWidth={1.9} aria-hidden />
                  {label}
                </Motion>
              ))}
            </ul>
            <Motion delay={400} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="#partner-form" variant="primary" icon="arrow">Become a volunteer</ButtonLink>
              <ButtonLink to="#partner-form" variant="secondary" icon="arrow">Apply for an internship</ButtonLink>
            </Motion>
          </div>
          <Motion variant="clip" className="relative">
            <SafeImage src={images.helpdeskPatient} alt="An HHF volunteer helping an elderly patient at a hospital help desk" className="shape-arch aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-media)] bg-maroon-900 p-6 text-peach shadow-xl sm:left-auto sm:max-w-xs">
              <p className="font-display text-4xl text-gold">400+</p>
              <p className="mt-1 text-sm text-peach/85">staff and volunteers already part of the HHF family.</p>
            </div>
          </Motion>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-rust py-16 text-white md:py-20">
        <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="live-dot grid h-16 w-16 place-items-center rounded-full bg-white text-rust">
            <Droplet size={30} className="fill-rust" aria-hidden />
          </span>
          <div>
            <h2 className="display-sm text-white">Become a blood donor</h2>
            <p className="mt-2 max-w-2xl text-white/85">One donation can save lives in an emergency. Register with HHF’s blood bank and we’ll reach out when a patient needs your blood group.</p>
          </div>
          <ButtonLink to={org.bloodDonorHref} variant="light">Register now</ButtonLink>
        </div>
      </section>

      <section id="partner" className="container-x section-y scroll-mt-20">
        <SectionHeading eyebrow="Collaborate" title="Why collaborate with HHF?" lede="Hospitals, companies, foundations and institutions partner with HHF to reach patients who would otherwise fall through the cracks." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {why.map(({ icon: Icon, title, text }, i) => (
            <Motion key={title} delay={i * 120}>
              <Tilt className="h-full rounded-[22px] border border-line bg-white p-8">
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-maroon-900 text-gold"><Icon size={26} aria-hidden /></span>
                <h3 className="font-display mt-6 text-3xl">{title}</h3>
                <p className="mt-3 text-muted">{text}</p>
              </Tilt>
            </Motion>
          ))}
        </div>
      </section>

      <section id="partner-form" className="on-dark bg-maroon-900 text-peach section-y scroll-mt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Volunteer, intern or partner</h2>
            <p className="lede mt-5">Tell us a little about yourself or your organisation and the HHF team will be in touch.</p>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
              <Users size={28} className="shrink-0 text-gold" aria-hidden />
              <p className="text-sm text-peach/80">Prefer to call? {org.phone} · {org.phone2}</p>
            </div>
          </div>
          <div className="rounded-[22px] bg-ivory p-6 text-ink sm:p-9">
            <EnquiryForm
              showOrganisation
              topics={['Volunteering', 'Internship', 'Hospital / institutional partnership', 'CSR partnership', 'Media']}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
            />
          </div>
        </div>
      </section>
    </>
  )
}
