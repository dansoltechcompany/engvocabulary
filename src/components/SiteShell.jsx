'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useStudy } from './StudyProvider.jsx'

export function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const { ready, busy, startSession } = useStudy()
  const home = pathname === '/'
  const study = pathname === '/learn' || pathname === '/quiz'
  const topics = pathname === '/vocabulary' || pathname.startsWith('/vocabulary/')
  const words = pathname === '/words' || pathname.startsWith('/word/')
  const progress = pathname === '/progress'

  const navButtons = (key) => (
    <>
      <Link key={`${key}-home`} href="/" className={home ? 'active' : ''}>
        Home
      </Link>
      <button type="button" key={`${key}-study`} className={study ? 'active' : ''} onClick={startSession} disabled={!ready || busy}>
        Study
      </button>
      <Link key={`${key}-topics`} href="/vocabulary" className={topics ? 'active' : ''}>
        Topics
      </Link>
      <Link key={`${key}-words`} href="/words" className={words ? 'active' : ''}>
        Words
      </Link>
      <Link key={`${key}-progress`} href="/progress" className={progress ? 'active' : ''}>
        Progress
      </Link>
    </>
  )

  return (
    <div className="site">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          const main = document.getElementById('main')
          if (!main) return
          main.focus()
          main.scrollIntoView()
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" href="/">
            <span className="brand-mark">E</span>
            <span>
              EngVocabulary
              <small>English vocabulary</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Primary">{navButtons('top')}</nav>
        </div>
      </header>
      <main id="main" className="site-main" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>EngVocabulary — English words with short lessons and a daily practice.</p>
          <nav className="footer-links" aria-label="Site">
            <Link href="/vocabulary">Topics</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
      <nav className="nav" aria-label="Mobile">{navButtons('bottom')}</nav>
    </div>
  )
}
