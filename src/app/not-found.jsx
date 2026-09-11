import Link from 'next/link'
import { pageMeta } from '../lib/seo.js'

export const metadata = pageMeta({
  title: 'Page not found | EngVocab',
  description: 'That page is not on EngVocab. Browse words by topic or by level.',
  path: '/404',
  noindex: true,
})

export default function NotFound() {
  return (
    <section className="screen study-shell">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p className="muted">It may have moved, or the link is wrong. Try a topic list or the home page.</p>
      <div className="stack" style={{ marginTop: 24 }}>
        <Link className="cta" href="/vocabulary">
          Browse topics <span>→</span>
        </Link>
        <Link className="ghost" href="/">Home</Link>
      </div>
    </section>
  )
}
