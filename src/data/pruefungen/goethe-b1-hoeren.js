/**
 * Goethe-Zertifikat B1 — Hören
 *
 * Official structure (4 Teile, ~30 items, 40 min, pass = 60%):
 *   Teil 1: 10 Aufgaben — kurze Texte / Durchsagen, R/F + MC, 1x hören
 *   Teil 2: 5 Aufgaben — eine Führung / ein Vortrag, MC, 1x hören
 *   Teil 3: 7 Aufgaben — informelles Gespräch, R/F, 2x hören
 *   Teil 4: 8 Aufgaben — Diskussion zwischen 2 Personen, Meinung zuordnen, 2x hören
 *
 * Wir verwenden eine kompakte Version mit 20 Items, alle 4 Teile vertreten.
 */

export const goetheB1HoerenExams = [
  {
    id: 'goethe-b1-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'B1',
    module: 'hoeren',
    title: 'Goethe B1 — Hören · Modellsatz 1',
    description: 'B1-Hörverstehen mit allen 4 Teilen.',
    durationMinutes: 35,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Du hörst fünf kurze Texte. Du hörst jeden Text einmal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'b1h1-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 1 — Anrufbeantworter',
              transcript:
                '„Guten Tag, hier spricht Frau Wagner von der Firma Müller & Co. Ich rufe wegen Ihres Bewerbungsgesprächs an. Leider müssen wir den Termin am Mittwoch verschieben. Wäre Donnerstagnachmittag um 14 Uhr für Sie möglich? Bitte bestätigen Sie kurz per E-Mail. Vielen Dank!“',
            },
            prompt: 'Was möchte Frau Wagner?',
            options: [
              { id: 'a', text: 'Das Bewerbungsgespräch absagen.' },
              { id: 'b', text: 'Das Bewerbungsgespräch auf Donnerstag verschieben.' },
              { id: 'c', text: 'Den Bewerber zum Mittagessen einladen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1h1-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 2 — Wetterbericht',
              transcript:
                '„Und nun zum Wetter: Im Norden Deutschlands ist morgen mit Sturm und starkem Regen zu rechnen. Im Süden hingegen wird es überwiegend sonnig und warm — bis zu 28 Grad. In der Mitte des Landes wechselhaft.“',
            },
            prompt: 'Wo wird es morgen am wärmsten?',
            options: [
              { id: 'a', text: 'Im Norden' },
              { id: 'b', text: 'Im Süden' },
              { id: 'c', text: 'In der Mitte' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1h1-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 3 — Verkehrsmeldung',
              transcript:
                '„Achtung Autofahrer auf der A9 in Richtung Berlin: Wegen eines Unfalls bei Bayreuth ist die linke Spur gesperrt. Es bildet sich ein Stau von etwa 8 Kilometern. Bitte rechnen Sie mit einer Verzögerung von mindestens 45 Minuten.“',
            },
            prompt: 'Was ist auf der A9 passiert?',
            options: [
              { id: 'a', text: 'Es gibt Bauarbeiten.' },
              { id: 'b', text: 'Es gab einen Unfall.' },
              { id: 'c', text: 'Die Straße ist komplett gesperrt.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1h1-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 4 — Durchsage Bahnhof',
              transcript:
                '„Information für die Reisenden des ICE 815 nach Hamburg: Der Zug fährt heute ausnahmsweise nicht von Gleis 12, sondern von Gleis 5. Wir bitten Sie, sich rechtzeitig zum Gleis 5 zu begeben. Wir entschuldigen uns für die Unannehmlichkeit.“',
            },
            prompt: 'Was ändert sich beim ICE 815?',
            options: [
              { id: 'a', text: 'Der Zug hat Verspätung.' },
              { id: 'b', text: 'Der Zug fährt von einem anderen Gleis ab.' },
              { id: 'c', text: 'Der Zug fällt heute aus.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1h1-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 5 — Werbung',
              transcript:
                '„Achtung, liebe Kunden! Bis Samstag haben wir alle Wintermäntel um 50 Prozent reduziert. Außerdem erhalten Sie beim Kauf von zwei Schals einen dritten gratis dazu. Besuchen Sie uns im Modehaus Stern in der Innenstadt!“',
            },
            prompt: 'Welches Angebot gilt im Modehaus Stern?',
            options: [
              { id: 'a', text: 'Alle Schals sind 50 % billiger.' },
              { id: 'b', text: 'Wintermäntel kosten die Hälfte.' },
              { id: 'c', text: 'Es gibt überall 50 % Rabatt.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions: 'Du hörst eine Stadtführung. Du hörst den Text einmal. Wähle bei den Aufgaben 6-10 die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          audioUrl: null,
          allowedPlays: 1,
          label: 'Stadtführung durch Heidelberg',
          transcript:
            `Liebe Gäste, herzlich willkommen zur Stadtführung durch Heidelberg!

Heidelberg ist eine der ältesten und bekanntesten Universitätsstädte Deutschlands. Die Universität wurde im Jahr 1386 gegründet und ist damit die älteste Universität Deutschlands. Heute studieren hier etwa 30.000 Studenten aus aller Welt.

Unser erster Halt ist das berühmte Heidelberger Schloss. Es liegt auf einem Hügel über der Altstadt und bietet einen wunderschönen Blick auf den Neckar. Das Schloss wurde im 13. Jahrhundert gebaut und ist heute größtenteils eine Ruine — es wurde im Lauf der Geschichte mehrmals zerstört, vor allem durch Krieg und Blitzschlag.

Wir erreichen das Schloss am besten mit der Bergbahn, die seit 1890 in Betrieb ist. Die Fahrt dauert nur drei Minuten. Wer lieber zu Fuß gehen möchte, braucht etwa 20 Minuten — der Weg geht durch einen schönen alten Garten.

Im Schloss befindet sich übrigens das berühmte „Heidelberger Fass“ — das größte Weinfass der Welt. Es wurde 1751 gebaut und kann etwa 220.000 Liter Wein fassen. Heute steht es nur noch zur Dekoration da.

Nach dem Schlossbesuch gehen wir gemeinsam zur Alten Brücke, die über den Neckar führt. Sie wurde 1788 erbaut und ist heute eine der bekanntesten Brücken Deutschlands. Bitte achten Sie auf die Affen-Statue am Brückenende — sie soll Glück bringen, wenn man sie berührt.

Die Tour dauert insgesamt etwa drei Stunden. Bitte bleiben Sie zusammen und stellen Sie Fragen, wenn Sie etwas wissen möchten. Viel Spaß!`,
        },
        questions: [
          { id: 'b1h2-1', type: 'multiple-choice', prompt: 'Wann wurde die Universität Heidelberg gegründet?', options: [{ id: 'a', text: '1290' }, { id: 'b', text: '1386' }, { id: 'c', text: '1788' }], correct: 'b', points: 1 },
          { id: 'b1h2-2', type: 'multiple-choice', prompt: 'Wie kann man am schnellsten zum Schloss kommen?', options: [{ id: 'a', text: 'Mit dem Bus' }, { id: 'b', text: 'Zu Fuß durch den Garten' }, { id: 'c', text: 'Mit der Bergbahn' }], correct: 'c', points: 1 },
          { id: 'b1h2-3', type: 'multiple-choice', prompt: 'Was ist das „Heidelberger Fass“?', options: [{ id: 'a', text: 'Das größte Weinfass der Welt' }, { id: 'b', text: 'Ein altes Brauereigebäude' }, { id: 'c', text: 'Ein Restaurant im Schloss' }], correct: 'a', points: 1 },
          { id: 'b1h2-4', type: 'multiple-choice', prompt: 'Was soll Glück bringen?', options: [{ id: 'a', text: 'Das Schloss zu besuchen' }, { id: 'b', text: 'Den Wein im Fass zu trinken' }, { id: 'c', text: 'Die Affen-Statue an der Brücke zu berühren' }], correct: 'c', points: 1 },
          { id: 'b1h2-5', type: 'multiple-choice', prompt: 'Wie lange dauert die Tour?', options: [{ id: 'a', text: 'Etwa eine Stunde' }, { id: 'b', text: 'Etwa zwei Stunden' }, { id: 'c', text: 'Etwa drei Stunden' }], correct: 'c', points: 1 },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions: 'Du hörst ein Gespräch zwischen zwei Freunden. Du hörst das Gespräch zweimal. Sind die Aussagen 11-15 richtig oder falsch?',
        context: {
          type: 'audio',
          audioUrl: null,
          allowedPlays: 2,
          label: 'Gespräch zwischen Lara und Tobias über den Urlaub',
          transcript:
            `Lara: Hallo Tobi! Wie war dein Urlaub in Italien?

Tobias: Hi Lara! Es war super, danke! Wir waren zwei Wochen an der toskanischen Küste, in einem kleinen Dorf namens Marina di Pisa.

Lara: Das klingt schön. Seid ihr geflogen?

Tobias: Nein, wir sind mit dem Auto gefahren. Das war eine lange Fahrt — fast 12 Stunden — aber so konnten wir auch unsere Fahrräder mitnehmen. Wir wollten unbedingt vor Ort Rad fahren.

Lara: Und das Wetter? In Italien soll es ja gerade sehr heiß sein.

Tobias: Ja, es war wirklich heiß, manchmal über 35 Grad. Deshalb sind wir morgens immer früh aufgestanden — gegen sechs Uhr — und haben unsere Ausflüge in den kühleren Stunden gemacht. Mittags haben wir am Pool oder am Strand entspannt.

Lara: Habt ihr auch viel italienisches Essen probiert?

Tobias: Klar! Pasta, Pizza, Eis — das alles. Aber das Beste waren die frischen Meeresfrüchte. Ich habe zum ersten Mal Tintenfisch probiert und war begeistert!

Lara: Lustig, ich bin gar kein Fan von Meeresfrüchten. Würdet ihr nochmal dorthin fahren?

Tobias: Auf jeden Fall, vielleicht im nächsten Frühling — dann ist es nicht so heiß und man kann besser wandern.`,
        },
        questions: [
          { id: 'b1h3-1', type: 'true-false', statement: 'Tobias war zwei Wochen in Italien.', correct: true, points: 1 },
          { id: 'b1h3-2', type: 'true-false', statement: 'Sie sind nach Italien geflogen.', correct: false, points: 1 },
          { id: 'b1h3-3', type: 'true-false', statement: 'Im Sommer war es in der Toskana sehr heiß.', correct: true, points: 1 },
          { id: 'b1h3-4', type: 'true-false', statement: 'Tobias hat zum ersten Mal Tintenfisch gegessen und es nicht gemocht.', correct: false, points: 1 },
          { id: 'b1h3-5', type: 'true-false', statement: 'Tobias möchte vielleicht im Frühling wieder dorthin fahren.', correct: true, points: 1 },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions:
          'Du hörst eine Diskussion zwischen Anna und Markus über das Thema „Im Homeoffice arbeiten“. Wer sagt was? Wähle für jede Aussage Anna (a), Markus (m) oder beide (b).',
        context: {
          type: 'audio',
          audioUrl: null,
          allowedPlays: 2,
          label: 'Diskussion: Homeoffice — pro und contra',
          transcript:
            `Moderator: Heute sprechen Anna und Markus über das Homeoffice.

Anna: Ich arbeite seit zwei Jahren komplett von zu Hause aus und kann mir gar nichts anderes mehr vorstellen. Ich spare jeden Tag fast zwei Stunden Fahrtzeit, weil ich nicht ins Büro pendeln muss.

Markus: Das stimmt, der Wegfall der Pendelzeit ist auch für mich der größte Vorteil. Aber ich finde, das war es dann auch schon. Ich vermisse meine Kollegen, das spontane Gespräch in der Kaffeeküche und einfach den Austausch.

Anna: Da hast du recht — den Austausch vermisse ich auch manchmal. Aber wir sehen uns ja online in den Meetings.

Markus: Online ist nicht dasselbe. Ich finde, kreative Ideen entstehen viel besser, wenn man sich persönlich gegenübersitzt. Außerdem ist es schwer, im Homeoffice Arbeit und Privatleben zu trennen.

Anna: Das Trennen ist tatsächlich eine Herausforderung. Ich habe mir deshalb ein eigenes Arbeitszimmer eingerichtet und mache Pausen wie im Büro.

Markus: Trotzdem würde ich gerne eine Mischung haben — drei Tage Büro, zwei Tage zu Hause.

Anna: Das wäre für mich auch in Ordnung.`,
        },
        questions: [
          {
            id: 'b1h4-1',
            type: 'multiple-choice',
            prompt: '„Im Homeoffice spare ich viel Zeit, weil ich nicht pendeln muss.“',
            options: [
              { id: 'a', text: 'Anna' },
              { id: 'm', text: 'Markus' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1h4-2',
            type: 'multiple-choice',
            prompt: '„Ich vermisse meine Kollegen und den persönlichen Austausch.“',
            options: [
              { id: 'a', text: 'Anna' },
              { id: 'm', text: 'Markus' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'm',
            points: 1,
          },
          {
            id: 'b1h4-3',
            type: 'multiple-choice',
            prompt: '„Es ist im Homeoffice schwer, Arbeit und Privatleben zu trennen.“',
            options: [
              { id: 'a', text: 'Anna' },
              { id: 'm', text: 'Markus' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'm',
            points: 1,
          },
          {
            id: 'b1h4-4',
            type: 'multiple-choice',
            prompt: '„Ich habe mir ein eigenes Arbeitszimmer eingerichtet.“',
            options: [
              { id: 'a', text: 'Anna' },
              { id: 'm', text: 'Markus' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'b1h4-5',
            type: 'multiple-choice',
            prompt: '„Eine Mischung aus Büro und Homeoffice ist akzeptabel.“',
            options: [
              { id: 'a', text: 'Anna' },
              { id: 'm', text: 'Markus' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
