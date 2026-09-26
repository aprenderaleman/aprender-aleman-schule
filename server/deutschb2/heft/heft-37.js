// Übungsheft B2 — Lektion 37: Medien & Digitalisierung
export default {
  lektion: 37,
  titel: 'Übungsheft — Medien & Digitalisierung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Kollokationen, Präpositionen und Konnektoren rund um Medien und Digitalisierung: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Bevor du die Meldung weiterschickst, solltest du die {1} prüfen. Viele Apps sammeln außerdem die Daten ihrer {2}.',
          bank: ['Quelle', 'Nutzer', 'Passwort', 'Bildschirmzeit'],
          loesungen: { 1: 'Quelle', 2: 'Nutzer' },
        },
        {
          typ: 'luecke',
          text: 'Tagsüber recherchiere ich viel {1} Internet, aber abends lege ich das Handy weg, um bewusst {2}.',
          bank: ['im', 'auf', 'abzuschalten', 'abschalten'],
          loesungen: { 1: 'im', 2: 'abzuschalten' },
        },
        {
          typ: 'luecke',
          text: 'Für neun Euro im Monat haben wir einen neuen Streamingdienst {1}. Gestern hat Jonas ein Foto von seinem Urlaub {2}, und schon fünfzig Leute haben es kommentiert.',
          bank: ['abonniert', 'gepostet', 'heruntergeladen', 'begrenzt'],
          loesungen: { 1: 'abonniert', 2: 'gepostet' },
        },
        {
          typ: 'mc',
          frage: 'Meine Schwester ___ die Bildschirmzeit ihrer Kinder auf eine Stunde pro Tag.',
          optionen: ['schützt', 'begrenzt', 'verbietet'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Für jedes Konto solltest du ein sicheres Passwort ___.',
          optionen: ['wählen', 'treffen', 'stellen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Viele Apps sammeln persönliche Daten, ___ die Nutzer es merken.',
          optionen: ['damit', 'sodass', 'ohne dass'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['eine App', 'die Quelle einer Information', 'einen Streamingdienst', 'die Bildschirmzeit', 'auf den Datenschutz'],
          rechts: ['herunterladen', 'prüfen', 'abonnieren', 'begrenzen', 'achten'],
          loesung: {
            'eine App': 'herunterladen',
            'die Quelle einer Information': 'prüfen',
            'einen Streamingdienst': 'abonnieren',
            'die Bildschirmzeit': 'begrenzen',
            'auf den Datenschutz': 'achten',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe den Artikel auf Internet gelesen.', 'Ich habe den Artikel im Internet gelesen.'],
          loesung: 1,
          warum: '«En internet» = **im Internet**, siempre con artículo (*das Internet*); *auf Internet* es un calco.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich verbringe jeden Abend zwei Stunden am Handy.', 'Ich passiere jeden Abend zwei Stunden am Handy.'],
          loesung: 0,
          warum: '«Pasar tiempo» = **Zeit verbringen**; *passieren* solo significa «ocurrir».',
        },
        {
          typ: 'satzbau',
          woerter: ['sammeln', 'es', 'Daten', 'Ohne', 'man', 'Apps', 'merkt', 'dass'],
          loesung: 'Ohne dass man es merkt, sammeln Apps Daten.',
          alt: ['Apps sammeln Daten, ohne dass man es merkt.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forum „Digital leben“: Eine Woche ohne Smartphone',
      text: 'Letzten Monat habe ich ein Experiment gemacht: eine Woche ohne Smartphone. Auslöser war ein Blick auf meine Bildschirmzeit — im Durchschnitt fast fünf Stunden pro Tag, viel zu viel! Die ersten beiden Tage waren hart. Ich wollte ständig aufs Handy schauen, und ohne meine Apps musste ich den Fahrplan an der Haltestelle lesen. Ab dem dritten Tag wurde es besser: Abends habe ich zwei Bücher gelesen, und bei der Arbeit konnte ich mich deutlich besser konzentrieren. Nachrichten habe ich nur noch einmal am Tag am Laptop gelesen. Ganz ohne Nachteile war die Woche allerdings nicht. Meine Freunde organisieren fast alles über eine Chatgruppe, und so habe ich eine Geburtstagsfeier verpasst. Mein Fazit: Ein kompletter Verzicht ist für mich keine Lösung, aber ich habe einiges geändert. Die sozialen Netzwerke habe ich vom Handy gelöscht, und nach 21 Uhr bleibt das Gerät im Flur. Hat jemand von euch ähnliche Erfahrungen gemacht? — Tobias, 34',
      items: [
        {
          typ: 'mc',
          frage: 'Warum hat Tobias das Experiment begonnen?',
          optionen: ['Sein Arbeitgeber hat es verlangt.', 'Seine Bildschirmzeit war ihm zu hoch.', 'Er hatte sein Handy verloren.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'In den ersten Tagen fiel Tobias der Verzicht leicht.', loesung: false },
        { typ: 'rf', aussage: 'Während der Woche hat Tobias eine Feier verpasst.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was hat Tobias nach dem Experiment dauerhaft geändert?',
          optionen: ['Er benutzt gar kein Smartphone mehr.', 'Er organisiert keine Treffen mehr über Chatgruppen.', 'Er hat die sozialen Netzwerke vom Handy gelöscht.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde-E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Du hast vor drei Monaten einen Streamingdienst abonniert. Seit zwei Wochen funktioniert die App auf deinem Fernseher nicht mehr, trotzdem wird jeden Monat Geld abgebucht. Außerdem bekommst du plötzlich Werbung von anderen Firmen. Schreib an den Kundenservice.',
      punkte: [
        'Beschreib das Problem mit der App genau.',
        'Frag, ob deine Daten an andere Firmen weitergegeben wurden.',
        'Fordere eine Lösung: Rückerstattung für die zwei Wochen oder Kündigung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, vor drei Monaten habe ich Ihren Streamingdienst abonniert. Seit zwei Wochen lässt sich die App auf meinem Fernseher jedoch nicht mehr öffnen, obwohl ich sie bereits zweimal neu heruntergeladen habe. Trotzdem wurde der volle Monatsbeitrag abgebucht. Außerdem erhalte ich seit Kurzem Werbung von anderen Firmen. Ich möchte daher wissen, ob Sie meine Daten weitergegeben haben — der Datenschutz ist mir sehr wichtig. Ich bitte Sie, mir den Betrag für die zwei Wochen zu erstatten. Sollte das Problem nicht bis Ende des Monats gelöst sein, werde ich mein Abonnement kündigen. Mit freundlichen Grüßen, Amira Haddad',
    },
  ],
}
