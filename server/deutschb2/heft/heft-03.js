// Übungsheft B2 — Lektion 03: Diagnose B2 — Standortbestimmung
export default {
  lektion: 3,
  titel: 'Übungsheft — Diagnose B2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Diagnose-Test: Arbeite ohne Hilfsmittel. Jede Aufgabe prüft ein Thema aus Block 1. Bei Fehlern lernst du zuerst diese Lektionen: Konnektoren → 4–6 · Konjunktiv II → 7–8 · indirekte Rede → 9 · Passiv → 10–11 · Relativsätze → 12 · Infinitivsätze mit zu → 14 · Verben mit Präpositionen → 15.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich lerne jeden Tag, {1} ich nach der Arbeit oft müde bin. Meine größte Schwäche ist die Grammatik, {2} frische ich sie gezielt auf.',
          bank: ['obwohl', 'deshalb', 'trotzdem', 'weil'],
          loesungen: { 1: 'obwohl', 2: 'deshalb' },
        },
        { typ: 'mc', frage: 'Ich mache eine Standortbestimmung, ___ ich meine Lücken genau kenne.', optionen: ['um', 'damit', 'ob'], loesung: 1 },
        {
          typ: 'luecke',
          text: '{1} gezielter du übst, {2} schneller siehst du Fortschritte.',
          bank: ['Je', 'desto', 'als', 'wie', 'so'],
          loesungen: { 1: 'Je', 2: 'desto' },
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich mehr Zeit habe, würde ich jeden Tag lernen.', 'Wenn ich mehr Zeit hätte, würde ich jeden Tag lernen.'],
          loesung: 1,
          warum: 'Condición irreal: Konjunktiv II en las dos partes (*hätte … würde*), igual que «si tuviera…, aprendería». Fehler? → **Lektion 7**',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich früher angefangen hätte, wäre ich jetzt schon weiter.', 'Wenn ich früher angefangen würde, wäre ich jetzt schon weiter.'],
          loesung: 0,
          warum: 'Pasado irreal: **hätte/wäre + Partizip II** («si hubiera empezado»). *Würde* no forma el pasado. Fehler? → **Lektion 8**',
        },
        { typ: 'mc', frage: 'Die Kursleiterin sagte, die Diagnose ___ für alle Teilnehmenden Pflicht.', optionen: ['seie', 'sei', 'sein'], loesung: 1 },
        { typ: 'mc', frage: 'Der Lernplan muss bis Freitag ___ werden.', optionen: ['erstellt', 'erstellen', 'erstellte'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Der Kollege, {1} ich jeden Tag Deutsch spreche, kommt aus Österreich. Die Kursleiterin, {2} ich meinen Lernplan gezeigt habe, fand ihn realistisch.',
          bank: ['mit dem', 'der', 'die', 'dem', 'mit der'],
          loesungen: { 1: 'mit dem', 2: 'der' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich warte schon seit Wochen für das Ergebnis.', 'Ich warte schon seit Wochen auf das Ergebnis.'],
          loesung: 1,
          warum: '«Esperar algo / esperar por algo» = **warten auf** + Akkusativ, nunca *für*. Fehler? → **Lektion 15**',
        },
        {
          typ: 'satzbau',
          woerter: ['anzumelden', 'vergessen', 'Ich', 'rechtzeitig', 'habe', 'mich'],
          loesung: 'Ich habe vergessen, mich rechtzeitig anzumelden.',
          alt: ['Mich rechtzeitig anzumelden, habe ich vergessen.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar. Entscheide dann, welche Lösung dem Text entspricht.',
      textTitel: 'Kommentar: Wer alles wiederholt, verliert Zeit',
      text: 'Viele Lernende beginnen die Vorbereitung auf die B2-Prüfung mit einem dicken Grammatikbuch und arbeiten es von der ersten bis zur letzten Seite durch. Das klingt fleißig, ist aber oft wenig effektiv. Wer schon ein solides B1-Niveau hat, wiederholt dabei vieles, was er längst beherrscht, und hat am Ende keine Zeit mehr für seine echten Lücken. Sinnvoller ist eine ehrliche Standortbestimmung am Anfang. Sie zeigt, wo die eigenen Stärken und Schwächen liegen. Danach kann man gezielt üben: Wer zum Beispiel beim Konjunktiv II unsicher ist, frischt genau dieses Thema auf, statt alles zu wiederholen. Natürlich ist es nicht angenehm, die eigenen Fehler schwarz auf weiß zu sehen. Doch nur wer sich realistisch einschätzt, kann einen Lernplan erstellen, der wirklich funktioniert. Mein Rat: Wiederholen Sie die Diagnose nach einigen Wochen. Sichtbare Fortschritte sind die beste Motivation. — Helga Brandt, Kursleiterin',
      items: [
        {
          typ: 'mc',
          frage: 'Was kritisiert die Autorin?',
          optionen: ['dass viele Lernende zu wenig Grammatik üben', 'dass viele ein ganzes Grammatikbuch durcharbeiten, statt gezielt zu üben', 'dass es für B2 zu wenige gute Grammatikbücher gibt'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut der Autorin ist es angenehm, die eigenen Fehler zu sehen.', loesung: false },
        { typ: 'rf', aussage: 'Die Autorin empfiehlt, die Diagnose nach einiger Zeit zu wiederholen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist laut Text die Voraussetzung für einen Lernplan, der funktioniert?',
          optionen: ['eine realistische Selbsteinschätzung', 'ein vollständiges Grammatikbuch', 'viel Motivation am Anfang'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Achte auf Anrede, Gruß und die Verbstellung in Nebensätzen.',
      aufgabe: 'Du möchtest dich gezielt auf die B2-Prüfung vorbereiten. Schreib an Herrn Petersen von der Kursberatung einer Sprachschule.',
      punkte: [
        'Beschreibe kurz deine Stärken und Schwächen im Deutschen.',
        'Nenne dein Lernziel und bis wann du es erreichen willst.',
        'Bitte um einen Termin für ein Beratungsgespräch.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrter Herr Petersen,\nich lerne seit drei Jahren Deutsch und möchte mich jetzt gezielt auf die B2-Prüfung vorbereiten. Meine Stärken sind das Lesen und das Sprechen, weil ich im Alltag viel Deutsch benutze. Beim Schreiben mache ich aber noch viele Fehler, vor allem bei der Verbstellung und beim Konjunktiv II. Mein Ziel ist es, die Prüfung im kommenden Frühjahr zu bestehen. Deshalb würde ich gern einen passenden Kurs finden. Wäre es möglich, nächste Woche einen Termin für ein Beratungsgespräch zu vereinbaren?\nMit freundlichen Grüßen\nValentina Rossi',
    },
  ],
}
