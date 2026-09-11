import { ContactPage } from '../../components/ContactPage.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Contact EngVocab',
  description: 'Write to EngVocab about a lesson, a missing word, or an idea for the site.',
  path: '/contact',
})

export default function Contact() {
  return <ContactPage />
}
