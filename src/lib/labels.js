export function stageLabel(stage) {
  if (stage === 'mastered') return 'Mastered'
  if (stage === 'review') return 'Review'
  if (stage === 'learning') return 'Learning'
  return 'New'
}
