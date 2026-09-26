// Übungsheft C1 — Lektion 21: Hören: Podcast & Interview
export default {
  lektion: 21,
  titel: 'Übungsheft — Podcast & Interview',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den Markern des gesprochenen Deutsch. Entscheide jeweils, welche Version eine Äußerung tatsächlich meint, und achte auf trennbare Verben, Wortstellung und Perfektbildung.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Moderator {1} sofort nach, als sein Gast zum wiederholten Mal vom Thema {2}.',
          bank: ['hakte', 'abschweifte', 'deutete', 'abschwächte'],
          loesungen: { 1: 'hakte', 2: 'abschweifte' },
        },
        {
          typ: 'luecke',
          text: 'Die Expertin {1} ihre Kritik zunächst nur an; erst auf Nachfrage wurde sie deutlicher. Wenig später {2} sie ihre scharfe Formulierung allerdings wieder ab.',
          bank: ['deutete', 'schwächte', 'hakte', 'schweifte'],
          loesungen: { 1: 'deutete', 2: 'schwächte' },
        },
        {
          typ: 'luecke',
          text: 'Wir eröffnen im Herbst zwei, {1} drei neue Filialen. Ob sich das am Ende rechnet, sei einmal {2}.',
          bank: ['beziehungsweise', 'dahingestellt', 'sozusagen', 'allerdings'],
          loesungen: { 1: 'beziehungsweise', 2: 'dahingestellt' },
        },
        {
          typ: 'mc',
          frage: 'Gehört: „Wir haben etwa hundert — nein, ich muss mich korrigieren: knapp hundertfünfzig Betriebe befragt.“ Wie viele Betriebe wurden befragt?',
          optionen: ['knapp 150', 'etwa 100', 'deutlich mehr als 150'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Gehört: „Ganz von der Hand weisen lässt sich der Einwand nicht.“ Welche Haltung drückt die Sprecherin aus?',
          optionen: ['Sie weist den Einwand entschieden zurück.', 'Sie hat zu dem Einwand keine Meinung.', 'Sie hält den Einwand für zumindest teilweise berechtigt.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Moderator: „Ist das Projekt also gescheitert?“ — Gast: „So weit würde ich nicht gehen. Wir liegen allerdings deutlich hinter dem Zeitplan.“ Welche Option gibt die Position des Gastes wieder?',
          optionen: ['Der Gast bestätigt, dass das Projekt gescheitert ist.', 'Der Gast räumt Verzögerungen ein, spricht aber nicht von einem Scheitern.', 'Der Gast bestreitet, dass es überhaupt Probleme gibt.'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Im Grunde stimme ich zu, allerdings sehe ich ein Risiko.', 'Im Grunde ich stimme zu, allerdings ich sehe ein Risiko.'],
          loesung: 0,
          warum: '*Im Grunde* y *allerdings* ocupan la posición 1 de su oración, así que el verbo conjugado va inmediatamente detrás: *Im Grunde **stimme** ich zu …, allerdings **sehe** ich …*',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Befragte hat auf die Suggestivfrage gar nicht eingegangen.', 'Die Befragte ist auf die Suggestivfrage gar nicht eingegangen.'],
          loesung: 1,
          warum: '*auf etwas eingehen* («entrar en algo») forma el Perfekt con **sein**, como *gehen*.',
        },
        {
          typ: 'zuordnen',
          links: ['das heißt', 'nein, warte', 'äh', 'nebenbei bemerkt', 'im Grunde'],
          rechts: ['Reformulierung', 'Selbstkorrektur', 'Füllwort', 'Einschub', 'Relativierung'],
          loesung: {
            'das heißt': 'Reformulierung',
            'nein, warte': 'Selbstkorrektur',
            'äh': 'Füllwort',
            'nebenbei bemerkt': 'Einschub',
            'im Grunde': 'Relativierung',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['würde', 'So', 'das', 'nicht', 'pauschal', 'ich', 'sagen'],
          loesung: 'So pauschal würde ich das nicht sagen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Lob des zweiten Anlaufs',
      text: 'Wer Gesprächsmitschnitte Wort für Wort abschreibt, erlebt eine Überraschung: Kaum ein Satz wird so zu Ende geführt, wie er begonnen wurde. Menschen setzen an, brechen ab, schieben Einschübe ein und korrigieren sich, noch bevor der Gedanke ausgesprochen ist. Lange galt dieses Verhalten in der Sprachdidaktik als Makel, den es abzutrainieren gelte. Die Gesprächsforschung sieht das inzwischen anders.\nSelbstkorrekturen, so ihr Befund, sind kein Zeichen von Unsicherheit, sondern von Rücksicht auf das Gegenüber: Wer sich nachbessert, zeigt, dass ihm an Genauigkeit gelegen ist. Selbst Füllwörter erfüllen eine Funktion. Sie signalisieren, dass der Sprecher das Wort behalten möchte, obwohl er noch nach der passenden Formulierung sucht.\nAufschlussreich ist auch, wie im Deutschen Widerspruch geäußert wird. Statt eines klaren Neins hört man Wendungen wie „So würde ich das nicht formulieren“ oder „Da bin ich nicht ganz bei Ihnen“. Wer solche Abschwächungen für Zustimmung hält, missversteht das Gespräch grundlegend. Nicht die Lautstärke, sondern die Zurücknahme verrät hier den Dissens.\nMan muss den zweiten Anlauf deshalb nicht entschuldigen. Man sollte ihm vielmehr genau zuhören — denn oft steckt erst in ihm, was eigentlich gemeint war.',
      items: [
        { typ: 'rf', aussage: 'Die Gesprächsforschung wertet Selbstkorrekturen heute als Ausdruck von Unsicherheit.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Funktion schreibt der Text Füllwörtern zu?',
          optionen: ['Sie verschaffen dem Sprecher Zeit, ohne dass er das Rederecht abgibt.', 'Sie kündigen an, dass der Sprecher das Thema wechseln möchte.', 'Sie dienen vor allem dazu, Zustimmung zu signalisieren.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was gilt laut Text für Widerspruch im Deutschen?',
          optionen: ['Er wird meist mit einem unmissverständlichen Nein geäußert.', 'Er zeigt sich häufig gerade in abgeschwächten Formulierungen.', 'Er wird in Gesprächen in der Regel ganz vermieden.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Früher versuchte man im Sprachunterricht, Lernenden das Abbrechen und Nachbessern von Sätzen abzugewöhnen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle E-Mail von mindestens 80 Wörtern. Formuliere deine Kritik sachlich und höflich, aber unmissverständlich.',
      aufgabe: 'Du hast im Radio ein Interview mit einer Verkehrsplanerin über autofreie Innenstädte gehört. Der Moderator hat sie mit Suggestivfragen bedrängt und kaum ausreden lassen. Schreib an die Redaktion der Sendung.',
      punkte: [
        'Nenne die Sendung und fasse kurz zusammen, worum es im Interview ging.',
        'Kritisiere die Gesprächsführung an einem konkreten Beispiel.',
        'Mach einen Vorschlag, wie künftige Interviews ausgewogener gestaltet werden könnten.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nam Dienstagabend habe ich in Ihrer Sendung das Interview mit einer Verkehrsplanerin über autofreie Innenstädte verfolgt. Das Thema ist hochaktuell, umso mehr hat mich die Gesprächsführung enttäuscht.\nDer Moderator stellte überwiegend Suggestivfragen wie „Das ist doch reine Bevormundung, oder?“ und unterbrach seinen Gast, sobald dieser differenzieren wollte. Auf diese Weise ließ sich kaum nachvollziehen, welche Position die Expertin tatsächlich vertritt.\nIch rege daher an, Interviewpartnern künftig mehr Raum für ihre Antworten zu geben und kritische Nachfragen offen zu formulieren. Nachhaken ist legitim — die Antwort vorwegzunehmen dagegen nicht.\nMit freundlichen Grüßen\nIrene Castellano',
    },
  ],
}
