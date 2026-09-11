import { ProgressScreen } from '../../components/screens.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Progress | EngVocab',
  description: 'A short English vocabulary session on this device.',
  path: '/progress',
  noindex: true,
})

export default function ProgressPage() {
  return <ProgressScreen />
}
