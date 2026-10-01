// Übungsheft B2 — Lektion 07: Konjunktiv II — irreale Bedingungen & Wünsche
export default {
  lektion: 7,
  titel: 'Übungsheft — Konjunktiv II',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Real oder irreal? Ergänze die passende Form und achte auf die eigenen Konjunktiv-II-Formen von sein, haben und den Modalverben.',
      items: [
        {
          typ: 'luecke',
          text: 'Wenn Jana mehr Geld {1}, {2} sie sich eine größere Wohnung in der Innenstadt mieten.',
          bank: ['hätte', 'würde', 'wäre', 'hat'],
          loesungen: { 1: 'hätte', 2: 'würde' },
        },
        {
          typ: 'luecke',
          text: 'Guten Tag, ich {1} gern einen Termin für nächste Woche. {2} Sie mir vielleicht zwei Vorschläge per E-Mail schicken?',
          bank: ['hätte', 'Könnten', 'würde', 'Wären'],
          loesungen: { 1: 'hätte', 2: 'Könnten' },
        },
        {
          typ: 'luecke',
          text: 'Wenn es in unserem Dorf einen Bahnhof {1}, {2} ich nicht jeden Tag mit dem Auto zur Arbeit fahren. Und wenn ich {3}, wo man in der Stadt günstig parken kann, wäre alles viel leichter.',
          bank: ['gäbe', 'müsste', 'wüsste', 'käme'],
          loesungen: { 1: 'gäbe', 2: 'müsste', 3: 'wüsste' },
        },
        { typ: 'mc', frage: 'Wenn ich du ___, würde ich das Angebot sofort annehmen.', optionen: ['wäre', 'hätte', 'würde'], loesung: 0 },
        { typ: 'mc', frage: '___ ich nur schon mit der Prüfung fertig!', optionen: ['Hätte', 'Würde', 'Wäre'], loesung: 2 },
        { typ: 'mc', frage: 'Wenn der Zug nicht so oft Verspätung ___, würden mehr Pendler ihn nehmen.', optionen: ['hatte', 'hätte', 'hat'], loesung: 1 },
        {
          typ: 'korrektur',
          optionen: ['Ich würde gern ein Zimmer für zwei Nächte.', 'Ich hätte gern ein Zimmer für zwei Nächte.'],
          loesung: 1,
          warum: '«Quisiera una habitación» se dice **Ich hätte gern …**. *würde gern* necesita un infinitivo al final (*Ich würde gern ein Zimmer buchen*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich doch mehr Freizeit hätte!', 'Wenn ich doch mehr Freizeit habe!'],
          loesung: 0,
          warum: 'Un deseo irreal («¡ojalá tuviera!») exige **Konjunktiv II**: *hätte*. Con el indicativo *habe* la frase no expresa ningún deseo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich wäre froh, wenn du mich morgen anrufen würdest.', 'Ich wäre froh, wenn du würdest mich morgen anrufen.'],
          loesung: 0,
          warum: 'En la subordinada con *wenn*, **würde** va al final, detrás del infinitivo: *…, wenn du mich anrufen würdest*.',
        },
        {
          typ: 'satzbau',
          woerter: ['das', 'grillen', 'Wäre', 'würden', 'besser', 'wir', 'Wetter'],
          loesung: 'Wäre das Wetter besser, würden wir grillen.',
          alt: ['Wir würden grillen, wäre das Wetter besser.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Forumsbeitrag: Was wäre, wenn ich freitags frei hätte?',
      text: 'Seit Wochen diskutieren wir in der Firma über die Viertagewoche, und ich frage mich ständig: Was wäre, wenn ich freitags frei hätte? Ich würde endlich wieder regelmäßig Klavier spielen, und meine Eltern auf dem Land könnte ich viel öfter besuchen. Mein Chef ist leider skeptisch. Er meint, wenn alle nur vier Tage arbeiten würden, wäre das Büro am Freitag oft nicht ausreichend besetzt. Ganz unrecht hat er nicht: In unserer Abteilung müssten wir die Aufgaben neu verteilen, und manche Kollegen wären vermutlich gestresster als jetzt. Trotzdem glaube ich, dass sich ein Versuch lohnen würde. Wenn man ausgeruhter wäre, würde man konzentrierter arbeiten und weniger Fehler machen. Deshalb meine Frage an euch: Hat jemand Erfahrung damit? Könntet ihr mir erzählen, wie eure Firma die Viertagewoche organisiert hat? Wenn ich ein paar gute Argumente hätte, würde ich meinem Chef nächste Woche einen Probemonat vorschlagen. — Malte, 38',
      items: [
        { typ: 'rf', aussage: 'Malte hat freitags bereits frei.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Sorge hat Maltes Chef?',
          optionen: ['Die Mitarbeitenden würden weniger verdienen.', 'Am Freitag wären zu wenige Leute im Büro.', 'Die Kunden würden sich beschweren.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Malte gibt zu, dass die Viertagewoche auch Nachteile hätte.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was möchte Malte von den anderen im Forum wissen?',
          optionen: ['wie andere Firmen die Viertagewoche organisiert haben', 'wie er mit seinem Chef besser auskommen könnte', 'ob er sich eine neue Stelle suchen sollte'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einer Radiosendung mit Höreranruf. Entscheide, welche Aussage dem Gehörten entspricht.',
      audio: {
        transcript: 'Moderatorin: Willkommen zurück bei unserer Sendung „Stadtgespräch“. Unsere Frage heute: Was würden Sie ändern, wenn Sie Bürgermeister wären? Am Telefon ist jetzt Herr Wolters. Guten Morgen!\nMann: Guten Morgen! Also, wenn ich Bürgermeister wäre, würde ich zuerst etwas für die Busse tun. Bei uns im Viertel fährt abends nur einmal pro Stunde einer. Wenn der Bus alle zwanzig Minuten käme, würden viel mehr Leute das Auto stehen lassen.\nModeratorin: Das würde aber einiges kosten. Woher käme das Geld?\nMann: Ich würde das Parken im Zentrum teurer machen. Nicht für die Anwohner, sondern für alle, die von außerhalb kommen.\nModeratorin: Und gäbe es noch einen zweiten Wunsch?\nMann: Ja. Wenn ich könnte, würde ich die Bibliothek auch sonntags öffnen. Meine Tochter studiert und hätte dann endlich einen ruhigen Platz zum Lernen. Zu Hause ist es ihr oft zu laut.\nModeratorin: Wären Sie denn selbst gern Bürgermeister, Herr Wolters?\nMann: Ehrlich gesagt, nein. Ich hätte viel zu wenig Geduld für die langen Sitzungen.',
      },
      items: [
        { typ: 'rf', aussage: 'Im Viertel von Herrn Wolters fährt abends alle zwanzig Minuten ein Bus.', loesung: false },
        {
          typ: 'mc',
          frage: 'Für wen würde Herr Wolters das Parken im Zentrum teurer machen?',
          optionen: ['für die Anwohner', 'für Autofahrer von außerhalb', 'für alle Autofahrer ohne Ausnahme'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum würde er die Bibliothek auch sonntags öffnen?',
          optionen: ['Seine Tochter könnte dort in Ruhe lernen.', 'Er selbst hat unter der Woche keine Zeit zum Lesen.', 'Sonntags gäbe es dort Veranstaltungen für Familien.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Herr Wolters glaubt, dass ihm für das Amt des Bürgermeisters die Geduld fehlen würde.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'In deinem Wohnhaus gibt es keinen Abstellraum für Fahrräder, deshalb stehen viele Räder im Treppenhaus. Schreib der Hausverwaltung eine E-Mail mit einem Vorschlag.',
      punkte: [
        'Beschreibe, was sich ändern würde, wenn es einen Fahrradraum gäbe.',
        'Schlag vor, wie die Bewohner dabei helfen könnten.',
        'Bitte höflich um eine Antwort (Könnten Sie …? / Ich wäre Ihnen dankbar, wenn …).',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Vorschlag für einen Fahrradraum — Sehr geehrte Damen und Herren, ich wohne seit zwei Jahren in der Lindenstraße 14 und möchte Ihnen einen Vorschlag machen. Zurzeit stehen viele Fahrräder im Treppenhaus, weil es keinen Abstellraum gibt. Wenn es im Keller einen Fahrradraum gäbe, wäre das Treppenhaus frei, und niemand müsste sein Rad in die Wohnung tragen. Der alte Lagerraum neben der Waschküche wäre dafür ideal. Die Bewohner könnten ihn an einem Samstag gemeinsam aufräumen, sodass kaum Kosten entstehen würden. Könnten Sie mir mitteilen, ob das möglich wäre? Ich wäre Ihnen sehr dankbar, wenn Sie sich bis Ende des Monats melden würden. Mit freundlichen Grüßen, Leonie Brandt',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag. Du hast 90 Sekunden Zeit.',
      aufgabe: 'Stell dir vor, du hättest ein ganzes Jahr frei und müsstest nicht arbeiten. Erzähl in einem kurzen Vortrag von etwa 90 Sekunden, was du in diesem Jahr tun würdest. Verwende dabei den Konjunktiv II (würde + Infinitiv, wäre, hätte, könnte, müsste).',
      punkte: [
        'was du in diesem Jahr machen würdest und warum',
        'was dabei schwierig wäre',
        'ob du danach etwas in deinem Leben ändern würdest',
      ],
      redemittel: ['Wenn ich ein Jahr frei hätte, würde ich …', 'Am liebsten wäre ich …', 'Schwierig wäre allerdings, dass …', 'Danach würde ich wahrscheinlich …'],
      maxSekunden: 90,
      beispielLoesung: 'Also, wenn ich ein ganzes Jahr frei hätte, würde ich zuerst einmal richtig ausschlafen — das wäre schon ein Traum. Danach würde ich für ein paar Monate nach Süddeutschland ziehen, am liebsten in eine kleine Stadt am Bodensee. Dort könnte ich jeden Tag Deutsch sprechen, und ich hätte endlich Zeit für einen Intensivkurs. Außerdem würde ich gern etwas Praktisches lernen, zum Beispiel Möbel bauen. Dafür fehlt mir im Moment einfach die Zeit. Schwierig wäre natürlich das Geld. Ohne Gehalt müsste ich von meinen Ersparnissen leben, und ich weiß nicht, ob die für zwölf Monate reichen würden. Ich müsste also sparsam sein und könnte nicht ständig reisen. Und ehrlich gesagt hätte ich auch ein bisschen Angst, dass mir nach einem halben Jahr langweilig wäre. Trotzdem glaube ich, dass ich danach einiges ändern würde. Ich würde wahrscheinlich weniger Stunden arbeiten, damit mehr Zeit für meine Familie und meine Hobbys bleibt. So ein Jahr wäre für mich also keine Pause, sondern eher ein Neuanfang.',
    },
  ],
}
