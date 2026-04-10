/**
 * Goethe-Zertifikat C1 — Hören
 *
 * Offiziell: 2 Teile, ~22 Items, 40 min, pass = 60%.
 * Kompakte Version: 2 Teile, 15 Items, pass bei 9.
 *   Teil 1: Telefongespräch / Nachricht, Notizen ergänzen / R/F, 1x hören
 *   Teil 2: Diskussion oder Vortrag, MC, 2x hören
 */

export const goetheC1HoerenExams = [
  {
    id: 'goethe-c1-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'C1',
    module: 'hoeren',
    title: 'Goethe C1 — Hören · Modellsatz 1',
    description: 'Anspruchsvolles Hörverstehen mit Telefonnachricht und Diskussion.',
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
          label: 'Anrufbeantworter: Frau Dr. Hoffmann',
          audioUrl: null,
          transcript:
            `„Guten Tag, Herr Dr. Lehmann, hier ist Frau Dr. Hoffmann vom Institut für Sprachwissenschaft. Es geht um den geplanten Vortrag, den Sie nächsten Donnerstag bei uns halten sollen.

Wir haben ein paar organisatorische Änderungen, die ich Ihnen mitteilen möchte. Erstens: Der Vortrag wurde leider von 14 Uhr auf 16 Uhr verschoben, weil davor noch ein anderes Kolloquium stattfindet. Ich hoffe, das passt Ihnen trotzdem.

Zweitens: Wir hatten ursprünglich 30 Teilnehmer angekündigt, aber aufgrund der großen Nachfrage haben wir den Hörsaal gewechselt. Jetzt erwarten wir etwa 80 bis 90 Personen, hauptsächlich Studierende, aber auch einige Kollegen aus der Romanistik.

Drittens — und das ist das Wichtigste: Wir würden uns freuen, wenn Sie nach dem Vortrag noch zu einer kleinen Diskussionsrunde bleiben könnten, etwa 30 Minuten. Ihre neue Forschung zum Spracherwerb bei mehrsprachigen Kindern interessiert hier viele Leute.

Ach ja, und das Honorar haben wir auf 600 Euro angepasst, plus Reisekosten und ein Hotelzimmer für die Nacht von Donnerstag auf Freitag, falls Sie nicht direkt zurückreisen möchten.

Bitte rufen Sie mich kurz zurück, am besten morgen Vormittag, um die letzten Details zu klären. Meine direkte Nummer haben Sie ja. Vielen Dank und bis bald!"`,
        },
        questions: [
          { id: 'c1h1-1', type: 'true-false', statement: 'Der Vortrag wurde von 16 Uhr auf 14 Uhr vorverlegt.', correct: false, points: 1 },
          { id: 'c1h1-2', type: 'true-false', statement: 'Es wird mit deutlich mehr Teilnehmern gerechnet als ursprünglich geplant.', correct: true, points: 1 },
          { id: 'c1h1-3', type: 'true-false', statement: 'Frau Dr. Hoffmann bittet Herrn Lehmann, an einer Diskussionsrunde teilzunehmen.', correct: true, points: 1 },
          { id: 'c1h1-4', type: 'true-false', statement: 'Das Honorar bleibt unverändert.', correct: false, points: 1 },
          { id: 'c1h1-5', type: 'true-false', statement: 'Ein Hotelzimmer wird zur Verfügung gestellt, falls nötig.', correct: true, points: 1 },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Podiumsdiskussion',
        instructions: 'Du hörst eine Podiumsdiskussion zum Thema „Studiengebühren in Deutschland". Du hörst die Diskussion zweimal. Wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Podiumsdiskussion: Sollen Studiengebühren wieder eingeführt werden?',
          audioUrl: null,
          transcript:
            `Moderatorin: „Willkommen zu unserer Diskussion. Die Frage ist hochaktuell: Sollen Studiengebühren in Deutschland wieder eingeführt werden? Auf dem Podium begrüße ich Prof. Dr. Karin Müller, Bildungsforscherin, Stefan Berger vom Studierendenrat und die CDU-Politikerin Dr. Anna Weiß. Frau Dr. Müller, Sie haben sich kürzlich für moderate Studiengebühren ausgesprochen. Warum?"

Prof. Dr. Müller: „Weil unsere Universitäten chronisch unterfinanziert sind. Die Lehrqualität leidet, Bibliotheken sind veraltet, viele Professorenstellen unbesetzt. Studiengebühren von 500 Euro pro Semester könnten hier wirklich helfen — vorausgesetzt, sie kommen direkt der Lehre zugute und es gibt großzügige Stipendien für Studierende aus einkommensschwachen Familien."

Stefan Berger: „Das sehe ich völlig anders. Die Erfahrung in Bundesländern, die Gebühren einmal hatten, zeigt klar: Sie schrecken Studierende aus ärmeren Familien ab. Bildung ist ein Grundrecht und muss kostenlos bleiben. Stattdessen sollten wir die Hochschulen über Steuern besser finanzieren."

Dr. Weiß: „Beide Perspektiven haben ihre Berechtigung. Aus Sicht meiner Partei ist klar: Die Universitäten brauchen mehr Geld. Die Frage ist nur, woher. Wir sehen Studiengebühren nicht als ersten Schritt, aber sie sollten auch nicht tabuisiert werden, gerade für Langzeitstudierende oder Zweitstudien."

Stefan Berger: „Aber genau diese 'differenzierten' Modelle sind doch nur ein Türöffner. Sobald einmal Gebühren da sind, werden sie schrittweise erhöht. Das war in England zu beobachten."

Prof. Dr. Müller: „England ist kein gutes Beispiel, weil dort die Gebühren extrem hoch sind. In den Niederlanden zum Beispiel funktioniert ein moderates System recht gut, mit hoher Akzeptanz."

Moderatorin: „Und was sagen die Studien zur sozialen Selektion?"

Prof. Dr. Müller: „Die Studien sind tatsächlich uneinheitlich. Es gibt Belege für eine leichte Verschlechterung der Bildungsbeteiligung, aber auch Hinweise, dass Stipendienprogramme das ausgleichen können. Entscheidend ist die konkrete Ausgestaltung."

Dr. Weiß: „Wir müssen die Diskussion ehrlich führen. Wenn wir gleichzeitig fordern, dass Deutschland exzellente Universitäten hat, müssen wir auch über die Finanzierung reden — und alle Optionen prüfen."`,
        },
        questions: [
          {
            id: 'c1h2-1',
            type: 'multiple-choice',
            prompt: 'Welche Position vertritt Prof. Dr. Müller?',
            options: [
              { id: 'a', text: 'Sie ist strikt gegen Studiengebühren.' },
              { id: 'b', text: 'Sie befürwortet moderate Gebühren mit Stipendien.' },
              { id: 'c', text: 'Sie fordert hohe Gebühren wie in England.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c1h2-2',
            type: 'multiple-choice',
            prompt: 'Was ist das Hauptargument von Stefan Berger?',
            options: [
              { id: 'a', text: 'Bildung ist ein Grundrecht und muss kostenlos sein.' },
              { id: 'b', text: 'Universitäten brauchen mehr Geld von Studierenden.' },
              { id: 'c', text: 'Nur Reiche sollten studieren dürfen.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'c1h2-3',
            type: 'multiple-choice',
            prompt: 'Wie positioniert sich Dr. Weiß?',
            options: [
              { id: 'a', text: 'Sie ist klar dafür.' },
              { id: 'b', text: 'Sie ist klar dagegen.' },
              { id: 'c', text: 'Sie hält sie für eine Option, die geprüft werden sollte.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'c1h2-4',
            type: 'multiple-choice',
            prompt: 'Welches Land nennt Prof. Dr. Müller als positives Beispiel?',
            options: [
              { id: 'a', text: 'England' },
              { id: 'b', text: 'Die Niederlande' },
              { id: 'c', text: 'Frankreich' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c1h2-5',
            type: 'multiple-choice',
            prompt: 'Was sagt Prof. Dr. Müller zu den Studien über soziale Selektion?',
            options: [
              { id: 'a', text: 'Sie sind eindeutig negativ.' },
              { id: 'b', text: 'Sie sind uneinheitlich; die Ausgestaltung ist entscheidend.' },
              { id: 'c', text: 'Sie zeigen klar, dass Gebühren keinen Effekt haben.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3 — Wissenschaftlicher Vortrag',
        instructions: 'Du hörst einen kurzen wissenschaftlichen Vortrag über das Thema „Schlaf und Lernen". Du hörst den Vortrag einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Vortrag: Wie der Schlaf das Lernen unterstützt',
          audioUrl: null,
          transcript:
            `„Sehr geehrte Damen und Herren, willkommen zu meinem Kurzvortrag über die Rolle des Schlafs für das Lernen.

Lange Zeit galt Schlaf in der Wissenschaft als rein passiver Zustand, in dem das Gehirn 'abschaltet'. Heute wissen wir: Genau das Gegenteil ist der Fall. Während wir schlafen, ist unser Gehirn hochaktiv — und es leistet eine Arbeit, die für das Lernen unverzichtbar ist.

Konkret passiert Folgendes: Erinnerungen, die wir tagsüber aufgenommen haben, werden im Schlaf vom Hippocampus, einer Art Zwischenspeicher, in den Großhirnrinden-Cortex überführt, wo sie langfristig gespeichert werden. Dieser Prozess heißt Konsolidierung. Ohne ausreichenden Schlaf bleiben neue Inhalte instabil und gehen leicht wieder verloren.

Eine Studie der Universität Lübeck konnte 2019 eindrucksvoll zeigen: Probanden, die nach dem Lernen einer Vokabelliste sofort schlafen durften, behielten zwei Tage später 25 Prozent mehr Wörter als diejenigen, die wach geblieben waren. Besonders wichtig ist dabei die Tiefschlafphase in der ersten Nachthälfte.

Auch für komplexere Lerninhalte — etwa das Lösen mathematischer Probleme oder das Erlernen von Bewegungsabläufen wie beim Klavierspielen — ist der REM-Schlaf, in dem wir träumen, von entscheidender Bedeutung. Forscher vermuten, dass das Gehirn in dieser Phase neue Verknüpfungen herstellt und Probleme 'im Hintergrund' weiterbearbeitet.

Was bedeutet das praktisch? Erstens: Wer eine Prüfung vorbereitet, sollte unbedingt ausreichend schlafen — sechs Stunden sind für die meisten Menschen zu wenig. Zweitens: Eine kurze Lerneinheit am Abend, gefolgt von einer Nacht mit gutem Schlaf, ist effektiver als langes Pauken bis spät in die Nacht. Und drittens: Auch ein kurzer Mittagsschlaf von 20 bis 30 Minuten kann das Gedächtnis messbar verbessern.

Schlaf ist also keine verlorene Zeit, sondern ein aktiver Bestandteil des Lernprozesses. Vielen Dank für Ihre Aufmerksamkeit."`,
        },
        questions: [
          { id: 'c1h3-1', type: 'true-false', statement: 'Heute weiß man, dass das Gehirn im Schlaf passiv ist.', correct: false, points: 1 },
          { id: 'c1h3-2', type: 'true-false', statement: 'Im Schlaf werden Erinnerungen vom Hippocampus in andere Hirnregionen überführt.', correct: true, points: 1 },
          { id: 'c1h3-3', type: 'true-false', statement: 'In der Lübecker Studie behielten schlafende Probanden 25 Prozent mehr Vokabeln.', correct: true, points: 1 },
          { id: 'c1h3-4', type: 'true-false', statement: 'Sechs Stunden Schlaf sind laut Vortrag ausreichend zur Prüfungsvorbereitung.', correct: false, points: 1 },
          { id: 'c1h3-5', type: 'true-false', statement: 'Auch ein kurzer Mittagsschlaf kann das Gedächtnis verbessern.', correct: true, points: 1 },
        ],
      },
    ],
  },
]
