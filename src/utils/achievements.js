export const ALL_ACHIEVEMENTS = [
  {
    id: 'primera_vez',
    title: 'Erster Schritt',
    description: 'Du hast deine erste Übung abgeschlossen',
    icon: '🌟',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 'racha_7',
    title: '7-Tage-Serie',
    description: 'Du hast eine Serie von 7 Tagen in Folge gehalten',
    icon: '🔥',
    color: 'from-red-400 to-orange-500',
  },
  {
    id: 'gramatico',
    title: 'Grammatik-Profi',
    description: 'Du hast 100 Grammatikfragen richtig beantwortet',
    icon: '📚',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'lector_avido',
    title: 'Leseratte',
    description: 'Du hast 20 Leseübungen abgeschlossen',
    icon: '📖',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 'oyente_experto',
    title: 'Hör-Experte',
    description: 'Du hast 20 Hörübungen abgeschlossen',
    icon: '🎧',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'escritor',
    title: 'Schreibtalent',
    description: 'Du hast 10 Schreibübungen abgeschlossen',
    icon: '✍️',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'perfeccionista',
    title: 'Perfektionist',
    description: 'Du hast 5 Übungen in Folge mit voller Punktzahl bestanden',
    icon: '💎',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'xp_500',
    title: 'Sammler',
    description: 'Du hast 500 XP erreicht',
    icon: '⚡',
    color: 'from-yellow-300 to-yellow-500',
  },
  {
    id: 'xp_1000',
    title: 'Experte',
    description: 'Du hast 1000 XP erreicht',
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
