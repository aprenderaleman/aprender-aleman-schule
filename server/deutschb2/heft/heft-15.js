// Übungsheft B2 — Lektion 15: Verben mit Präpositionen & Präpositionaladverbien
export default {
  lektion: 15,
  titel: 'Übungsheft — Verben mit Präpositionen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die feste Präposition, das passende da(r)- oder wo(r)-Wort oder die richtige Form mit Pronomen. Achte darauf, ob von einer Sache oder einer Person die Rede ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Carla interessiert sich schon lange {1} Architektur. Jetzt nimmt sie {2} einem Wettbewerb für junge Architektinnen und Architekten teil. Ob sie gewinnt, hängt vor allem {3} ihrem Entwurf ab.',
          bank: ['für', 'an', 'von', 'über', 'auf'],
          loesungen: { 1: 'für', 2: 'an', 3: 'von' },
        },
        {
          typ: 'luecke',
          text: '{1} wartest du denn? — Auf das Paket aus Spanien. Ich warte schon seit Montag {2}. — Und {3} wartet deine Schwester? — Auf ihren Freund, der hat sich verspätet.',
          bank: ['Worauf', 'darauf', 'auf wen', 'auf ihn', 'Wofür'],
          loesungen: { 1: 'Worauf', 2: 'darauf', 3: 'auf wen' },
        },
        {
          typ: 'luecke',
          text: 'Liebe Nora, ich freue mich schon {1}, dich im Mai zu sehen. Ob wir an den See fahren, hängt {2} ab, wie das Wetter wird. Und ich bedanke mich jetzt schon {3}, dass du deinen berühmten Apfelkuchen mitbringst!',
          bank: ['darauf', 'davon', 'dafür', 'daran', 'damit'],
          loesungen: { 1: 'darauf', 2: 'davon', 3: 'dafür' },
        },
        {
          typ: 'mc',
          frage: 'Nach drei Jahren im Norden habe ich mich immer noch nicht ___ das Wetter gewöhnt.',
          optionen: ['an', 'auf', 'zu'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '___ hast du dich gestern so geärgert? — Über den Stau auf der Autobahn.',
          optionen: ['Woran', 'Worüber', 'Wofür'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Erinnerst du dich noch an Herrn Özdemir, unseren alten Nachbarn? — Ja, ich erinnere mich gut ___.',
          optionen: ['daran', 'an ihm', 'an ihn'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['teilnehmen', 'sich kümmern', 'passen', 'sich beschweren', 'abhängen'],
          rechts: ['an + Dativ', 'um + Akkusativ', 'zu + Dativ', 'über + Akkusativ', 'von + Dativ'],
          loesung: {
            'teilnehmen': 'an + Dativ',
            'sich kümmern': 'um + Akkusativ',
            'passen': 'zu + Dativ',
            'sich beschweren': 'über + Akkusativ',
            'abhängen': 'von + Dativ',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich träume mit einer langen Reise durch Südamerika.', 'Ich träume von einer langen Reise durch Südamerika.'],
          loesung: 1,
          warum: '«soñar **con**» es **träumen von** + Dativ; *träumen mit* es un calco del español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Wir warten schon seit einer Stunde auf den Techniker.', 'Wir warten schon seit einer Stunde für den Techniker.'],
          loesung: 0,
          warum: '**warten auf** + Akkusativ. *warten für* no existe: no traduzcas el «a» ni el «por» del español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Kollegin hat sich von einem Architekten verliebt.', 'Meine Kollegin hat sich in einen Architekten verliebt.'],
          loesung: 1,
          warum: '«enamorarse **de**» es **sich verlieben in** + Akkusativ, nunca *von*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Artikelauszug: Zeit schenken, Freude bekommen',
      text: 'Seit drei Jahren kümmert sich die Rentnerin Helga Brandt jeden Dienstag um zwei Kinder aus einer syrischen Familie in Ahlfeld. Angefangen hat alles mit einer Anzeige in der Lokalzeitung: Der Verein „Nachbarn helfen“ suchte Freiwillige, die an einem Patenschaftsprogramm teilnehmen wollten. „Ich habe lange darüber nachgedacht, ob ich das schaffe“, erzählt die 68-Jährige. Heute hilft sie bei den Hausaufgaben, geht mit den Kindern in die Bibliothek und nimmt an Elternabenden teil, wenn die Eltern arbeiten müssen. Anfangs musste sie sich erst daran gewöhnen, dass in der Familie ganz anders gekocht und gefeiert wird. Inzwischen freut sie sich jede Woche auf die gemeinsamen Nachmittage. Der Verein bittet dringend um weitere Helferinnen und Helfer, denn die Warteliste der Familien ist lang. Wie viel Zeit man investiert, hängt ganz von den eigenen Möglichkeiten ab: Schon eine Stunde pro Woche kann viel bewirken. Wer sich für das Programm interessiert, kann an einem Infoabend im Rathaus teilnehmen.',
      items: [
        { typ: 'rf', aussage: 'Helga Brandt hat sich sofort gemeldet, nachdem sie die Anzeige gelesen hatte.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was macht Helga Brandt, wenn die Eltern keine Zeit haben?',
          optionen: ['Sie kocht für die ganze Familie.', 'Sie geht an ihrer Stelle zum Elternabend.', 'Sie bringt die Kinder morgens zur Schule.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum sucht der Verein weitere Freiwillige?',
          optionen: ['Viele Familien warten auf eine Patenschaft.', 'Mehrere Helfer haben aufgehört.', 'Der Verein möchte ein neues Programm starten.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Wie viel Zeit man sich für die Patenschaft nimmt, kann man selbst entscheiden.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Verwende mindestens drei Verben mit Präposition, eins davon mit Korrelat (z. B. darauf, dass …).',
      aufgabe: 'Du hast den Artikel über das Patenschaftsprogramm des Vereins „Nachbarn helfen“ gelesen und möchtest mitmachen. Schreib dem Verein eine E-Mail.',
      punkte: [
        'Erkläre, wofür du dich interessierst und warum.',
        'Frag, wovon die Teilnahme abhängt (z. B. Zeit, Erfahrung, Sprachkenntnisse).',
        'Bitte um einen Termin für ein persönliches Gespräch.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Interesse am Patenschaftsprogramm — Sehr geehrte Damen und Herren, mit großem Interesse habe ich den Artikel über Ihr Patenschaftsprogramm gelesen. Ich interessiere mich schon lange für ehrenamtliche Arbeit, und da ich selbst vor einigen Jahren nach Deutschland gekommen bin, weiß ich, wie wichtig Unterstützung im Alltag ist. Gern würde ich mich um ein Kind kümmern und bei den Hausaufgaben helfen. Allerdings arbeite ich Vollzeit. Hängt die Teilnahme davon ab, wie viele Stunden man pro Woche anbieten kann? Brauche ich besondere Erfahrung? Ich würde mich sehr darüber freuen, wenn wir einen Termin für ein persönliches Gespräch vereinbaren könnten. Mit freundlichen Grüßen, Lucía Ferreira',
    },
  ],
}
