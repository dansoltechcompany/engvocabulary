import { useState } from 'react'
import { SITE } from '../data/site.js'

function LegalLayout({ eyebrow, title, children, onOpen }) {
  const open = (path) => (event) => {
    event.preventDefault()
    onOpen(path)
  }
  return (
    <article className="screen legal-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children}
      <nav className="footer-links legal-page-links" aria-label="Also">
        <a href="/vocabulary" onClick={(event) => { event.preventDefault(); onOpen('/vocabulary') }}>Topics</a>
        <a href="/about" onClick={open('/about')}>About</a>
        <a href="/privacy" onClick={open('/privacy')}>Privacy</a>
        <a href="/contact" onClick={open('/contact')}>Contact</a>
      </nav>
    </article>
  )
}

export function AboutPage({ onOpen }) {
  return (
    <LegalLayout eyebrow="About" title="A vocabulary site that teaches, not just lists." onOpen={onOpen}>
      <p className="prose">
        EngVocab helps you learn English words from beginner A1 to advanced C2.
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
        The A1–C2 labels follow the Common European Framework as a guide; EngVocab is not an exam board and is not affiliated with Cambridge, IELTS, or the Council of Europe.
      </p>
    </LegalLayout>
  )
}

export function PrivacyPage({ onOpen }) {
  return (
    <LegalLayout eyebrow="Privacy" title="What we store, and what we don’t." onOpen={onOpen}>
      <p className="prose">
        This page is for a simple vocabulary website. We do not ask you to create an account.
        Last updated {SITE.privacyUpdated}.
      </p>

      <h2 className="entry-h">On your device</h2>
      <p className="prose tight">
        Your level, streak, and how well you know each word are saved in your browser (local storage).
        A study session in progress is saved until you finish it or close the tab.
        That information does not leave your device through EngVocab. If you clear the site data in your browser, the progress is gone.
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
        <a href="/contact" onClick={(event) => { event.preventDefault(); onOpen('/contact') }}>Contact</a>
        {' '}page.
      </p>
    </LegalLayout>
  )
}

export function ContactPage({ onOpen }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const lines = []
    if (name.trim()) lines.push(`Name: ${name.trim()}`)
    if (email.trim()) lines.push(`Email: ${email.trim()}`)
    if (lines.length) lines.push('')
    lines.push(message.trim())
    const body = lines.join('\n')
    const subject = name.trim() ? `EngVocab message from ${name.trim()}` : 'EngVocab message'
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <LegalLayout eyebrow="Contact" title="Tell us if a page is wrong, or if something would help." onOpen={onOpen}>
      <p className="prose">
        We read notes about mistakes in a lesson, missing words, and ideas for the site.
        This opens your email app and sends to {SITE.email}.
      </p>

      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Your name
          <input
            className="search"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </label>
        <label>
          Your email
          <input
            className="search"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label>
          Message
          <textarea
            className="search contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={6}
          />
        </label>
        <button className="cta" type="submit">
          Open email <span>→</span>
        </button>
      </form>
      {sent ? (
        <p className="muted" style={{ marginTop: 16 }}>
          If your email app did not open, write to {SITE.email} yourself.
        </p>
      ) : null}
      <p className="prose tight">
        We do not have a phone line. Please do not send exam papers or other people’s private work.
      </p>
    </LegalLayout>
  )
}
