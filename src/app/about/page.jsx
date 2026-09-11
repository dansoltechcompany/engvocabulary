import { AboutPage } from '../../components/legal.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'About EngVocabulary',
  description: 'EngVocabulary is an English vocabulary site with short lessons from A1 to C2, plus a daily study loop.',
  path: '/about',
})

export default function About() {
  return <AboutPage />
}
