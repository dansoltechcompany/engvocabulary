import { HomeScreen } from '../components/screens.jsx'
import { pageMeta } from '../lib/seo.js'

export const metadata = pageMeta({
  title: 'EngVocab — learn English vocabulary',
  description:
    'Short daily English practice. Clear meanings, examples, and a study loop that helps you remember.',
  path: '/',
})

export default function HomePage() {
  return <HomeScreen />
}
