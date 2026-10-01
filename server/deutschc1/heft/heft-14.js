// Übungsheft C1 — Lektion 14: Modalpartikeln
export default {
  lektion: 14,
  titel: 'Übungsheft — Modalpartikeln',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Erschließe aus dem Kontext, welche Haltung der Sprecher einnimmt, und wähle die Partikel, die genau diese Wirkung erzeugt. Achte auch auf Stellung, Abfolge und Register.',
      items: [
        {
          typ: 'luecke',
          text: '„Wo habe ich {1} meinen Schlüssel hingelegt? Eben lag er noch hier!“ — Kurz darauf klopft es. „Störe ich?“ — „Nein, kommen Sie {2} herein, ich bin gleich so weit.“',
          bank: ['bloß', 'ruhig', 'ja'],
          loesungen: { 1: 'bloß', 2: 'ruhig' },
        },
        {
          typ: 'luecke',
          text: '„Sag das {1} nicht dem Chef, sonst gibt es gewaltigen Ärger!“ Nach einer kurzen Pause wechselt Jonas beiläufig das Thema: „Was macht {2} deine Doktorarbeit?“',
          bank: ['bloß', 'eigentlich', 'wohl', 'ruhig'],
          loesungen: { 1: 'bloß', 2: 'eigentlich' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} einer Aussage verändert nicht ihren Inhalt, sondern ihren Ton. Wer die {2} eines Sprechers erkennen will, muss deshalb auf die {3} Wörter im Mittelfeld achten.',
          bank: ['Abtönung', 'Sprechabsicht', 'unbetonten', 'betonten', 'Begründung'],
          loesungen: { 1: 'Abtönung', 2: 'Sprechabsicht', 3: 'unbetonten' },
        },
        {
          typ: 'mc',
          frage: 'Welcher Satz ist als dringliche Warnung zu verstehen?',
          optionen: ['Mach doch die Tür zu!', 'Mach mal die Tür zu!', 'Mach bloß die Tür zu!'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '„Das Budget ist eben begrenzt.“ Welche Haltung drückt der Sprecher aus?',
          optionen: ['Er hofft, dass sich das Budget noch aufstocken lässt.', 'Er nimmt die Begrenzung als unabänderlich hin.', 'Er stellt fest, dass das Budget gerade erst gekürzt worden ist.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Eigentlich wollten wir am Wochenende an die Ostsee fahren — aber dann ist Paula krank geworden.“ Was besagt „eigentlich“ hier?',
          optionen: ['Der ursprüngliche Plan wurde durch die Umstände durchkreuzt.', 'Die Familie fährt derzeit jedes Wochenende an die Ostsee.', 'Die Familie ist trotz Paulas Erkrankung gefahren.'],
          loesung: 0,
        },
        {
          typ: 'satzbau',
          woerter: ['wohl', 'Ernst', 'ist', 'ja', 'nicht', 'dein', 'Das'],
          loesung: 'Das ist ja wohl nicht dein Ernst!',
        },
        {
          typ: 'korrektur',
          optionen: ['Komm mal doch morgen vorbei!', 'Komm doch morgen mal vorbei!'],
          loesung: 1,
          warum: 'En las cadenas de partículas el orden es fijo: **doch** precede siempre a **mal** (*doch mal*, nunca *mal doch*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Sehr geehrte Frau Albers, ich möchte Sie bitten, mir die Unterlagen bis Freitag zuzusenden.', 'Sehr geehrte Frau Albers, schicken Sie mir doch mal bis Freitag die Unterlagen.'],
          loesung: 0,
          warum: 'En una carta formal, *doch mal* es marca de oralidad: suena campechano o incluso impaciente. El registro escrito formal prescinde de estas partículas.',
        },
        {
          typ: 'zuordnen',
          links: ['Sie sind ja schon da!', 'Die Kollegin ist wohl krank, ihr Platz ist leer.', 'Der Zug fällt aus — so ist es eben.', 'Bedienen Sie sich ruhig am Buffet.', 'Reichst du mir mal das Salz?'],
          rechts: ['Überraschung', 'Vermutung', 'Resignation', 'Erlaubnis', 'beiläufige Bitte'],
          loesung: {
            'Sie sind ja schon da!': 'Überraschung',
            'Die Kollegin ist wohl krank, ihr Platz ist leer.': 'Vermutung',
            'Der Zug fällt aus — so ist es eben.': 'Resignation',
            'Bedienen Sie sich ruhig am Buffet.': 'Erlaubnis',
            'Reichst du mir mal das Salz?': 'beiläufige Bitte',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment und entscheide, welche Antwort der Position der Verfasserin entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Die kleinen Wörter (Ingrid Solberg)',
      text: 'Wer Deutsch als Fremdsprache lernt, begegnet den Modalpartikeln zunächst mit Misstrauen. Wörter wie „doch“, „halt“ oder „ja“ scheinen nichts zu bedeuten, und dennoch sind sie aus keinem Alltagsgespräch wegzudenken. Lehrwerke haben sie lange vernachlässigt, vermutlich weil sich ihre Funktion kaum in Regeln fassen lässt. Eine Partikel fügt dem Sachverhalt nichts hinzu; sie verrät vielmehr, wie der Sprecher zu seinem Gegenüber steht. Ob ein Satz als freundliche Ermunterung, als ungeduldiger Appell oder als versteckte Drohung ankommt, entscheidet oft ein einziges unbetontes Wort.\nFortgeschrittene Lernende stehen deshalb vor einem Dilemma. Verzichten sie auf Partikeln, wirkt ihr Deutsch korrekt, aber seltsam steif, fast wie aus einem Behördenschreiben. Setzen sie sie wahllos ein, entstehen Missverständnisse, die schwerer wiegen als jeder Grammatikfehler: Ein falsch platziertes „bloß“ kann eine harmlose Bitte in einen Vorwurf verwandeln. Der sinnvollste Weg führt meiner Erfahrung nach über das Hören. Wer in Gesprächen gezielt darauf achtet, in welchen Situationen Muttersprachler zu „mal“ oder „eben“ greifen, entwickelt allmählich ein Gespür für ihre Sprechabsicht — lange bevor er sie selbst verwendet. Übersetzen lassen sich die kleinen Wörter ohnehin nicht; übertragen lässt sich nur ihre Wirkung.',
      items: [
        { typ: 'rf', aussage: 'Nach Ansicht der Verfasserin wirkt Deutsch ohne Modalpartikeln zwar fehlerfrei, aber unnatürlich.', loesung: true },
        {
          typ: 'mc',
          frage: 'Weshalb sind Modalpartikeln im Unterricht lange vernachlässigt worden?',
          optionen: ['Weil sie im heutigen Alltagsdeutsch kaum noch vorkommen.', 'Weil sich ihre Funktion schwer in Regeln beschreiben lässt — so zumindest die Vermutung der Verfasserin.', 'Weil sie lange als Merkmal nachlässigen Sprechens galten.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welchen Lernweg empfiehlt die Verfasserin?',
          optionen: ['Partikeln zunächst bewusst im Hören wahrzunehmen, bevor man sie selbst einsetzt.', 'Partikeln systematisch in die Muttersprache zu übersetzen, um ihre Bedeutung zu sichern.', 'Partikeln von Anfang an möglichst häufig zu verwenden, um Hemmungen abzubauen.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Verfasserin hält falsch gesetzte Partikeln für weniger gravierend als Grammatikfehler.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Gespräch zwischen zwei Kollegen. Achte nicht nur auf die Informationen, sondern auch auf die Haltung der Sprechenden, und entscheide dann, welche Antwort zutrifft bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Jana: Tobias, hast du mal kurz Zeit? Es geht um die Abschiedsfeier für Frau Lindner.\nTobias: Klar, Jana, komm ruhig rein. Die Feier ist doch am Donnerstag, oder?\nJana: Nein, eben nicht mehr. Am Donnerstag ist ja die Betriebsversammlung. Wir mussten auf Freitag ausweichen, sechzehn Uhr.\nTobias: Freitagnachmittag? Da sind wohl die meisten schon im Wochenende.\nJana: Ich weiß, aber es ging halt nicht anders. Der große Besprechungsraum war sonst die ganze Woche belegt.\nTobias: Na gut. Und wer hält eigentlich die Rede?\nJana: Der Abteilungsleiter wollte ursprünglich, aber der ist verreist. Jetzt habe ich an dich gedacht. Du hast doch am längsten mit ihr zusammengearbeitet.\nTobias: Ich? Das ist ja eine Überraschung! Wie lang soll das denn werden?\nJana: Fünf Minuten reichen völlig. Das kriegst du schon hin.\nTobias: Meinetwegen. Und was ist mit dem Geschenk?\nJana: Wir haben dreihundertfünfzig Euro gesammelt. Geplant war erst ein Reisegutschein, aber sie fährt ja kaum noch weg. Jetzt wird es ein Jahresabo fürs Theater.\nTobias: Schöne Idee. Weiß sie eigentlich schon davon?\nJana: Nein! Erwähn das bloß nicht, wenn du sie nachher in der Kantine triffst. Es soll eine Überraschung bleiben.\nTobias: Keine Sorge, von mir erfährt sie nichts.',
      },
      items: [
        { typ: 'rf', aussage: 'Jana ist überzeugt, dass sich ein günstigerer Termin hätte finden lassen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Weshalb fällt Janas Wahl für die Rede auf Tobias?',
          optionen: ['Weil der Abteilungsleiter ihn dafür vorgeschlagen hat.', 'Weil er sich selbst dafür angeboten hat.', 'Weil niemand länger mit Frau Lindner zusammengearbeitet hat als er.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Wie nimmt Tobias die Bitte auf, die Rede zu halten?',
          optionen: ['Er ist überrascht, erklärt sich aber ohne große Begeisterung bereit.', 'Er fühlt sich geehrt und sagt sofort mit Freude zu.', 'Er zögert und will die Entscheidung dem Abteilungsleiter überlassen.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Statt des zunächst geplanten Reisegutscheins bekommt Frau Lindner ein Theaterabonnement.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Halte ein schriftsprachliches Register ein und verzichte auf mündliche Partikeln wie doch, halt oder mal.',
      aufgabe: 'Fasse das Essayfragment „Die kleinen Wörter“ für das Forum deines Deutschkurses zusammen und nimm anschließend zur empfohlenen Lernstrategie Stellung.',
      punkte: [
        'Gib die zentrale These der Verfasserin zur Funktion der Modalpartikeln wieder.',
        'Fasse das Dilemma fortgeschrittener Lernender mit eigenen Worten zusammen.',
        'Beurteile den empfohlenen Lernweg vor dem Hintergrund deiner eigenen Erfahrung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'In ihrem Essay setzt sich Ingrid Solberg mit der Frage auseinander, warum Modalpartikeln Deutschlernenden so große Schwierigkeiten bereiten. Sie vertritt die These, diese Wörter veränderten nicht den Inhalt einer Aussage, sondern zeigten die Haltung des Sprechers gegenüber seinem Gesprächspartner. Fortgeschrittene Lernende befänden sich daher in einem Dilemma: Ohne Partikeln klinge ihr Deutsch hölzern, mit wahllos gesetzten Partikeln riskierten sie ernste Missverständnisse. Als Ausweg empfiehlt die Verfasserin, zunächst im Hören ein Gespür für die Sprechabsicht zu entwickeln.\nDiese Strategie halte ich für überzeugend. Auch mir ist die Wirkung der Partikeln erst bewusst geworden, als ich Gespräche unter Muttersprachlern aufmerksam verfolgt habe. Allerdings sollte man mit dem eigenen Gebrauch nicht zu lange warten: Wer einige sichere Partikeln früh erprobt, gewinnt an Natürlichkeit, ohne viel zu riskieren.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich etwa zwei Minuten frei, so wie du es in einer Besprechung unter vertrauten Kolleginnen und Kollegen tun würdest. Töne deine Äußerungen mit Modalpartikeln ab, damit dein Einwand freundlich und nicht schroff klingt.',
      aufgabe: 'In deinem Team, in dem sich alle duzen, soll die wöchentliche Besprechung von Montagmorgen auf Freitagnachmittag verlegt werden. Du hältst das für keine gute Idee. Melde dich in der Besprechung mit einem zusammenhängenden Redebeitrag von etwa zwei Minuten zu Wort: Leite deinen Einwand höflich ein, begründe ihn und mache einen Gegenvorschlag. Töne deine Äußerungen mit Modalpartikeln ab (etwa ja, doch, mal, eben, halt, ruhig), damit der Einwand freundlich und nicht schroff klingt.',
      punkte: [
        'Leite deinen Einwand höflich ein und zeige Verständnis für den Vorschlag.',
        'Nenne zwei Gründe, die gegen den Freitagnachmittag sprechen.',
        'Mache einen Gegenvorschlag und ermuntere das Team, ihn auszuprobieren.',
      ],
      redemittel: ['Darf ich dazu mal kurz etwas sagen?', 'Ich verstehe ja, warum …', 'Am Freitagnachmittag sind wir doch alle …', 'Lasst uns doch einfach mal …', 'Sagt ruhig, wenn ihr das anders seht.'],
      maxSekunden: 120,
      beispielLoesung: 'Darf ich dazu mal kurz etwas sagen? Ich verstehe ja, warum der Vorschlag kommt: Der Montagmorgen ist für viele stressig, und manche stehen dann noch im Stau. Das ist eben so, das kann keiner ändern. Trotzdem halte ich den Freitagnachmittag eigentlich für die schlechtere Lösung.\nErstens sind wir am Freitag um drei doch alle mit dem Kopf schon im Wochenende. Da trifft man wohl kaum noch gute Entscheidungen. Zweitens besprechen wir in der Runde ja vor allem, was in der Woche ansteht. Wenn wir das erst am Freitag tun, liegen zwei freie Tage dazwischen, und am Montag hat die Hälfte halt wieder vergessen, wer was übernimmt.\nMein Vorschlag wäre deshalb: Lasst uns doch den Montag behalten, aber erst um zehn anfangen statt um halb neun. Dann kann jeder in Ruhe ankommen und schon mal seine Mails lesen. Probieren wir das ruhig mal vier Wochen aus. Wenn es nicht klappt, können wir ja immer noch über den Freitag reden. Das kriegen wir schon hin. Sagt ruhig, wenn ihr das anders seht.',
    },
  ],
}
