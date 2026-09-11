import { LearnScreen } from '../../components/screens.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Study | EngVocabulary',
  description: 'A short English vocabulary session on this device.',
  path: '/learn',
  noindex: true,
})

export default function LearnPage() {
  return <LearnScreen />
}
