/**
 * Goethe-Zertifikat B2 — Lesen (kompakte Version)
 *
 * Offiziell: 5 Teile, 30 Items, 65 min, pass = 60%.
 * Wir verwenden eine kompakte Version mit 4 Teilen, 20 Items, pass bei 12.
 */

export const goetheB2LesenExams = [
  {
    id: 'goethe-b2-lesen-modellsatz-1',
    provider: 'goethe',
    level: 'B2',
    module: 'lesen',
    title: 'Goethe B2 — Lesen · Modellsatz 1',
    description: 'Kompakter B2-Lesetest mit Sachtexten und Meinungsforum.',
    durationMinutes: 50,
    maxScore: 20,
    passScore: 12,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Sachtext',
        instructions: 'Lies den Text und wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Die Vier-Tage-Woche in Island',
              text:
                `Island gilt heute als Vorreiter für eine neue Form der Arbeitsorganisation: die Vier-Tage-Woche. Zwischen 2015 und 2019 nahmen rund 2.500 Beschäftigte des öffentlichen Dienstes an einem groß angelegten Versuch teil, bei dem die Wochenarbeitszeit von 40 auf 35 oder 36 Stunden reduziert wurde — bei vollem Lohnausgleich.

Die Ergebnisse waren erstaunlich. Trotz der verkürzten Arbeitszeit blieb die Produktivität der meisten Teams unverändert oder verbesserte sich sogar leicht. Gleichzeitig sank die Zahl der Krankmeldungen, und viele Mitarbeitende berichteten von einer deutlich besseren Work-Life-Balance, weniger Stress und mehr Zeit für Familie und Hobbys.

Der Erfolg des Projekts hatte weitreichende Folgen. Bis 2022 hatten bereits 86 Prozent der isländischen Beschäftigten das Recht, ihre Arbeitszeit zu reduzieren — ohne Lohneinbußen. Andere Länder schauen mit großem Interesse auf das isländische Modell. In Spanien, Deutschland und Großbritannien laufen derzeit ähnliche Pilotprojekte.

Doch nicht alle sind überzeugt. Kritiker weisen darauf hin, dass die isländische Wirtschaft stark vom öffentlichen Sektor und vom Tourismus geprägt ist. In produktionsorientierten Branchen sei eine Verkürzung schwieriger umsetzbar. Zudem hänge der Erfolg davon ab, ob Unternehmen bereit seien, Arbeitsabläufe gründlich neu zu gestalten — ein Aufwand, vor dem viele Arbeitgeber zurückschrecken.`,
            },
          ],
        },
        questions: [
          {
            id: 'b2l1-1',
            type: 'multiple-choice',
            prompt: 'Was war das Besondere am isländischen Versuch?',
            options: [
              { id: 'a', text: 'Die Mitarbeitenden bekamen weniger Lohn.' },
              { id: 'b', text: 'Die Arbeitszeit wurde verkürzt, der Lohn aber nicht.' },
              { id: 'c', text: 'Nur Manager nahmen daran teil.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l1-2',
            type: 'multiple-choice',
            prompt: 'Wie hat sich die Produktivität entwickelt?',
            options: [
              { id: 'a', text: 'Sie ist deutlich gefallen.' },
              { id: 'b', text: 'Sie blieb gleich oder hat sich leicht verbessert.' },
              { id: 'c', text: 'Sie hat sich verdoppelt.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l1-3',
            type: 'multiple-choice',
            prompt: 'Welche Wirkung hatte der Versuch auf die Mitarbeitenden?',
            options: [
              { id: 'a', text: 'Sie wurden häufiger krank.' },
              { id: 'b', text: 'Ihre Work-Life-Balance verbesserte sich.' },
              { id: 'c', text: 'Sie verdienten mehr Geld.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l1-4',
            type: 'multiple-choice',
            prompt: 'Was sagen die Kritiker?',
            options: [
              { id: 'a', text: 'In allen Branchen lässt sich das Modell genauso umsetzen.' },
              { id: 'b', text: 'In produktionsorientierten Branchen ist es schwieriger.' },
              { id: 'c', text: 'Das Modell funktioniert nirgendwo.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l1-5',
            type: 'multiple-choice',
            prompt: 'Wie viele Beschäftigte in Island können laut Text heute ihre Arbeitszeit reduzieren?',
            options: [
              { id: 'a', text: 'Etwa 50 Prozent' },
              { id: 'b', text: 'Etwa 86 Prozent' },
              { id: 'c', text: '100 Prozent' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      {
        id: 'teil-2',
        title: 'Teil 2 — Meinungsforum',
        instructions: 'Du liest fünf Meinungen aus einem Online-Forum zum Thema „Vier-Tage-Woche“. Sind die Personen dafür (Ja) oder dagegen (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Forumsbeiträge',
              text:
                `Klaus, 51, Industriearbeiter:
„In der Produktion ist das schwer vorstellbar. Wir haben feste Maschinenlaufzeiten — wenn wir einen Tag weniger arbeiten, fehlt der Umsatz einfach.“

Sarah, 34, Marketing-Managerin:
„Bei uns wurde die Vier-Tage-Woche eingeführt und ich bin total dafür. Ich habe mehr Zeit für meine Kinder, und am Montag bin ich richtig ausgeruht und kreativ.“

Andreas, 28, Softwareentwickler:
„Theoretisch klingt das toll, aber in der Praxis arbeite ich an meinen freien Tagen oft trotzdem — weil die Arbeit liegen bleibt. So bringt das nichts.“

Frau Hofer, 45, Lehrerin:
„Ich kann das nur unterstützen. Mein Partner arbeitet bereits seit einem Jahr nur vier Tage und ist zufriedener und entspannter als je zuvor.“

Tim, 39, Geschäftsführer eines Restaurants:
„Im Gastgewerbe? Niemals. Wir haben am Wochenende die meisten Gäste — wer soll denn dann arbeiten?“`,
            },
          ],
        },
        questions: [
          { id: 'b2l2-1', type: 'multiple-choice', prompt: 'Klaus (Industriearbeiter)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'b2l2-2', type: 'multiple-choice', prompt: 'Sarah (Marketing-Managerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'b2l2-3', type: 'multiple-choice', prompt: 'Andreas (Softwareentwickler)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'b2l2-4', type: 'multiple-choice', prompt: 'Frau Hofer (Lehrerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'b2l2-5', type: 'multiple-choice', prompt: 'Tim (Restaurant-Geschäftsführer)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
        ],
      },

      {
        id: 'teil-3',
        title: 'Teil 3 — Wissenschaftlicher Text',
        instructions: 'Lies den Text und entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Schlafmangel und Gesundheit',
              text:
                `Eine groß angelegte Studie der Universität Oxford hat gezeigt, dass Erwachsene, die regelmäßig weniger als sechs Stunden pro Nacht schlafen, ein deutlich erhöhtes Risiko für Herz-Kreislauf-Erkrankungen und Diabetes haben. Die Forscherinnen und Forscher untersuchten über zehn Jahre hinweg die Daten von mehr als 8.000 Teilnehmenden.

Schlafmangel beeinträchtigt nicht nur die körperliche, sondern auch die geistige Gesundheit. Wer dauerhaft zu wenig schläft, hat eine schlechtere Konzentration, ein schwächeres Immunsystem und ein höheres Risiko für Depressionen. Besonders besorgniserregend: Diese Effekte lassen sich nicht durch „Nachschlafen“ am Wochenende ausgleichen — der Körper braucht regelmäßige, gleichmäßige Schlafmuster.

Die Empfehlung der Forschenden ist eindeutig: Erwachsene sollten zwischen sieben und neun Stunden pro Nacht schlafen. Wichtig dabei sind auch feste Schlafenszeiten und ein dunkles, ruhiges Schlafzimmer. Bildschirme — also Handy, Tablet oder Fernseher — sollten mindestens 30 Minuten vor dem Schlafengehen ausgeschaltet werden.`,
            },
          ],
        },
        questions: [
          { id: 'b2l3-1', type: 'true-false', statement: 'Wer weniger als 6 Stunden schläft, hat ein höheres Risiko für Herzkrankheiten.', correct: true, points: 1 },
          { id: 'b2l3-2', type: 'true-false', statement: 'Schlafmangel betrifft nur die körperliche Gesundheit.', correct: false, points: 1 },
          { id: 'b2l3-3', type: 'true-false', statement: 'Man kann verlorenen Schlaf am Wochenende vollständig ausgleichen.', correct: false, points: 1 },
          { id: 'b2l3-4', type: 'true-false', statement: 'Die Studie wurde an der Universität Oxford durchgeführt.', correct: true, points: 1 },
          { id: 'b2l3-5', type: 'true-false', statement: 'Erwachsene brauchen laut den Forschenden 5-6 Stunden Schlaf.', correct: false, points: 1 },
        ],
      },

      {
        id: 'teil-4',
        title: 'Teil 4 — Anweisungstext',
        instructions: 'Lies die Bewerbungs-Hinweise und beantworte die Fragen.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Bewerbungs-Hinweise — DAAD-Stipendium',
              text:
                `1. Antragsfrist und Form
Bewerbungen müssen bis spätestens 30. November über das Online-Portal eingereicht werden. Postalisch eingegangene Unterlagen werden nicht berücksichtigt.

2. Voraussetzungen
Der Antragsteller muss zum Bewerbungszeitpunkt an einer Hochschule eingeschrieben sein und über mindestens das Sprachniveau B2 in Deutsch verfügen. Erforderlich ist außerdem ein Notendurchschnitt von 2,5 oder besser.

3. Erforderliche Unterlagen
- Lebenslauf (max. 2 Seiten)
- Motivationsschreiben (mind. 1 Seite)
- Aktuelles Notenblatt
- Sprachnachweis (z. B. Goethe-Zertifikat)
- Zwei Empfehlungsschreiben (eines davon vom Hauptbetreuer)

4. Auswahlverfahren
Nach Sichtung der Unterlagen werden geeignete Kandidaten zu einem Online-Gespräch eingeladen. Die endgültige Entscheidung erfolgt im Februar.

5. Förderung
Die Förderung beträgt monatlich 1.000 Euro für die Dauer von 10 Monaten. Reisekosten und Krankenversicherung werden zusätzlich übernommen.`,
            },
          ],
        },
        questions: [
          {
            id: 'b2l4-1',
            type: 'multiple-choice',
            prompt: 'Wie kann man die Bewerbung einreichen?',
            options: [
              { id: 'a', text: 'Per Post' },
              { id: 'b', text: 'Über das Online-Portal' },
              { id: 'c', text: 'Per E-Mail' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l4-2',
            type: 'multiple-choice',
            prompt: 'Welches Sprachniveau wird mindestens verlangt?',
            options: [
              { id: 'a', text: 'A2' },
              { id: 'b', text: 'B1' },
              { id: 'c', text: 'B2' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'b2l4-3',
            type: 'multiple-choice',
            prompt: 'Wie viele Empfehlungsschreiben sind nötig?',
            options: [
              { id: 'a', text: 'Eines' },
              { id: 'b', text: 'Zwei' },
              { id: 'c', text: 'Drei' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l4-4',
            type: 'multiple-choice',
            prompt: 'Wann werden die Kandidaten ausgewählt?',
            options: [
              { id: 'a', text: 'Im November' },
              { id: 'b', text: 'Im Februar' },
              { id: 'c', text: 'Im Juni' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b2l4-5',
            type: 'multiple-choice',
            prompt: 'Was beinhaltet die Förderung NICHT?',
            options: [
              { id: 'a', text: '1.000 € pro Monat' },
              { id: 'b', text: 'Reisekosten und Krankenversicherung' },
              { id: 'c', text: 'Eine kostenlose Wohnung' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },
    ],
  },
]
