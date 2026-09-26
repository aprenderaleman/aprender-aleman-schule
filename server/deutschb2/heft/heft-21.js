// Übungsheft B2 — Lektion 21: Lesen: Kommentar & Standpunkt
export default {
  lektion: 21,
  titel: 'Übungsheft — Kommentar & Standpunkt',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wertungen, Konnektoren und Ironie: Wähle die passende Lösung und achte darauf, was der Verfasser wirklich meint.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Reform ist längst {1}: Schon vor zehn Jahren hätte man die Regeln ändern müssen. {2} hat die Regierung das Problem jetzt erkannt.',
          bank: ['überfällig', 'fragwürdig', 'Immerhin', 'Zu Unrecht'],
          loesungen: { 1: 'überfällig', 2: 'Immerhin' },
        },
        {
          typ: 'luecke',
          text: 'Die Stadt spart mit der Schließung zwar Geld, {1} das geht {2} Kosten der Familien mit kleinen Kindern.',
          bank: ['aber', 'denn', 'auf', 'zu'],
          loesungen: { 1: 'aber', 2: 'auf' },
        },
        {
          typ: 'mc',
          frage: 'Die ___ perfekte Lösung hat schon nach zwei Wochen neue Probleme verursacht.',
          optionen: ['angeblich', 'erfreulich', 'überfällig'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Dass die Preise nach dem Streik gestiegen sind, ist ___ — genau das hatten alle erwartet.',
          optionen: ['zu Unrecht', 'kaum verwunderlich', 'immerhin'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Zwar ist das neue Parkhaus teuer, aber ohne Parkplätze verliert die Innenstadt ihre Kundschaft.“ Wie steht der Verfasser zum Parkhaus?',
          optionen: ['Er ist dagegen.', 'Er äußert keine eigene Meinung.', 'Er ist dafür.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '„Na großartig — noch ein Formular, das niemand versteht.“ Wie ist diese Aussage gemeint?',
          optionen: ['als ehrliches Lob', 'ironisch', 'als neutrale Information'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['erfreulich', 'bedauerlich', 'fragwürdig', 'überfällig', 'kaum verwunderlich'],
          rechts: ['gut, positiv', 'leider negativ', 'zweifelhaft', 'schon lange nötig', 'nicht überraschend'],
          loesung: {
            erfreulich: 'gut, positiv',
            bedauerlich: 'leider negativ',
            fragwürdig: 'zweifelhaft',
            überfällig: 'schon lange nötig',
            'kaum verwunderlich': 'nicht überraschend',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Der Erfolg der Firma geht zu Kosten der Umwelt.', 'Der Erfolg der Firma geht auf Kosten der Umwelt.'],
          loesung: 1,
          warum: '«A costa de» se dice **auf Kosten** + genitivo; *zu Kosten* no existe.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Idee ist gut, allerdings ist sie teuer.', 'Die Idee ist gut, allerdings sie ist teuer.'],
          loesung: 0,
          warum: '*Allerdings* es un adverbio y ocupa la posición 1: el verbo va **justo después** (inversión), no como tras «sin embargo» en español.',
        },
        {
          typ: 'satzbau',
          woerter: ['sich', 'Es', 'Zeit', 'ändert', 'höchste', 'dass', 'etwas', 'ist'],
          loesung: 'Es ist höchste Zeit, dass sich etwas ändert.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar und löse die Aufgaben. Achte auf Wertungen, Konnektoren und den Schluss.',
      textTitel: 'Kommentar: Gratis-Bus für alle — eine schöne Idee auf dem Papier',
      text: 'Ab Januar soll der Bus in unserer Stadt für alle kostenlos sein. Die Stadtregierung spricht von einem „historischen Schritt für den Klimaschutz“. Zugegeben: Die Idee klingt verlockend, und es ist erfreulich, dass die Stadt endlich über den Verkehr nachdenkt. Allerdings bleibt eine entscheidende Frage offen: Wer bezahlt das? Rund acht Millionen Euro fehlen dann jedes Jahr in der Kasse — angeblich sollen sie „durch Einsparungen an anderer Stelle“ finanziert werden. Wo genau, sagt niemand. Kaum verwunderlich also, dass Bibliotheken und Schwimmbäder schon nervös werden. Dazu kommt: Ein kostenloser Bus nützt wenig, wenn er nur alle 40 Minuten fährt. Wer in den Außenbezirken wohnt, steigt deshalb nicht um. Statt Gratis-Tickets bräuchten wir zuerst dichtere Takte und neue Linien. Es ist höchste Zeit, dass die Stadt ehrlich rechnet — sonst geht der „historische Schritt“ letztlich auf Kosten der Schwimmbäder und Bibliotheken.',
      items: [
        {
          typ: 'mc',
          frage: 'Welche Haltung hat der Verfasser insgesamt?',
          optionen: [
            'Er begrüßt den Gratis-Bus ohne Einschränkung.',
            'Er findet die Idee grundsätzlich positiv, kritisiert aber die Umsetzung.',
            'Er lehnt jede Förderung des Busverkehrs ab.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut Verfasser hat die Stadt genau erklärt, wo die acht Millionen Euro eingespart werden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was sollte die Stadt nach Meinung des Verfassers zuerst tun?',
          optionen: [
            'die Ticketpreise leicht erhöhen',
            'mehr Geld für Bibliotheken und Schwimmbäder ausgeben',
            'die Busse häufiger fahren lassen und neue Linien einrichten',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Verfasser meint, dass ein kostenloser Bus wenig bringt, wenn er selten fährt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib für die Leserbriefseite eine Stellungnahme mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Deine Stadt will Geld sparen und die Stadtbibliothek deshalb am Samstag schließen. Die Lokalzeitung bittet ihre Leserinnen und Leser um Stellungnahmen.',
      punkte: [
        'Bewerte die Entscheidung mit mindestens einem Wertungswort.',
        'Räume ein Argument der Stadt ein (zwar … aber).',
        'Formuliere am Schluss eine klare Forderung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, die geplante Schließung der Stadtbibliothek am Samstag halte ich für eine bedauerliche Entscheidung. Zwar muss die Stadt sparen, aber der Samstag ist für viele Berufstätige und Familien der einzige Tag, an dem sie die Bibliothek überhaupt besuchen können. Kaum verwunderlich also, dass sich schon zahlreiche Eltern beschwert haben. Die Einsparung ist gering, der Schaden für die Bildung dagegen groß. Es ist höchste Zeit, dass die Stadt andere Lösungen prüft, zum Beispiel kürzere Öffnungszeiten am Montag. Mit freundlichen Grüßen, Ingrid Paulsen',
    },
  ],
}
