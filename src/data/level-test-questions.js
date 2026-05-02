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
    explanation: 'Bei "ich" → Verbform "bin".',
  },
  {
    id: 'a1-v-001', level: 'A1', type: 'vocabulary',
    prompt: 'Welches Wort passt: "Ich trinke ___."',
    options: ['Wasser', 'Brot', 'Stuhl', 'Buch'],
    correctAnswer: 'Wasser',
    explanation: '"Trinken" geht nur mit Flüssigkeiten — "Wasser".',
  },
  {
    id: 'a1-g-002', level: 'A1', type: 'grammar',
    prompt: '___ Hund ist groß. (Wähle den richtigen Artikel)',
    options: ['Der', 'Die', 'Das', 'Den'],
    correctAnswer: 'Der',
    explanation: '"Hund" ist maskulin → "der Hund".',
  },
  {
    id: 'a1-r-001', level: 'A1', type: 'reading',
    passage: 'Anna ist 22 Jahre alt. Sie wohnt in Berlin und arbeitet als Lehrerin. Sie hat zwei Brüder und eine Schwester.',
    prompt: 'Wie viele Geschwister hat Anna?',
    options: ['Zwei', 'Drei', 'Eins', 'Vier'],
    correctAnswer: 'Drei',
    explanation: '2 Brüder + 1 Schwester = 3 Geschwister.',
  },
  {
    id: 'a1-l-001', level: 'A1', type: 'listening',
    audioPrompt: 'Meine Telefonnummer ist null sieben drei vier acht zwei.',
    prompt: 'Welche Telefonnummer wurde genannt?',
    options: ['073482', '173482', '073492', '073582'],
    correctAnswer: '073482',
  },

  // ═══════════════ A2 ═══════════════
  {
    id: 'a2-g-001', level: 'A2', type: 'grammar',
    prompt: 'Gestern ___ ich ins Kino gegangen.',
    options: ['bin', 'habe', 'war', 'ist'],
    correctAnswer: 'bin',
    explanation: 'Perfekt mit "gehen" (Bewegungsverb) → Hilfsverb "sein" → "bin".',
  },
  {
    id: 'a2-v-001', level: 'A2', type: 'vocabulary',
    prompt: 'Was ist das Gegenteil von "billig"?',
    options: ['teuer', 'klein', 'groß', 'kalt'],
    correctAnswer: 'teuer',
    explanation: 'billig (günstig) ↔ teuer.',
  },
  {
    id: 'a2-g-002', level: 'A2', type: 'grammar',
    prompt: 'Ich gebe ___ Buch. (a mi amigo)',
    options: ['mein Freund das', 'meinem Freund das', 'meinen Freund das', 'meinem Freund den'],
    correctAnswer: 'meinem Freund das',
    explanation: 'Dativ (wem) + Akkusativ (was): "meinem Freund" + "das Buch".',
  },
  {
    id: 'a2-r-001', level: 'A2', type: 'reading',
    passage: 'Lieber Tom, danke für deine Einladung zur Party. Leider kann ich am Samstag nicht kommen, weil ich arbeiten muss. Vielleicht treffen wir uns nächste Woche zum Kaffee. Liebe Grüße, Lisa',
    prompt: 'Warum kann Lisa nicht zur Party kommen?',
    options: ['Sie ist krank', 'Sie muss arbeiten', 'Sie ist auf Reisen', 'Sie mag Tom nicht'],
    correctAnswer: 'Sie muss arbeiten',
  },
  {
    id: 'a2-l-001', level: 'A2', type: 'listening',
    audioPrompt: 'Der Zug nach München fährt um halb drei vom Gleis sieben ab.',
    prompt: 'Wann fährt der Zug nach München ab?',
    options: ['14:30', '15:30', '13:30', '14:00'],
    correctAnswer: '14:30',
    explanation: '"halb drei" bedeutet 14:30 Uhr.',
  },

  // ═══════════════ B1 ═══════════════
  {
    id: 'b1-g-001', level: 'B1', type: 'grammar',
    prompt: 'Wenn ich Zeit ___, würde ich öfter ins Theater gehen.',
    options: ['hatte', 'habe', 'hätte', 'hätten'],
    correctAnswer: 'hätte',
    explanation: 'Irrealer Konjunktiv II: "wenn ich hätte... würde ich..."',
  },
  {
    id: 'b1-g-002', level: 'B1', type: 'grammar',
    prompt: 'Das Buch, ___ ich gestern gekauft habe, ist sehr interessant.',
    options: ['der', 'die', 'das', 'den'],
    correctAnswer: 'das',
    explanation: 'Relativpronomen im Akkusativ, bezieht sich auf "Buch" (neutrum) → "das".',
  },
  {
    id: 'b1-v-001', level: 'B1', type: 'vocabulary',
    prompt: 'Welches Verb bedeutet "Erfolg haben"?',
    options: ['scheitern', 'gelingen', 'verlieren', 'aufgeben'],
    correctAnswer: 'gelingen',
    explanation: '"Gelingen" = etwas schafft man erfolgreich. Die anderen sind das Gegenteil.',
  },
  {
    id: 'b1-r-001', level: 'B1', type: 'reading',
    passage: 'Klimawandel ist eine der größten Herausforderungen unserer Zeit. Viele Wissenschaftler sind sich einig, dass menschliche Aktivitäten — vor allem die Verbrennung fossiler Brennstoffe — die Hauptursache sind. Trotzdem zögern manche Regierungen, wirksame Maßnahmen zu ergreifen.',
    prompt: 'Was nennt der Text als Hauptursache des Klimawandels?',
    options: [
      'Natürliche Ursachen',
      'Menschliche Aktivitäten, vor allem fossile Brennstoffe',
      'Überbevölkerung',
      'Abholzung der Wälder',
    ],
    correctAnswer: 'Menschliche Aktivitäten, vor allem fossile Brennstoffe',
  },
  {
    id: 'b1-l-001', level: 'B1', type: 'listening',
    audioPrompt: 'Wegen der schlechten Wetterbedingungen wurde das Konzert auf nächsten Samstag verschoben. Tickets behalten ihre Gültigkeit.',
    prompt: 'Was ist mit dem Konzert passiert?',
    options: [
      'Es wurde endgültig abgesagt',
      'Es wurde auf nächsten Samstag verschoben',
      'Der Veranstaltungsort wurde geändert',
      'Es beginnt später',
    ],
    correctAnswer: 'Es wurde auf nächsten Samstag verschoben',
  },
  {
    id: 'b1-w-001', level: 'B1', type: 'writing',
    prompt: 'Erzähle in 3-4 Sätzen, was du letztes Wochenende gemacht hast.',
    minWords: 25,
    maxWords: 80,
    explanation: 'Wird von der KI bewertet: Grammatik (50%), Wortschatz (30%), Kohärenz (20%).',
  },

  // ═══════════════ B2 ═══════════════
  {
    id: 'b2-g-001', level: 'B2', type: 'grammar',
    prompt: 'Das Haus ___ letztes Jahr renoviert.',
    options: ['hat', 'wurde', 'ist', 'wird'],
    correctAnswer: 'wurde',
    explanation: 'Vorgangspassiv im Präteritum: "wurde + Partizip II".',
  },
  {
    id: 'b2-g-002', level: 'B2', type: 'grammar',
    prompt: '___ er reich war, war er nicht glücklich.',
    options: ['Weil', 'Obwohl', 'Damit', 'Falls'],
    correctAnswer: 'Obwohl',
    explanation: '"Obwohl" leitet einen Konzessivsatz ein.',
  },
  {
    id: 'b2-v-001', level: 'B2', type: 'vocabulary',
    prompt: 'Was bedeutet die Redewendung "Tomaten auf den Augen haben"?',
    options: [
      'Rote Augen haben',
      'Etwas Offensichtliches nicht sehen',
      'Müde sein',
      'Eine Allergie haben',
    ],
    correctAnswer: 'Etwas Offensichtliches nicht sehen',
  },
  {
    id: 'b2-r-001', level: 'B2', type: 'reading',
    passage: 'Die Digitalisierung verändert die Arbeitswelt grundlegend. Während Routinetätigkeiten zunehmend automatisiert werden, gewinnen kreative und zwischenmenschliche Fähigkeiten an Bedeutung. Experten betonen jedoch, dass lebenslanges Lernen unerlässlich ist, um in dieser sich rasant wandelnden Umgebung wettbewerbsfähig zu bleiben.',
    prompt: 'Was ist die Hauptaussage des Textes?',
    options: [
      'Die Digitalisierung beseitigt alle Arbeitsplätze',
      'Kreative und zwischenmenschliche Fähigkeiten gewinnen an Bedeutung, lebenslanges Lernen ist nötig',
      'Nur Tech-Experten werden Arbeit haben',
      'Automatisierung verbessert alle Prozesse',
    ],
    correctAnswer: 'Kreative und zwischenmenschliche Fähigkeiten gewinnen an Bedeutung, lebenslanges Lernen ist nötig',
  },
  {
    id: 'b2-l-001', level: 'B2', type: 'listening',
    audioPrompt: 'Trotz der angekündigten Streiks haben sich Arbeitgeber und Gewerkschaft nach langen Verhandlungen auf einen Kompromiss geeinigt. Die Mitarbeiter erhalten eine Lohnerhöhung von vier Prozent.',
    prompt: 'Wie endeten die Verhandlungen?',
    options: [
      'Es kam doch zum Streik',
      'Keine Einigung erzielt',
      '4% Lohnerhöhung vereinbart',
      '14% Lohnerhöhung vereinbart',
    ],
    correctAnswer: '4% Lohnerhöhung vereinbart',
  },
  {
    id: 'b2-s-001', level: 'B2', type: 'speaking',
    prompt: 'Beschreibe in 30-60 Sekunden deinen idealen Urlaubsort und warum.',
    minSeconds: 20,
    maxSeconds: 90,
    explanation: 'Wird von der KI bewertet: Aussprache (geschätzt), Flüssigkeit, Wortschatz, Grammatik.',
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
    prompt: 'Welche Folge nennt der Text bezüglich der "Filterblasen"?',
    options: [
      'Sie steigern die Meinungsvielfalt',
      'Sie verbessern die demokratische Debatte',
      'Sie können langfristig gemeinsame Realitätsauffassungen erodieren',
      'Sie betreffen nur junge Nutzer',
    ],
    correctAnswer: 'Sie können langfristig gemeinsame Realitätsauffassungen erodieren',
  },
  {
    id: 'c1-v-001', level: 'C1', type: 'vocabulary',
    prompt: 'Was bedeutet die Redewendung "etwas auf die lange Bank schieben"?',
    options: [
      'Etwas wird länger',
      'Etwas aufschieben / verzögern',
      'Sich auf eine lange Bank setzen',
      'Etwas schnell erledigen',
    ],
    correctAnswer: 'Etwas aufschieben / verzögern',
  },
  {
    id: 'c1-g-002', level: 'C1', type: 'grammar',
    prompt: '___ größer die Stadt, ___ höher die Mietpreise.',
    options: ['Je / desto', 'Je / je', 'Desto / je', 'Wie / so'],
    correctAnswer: 'Je / desto',
    explanation: 'Komparative Satzstruktur: "je ... desto ..."',
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
