import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { CursorFX, ScrollProgress } from './motion'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // New page → start at the top; in-page anchors scroll to their target.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <>
      <ScrollProgress />
      <CursorFX />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <div key={pathname} className="page-in">
          <Outlet />
        </div>
      </main>
      <Footer />
      <a
        href="https://helpinghandf.org"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-[55] hidden items-center gap-2 rounded-full bg-ink/85 px-3.5 py-2 text-[0.7rem] font-semibold text-peach shadow-lg backdrop-blur transition-colors hover:bg-ink sm:flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        Design concept by Kreatif Atelier · not HHF’s official website
      </a>
    </>
  )
}
