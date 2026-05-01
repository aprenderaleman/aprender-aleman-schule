// ─────────────────────────────────────────────────────────────────────
// Banco curado para el Test de Nivel SCHULE.
//
// Distribución (linear, no adaptativo):
//   A1: 5 preguntas — gramática + vocab + lectura corta + listening básico
//   A2: 5 preguntas — pasados + reading mediano + listening
//   B1: 6 preguntas — Konjunktiv II + reading + listening + 1 writing
//   B2: 6 preguntas — pasiva + idioms + reading + listening + 1 speaking
//   C1: 4 preguntas — gramática avanzada + reading complejo
//   ───
//   26 preguntas, ~12-15 min
//
// Algoritmo de scoring (linear):
//   El nivel resultante = el nivel más alto donde el usuario acertó >= 70%.
//   Las preguntas writing/speaking se evalúan vía AI (1-5) y suman a su nivel.
//
// Cada pregunta tiene:
//   id          — único, prefijo por nivel
//   level       — A1 | A2 | B1 | B2 | C1
//   type        — grammar | vocabulary | reading | listening | writing | speaking
//   prompt      — la pregunta visible
//   options     — para multiple choice
//   correctAnswer — para MC y fill-blank
//   audioPrompt — texto para TTS (solo listening)
//   passage     — texto a leer (solo reading)
//   explanation — feedback breve (mostrado solo después del test si quieren ver detalles)
// ─────────────────────────────────────────────────────────────────────

export const LEVEL_TEST_QUESTIONS = [

  // ═══════════════ A1 ═══════════════
  {
    id: 'a1-g-001', level: 'A1', type: 'grammar',
    prompt: 'Ich ___ Schüler.',
    options: ['bin', 'bist', 'ist', 'sind'],
    correctAnswer: 'bin',
    explanation: 'Pronombre "ich" (yo) → "bin".',
  },
  {
    id: 'a1-v-001', level: 'A1', type: 'vocabulary',
    prompt: '¿Qué significa "Wasser"?',
    options: ['Agua', 'Pan', 'Café', 'Leche'],
    correctAnswer: 'Agua',
  },
  {
    id: 'a1-g-002', level: 'A1', type: 'grammar',
    prompt: '___ Hund ist groß. (Wähle den richtigen Artikel)',
    options: ['Der', 'Die', 'Das', 'Den'],
    correctAnswer: 'Der',
    explanation: '"Hund" es masculino → "der Hund".',
  },
  {
    id: 'a1-r-001', level: 'A1', type: 'reading',
    passage: 'Anna ist 22 Jahre alt. Sie wohnt in Berlin und arbeitet als Lehrerin. Sie hat zwei Brüder und eine Schwester.',
    prompt: 'Wie viele Geschwister hat Anna?',
    options: ['Zwei', 'Drei', 'Eins', 'Vier'],
    correctAnswer: 'Drei',
    explanation: '2 hermanos + 1 hermana = 3 hermanos en total.',
  },
  {
    id: 'a1-l-001', level: 'A1', type: 'listening',
    audioPrompt: 'Mein Telefonnummer ist null sieben drei vier acht zwei.',
    prompt: '¿Cuál es el número de teléfono mencionado?',
    options: ['073482', '173482', '073492', '073582'],
    correctAnswer: '073482',
  },

  // ═══════════════ A2 ═══════════════
  {
    id: 'a2-g-001', level: 'A2', type: 'grammar',
    prompt: 'Gestern ___ ich ins Kino gegangen.',
    options: ['bin', 'habe', 'war', 'ist'],
    correctAnswer: 'bin',
    explanation: 'Perfekt con "gehen" (verbo de movimiento) → auxiliar "sein" → "bin".',
  },
  {
    id: 'a2-v-001', level: 'A2', type: 'vocabulary',
    prompt: '¿Cuál es el OPUESTO de "billig"?',
    options: ['teuer', 'klein', 'groß', 'kalt'],
    correctAnswer: 'teuer',
  },
  {
    id: 'a2-g-002', level: 'A2', type: 'grammar',
    prompt: 'Ich gebe ___ Buch. (a mi amigo)',
    options: ['mein Freund das', 'meinem Freund das', 'meinen Freund das', 'meinem Freund den'],
    correctAnswer: 'meinem Freund das',
    explanation: 'Dativo (a quién) + acusativo (qué): "meinem Freund" + "das Buch".',
  },
  {
    id: 'a2-r-001', level: 'A2', type: 'reading',
    passage: 'Lieber Tom, danke für deine Einladung zur Party. Leider kann ich am Samstag nicht kommen, weil ich arbeiten muss. Vielleicht treffen wir uns nächste Woche zum Kaffee. Liebe Grüße, Lisa',
    prompt: '¿Por qué Lisa no puede ir a la fiesta?',
    options: ['Está enferma', 'Tiene que trabajar', 'Está de viaje', 'No le gusta Tom'],
    correctAnswer: 'Tiene que trabajar',
  },
  {
    id: 'a2-l-001', level: 'A2', type: 'listening',
    audioPrompt: 'Der Zug nach München fährt um halb drei vom Gleis sieben ab.',
    prompt: '¿A qué hora sale el tren a Múnich?',
    options: ['14:30', '15:30', '13:30', '14:00'],
    correctAnswer: '14:30',
    explanation: '"halb drei" = 14:30 (las dos y media en sistema 24h).',
  },

  // ═══════════════ B1 ═══════════════
  {
    id: 'b1-g-001', level: 'B1', type: 'grammar',
    prompt: 'Wenn ich Zeit ___, würde ich öfter ins Theater gehen.',
    options: ['hatte', 'habe', 'hätte', 'hätten'],
    correctAnswer: 'hätte',
    explanation: 'Konjunktiv II irreal: "wenn ich hätte... würde ich..."',
  },
  {
    id: 'b1-g-002', level: 'B1', type: 'grammar',
    prompt: 'Das Buch, ___ ich gestern gekauft habe, ist sehr interessant.',
    options: ['der', 'die', 'das', 'den'],
    correctAnswer: 'das',
    explanation: 'Pronombre relativo en acusativo, refiere a "Buch" (neutro) → "das".',
  },
  {
    id: 'b1-v-001', level: 'B1', type: 'vocabulary',
    prompt: '¿Cuál de estas palabras significa "tener éxito"?',
    options: ['scheitern', 'gelingen', 'verlieren', 'aufgeben'],
    correctAnswer: 'gelingen',
  },
  {
    id: 'b1-r-001', level: 'B1', type: 'reading',
    passage: 'Klimawandel ist eine der größten Herausforderungen unserer Zeit. Viele Wissenschaftler sind sich einig, dass menschliche Aktivitäten — vor allem die Verbrennung fossiler Brennstoffe — die Hauptursache sind. Trotzdem zögern manche Regierungen, wirksame Maßnahmen zu ergreifen.',
    prompt: 'Según el texto, ¿cuál es la causa principal del cambio climático?',
    options: [
      'Causas naturales',
      'Las actividades humanas, especialmente combustibles fósiles',
      'La superpoblación',
      'La deforestación',
    ],
    correctAnswer: 'Las actividades humanas, especialmente combustibles fósiles',
  },
  {
    id: 'b1-l-001', level: 'B1', type: 'listening',
    audioPrompt: 'Wegen der schlechten Wetterbedingungen wurde das Konzert auf nächsten Samstag verschoben. Tickets behalten ihre Gültigkeit.',
    prompt: '¿Qué pasó con el concierto?',
    options: [
      'Se canceló definitivamente',
      'Se pospuso para el próximo sábado',
      'Cambió de lugar',
      'Comenzará más tarde',
    ],
    correctAnswer: 'Se pospuso para el próximo sábado',
  },
  {
    id: 'b1-w-001', level: 'B1', type: 'writing',
    prompt: 'Erzähle in 3-4 Sätzen, was du letztes Wochenende gemacht hast. (Cuenta en 3-4 frases qué hiciste el fin de semana pasado)',
    minWords: 25,
    maxWords: 80,
    explanation: 'Esta respuesta se evalúa por la IA: gramática (50%), vocabulario (30%), coherencia (20%).',
  },

  // ═══════════════ B2 ═══════════════
  {
    id: 'b2-g-001', level: 'B2', type: 'grammar',
    prompt: 'Das Haus ___ letztes Jahr renoviert.',
    options: ['hat', 'wurde', 'ist', 'wird'],
    correctAnswer: 'wurde',
    explanation: 'Vorgangspassiv en pasado: "wurde + Partizip II".',
  },
  {
    id: 'b2-g-002', level: 'B2', type: 'grammar',
    prompt: '___ er reich war, war er nicht glücklich.',
    options: ['Weil', 'Obwohl', 'Damit', 'Falls'],
    correctAnswer: 'Obwohl',
    explanation: '"Obwohl" = aunque (concesiva).',
  },
  {
    id: 'b2-v-001', level: 'B2', type: 'vocabulary',
    prompt: '¿Qué significa la expresión idiomática "Tomaten auf den Augen haben"?',
    options: [
      'Tener los ojos rojos',
      'No ver lo obvio',
      'Estar cansado',
      'Tener alergia',
    ],
    correctAnswer: 'No ver lo obvio',
  },
  {
    id: 'b2-r-001', level: 'B2', type: 'reading',
    passage: 'Die Digitalisierung verändert die Arbeitswelt grundlegend. Während Routinetätigkeiten zunehmend automatisiert werden, gewinnen kreative und zwischenmenschliche Fähigkeiten an Bedeutung. Experten betonen jedoch, dass lebenslanges Lernen unerlässlich ist, um in dieser sich rasant wandelnden Umgebung wettbewerbsfähig zu bleiben.',
    prompt: '¿Cuál es la idea principal del texto?',
    options: [
      'La digitalización elimina todos los trabajos',
      'Las habilidades creativas e interpersonales son más importantes, y se necesita aprendizaje continuo',
      'Solo los expertos en tecnología tendrán trabajo',
      'La automatización mejora todos los procesos',
    ],
    correctAnswer: 'Las habilidades creativas e interpersonales son más importantes, y se necesita aprendizaje continuo',
  },
  {
    id: 'b2-l-001', level: 'B2', type: 'listening',
    audioPrompt: 'Trotz der angekündigten Streiks haben sich Arbeitgeber und Gewerkschaft nach langen Verhandlungen auf einen Kompromiss geeinigt. Die Mitarbeiter erhalten eine Lohnerhöhung von vier Prozent.',
    prompt: '¿Qué resultado tuvieron las negociaciones?',
    options: [
      'Hubo huelga finalmente',
      'No hubo acuerdo',
      'Se acordó un aumento de 4%',
      'Se acordó un aumento de 14%',
    ],
    correctAnswer: 'Se acordó un aumento de 4%',
  },
  {
    id: 'b2-s-001', level: 'B2', type: 'speaking',
    prompt: 'Beschreibe in 30-60 Sekunden deinen idealen Urlaubsort und warum. (Describe en 30-60 segundos tu lugar ideal de vacaciones y por qué)',
    minSeconds: 20,
    maxSeconds: 90,
    explanation: 'Esta respuesta se evalúa por la IA: pronunciación (estimada), fluidez, vocabulario, gramática.',
  },

  // ═══════════════ C1 ═══════════════
  {
    id: 'c1-g-001', level: 'C1', type: 'grammar',
    prompt: 'Er behauptete, ___ den ganzen Tag gearbeitet ___.',
    options: ['er hat ... gehabt', 'er habe ... gehabt', 'er hätte ... gehabt', 'er hat ... haben'],
    correctAnswer: 'er habe ... gehabt',
    explanation: 'Konjunktiv I para discurso indirecto: "er habe gearbeitet gehabt" (Plusquamperfekt en KI).',
  },
  {
    id: 'c1-r-001', level: 'C1', type: 'reading',
    passage: 'Die zunehmende Polarisierung in den sozialen Netzwerken stellt eine Herausforderung für demokratische Diskurse dar. Algorithmen, die auf Engagement optimiert sind, fördern emotional aufgeladene Inhalte und schaffen Filterblasen, in denen Nutzer überwiegend mit Meinungen konfrontiert werden, die ihre eigenen verstärken — ein Phänomen, das langfristig zu einer Erosion gemeinsamer Realitätsauffassungen führen kann.',
    prompt: '¿Qué consecuencia menciona el texto sobre las "Filterblasen"?',
    options: [
      'Aumentan la diversidad de opinión',
      'Mejoran el debate democrático',
      'Pueden erosionar las percepciones compartidas de la realidad a largo plazo',
      'Solo afectan a usuarios jóvenes',
    ],
    correctAnswer: 'Pueden erosionar las percepciones compartidas de la realidad a largo plazo',
  },
  {
    id: 'c1-v-001', level: 'C1', type: 'vocabulary',
    prompt: 'Was bedeutet "etwas auf die lange Bank schieben"?',
    options: [
      'Algo se vuelve más largo',
      'Postergar / dejar para después',
      'Sentarse en un banco largo',
      'Resolver rápidamente',
    ],
    correctAnswer: 'Postergar / dejar para después',
  },
  {
    id: 'c1-g-002', level: 'C1', type: 'grammar',
    prompt: '___ größer die Stadt, ___ höher die Mietpreise.',
    options: ['Je / desto', 'Je / je', 'Desto / je', 'Wie / so'],
    correctAnswer: 'Je / desto',
    explanation: 'Estructura comparativa correlativa: "je ... desto ..."',
  },
]

// ─── Helpers ───────────────────────────────────────────────────────

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

export function questionsByLevel(level) {
  return LEVEL_TEST_QUESTIONS.filter(q => q.level === level)
}

export function totalQuestions() {
  return LEVEL_TEST_QUESTIONS.length
}

/**
 * Calculates resulting CEFR level given an answers map { questionId: answer }.
 * Linear algorithm: highest level where ≥70% correct in that level's bucket.
 *
 * Open-ended responses (writing/speaking) get scored 0..1 separately by the
 * server-side AI evaluator; that score is passed in `aiScores` map.
 *
 *   const result = computeLevel({
 *     answers: { 'a1-g-001': 'bin', ... },
 *     aiScores: { 'b1-w-001': 0.8, 'b2-s-001': 0.6 },
 *   })
 *   // → { level: 'B1', breakdown: { A1: 1.0, A2: 1.0, B1: 0.83, B2: 0.5, C1: 0.25 } }
 */
export function computeLevel({ answers = {}, aiScores = {} }) {
  const breakdown = {}
  for (const lvl of LEVELS) {
    const qs = questionsByLevel(lvl)
    if (qs.length === 0) { breakdown[lvl] = 0; continue }
    let correct = 0
    for (const q of qs) {
      if (q.type === 'writing' || q.type === 'speaking') {
        // AI score is 0..1; >= 0.6 counts as "correct" for level discrimination
        const ai = aiScores[q.id]
        if (typeof ai === 'number' && ai >= 0.6) correct++
        // If user skipped (no AI score), counts as 0
      } else {
        if (answers[q.id] === q.correctAnswer) correct++
      }
    }
    breakdown[lvl] = correct / qs.length
  }

  // Find the highest level where the user passed (≥70%)
  let level = null
  for (const lvl of LEVELS) {
    if (breakdown[lvl] >= 0.7) level = lvl
    else break
  }
  // If user didn't even pass A1, they're "pre-A1" — recommend starting at A1
  if (!level) level = 'A1'

  return { level, breakdown }
}
