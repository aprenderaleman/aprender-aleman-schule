// Übungsheft C1 — Lektion 35: Gesundheit & Ernährung
export default {
  lektion: 35,
  titel: 'Übungsheft — Gesundheit & Ernährung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Setze jeweils das Wort ein, das mit dem Kontext eine feste Verbindung eingeht und dem Register einer sachlichen Gesundheitsdebatte entspricht. Achte auf Rektion, Kasus und typische Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Rund neun von zehn Menschen sind in der gesetzlichen Krankenversicherung {1} und {2} einkommensabhängige Beiträge.',
          bank: ['versichert', 'entrichten', 'gesichert', 'erheben'],
          loesungen: { 1: 'versichert', 2: 'entrichten' },
        },
        {
          typ: 'luecke',
          text: 'Die Ministerin {1} an die Eigenverantwortung der Verbraucher; Kritiker halten dagegen, Aufklärung allein {2} zu kurz.',
          bank: ['appelliert', 'greife', 'ruft', 'falle'],
          loesungen: { 1: 'appelliert', 2: 'greife' },
        },
        {
          typ: 'luecke',
          text: 'Viele Berufseinsteiger fragen sich, wie lange sie dem ständigen Leistungsdruck noch {1} können; nicht wenige leiden bereits an chronischer {2}.',
          bank: ['standhalten', 'aushalten', 'Erschöpfung', 'Ausschöpfung'],
          loesungen: { 1: 'standhalten', 2: 'Erschöpfung' },
          warum: '*dem ständigen Leistungsdruck* está en dativo: lo rige **standhalten** + Dat.; *aushalten* exigiría acusativo (*den Leistungsdruck aushalten*).',
        },
        {
          typ: 'luecke',
          text: 'Die {1} einer Zuckersteuer wird von Fachgesellschaften seit Jahren gefordert; Gegner halten sie für eine unzulässige {2} mündiger Bürger.',
          bank: ['Einführung', 'Bevormundung', 'Einfuhr', 'Vormundschaft'],
          loesungen: { 1: 'Einführung', 2: 'Bevormundung' },
        },
        {
          typ: 'mc',
          frage: 'Der Fleischkonsum ist in Deutschland seit Jahren ___ — ein Wandel, der weniger auf Verbote als auf ein verändertes Bewusstsein zurückgeht.',
          optionen: ['rückläufig', 'rückständig', 'rückwärtig'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Diabetes ___ inzwischen zu den großen Volkskrankheiten.',
          optionen: ['gilt', 'zählt', 'reiht'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung entspricht dem Register eines schriftlichen Diskussionsbeitrags?',
          optionen: [
            'Viele junge Leute haben total Stress im Job und klappen irgendwann zusammen.',
            'Junge Leute sind heute einfach viel zu gestresst, das macht sie krank.',
            'Immer mehr Berufseinsteiger leiden unter einem Leistungsdruck, der auf Dauer krank machen kann.',
          ],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: [
            'Wegen einer chronischen Kondition darf er keinen Leistungssport treiben.',
            'Wegen einer chronischen Erkrankung darf er keinen Leistungssport treiben.',
          ],
          loesung: 1,
          warum: '«Condición médica» es **eine Erkrankung** o **ein Leiden**; *die Kondition* es la forma física (y *Konditionen*, en plural, las condiciones comerciales).',
        },
        {
          typ: 'korrektur',
          optionen: [
            'Immer mehr Beschäftigte leiden an chronischer Erschöpfung.',
            'Immer mehr Beschäftigte leiden von chronischer Erschöpfung.',
          ],
          loesung: 0,
          warum: 'Se dice **leiden an** (enfermedad) o **leiden unter** (carga); *von* es calco de «sufrir de».',
        },
        {
          typ: 'zuordnen',
          links: ['eine Vorsorgeuntersuchung', 'den Fleischkonsum', 'vor einer Zweiklassenmedizin', 'auf eine ausgewogene Ernährung', 'die psychische Gesundheit'],
          rechts: ['wahrnehmen', 'einschränken', 'warnen', 'achten', 'ernst nehmen'],
          loesung: {
            'eine Vorsorgeuntersuchung': 'wahrnehmen',
            'den Fleischkonsum': 'einschränken',
            'vor einer Zweiklassenmedizin': 'warnen',
            'auf eine ausgewogene Ernährung': 'achten',
            'die psychische Gesundheit': 'ernst nehmen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Wenn die Kantine mitdenkt',
      text: 'Seit einem Jahr gilt in der Kantine einer niedersächsischen Kreisverwaltung ein neues Konzept: Das vegetarische Gericht steht vorn an der Theke, die Currywurst nur noch zweimal pro Woche auf dem Plan, und Leitungswasser ist kostenlos, während gezuckerte Limonade etwas mehr kostet als früher. Verboten wurde nichts. Die Bilanz, die Personalrätin Selin Aydın nun vorlegt, ist dennoch bemerkenswert: Der Fleischkonsum in der Kantine ging um ein Drittel zurück, der Absatz süßer Getränke sogar um die Hälfte.\nNicht alle sind begeistert. Einige Beschäftigte empfinden die Umstellung als Bevormundung; sie wollten selbst entscheiden, was auf ihrem Teller lande, heißt es in einer schriftlichen Stellungnahme. Aydın hält dagegen, niemand werde zu etwas gezwungen — man mache die gesunde Wahl lediglich zur bequemsten. Appelle an die Eigenverantwortung hätten jahrelang kaum etwas bewirkt.\nOffen bleibt, ob sich der Effekt auch in weniger Fehltagen niederschlägt. Die Verwaltung will dies in einer zweijährigen Studie klären lassen, räumt aber ein, dass sich Gesundheit kaum an einem einzigen Faktor festmachen lasse. Schließlich, so Aydın, hänge das Wohlbefinden der Beschäftigten ebenso stark vom Leistungsdruck am Arbeitsplatz ab wie vom Speiseplan.',
      items: [
        { typ: 'rf', aussage: 'Gezuckerte Getränke wurden aus dem Angebot der Kantine genommen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie rechtfertigt Selin Aydın das neue Konzept?',
          optionen: [
            'Es verbiete nur Produkte, die nachweislich krank machten.',
            'Es lasse die Wahl frei, mache aber die gesunde Entscheidung zur einfachsten.',
            'Es ergänze Appelle an die Eigenverantwortung, die sich in der Vergangenheit bewährt hätten.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was erfährt man über die Fehltage der Beschäftigten?',
          optionen: [
            'Sie sind im gleichen Maß gesunken wie der Fleischkonsum.',
            'Sie hängen nach Einschätzung der Verwaltung vor allem von der Ernährung ab.',
            'Ob sie zurückgehen, soll erst eine Studie zeigen.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Aydın zufolge beeinflussen die Arbeitsbedingungen das Wohlbefinden nicht weniger als die Ernährung.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einem Podcast, in dem Jana und Felix über eine Studie sprechen. Entscheide, welche Antwort dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Jana: Willkommen zu einer neuen Folge unseres Podcasts. Felix, du hast dir die neue Befragung zur psychischen Gesundheit von Studierenden angesehen. Was steht drin?\nFelix: Vor allem eine Zahl, die mich erschreckt hat, Jana. Gut vierzig Prozent der Befragten geben an, unter chronischer Erschöpfung zu leiden. Vor fünf Jahren war es noch etwa ein Viertel.\nJana: Liegt das am Leistungsdruck im Studium selbst?\nFelix: Das dachte ich auch. Als häufigste Ursache nennen die Befragten aber nicht die Prüfungen, sondern die Doppelbelastung durch Studium und Nebenjob. Wer mehr als fünfzehn Stunden pro Woche arbeitet, ist deutlich häufiger betroffen.\nJana: Und was unternehmen die Hochschulen?\nFelix: Viele bieten Kurse zur Stressbewältigung an. Die Autorinnen der Studie halten das allerdings für ein Feigenblatt, solange sich an den Verhältnissen nichts ändert.\nJana: Das sehe ich etwas anders. Ich habe selbst so einen Kurs besucht, und mir hat er geholfen, rechtzeitig Hilfe zu suchen. Auf einen Termin bei der psychologischen Beratung musste ich dann allerdings sieben Wochen warten.\nFelix: Genau da setzt die Studie an. Sie fordert nicht noch mehr Kurse, sondern zusätzliche Beratungsstellen und Prüfungsphasen, die sich besser mit einem Nebenjob vereinbaren lassen.\nJana: Dann hoffen wir, dass das jemand liest, der darüber entscheidet.',
      },
      items: [
        { typ: 'rf', aussage: 'Vor fünf Jahren klagte etwa jeder vierte Befragte über chronische Erschöpfung.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was nennen die Befragten als häufigste Ursache ihrer Erschöpfung?',
          optionen: ['Den Druck in den Prüfungsphasen.', 'Die langen Wartezeiten bei der psychologischen Beratung.', 'Die Doppelbelastung durch Studium und Nebenjob.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Wie beurteilt Jana die Kurse zur Stressbewältigung?',
          optionen: ['Sie hat selbst von einem solchen Kurs profitiert.', 'Sie hält sie wie die Autorinnen der Studie für ein Feigenblatt.', 'Sie hält sie für wirksamer als zusätzliche Beratungsstellen.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Studie fordert in erster Linie, das Angebot an Kursen zur Stressbewältigung auszubauen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Wäge Argumente ab und verwende mindestens drei Ausdrücke aus dem Kernwortschatz, etwa Eigenverantwortung, Bevormundung, Solidarprinzip, Prävention oder eine Vorsorgeuntersuchung wahrnehmen.',
      aufgabe: 'In einem Onlineforum wird diskutiert, ob die gesetzlichen Krankenkassen Versicherten, die regelmäßig Sport treiben und Vorsorgeuntersuchungen wahrnehmen, einen Beitragsrabatt gewähren sollten. Nimm Stellung.',
      punkte: [
        'Lege dar, was für einen solchen Bonus spricht.',
        'Erläutere, welche Bedenken gegen ihn bestehen — etwa mit Blick auf das Solidarprinzip.',
        'Beziehe begründet Position und formuliere einen Vorschlag.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Auf den ersten Blick klingt ein Beitragsrabatt für gesundheitsbewusste Versicherte überzeugend: Wer regelmäßig Sport treibt und Vorsorgeuntersuchungen wahrnimmt, stärkt die Prävention und senkt langfristig die Kosten für alle. Ein finanzieller Anreiz könnte zudem Menschen erreichen, an denen Aufklärungskampagnen vorbeigehen.\nDennoch überwiegen für mich die Bedenken. Die gesetzliche Krankenversicherung beruht auf dem Solidarprinzip: Die Beiträge richten sich nach dem Einkommen, nicht nach dem Risiko. Ein Bonus würde vor allem jene belohnen, die ohnehin gesund leben und über Zeit und Geld verfügen, während chronisch Kranke oder Schichtarbeiter leer ausgingen. Zudem ist die Grenze zur Bevormundung schnell überschritten, wenn Kassen das Freizeitverhalten kontrollieren.\nSinnvoller wäre es daher, Vorsorgeangebote auszubauen und leichter zugänglich zu machen, statt an die Eigenverantwortung Einzelner zu appellieren und sie finanziell zu sortieren.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Nimm mündlich zu einer These Stellung. Sprich zusammenhängend etwa zwei Minuten (höchstens 150 Sekunden).',
      aufgabe: 'In einer Diskussionssendung fällt die These: „Was auf meinem Teller liegt, ist Privatsache — der Staat hat sich aus der Ernährung seiner Bürger herauszuhalten.“ Nimm dazu in einem zusammenhängenden Diskussionsbeitrag Stellung. Wäge Eigenverantwortung und Bevormundung gegeneinander ab und stütze dich auf mindestens ein konkretes Beispiel.',
      punkte: [
        'Erkläre, was an der These berechtigt ist.',
        'Zeige an einem Beispiel (etwa Zuckersteuer, Kantinenangebot oder Werbung), wo Appelle an die Eigenverantwortung an Grenzen stoßen.',
        'Beziehe Position: Welche staatlichen Eingriffe hältst du für vertretbar, welche nicht?',
      ],
      redemittel: ['So berechtigt … ist, so wenig …', 'Wie das Beispiel … zeigt, …', 'Zwischen Fürsorge und Bevormundung verläuft ein schmaler Grat.', 'Bei aller Skepsis gegenüber staatlichen Eingriffen: …'],
      maxSekunden: 150,
      beispielLoesung: 'Auf den ersten Blick klingt die These überzeugend. Natürlich möchte niemand, dass ihm der Staat vorschreibt, was er zu Mittag isst. Erwachsene Menschen sind mündig, und wer sich bewusst für die Currywurst entscheidet, hat jedes Recht dazu. Insofern ist der Appell an die Eigenverantwortung berechtigt.\nAber so berechtigt er ist, so wenig ändert er an den Verhältnissen, unter denen wir einkaufen. Wenn die Limonade billiger ist als das Wasser und Werbung für Süßigkeiten sich gezielt an Kinder richtet, dann ist die Entscheidung eben nicht mehr ganz frei. Hinzu kommt: Übergewicht und Diabetes zählen zu den Volkskrankheiten, und die Folgekosten trägt die Allgemeinheit über die Krankenkassenbeiträge. Wo alle mitbezahlen, endet das rein private Ermessen.\nNehmen wir die Zuckersteuer. Wie das britische Beispiel zeigt, senken viele Hersteller den Zuckergehalt ihrer Getränke, sobald er sie Geld kostet. Niemandem wurde etwas verboten, und trotzdem hat sich etwas bewegt.\nDas ist für mich der entscheidende Punkt. Zwischen Fürsorge und Bevormundung verläuft ein schmaler Grat, und die Grenze ziehe ich bei der Wahlfreiheit. Verbote lehne ich ab — niemand soll mir das Stück Kuchen wegnehmen. Maßnahmen dagegen, die die gesunde Wahl zur einfachsten machen, also Preissignale, eine klare Kennzeichnung oder ein gutes Kantinenangebot, halte ich für vertretbar. Die These greift also zu kurz: Der Teller ist privat, aber die Bedingungen, unter denen er gefüllt wird, sind es nicht.',
    },
  ],
}
