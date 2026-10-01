/**
 * Deutsch B2 — Hören · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (goethe-b2-hoeren.js):
 * 4 Teile, 20 Items, 40 min, bestanden ab 12.
 *   Teil 1: Kurzgespräche, MC, 1x hören
 *   Teil 2: Radiosendung, R/F, 1x hören
 *   Teil 3: Interview, MC, 2x hören
 *   Teil 4: Vortrag, R/F, 1x hören
 *
 * Kein audioUrl: Der Server erzeugt das Audio aus dem Transcript.
 */

export const realB2HoerenExams = [
  {
    id: 'real-b2-hoeren-1',
    provider: 'goethe',
    level: 'B2',
    module: 'hoeren',
    pool: 'real',
    title: 'Deutsch B2 — Hören · Prüfung',
    description: 'B2-Hörverstehen: fünf Kurzgespräche, eine Radiosendung, ein Interview und ein Vortrag.',
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
            id: 'rb2h1-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Gespräch 1 — In der Autowerkstatt',
              transcript:
                'Kundin: „Guten Tag, ist mein Wagen schon fertig? Sie hatten gesagt, ich könne ihn am Donnerstag abholen.“\nMechaniker: „Leider nicht, Frau Albrecht. Das Ersatzteil für die Bremsen ist erst heute Morgen gekommen. Vor Freitagnachmittag schaffen wir das nicht.“\nKundin: „Das ist ärgerlich. Ich brauche das Auto am Freitagvormittag für einen wichtigen Termin.“\nMechaniker: „Wir können Ihnen so lange kostenlos einen Leihwagen geben.“\nKundin: „Gut, dann machen wir das so.“',
            },
            prompt: 'Wie wird das Problem der Kundin gelöst?',
            options: [
              { id: 'a', text: 'Sie bekommt vorübergehend ein anderes Auto.' },
              { id: 'b', text: 'Die Werkstatt repariert den Wagen doch noch bis Donnerstag.' },
              { id: 'c', text: 'Sie verschiebt ihren Termin auf den Nachmittag.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb2h1-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Gespräch 2 — Wohnungsbesichtigung',
              transcript:
                'Makler: „Und hier ist das Wohnzimmer. Die Wohnung kostet 980 Euro warm.“\nInteressentin: „Hell ist sie ja wirklich, und der Preis ist für diese Lage in Ordnung. Aber in der Anzeige stand, dass es einen Balkon gibt.“\nMakler: „Das war leider ein Fehler. Dafür dürfen alle Mieter den Garten hinter dem Haus benutzen.“\nInteressentin: „Das ist nicht dasselbe. Ich überlege es mir noch und melde mich bis Montag.“',
            },
            prompt: 'Was stört die Interessentin an der Wohnung?',
            options: [
              { id: 'a', text: 'Die Miete ist ihr zu hoch.' },
              { id: 'b', text: 'Die Zimmer sind ihr zu dunkel.' },
              { id: 'c', text: 'Der versprochene Balkon fehlt.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2h1-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Gespräch 3 — Am Bahnhof',
              transcript:
                'Reisender: „Entschuldigung, der Zug nach Leipzig um 14 Uhr 20 fällt aus. Ich muss aber spätestens um 17 Uhr dort sein.“\nMitarbeiterin: „Der nächste direkte Zug fährt erst um 16 Uhr 20, damit kämen Sie zu spät.“\nReisender: „Gibt es keine andere Möglichkeit?“\nMitarbeiterin: „Doch. Nehmen Sie in zehn Minuten den Regionalzug nach Halle und steigen Sie dort um. Dann sind Sie um Viertel nach vier in Leipzig. Ihre Fahrkarte gilt auch dafür.“',
            },
            prompt: 'Was rät die Mitarbeiterin dem Reisenden?',
            options: [
              { id: 'a', text: 'Auf den nächsten direkten Zug zu warten.' },
              { id: 'b', text: 'Eine Verbindung mit Umsteigen zu nehmen.' },
              { id: 'c', text: 'Eine neue Fahrkarte zu kaufen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb2h1-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Gespräch 4 — Im Fitnessstudio',
              transcript:
                'Mann: „Was kostet eine Mitgliedschaft bei Ihnen?“\nMitarbeiterin: „Der Jahresvertrag kostet 35 Euro im Monat, mit allen Kursen und der Sauna. Ohne feste Laufzeit zahlen Sie für dieselben Leistungen 49 Euro, können aber jeden Monat kündigen.“\nMann: „Der Jahresvertrag wäre günstiger. Aber vielleicht gehe ich im Herbst beruflich nach Wien.“\nMitarbeiterin: „Dann sind Sie mit der flexiblen Variante auf der sicheren Seite.“\nMann: „Stimmt, dann nehme ich lieber die.“',
            },
            prompt: 'Warum entscheidet sich der Mann für den teureren Vertrag?',
            options: [
              { id: 'a', text: 'Weil er vielleicht bald in eine andere Stadt zieht.' },
              { id: 'b', text: 'Weil nur bei diesem Vertrag die Sauna inklusive ist.' },
              { id: 'c', text: 'Weil er an den Kursen nicht teilnehmen möchte.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb2h1-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Gespräch 5 — In der Stadtbibliothek',
              transcript:
                'Leserin: „Guten Tag, ich möchte diese Bücher zurückgeben. Ich fürchte, ich bin zu spät.“\nBibliothekar: „Ja, die Frist ist vor einer Woche abgelaufen. Das macht normalerweise sechs Euro Gebühr.“\nLeserin: „Oh je. Ich lag im Krankenhaus und konnte nicht früher kommen.“\nBibliothekar: „Das tut mir leid. In so einem Fall verzichten wir natürlich auf die Gebühr. Nächstes Mal können Sie die Ausleihe übrigens online verlängern.“',
            },
            prompt: 'Was passiert mit der Gebühr?',
            options: [
              { id: 'a', text: 'Die Leserin muss sie sofort bezahlen.' },
              { id: 'b', text: 'Die Leserin soll sie beim nächsten Besuch bezahlen.' },
              { id: 'c', text: 'Sie wird der Leserin erlassen.' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Radiosendung',
        instructions: 'Du hörst eine Radiosendung über das Thema „Vier-Tage-Woche“. Du hörst die Sendung einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Radiosendung: Die Vier-Tage-Woche im Handwerk',
          transcript:
            `Moderatorin: „Herzlich willkommen bei 'Arbeitswelt aktuell'. Immer mehr Betriebe probieren die Vier-Tage-Woche aus. Bei mir im Studio ist Sabine Krüger, Tischlermeisterin aus Münster. In ihrer Werkstatt wird seit zwei Jahren nur noch von Montag bis Donnerstag gearbeitet. Frau Krüger, wie sind Sie auf diese Idee gekommen?“

Sabine Krüger: „Ehrlich gesagt aus Not. Ich habe lange keine Fachkräfte gefunden, auf meine Stellenanzeigen hat sich monatelang niemand gemeldet. Dann habe ich die Vier-Tage-Woche angeboten, und plötzlich hatte ich zwölf Bewerbungen auf dem Tisch.“

Moderatorin: „Arbeiten Ihre Angestellten jetzt also weniger?“

Sabine Krüger: „Nur ein bisschen. Früher waren es vierzig Stunden pro Woche, heute sind es sechsunddreißig, verteilt auf vier Tage mit jeweils neun Stunden. Das Gehalt ist dabei gleich geblieben.“

Moderatorin: „Neun Stunden in der Werkstatt, das ist doch anstrengend.“

Sabine Krüger: „Das dachte ich anfangs auch, und ich hatte Angst vor mehr Fehlern und Unfällen. Aber das Gegenteil ist passiert: Die Leute sind ausgeruhter, und es gibt deutlich weniger Krankmeldungen als früher.“

Moderatorin: „Und wie reagieren die Kunden, wenn freitags niemand da ist?“

Sabine Krüger: „Am Anfang gab es einige Beschwerden, das will ich nicht verschweigen. Inzwischen haben sich die meisten daran gewöhnt, und viele finden es sogar gut.“

Moderatorin: „Würden Sie das Modell allen Betrieben empfehlen?“

Sabine Krüger: „Nein, das wäre zu einfach. In einer Bäckerei oder in der Pflege lässt sich das nicht ohne Weiteres umsetzen. Jeder Betrieb muss selbst prüfen, ob es passt. Für uns war es jedenfalls die beste Entscheidung der letzten Jahre.“`,
        },
        questions: [
          { id: 'rb2h2-1', type: 'true-false', statement: 'Sabine Krüger führte die Vier-Tage-Woche ein, weil sie kein Personal fand.', correct: true, points: 1 },
          { id: 'rb2h2-2', type: 'true-false', statement: 'Ihre Angestellten verdienen seit der Umstellung etwas weniger als vorher.', correct: false, points: 1 },
          { id: 'rb2h2-3', type: 'true-false', statement: 'Seit der Umstellung fehlen die Mitarbeiter seltener wegen Krankheit.', correct: true, points: 1 },
          { id: 'rb2h2-4', type: 'true-false', statement: 'Die Kunden waren von Anfang an mit dem neuen Modell einverstanden.', correct: false, points: 1 },
          { id: 'rb2h2-5', type: 'true-false', statement: 'Sabine Krüger hält die Vier-Tage-Woche für jede Branche für geeignet.', correct: false, points: 1 },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3 — Interview',
        instructions: 'Du hörst ein Interview mit der Schlafforscherin Miriam Vogt über gesunden Schlaf. Du hörst das Interview zweimal. Wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Interview: Gesunder Schlaf mit Miriam Vogt',
          transcript:
            `Interviewer: „Frau Vogt, Sie erforschen seit fünfzehn Jahren den Schlaf. Schlafen wir heute schlechter als früher?“

Miriam Vogt: „Wir schlafen vor allem unregelmäßiger. Die Dauer hat sich im Durchschnitt kaum verändert, aber viele Menschen gehen jeden Tag zu einer anderen Zeit ins Bett. Genau das bringt die innere Uhr durcheinander, und das halte ich für das eigentliche Problem.“

Interviewer: „Oft hört man, jeder Mensch brauche acht Stunden Schlaf. Stimmt das?“

Miriam Vogt: „Das ist nur ein Durchschnittswert. Manche kommen mit sechs Stunden gut aus, andere brauchen neun. Entscheidend ist nicht die Zahl, sondern ob man sich tagsüber wach und leistungsfähig fühlt.“

Interviewer: „Welche Rolle spielt das Handy im Schlafzimmer?“

Miriam Vogt: „Lange hat man vor allem das blaue Licht des Bildschirms verantwortlich gemacht. Neuere Studien zeigen aber, dass das Licht eine geringere Rolle spielt als gedacht. Viel schlimmer sind die Inhalte: Nachrichten, berufliche E-Mails oder soziale Medien regen uns auf und halten das Gehirn wach.“

Interviewer: „Was halten Sie vom Mittagsschlaf?“

Miriam Vogt: „Sehr viel, solange er kurz bleibt. Zwanzig Minuten sind ideal. Wer länger als eine halbe Stunde schläft, fällt in den Tiefschlaf, fühlt sich danach müder als vorher und schläft abends schlechter ein.“

Interviewer: „Und was raten Sie jemandem, der nachts wach liegt?“

Miriam Vogt: „Auf keinen Fall im Bett bleiben und ständig auf die Uhr schauen. Stehen Sie lieber auf, lesen Sie bei schwachem Licht ein paar Seiten und gehen Sie erst wieder ins Bett, wenn Sie wirklich müde sind. Und bitte keine Schlaftabletten ohne ärztlichen Rat.“`,
        },
        questions: [
          {
            id: 'rb2h3-1',
            type: 'multiple-choice',
            prompt: 'Was ist laut Miriam Vogt heute das größte Problem beim Schlafen?',
            options: [
              { id: 'a', text: 'Die Menschen schlafen deutlich kürzer als früher.' },
              { id: 'b', text: 'Die Schlafenszeiten wechseln zu häufig.' },
              { id: 'c', text: 'Die Menschen stehen morgens zu früh auf.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb2h3-2',
            type: 'multiple-choice',
            prompt: 'Was sagt sie über die Regel von acht Stunden Schlaf?',
            options: [
              { id: 'a', text: 'Sie gilt für alle Erwachsenen.' },
              { id: 'b', text: 'Die meisten Menschen brauchen in Wirklichkeit mehr.' },
              { id: 'c', text: 'Der Schlafbedarf ist von Mensch zu Mensch verschieden.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2h3-3',
            type: 'multiple-choice',
            prompt: 'Warum stört das Handy den Schlaf vor allem?',
            options: [
              { id: 'a', text: 'Weil die Inhalte den Kopf nicht zur Ruhe kommen lassen.' },
              { id: 'b', text: 'Weil das blaue Licht des Bildschirms wach hält.' },
              { id: 'c', text: 'Weil man nachts von Anrufen geweckt wird.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb2h3-4',
            type: 'multiple-choice',
            prompt: 'Was meint Miriam Vogt zum Mittagsschlaf?',
            options: [
              { id: 'a', text: 'Er sollte mindestens eine halbe Stunde dauern.' },
              { id: 'b', text: 'Er ist sinnvoll, wenn er nur kurz dauert.' },
              { id: 'c', text: 'Er führt grundsätzlich zu schlechterem Schlaf in der Nacht.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb2h3-5',
            type: 'multiple-choice',
            prompt: 'Was empfiehlt sie Menschen, die nachts nicht schlafen können?',
            options: [
              { id: 'a', text: 'Ruhig im Bett liegen zu bleiben und abzuwarten.' },
              { id: 'b', text: 'Ein leichtes Schlafmittel zu nehmen.' },
              { id: 'c', text: 'Aufzustehen und sich ruhig zu beschäftigen.' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4 — Vortrag',
        instructions: 'Du hörst einen Kurzvortrag über das Thema „Mehrsprachig aufwachsen“. Du hörst den Vortrag einmal. Entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Vortrag: Mehrsprachig aufwachsen',
          transcript:
            `„Sehr geehrte Damen und Herren, ich freue mich, heute mit Ihnen über ein Thema zu sprechen, das viele Familien beschäftigt, nämlich über Kinder, die mit zwei Sprachen aufwachsen.

Noch vor wenigen Jahrzehnten rieten viele Fachleute Eltern davon ab, mit ihren Kindern zwei Sprachen zu sprechen. Man glaubte, das würde die Kinder überfordern, und am Ende könnten sie keine Sprache richtig. Diese Ansicht gilt heute als überholt.

Die Forschung zeigt, dass das kindliche Gehirn problemlos zwei oder sogar drei Sprachen gleichzeitig lernen kann. Es stimmt zwar, dass mehrsprachige Kinder manchmal etwas später anfangen zu sprechen und die Sprachen zeitweise mischen. Das ist aber kein Grund zur Sorge. Spätestens im Grundschulalter haben sie diesen Rückstand in der Regel aufgeholt.

Wie gelingt eine mehrsprachige Erziehung? Wichtig ist vor allem, dass Eltern die Sprache benutzen, die sie selbst am besten beherrschen, auch wenn das nicht die Sprache des Landes ist, in dem sie leben. Die Landessprache lernen die Kinder ohnehin im Kindergarten und in der Schule.

Ein häufiges Problem ist, dass Kinder ab einem gewissen Alter nur noch in der Sprache ihrer Umgebung antworten. Hier hilft kein Zwang. Besser sind Bücher, Lieder und der Kontakt zu Verwandten, damit die zweite Sprache für das Kind einen echten Nutzen hat.

Zum Schluss noch ein Wort zu den Erwartungen. Mehrsprachigkeit macht Kinder nicht automatisch intelligenter, wie manche Ratgeber versprechen. Aber sie schenkt ihnen den Zugang zu zwei Kulturen, und das ist ein Gewinn fürs ganze Leben. Ich danke Ihnen für Ihre Aufmerksamkeit!“`,
        },
        questions: [
          { id: 'rb2h4-1', type: 'true-false', statement: 'Früher empfahlen viele Experten, Kinder nur mit einer Sprache zu erziehen.', correct: true, points: 1 },
          { id: 'rb2h4-2', type: 'true-false', statement: 'Mehrsprachige Kinder bleiben sprachlich dauerhaft hinter anderen Kindern zurück.', correct: false, points: 1 },
          { id: 'rb2h4-3', type: 'true-false', statement: 'Eltern sollten mit ihren Kindern in der Sprache sprechen, die sie selbst am sichersten können.', correct: true, points: 1 },
          { id: 'rb2h4-4', type: 'true-false', statement: 'Wenn ein Kind die zweite Sprache nicht mehr sprechen will, sollten die Eltern es dazu verpflichten.', correct: false, points: 1 },
          { id: 'rb2h4-5', type: 'true-false', statement: 'Laut dem Vortrag werden Kinder durch Mehrsprachigkeit nicht automatisch klüger.', correct: true, points: 1 },
        ],
      },
    ],
  },
]
