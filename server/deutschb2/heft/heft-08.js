// Übungsheft B2 — Lektion 08: Konjunktiv II der Vergangenheit
export default {
  lektion: 8,
  titel: 'Übungsheft — Konjunktiv II der Vergangenheit',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Es ist zu spät, etwas zu ändern: Ergänze die irreale Vergangenheit. Achte auf das Hilfsverb (hätte oder wäre) und auf den Doppelinfinitiv.',
      items: [
        {
          typ: 'luecke',
          text: 'Wenn Lukas den Wecker gehört {1}, {2} er pünktlich ins Büro gekommen.',
          bank: ['hätte', 'wäre', 'würde', 'hat'],
          loesungen: { 1: 'hätte', 2: 'wäre' },
        },
        {
          typ: 'luecke',
          text: 'Wenn ihr rechtzeitig {1}, hättet ihr noch Karten für das Konzert bekommen. Ihr hättet sie gleich im Januar online {2}!',
          bank: ['gebucht hättet', 'gebucht wärt', 'kaufen sollen', 'gekauft sollen'],
          loesungen: { 1: 'gebucht hättet', 2: 'kaufen sollen' },
        },
        {
          typ: 'luecke',
          text: 'Auf der glatten Straße {1} Mira beinahe gestürzt, und wir {2} wegen des Schnees fast den letzten Bus verpasst.',
          bank: ['wäre', 'hätte', 'hätten', 'wären'],
          loesungen: { 1: 'wäre', 2: 'hätten' },
        },
        { typ: 'mc', frage: 'Ich ___ dir gern beim Umzug geholfen, aber du hast mich ja nicht gefragt.', optionen: ['wäre', 'hätte', 'würde'], loesung: 1 },
        { typ: 'mc', frage: 'Wenn der Flug nicht ausgefallen ___, wären wir schon gestern am Urlaubsort angekommen.', optionen: ['hätte', 'war', 'wäre'], loesung: 2 },
        { typ: 'mc', frage: 'Du hättest mich wirklich früher ___!', optionen: ['gewarnt sollen', 'sollen warnen', 'warnen sollen'], loesung: 2 },
        {
          typ: 'korrektur',
          optionen: ['Ich würde das gemacht haben, aber ich hatte keine Zeit.', 'Ich hätte das gemacht, aber ich hatte keine Zeit.'],
          loesung: 1,
          warum: '«Lo habría hecho» es **hätte gemacht**. El calco *würde … gemacht haben* no se usa para el pasado irreal.',
        },
        {
          typ: 'korrektur',
          optionen: ['Gestern wäre ich auf dem Eis fast gefallen.', 'Gestern falle ich auf dem Eis fast.'],
          loesung: 0,
          warum: 'En español «casi me caigo» va en presente; en alemán lo que no llegó a pasar exige Konjunktiv II de pasado: **wäre fast gefallen**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich früher losgegangen hätte, hätte ich den Zug erwischt.', 'Wenn ich früher losgegangen wäre, hätte ich den Zug erwischt.'],
          loesung: 1,
          warum: 'El español usa siempre «haber», pero *losgehen* forma el Perfekt con *sein* → **wäre losgegangen**.',
        },
        {
          typ: 'satzbau',
          woerter: ['anrufen', 'Wir', 'sofort', 'den', 'müssen', 'hätten', 'Arzt'],
          loesung: 'Wir hätten den Arzt sofort anrufen müssen.',
          alt: ['Wir hätten sofort den Arzt anrufen müssen.', 'Den Arzt hätten wir sofort anrufen müssen.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Leserbrief: Die Stadt hätte uns fragen müssen',
      text: 'Zu Ihrem Artikel „Hallenbad endgültig geschlossen“ vom 12. März: Als langjährige Schwimmerin bin ich enttäuscht und auch ein wenig wütend. Seit Jahren war bekannt, dass das Dach undicht ist. Hätte die Stadt es rechtzeitig reparieren lassen, wäre die Sanierung heute nicht so teuer geworden. Außerdem hätte man die Bürgerinnen und Bürger früher informieren müssen. Viele von uns hätten gern geholfen, zum Beispiel mit einem Förderverein oder einer Spendenaktion. In unserer Nachbarstadt ist genau das passiert: Dort hätte der Gemeinderat das Bad vor fünf Jahren beinahe geschlossen, doch ein Verein sammelte in wenigen Monaten genug Geld, um es zu retten. Besonders leid tun mir die Schulkinder. Für den Schwimmunterricht müssen sie jetzt mit dem Bus ins Hallenbad der Nachbarstadt fahren — vierzig Minuten pro Strecke. Ich hoffe sehr, dass der Gemeinderat aus diesem Fehler lernt. Eine offene Diskussion wäre von Anfang an der richtige Weg gewesen. — Brigitte Albers, Neustadt',
      items: [
        { typ: 'rf', aussage: 'Das Problem mit dem Dach war schon lange bekannt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was wäre nach Meinung der Autorin passiert, wenn man die Bürger früher informiert hätte?',
          optionen: ['Sie hätten vor dem Rathaus protestiert.', 'Sie hätten das Dach selbst repariert.', 'Viele hätten sich zum Beispiel mit Spenden engagiert.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Das Hallenbad in der Nachbarstadt wurde vor fünf Jahren geschlossen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Folge der Schließung nennt die Autorin?',
          optionen: ['Die Schulkinder haben jetzt einen langen Weg zum Schwimmunterricht.', 'Viele Schwimmer sind aus dem Verein ausgetreten.', 'Die Eintrittspreise in der Nachbarstadt sind gestiegen.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Du hast an einer Tagesreise mit dem Bus teilgenommen, die sehr schlecht organisiert war. Schreib dem Reiseveranstalter eine E-Mail.',
      punkte: [
        'Beschreibe, was schiefgelaufen ist.',
        'Erkläre, was der Veranstalter hätte besser machen sollen oder können.',
        'Fordere eine Entschädigung (Ich würde Sie bitten, … / Könnten Sie …?).',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Beschwerde über die Tagesreise nach Lindenau am 14. Juni — Sehr geehrte Damen und Herren, am vergangenen Samstag habe ich an Ihrer Tagesreise nach Lindenau teilgenommen und war leider sehr enttäuscht. Der Bus kam mit einer Stunde Verspätung, und die Stadtführung fiel ganz aus, weil der Reiseleiter krank war. Wenn Sie uns vorher informiert hätten, hätte ich die Reise verschoben. Außerdem hätten Sie kurzfristig einen anderen Reiseleiter organisieren müssen. So haben wir den ganzen Nachmittag ohne Programm verbracht. Ich würde Sie daher bitten, mir mindestens die Hälfte des Reisepreises zu erstatten. Mit freundlichen Grüßen, Ahmet Yılmaz',
    },
  ],
}
