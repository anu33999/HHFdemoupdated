import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { images, programs } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero } from '../components/Blocks'
import { ButtonLink, SafeImage } from '../components/ui'
import { Marquee, Motion, ScrollParallax, SplitWords } from '../components/motion'

export default function Programs() {
  useSeo('Our work', 'Community health centres, hospital help desks, free dialysis, elder and rehab care, rural clinics, medical relief, the HHF School and livelihood support.')
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Lend us a hand to lend a hand of health for all."
        lede="Eight connected programmes that take people from their first symptom to full recovery — without financial hardship."
        image={images.eyeScreening}
        imageAlt="A doctor conducting an eye screening at an HHF community health centre"
      >
        <nav aria-label="Jump to programme" className="flex flex-wrap gap-2">
          {programs.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="rounded-[8px] border border-peach/25 px-3.5 py-2 text-sm font-semibold text-peach/85 transition-colors hover:border-gold hover:text-white">
              {p.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x section-y space-y-24 md:space-y-32">
        {programs.map((p, i) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-28" aria-labelledby={`${p.slug}-title`}>
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Motion variant="clip" className="relative">
                <Link to={`/programs/${p.slug}`} className="group block overflow-hidden rounded-[var(--radius-media)]" tabIndex={-1} aria-hidden>
                  <ScrollParallax speed={0.06}>
                    <SafeImage src={p.image} alt="" className={`media-zoom aspect-[5/4] scale-110 rounded-none!`} />
                  </ScrollParallax>
                </Link>
                <div className={`absolute -bottom-6 ${i % 2 ? 'right-6' : 'left-6'} rounded-[16px] bg-maroon-900 px-5 py-4 text-peach shadow-[0_24px_48px_-24px_rgb(54_16_10/0.7)]`}>
                  <p className="font-display text-3xl leading-none text-gold">{p.stat.value}</p>
                  <p className="mt-1 text-xs font-semibold">{p.stat.label}</p>
                </div>
              </Motion>
              <div>
                <Motion><p className="font-display text-xl text-rust">{p.number}</p></Motion>
                <h2 id={`${p.slug}-title`} className="display-lg mt-2"><SplitWords text={p.title} /></h2>
                <Motion delay={150}><p className="lede mt-5">{p.summary}</p></Motion>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {p.highlights.map((h, j) => (
                    <Motion as="li" key={h} variant="left" delay={200 + j * 70} className="flex items-center gap-2.5 font-semibold text-ink">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-peach text-maroon-800">
                        <Check size={14} strokeWidth={3} aria-hidden />
                      </span>
                      {h}
                    </Motion>
                  ))}
                </ul>
                <Motion delay={450} className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={`/programs/${p.slug}`} variant="secondary" icon="arrow">
                    Learn more <span className="sr-only">about {p.title}</span>
                  </ButtonLink>
                  <ButtonLink to={`/donate?purpose=${encodeURIComponent(purposeFor(p.slug))}`} variant="primary">Support this work</ButtonLink>
                </Motion>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="on-dark bg-maroon-900 py-12 text-peach">
        <Marquee speed={35}>
          {programs.map((p) => (
            <Link key={p.slug} to={`/programs/${p.slug}`} className="font-display mx-8 flex items-center gap-4 whitespace-nowrap text-2xl hover:text-gold">
              {p.title} <ArrowUpRight size={20} className="text-gold" aria-hidden />
            </Link>
          ))}
        </Marquee>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}

export function purposeFor(slug: string) {
  return (
    {
      'urban-primary-healthcare': 'Community health centres',
      'hospital-help-desks': 'Hospital help desks',
      'free-dialysis': 'Free dialysis',
      'rehab-elder-care': 'Elder & rehab care',
      education: 'Education',
      'relief-rehabilitation': 'Relief & livelihoods',
    } as Record<string, string>
  )[slug] ?? 'Where it’s needed most'
}
