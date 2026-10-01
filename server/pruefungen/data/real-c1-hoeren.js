/**
 * Deutsch C1 — Hören · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz: 3 Teile, 15 Items, 40 min, bestanden ab 9.
 *   Teil 1: Telefonnachricht, R/F, 1x hören
 *   Teil 2: Podiumsdiskussion, MC, 2x hören
 *   Teil 3: Wissenschaftlicher Vortrag, R/F, 1x hören
 *
 * Kein audioUrl: Der Server erzeugt das Audio aus dem Transkript.
 */

export const realC1HoerenExams = [
  {
    id: 'real-c1-hoeren-1',
    provider: 'goethe',
    level: 'C1',
    module: 'hoeren',
    pool: 'real',
    title: 'Deutsch C1 — Hören · Prüfung',
    description: 'Anspruchsvolles Hörverstehen mit Telefonnachricht, Podiumsdiskussion und Fachvortrag.',
    durationMinutes: 40,
    maxScore: 15,
    passScore: 9,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1 — Telefonnachricht',
        instructions: 'Du hörst eine Nachricht auf einem Anrufbeantworter. Du hörst die Nachricht einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Anrufbeantworter: Herr Reuter vom Verlag',
          transcript:
            `„Guten Tag, Frau Sommerfeld, hier spricht Jonas Reuter, Ihr Lektor aus dem Verlag. Ich melde mich wegen Ihres Buches über die Geschichte der Gartenstädte, denn es gibt einige Neuigkeiten.

Zunächst zum Erscheinungstermin. Wir wollten das Buch ja eigentlich Mitte März herausbringen. Das lässt sich leider nicht halten, weil die Druckerei im Moment nicht genug Papier bekommt. Der neue Termin ist Anfang Mai.

Dafür habe ich auch eine gute Nachricht. Die Buchhandlungen haben schon erstaunlich viel vorbestellt. Deshalb drucken wir in der ersten Auflage nicht dreitausend, sondern fünftausend Exemplare.

Was den Umschlag betrifft, so hat der zweite Entwurf der Grafikerin in unserer Vertriebsabteilung niemanden überzeugt. Wir bleiben also beim ersten Entwurf mit der alten Luftaufnahme, der Ihnen ja von Anfang an besser gefallen hat.

Die Druckfahnen schicke ich Ihnen nicht, wie besprochen, Ende des Monats, sondern schon am kommenden Montag. Sie haben dann zwei Wochen Zeit, um alles durchzusehen und mir Ihre Korrekturen zurückzuschicken.

Und noch etwas. Im Juni würden wir Sie gern auf eine kleine Lesereise schicken, mit Stationen in Leipzig, Köln und Freiburg. Fahrt und Übernachtung übernimmt selbstverständlich der Verlag.

Rufen Sie mich doch bitte bis Freitag zurück, am besten nachmittags, denn vormittags bin ich in Besprechungen. Vielen Dank und auf Wiederhören!“`,
        },
        questions: [
          { id: 'rc1h1-1', type: 'true-false', statement: 'Das Buch kommt früher auf den Markt als ursprünglich geplant.', correct: false, points: 1 },
          { id: 'rc1h1-2', type: 'true-false', statement: 'Die erste Auflage fällt höher aus als zunächst vorgesehen.', correct: true, points: 1 },
          { id: 'rc1h1-3', type: 'true-false', statement: 'Für den Umschlag wird der zweite Entwurf der Grafikerin verwendet.', correct: false, points: 1 },
          { id: 'rc1h1-4', type: 'true-false', statement: 'Für die Korrektur der Druckfahnen stehen Frau Sommerfeld vierzehn Tage zur Verfügung.', correct: true, points: 1 },
          { id: 'rc1h1-5', type: 'true-false', statement: 'Die Kosten für die Lesereise trägt der Verlag.', correct: true, points: 1 },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Podiumsdiskussion',
        instructions: 'Du hörst eine Podiumsdiskussion zum Thema „Vier-Tage-Woche“. Du hörst die Diskussion zweimal. Wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Podiumsdiskussion: Ist die Vier-Tage-Woche ein Modell für alle?',
          transcript:
            `Moderator: „Guten Abend. Ist die Vier-Tage-Woche ein Modell für alle? Darüber diskutieren heute die Arbeitssoziologin Doktor Helena Brandt, Tobias Kern, Geschäftsführer eines Maschinenbaubetriebs, und Miriam Okafor von der Gewerkschaft. Frau Doktor Brandt, Sie haben mehrere Pilotprojekte wissenschaftlich begleitet. Was ist dabei herausgekommen?“

Helena Brandt: „Die Ergebnisse sind ermutigend, aber man sollte sie nicht überschätzen. In den untersuchten Betrieben ging der Krankenstand zurück, die Zufriedenheit stieg, und die Produktivität blieb weitgehend stabil. Allerdings haben sich die Firmen freiwillig gemeldet, es waren also überwiegend gut organisierte Unternehmen. Auf die gesamte Wirtschaft lässt sich das nicht einfach übertragen.“

Moderator: „Herr Kern, wie sehen Sie das als Unternehmer?“

Tobias Kern: „Genau da liegt das Problem. In einer Werbeagentur mag das klappen, aber bei uns in der Fertigung laufen die Maschinen im Schichtbetrieb. Wenn meine Leute einen Tag weniger arbeiten, brauche ich zusätzliches Personal, und Fachkräfte finde ich schon heute kaum. Am Lohn würde es übrigens gar nicht scheitern, sondern schlicht daran, dass niemand da ist, der die Arbeit übernimmt.“

Miriam Okafor: „Der Fachkräftemangel ist doch gerade ein Argument dafür, Herr Kern. Wer attraktive Arbeitszeiten anbietet, bekommt die Bewerbungen. Für uns als Gewerkschaft ist allerdings eines nicht verhandelbar. Die Arbeitszeit muss wirklich sinken, und zwar bei vollem Lohn. Vierzig Stunden in vier Tage zu pressen, lehnen wir ab, denn das macht die Menschen auf Dauer krank.“

Tobias Kern: „Voller Lohn für weniger Arbeit, Frau Okafor, das muss man erst einmal erwirtschaften. Trotzdem verschließe ich mich nicht. In unserer Verwaltung testen wir seit dem Frühjahr ein Modell, bei dem jeder zweite Freitag frei ist. Das läuft bisher erstaunlich reibungslos.“

Moderator: „Frau Doktor Brandt, sollte der Gesetzgeber hier eingreifen?“

Helena Brandt: „Von einer gesetzlichen Pflicht halte ich wenig, dafür sind die Branchen zu verschieden. Sinnvoller wären Vereinbarungen auf der Ebene der Betriebe oder der Tarifpartner, die man nach einer Probezeit gründlich auswertet. In der Pflege bräuchte es schließlich ganz andere Lösungen als im Büro.“

Miriam Okafor: „Da stimme ich zu, ein Gesetz wäre der falsche Weg. Aber ohne Druck von unserer Seite bewegt sich in vielen Unternehmen eben gar nichts.“`,
        },
        questions: [
          {
            id: 'rc1h2-1',
            type: 'multiple-choice',
            prompt: 'Wie bewertet Dr. Brandt die Ergebnisse der Pilotprojekte?',
            options: [
              { id: 'a', text: 'Sie sieht darin den Beweis, dass das Modell in jeder Branche funktioniert.' },
              { id: 'b', text: 'Sie hält sie für enttäuschend, weil die Produktivität gesunken ist.' },
              { id: 'c', text: 'Sie findet sie erfreulich, hält sie aber nur für eingeschränkt verallgemeinerbar.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rc1h2-2',
            type: 'multiple-choice',
            prompt: 'Worin sieht Tobias Kern das größte Hindernis für seinen Betrieb?',
            options: [
              { id: 'a', text: 'Es fehlt an qualifiziertem Personal.' },
              { id: 'b', text: 'Die Lohnkosten wären zu hoch.' },
              { id: 'c', text: 'Die Belegschaft lehnt das Modell ab.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rc1h2-3',
            type: 'multiple-choice',
            prompt: 'Welche Form der Vier-Tage-Woche fordert Miriam Okafor?',
            options: [
              { id: 'a', text: 'Die bisherige Stundenzahl, verteilt auf vier längere Arbeitstage.' },
              { id: 'b', text: 'Weniger Wochenstunden ohne Einbußen beim Gehalt.' },
              { id: 'c', text: 'Eine kürzere Arbeitszeit mit entsprechend geringerem Gehalt.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rc1h2-4',
            type: 'multiple-choice',
            prompt: 'Was berichtet Tobias Kern aus seinem eigenen Unternehmen?',
            options: [
              { id: 'a', text: 'In einem Teil der Firma wird bereits ein Modell mit freien Freitagen erprobt.' },
              { id: 'b', text: 'Ein Versuch in der Fertigung musste abgebrochen werden.' },
              { id: 'c', text: 'Die gesamte Belegschaft arbeitet seit dem Frühjahr nur noch vier Tage.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rc1h2-5',
            type: 'multiple-choice',
            prompt: 'Was hält Dr. Brandt von einer gesetzlichen Regelung?',
            options: [
              { id: 'a', text: 'Sie fordert ein Gesetz, das zunächst nur für Büroberufe gilt.' },
              { id: 'b', text: 'Sie hält ein Gesetz für nötig, weil sich die Unternehmen sonst nicht bewegen.' },
              { id: 'c', text: 'Sie zieht Lösungen vor, die in den Betrieben oder zwischen den Tarifpartnern ausgehandelt werden.' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3 — Wissenschaftlicher Vortrag',
        instructions: 'Du hörst einen kurzen wissenschaftlichen Vortrag über das Thema „Langeweile“. Du hörst den Vortrag einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Vortrag: Wozu Langeweile gut ist',
          transcript:
            `„Sehr geehrte Damen und Herren, ich freue mich, Ihnen heute etwas über ein Gefühl zu erzählen, das jeder kennt und kaum jemand mag, nämlich die Langeweile.

Lange Zeit hat die Psychologie dieses Gefühl kaum beachtet. Man hielt es für harmlos und wissenschaftlich uninteressant. Das hat sich in den letzten zwanzig Jahren grundlegend geändert. Heute verstehen wir Langeweile als ein Signal. Sie zeigt uns an, dass das, was wir gerade tun, uns weder fordert noch sinnvoll erscheint, und sie drängt uns, etwas anderes zu suchen.

Wichtig ist dabei, dass Langeweile nicht nur entsteht, wenn wir zu wenig zu tun haben. Auch wer überfordert ist, etwa in einer Vorlesung, der er nicht folgen kann, langweilt sich häufig. Entscheidend ist also nicht die Menge der Aufgaben, sondern ob sie zu unseren Fähigkeiten passen.

Wie unangenehm dieses Gefühl sein kann, zeigt ein viel zitiertes Experiment. Versuchspersonen sollten eine Viertelstunde lang allein in einem leeren Raum sitzen, ohne Telefon und ohne Lektüre. Sie hatten lediglich die Möglichkeit, sich per Knopfdruck einen leichten Stromschlag zu geben. Tatsächlich drückten etwa zwei Drittel der Männer und immerhin ein Viertel der Frauen den Knopf, nur damit überhaupt etwas passierte.

Doch Langeweile hat auch eine produktive Seite. In einer britischen Untersuchung mussten Probanden zunächst Nummern aus einem Telefonbuch abschreiben. Anschließend sollten sie sich möglichst viele Verwendungen für einen Plastikbecher ausdenken. Ihnen fielen deutlich mehr und originellere Ideen ein als einer Vergleichsgruppe, die direkt mit der kreativen Aufgabe begonnen hatte.

Was folgt daraus für den Alltag? Ich plädiere keineswegs dafür, sich künstlich zu langweilen. Aber wir sollten aufhören, jede freie Minute sofort mit dem Smartphone zu füllen. Das gilt besonders für Kinder. Eltern müssen nicht jeden leeren Nachmittag mit einem Programm füllen. Wer sich langweilen darf, lernt, sich selbst zu beschäftigen.

Langeweile ist also kein Feind, den man bekämpfen muss, sondern ein Hinweis, den man ernst nehmen sollte. Ich danke Ihnen für Ihre Aufmerksamkeit.“`,
        },
        questions: [
          { id: 'rc1h3-1', type: 'true-false', statement: 'Früher schenkte die Psychologie der Langeweile wenig Aufmerksamkeit.', correct: true, points: 1 },
          { id: 'rc1h3-2', type: 'true-false', statement: 'Laut Vortrag langweilen sich nur Menschen, die unterfordert sind.', correct: false, points: 1 },
          { id: 'rc1h3-3', type: 'true-false', statement: 'In dem Experiment gab sich die Mehrheit der Männer freiwillig einen Stromschlag.', correct: true, points: 1 },
          { id: 'rc1h3-4', type: 'true-false', statement: 'Wer zuvor eine eintönige Aufgabe erledigt hatte, war weniger einfallsreich als die Vergleichsgruppe.', correct: false, points: 1 },
          { id: 'rc1h3-5', type: 'true-false', statement: 'Laut Vortrag sollten Eltern die freie Zeit ihrer Kinder möglichst lückenlos verplanen.', correct: false, points: 1 },
        ],
      },
    ],
  },
]
