// Übungsheft B2 — Lektion 18: Modul Lesen — Überblick
export default {
  lektion: 18,
  titel: 'Übungsheft — Modul Lesen im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Trainiere die Sprache der Anweisungen und das Erkennen von Paraphrasen. Wähle jeweils die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Lies zuerst die {1} genau, damit du weißt, was in der Aufgabe von dir verlangt wird. Danach {2} du den Text, um dir einen ersten Überblick zu verschaffen.',
          bank: ['Anweisung', 'überfliegst', 'Überschrift', 'entnimmst'],
          loesungen: { 1: 'Anweisung', 2: 'überfliegst' },
        },
        {
          typ: 'luecke',
          text: 'Ordnen Sie die Aussagen den Personen {1}. Kreuzen Sie bei jeder Frage die richtige Lösung {2}. Die richtige Aussage stimmt inhaltlich mit dem Text {3}.',
          bank: ['zu', 'an', 'überein', 'ab', 'auf'],
          loesungen: { 1: 'zu', 2: 'an', 3: 'überein' },
        },
        {
          typ: 'luecke',
          text: 'Dem Text ist {1} entnehmen, dass die Meinung {2} Verfassers eher kritisch ist.',
          bank: ['zu', 'des', 'dem', 'um'],
          loesungen: { 1: 'zu', 2: 'des' },
        },
        {
          typ: 'mc',
          frage: 'Text: „Der Eintritt ist nur für Kinder unter zwölf Jahren kostenlos.“ Welche Aussage ist eine korrekte Paraphrase?',
          optionen: [
            'Alle Besucher kommen kostenlos hinein.',
            'Erwachsene müssen für den Eintritt bezahlen.',
            'Kinder unter zwölf Jahren dürfen nicht hinein.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Text: „Die Veranstaltung wurde wegen des Sturms verschoben.“ Welche Aussage stimmt mit dem Text überein?',
          optionen: [
            'Die Veranstaltung findet zu einem späteren Zeitpunkt statt.',
            'Die Veranstaltung fällt ersatzlos aus.',
            'Die Veranstaltung wurde durch den Sturm beschädigt.',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Text: „Nur wenige Teilnehmende haben den Kurs abgebrochen.“ Welche Aussage stimmt mit dem Text überein?',
          optionen: [
            'Niemand hat den Kurs abgebrochen.',
            'Viele haben den Kurs nicht beendet.',
            'Fast alle haben den Kurs bis zum Ende besucht.',
          ],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich antworte zuerst die leichten Fragen.', 'Ich beantworte zuerst die leichten Fragen.'],
          loesung: 1,
          warum: '*Antworten* necesita **auf** + Akk. (*auf eine Frage antworten*); con complemento directo se usa **beantworten**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Im Text geht es um eine neue Umfrage.', 'Der Text geht über eine neue Umfrage.'],
          loesung: 0,
          warum: '«El texto va sobre…» se dice **Im Text geht es um** + Akk. o *Der Text handelt von* + Dat.; *über etwas gehen* no tiene ese sentido.',
        },
        {
          typ: 'korrektur',
          optionen: ['Im zweiten Paragrafen erklärt die Autorin ihre Meinung.', 'Im zweiten Abschnitt erklärt die Autorin ihre Meinung.'],
          loesung: 1,
          warum: 'El «párrafo» de un texto es **der Abschnitt** (o *der Absatz*); *der Paragraf* es un artículo de una ley o de un reglamento (§).',
        },
        {
          typ: 'zuordnen',
          links: [
            'Überschriften den Abschnitten einer Hausordnung zuordnen',
            'den Standpunkt des Verfassers eines Kommentars erkennen',
            'Aussagen den Meinungen mehrerer Personen zuordnen',
            'zu einem Zeitungsartikel a, b oder c ankreuzen',
            'Antworten kontrollieren und übertragen',
          ],
          rechts: ['Teil 3', 'Puffer', 'Teil 5', 'Teil 1–2', 'Teil 4'],
          loesung: {
            'Überschriften den Abschnitten einer Hausordnung zuordnen': 'Teil 5',
            'den Standpunkt des Verfassers eines Kommentars erkennen': 'Teil 4',
            'Aussagen den Meinungen mehrerer Personen zuordnen': 'Teil 3',
            'zu einem Zeitungsartikel a, b oder c ankreuzen': 'Teil 1–2',
            'Antworten kontrollieren und übertragen': 'Puffer',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide, welche Aussage dem Text entspricht. Achte auf Paraphrasen, nicht auf einzelne Wörter.',
      textTitel: 'Artikelauszug: Überfliegen statt lesen?',
      text: 'Wie lesen wir heute? Eine neue Studie hat untersucht, wie sich das Leseverhalten junger Erwachsener verändert hat. Das Ergebnis: Die meisten Befragten lesen täglich — allerdings fast nur kurze Texte auf dem Smartphone. Längere Artikel werden häufig nur überflogen; mehr als die Hälfte der Teilnehmenden gab an, selten einen Text bis zum Ende zu lesen. Die Forscherinnen sehen darin nicht nur Nachteile. Wer schnell überfliegt, findet wichtige Informationen oft rascher als frühere Generationen. Problematisch wird es jedoch bei komplexen Inhalten: In einem Test konnten viele Teilnehmende zwar das Thema eines Artikels nennen, die Meinung des Verfassers aber nicht richtig wiedergeben. Die Studienleiterin empfiehlt deshalb, beide Techniken bewusst zu trainieren: sich zuerst einen Überblick verschaffen und dann die entscheidenden Abschnitte genau lesen. Schulen sollten das Lesen längerer Texte wieder stärker fördern, etwa durch feste Lesezeiten im Unterricht. Ein Handyverbot hält sie dagegen nicht für sinnvoll.',
      items: [
        { typ: 'rf', aussage: 'Laut der Studie lesen junge Erwachsene kaum noch.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was zeigt der Test mit den Teilnehmenden?',
          optionen: [
            'Die meisten lesen längere Artikel bis zum Schluss.',
            'Viele erkennen das Thema, aber nicht die Position des Autors.',
            'Schnelles Überfliegen führt dazu, dass man Informationen langsamer findet.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Studienleiterin rät, zuerst einen Überblick zu gewinnen und dann wichtige Stellen genau zu lesen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie steht die Studienleiterin zu einem Handyverbot an Schulen?',
          optionen: [
            'Sie lehnt es ab.',
            'Sie fordert es für den Unterricht.',
            'Sie hält es für einen ersten Schritt.',
          ],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Stellungnahme mit mindestens 60 Wörtern. Leite deine Meinung klar ein und begründe sie.',
      aufgabe: 'In der Onlineausgabe einer Zeitung wird gefragt: „Sollten Schulen jeden Tag eine feste Lesezeit von 20 Minuten einführen?“ Schreib eine Stellungnahme für das Leserforum.',
      punkte: [
        'Sag deine Meinung zu dem Vorschlag und begründe sie.',
        'Nenne ein mögliches Gegenargument und geh darauf ein.',
        'Mach einen konkreten Vorschlag, wie die Lesezeit aussehen könnte.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich halte eine feste Lesezeit an Schulen für eine sehr gute Idee. Viele Jugendliche lesen heute nur noch kurze Nachrichten auf dem Handy und verlieren die Geduld für längere Texte. Genau diese Fähigkeit brauchen sie aber in der Ausbildung und im Studium. Kritiker sagen, dass dadurch Zeit für andere Fächer fehlt. Zwanzig Minuten am Tag sind jedoch wenig, und gutes Lesen hilft in jedem Fach. Mein Vorschlag: Die Schülerinnen und Schüler sollten ihre Bücher selbst auswählen dürfen, damit das Lesen nicht wie eine Pflicht wirkt. Lina Petrović',
    },
  ],
}
