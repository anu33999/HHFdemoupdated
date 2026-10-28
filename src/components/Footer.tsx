import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialIcons } from './Social'
import { org, programs } from '../data/site'
import { Logo } from './Header'
import Newsletter from './Newsletter'


export default function Footer() {
  // The homepage has its own newsletter section, so skip the footer band there.
  const { pathname } = useLocation()
  return (
    <footer className="on-dark relative overflow-hidden bg-maroon-950 text-peach">
      <ContourLines className="pointer-events-none absolute -right-24 -top-10 w-[560px] opacity-[0.12]" />

      <div className="container-x relative">
        {/* Newsletter band */}
        {pathname !== '/' && (
        <div className="grid gap-8 border-b border-line-dark py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:py-16">
          <div>
            <h2 className="display-md text-white">Stay close to the work</h2>
            <p className="mt-3 max-w-md text-peach/75">
              Patient stories, new centres and ways to help — from Hyderabad’s healthcare frontline. No spam, ever.
            </p>
          </div>
          <Newsletter tone="dark" compact />
        </div>
        )}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-peach/75">
              Bridging health inequity for Hyderabad’s most vulnerable since {org.founded} — free primary care, hospital help desks, dialysis, elder care and education.
            </p>
            <SocialIcons className="mt-6 flex-wrap" size={17} itemClassName="h-10 w-10 rounded-[var(--radius-ui)] border border-line-dark text-peach/80 hover:border-gold hover:text-gold" />
            <p className="mt-3 text-xs text-peach/55">@helpinghandf_hyd · @HelpingHandHyd</p>
          </div>

          <FooterCol title="Explore">
            <FLink to="/about">About HHF</FLink>
            <FLink to="/impact">Our impact</FLink>
            <FLink to="/stories">Stories</FLink>
            <FLink to="/get-involved">Volunteer &amp; partner</FLink>
            <FLink to="/transparency">Transparency</FLink>
            <FLink to="/contact">Contact</FLink>
          </FooterCol>

          <FooterCol title="Programs">
            {programs.map((p) => (
              <FLink key={p.slug} to={`/programs/${p.slug}`}>
                {p.title}
              </FLink>
            ))}
          </FooterCol>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold">Visit, call or write</h3>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-peach/80">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                <a href={org.mapsHref} target="_blank" rel="noreferrer" className="hover:text-white">
                  {org.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={org.phoneHref} className="hover:text-white">
                  {org.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={`mailto:${org.email}`} className="break-all hover:text-white">
                  {org.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-peach/55">Contact details as published on helpinghandf.org.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark py-7 text-sm text-peach/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Helping Hand Foundation, Hyderabad. Donations are eligible for deduction under Section 80G.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link className="hover:text-white" to="/policies/privacy">Privacy</Link></li>
            <li><Link className="hover:text-white" to="/policies/terms">Terms</Link></li>
            <li><Link className="hover:text-white" to="/policies/safeguarding">Safeguarding</Link></li>
          </ul>
        </div>
        <p className="pb-8 text-xs leading-relaxed text-peach/45">
          Website design concept prepared by Kreatif Atelier for Helping Hand Foundation. Forms, donations and documents on this demo are simulated; it is not HHF’s official website.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold">{title}</h3>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  )
}

function FLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-[0.95rem] text-peach/80 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

/** Fine contour lines — the topographic motif from the hero, reused quietly. */
export function ContourLines({ className, stroke = 'var(--color-gold)' }: { className?: string; stroke?: string }) {
  const paths = Array.from({ length: 9 }, (_, i) => {
    const o = i * 14
    return `M ${-20} ${120 + o} C ${80} ${40 + o * 0.6}, ${180} ${220 - o * 0.4}, ${300} ${110 + o * 0.8} S ${470} ${30 + o}, ${560} ${140 + o * 0.5}`
  })
  const verticals = Array.from({ length: 7 }, (_, i) => {
    const x = 40 + i * 70
    return `M ${x} 20 C ${x + 30} 120, ${x - 30} 200, ${x + 10} 330`
  })
  return (
    <svg viewBox="0 0 540 340" fill="none" className={className} aria-hidden>
      {[...paths, ...verticals].map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth="1.2" />
      ))}
    </svg>
  )
}
