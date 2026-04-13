/**
 * Goethe-Zertifikat B2 — Hören
 *
 * Offiziell: 4 Teile, ~30 Items, 40 min, pass = 60%.
 * Kompakte Version: 4 Teile, 20 Items, pass bei 12.
 *   Teil 1: Kurzgespräche, MC, 1x hören
 *   Teil 2: Radiosendung, R/F, 1x hören
 *   Teil 3: Interview, MC, 2x hören
 *   Teil 4: Vortrag, R/F, 1x hören
 */

export const goetheB2HoerenExams = [
  {
    id: 'goethe-b2-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'B2',
    module: 'hoeren',
    title: 'Goethe B2 — Hören · Modellsatz 1',
    description: 'B2-Hörverstehen mit Kurzgesprächen, Radiosendung, Interview und Vortrag.',
    durationMinutes: 40,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1 — Kurzgespräche',
        instructions: 'Du hörst fünf kurze Gespräche. Du hörst jedes Gespräch einmal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'b2h1-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-1.mp3',
              allowedPlays: 1,
              label: 'Gespräch 1 — Im Büro',
              transcript:
                'Frau: „Herr Becker, könnten Sie bitte das Protokoll der gestrigen Sitzung bis morgen Mittag fertigstellen? Frau Dr. Lange möchte es vor der Vorstandssitzung sehen." Mann: „Natürlich, aber ich habe heute Nachmittag noch zwei Kundentermine. Geht es auch bis 15 Uhr morgen?" Frau: „Hm, eigentlich brauche ich es lieber bis 12 Uhr. Vielleicht können Sie es heute Abend noch fertig machen?"',
            },
            prompt: 'Wann soll Herr Becker das Protokoll spätestens abgeben?',
            options: [
              { id: 'a', text: 'Heute Abend.' },
              { id: 'b', text: 'Morgen um 12 Uhr.' },
              { id: 'c', text: 'Morgen um 15 Uhr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h1-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-2.mp3',
              allowedPlays: 1,
              label: 'Gespräch 2 — Reisebüro',
              transcript:
                'Kundin: „Wir möchten einen einwöchigen Urlaub in Italien buchen, am liebsten direkt am Meer, aber bezahlbar." Berater: „Gerne. Wir hätten ein schönes Hotel in der Toskana, etwa 15 Minuten zu Fuß zum Strand, ab 720 Euro pro Person." Kundin: „Das klingt gut. Allerdings hätten wir lieber etwas direkt am Strand, auch wenn es etwas teurer ist." Berater: „Dann empfehle ich Ihnen das Resort in Rimini, direkt am Meer, ab 950 Euro."',
            },
            prompt: 'Wofür entscheidet sich die Kundin wahrscheinlich?',
            options: [
              { id: 'a', text: 'Für das Hotel in der Toskana.' },
              { id: 'b', text: 'Für das Resort in Rimini.' },
              { id: 'c', text: 'Für beide Angebote.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h1-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-3.mp3',
              allowedPlays: 1,
              label: 'Gespräch 3 — Im Restaurant',
              transcript:
                'Mann: „Wir würden gerne bestellen. Ich nehme die Pasta mit Meeresfrüchten." Frau: „Und für mich bitte das vegetarische Risotto. Aber ohne Pilze, ich habe eine Allergie." Kellner: „Natürlich, kein Problem. Möchten Sie auch Getränke?" Frau: „Nur Wasser, bitte. Mein Mann nimmt ein Glas Weißwein."',
            },
            prompt: 'Was bestellt die Frau?',
            options: [
              { id: 'a', text: 'Pasta mit Meeresfrüchten und Wasser.' },
              { id: 'b', text: 'Risotto ohne Pilze und Wasser.' },
              { id: 'c', text: 'Risotto und Weißwein.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h1-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-4.mp3',
              allowedPlays: 1,
              label: 'Gespräch 4 — Beim Arzt',
              transcript:
                'Patient: „Frau Doktor, ich habe seit zwei Wochen ständig Kopfschmerzen und kann nicht gut schlafen." Ärztin: „Wie viele Stunden arbeiten Sie denn pro Tag?" Patient: „Im Moment etwa 11 Stunden, manchmal mehr. Wir haben ein großes Projekt." Ärztin: „Das ist eindeutig zu viel. Ich verschreibe Ihnen erstmal nichts. Versuchen Sie, weniger zu arbeiten und mehr zu schlafen. Wenn es in zwei Wochen nicht besser ist, kommen Sie wieder."',
            },
            prompt: 'Was empfiehlt die Ärztin?',
            options: [
              { id: 'a', text: 'Mehr Medikamente nehmen.' },
              { id: 'b', text: 'Den Lebensstil ändern und weniger arbeiten.' },
              { id: 'c', text: 'Sofort ins Krankenhaus gehen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h1-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-5.mp3',
              allowedPlays: 1,
              label: 'Gespräch 5 — In der Universität',
              transcript:
                'Studentin: „Entschuldigung, ich habe die Frist für die Anmeldung zur Klausur verpasst. Was kann ich tun?" Sekretärin: „Das ist schwierig. Eigentlich endete die Frist gestern um 18 Uhr. Aber Sie können einen schriftlichen Antrag auf Nachfrist beim Prüfungsamt stellen, mit Begründung." Studentin: „Bekomme ich dann sicher die Genehmigung?" Sekretärin: „Sicher nicht. Es hängt vom Grund ab. Wenn Sie z. B. krank waren und ein Attest haben, ist die Chance besser."',
            },
            prompt: 'Was muss die Studentin tun, um doch noch teilzunehmen?',
            options: [
              { id: 'a', text: 'Sie kann sich nicht mehr anmelden.' },
              { id: 'b', text: 'Sie soll einen schriftlichen Antrag stellen.' },
              { id: 'c', text: 'Sie soll direkt mit dem Professor sprechen.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Radiosendung',
        instructions: 'Du hörst eine Radiosendung über das Thema „Zero Waste". Du hörst die Sendung einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Radiosendung: Zero Waste — Leben ohne Müll',
          audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-2.mp3',
          transcript:
            `Moderator: „Willkommen zu unserer Sendung 'Umwelt heute'. Heute sprechen wir über die Zero-Waste-Bewegung. Unser Gast ist Lena Hofmann, die seit fünf Jahren versucht, möglichst keinen Müll zu produzieren. Frau Hofmann, wie kam es dazu?"

Lena Hofmann: „Es begann mit einem Dokumentarfilm über Plastik im Meer. Das hat mich so schockiert, dass ich beschloss, mein Leben zu ändern. Anfangs war es schwer, aber heute werfe ich pro Monat etwa nur ein kleines Glas voller Müll weg. Alles andere ist kompostierbar oder wiederverwendbar."

Moderator: „Das klingt fast unmöglich. Wie machen Sie zum Beispiel beim Einkaufen?"

Lena Hofmann: „Ich gehe immer mit eigenen Stoffbeuteln und Glasbehältern in den Unverpackt-Laden. Dort kaufe ich Reis, Nudeln, Müsli, sogar Olivenöl ohne jede Verpackung. Obst und Gemüse hole ich auf dem Wochenmarkt."

Moderator: „Aber ist das nicht teurer als im Supermarkt?"

Lena Hofmann: „Das stimmt, einige Produkte sind etwas teurer. Aber ich spare auch viel Geld, weil ich weniger spontan kaufe und keine Convenience-Produkte mehr verwende. Insgesamt zahle ich weniger als früher."

Moderator: „Was würden Sie unseren Hörerinnen und Hörern empfehlen, die auch weniger Müll produzieren möchten?"

Lena Hofmann: „Man muss nicht alles auf einmal ändern. Beginnt mit einer kleinen Sache: Kauft euch eine wiederverwendbare Trinkflasche, nehmt einen Stoffbeutel zum Einkaufen mit, lernt Brot selbst zu backen. Jeder kleine Schritt zählt — und plötzlich macht es richtig Spaß."`,
        },
        questions: [
          { id: 'b2h2-1', type: 'true-false', statement: 'Lena Hofmann begann ihren Lebensstil wegen eines Dokumentarfilms.', correct: true, points: 1 },
          { id: 'b2h2-2', type: 'true-false', statement: 'Sie produziert pro Tag ein Glas voller Müll.', correct: false, points: 1 },
          { id: 'b2h2-3', type: 'true-false', statement: 'Lena Hofmann kauft alles ausschließlich im Supermarkt.', correct: false, points: 1 },
          { id: 'b2h2-4', type: 'true-false', statement: 'Insgesamt gibt sie weniger Geld aus als früher.', correct: true, points: 1 },
          { id: 'b2h2-5', type: 'true-false', statement: 'Sie empfiehlt, sofort den ganzen Lebensstil radikal zu ändern.', correct: false, points: 1 },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3 — Interview',
        instructions: 'Du hörst ein Interview mit dem Architekten Klaus Berger über nachhaltiges Bauen. Du hörst das Interview zweimal. Wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Interview: Nachhaltiges Bauen mit Klaus Berger',
          audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-3.mp3',
          transcript:
            `Interviewerin: „Herr Berger, was bedeutet eigentlich 'nachhaltiges Bauen'?"

Klaus Berger: „Nachhaltiges Bauen heißt, Häuser so zu planen und zu bauen, dass sie möglichst wenig Energie und Ressourcen verbrauchen — sowohl beim Bau selbst als auch über die gesamte Lebensdauer. Es geht aber auch um Wohnqualität: gute Luft, viel Tageslicht, gesunde Materialien."

Interviewerin: „Welche Materialien verwenden Sie am liebsten?"

Klaus Berger: „Holz ist mein absolutes Lieblingsmaterial, weil es nachwächst und CO2 speichert. Außerdem fühlen sich Holzhäuser sehr angenehm an. Lehm, Hanf und Schafwolle sind ebenfalls ausgezeichnete natürliche Baumaterialien."

Interviewerin: „Sind solche Häuser nicht viel teurer als konventionelle?"

Klaus Berger: „Das ist ein hartnäckiger Mythos. Die Baukosten sind tatsächlich oft 5 bis 10 Prozent höher. Aber rechnet man die Energieeinsparungen über 20, 30 Jahre, sind nachhaltige Häuser deutlich günstiger. Außerdem gibt es staatliche Förderungen."

Interviewerin: „Was ist die größte Herausforderung beim nachhaltigen Bauen?"

Klaus Berger: „Die Bauunternehmen sind oft skeptisch und haben wenig Erfahrung mit den neuen Materialien. Wir brauchen mehr Fortbildung und vor allem mehr politischen Willen. In manchen Ländern wie Österreich oder der Schweiz ist man da viel weiter als in Deutschland."

Interviewerin: „Was raten Sie jemandem, der ein Haus bauen möchte?"

Klaus Berger: „Holt euch von Anfang an einen Architekten, der Erfahrung mit Nachhaltigkeit hat. Plant nicht zu groß — kleinere Häuser sparen automatisch Energie. Und investiert in gute Dämmung und Fenster. Das zahlt sich aus."`,
        },
        questions: [
          {
            id: 'b2h3-1',
            type: 'multiple-choice',
            prompt: 'Was ist laut Klaus Berger das Hauptziel des nachhaltigen Bauens?',
            options: [
              { id: 'a', text: 'Häuser möglichst billig zu bauen.' },
              { id: 'b', text: 'Energie und Ressourcen sparen, plus gute Wohnqualität.' },
              { id: 'c', text: 'Möglichst große Häuser zu errichten.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h3-2',
            type: 'multiple-choice',
            prompt: 'Warum ist Holz sein Lieblingsmaterial?',
            options: [
              { id: 'a', text: 'Weil es das billigste Material ist.' },
              { id: 'b', text: 'Weil es nachwächst und CO2 speichert.' },
              { id: 'c', text: 'Weil es überall verfügbar ist.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h3-3',
            type: 'multiple-choice',
            prompt: 'Sind nachhaltige Häuser teurer?',
            options: [
              { id: 'a', text: 'Ja, immer deutlich teurer.' },
              { id: 'b', text: 'Anfangs etwas teurer, langfristig günstiger.' },
              { id: 'c', text: 'Nein, immer billiger.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2h3-4',
            type: 'multiple-choice',
            prompt: 'Was ist laut Berger die größte Herausforderung?',
            options: [
              { id: 'a', text: 'Skepsis und mangelnde Erfahrung der Bauunternehmen.' },
              { id: 'b', text: 'Schlechte Materialien.' },
              { id: 'c', text: 'Fehlende Bauplätze.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'b2h3-5',
            type: 'multiple-choice',
            prompt: 'Was empfiehlt er Bauherren?',
            options: [
              { id: 'a', text: 'Möglichst groß bauen.' },
              { id: 'b', text: 'Erfahrenen Architekten suchen, klein und gut gedämmt bauen.' },
              { id: 'c', text: 'Alles selbst planen, um Geld zu sparen.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4 — Vortrag',
        instructions: 'Du hörst einen Kurzvortrag über das Thema „Bedingungsloses Grundeinkommen". Du hörst den Vortrag einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Vortrag: Das bedingungslose Grundeinkommen',
          audioUrl: '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-4.mp3',
          transcript:
            `„Liebe Zuhörerinnen und Zuhörer, willkommen zu meinem Vortrag über das bedingungslose Grundeinkommen, kurz BGE.

Die Idee ist einfach: Jede Bürgerin und jeder Bürger erhält monatlich einen festen Geldbetrag vom Staat — ohne Bedingungen, ohne Antrag, ohne Bedürftigkeitsprüfung. In den meisten Modellen liegt dieser Betrag bei etwa 1.000 bis 1.500 Euro pro Person.

Die Befürworter argumentieren, dass das BGE Armut wirksam bekämpfen würde. Niemand müsste mehr aus reiner Not jeden Job annehmen. Menschen hätten die Freiheit, sich für sinnvolle Arbeit oder kreative Projekte zu entscheiden. Auch unbezahlte Arbeit wie Pflege von Angehörigen oder ehrenamtliches Engagement würde endlich gewürdigt.

Die Kritiker hingegen befürchten, dass ein BGE zu Arbeitslosigkeit führen würde. Warum sollte jemand noch arbeiten, wenn er ohnehin Geld bekommt? Außerdem sei die Finanzierung extrem schwierig: Allein in Deutschland würde ein Grundeinkommen von 1.200 Euro etwa eine Billion Euro pro Jahr kosten.

Erste Pilotprojekte in Finnland, Kanada und einigen deutschen Städten zeigen jedoch ein anderes Bild: Die meisten Teilnehmer haben weiterhin gearbeitet, sogar mit höherer Zufriedenheit. Allerdings waren diese Studien zu klein und zu kurz, um endgültige Aussagen zu erlauben.

Mein Fazit: Das bedingungslose Grundeinkommen ist eine faszinierende Idee, die noch viele offene Fragen aufwirft. Die Debatte wird uns sicherlich noch lange begleiten. Vielen Dank für Ihre Aufmerksamkeit!"`,
        },
        questions: [
          { id: 'b2h4-1', type: 'true-false', statement: 'Das bedingungslose Grundeinkommen wird ohne jede Bedingung gezahlt.', correct: true, points: 1 },
          { id: 'b2h4-2', type: 'true-false', statement: 'Die meisten Modelle liegen bei 500 Euro pro Person.', correct: false, points: 1 },
          { id: 'b2h4-3', type: 'true-false', statement: 'Befürworter sehen darin eine Möglichkeit, Armut zu bekämpfen.', correct: true, points: 1 },
          { id: 'b2h4-4', type: 'true-false', statement: 'In den Pilotprojekten haben fast alle Teilnehmer aufgehört zu arbeiten.', correct: false, points: 1 },
          { id: 'b2h4-5', type: 'true-false', statement: 'Der Vortragende hält das BGE für eine endgültig geklärte Sache.', correct: false, points: 1 },
        ],
      },
    ],
  },
]
