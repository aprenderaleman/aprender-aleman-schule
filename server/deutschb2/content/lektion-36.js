// Lektion 36 · Gesundheit & Ernährung
//
// Bloque 3 (Themenfelder & Wortschatz): beim Arzt, gesunde Ernährung, Sport,
// Stress — con el léxico del sistema de salud alemán (die Krankenkasse,
// der Termin, die Überweisung) y el falso amigo «constipado».

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Gesundheit & Ernährung',
  lead: 'Vom Arzttermin bis zur gesunden Ernährung: der Wortschatz für Gesundheitsthemen — und wie das Gesundheitssystem in Deutschland im Alltag funktioniert.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Kernwortschatz zu Arztbesuch, Ernährung, Sport und Stress aktiv verwenden',
        'den Weg durch das deutsche Gesundheitssystem beschreiben (Krankenkasse → Hausarzt → Überweisung)',
        'über gesunde Ernährung und Stress diskutieren und deine Meinung begründen',
        'den falschen Freund der Lektion vermeiden: *erkältet sein* sagen — nie *konstipiert*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Krankenkasse, -n', kollokation: 'bei einer Krankenkasse versichert sein', es: 'el seguro médico (público)' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin vereinbaren / absagen', es: 'la cita' },
        { wort: 'die Praxis, Praxen', kollokation: 'in der Praxis anrufen', es: 'la consulta (del médico)' },
        { wort: 'der Hausarzt, -ärzte / die Hausärztin, -nen', kollokation: 'zuerst zum Hausarzt gehen', es: 'el médico de cabecera' },
        { wort: 'die Überweisung, -en', kollokation: 'eine Überweisung zum Facharzt bekommen', es: 'el volante de derivación' },
        { wort: 'das Rezept, -e', kollokation: 'ein Rezept ausstellen', es: 'la receta (médica)' },
        { wort: 'die Apotheke, -n', kollokation: 'das Medikament in der Apotheke abholen', es: 'la farmacia' },
        { wort: 'die Erkältung, -en', kollokation: 'eine Erkältung haben / erkältet sein', es: 'el resfriado' },
        { wort: 'die Krankmeldung, -en', kollokation: 'sich beim Arbeitgeber krankmelden', es: 'el parte de baja' },
        { wort: 'die Ernährung (nur Sg.)', kollokation: 'auf gesunde Ernährung achten', es: 'la alimentación' },
        { wort: 'die Bewegung (nur Sg.)', kollokation: 'für mehr Bewegung sorgen', es: 'el ejercicio, el movimiento' },
        { wort: 'der Stress (nur Sg.)', kollokation: 'Stress abbauen', es: 'el estrés' },
      ],
      hinweis: '**Der falsche Freund der Lektion:** ~~«estoy constipado» NO es *ich bin konstipiert* — konstipiert significa estreñido. Un resfriado es **eine Erkältung**: *Ich bin erkältet.*~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — der Weg durch das System',
      card: true,
      titel: 'Vom Termin bis zur Apotheke',
      absaetze: [
        'In Deutschland ist fast jeder bei einer **Krankenkasse** versichert und legt beim Arztbesuch die Versichertenkarte vor. Der typische Weg ist immer derselbe — und er taucht in der Prüfung regelmäßig auf:',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          titel: 'Termin vereinbaren',
          text: 'Ohne __Termin__ läuft wenig: Man ruft in der __Praxis__ an oder bucht online. Wer nicht kommen kann, sagt den Termin ab — unentschuldigt fehlen gilt als sehr unhöflich.',
        },
        {
          titel: 'Zuerst zum Hausarzt',
          text: 'Erste Anlaufstelle ist der __Hausarzt__ oder die Hausärztin. Für Spezialisten braucht man oft eine __Überweisung__ — ein Papier vom Hausarzt für den Facharzt.',
        },
        {
          titel: 'Rezept und Apotheke',
          text: 'Viele Medikamente gibt es nur auf __Rezept__: Der Arzt stellt es aus, die __Apotheke__ gibt das Medikament heraus. Wer krank ist und nicht arbeiten kann, meldet sich beim Arbeitgeber krank — das ist die __Krankmeldung__; die Bescheinigung vom Arzt macht sie offiziell.',
        },
      ],
    },
    {
      type: 'prose',
      titel: 'Die Debatte: Ernährung, Sport, Stress',
      absaetze: [
        'Rund um das gesunde Leben gibt es drei typische Positionen. Die einen sagen: **Gesundheit ist eine Frage der Disziplin** — wer will, findet Zeit für Sport und frisches Kochen. Die anderen: **Der Alltag macht es schwer** — nach der Arbeit fehlt die Energie, und gesunde Produkte sind oft teurer. Dazwischen die pragmatische Position: **kleine Routinen statt großer Pläne** — die Treppe statt des Aufzugs, feste Pausen gegen den Stress. Wie beim Umweltthema gilt: Die Mittelposition lässt sich in der Prüfung am leichtesten verteidigen.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Mitnehmen',
      kicker: 'Beim Arzt',
      titel: 'Termin, Praxis, Rezept',
      items: [
        { text: 'Ich möchte einen **Termin** bei Frau Dr. Weber **vereinbaren** — am besten noch diese Woche.' },
        { text: 'Mein Hausarzt hat mir eine **Überweisung** zum Hautarzt **ausgestellt**.' },
        { text: 'Ich bin **erkältet** und bleibe heute zu Hause — die **Krankmeldung** schicke ich per E-Mail.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ernährung',
      titel: 'Essen im Alltag',
      items: [
        { text: 'Ich versuche, auf eine **ausgewogene Ernährung** zu **achten**.' },
        { text: 'Unter der Woche koche ich selten frisch, **weil** mir nach der Arbeit die Energie **fehlt**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Sport & Stress',
      titel: 'In Bewegung bleiben',
      items: [
        { text: 'Regelmäßige **Bewegung** hilft mir, **Stress abzubauen**.' },
        { text: 'Ich nehme jetzt immer die Treppe **statt des Aufzugs**.' },
        { text: 'Wer ständig unter **Stress** steht, wird auf Dauer krank.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung zum Thema Gesundheit',
      gruppen: [
        {
          fn: 'Meinung äußern',
          saetze: [
            { satz: 'Ich bin überzeugt, dass gesunde Ernährung keine Frage des Geldes sein muss.' },
            { satz: 'Meiner Erfahrung nach ist regelmäßige Bewegung das beste Mittel gegen Stress.' },
          ],
        },
        {
          fn: 'Einräumen und relativieren',
          saetze: [
            { satz: 'Natürlich ist es nach einem langen Arbeitstag schwer, noch frisch zu kochen — trotzdem lohnt es sich.' },
            { satz: 'Es kommt darauf an, realistische Ziele zu setzen, statt das ganze Leben auf einmal zu ändern.' },
          ],
        },
        {
          fn: 'Ratschläge geben',
          saetze: [
            { satz: 'An deiner Stelle würde ich mit kleinen Routinen anfangen.', gloss: '~~Konjunktiv II de la Lektion 7 aplicado al tema~~' },
            { satz: 'Es wäre sinnvoll, feste Pausen in den Arbeitstag einzuplanen.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Was brauchst du? Wähl: die Überweisung, das Rezept, die Krankmeldung, der Termin.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Du willst zum Hautarzt — er nimmt dich nur mit einem Papier vom Hausarzt.',
        'Du bist krank und kannst nicht arbeiten — dein Chef braucht ein Dokument.',
        'Das Medikament gibt es in der Apotheke nur mit einem Papier vom Arzt.',
        'Ohne Anmeldung wirst du in der Praxis nicht behandelt.',
      ],
      loesungen: [
        '**die Überweisung** — vom Hausarzt zum Facharzt.',
        '**die Krankmeldung** — sich beim Arbeitgeber krankmelden.',
        '**das Rezept** — der Arzt stellt es aus.',
        '**der Termin** — vorher in der Praxis vereinbaren.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Ergänze das passende Wort — Vorsicht beim falschen Freund.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich bin … und habe Husten und Schnupfen.',
        'Fast alle Menschen in Deutschland sind bei einer … versichert.',
        'Sport hilft, … abzubauen.',
        'Ich achte auf eine ausgewogene … mit viel Gemüse.',
      ],
      loesungen: [
        'Ich bin **erkältet** … ~~no *konstipiert*: eso significa estreñido~~',
        'bei einer **Krankenkasse** versichert',
        '**Stress** abzubauen',
        'eine ausgewogene **Ernährung**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Wie gesund lebst du wirklich? Beschreib deine Ernährung, deine Bewegung und deinen Stress im Alltag — ehrlich und mit einem Vorsatz am Ende. Schreib 80–100 Wörter.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ehrlich gesagt lebe ich nur halb gesund. Am Wochenende koche ich frisch, aber unter der Woche esse ich oft Fertiggerichte, weil mir nach der Arbeit die Energie fehlt. Bewegung kommt bei mir zu kurz: Ich sitze den ganzen Tag am Schreibtisch, und abends bin ich zu müde für Sport. Deshalb habe ich einen Plan: Ich nehme ab jetzt die Treppe statt des Aufzugs und gehe in der Mittagspause eine halbe Stunde spazieren. Kleine Routinen statt großer Pläne! *(~80 Wörter)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · Forumsbeitrag',
      titel: 'Gesund leben trotz Stress?',
      anweisung: 'In einem Gesundheitsforum wird diskutiert, ob ein gesundes Leben im stressigen Alltag überhaupt möglich ist. Schreib deinen Forumsbeitrag (ca. 150 Wörter): deine Meinung, Gründe, ein konkreter Vorschlag.',
      absaetze: [
        '„Zwischen Arbeit, Familie und Terminen bleibt keine Zeit für Sport und gesundes Kochen — sagen viele. Stimmt das, oder ist das nur eine Ausrede?“',
      ],
      loesungLabel: 'Modelllösung',
      loesungen: [
        'Meiner Meinung nach ist ein gesundes Leben auch im stressigen Alltag möglich — aber nur, wenn man realistische Ziele setzt.',
        'Es stimmt zwar, dass nach einem langen Arbeitstag oft die Energie zum Kochen fehlt. Trotzdem finde ich das Argument „keine Zeit“ nur zur Hälfte richtig, denn viele gesunde Gewohnheiten kosten gar keine Zeit: die Treppe statt des Aufzugs, ein Spaziergang in der Mittagspause oder Wasser statt Limonade. Aus eigener Erfahrung kann ich sagen, dass solche kleinen Routinen mehr bringen als große Pläne, die man nach zwei Wochen aufgibt. Außerdem hilft Bewegung nicht nur dem Körper, sondern baut auch Stress ab.',
        'Mein Vorschlag: eine feste Kleinigkeit pro Woche ändern, nicht das ganze Leben auf einmal. Wer klein anfängt, bleibt dabei — und genau darauf kommt es an. Gesund leben heißt nämlich nicht perfekt leben, sondern jeden Tag eine gute Entscheidung mehr treffen. *(~140 Wörter)*',
      ],
      kommentar: 'Die Lösung erfüllt alle drei Punkte, räumt die Gegenposition ein („Es stimmt zwar …, trotzdem …“) und bleibt konkret — genau das honorieren die Kriterien „Erfüllung“ und „Wortschatz“.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Der Weg **Hausarzt → Überweisung → Facharzt → Rezept → Apotheke** taucht in Hörtexten und in der formellen Nachricht immer wieder auf (z. B. einen Termin absagen). Lern diese fünf Wörter als **Kette** — wer die Reihenfolge kennt, versteht den Hörtext auch mit Lücken.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Subthema', 'Kernwörter', 'Ein Satz, der immer passt'],
      zeilen: [
        ['Beim Arzt', 'der Termin, die Praxis, die Überweisung, das Rezept', 'Ich möchte einen Termin vereinbaren.'],
        ['System', 'die Krankenkasse, die Krankmeldung', 'Fast alle sind bei einer Krankenkasse versichert.'],
        ['Ernährung', 'die Ernährung, ausgewogen, das Fertiggericht', 'Ich achte auf eine ausgewogene Ernährung.'],
        ['Sport & Stress', 'die Bewegung, der Stress, die Routine', 'Bewegung hilft, Stress abzubauen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann den Weg Hausarzt → Überweisung → Facharzt → Rezept → Apotheke beschreiben.',
        'Ich kann einen Termin vereinbaren, absagen und mich krankmelden.',
        'Ich sage *Ich bin erkältet* — nie *konstipiert*.',
        'Ich kann über Ernährung, Sport und Stress diskutieren und einen konkreten Vorschlag machen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom gesunden Körper zum digitalen Alltag: In der nächsten Lektion geht es um **Medien & Digitalisierung** — soziale Netzwerke, Smartphone-Gewohnheiten und die Frage, wie viel Bildschirmzeit gut für uns ist.',
    },
  ],
}
