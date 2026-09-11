import { TopicsIndex } from '../../components/TopicsIndex.jsx'
import { pageMeta } from '../../lib/seo.js'

export const metadata = pageMeta({
  title: 'English vocabulary by topic | EngVocabulary',
  description:
    'Learn English words in 16 topics such as weather, family, travel, food, work, and health. Short meanings and examples from A1 to C2.',
  path: '/vocabulary',
})

export default function VocabularyPage() {
  return <TopicsIndex />
}
