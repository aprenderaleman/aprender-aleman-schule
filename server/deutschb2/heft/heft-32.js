// Übungsheft B2 — Lektion 32: Sprechen Teil 2 — Diskussion mit dem Partner
export default {
  lektion: 32,
  titel: 'Übungsheft — Diskussion mit dem Partner',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Zustimmen, widersprechen, einen Kompromiss finden: Wähle die passende Lösung und achte auf Kasus und Präpositionen.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich bin mit deinem Vorschlag {1}, aber wir müssen uns noch {2} einen Termin einigen.',
          bank: ['einverstanden', 'überzeugt', 'auf', 'für'],
          loesungen: { 1: 'einverstanden', 2: 'auf' },
        },
        {
          typ: 'luecke',
          text: 'Darf ich dich kurz {1}? Ich habe einen {2} gegen deinen Vorschlag.',
          bank: ['unterbrechen', 'unterhalten', 'Einwand', 'Kompromiss'],
          loesungen: { 1: 'unterbrechen', 2: 'Einwand' },
        },
        {
          typ: 'mc',
          frage: 'Bevor wir uns entscheiden, sollten wir die Vor- und Nachteile gegeneinander ___.',
          optionen: ['abwägen', 'überzeugen', 'zustimmen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wie ___ es, wenn wir uns in der Mitte treffen?',
          optionen: ['würde', 'hätte', 'wäre'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Können wir uns ___ einigen, dass jeder einmal pro Woche kocht?',
          optionen: ['daran', 'darauf', 'damit'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['Das sehe ich genauso.', 'Ich sehe das ein bisschen anders.', 'Wie meinst du das genau?', 'Wie wäre es, wenn wir …?', 'Gut, dann sind wir uns einig.'],
          rechts: ['Zustimmung', 'Widerspruch', 'Nachfrage', 'Kompromissvorschlag', 'Abschluss'],
          loesung: {
            'Das sehe ich genauso.': 'Zustimmung',
            'Ich sehe das ein bisschen anders.': 'Widerspruch',
            'Wie meinst du das genau?': 'Nachfrage',
            'Wie wäre es, wenn wir …?': 'Kompromissvorschlag',
            'Gut, dann sind wir uns einig.': 'Abschluss',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich stimme dir in diesem Punkt zu.', 'Ich stimme mit dir in diesem Punkt zu.'],
          loesung: 0,
          warum: '*zustimmen* lleva dativo sin preposición: **dir zustimmen**. Con *mit* se dice *mit dir übereinstimmen*. ~~(calco de «estoy de acuerdo contigo»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Morgen kann ich nicht, ich habe schon einen Kompromiss.', 'Morgen kann ich nicht, ich habe schon einen Termin.'],
          loesung: 1,
          warum: '«Tengo un compromiso» (cita, obligación) es **einen Termin haben**; *der Kompromiss* es solo la solución intermedia.',
        },
        {
          typ: 'korrektur',
          optionen: ['In der Prüfung sollt ihr euch höflich streiten.', 'In der Prüfung sollt ihr höflich diskutieren.'],
          loesung: 1,
          warum: '*sich streiten* = pelearse; «debatir» es **diskutieren**.',
        },
        {
          typ: 'satzbau',
          woerter: ['dass', 'finde', 'wichtig', 'Trotzdem', 'bleibt', 'ich', 'Bargeld'],
          loesung: 'Trotzdem finde ich, dass Bargeld wichtig bleibt.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug und löse die Aufgaben.',
      textTitel: 'Fair streiten lernen: Debattierabend in der Volkshochschule',
      text: 'Jeden Donnerstag treffen sich in der Volkshochschule am Marktplatz rund fünfzehn Menschen, um zu diskutieren. Die Themen sind alltäglich: Sollen Autos aus der Innenstadt verschwinden? Brauchen Kinder ein eigenes Handy? Kursleiterin Miriam Okafor achtet dabei auf wenige, aber klare Regeln. Wer spricht, wird nicht unterbrochen, und jeder Beitrag muss auf das Argument davor eingehen. „Viele kommen zu uns, weil sie in Diskussionen entweder schweigen oder zu laut werden“, erklärt sie. Am Anfang sei es für manche ungewohnt, der Gegenseite zuzustimmen. Doch genau darum gehe es: Wer zuerst würdigt, was der andere gesagt hat, kann danach viel leichter widersprechen. Am Ende jedes Abends muss die Gruppe einen Kompromiss finden, mit dem alle einverstanden sind. Das dauert manchmal länger als die Diskussion selbst. Teilnehmer Jonas Brandt ist seit einem Jahr dabei. „In Besprechungen bei der Arbeit bleibe ich jetzt ruhiger und frage öfter nach“, sagt er. Nur eines vermisst er: mehr Zeit für die einzelnen Themen.',
      items: [
        { typ: 'rf', aussage: 'Bei den Debattierabenden darf man andere unterbrechen, wenn man ein gutes Argument hat.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum kommen laut Kursleiterin viele Menschen in den Kurs?',
          optionen: ['Sie wollen sich auf eine Prüfung vorbereiten.', 'Sie schweigen in Diskussionen oder werden zu laut.', 'Sie suchen neue Kontakte in der Stadt.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welchen Vorteil hat es nach Frau Okafor, zuerst zuzustimmen?',
          optionen: ['Man kann danach leichter widersprechen.', 'Die Diskussion ist schneller vorbei.', 'Man muss am Ende keinen Kompromiss mehr finden.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Suche nach einem Kompromiss dauert manchmal länger als die Diskussion.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Im Online-Forum eurer Lokalzeitung wird diskutiert: „Sollten Handys an Schulen während des ganzen Tages verboten sein?“ Ein Nutzer schreibt: „Ein Verbot ist die einzige Lösung — Kinder können sich sonst nicht konzentrieren.“',
      punkte: [
        'Nenne deine Meinung und begründe sie.',
        'Geh auf das Argument des Nutzers ein (erst würdigen, dann einschränken).',
        'Schlag am Ende einen Kompromiss vor.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich finde ein totales Handyverbot an Schulen übertrieben. Da hast du recht, dass viele Kinder im Unterricht ständig auf ihr Handy schauen und sich deshalb schlecht konzentrieren. Trotzdem gehört das Handy heute zum Alltag, und Jugendliche sollten lernen, vernünftig damit umzugehen. Außerdem möchten viele Eltern ihre Kinder nach der Schule erreichen können. Wie wäre es also mit einem Kompromiss? Im Unterricht bleiben die Handys in der Tasche, in den Pausen dürfen die Schülerinnen und Schüler sie benutzen. Mit dieser Lösung wären wahrscheinlich die meisten einverstanden.',
    },
  ],
}
