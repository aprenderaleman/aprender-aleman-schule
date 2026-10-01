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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Radiokommentar zu einer neuen Gebühr. Achte auf die Wertungen und entscheide, welche Aussage dem Kommentar entspricht.',
      audio: {
        transcript: 'Seit dem ersten März zahlt man in unserer Stadt für jeden Einwegbecher fünfzig Cent extra. Viele Cafébesitzer behaupten, dass ihnen deshalb die Kundschaft wegläuft. Ein fragwürdiges Argument, denn wer seinen eigenen Becher mitbringt, zahlt keinen Cent mehr. Erfreulich ist dagegen, was man schon nach wenigen Wochen sieht. Die Mülleimer am Bahnhof sind nicht mehr überfüllt, und die Stadtreinigung findet rund ein Drittel weniger Becher auf den Straßen. Zwar bedeutet die Gebühr für kleine Betriebe zusätzliche Arbeit, aber dieser Aufwand ist gering im Vergleich zu den Kosten, die der Müll bisher verursacht hat. Bedauerlich finde ich allerdings, dass die Stadt noch immer nicht sagt, wofür sie die Einnahmen verwendet. Angeblich fließt das Geld in den Umweltschutz, nur konnte mir das im Rathaus niemand bestätigen. Die Gebühr selbst war längst überfällig. Jetzt ist es höchste Zeit, dass die Stadt offen sagt, was mit dem Geld geschieht.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wie wird die neue Gebühr im Kommentar insgesamt beurteilt?',
          optionen: [
            'Sie wird abgelehnt, weil die Cafés ihre Kundschaft verlieren.',
            'Sie wird begrüßt; kritisiert wird nur, dass unklar ist, wohin das Geld fließt.',
            'Sie wird als überflüssig bezeichnet, weil der Müll kaum weniger geworden ist.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Im Kommentar wird die Sorge der Cafébesitzer als berechtigt dargestellt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was hat sich seit der Einführung der Gebühr verändert?',
          optionen: [
            'Nur noch ein Drittel der Kundschaft kauft Kaffee zum Mitnehmen.',
            'Die Stadtreinigung braucht ein Drittel mehr Personal.',
            'Auf den Straßen liegt etwa ein Drittel weniger Becher.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Im Rathaus wurde nicht bestätigt, dass die Einnahmen für den Umweltschutz verwendet werden.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich einen Hörerkommentar für das Lokalradio. Du hast etwa 100 Sekunden.',
      aufgabe: 'Das Lokalradio sammelt Hörerkommentare zu folgendem Plan: Deine Stadt will die Parkgebühren im Zentrum verdoppeln, um den Autoverkehr zu verringern. Nimm einen Kommentar von etwa 100 Sekunden auf, in dem du den Plan bewertest.',
      punkte: [
        'Sag, was du an dem Plan erfreulich und was du fragwürdig findest.',
        'Erkläre, auf wessen Kosten der Plan deiner Meinung nach geht.',
        'Sag, was die Stadt stattdessen oder zusätzlich tun sollte.',
      ],
      redemittel: ['Erfreulich ist, dass …', 'Fragwürdig finde ich allerdings, …', 'Das geht vor allem auf Kosten …', 'Letztlich …'],
      maxSekunden: 100,
      beispielLoesung: 'Die Stadt will also die Parkgebühren im Zentrum verdoppeln. Erfreulich ist, dass sie den Autoverkehr endlich ernst nimmt, denn die Innenstadt ist seit Jahren verstopft. Fragwürdig finde ich allerdings, wie sie das Problem lösen will. Vielleicht bleiben ein paar Autos zu Hause. Aber wer auf dem Land wohnt, hat oft gar keine andere Möglichkeit, dort fährt der letzte Bus um sieben Uhr abends. Die höheren Gebühren gehen also vor allem auf Kosten der Pendler und der Leute mit wenig Geld. Wer gut verdient, zahlt einfach und parkt weiter direkt vor dem Geschäft. Kaum verwunderlich, dass auch die Händler nervös werden. Aus meiner Sicht müsste die Stadt zuerst die Alternativen verbessern, also günstige Parkplätze am Stadtrand anbieten und Busse einsetzen, die auch abends fahren. Letztlich funktioniert der Plan nur, wenn sie beides zusammen angeht. Sonst bleibt am Ende eine teure Idee, die niemandem hilft.',
    },
  ],
}
