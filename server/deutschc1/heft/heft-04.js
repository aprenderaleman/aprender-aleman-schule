// Übungsheft C1 — Lektion 04: Das Passiv & Passiversatzformen
export default {
  lektion: 4,
  titel: 'Übungsheft — Passiv & Passiversatzformen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu Passiv und Passiversatzformen. Achte jeweils auf Zeitform, Modalverb und die Nuance der gewählten Ersatzform.',
      items: [
        {
          typ: 'luecke',
          text: 'Der technische Fehler ist inzwischen vollständig {1} worden. Die Sicherheit der Anlage muss jedoch auch während der Wartung jederzeit {2} werden.',
          bank: ['behoben', 'gewährleistet', 'geworden', 'verabschiedet'],
          loesungen: { 1: 'behoben', 2: 'gewährleistet' },
        },
        {
          typ: 'luecke',
          text: 'Das Gesetz ist bereits im März vom Landtag verabschiedet {1}. Seitdem ist die Rechtslage für die Betroffenen deutlich übersichtlicher {2}.',
          bank: ['worden', 'geworden', 'werden'],
          loesungen: { 1: 'worden', 2: 'geworden' },
        },
        {
          typ: 'luecke',
          text: 'Ohne zusätzliches Personal {1} sich die Reform kaum umsetzen. Die Unterlagen {2} deshalb bis Monatsende vollständig beim Personalamt einzureichen.',
          bank: ['lässt', 'sind', 'werden', 'ist'],
          loesungen: { 1: 'lässt', 2: 'sind' },
        },
        {
          typ: 'mc',
          frage: 'Keine Sorge, der Antrag ___ schon seit gestern gestellt — wir warten nur noch auf den Bescheid.',
          optionen: ['wird', 'ist', 'wurde'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die Anwohner hätten viel früher über die Baumaßnahmen informiert ___.',
          optionen: ['worden müssen', 'müssen werden', 'werden müssen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Die Gebühr ist bis spätestens 15. Mai zu entrichten. — Welche Umformulierung gibt den Satz bedeutungsgleich wieder?',
          optionen: ['Die Gebühr muss bis spätestens 15. Mai entrichtet werden.', 'Die Gebühr lässt sich bis spätestens 15. Mai entrichten.', 'Die Gebühr ist bis spätestens 15. Mai entrichtet worden.'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Hier verkaufen sich renovierte Altbauwohnungen.', 'Hier werden renovierte Altbauwohnungen verkauft.'],
          loesung: 1,
          warum: 'El «se» pasivo español (*aquí se venden pisos*) no se traduce con reflexivo: en alemán va en **Passiv** o con *man*. El *sich* medial solo funciona con pocos verbos y casi siempre con adverbio (*verkaufen sich gut*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Den Bewohnern des Hauses wurde sofort geholfen.', 'Die Bewohner des Hauses wurden sofort geholfen.'],
          loesung: 0,
          warum: '*helfen* rige dativo, y el dativo **no se convierte en sujeto** en pasiva: queda una pasiva impersonal con el verbo en singular (*wurde geholfen*), a diferencia de «fueron ayudados».',
        },
        {
          typ: 'korrektur',
          optionen: ['Nach dem Unfall wurden umgehend Maßnahmen genommen.', 'Nach dem Unfall wurden umgehend Maßnahmen ergriffen.'],
          loesung: 1,
          warum: '«Tomar medidas» es **Maßnahmen ergreifen** (o *treffen*), nunca *nehmen*: calco del español.',
        },
        {
          typ: 'zuordnen',
          links: ['einen technischen Fehler', 'ein Gesetz im Parlament', 'sofortige Maßnahmen', 'die Sicherheit der Fahrgäste', 'sämtliche Einwände der Anwohner', 'eine Reform in der Praxis'],
          rechts: ['beheben', 'verabschieden', 'ergreifen', 'gewährleisten', 'berücksichtigen', 'umsetzen'],
          loesung: {
            'einen technischen Fehler': 'beheben',
            'ein Gesetz im Parlament': 'verabschieden',
            'sofortige Maßnahmen': 'ergreifen',
            'die Sicherheit der Fahrgäste': 'gewährleisten',
            'sämtliche Einwände der Anwohner': 'berücksichtigen',
            'eine Reform in der Praxis': 'umsetzen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht aus einer Regionalzeitung. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Sanierung der Strombrücke verzögert sich',
      text: 'Die Sanierung der Strombrücke in Magdeburg wird sich um mindestens ein Jahr verzögern. Das wurde am Dienstag im Bauausschuss bekannt gegeben. Bei einer Routineprüfung im Frühjahr waren an mehreren Stahlträgern Risse festgestellt worden, die in den ursprünglichen Plänen nicht berücksichtigt werden konnten. Nach Angaben der Bauverwaltung lassen sich die Schäden zwar beheben, doch müssen zuvor aufwendige Gutachten erstellt werden. Die Sicherheit der Brücke ist nach Aussage der Verwaltung derzeit gewährleistet; für Lastwagen ist sie allerdings seit März gesperrt, während Autos, Busse und Fahrräder sie weiterhin nutzen dürfen. Scharfe Kritik kommt von der Opposition im Stadtrat: Die Risse hätten schon vor Jahren entdeckt werden können, wenn die Wartung nicht über lange Zeit vernachlässigt worden wäre. Die Verwaltung weist diesen Vorwurf zurück und verweist auf Prüfprotokolle, nach denen alle vorgeschriebenen Intervalle eingehalten wurden. Wie teuer die zusätzlichen Maßnahmen werden, ist noch nicht abzusehen. Fest steht nur, dass der überarbeitete Zeitplan bis Ende des Monats dem Stadtrat vorzulegen ist, der anschließend über die Finanzierung entscheiden muss. Für Pendlerinnen wie Sabine Krüger, die täglich über die Brücke fährt, ist die Nachricht ernüchternd: „Dass so etwas passiert, ist nachvollziehbar. Aber wir hätten früher informiert werden müssen.“',
      items: [
        {
          typ: 'mc',
          frage: 'Warum verzögert sich die Sanierung?',
          optionen: ['Weil bei einer Prüfung unerwartete Schäden festgestellt wurden.', 'Weil der Stadtrat die Finanzierung vorerst abgelehnt hat.', 'Weil zunächst neue Stahlträger bestellt werden müssen.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Brücke ist zurzeit für den gesamten Verkehr gesperrt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was wirft die Opposition der Verwaltung vor?',
          optionen: ['die Öffentlichkeit bewusst über die Schäden getäuscht zu haben', 'die Wartung der Brücke über lange Zeit vernachlässigt zu haben', 'die Kosten der Sanierung von Anfang an zu niedrig angesetzt zu haben'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Kosten der zusätzlichen Arbeiten lassen sich derzeit noch nicht beziffern.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben mit mindestens 80 Wörtern. Wechsle bewusst zwischen Passiv und Ersatzformen.',
      aufgabe: 'Du wohnst in der Nähe der Strombrücke und bist von der Sperrung für Lastwagen indirekt betroffen: Der Lieferverkehr wird nun durch deine Wohnstraße umgeleitet. Schreib an die Bauverwaltung der Stadt.',
      punkte: [
        'Bezieh dich auf den Zeitungsbericht und schildere, wie sich die Umleitung auf deinen Alltag auswirkt.',
        'Kritisiere die Informationspolitik der Verwaltung und verwende dabei mindestens einmal die Form „hätte … werden müssen/können“.',
        'Schlage zwei konkrete Maßnahmen vor, mit denen die Belastung der Anwohner verringert werden könnte.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\n\nwie in der Presse berichtet wurde, verzögert sich die Sanierung der Strombrücke um mindestens ein Jahr. Seit der Sperrung für Lastwagen wird der gesamte Lieferverkehr durch unsere Wohnstraße umgeleitet. Nachts ist an Schlaf kaum noch zu denken, und der Schulweg meiner Kinder ist deutlich gefährlicher geworden.\n\nDass die Schäden zunächst begutachtet werden müssen, ist durchaus nachvollziehbar. Die Anwohner hätten jedoch rechtzeitig über die Umleitung informiert werden müssen, statt davon aus der Zeitung zu erfahren.\n\nIch bitte Sie daher, zwei Maßnahmen zu prüfen: Erstens ließe sich der Lieferverkehr zwischen 22 und 6 Uhr auf die Umgehungsstraße verlegen. Zweitens sollte vor der Grundschule eine Tempo-30-Zone eingerichtet werden. Beides wäre ohne großen Aufwand umsetzbar.\n\nFür eine baldige Antwort wäre ich Ihnen dankbar.\n\nMit freundlichen Grüßen\nDaniel Ortiz',
    },
  ],
}
