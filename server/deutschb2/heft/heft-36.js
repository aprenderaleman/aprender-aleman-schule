// Übungsheft B2 — Lektion 36: Gesundheit & Ernährung
export default {
  lektion: 36,
  titel: 'Übungsheft — Gesundheit & Ernährung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Arztbesuch, Ernährung und Stress: Ergänze die passenden Wörter und Präpositionen und entscheide, welche Formulierung korrekt ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Für den Hautarzt brauchst du eine {1} von deiner Hausärztin. Die Salbe bekommst du dann nur mit einem {2} in der Apotheke.',
          bank: ['Überweisung', 'Rezept', 'Krankmeldung', 'Termin'],
          loesungen: { 1: 'Überweisung', 2: 'Rezept' },
        },
        {
          typ: 'luecke',
          text: 'Kannst du in der Praxis anrufen und einen neuen Termin {1}? Den alten muss ich leider {2}, weil ich am Montag verreise.',
          bank: ['vereinbaren', 'absagen', 'ausstellen', 'abbauen'],
          loesungen: { 1: 'vereinbaren', 2: 'absagen' },
        },
        {
          typ: 'luecke',
          text: 'Wer ständig {1} Stress steht, sollte im Alltag {2} mehr Bewegung sorgen.',
          bank: ['unter', 'für', 'auf', 'in'],
          loesungen: { 1: 'unter', 2: 'für' },
        },
        {
          typ: 'mc',
          frage: 'Die Ärztin hat mir ein Rezept für einen Hustensaft ___.',
          optionen: ['vereinbart', 'ausgestellt', 'abgebaut'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '___ ich du, würde ich mich heute krankmelden und im Bett bleiben.',
          optionen: ['Wäre', 'Hätte', 'Würde'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Ohne Überweisung ___ man beim Facharzt oft gar nicht behandelt.',
          optionen: ['hat', 'ist', 'wird'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['einen Termin', 'ein Rezept', 'Stress', 'sich beim Arbeitgeber', 'bei einer Krankenkasse'],
          rechts: ['vereinbaren', 'ausstellen', 'abbauen', 'krankmelden', 'versichert sein'],
          loesung: {
            'einen Termin': 'vereinbaren',
            'ein Rezept': 'ausstellen',
            Stress: 'abbauen',
            'sich beim Arbeitgeber': 'krankmelden',
            'bei einer Krankenkasse': 'versichert sein',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin seit drei Tagen konstipiert und habe Husten und Fieber.', 'Ich bin seit drei Tagen erkältet und habe Husten und Fieber.'],
          loesung: 1,
          warum: '«Estar constipado» = **erkältet sein**. *Konstipiert* significa «estreñido».',
        },
        {
          typ: 'korrektur',
          optionen: ['Bei Fieber solltest du viel Wasser trinken.', 'Bei Fieber solltest du viel Wasser nehmen.'],
          loesung: 0,
          warum: '«Tomar agua» = **Wasser trinken**. *Nehmen* se usa para medicamentos (*Tabletten nehmen*), no para bebidas.',
        },
        {
          typ: 'satzbau',
          woerter: ['behandelt', 'wird', 'Ohne', 'Praxis', 'man', 'selten', 'in', 'Termin', 'der'],
          loesung: 'Ohne Termin wird man in der Praxis selten behandelt.',
          alt: ['Ohne Termin wird man selten in der Praxis behandelt.', 'In der Praxis wird man ohne Termin selten behandelt.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel und löse die Aufgaben.',
      textTitel: 'Mittagspause am Schreibtisch — ein unterschätztes Risiko',
      text: 'Brot in der einen Hand, Maus in der anderen: Fast jeder dritte Berufstätige verbringt die Mittagspause laut einer aktuellen Umfrage am Schreibtisch. Die meisten nennen als Grund Zeitdruck, viele haben außerdem Angst, bei Kollegen und Vorgesetzten als wenig engagiert zu gelten. Die Arbeitsmedizinerin Dr. Katrin Albers hält diese Gewohnheit für gefährlich: „Wer keine echte Pause macht, baut keinen Stress ab. Auf Dauer steigt das Risiko für Rückenschmerzen, Schlafstörungen und Erschöpfung.“ Dazu komme die Ernährung: Wer nebenbei isst, isst meist schneller, mehr und ungesünder. Albers empfiehlt deshalb, den Arbeitsplatz für mindestens 20 Minuten zu verlassen — am besten für einen kurzen Spaziergang. Schon wenig Bewegung an der frischen Luft verbessere die Konzentration am Nachmittag deutlich. Einige Unternehmen reagieren bereits: Sie richten ruhige Pausenräume ein oder bieten gesundes Essen in der Kantine an. Entscheidend sei aber etwas anderes, betont Albers: „Die Führungskräfte müssen mit gutem Beispiel vorangehen. Solange der Chef am Schreibtisch isst, traut sich niemand, rauszugehen.“',
      items: [
        { typ: 'rf', aussage: 'Laut der Umfrage isst die Mehrheit der Berufstätigen mittags am Schreibtisch.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum bleiben viele Beschäftigte in der Mittagspause am Schreibtisch?',
          optionen: [
            'Sie stehen unter Zeitdruck und wollen nicht als wenig engagiert gelten.',
            'In ihrer Firma gibt es keine Kantine und keinen Pausenraum.',
            'Ihre Ärzte raten ihnen, sich in der Pause nicht zu bewegen.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Nach Ansicht der Ärztin kann schon ein kurzer Spaziergang die Konzentration am Nachmittag verbessern.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist laut Dr. Albers am wichtigsten?',
          optionen: [
            'dass Firmen in der Kantine gesundes Essen anbieten',
            'dass jede Firma einen ruhigen Pausenraum einrichtet',
            'dass die Vorgesetzten selbst echte Pausen machen',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Du hattest einen Termin in einer Facharztpraxis. Obwohl du pünktlich warst, musstest du fast zwei Stunden warten. Dann hat man dir mitgeteilt, dass die Ärztin dich heute nicht mehr behandeln kann. Schreib eine E-Mail an die Praxisleitung.',
      punkte: [
        'Beschreib, was passiert ist.',
        'Erkläre, welche Folgen das für dich hatte.',
        'Sag, was du von der Praxis erwartest.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, am Dienstag, dem 14. Mai, hatte ich um 9.30 Uhr einen Termin in Ihrer Praxis. Ich war pünktlich, musste aber fast zwei Stunden im Wartezimmer sitzen. Erst dann hat man mir mitgeteilt, dass die Ärztin mich an diesem Tag nicht mehr behandeln kann. Für diesen Termin hatte ich mir extra einen halben Tag Urlaub genommen, der nun verloren ist. Außerdem habe ich immer noch starke Rückenschmerzen. Ich erwarte, dass Sie mir so bald wie möglich einen neuen Termin anbieten und Ihre Patienten künftig rechtzeitig informieren, wenn es zu Verzögerungen kommt. Mit freundlichen Grüßen, Amara Okafor',
    },
  ],
}
