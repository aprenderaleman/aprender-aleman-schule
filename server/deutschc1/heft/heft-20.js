// Übungsheft C1 — Lektion 20: Modul Hören — Überblick
export default {
  lektion: 20,
  titel: 'Übungsheft — Modul Hören im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben rund um die Sprache des Hörmoduls. Achte auf feste Verbindungen, trennbare Verben und Präpositionen und entscheide dich jeweils für die einzige normgerechte Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Wer die Einlesezeit nicht {1}, hört dem Text im Modul Hören immer einen Satz {2}.',
          bank: ['nutzt', 'hinterher', 'verpasst', 'voraus'],
          loesungen: { 1: 'nutzt', 2: 'hinterher' },
        },
        {
          typ: 'luecke',
          text: 'Dem Gespräch lässt sich {1}, dass die Sprecherin ihre Meinung geändert hat. Wer kurz den {2} verliert, markiert das Item und springt zum nächsten.',
          bank: ['entnehmen', 'Faden', 'verpassen', 'Stichwort'],
          loesungen: { 1: 'entnehmen', 2: 'Faden' },
        },
        {
          typ: 'luecke',
          text: '{1} intensiver Vorbereitung verpasste Ana einige Zahlen; {2} ihrer Stichworte konnte sie sie im Anschluss aber rekonstruieren.',
          bank: ['Trotz', 'Anhand', 'Statt', 'Innerhalb'],
          loesungen: { 1: 'Trotz', 2: 'Anhand' },
        },
        {
          typ: 'mc',
          frage: 'Bei dem hohen Sprechtempo im zweiten Teil bin ich leider nicht ___.',
          optionen: ['mitgekommen', 'angekommen', 'ausgekommen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Gehört: „Das Problem ist weniger das Geld als das fehlende Personal.“ Welche Notiz gibt die Äußerung korrekt wieder?',
          optionen: ['Geld und Personal fehlen gleichermaßen', 'v. a. Personalmangel, nicht Geld', 'Geld fehlt mehr als Personal'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Gehört: „Das betrifft rund 30 Prozent — nein, nach der neuen Erhebung sogar 40.“ Welche Option trifft zu?',
          optionen: ['Laut Sprecher sind 30 Prozent betroffen.', 'Die Zahl der Betroffenen ist auf 30 Prozent gesunken.', 'Nach den neuesten Daten sind 40 Prozent betroffen.'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Während des Vortrags habe ich mir Notizen gemacht.', 'Während des Vortrags habe ich Notizen genommen.'],
          loesung: 0,
          warum: '«Tomar notas» es ***sich** Notizen machen*; *Notizen nehmen* es un calco del español (o del inglés *take notes*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider habe ich die entscheidende Information verloren.', 'Leider habe ich die entscheidende Information verpasst.'],
          loesung: 1,
          warum: '**verpassen** = perderse algo que ocurre en un momento (una información, un tren, una cita). *Verlieren* se usa para objetos y en la locución fija *den Faden verlieren*.',
        },
        {
          typ: 'zuordnen',
          links: ['in der Einlesezeit', 'während des Hörens', 'nach einem verpassten Item', 'am Ende jedes Teils'],
          rechts: ['Schlüsselwörter markieren', 'sofort ankreuzen', 'den Anschluss im Text suchen', 'offene Items raten'],
          loesung: {
            'in der Einlesezeit': 'Schlüsselwörter markieren',
            'während des Hörens': 'sofort ankreuzen',
            'nach einem verpassten Item': 'den Anschluss im Text suchen',
            'am Ende jedes Teils': 'offene Items raten',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['wird', 'Nur', 'zweimal', 'der', 'gespielt', 'Vortrag'],
          loesung: 'Nur der Vortrag wird zweimal gespielt.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Halbe Sätze“ — ein Podcast über das Zuhören',
      text: 'Dass ausgerechnet ein Podcast das Zuhören zum Thema macht, mag zunächst paradox wirken. Die Sprachwissenschaftlerin Leonie Brandt, die die Reihe seit dem Frühjahr moderiert, löst diesen Widerspruch jedoch überzeugend auf. In jeder Folge spricht sie mit einem Gast darüber, wie Menschen gesprochene Sprache verarbeiten: warum wir Füllwörter kaum wahrnehmen, weshalb wir gerade bei Zahlen den Faden verlieren und wie Dolmetscherinnen es schaffen, auch bei hohem Sprechtempo mitzukommen.\nDie Stärke der Reihe liegt in ihren Gesprächen. Brandt stellt präzise Nachfragen, lässt ihren Gästen aber genügend Raum, auch Umwege zu gehen. Besonders gelungen ist die Folge mit einem Gerichtsschreiber, der schildert, wie er stundenlange Verhandlungen in Stichworten festhält, ohne eine entscheidende Äußerung zu verpassen.\nWeniger überzeugend sind die ausufernden Einstiege: Bis die Hauptaussage einer Folge erkennbar wird, vergehen mitunter zehn Minuten voller Anekdoten. Wer wenig Zeit hat, dürfte hier abspringen. Hilfreich ist dagegen, dass zu jeder Folge ein vollständiges Transkript bereitsteht — ein Angebot, das gerade Deutschlernende zu schätzen wissen werden.\nFazit: kein Podcast zum Nebenbeihören, sondern einer, der das eigene Zuhören schärft.',
      items: [
        {
          typ: 'mc',
          frage: 'Wie beurteilt der Rezensent die Gesprächsführung der Moderatorin?',
          optionen: ['Sie unterbricht ihre Gäste zu häufig mit Nachfragen.', 'Sie verbindet genaue Nachfragen mit Offenheit für Abschweifungen.', 'Sie überlässt die Gesprächsführung weitgehend ihren Gästen.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Der Rezensent bemängelt, dass die Folgen zu schnell zur Sache kommen.', loesung: false },
        { typ: 'rf', aussage: 'Zu jeder Folge wird eine vollständige Verschriftlichung angeboten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Haltung nimmt der Rezensent insgesamt ein?',
          optionen: ['Er hält den Podcast trotz einer Schwäche für lohnend.', 'Er empfiehlt ihn vor allem als Begleitung für nebenbei.', 'Er rät Deutschlernenden wegen des hohen Tempos davon ab.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme von mindestens 80 Wörtern. Achte auf einen klaren Aufbau mit Position, Begründung und Auseinandersetzung mit der Gegenseite.',
      aufgabe: 'Ein Bildungsmagazin diskutiert, ob Hörtexte in Sprachprüfungen grundsätzlich zweimal abgespielt werden sollten. Nimm in einem Beitrag für das Leserforum Stellung.',
      punkte: [
        'Leg deine Position zu der Frage klar dar.',
        'Begründe sie mit mindestens zwei Argumenten, etwa zur Alltagsnähe oder zur Fairness der Prüfung.',
        'Geh auf ein Gegenargument ein und entkräfte es.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Meiner Ansicht nach ist es richtig, die meisten Hörtexte nur einmal abzuspielen. Zum einen entspricht das der Realität: Weder im Hörsaal noch in einer Besprechung kann man einen Redner bitten, seinen Vortrag zu wiederholen. Zum anderen prüft das einmalige Hören genau jene Fähigkeit, auf die es auf diesem Niveau ankommt — gezielt zuzuhören und Wichtiges sofort zu erfassen.\nKritiker wenden ein, dass Prüfungsangst gerade beim Hören zu Blackouts führe und ein zweiter Durchgang daher fairer sei. Dieser Einwand ist nicht unberechtigt. Allerdings lässt sich dem durch eine konsequent genutzte Einlesezeit und gezieltes Training weitgehend vorbeugen. Wer vorbereitet ist, verliert den Faden seltener — und findet ihn schneller wieder.',
    },
  ],
}
