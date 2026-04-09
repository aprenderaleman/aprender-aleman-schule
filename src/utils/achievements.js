export const ALL_ACHIEVEMENTS = [
  {
    id: 'primera_vez',
    title: 'Primera vez',
    description: 'Completaste tu primer ejercicio',
    icon: '🌟',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 'racha_7',
    title: 'Racha de 7 días',
    description: 'Mantuviste una racha de 7 días seguidos',
    icon: '🔥',
    color: 'from-red-400 to-orange-500',
  },
  {
    id: 'gramatico',
    title: 'Gramático/a',
    description: 'Respondiste correctamente 100 preguntas de gramática',
    icon: '📚',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'lector_avido',
    title: 'Lector/a ávido/a',
    description: 'Completaste 20 ejercicios de lectura',
    icon: '📖',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 'oyente_experto',
    title: 'Oyente experto/a',
    description: 'Completaste 20 ejercicios de audición',
    icon: '🎧',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'escritor',
    title: 'Escritor/a',
    description: 'Completaste 10 ejercicios de escritura',
    icon: '✍️',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'perfeccionista',
    title: 'Perfeccionista',
    description: 'Obtuviste puntuación perfecta en 5 ejercicios seguidos',
    icon: '💎',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'xp_500',
    title: 'Acumulador/a',
    description: 'Alcanzaste 500 XP',
    icon: '⚡',
    color: 'from-yellow-300 to-yellow-500',
  },
  {
    id: 'xp_1000',
    title: 'Experto/a',
    description: 'Alcanzaste 1000 XP',
    icon: '🏆',
    color: 'from-orange-400 to-red-500',
  },
]

export function checkAchievements(progress, existingAchievements = []) {
  const earned = []
  const has = (id) => existingAchievements.includes(id)

  const history = progress.exerciseHistory || []
  const completed = progress.completedExercises || []

  // Primera vez
  if (!has('primera_vez') && completed.length >= 1) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'primera_vez'))
  }

  // Racha de 7 días
  if (!has('racha_7') && (progress.streak || 0) >= 7) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'racha_7'))
  }

  // Gramático: 100 correct grammar answers
  const correctGrammar = history.filter(h => h.type === 'grammar' && h.score >= 70).length
  if (!has('gramatico') && correctGrammar >= 100) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'gramatico'))
  }

  // Lector ávido: 20 reading exercises
  const readingCount = history.filter(h => h.type === 'reading').length
  if (!has('lector_avido') && readingCount >= 20) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'lector_avido'))
  }

  // Oyente experto: 20 listening exercises
  const listeningCount = history.filter(h => h.type === 'listening').length
  if (!has('oyente_experto') && listeningCount >= 20) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'oyente_experto'))
  }

  // Escritor: 10 writing exercises
  const writingCount = history.filter(h => h.type === 'writing').length
  if (!has('escritor') && writingCount >= 10) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'escritor'))
  }

  // Perfeccionista: 5 perfect exercises in a row
  if (!has('perfeccionista') && (progress.perfectStreak || 0) >= 5) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'perfeccionista'))
  }

  // XP milestones
  if (!has('xp_500') && (progress.xp || 0) >= 500) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'xp_500'))
  }
  if (!has('xp_1000') && (progress.xp || 0) >= 1000) {
    earned.push(ALL_ACHIEVEMENTS.find(a => a.id === 'xp_1000'))
  }

  return earned.filter(Boolean)
}

export function getAchievementById(id) {
  return ALL_ACHIEVEMENTS.find(a => a.id === id)
}
