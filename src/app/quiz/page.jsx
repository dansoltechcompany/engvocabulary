import { QuizScreen } from '../../components/screens.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'Study | EngVocabulary',
  description: 'A short English vocabulary session on this device.',
  path: '/quiz',
  noindex: true,
})

export default function QuizPage() {
  return <QuizScreen />
}
