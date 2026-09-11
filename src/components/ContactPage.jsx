'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE } from '../data/site.js'

export function ContactPage() {
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
    const subject = name.trim() ? `EngVocabulary message from ${name.trim()}` : 'EngVocabulary message'
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <article className="screen legal-page">
      <p className="eyebrow">Contact</p>
      <h1>Tell us if a page is wrong, or if something would help.</h1>
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
      <nav className="footer-links legal-page-links" aria-label="Also">
        <Link href="/vocabulary">Topics</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </article>
  )
}
