// Übungsheft C1 — Lektion 05: Konjunktiv I — indirekte Rede
export default {
  lektion: 5,
  titel: 'Übungsheft — Konjunktiv I & indirekte Rede',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Gib die Äußerungen normgerecht in indirekter Rede wieder. Bestimme dazu jeweils die Zeitstufe der Originalaussage und prüfe, ob der Konjunktiv I mit dem Indikativ zusammenfällt.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Sprecher der Stadtwerke bestritt die Vorwürfe entschieden. Die Preiserhöhung {1} rechtlich einwandfrei, man {2} die Kunden rechtzeitig darüber informiert.',
          bank: ['sei', 'habe', 'hätte', 'ist'],
          loesungen: { 1: 'sei', 2: 'habe' },
          warum: '*man habe* se distingue del indicativo *man hat*, así que el Konjunktiv I se mantiene; *hätte* solo es la forma de sustitución cuando el Konjunktiv I coincide con el indicativo.',
        },
        {
          typ: 'luecke',
          text: 'Die Beschäftigten klagten, sie {1} seit Monaten keine Antwort auf ihre Beschwerden erhalten. Der Betriebsrat forderte, die Geschäftsführung {2} sich endlich zu den Vorwürfen äußern.',
          bank: ['hätten', 'haben', 'solle', 'sollen'],
          loesungen: { 1: 'hätten', 2: 'solle' },
        },
        {
          typ: 'luecke',
          text: 'Dem aktuellen Gutachten {1} ist die Brücke noch mindestens zehn Jahre nutzbar, obwohl {2} Umweltministerium schon heute erhebliche Mängel bestehen.',
          bank: ['zufolge', 'laut', 'wegen'],
          loesungen: { 1: 'zufolge', 2: 'laut' },
        },
        {
          typ: 'mc',
          frage: '„Wir haben die Risiken unterschätzt“, räumte der Vorstand ein. → Der Vorstand räumte ein, man ___ die Risiken unterschätzt.',
          optionen: ['habe', 'hatte', 'würde'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Wir wissen nichts von einer Kündigung.“ → Die Mieter behaupteten, sie ___ nichts von einer Kündigung.',
          optionen: ['wissen', 'wussten', 'wüssten'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '„Wann wird die Entscheidung bekannt gegeben?“ → Eine Journalistin wollte wissen, …',
          optionen: ['ob die Entscheidung bekannt gegeben werde.', 'wann die Entscheidung bekannt gegeben werde.', 'wann werde die Entscheidung bekannt gegeben.'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['„Ich bin krank.“ → Er sagte, er sei krank gewesen.', '„Ich bin krank.“ → Er sagte, er sei krank.'],
          loesung: 1,
          warum: 'En alemán no hay concordancia de tiempos: aunque en español digas «dijo que *estaba* enfermo», el original está en presente → Konjunktiv I **Gegenwart** (*er sei krank*). *sei krank gewesen* remitiría a un pasado.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Ministerium machte am Abend eine Stellungnahme.', 'Das Ministerium gab am Abend eine Stellungnahme ab.'],
          loesung: 1,
          warum: 'La colocación es **eine Stellungnahme abgeben**; *machen* es calco de «hacer una declaración».',
        },
        {
          typ: 'korrektur',
          optionen: ['„Warten Sie draußen!“ → Der Beamte sagte, ich solle draußen warten.', '„Warten Sie draußen!“ → Der Beamte sagte, ich warte draußen.'],
          loesung: 0,
          warum: 'El imperativo se reproduce con **sollen** (neutro) o **mögen** (cortés); sin modal, la orden se convierte en una simple constatación.',
        },
        {
          typ: 'zuordnen',
          links: ['einen eigenen Fehler zugeben', 'etwas mit Nachdruck zusichern', 'Gerüchte offiziell zurückweisen', 'etwas ohne Beleg als wahr hinstellen', 'einen Aspekt besonders hervorheben'],
          rechts: ['einräumen', 'versichern', 'dementieren', 'behaupten', 'betonen'],
          loesung: {
            'einen eigenen Fehler zugeben': 'einräumen',
            'etwas mit Nachdruck zusichern': 'versichern',
            'Gerüchte offiziell zurückweisen': 'dementieren',
            'etwas ohne Beleg als wahr hinstellen': 'behaupten',
            'einen Aspekt besonders hervorheben': 'betonen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Achte darauf, wer jeweils spricht, und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Streit um die Stadtteilbibliothek',
      text: 'Die geplante Schließung der Stadtteilbibliothek in Bremen-Vegesack sorgt weiter für Unmut. In einer Stellungnahme verteidigte die Kulturbehörde am Montag ihre Entscheidung. Die Ausleihzahlen seien in den vergangenen fünf Jahren um fast ein Drittel gesunken, zudem müsse das Gebäude für mehrere Millionen Euro saniert werden. Man werde das Angebot keineswegs abbauen, sondern in die Zentralbibliothek verlagern, die mit dem Bus in zwanzig Minuten zu erreichen sei. Der Vorwurf, man spare auf Kosten der Kinder, sei unbegründet.\nDer Elternverein des Stadtteils sieht das anders. Seine Vorsitzende Aylin Demir bestreitet, dass die Ausleihzahlen aussagekräftig seien: Viele Familien nutzten die Bibliothek als Lern- und Treffpunkt, ohne überhaupt Bücher auszuleihen. Zwanzig Minuten Busfahrt seien für Grundschulkinder schlicht zu viel. Die Behörde möge ihre Pläne aussetzen, bis ein unabhängiges Gutachten vorliege.\nTatsächlich hat die Bibliothek im vergangenen Jahr rund 40 000 Besucher gezählt — mehr als jede andere Stadtteilbibliothek Bremens. Die Behörde räumte inzwischen ein, dass diese Zahl bei ihrer Entscheidung keine Rolle gespielt habe. Eine endgültige Entscheidung soll im Herbst fallen.',
      items: [
        { typ: 'rf', aussage: 'Nach Darstellung der Kulturbehörde soll das Bibliotheksangebot für den Stadtteil insgesamt verringert werden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Mit welchem Argument widerspricht Aylin Demir der Behörde?',
          optionen: ['Die Sanierungskosten seien von der Behörde deutlich zu hoch angesetzt worden.', 'Die Ausleihzahlen bildeten die tatsächliche Nutzung der Bibliothek nicht ab.', 'Die Zentralbibliothek habe für zusätzliche Besucher gar keinen Platz.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Information stellt der Autor selbst als Tatsache dar?',
          optionen: ['Die Ausleihzahlen sind um fast ein Drittel zurückgegangen.', 'Das Gebäude muss für mehrere Millionen Euro saniert werden.', 'Die Bibliothek hatte im vergangenen Jahr mehr Besucher als jede andere Stadtteilbibliothek Bremens.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Behörde hat zugegeben, die Besucherzahlen bei ihrer Entscheidung nicht berücksichtigt zu haben.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Gib fremde Positionen durchgehend in indirekter Rede wieder und variiere die Redeeinleitungen.',
      aufgabe: 'Fasse den Artikel über die Stadtteilbibliothek für die Schülerzeitung deiner Sprachschule zusammen und kommentiere den Konflikt.',
      punkte: [
        'Gib die Position der Kulturbehörde in indirekter Rede wieder.',
        'Fasse die Gegenargumente des Elternvereins zusammen, ohne die Formulierungen des Artikels wörtlich zu übernehmen.',
        'Nimm abschließend selbst Stellung und begründe deine Einschätzung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Artikel berichtet über den Streit um die geplante Schließung der Stadtteilbibliothek in Bremen-Vegesack. Die Kulturbehörde begründet ihre Entscheidung mit sinkenden Ausleihzahlen und hohen Sanierungskosten. Das Angebot werde nicht abgebaut, sondern lediglich in die gut erreichbare Zentralbibliothek verlagert; den Vorwurf, man spare auf Kosten der Kinder, weist sie zurück. Der Elternverein hält dagegen, die Ausleihzahlen gäben die tatsächliche Nutzung nur unzureichend wieder, weil viele Familien die Bibliothek vor allem als Lernort nutzten. Zudem sei der Weg in die Innenstadt für jüngere Kinder zu weit.\nIch halte die Argumente des Elternvereins für überzeugender. Wenn eine Bibliothek mehr Besucher zählt als alle anderen im Stadtgebiet, lässt sich ihre Bedeutung kaum an der Zahl ausgeliehener Bücher messen. Die Behörde sollte das unabhängige Gutachten abwarten, bevor sie Tatsachen schafft.',
    },
  ],
}
