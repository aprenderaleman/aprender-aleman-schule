// Übungsheft B2 — Lektion 13: Adjektivdeklination & Partizip als Attribut
export default {
  lektion: 13,
  titel: 'Übungsheft — Adjektivdeklination & Partizip',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Artikel oder Adjektiv — wer trägt das Signal? Wähle die richtige Endung und achte darauf, ob ein Partizip aktiv oder passiv gemeint ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Nach langer Suche haben Aylin und Jonas eine frisch {1} Wohnung am Stadtrand gefunden. Wegen der {2} Mieten im Zentrum hatten sie dort keine Chance. Zur Arbeit fährt Jonas jetzt mit einem {3} Auto.',
          bank: ['renovierte', 'renoviertes', 'steigenden', 'gebrauchten', 'gebrauchtes'],
          loesungen: { 1: 'renovierte', 2: 'steigenden', 3: 'gebrauchten' },
        },
        {
          typ: 'luecke',
          text: 'Im Hotel gibt es zum Frühstück {1} Brot, {2} Kaffee und {3} Marmelade aus der Region.',
          bank: ['frisches', 'starken', 'starker', 'hausgemachte', 'starkes'],
          loesungen: { 1: 'frisches', 2: 'starken', 3: 'hausgemachte' },
        },
        {
          typ: 'luecke',
          text: 'Im {1} Text geht es um den {2} Verkehr in deutschen Großstädten. Die Autorin fordert eine {3} Lösung für Radfahrer und Fußgänger.',
          bank: ['folgenden', 'zunehmenden', 'passende', 'passender', 'zunehmende'],
          loesungen: { 1: 'folgenden', 2: 'zunehmenden', 3: 'passende' },
        },
        {
          typ: 'mc',
          frage: 'Die Stadt baut eine neue Straßenbahnlinie. Die ___ Linie soll 2029 in Betrieb gehen.',
          optionen: ['geplante', 'planende', 'geplanten'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Trotz des ___ Wetters fand das Konzert im Park statt.',
          optionen: ['schlechte', 'schlechten', 'schlechtes'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welches Attribut entspricht dem Relativsatz „die Zahlen, die sinken“?',
          optionen: ['die sinkende Zahlen', 'die gesunkenen Zahlen', 'die sinkenden Zahlen'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Wir suchen eine Wohnung renoviert in der Nähe vom Bahnhof.', 'Wir suchen eine renovierte Wohnung in der Nähe vom Bahnhof.'],
          loesung: 1,
          warum: 'En español el participio va detrás («un piso renovado»); en alemán el atributo va **delante** del sustantivo y se declina: *eine renovierte Wohnung*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Mein Bruder hat sich ein gebrauchtes Fahrrad gekauft.', 'Mein Bruder hat sich ein gebraucht Fahrrad gekauft.'],
          loesung: 0,
          warum: '*ein* no muestra la señal del neutro, así que el adjetivo la toma: *ein gebraucht**es** Fahrrad*. Sin terminación solo va el adjetivo predicativo (*Das Fahrrad ist gebraucht*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Kinder spielend im Garten machen viel Lärm.', 'Die im Garten spielenden Kinder machen viel Lärm.'],
          loesung: 1,
          warum: 'El gerundio pospuesto («los niños jugando en el jardín») no se calca: el **Partizip I** va delante del sustantivo, con sus complementos antes, y se declina.',
        },
        {
          typ: 'satzbau',
          woerter: ['kritisch', 'veröffentlichte', 'Der', 'ist', 'im', 'Bericht', 'März', 'sehr'],
          loesung: 'Der im März veröffentlichte Bericht ist sehr kritisch.',
          alt: ['Sehr kritisch ist der im März veröffentlichte Bericht.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Leserbrief: Neubaugebiet ja — aber nicht so',
      text: 'Zu Ihrem Artikel über das geplante Neubaugebiet am Stadtrand möchte ich Folgendes anmerken. Seit Jahren beobachte ich in unserer wachsenden Stadt dasselbe Problem: Die steigenden Mieten verdrängen Familien mit kleinem Einkommen aus dem Zentrum. Frisch renovierte Altbauwohnungen kosten inzwischen fast doppelt so viel wie vor zehn Jahren. Das geplante Projekt ist deshalb grundsätzlich eine gute Idee. Allerdings fehlt mir im veröffentlichten Konzept eine passende Antwort auf den zunehmenden Verkehr. Wer am Stadtrand wohnt, braucht ein Auto oder eine zuverlässige Busverbindung. Die bisher genannten Pläne sehen aber nur einen Bus pro Stunde vor. Außerdem wurden die betroffenen Anwohnerinnen und Anwohner bisher kaum nach ihrer Meinung gefragt. Ich schlage deshalb eine öffentliche Versammlung vor, bei der alle Interessierten ihre Wünsche äußern können. Nur so entsteht ein Viertel, in dem sich die künftigen Bewohner wirklich wohlfühlen. — Karin Albers, Neustadt',
      items: [
        { typ: 'rf', aussage: 'Karin Albers lehnt das Neubaugebiet grundsätzlich ab.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kritisiert sie am Konzept der Stadt?',
          optionen: ['Die Wohnungen werden zu teuer.', 'Für den Verkehr gibt es keine überzeugende Lösung.', 'Das Gebiet liegt zu nah am Zentrum.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Nach den bisherigen Plänen soll einmal pro Stunde ein Bus fahren.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was schlägt Karin Albers vor?',
          optionen: ['eine öffentliche Versammlung für alle Interessierten', 'eine zweite Buslinie ins Zentrum', 'niedrigere Mieten für Altbauwohnungen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Beitrag im Lokalradio. Entscheide, welche Aussage dem Gehörten entspricht.',
      audio: {
        transcript: 'Guten Morgen, liebe Hörerinnen und Hörer, hier ist das Stadtmagazin. Nach fast zwei Jahren Bauzeit öffnet am kommenden Samstag die frisch renovierte Markthalle am Hafen wieder ihre Türen. Das ursprünglich für April geplante Eröffnungsfest musste verschoben werden, allerdings nicht aus Geldmangel, sondern wegen des beschädigten Dachs. In der Halle erwarten Sie künftig vierzig Stände mit frischem Obst, hausgemachtem Käse und duftendem Brot aus der Region. Neu ist außerdem ein kleiner Bereich für gebrauchte Bücher und reparierte Fahrräder. Die Stadt reagiert damit auf die wachsende Nachfrage nach günstigen Angeboten, denn die steigenden Preise machen vielen Familien Sorgen. Geöffnet ist die Halle von Dienstag bis Samstag, jeweils von acht bis achtzehn Uhr. Am Eröffnungstag gibt es schon ab sieben Uhr ein kostenloses Frühstück für die ersten hundert Besucher. Wegen des zunehmenden Verkehrs am Hafen empfiehlt die Stadt, mit dem Bus oder dem Fahrrad zu kommen. Der neu gebaute Parkplatz hinter der Halle bietet nämlich nur wenige Plätze.',
      },
      items: [
        { typ: 'rf', aussage: 'Die renovierte Markthalle wird am Samstag wieder eröffnet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum musste das Eröffnungsfest verschoben werden?',
          optionen: ['Der Stadt fehlte das Geld.', 'Das Dach war beschädigt.', 'Die Stände waren noch nicht fertig.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie viele Stände gibt es künftig in der Halle?',
          optionen: ['vierzig', 'vierzehn', 'hundert'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Das kostenlose Frühstück am Eröffnungstag beginnt um acht Uhr.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern. Geh auf alle drei Punkte ein.',
      aufgabe: 'In einem Verbraucherforum lautet die Frage der Woche: „Gebraucht statt neu kaufen — echte Alternative oder nur eine Notlösung?“ Schreib deinen Beitrag.',
      punkte: [
        'Berichte von deiner eigenen Erfahrung mit gebrauchten Produkten.',
        'Wäge Vor- und Nachteile ab (z. B. steigende Preise, Qualität, Umwelt).',
        'Gib eine Empfehlung und verwende dabei mindestens zwei Partizip-Attribute.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich kaufe seit Jahren fast alles gebraucht und habe damit gute Erfahrungen gemacht. Mein Laptop, mein Fahrrad und sogar mein Sofa stammen aus zweiter Hand. Bei den ständig steigenden Preisen spare ich so jedes Jahr mehrere hundert Euro. Außerdem schont man die Umwelt, weil weniger neue Waren produziert werden. Natürlich gibt es auch Nachteile: Bei gebrauchten Elektrogeräten fehlt oft die Garantie, und man weiß nicht genau, wie der Vorbesitzer damit umgegangen ist. Meine Empfehlung: Wer ein bestimmtes Produkt sucht, sollte zuerst nach einem gut erhaltenen Exemplar schauen und die angebotene Ware vor dem Kauf genau prüfen. Für mich ist Gebrauchtkaufen jedenfalls keine Notlösung, sondern eine clevere Alternative.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag. Sprich etwa 90 Sekunden und geh auf alle drei Punkte ein.',
      aufgabe: 'Dein Deutschkurs sammelt kurze Audiobeiträge zum Thema „Meine Stadt im Wandel“. Beschreibe in etwa 90 Sekunden, wie sich deine Stadt oder dein Viertel in den letzten Jahren verändert hat. Verwende dabei Adjektive und Partizipien vor dem Nomen (die steigenden Mieten, das frisch renovierte Haus).',
      punkte: [
        'Was hat sich verändert (z. B. Mieten, Verkehr, Gebäude, Geschäfte)?',
        'Welche Veränderung findest du positiv, welche negativ?',
        'Welches geplante Projekt oder welche Lösung wünschst du dir?',
      ],
      redemittel: ['In den letzten Jahren hat sich … stark verändert.', 'Positiv finde ich …', 'Ein großes Problem sind die steigenden …', 'Ich wünsche mir deshalb …'],
      maxSekunden: 90,
      beispielLoesung: 'Ich möchte kurz über mein Viertel in Valencia sprechen, das sich in den letzten Jahren stark verändert hat. Früher war es eine ruhige Wohngegend mit kleinen Läden, inzwischen gehört es zu den beliebtesten Gegenden der Stadt. Positiv finde ich vor allem die vielen renovierten Häuser und den neu gebauten Radweg am Fluss; auch der frisch eröffnete Markt gefällt mir sehr. Die Kehrseite sind allerdings die steigenden Mieten: Viele Familien, die dort seit Jahrzehnten gewohnt haben, mussten wegziehen, weil sie sich ihre Wohnung nicht mehr leisten konnten. Außerdem stört mich der zunehmende Verkehr, besonders am Wochenende. Ich wünsche mir deshalb mehr bezahlbare Wohnungen und eine durchdachte Lösung für die Autos, zum Beispiel ein Parkhaus am Stadtrand. Die geplante Straßenbahnlinie halte ich zwar für eine gute Idee, aber bis sie fertig ist, dauert es leider noch ein paar Jahre.',
    },
  ],
}
