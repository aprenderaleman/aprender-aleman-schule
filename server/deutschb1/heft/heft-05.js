// Übungsheft B1 — Lektion 05: Konnektoren II — obwohl, trotzdem, wenn, als
export default {
  lektion: 5,
  titel: 'Übungsheft — obwohl, trotzdem, wenn, als',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle den richtigen Konnektor, ordne die Wörter und finde den Fehler.',
      items: [
        { typ: 'mc', frage: '___ ich ein Kind war, habe ich in Sevilla gewohnt.', optionen: ['Wenn', 'Als', 'Obwohl'], loesung: 1 },
        { typ: 'mc', frage: '___ ich Stress habe, höre ich immer Musik, denn das hilft mir.', optionen: ['Als', 'Obwohl', 'Wenn'], loesung: 2 },
        { typ: 'mc', frage: 'Es regnet stark. ___ geht Mia joggen.', optionen: ['Trotzdem', 'Obwohl', 'Deshalb'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich gehe heute zum Deutschkurs, {1} ich sehr müde bin. Das Wetter ist schlecht. {2} machen wir ein Picknick im Park.',
          bank: ['obwohl', 'Trotzdem', 'weil', 'Deshalb'],
          loesungen: { 1: 'obwohl', 2: 'Trotzdem' },
        },
        {
          typ: 'luecke',
          text: '{1} wir letztes Jahr in Wien waren, hat es geschneit. Immer {2} ich meine Oma besuche, backt sie einen Kuchen.',
          bank: ['Als', 'wenn', 'obwohl'],
          loesungen: { 1: 'Als', 2: 'wenn' },
        },
        { typ: 'satzbau', woerter: ['gehe', 'Geld', 'ins', 'habe', 'ich', 'Obwohl', 'Konzert', 'wenig', 'ich'], loesung: 'Obwohl ich wenig Geld habe, gehe ich ins Konzert.' },
        { typ: 'satzbau', woerter: ['hilft', 'mir', 'trotzdem', 'Zeit', 'er', 'hat', 'wenig', 'Er'], loesung: 'Er hat wenig Zeit, trotzdem hilft er mir.' },
        {
          typ: 'zuordnen',
          links: ['Als ich 18 war,', 'Wenn es morgen regnet,', 'Obwohl Pedro krank ist,', 'Immer wenn ich in Berlin bin,', 'Obwohl der Film langweilig war,'],
          rechts: ['habe ich meinen ersten Job bekommen.', 'machen wir kein Picknick.', 'geht er zur Arbeit.', 'besuche ich meine Tante.', 'sind wir bis zum Ende geblieben.'],
          loesung: {
            'Als ich 18 war,': 'habe ich meinen ersten Job bekommen.',
            'Wenn es morgen regnet,': 'machen wir kein Picknick.',
            'Obwohl Pedro krank ist,': 'geht er zur Arbeit.',
            'Immer wenn ich in Berlin bin,': 'besuche ich meine Tante.',
            'Obwohl der Film langweilig war,': 'sind wir bis zum Ende geblieben.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Als ich ein Kind war, hatte ich einen Hund.', 'Wenn ich ein Kind war, hatte ich einen Hund.'],
          loesung: 0,
          warum: 'La infancia es una etapa única del pasado → **als**. *Wenn* es para lo que se repite, el presente, el futuro o la condición. En español las dos son «cuando».',
        },
        {
          typ: 'korrektur',
          optionen: ['Obwohl es regnet, wir gehen spazieren.', 'Obwohl es regnet, gehen wir spazieren.'],
          loesung: 1,
          warum: 'Si la frase empieza con la subordinada (*Obwohl es regnet*), esta ocupa la posición 1: después va enseguida el verbo → *gehen wir*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Sind die Aussagen richtig oder falsch? Wähle dann die richtige Antwort.',
      textTitel: 'Stadtteil Nord — Mit 72 jede Woche auf der Bühne',
      text: 'Als Helga Brandt jung war, wollte sie Schauspielerin werden. Ihre Eltern waren aber dagegen, deshalb hat sie eine Ausbildung als Bankkauffrau gemacht. Heute ist sie 72 Jahre alt – und steht trotzdem jede Woche auf der Bühne. Seit zwei Jahren spielt sie in einer Theatergruppe im Stadtteilzentrum Nord. „Wenn ich spiele, vergesse ich alle Probleme“, sagt sie. Obwohl sie vor jeder Probe nervös ist, hat sie sehr viel Spaß. Am Samstag, dem 14. Oktober, zeigt die Gruppe ihr neues Stück im Gemeindesaal. Die Karten kosten 8 Euro. Wenn Sie kommen möchten, rufen Sie bitte vorher an, denn es gibt nur 60 Plätze.',
      items: [
        { typ: 'rf', aussage: 'Helga wollte schon als junge Frau Schauspielerin werden.', loesung: true },
        { typ: 'rf', aussage: 'Vor den Proben ist Helga nie nervös.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Ausbildung hat Helga gemacht?',
          optionen: ['Schauspielerin', 'Bankkauffrau', 'Lehrerin'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum soll man vorher anrufen?',
          optionen: ['Weil es nur 60 Plätze gibt.', 'Weil die Karten 8 Euro kosten.', 'Weil Helga am Samstag krank ist.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Benutze obwohl, trotzdem, wenn oder als.',
      aufgabe: 'Deine Freundin Nina feiert am Samstag ihren Geburtstag und hat dich eingeladen. Du hast gerade viel Arbeit, aber du kommst trotzdem.',
      punkte: [
        'Bedank dich und sag, dass du kommst – obwohl du viel Arbeit hast.',
        'Erzähl kurz von eurem letzten Treffen (Als wir …).',
        'Frag, was du mitbringen sollst. Vergiss Anrede und Gruß nicht.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Nina, vielen Dank für die Einladung! Ich komme am Samstag gern, obwohl ich gerade sehr viel Arbeit habe. Als wir letztes Jahr zusammen gefeiert haben, war es wirklich lustig. Soll ich etwas mitbringen? Wenn du möchtest, backe ich einen Kuchen. Ich freue mich schon! Liebe Grüße, Daniel',
    },
  ],
}
