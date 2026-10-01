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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Radiointerview mit einer Lernberaterin. Entscheide bei jeder Aufgabe, welche Lösung dem Gehörten entspricht.',
      audio: {
        transcript: 'Moderator: Frau Albrecht, Sie beraten seit zwölf Jahren Erwachsene, die Deutsch lernen. Können die meisten ihr Niveau realistisch einschätzen?\nLernberaterin: Leider nicht. Viele halten das Sprechen für ihre größte Schwäche. In unseren Tests zeigt sich aber oft etwas anderes. Die größten Lücken liegen nicht beim Sprechen, sondern beim Schreiben.\nModerator: Woran liegt das?\nLernberaterin: Beim Sprechen bemerkt man jeden Fehler sofort, deshalb fühlt man sich unsicher. Geschriebene Texte korrigiert im Alltag dagegen fast niemand, und so bleiben die Fehler unsichtbar.\nModerator: Was empfehlen Sie nach so einer Standortbestimmung?\nLernberaterin: Einen Lernplan mit kleinen Schritten. Früher habe ich oft drei Stunden am Wochenende empfohlen. Heute rate ich zu zwanzig Minuten täglich, weil man so deutlich mehr behält.\nModerator: Und wie werden Fortschritte sichtbar?\nLernberaterin: Schreiben Sie jeden Monat einen kurzen Text, und zwar immer zum selben Thema. Dann vergleichen Sie die Texte. Nach drei Monaten sehen Sie den Unterschied schwarz auf weiß, und das motiviert mehr als jede Note.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wo haben viele Lernende laut Frau Albrecht tatsächlich die größten Lücken?',
          optionen: ['beim Schreiben', 'beim Sprechen', 'beim Hören'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Beim Sprechen fühlen sich viele unsicher, weil ihnen ihre Fehler sofort auffallen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was empfiehlt Frau Albrecht heute für den Lernplan?',
          optionen: ['drei Stunden am Wochenende', 'eine Stunde an jedem Werktag', 'zwanzig Minuten an jedem Tag'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Um Fortschritte zu sehen, soll man jeden Monat über ein neues Thema schreiben.', loesung: false },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Nimm Stellung zu der Aussage. Sprich etwa 90 Sekunden frei und begründe deine Meinung.',
      aufgabe: 'In einem Lernforum behauptet jemand: „Mit einer App lernt man eine Sprache genauso gut wie in einem Kurs.“ Nimm in einem kurzen Redebeitrag von etwa 90 Sekunden Stellung zu dieser Aussage.',
      punkte: [
        'Sag klar, ob du zustimmst oder nicht, und begründe deine Meinung.',
        'Geh auf ein Argument der Gegenseite ein.',
        'Berichte kurz von deiner eigenen Erfahrung und zieh ein Fazit.',
      ],
      redemittel: ['Meiner Meinung nach …', 'Ich stimme der Aussage nur teilweise zu, weil …', 'Natürlich gibt es auch ein Gegenargument: …', 'Aus eigener Erfahrung weiß ich, dass …'],
      maxSekunden: 90,
      beispielLoesung: 'Meiner Meinung nach stimmt diese Aussage nur teilweise. Zwar ist eine App sehr praktisch, weil man überall und jederzeit lernen kann, und für Wortschatz und einfache Grammatik funktioniert das auch gut. Trotzdem glaube ich nicht, dass sie einen Kurs ersetzen kann. In einem Kurs spricht man mit anderen Menschen, und die Lehrerin korrigiert die Fehler sofort. Eine App sagt mir dagegen nur, ob eine Antwort richtig oder falsch ist, zeigt mir aber nicht, wo meine Lücken liegen. Natürlich gibt es auch ein Gegenargument: Ein Kurs ist teuer und findet zu festen Zeiten statt, was nicht zu jedem Beruf passt. Das kann ich gut nachvollziehen. Aus eigener Erfahrung weiß ich allerdings, dass ich allein nicht regelmäßig lerne. Obwohl ich ein Jahr lang fast täglich mit einer App geübt habe, habe ich beim Sprechen kaum Fortschritte gemacht; erst im Kurs bin ich sicherer geworden. Mein Fazit: Die App ist eine sinnvolle Ergänzung, aber ohne einen Kurs und einen klaren Lernplan würde ich die B2-Prüfung wohl nicht schaffen.',
    },
  ],
}
