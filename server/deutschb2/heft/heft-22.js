// Übungsheft B2 — Lektion 22: Lesen: formeller Regeltext
export default {
  lektion: 22,
  titel: 'Übungsheft — formeller Regeltext',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Amtsdeutsch im Einsatz: Ergänze, wähle und ordne so, wie es in einer Hausordnung oder einem Vertrag stehen würde.',
      items: [
        {
          typ: 'luecke',
          text: 'Schäden am Gebäude sind dem Vermieter {1} zu melden. Die neue Hausordnung tritt am 1. März in {2}.',
          bank: ['unverzüglich', 'Kraft', 'Frist', 'gestattet'],
          loesungen: { 1: 'unverzüglich', 2: 'Kraft' },
        },
        {
          typ: 'luecke',
          text: 'Die Mieter sind {1} Reinigung des Treppenhauses verpflichtet. Für Schäden durch unsachgemäße Nutzung haftet die Person, die sie verursacht hat — Eltern haften {2} ihre Kinder.',
          bank: ['zur', 'für', 'zu', 'von'],
          loesungen: { 1: 'zur', 2: 'für' },
        },
        { typ: 'mc', frage: 'Das Rauchen ist in allen Räumen der Bibliothek ___.', optionen: ['untersagt', 'verpflichtet', 'berechtigt'], loesung: 0 },
        { typ: 'mc', frage: 'Die Kündigung ist spätestens drei Monate vorher schriftlich ___.', optionen: ['zu einreichen', 'einzureichen', 'eingereicht zu'], loesung: 1 },
        { typ: 'mc', frage: 'Der Vermieter ist ___, die Wohnung nach vorheriger Ankündigung zu betreten.', optionen: ['gestattet', 'untersagt', 'berechtigt'], loesung: 2 },
        {
          typ: 'zuordnen',
          links: ['ist untersagt', 'ist gestattet', 'ist verpflichtet zu', 'ist berechtigt zu', 'ist unverzüglich zu melden'],
          rechts: ['muss sofort gemeldet werden', 'darf', 'ist verboten', 'muss', 'ist erlaubt'],
          loesung: {
            'ist untersagt': 'ist verboten',
            'ist gestattet': 'ist erlaubt',
            'ist verpflichtet zu': 'muss',
            'ist berechtigt zu': 'darf',
            'ist unverzüglich zu melden': 'muss sofort gemeldet werden',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Eltern haften von ihren Kindern.', 'Eltern haften für ihre Kinder.'],
          loesung: 1,
          warum: '«Responder de» se dice **haften für** + Akkusativ; *von* es un calco del español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Regelung tritt am 1. Januar in Kraft.', 'Die Regelung kommt am 1. Januar in Kraft.'],
          loesung: 0,
          warum: '«Entrar en vigor» es la colocación fija **in Kraft treten**; con *kommen* no existe.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Mieter ist verpflichtet, sofort zu melden Schäden.', 'Der Mieter ist verpflichtet, Schäden sofort zu melden.'],
          loesung: 1,
          warum: 'En la construcción de infinitivo, **zu + Infinitiv** va siempre al final; el complemento va delante.',
        },
        {
          typ: 'satzbau',
          woerter: ['unverzüglich', 'Der', 'zu', 'Schäden', 'hat', 'melden', 'Mieter'],
          loesung: 'Der Mieter hat Schäden unverzüglich zu melden.',
          alt: ['Der Mieter hat unverzüglich Schäden zu melden.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus der Benutzungsordnung. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Benutzungsordnung der Gemeindebibliothek Talheim — Auszug',
      text: '§ 1 Anmeldung: Die Nutzung der Bibliothek ist allen Personen ab sechs Jahren gestattet. Kinder unter 14 Jahren benötigen für die Anmeldung die schriftliche Zustimmung eines Elternteils. § 2 Ausleihe: Bücher können für vier Wochen ausgeliehen werden, Zeitschriften und DVDs nur für eine Woche. Die Leihfrist kann bis zu zweimal verlängert werden, sofern das Medium nicht von einer anderen Person vorgemerkt ist. § 3 Gebühren: Bei Überschreitung der Leihfrist wird eine Gebühr von 50 Cent pro Medium und Woche erhoben. § 4 Haftung: Die Nutzerinnen und Nutzer sind verpflichtet, die Medien sorgfältig zu behandeln. Beschädigungen und Verluste sind unverzüglich zu melden. Für den entstandenen Schaden haftet die Person, auf deren Ausweis das Medium ausgeliehen wurde. § 5 Verhalten: Das Essen ist in allen Räumen untersagt; Getränke in verschlossenen Flaschen sind gestattet. Telefonieren ist nur im Eingangsbereich erlaubt. § 6 Inkrafttreten: Diese Ordnung tritt am 1. September in Kraft und ersetzt alle bisherigen Regelungen.',
      items: [
        { typ: 'rf', aussage: 'Ein zwölfjähriges Kind kann sich ohne Zustimmung der Eltern anmelden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was gilt für DVDs?',
          optionen: ['Man kann sie vier Wochen ausleihen.', 'Man kann sie eine Woche ausleihen.', 'Die Leihfrist darf nicht verlängert werden.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wer muss für ein beschädigtes Buch bezahlen?',
          optionen: [
            'die Person, die den Schaden zuerst meldet',
            'die Bibliothek, wenn der Schaden sofort gemeldet wird',
            'die Person, auf deren Ausweis das Buch ausgeliehen wurde',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Wasser in einer verschlossenen Flasche darf man in die Bibliothek mitnehmen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Gespräch bei einer Wohnungsübergabe. Entscheide, welche Aussage dem Gespräch entspricht.',
      audio: {
        transcript: 'Mann: So, Frau Ortega, hier sind Ihre Schlüssel. Haben Sie noch Fragen zur Hausordnung?\nFrau: Ja, einige. Bis wann darf ich abends die Waschküche benutzen?\nMann: Bis einundzwanzig Uhr, nicht bis zweiundzwanzig Uhr, wie es noch auf dem alten Schild steht. Und sonntags ist die Nutzung ganz untersagt.\nFrau: Gut zu wissen. Und meine Katze? Im Vertrag steht, Haustiere sind nur mit Zustimmung des Vermieters gestattet.\nMann: Richtig, aber das betrifft Hunde. Für Katzen brauchen Sie keine Erlaubnis, Sie müssen das Tier lediglich bei mir anmelden.\nFrau: Dann melde ich sie hiermit an. Was ist mit meinem Fahrrad?\nMann: Im Hausflur darf es nicht stehen. Der Fahrradkeller ist offen, für Diebstahl haftet die Hausverwaltung dort allerdings nicht.\nFrau: Verstehe. Und wenn in der Wohnung etwas kaputtgeht?\nMann: Dann sind Sie verpflichtet, mir das unverzüglich zu melden, am besten schriftlich. Rufen Sie bitte nur im Notfall an.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Bis wann darf Frau Ortega die Waschküche abends benutzen?',
          optionen: ['bis 20 Uhr', 'bis 21 Uhr', 'bis 22 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Für ihre Katze benötigt Frau Ortega die Zustimmung des Vermieters.', loesung: false },
        { typ: 'rf', aussage: 'Wird das Fahrrad im Keller gestohlen, kommt die Hausverwaltung nicht für den Schaden auf.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was soll Frau Ortega tun, wenn in der Wohnung etwas kaputtgeht?',
          optionen: [
            'den Schaden selbst reparieren lassen',
            'in jedem Fall sofort anrufen',
            'den Schaden sofort mitteilen, möglichst schriftlich',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Die Hausverwaltung deines Wohnhauses hat eine neue Regel angekündigt: „Ab dem 1. Mai ist das Abstellen von Kinderwagen und Fahrrädern im Hausflur untersagt.“ Einen Abstellraum gibt es im Haus nicht. Schreib der Hausverwaltung eine E-Mail und nimm Stellung.',
      punkte: [
        'Bezieh dich auf die neue Regel und erkläre, warum sie für dich ein Problem ist.',
        'Schlag eine Lösung vor, die für alle Mietparteien funktioniert.',
        'Bitte um eine Antwort bis zu einem bestimmten Termin.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Neue Regel zum Abstellen von Kinderwagen — Sehr geehrte Damen und Herren, in Ihrem Schreiben vom 10. April teilen Sie mit, dass das Abstellen von Kinderwagen im Hausflur ab dem 1. Mai untersagt ist. Für meine Familie ist das ein großes Problem: Wir wohnen im dritten Stock, es gibt keinen Aufzug, und einen Abstellraum hat unser Haus nicht. Ich schlage deshalb vor, im Hof einen überdachten Platz für Kinderwagen und Fahrräder einzurichten. Die Kosten könnten wir Mietparteien gern gemeinsam tragen. Ich bitte Sie, mir bis zum 25. April mitzuteilen, ob diese Lösung möglich ist. Mit freundlichen Grüßen, Amira Haddad',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erkläre formelle Regeln in Alltagssprache. Sprich etwa 90 Sekunden.',
      aufgabe: 'Dein neuer Mitbewohner Pablo zieht nächste Woche ein und versteht das Amtsdeutsch der Hausordnung noch nicht gut. Nimm ihm eine Sprachnachricht von etwa 90 Sekunden auf und erkläre ihm diese drei Regeln in Alltagssprache. Regel 1: „Das Abstellen von Fahrrädern im Hausflur ist untersagt.“ Regel 2: „Die Nutzung der Waschküche ist nur werktags von 8 bis 20 Uhr gestattet.“ Regel 3: „Schäden sind dem Vermieter unverzüglich zu melden.“',
      punkte: [
        'Erkläre jede der drei Regeln mit einfachen Worten.',
        'Gib zu mindestens einer Regel ein konkretes Beispiel.',
        'Sag, welche Regel du sinnvoll und welche du übertrieben findest.',
      ],
      redemittel: ['Das heißt, man darf (nicht) …', 'Mit anderen Worten: …', 'Du musst unbedingt …', 'Ehrlich gesagt finde ich …'],
      maxSekunden: 90,
      beispielLoesung: 'Hallo Pablo, hier ist Marco. Ich wollte dir kurz die wichtigsten Regeln aus unserer Hausordnung erklären, weil der Text ziemlich kompliziert klingt. Erstens: Du darfst dein Fahrrad nicht im Hausflur abstellen. Das ist verboten, weil der Flur im Notfall frei sein muss. Stell es am besten in den Hof, da gibt es einen Fahrradständer. Zweitens: Die Waschküche darf man nur von Montag bis Samstag benutzen, und zwar zwischen acht Uhr morgens und acht Uhr abends. Am Sonntag darfst du also nicht waschen, und spät abends auch nicht. Ehrlich gesagt finde ich das ein bisschen übertrieben, aber die Nachbarn beschweren sich sonst sofort. Drittens: Wenn in der Wohnung etwas kaputtgeht, zum Beispiel die Heizung, müssen wir das sofort dem Vermieter sagen. Das halte ich für sinnvoll, denn sonst müssen wir den Schaden am Ende vielleicht selbst bezahlen. Wenn du noch Fragen hast, melde dich einfach. Bis nächste Woche!',
    },
  ],
}
