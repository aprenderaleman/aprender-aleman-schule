// Übungsheft B2 — Lektion 09: Konjunktiv I — indirekte Rede
export default {
  lektion: 9,
  titel: 'Übungsheft — Konjunktiv I',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'So berichtet die Presse: Ergänze die Formen der indirekten Rede — Konjunktiv I oder, wo er wie der Indikativ aussieht, die Ausweichform im Konjunktiv II.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Sprecherin erklärte, das Museum {1} seit Montag wieder geöffnet. Die Besucher {2} ab sofort auch die neue Ausstellung im Obergeschoss sehen.',
          bank: ['sei', 'könnten', 'werde', 'müsse'],
          loesungen: { 1: 'sei', 2: 'könnten' },
        },
        {
          typ: 'luecke',
          text: 'Der Zeuge sagte, er {1} den Unfall genau beobachtet. Der Fahrer {2} bei Rot über die Kreuzung gefahren.',
          bank: ['habe', 'sei', 'werde', 'seien'],
          loesungen: { 1: 'habe', 2: 'sei' },
        },
        {
          typ: 'luecke',
          text: 'Der Bürgermeister kündigte an, die Stadt {1} im nächsten Jahr zwei neue Kitas bauen. Die Eltern {2} dann nicht mehr so lange auf einen Platz warten.',
          bank: ['werde', 'müssten', 'seien', 'wurde'],
          loesungen: { 1: 'werde', 2: 'müssten' },
        },
        { typ: 'mc', frage: 'Der Trainer meinte, seine Mannschaft ___ das Spiel noch gewinnen.', optionen: ['konnte', 'könne', 'gekonnt'], loesung: 1 },
        { typ: 'mc', frage: 'Die Mieter beklagen, sie ___ seit Wochen kein warmes Wasser.', optionen: ['habe', 'haben', 'hätten'], loesung: 2 },
        {
          typ: 'mc',
          frage: 'In welchem Satz gibt der Autor eine fremde Behauptung wieder?',
          optionen: ['Die Zahl der Radfahrer ist deutlich gestiegen.', 'Laut Stadtverwaltung sei die Zahl der Radfahrer deutlich gestiegen.', 'Die Stadt hat im Sommer neue Radwege gebaut.'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['„Ich bin müde.“', '„Wir sind müde.“', '„Ich habe Hunger.“', '„Wir haben Hunger.“', '„Ich komme morgen.“'],
          rechts: ['sie hätten Hunger', 'er komme morgen', 'sie seien müde', 'er habe Hunger', 'er sei müde'],
          loesung: {
            '„Ich bin müde.“': 'er sei müde',
            '„Wir sind müde.“': 'sie seien müde',
            '„Ich habe Hunger.“': 'er habe Hunger',
            '„Wir haben Hunger.“': 'sie hätten Hunger',
            '„Ich komme morgen.“': 'er komme morgen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kollege erklärte, er habe gestern nicht gekommen.', 'Der Kollege erklärte, er sei gestern nicht gekommen.'],
          loesung: 1,
          warum: 'El español usa siempre «haber», pero *kommen* forma el pasado con *sein*: **er sei gekommen**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Ministerin sagte, die Lage sei stabil.', 'Die Ministerin sagte, dass die Lage sei stabil.'],
          loesung: 0,
          warum: 'Sin *dass* la frase lleva el orden de una principal (*die Lage sei stabil*); con *dass* el verbo iría al final: *dass die Lage stabil sei*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Zufolge dem Bericht sei die Arbeitslosigkeit gesunken.', 'Dem Bericht zufolge sei die Arbeitslosigkeit gesunken.'],
          loesung: 1,
          warum: 'A diferencia de «según», **zufolge** va detrás del sustantivo: *dem Bericht zufolge*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Achte darauf, wer was behauptet, und entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Artikelauszug: Streit um die autofreie Innenstadt',
      text: 'In Wendelstadt wird seit Monaten über die Pläne diskutiert, die Innenstadt ab dem kommenden Frühjahr für Autos zu sperren. Bürgermeisterin Katrin Olbrich verteidigte das Projekt am Dienstag vor dem Stadtrat. Die Luft in der Altstadt sei zu schlecht, und viele Familien wünschten sich mehr Platz zum Spielen. Außerdem habe eine Umfrage gezeigt, dass zwei Drittel der Bevölkerung das Vorhaben unterstützen. Ganz anders sieht das der Verband der örtlichen Einzelhändler. Sein Vorsitzender Jens Hartung erklärte, viele Kunden kämen aus den umliegenden Dörfern und seien auf das Auto angewiesen. Ohne Parkplätze werde der Umsatz der Geschäfte deutlich sinken. Erfahrungen aus anderen Städten zeigen tatsächlich ein gemischtes Bild: Wo gleichzeitig Busse und Radwege ausgebaut wurden, sind die Innenstädte heute oft lebendiger als vorher. Wo das fehlte, standen nach wenigen Jahren mehrere Läden leer. Der Stadtrat will im November endgültig entscheiden.',
      items: [
        { typ: 'rf', aussage: 'Nach Aussage der Bürgermeisterin unterstützt eine Mehrheit der Bevölkerung das Projekt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was befürchtet Jens Hartung?',
          optionen: ['dass die Geschäfte weniger Umsatz machen', 'dass die Busfahrkarten teurer werden', 'dass die Dörfer schlechter angebunden werden'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Autor stellt als Tatsache dar, dass die Luft in der Altstadt zu schlecht ist.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was zeigen laut Artikel die Erfahrungen anderer Städte?',
          optionen: ['Autofreie Innenstädte schaden immer dem Handel.', 'Der Erfolg hängt davon ab, ob gleichzeitig Busse und Radwege ausgebaut werden.', 'Die meisten Städte haben ihre Pläne wieder gestoppt.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern.',
      aufgabe: 'Im Onlineforum deiner Stadt wird diskutiert, ob man die Innenstadt für Autos sperren sollte. Schreib deine Meinung dazu.',
      punkte: [
        'Gib eine Position aus der Diskussion wieder (z. B. Die Händler behaupten, … sei … / Laut … habe …).',
        'Nimm Stellung: Wie siehst du das?',
        'Mach einen Vorschlag für einen Kompromiss.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen, ich lese hier seit Tagen mit und möchte auch etwas dazu sagen. Die Geschäftsleute behaupten, ohne Parkplätze kämen keine Kunden mehr in die Stadt. Laut Stadtverwaltung sei die Luft dagegen so schlecht, dass man handeln müsse. Ich finde, beide Seiten haben ein bisschen recht. Eine autofreie Innenstadt wäre für Familien und Radfahrer wunderbar, aber viele Menschen vom Land brauchen ihr Auto. Mein Vorschlag: Man sollte am Stadtrand große Parkplätze bauen und von dort alle zehn Minuten einen kostenlosen Bus in die Innenstadt fahren lassen. So könnten alle weiterhin bequem einkaufen. Viele Grüße, Samira',
    },
  ],
}
