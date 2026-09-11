import { ProgressScreen } from '../../components/screens.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Progress | EngVocabulary',
  description: 'See your streak, words seen, and what is due to review on this device.',
  path: '/progress',
  noindex: true,
})

export default function ProgressPage() {
  return <ProgressScreen />
}
