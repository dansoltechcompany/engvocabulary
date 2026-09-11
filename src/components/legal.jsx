import Link from 'next/link'
import { SITE } from '../data/site.js'

function LegalLayout({ eyebrow, title, children }) {
  return (
    <article className="screen legal-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children}
      <nav className="footer-links legal-page-links" aria-label="Also">
        <Link href="/vocabulary">Topics</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </article>
  )
}

export function AboutPage() {
  return (
    <LegalLayout eyebrow="About" title="A vocabulary site that teaches, not just lists.">
      <p className="prose">
        EngVocabulary helps you learn English words from beginner A1 to advanced C2.
        Each word has its own page: a plain-English explainer, examples, and a short note on how people actually use it.
        You can also browse by topic. There are sixteen lists — weather, family, work, health, and more.
      </p>
      <h2 className="entry-h">How study works</h2>
      <p className="prose tight">
        You work through eight cards, say whether you knew each word, then take a short quiz.
        Hard words come back sooner. Easy words wait longer. Your level — A1 through C2 — filters both study and the word list.
      </p>
      <h2 className="entry-h">What we care about</h2>
      <p className="prose tight">
        Clear English first. The pages are written as short lessons, not one-line flashcards.
        Examples use British spelling (colour, practise, neighbour) unless a word is being contrasted with American English.
      </p>
      <p className="prose tight">
        Progress stays on this device. There is no account to create.
        The A1–C2 labels follow the Common European Framework as a guide; EngVocabulary is not an exam board and is not affiliated with Cambridge, IELTS, or the Council of Europe.
      </p>
    </LegalLayout>
  )
}

export function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Privacy" title="What we store, and what we don’t.">
      <p className="prose">
        This page is for a simple vocabulary website. We do not ask you to create an account.
        Last updated {SITE.privacyUpdated}.
      </p>

      <h2 className="entry-h">On your device</h2>
      <p className="prose tight">
        Your level, streak, and how well you know each word are saved in your browser (local storage).
        A study session in progress is saved until you finish it or close the tab.
        That information does not leave your device through EngVocabulary. If you clear the site data in your browser, the progress is gone.
      </p>

      <h2 className="entry-h">What we do not collect</h2>
      <p className="prose tight">
        We do not run a login. We do not sell a list of the words you studied.
        We do not show adverts today. If that changes, we will update this page first.
      </p>

      <h2 className="entry-h">Fonts and hosting</h2>
      <p className="prose tight">
        The site loads fonts from Google Fonts, which is a separate service with its own privacy policy.
        When the site is published on the internet, the company that hosts the files may keep standard server logs such as IP address and pages requested. We do not use those logs to identify you as a learner.
      </p>

      <h2 className="entry-h">Children</h2>
      <p className="prose tight">
        The word lessons are suitable for school-age learners with a parent or teacher.
        We do not knowingly collect personal information from children.
      </p>

      <h2 className="entry-h">Changes</h2>
      <p className="prose tight">
        If we add accounts, analytics, or adverts, this policy will change.
        The date at the top of this page will move when we edit it.
      </p>

      <h2 className="entry-h">Questions</h2>
      <p className="prose tight">
        Email {SITE.email} or use the{' '}
        <Link href="/contact">Contact</Link>
        {' '}page.
      </p>
    </LegalLayout>
  )
}
