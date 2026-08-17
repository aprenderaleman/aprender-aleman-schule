// ─────────────────────────────────────────────────────────────────────
// Banco curado para el Test de Nivel SCHULE.
//
// 50 preguntas (10 por nivel, ~30 min):
//   A1: 10 — gramática + vocab + lectura + listening + plurales/posesivos/Zahlen
//   A2: 10 — Perfekt + reflexivos + adjetivos + Wechselpräpositionen + Komparativ
//   B1: 10 — Konjunktiv II + relativos + conectores + writing + passiv
//   B2: 10 — pasiva + Konjunktiv I/II Vergangenheit + idioms + speaking + Genitiv
//   C1: 10 — gramática avanzada + nominalisación + Funktionsverbgefüge + idioms
//
// Nivel resultante = el nivel más alto donde el usuario acertó >= 70%.
// Las preguntas writing/speaking se evalúan vía AI (0..1).
// ─────────────────────────────────────────────────────────────────────

export const LEVEL_TEST_QUESTIONS = [

  // ═══════════════ A1 (10) ═══════════════
  {
    id: 'a1-g-001', level: 'A1', type: 'grammar',
    prompt: 'Wie alt ___ du?',
    options: ['bin', 'bist', 'ist', 'sind'],
    correctAnswer: 'bist',
    explanation: 'Bei "du" → Verbform "bist".',
  },
  {
    id: 'a1-g-002', level: 'A1', type: 'grammar',
    prompt: 'Welcher Artikel? ___ Mädchen ist klein.',
    options: ['Der', 'Die', 'Das', 'Den'],
    correctAnswer: 'Das',
    explanation: '"Mädchen" ist ein Neutrum (Diminutiv auf -chen) → "das".',
  },
  {
    id: 'a1-g-003', level: 'A1', type: 'grammar',
    prompt: 'Was ist der Plural von "Mann"?',
    options: ['Manns', 'Männe', 'Männer', 'Manen'],
    correctAnswer: 'Männer',
    explanation: 'Mann → Männer (Umlaut + -er).',
  },
  {
    id: 'a1-g-004', level: 'A1', type: 'grammar',
    prompt: '___ Bruder heißt Tom.',
    options: ['Mein', 'Meine', 'Meinen', 'Meiner'],
    correctAnswer: 'Mein',
    explanation: 'Possessivartikel im Nominativ, "Bruder" ist maskulin → "mein".',
  },
  {
    id: 'a1-g-005', level: 'A1', type: 'grammar',
    prompt: 'Wann hast du Geburtstag? — ___ Mai.',
    options: ['In', 'Am', 'Im', 'Auf'],
    correctAnswer: 'Im',
    explanation: 'Monate verwenden "im": im Mai, im Juni, etc.',
  },
  {
    id: 'a1-g-006', level: 'A1', type: 'grammar',
    prompt: 'Wo wohnst du? — Ich wohne ___ Berlin.',
    options: ['nach', 'in', 'auf', 'zu'],
    correctAnswer: 'in',
    explanation: 'Bei Städten und Ländern (ohne Artikel) → "in".',
  },
  {
    id: 'a1-v-001', level: 'A1', type: 'vocabulary',
    prompt: 'Welches Wort passt: "Ich trinke ___."',
    options: ['Wasser', 'Brot', 'Stuhl', 'Buch'],
    correctAnswer: 'Wasser',
    explanation: '"Trinken" geht nur mit Flüssigkeiten — "Wasser".',
  },
  {
    id: 'a1-v-002', level: 'A1', type: 'vocabulary',
    prompt: '"Heute ist Mittwoch. Morgen ist ___?"',
    options: ['Dienstag', 'Donnerstag', 'Freitag', 'Sonntag'],
    correctAnswer: 'Donnerstag',
    explanation: 'Mittwoch → Donnerstag.',
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

  // ═══════════════ A2 (10) ═══════════════
  {
    id: 'a2-g-001', level: 'A2', type: 'grammar',
    prompt: 'Gestern ___ ich ins Kino gegangen.',
    options: ['bin', 'habe', 'war', 'ist'],
    correctAnswer: 'bin',
    explanation: 'Perfekt mit "gehen" (Bewegungsverb) → Hilfsverb "sein" → "bin".',
  },
  {
    id: 'a2-g-002', level: 'A2', type: 'grammar',
    prompt: 'Ich gebe ___ Buch.',
    options: ['mein Freund das', 'meinem Freund das', 'meinen Freund das', 'meinem Freund den'],
    correctAnswer: 'meinem Freund das',
    explanation: 'Dativ (wem) + Akkusativ (was): "meinem Freund" + "das Buch".',
  },
  {
    id: 'a2-g-003', level: 'A2', type: 'grammar',
    prompt: 'Wie ___ du ___ heute?',
    options: ['fühlst / dich', 'fühlst / sich', 'fühl / dich', 'fühle / dich'],
    correctAnswer: 'fühlst / dich',
    explanation: '"Sich fühlen" ist reflexiv. Das Reflexivpronomen steht nach dem Subjekt: Wie fühlst du dich heute?',
  },
  {
    id: 'a2-g-004', level: 'A2', type: 'grammar',
    prompt: 'Ich ___ jeden Morgen um 7 Uhr ___.',
    options: ['stehe / aus', 'aufstehe / —', 'stehe / auf', 'auf / stehe'],
    correctAnswer: 'stehe / auf',
    explanation: 'Trennbares Verb "aufstehen" — Präfix wandert ans Satzende.',
  },
  {
    id: 'a2-g-005', level: 'A2', type: 'grammar',
    prompt: 'Wo liegt das Buch? — Es liegt ___ Tisch.',
    options: ['auf dem', 'auf den', 'auf der', 'auf das'],
    correctAnswer: 'auf dem',
    explanation: 'Wechselpräposition + statisch (wo?) → Dativ. Tisch (m) → "auf dem".',
  },
  {
    id: 'a2-g-006', level: 'A2', type: 'grammar',
    prompt: 'Berlin ist ___ als München.',
    options: ['groß', 'großer', 'größer', 'mehr groß'],
    correctAnswer: 'größer',
    explanation: 'Komparativ von "groß" → "größer" (Umlaut + -er).',
  },
  {
    id: 'a2-v-001', level: 'A2', type: 'vocabulary',
    prompt: 'Was ist das Gegenteil von "billig"?',
    options: ['teuer', 'klein', 'groß', 'kalt'],
    correctAnswer: 'teuer',
    explanation: 'billig (günstig) ↔ teuer.',
  },
  {
    id: 'a2-v-002', level: 'A2', type: 'vocabulary',
    prompt: 'Welches Wort passt nicht: "Der Schauspieler ___ den Preis."',
    options: ['gewinnt', 'bekommt', 'erhält', 'verliert'],
    correctAnswer: 'verliert',
    explanation: 'Die anderen drei bedeuten, dass er den Preis erhält. "Verliert" drückt das Gegenteil aus.',
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

  // ═══════════════ B1 (10) ═══════════════
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
    explanation: 'Relativpronomen im Akkusativ, bezieht sich auf "Buch" (Neutrum) → "das".',
  },
  {
    id: 'b1-g-003', level: 'B1', type: 'grammar',
    prompt: 'Ich gehe nicht zur Party, ___ ich krank bin.',
    options: ['weil', 'denn', 'aber', 'obwohl'],
    correctAnswer: 'weil',
    explanation: 'Beide "weil" und "denn" begründen, aber "denn" benötigt Hauptsatz-Wortstellung ("denn ich bin krank").',
  },
  {
    id: 'b1-g-004', level: 'B1', type: 'grammar',
    prompt: 'Anstatt ___ Hause zu bleiben, ging er ins Restaurant.',
    options: ['nach', 'zu', 'in', 'bei'],
    correctAnswer: 'zu',
    explanation: '"zu Hause bleiben" — Idiom mit "zu".',
  },
  {
    id: 'b1-g-005', level: 'B1', type: 'grammar',
    prompt: 'Es regnet stark. ___ nehme ich einen Schirm mit.',
    options: ['Weil', 'Deshalb', 'Obwohl', 'Damit'],
    correctAnswer: 'Deshalb',
    explanation: '"Deshalb" = darum/aus diesem Grund (Konsequenz, Position 1 im Hauptsatz).',
  },
  {
    id: 'b1-g-006', level: 'B1', type: 'grammar',
    prompt: 'Hier ___ auch heute frische Brötchen verkauft.',
    options: ['werden', 'sind', 'haben', 'wurden'],
    correctAnswer: 'werden',
    explanation: 'Vorgangspassiv im Präsens: "werden + Partizip II".',
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

  // ═══════════════ B2 (10) ═══════════════
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
    id: 'b2-g-003', level: 'B2', type: 'grammar',
    prompt: 'Sie sagte, sie ___ keine Zeit.',
    options: ['hat', 'habe', 'hätte', 'hatte'],
    correctAnswer: 'habe',
    explanation: 'Indirekte Rede → Konjunktiv I: "sie habe".',
  },
  {
    id: 'b2-g-004', level: 'B2', type: 'grammar',
    prompt: 'Wenn ich das gewusst ___, ___ ich nicht gekommen.',
    options: ['hatte / war', 'hätte / wäre', 'habe / bin', 'hätte / hätte'],
    correctAnswer: 'hätte / wäre',
    explanation: 'Konjunktiv II Vergangenheit: "hätte + Partizip II" für irreale Bedingungen in der Vergangenheit; "wäre gekommen", weil "kommen" ein Bewegungsverb ist.',
  },
  {
    id: 'b2-g-005', level: 'B2', type: 'grammar',
    prompt: 'Ich freue mich ___ das Geschenk.',
    options: ['auf', 'über', 'an', 'von'],
    correctAnswer: 'über',
    explanation: '"sich freuen über" = etwas Aktuelles. "sich freuen auf" = etwas Zukünftiges.',
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
    id: 'b2-v-002', level: 'B2', type: 'vocabulary',
    prompt: 'Welches Wort bedeutet "trotzdem"?',
    options: ['dennoch', 'deswegen', 'allerdings', 'außerdem'],
    correctAnswer: 'dennoch',
    explanation: '"dennoch" = trotzdem (Konzessiv). "Deswegen" = darum, "allerdings" = jedoch (mild), "außerdem" = zusätzlich.',
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

  // ═══════════════ C1 (10) ═══════════════
  {
    id: 'c1-g-001', level: 'C1', type: 'grammar',
    prompt: 'Er behauptete, ___ den ganzen Tag ___.',
    options: ['er hat ... gearbeitet', 'er habe ... gearbeitet', 'er hätte ... arbeiten', 'er habe ... arbeiten'],
    correctAnswer: 'er habe ... gearbeitet',
    explanation: 'Indirekte Rede in der Vergangenheit → Konjunktiv I Perfekt: "er habe gearbeitet". Diese Form drückt die Vorzeitigkeit schon aus; ein zusätzliches "gehabt" (doppeltes Perfekt) gilt nicht als standardsprachlich.',
  },
  {
    id: 'c1-g-002', level: 'C1', type: 'grammar',
    prompt: '___ größer die Stadt, ___ höher die Mietpreise.',
    options: ['Je / desto', 'Je / je', 'Desto / je', 'Wie / so'],
    correctAnswer: 'Je / desto',
    explanation: 'Komparative Satzstruktur: "je ... desto ..."',
  },
  {
    id: 'c1-g-003', level: 'C1', type: 'grammar',
    prompt: 'Welcher Satz ist eine korrekte Nominalisierung von "Es ist wichtig, früh aufzustehen"?',
    options: [
      'Das früh Aufstehen ist wichtig.',
      'Das frühe Aufstehen ist wichtig.',
      'Das Aufstehen früh ist wichtig.',
      'Frühes aufstehen ist wichtig.',
    ],
    correctAnswer: 'Das frühe Aufstehen ist wichtig.',
    explanation: 'Substantivierter Infinitiv mit dekliniertem Adjektiv im Nominativ Neutrum: "das frühe Aufstehen".',
  },
  {
    id: 'c1-g-004', level: 'C1', type: 'grammar',
    prompt: 'Trotz ___ schwierig___ Wetter___ haben wir die Wanderung gemacht.',
    options: ['das / e / s', 'des / en / s', 'dem / en / —', 'der / en / s'],
    correctAnswer: 'des / en / s',
    explanation: 'Genitiv Neutrum: "des schwierigen Wetters". Adjektivendung -en + Substantiv -s.',
  },
  {
    id: 'c1-g-005', level: 'C1', type: 'grammar',
    prompt: 'Welcher Satz ist stilistisch am besten in einem formellen Brief?',
    options: [
      'Ich will Sie bitten, mir zu helfen.',
      'Ich möchte Sie bitten, mir zu helfen.',
      'Ich würde mich freuen, wenn Sie mir helfen könnten.',
      'Hilf mir bitte.',
    ],
    correctAnswer: 'Ich würde mich freuen, wenn Sie mir helfen könnten.',
    explanation: 'Höflichste Form mit Konjunktiv II "würde + freuen" und "könnten" — Standard für formelle Korrespondenz.',
  },
  {
    id: 'c1-g-006', level: 'C1', type: 'grammar',
    prompt: 'Sie erfreut sich ___ Gesundheit.',
    options: ['gute', 'einer guten', 'beste', 'die beste'],
    correctAnswer: 'einer guten',
    explanation: '"Sich erfreuen" verlangt Genitiv: "einer guten Gesundheit".',
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
    id: 'c1-v-002', level: 'C1', type: 'vocabulary',
    prompt: 'Was bedeutet "etwas durch die Blume sagen"?',
    options: [
      'Etwas mit Blumen schmücken',
      'Etwas indirekt / vorsichtig sagen',
      'Sehr direkt sprechen',
      'Etwas vergessen',
    ],
    correctAnswer: 'Etwas indirekt / vorsichtig sagen',
    explanation: '"Durch die Blume sagen" = nicht direkt, sondern höflich verpackt.',
  },
  {
    id: 'c1-v-003', level: 'C1', type: 'vocabulary',
    prompt: 'Welches Funktionsverbgefüge ist korrekt?',
    options: [
      'eine Frage erstellen',
      'eine Frage stellen',
      'eine Frage machen',
      'eine Frage tun',
    ],
    correctAnswer: 'eine Frage stellen',
    explanation: 'Festes Funktionsverbgefüge: "eine Frage stellen" (nicht machen oder tun).',
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
 */
export function computeLevel({ answers = {}, aiScores = {} }) {
  const breakdown = {}
  for (const lvl of LEVELS) {
    const qs = questionsByLevel(lvl)
    if (qs.length === 0) { breakdown[lvl] = 0; continue }
    let correct = 0
    for (const q of qs) {
      if (q.type === 'writing' || q.type === 'speaking') {
        const ai = aiScores[q.id]
        if (typeof ai === 'number' && ai >= 0.6) correct++
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
  if (!level) level = 'A1'

  return { level, breakdown }
}
