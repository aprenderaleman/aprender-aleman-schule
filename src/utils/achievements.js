import { getPath } from './learningPath'

// ─── Achievement catalogue ─────────────────────────────────────────────
// Tags by `category` so the UI can group them later if we want. Each entry
// is purely declarative — the actual "did the student earn it?" logic
// lives in checkAchievements() below.
export const ALL_ACHIEVEMENTS = [
  // ═══ Erste Schritte ═════════════════════════════════════════════════
  {
    id: 'primera_vez', category: 'erste_schritte',
    title: 'Erster Schritt',
    description: 'Du hast deine erste Übung abgeschlossen',
    icon: '🌟', color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 'erstes_lesen', category: 'erste_schritte',
    title: 'Erstes Buch geöffnet',
    description: 'Deine erste Leseübung — willkommen in der Welt der Texte',
    icon: '📖', color: 'from-green-300 to-emerald-400',
  },
  {
    id: 'erstes_hoeren', category: 'erste_schritte',
    title: 'Erste Töne',
    description: 'Deine erste Hörübung abgeschlossen',
    icon: '🎧', color: 'from-purple-300 to-fuchsia-400',
  },
  {
    id: 'erstes_schreiben', category: 'erste_schritte',
    title: 'Erste Worte',
    description: 'Deine erste Schreibübung abgeschlossen',
    icon: '✍️', color: 'from-pink-300 to-rose-400',
  },
  {
    id: 'erstes_sprechen', category: 'erste_schritte',
    title: 'Erstes Mal sprechen',
    description: 'Deine erste mündliche Übung — sehr gut!',
    icon: '🎤', color: 'from-teal-300 to-cyan-400',
  },

  // ═══ Streak / Konstanz ══════════════════════════════════════════════
  {
    id: 'racha_3', category: 'konstanz',
    title: '3-Tage-Serie',
    description: 'Drei Tage in Folge geübt — der Anfang einer Gewohnheit',
    icon: '🔥', color: 'from-orange-300 to-red-400',
  },
  {
    id: 'racha_7', category: 'konstanz',
    title: '7-Tage-Serie',
    description: 'Du hast eine Serie von 7 Tagen in Folge gehalten',
    icon: '🔥', color: 'from-red-400 to-orange-500',
  },
  {
    id: 'racha_14', category: 'konstanz',
    title: '2 Wochen Serie',
    description: '14 Tage in Folge geübt — Eisern!',
    icon: '🔥', color: 'from-red-500 to-pink-500',
  },
  {
    id: 'racha_30', category: 'konstanz',
    title: 'Ein Monat Serie',
    description: '30 Tage in Folge ohne Pause',
    icon: '🌋', color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'racha_100', category: 'konstanz',
    title: '100-Tage-Legende',
    description: '100 Tage in Folge — du bist eine Maschine',
    icon: '⚡', color: 'from-yellow-400 via-orange-500 to-red-500',
  },

  // ═══ XP-Stufen ══════════════════════════════════════════════════════
  {
    id: 'xp_100', category: 'xp',
    title: 'Erste 100 XP',
    description: 'Du hast deine ersten 100 XP gesammelt',
    icon: '✨', color: 'from-yellow-300 to-amber-400',
  },
  {
    id: 'xp_500', category: 'xp',
    title: 'Sammler',
    description: 'Du hast 500 XP erreicht',
    icon: '⚡', color: 'from-yellow-300 to-yellow-500',
  },
  {
    id: 'xp_1000', category: 'xp',
    title: 'Experte',
    description: 'Du hast 1000 XP erreicht',
    icon: '🏆', color: 'from-orange-400 to-red-500',
  },
  {
    id: 'xp_2500', category: 'xp',
    title: 'Wissensspeicher',
    description: 'Du hast 2.500 XP erreicht',
    icon: '💰', color: 'from-amber-400 to-orange-600',
  },
  {
    id: 'xp_5000', category: 'xp',
    title: 'Profi',
    description: 'Du hast 5.000 XP erreicht',
    icon: '💎', color: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'xp_10000', category: 'xp',
    title: 'Halbgott des Deutsch',
    description: '10.000 XP — du hast die kostenlose Schwelle gemeistert',
    icon: '👑', color: 'from-yellow-300 via-orange-500 to-pink-500',
  },

  // ═══ Fertigkeiten-Meister ═══════════════════════════════════════════
  {
    id: 'gramatico', category: 'fertigkeit',
    title: 'Grammatik-Profi',
    description: 'Du hast 100 Grammatikfragen richtig beantwortet',
    icon: '📚', color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'gramatik_meister', category: 'fertigkeit',
    title: 'Grammatik-Meister',
    description: '300 Grammatikfragen mit ≥70% — du beherrschst die Regeln',
    icon: '🧠', color: 'from-indigo-500 to-purple-700',
  },
  {
    id: 'lector_avido', category: 'fertigkeit',
    title: 'Leseratte',
    description: 'Du hast 20 Leseübungen abgeschlossen',
    icon: '📖', color: 'from-green-400 to-teal-500',
  },
  {
    id: 'super_leser', category: 'fertigkeit',
    title: 'Bücherwurm',
    description: '50 Leseübungen — du verschlingst Texte',
    icon: '🐛', color: 'from-emerald-500 to-green-700',
  },
  {
    id: 'oyente_experto', category: 'fertigkeit',
    title: 'Hör-Experte',
    description: 'Du hast 20 Hörübungen abgeschlossen',
    icon: '🎧', color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'super_hoerer', category: 'fertigkeit',
    title: 'Goldenes Ohr',
    description: '50 Hörübungen — du verstehst jedes Wort',
    icon: '👂', color: 'from-fuchsia-500 to-purple-700',
  },
  {
    id: 'escritor', category: 'fertigkeit',
    title: 'Schreibtalent',
    description: 'Du hast 10 Schreibübungen abgeschlossen',
    icon: '✍️', color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'writer_meister', category: 'fertigkeit',
    title: 'Schreib-Meister',
    description: '25 Schreibübungen — die Tastatur ist dein Freund',
    icon: '📝', color: 'from-rose-500 to-red-700',
  },
  {
    id: 'sprecher', category: 'fertigkeit',
    title: 'Mutiger Sprecher',
    description: '10 Sprechübungen — du traust dich zu sprechen',
    icon: '🎤', color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 'speaker_meister', category: 'fertigkeit',
    title: 'Rhetorik-König',
    description: '25 Sprechübungen — flüssig wie Wasser',
    icon: '🗣️', color: 'from-cyan-500 to-blue-700',
  },
  {
    id: 'alle_skills', category: 'fertigkeit',
    title: 'Allrounder',
    description: 'Mindestens eine Übung in jeder Disziplin (Grammatik, Lesen, Hören, Schreiben, Sprechen)',
    icon: '🌈', color: 'from-pink-400 via-purple-400 to-cyan-400',
  },
  {
    id: 'alle_skills_pro', category: 'fertigkeit',
    title: 'Vollkommener Allrounder',
    description: 'Mindestens 10 Übungen in jeder Disziplin',
    icon: '⭐', color: 'from-yellow-400 via-pink-400 to-purple-500',
  },

  // ═══ Perfektion ═════════════════════════════════════════════════════
  {
    id: 'perfeccionista', category: 'perfektion',
    title: 'Perfektionist',
    description: 'Du hast 5 Übungen in Folge mit voller Punktzahl bestanden',
    icon: '💎', color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'perfekt_10', category: 'perfektion',
    title: 'Makellos',
    description: '10 Übungen in Folge mit 100% — unaufhaltsam',
    icon: '💫', color: 'from-blue-400 to-violet-600',
  },
  {
    id: 'perfekt_25', category: 'perfektion',
    title: 'Diamanten-Serie',
    description: '25 Übungen in Folge mit 100% — eine Legende',
    icon: '💠', color: 'from-violet-500 to-fuchsia-600',
  },
  {
    id: 'perfekt_total_50', category: 'perfektion',
    title: 'Sammler der Perfektion',
    description: 'Insgesamt 50 perfekte Übungen',
    icon: '🏵️', color: 'from-amber-400 to-yellow-600',
  },

  // ═══ Volumen ════════════════════════════════════════════════════════
  {
    id: 'marathon_tag', category: 'volumen',
    title: 'Marathon-Tag',
    description: '10 Übungen an einem einzigen Tag — Wahnsinn',
    icon: '🏃', color: 'from-lime-400 to-green-500',
  },
  {
    id: 'total_50', category: 'volumen',
    title: '50 Übungen',
    description: 'Du hast 50 verschiedene Übungen gemeistert',
    icon: '🎯', color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'total_100', category: 'volumen',
    title: '100 Übungen',
    description: 'Hundert verschiedene Übungen abgeschlossen',
    icon: '💯', color: 'from-blue-500 to-indigo-700',
  },
  {
    id: 'total_200', category: 'volumen',
    title: '200 Übungen',
    description: 'Du gehörst zu den Top-Lernern: 200 Übungen abgeschlossen',
    icon: '🏅', color: 'from-purple-500 to-pink-600',
  },

  // ═══ Lernpfad / Niveau ══════════════════════════════════════════════
  {
    id: 'pfad_a1', category: 'niveau',
    title: 'A1 gemeistert',
    description: 'Du hast den gesamten A1-Lernpfad abgeschlossen',
    icon: '🥉', color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'pfad_a2', category: 'niveau',
    title: 'A2 gemeistert',
    description: 'Du hast den gesamten A2-Lernpfad abgeschlossen',
    icon: '🥈', color: 'from-gray-300 to-gray-500',
  },
  {
    id: 'pfad_b1', category: 'niveau',
    title: 'B1 gemeistert',
    description: 'Du hast den gesamten B1-Lernpfad abgeschlossen',
    icon: '🥇', color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 'pfad_b2', category: 'niveau',
    title: 'B2 gemeistert',
    description: 'Du hast den gesamten B2-Lernpfad abgeschlossen',
    icon: '🏆', color: 'from-orange-500 to-red-500',
  },
  {
    id: 'pfad_c1', category: 'niveau',
    title: 'C1 gemeistert',
    description: 'Du hast den gesamten C1-Lernpfad abgeschlossen — fast muttersprachlich!',
    icon: '👑', color: 'from-pink-500 via-fuchsia-500 to-violet-600',
  },
  {
    id: 'alle_pfade', category: 'niveau',
    title: 'Vollendung',
    description: 'Alle fünf Niveau-Pfade von A1 bis C1 abgeschlossen — ein wahrer Sprachkünstler',
    icon: '🎖️', color: 'from-yellow-300 via-pink-500 to-violet-600',
  },

  // ═══ Zeit / Spaß ════════════════════════════════════════════════════
  {
    id: 'frueh_aufsteher', category: 'zeit',
    title: 'Früher Vogel',
    description: 'Eine Übung vor 7:00 Uhr morgens abgeschlossen',
    icon: '🐦', color: 'from-amber-200 to-orange-300',
  },
  {
    id: 'nachteule', category: 'zeit',
    title: 'Nachteule',
    description: 'Eine Übung nach 23:00 Uhr abgeschlossen',
    icon: '🦉', color: 'from-indigo-700 to-purple-900',
  },
  {
    id: 'wochenend_held', category: 'zeit',
    title: 'Wochenend-Held',
    description: 'Sowohl an einem Samstag als auch am Sonntag derselben Woche geübt',
    icon: '🛋️', color: 'from-cyan-400 to-emerald-500',
  },

]

// ─── Helpers ───────────────────────────────────────────────────────────

function countByType(history, type) {
  return history.filter(h => h.type === type).length
}

// "Skill done" means at least one history entry of that type — used by the
// allrounder achievements. We treat speaking as a separate skill from
// writing since the data file has dedicated speaking exercises now.
const SKILL_TYPES = ['grammar', 'reading', 'listening', 'writing', 'speaking']

function dateLocal(d) {
  return new Date(d).toDateString()
}
function hourOf(d) {
  return new Date(d).getHours()
}
function dayOfWeek(d) {
  return new Date(d).getDay() // 0 = Sun, 6 = Sat
}
function weekKey(d) {
  // YYYY-Www — week number per ISO 8601 (good enough)
  const date = new Date(d)
  const onejan = new Date(date.getFullYear(), 0, 1)
  const week = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7)
  return `${date.getFullYear()}-${week}`
}

function pathCompleted(level, completedSet) {
  const path = getPath(level)
  if (path.length === 0) return false
  return path.every(node => completedSet.has(node.id))
}

// ─── Earned-checks ─────────────────────────────────────────────────────

export function checkAchievements(progress, existingAchievements = []) {
  const earned = []
  const has = (id) => existingAchievements.includes(id)

  const history = progress.exerciseHistory || []
  const completed = progress.completedExercises || []
  const completedSet = new Set(completed)
  const xp = progress.xp || 0
  const streak = progress.streak || 0
  const perfectStreak = progress.perfectStreak || 0

  const grant = (id) => {
    if (has(id)) return
    const def = ALL_ACHIEVEMENTS.find(a => a.id === id)
    if (def) earned.push(def)
  }

  // ─ Erste Schritte ─
  if (completed.length >= 1) grant('primera_vez')
  if (countByType(history, 'reading')   >= 1) grant('erstes_lesen')
  if (countByType(history, 'listening') >= 1) grant('erstes_hoeren')
  if (countByType(history, 'writing')   >= 1) grant('erstes_schreiben')
  if (countByType(history, 'speaking')  >= 1) grant('erstes_sprechen')

  // ─ Konstanz / Streak ─
  if (streak >= 3)   grant('racha_3')
  if (streak >= 7)   grant('racha_7')
  if (streak >= 14)  grant('racha_14')
  if (streak >= 30)  grant('racha_30')
  if (streak >= 100) grant('racha_100')

  // ─ XP ─
  if (xp >= 100)   grant('xp_100')
  if (xp >= 500)   grant('xp_500')
  if (xp >= 1000)  grant('xp_1000')
  if (xp >= 2500)  grant('xp_2500')
  if (xp >= 5000)  grant('xp_5000')
  if (xp >= 10000) grant('xp_10000')

  // ─ Fertigkeiten ─
  const correctGrammar = history.filter(h => h.type === 'grammar' && h.score >= 70).length
  if (correctGrammar >= 100) grant('gramatico')
  if (correctGrammar >= 300) grant('gramatik_meister')

  const readingCount   = countByType(history, 'reading')
  if (readingCount >= 20) grant('lector_avido')
  if (readingCount >= 50) grant('super_leser')

  const listeningCount = countByType(history, 'listening')
  if (listeningCount >= 20) grant('oyente_experto')
  if (listeningCount >= 50) grant('super_hoerer')

  const writingCount   = countByType(history, 'writing')
  if (writingCount >= 10) grant('escritor')
  if (writingCount >= 25) grant('writer_meister')

  const speakingCount  = countByType(history, 'speaking')
  if (speakingCount >= 10) grant('sprecher')
  if (speakingCount >= 25) grant('speaker_meister')

  if (SKILL_TYPES.every(t => countByType(history, t) >= 1))  grant('alle_skills')
  if (SKILL_TYPES.every(t => countByType(history, t) >= 10)) grant('alle_skills_pro')

  // ─ Perfektion ─
  if (perfectStreak >= 5)  grant('perfeccionista')
  if (perfectStreak >= 10) grant('perfekt_10')
  if (perfectStreak >= 25) grant('perfekt_25')
  const totalPerfect = history.filter(h => h.perfect).length
  if (totalPerfect >= 50) grant('perfekt_total_50')

  // ─ Volumen ─
  // Marathon-Tag: 10+ entries on the same calendar day
  const byDay = history.reduce((acc, h) => {
    const k = dateLocal(h.date)
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})
  if (Object.values(byDay).some(n => n >= 10)) grant('marathon_tag')

  if (completed.length >= 50)  grant('total_50')
  if (completed.length >= 100) grant('total_100')
  if (completed.length >= 200) grant('total_200')

  // ─ Lernpfad / Niveau ─
  // The path itself is the deterministic content; "done" = every node
  // appears in completedExercises. Each level checked independently so
  // crossing levels stacks up the achievements.
  let allPaths = true
  for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1']) {
    if (pathCompleted(lvl, completedSet)) grant(`pfad_${lvl.toLowerCase()}`)
    else allPaths = false
  }
  if (allPaths) grant('alle_pfade')

  // ─ Zeit ─
  if (history.some(h => hourOf(h.date) < 7))  grant('frueh_aufsteher')
  if (history.some(h => hourOf(h.date) >= 23)) grant('nachteule')

  // Wochenend-Held: a Saturday and Sunday entry in the same ISO week
  const weekDays = history.reduce((acc, h) => {
    const wk = weekKey(h.date)
    const dw = dayOfWeek(h.date)
    if (!acc[wk]) acc[wk] = new Set()
    acc[wk].add(dw)
    return acc
  }, {})
  if (Object.values(weekDays).some(set => set.has(0) && set.has(6))) {
    grant('wochenend_held')
  }

  return earned.filter(Boolean)
}

export function getAchievementById(id) {
  return ALL_ACHIEVEMENTS.find(a => a.id === id)
}
