// Übungsheft B2 — Lektion 40: Reisen & Mobilität
export default {
  lektion: 40,
  titel: 'Übungsheft — Reisen & Mobilität',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Kollokationen, Präpositionen und Satzbau rund ums Reisen: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Wegen einer Erkrankung musste ich die Buchung {1}. Zum Glück habe ich später eine neue {2} in der Altstadt gefunden.',
          bank: ['stornieren', 'Unterkunft', 'aufgeben', 'Strecke'],
          loesungen: { 1: 'stornieren', 2: 'Unterkunft' },
        },
        {
          typ: 'luecke',
          text: 'Der Regionalzug hatte zwanzig Minuten {1}, sodass wir in Fulda den {2} verpasst haben.',
          bank: ['Verspätung', 'Anschluss', 'Erstattung', 'Gepäck'],
          loesungen: { 1: 'Verspätung', 2: 'Anschluss' },
        },
        {
          typ: 'luecke',
          text: 'Am Flughafen haben wir zuerst unser Gepäck {1}. Kurz darauf erfuhren wir, dass unser Flug wegen eines Streiks {2}.',
          bank: ['aufgegeben', 'ausfiel', 'umstieg', 'storniert'],
          loesungen: { 1: 'aufgegeben', 2: 'ausfiel' },
        },
        {
          typ: 'mc',
          frage: 'Mit dem Nachtzug haben wir eine Strecke von über tausend Kilometern ___.',
          optionen: ['umgestiegen', 'zurückgelegt', 'aufgegeben'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Da mein Zug komplett ausgefallen ist, möchte ich eine Erstattung des Fahrpreises ___.',
          optionen: ['verpassen', 'zurücklegen', 'beantragen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Wer im Urlaub nachhaltig reisen will, sollte vor Ort möglichst ___ Verkehrsmittel nutzen.',
          optionen: ['öffentliche', 'offene', 'allgemeine'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['eine Buchung', 'in Frankfurt', 'eine Erstattung', 'das Gepäck', 'öffentliche Verkehrsmittel'],
          rechts: ['stornieren', 'umsteigen', 'beantragen', 'aufgeben', 'nutzen'],
          loesung: {
            'eine Buchung': 'stornieren',
            'in Frankfurt': 'umsteigen',
            'eine Erstattung': 'beantragen',
            'das Gepäck': 'aufgeben',
            'öffentliche Verkehrsmittel': 'nutzen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Wir fahren am liebsten in Zug in den Urlaub.', 'Wir fahren am liebsten mit dem Zug in den Urlaub.'],
          loesung: 1,
          warum: 'El medio de transporte va con **mit + Dativ**: *mit dem Zug*, no «en tren» calcado como *in Zug*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Zug ist wegen des Sturms ausgefallen.', 'Der Zug hat sich wegen des Sturms ausgefallen.'],
          loesung: 0,
          warum: '**ausfallen** no es reflexivo (no calques «se canceló») y forma el Perfekt con **sein**.',
        },
        {
          typ: 'satzbau',
          woerter: ['verpassten', 'Zug', 'den', 'Weil', 'ausfiel', 'wir', 'der', 'Anschluss'],
          loesung: 'Weil der Zug ausfiel, verpassten wir den Anschluss.',
          alt: ['Wir verpassten den Anschluss, weil der Zug ausfiel.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forumsbeitrag: „Mit dem Nachtzug nach Rom — nie wieder?“',
      text: 'Im Mai wollte ich zum ersten Mal ohne Flugzeug nach Italien reisen, weil mir nachhaltiges Reisen immer wichtiger wird. Also habe ich einen Platz im Nachtzug von München nach Rom gebucht. Leider fing die Reise schlecht an: Mein Regionalzug nach München hatte eine Stunde Verspätung, und ich hätte den Nachtzug beinahe verpasst. Im Nachtzug selbst war es dann überraschend bequem. Ich habe gut geschlafen und bin morgens ausgeruht in Rom angekommen — viel entspannter als nach einem Flug mit Sicherheitskontrolle und langer Wartezeit am Gepäckband. Auf der Rückfahrt fiel der Zug allerdings wegen eines Streiks komplett aus. Ich musste spontan eine Unterkunft suchen und konnte erst zwei Tage später zurückfahren. Die Erstattung für das Ticket habe ich inzwischen beantragt, bisher aber keine Antwort bekommen. Trotzdem würde ich die Strecke jederzeit wieder mit der Bahn zurücklegen. Mein Tipp: Plant beim Umsteigen genug Zeit ein und rechnet für den Rückweg mit einem Puffer von einem Tag. — Jonas_unterwegs',
      items: [
        {
          typ: 'mc',
          frage: 'Warum hat Jonas sich für den Nachtzug entschieden?',
          optionen: ['Weil alle Flüge nach Rom ausgebucht waren.', 'Weil ihm nachhaltiges Reisen wichtig ist.', 'Weil der Nachtzug günstiger war als ein Flug.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Jonas hat den Nachtzug in München verpasst.', loesung: false },
        { typ: 'rf', aussage: 'Die Hinfahrt im Nachtzug empfand Jonas als angenehmer als eine Flugreise.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was schreibt Jonas über die Erstattung?',
          optionen: ['Er hat sie beantragt, aber noch keine Rückmeldung erhalten.', 'Er hat das Geld bereits zurückbekommen.', 'Er hat auf eine Erstattung verzichtet.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Dein Zug von Köln nach Hamburg hatte über zwei Stunden Verspätung. Deshalb hast du den letzten Anschluss nach Kiel verpasst und musstest in Hamburg übernachten. Schreib an den Kundenservice des Bahnunternehmens.',
      punkte: [
        'Beschreib genau, was auf der Reise passiert ist.',
        'Erklär, welche Folgen die Verspätung für dich hatte.',
        'Fordere eine Erstattung für das Ticket und die Übernachtung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, am 14. März bin ich mit dem Zug von Köln nach Hamburg gefahren. Der Zug hatte über zwei Stunden Verspätung, sodass ich in Hamburg den letzten Anschluss nach Kiel verpasst habe. Da an diesem Abend kein Zug mehr fuhr, musste ich kurzfristig eine Unterkunft suchen und 95 Euro für ein Hotelzimmer bezahlen. Außerdem kam ich am nächsten Morgen zu spät zu einem wichtigen Termin. Ich bitte Sie daher, mir die Hälfte des Fahrpreises sowie die Hotelkosten zu erstatten. Eine Kopie des Tickets und die Hotelrechnung finden Sie im Anhang. Mit freundlichen Grüßen, Lucía Fernández',
    },
  ],
}
