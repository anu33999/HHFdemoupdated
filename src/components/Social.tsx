import { ArrowUpRight, Facebook, Instagram, Linkedin, MessageCircle, Twitter, Youtube, type LucideIcon } from 'lucide-react'
import { org } from '../data/site'
import { Motion, Tilt } from './motion'

export const socialIcons: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  X: Twitter,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
}

/** Compact icon row (header bar, mobile menu, footer). */
export function SocialIcons({ className = '', size = 16, itemClassName = '' }: { className?: string; size?: number; itemClassName?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {org.socials.map((s) => {
        const Icon = socialIcons[s.label]
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`HHF on ${s.label}: ${s.handle} (opens in a new tab)`}
              title={`${s.label} · ${s.handle}`}
              className={`grid place-items-center transition-all duration-200 hover:-translate-y-0.5 ${itemClassName}`}
            >
              <Icon size={size} aria-hidden />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

/** Large animated cards with handles — used on the homepage and contact page. */
export function SocialCards({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {org.socials.map((s, i) => {
        const Icon = socialIcons[s.label]
        return (
          <Motion as="li" key={s.label} variant="up" delay={i * 80}>
            <Tilt className="h-full rounded-[20px]">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex h-full items-center gap-4 rounded-[20px] p-5 transition-colors ${
                  dark ? 'bg-white/[0.05] ring-1 ring-line-dark hover:bg-white/10' : 'border border-line bg-white hover:border-rust/40'
                }`}
              >
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-[16px] transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${dark ? 'bg-gold text-maroon-950' : 'bg-rust text-white'}`}>
                  <Icon size={24} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-xs font-bold uppercase tracking-[0.14em] ${dark ? 'text-gold' : 'text-rust'}`}>{s.label}</span>
                  <span className={`font-display block truncate text-lg leading-tight ${dark ? 'text-white' : 'text-ink'}`}>{s.handle}</span>
                  <span className={`block text-sm ${dark ? 'text-peach/70' : 'text-muted'}`}>{s.blurb}</span>
                </span>
                <ArrowUpRight size={18} className={`shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${dark ? 'text-gold' : 'text-maroon-800'}`} aria-hidden />
              </a>
            </Tilt>
          </Motion>
        )
      })}
    </ul>
  )
}

/** Floating vertical social bar on the left edge (desktop), shown on the homepage. */
export function SocialRail() {
  return (
    <aside aria-label="HHF on social media" className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full bg-ivory/90 p-2 shadow-[0_20px_40px_-20px_rgb(54_16_10/0.5)] ring-1 ring-line backdrop-blur xl:flex">
      {org.socials.map((s) => {
        const Icon = socialIcons[s.label]
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`HHF on ${s.label}: ${s.handle} (opens in a new tab)`}
            className="group relative grid h-10 w-10 place-items-center rounded-full text-maroon-800 transition-all duration-200 hover:bg-rust hover:text-white"
          >
            <Icon size={17} aria-hidden />
            <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full bg-maroon-900 px-3 py-1 text-xs font-semibold text-peach opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100">
              {s.handle}
            </span>
          </a>
        )
      })}
    </aside>
  )
}
