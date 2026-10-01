// Übungsheft C1 — Lektion 36: Migration & Integration
export default {
  lektion: 36,
  titel: 'Übungsheft — Migration & Integration',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Setze jeweils das Wort ein, das Kollokation, Rektion und Kontext verlangen. Achte bei diesem sensiblen Themenfeld besonders auf präzise Begriffe, ein angemessenes Register und typische Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Viele zugewanderte Ärztinnen warten monatelang auf die {1} ihrer Abschlüsse, obwohl die Kliniken dringend auf qualifizierte Zuwanderung {2} sind.',
          bank: ['Anerkennung', 'angewiesen', 'Erkennung', 'abhängig'],
          loesungen: { 1: 'Anerkennung', 2: 'angewiesen' },
        },
        {
          typ: 'luecke',
          text: 'Ziel jeder Integrationspolitik muss es sein, gesellschaftliche {1} zu ermöglichen; anonymisierte Bewerbungen sollen zudem helfen, {2} auf dem Arbeitsmarkt abzubauen.',
          bank: ['Teilhabe', 'Diskriminierung', 'Anteilnahme', 'Herkunft'],
          loesungen: { 1: 'Teilhabe', 2: 'Diskriminierung' },
        },
        {
          typ: 'luecke',
          text: 'Wer die Voraussetzungen für die {1} erfüllt, muss seine bisherige {2} inzwischen nicht mehr aufgeben.',
          bank: ['Einbürgerung', 'Staatsbürgerschaft', 'Einwanderung', 'Herkunft'],
          loesungen: { 1: 'Einbürgerung', 2: 'Staatsbürgerschaft' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} der Anerkennungsverfahren gilt als Voraussetzung für eine gelingende {2} in den Arbeitsmarkt.',
          bank: ['Beschleunigung', 'Integration', 'Beschleuniger', 'Einbürgerung'],
          loesungen: { 1: 'Beschleunigung', 2: 'Integration' },
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung entspricht der Präzision, die ein sachlicher Diskussionsbeitrag verlangt? „___ profitiert nachweislich von den Kursangeboten.“',
          optionen: ['Ein erheblicher Teil der Zugewanderten', 'Jeder Ausländer', 'Die Migranten allesamt'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Aus der Sicht des Aufnahmelandes bezeichnet man den Zuzug von Menschen aus dem Ausland als ___.',
          optionen: ['Auswanderung', 'Zuwanderung', 'Abwanderung'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Pauschalurteile — in die eine wie in die andere Richtung — werden der Vielfalt der Lebenswege nicht ___.',
          optionen: ['gleich', 'recht', 'gerecht'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: [
            'Viele Pflegeheime sind auf ausländische Fachkräfte angewiesen.',
            'Viele Pflegeheime sind von ausländischen Fachkräften angewiesen.',
          ],
          loesung: 0,
          warum: 'Se dice **angewiesen sein auf** + acusativo; *von* es calco de «depender de» (que sí corresponde a *abhängig sein von*).',
        },
        {
          typ: 'korrektur',
          optionen: [
            'Sie hat letzte Woche eine Aufenthaltserlaubnis gefragt.',
            'Sie hat letzte Woche eine Aufenthaltserlaubnis beantragt.',
          ],
          loesung: 1,
          warum: '«Solicitar» un documento oficial es **beantragen**; *fragen* significa «preguntar».',
        },
        {
          typ: 'zuordnen',
          links: ['dem Fachkräftemangel', 'einen Integrationskurs', 'die doppelte Staatsbürgerschaft', 'den gesellschaftlichen Zusammenhalt', 'kulturelle Vielfalt als Bereicherung'],
          rechts: ['entgegenwirken', 'absolvieren', 'zulassen', 'stärken', 'begreifen'],
          loesung: {
            'dem Fachkräftemangel': 'entgegenwirken',
            'einen Integrationskurs': 'absolvieren',
            'die doppelte Staatsbürgerschaft': 'zulassen',
            'den gesellschaftlichen Zusammenhalt': 'stärken',
            'kulturelle Vielfalt als Bereicherung': 'begreifen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension und entscheide, welche Antwort der Einschätzung des Rezensenten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Die leisen Aufsteiger“ von Leyla Karaca',
      text: 'In ihrem Buch „Die leisen Aufsteiger“ begleitet die Dortmunder Soziologin Leyla Karaca zwölf Familien über drei Generationen. Der Befund ist ermutigend und ernüchternd zugleich: Die Enkel der einstigen Anwerbegeneration haben weit häufiger Abitur und Studium abgeschlossen als ihre Großeltern — doch bei der Wohnungssuche und im Bewerbungsverfahren stoßen viele von ihnen weiterhin auf Hürden, die mit ihrer Qualifikation nichts zu tun haben.\nKaracas Stärke liegt darin, dass sie Verallgemeinerungen konsequent meidet. Statt von „den“ Migranten zu sprechen, zeichnet sie Lebenswege nach, die sich kaum miteinander vergleichen lassen: den des Ingenieurs, dessen Diplom zehn Jahre lang nicht anerkannt wurde, ebenso wie den der Juristin, die ihre Herkunft im Beruf nie als Nachteil erlebt hat. Als Maßstab dient ihr durchgehend die Frage nach der Teilhabe — ein kluger Kunstgriff, der Erfolge und Defizite gleichermaßen sichtbar macht.\nWeniger überzeugend ist das Schlusskapitel. Dort fordert die Autorin eine ganze Reihe politischer Maßnahmen, ohne deren Kosten oder Umsetzbarkeit auch nur anzudeuten. Wer eine differenzierte Bestandsaufnahme der Einwanderungsgesellschaft sucht, wird das Buch dennoch mit Gewinn lesen.',
      items: [
        {
          typ: 'mc',
          frage: 'Welches Gesamtbild zeichnet Karaca laut Rezension von der dritten Generation?',
          optionen: [
            'Sie ist inzwischen in allen Lebensbereichen gleichgestellt.',
            'Ihre hohe Qualifikation schützt sie mittlerweile zuverlässig vor Benachteiligung.',
            'Ihr Bildungsaufstieg ist gelungen, Benachteiligungen sind jedoch nicht überwunden.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Rezensent lobt, dass Karaca die untersuchten Lebenswege auf ein gemeinsames Muster zurückführt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was bemängelt der Rezensent am Schlusskapitel?',
          optionen: [
            'Die Forderungen der Autorin seien zu zaghaft formuliert.',
            'Die Autorin lasse offen, was ihre Vorschläge kosten und ob sie sich verwirklichen lassen.',
            'Die Autorin wiederhole lediglich Ergebnisse der vorangehenden Kapitel.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Teilhabe dient der Autorin als Kriterium, um Fortschritte wie Mängel zu erfassen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Radiointerview mit der Leiterin einer Beratungsstelle für zugewanderte Fachkräfte. Entscheide, welche Antwort dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Moderator: Frau Demir, Sie leiten seit sechs Jahren eine Beratungsstelle für zugewanderte Fachkräfte in Leipzig. Woran scheitert die Anerkennung ausländischer Abschlüsse am häufigsten?\nExpertin: Anders als viele vermuten, nicht an mangelnder Qualifikation. Das größte Hindernis ist die Dauer der Verfahren. Im Durchschnitt warten unsere Ratsuchenden vierzehn Monate auf ihren Bescheid, nicht vier, wie es die Behörden einmal in Aussicht gestellt hatten.\nModerator: Was bedeutet diese Wartezeit für die Betroffenen?\nExpertin: Viele schlagen sich mit Aushilfsjobs durch. Eine Bauingenieurin hat anderthalb Jahre lang in einem Warenlager gearbeitet. Je länger eine solche Phase dauert, desto mehr Fachwissen geht verloren und desto schwerer fällt später der Wiedereinstieg.\nModerator: Seit dem vergangenen Jahr bieten Sie zusätzlich ein Mentoringprogramm an. Mit welchem Ergebnis?\nExpertin: Wir vermitteln den Zugewanderten eine Fachkraft aus demselben Beruf, die sie durch das Verfahren begleitet. Von den achtzig Teilnehmenden des ersten Jahrgangs haben inzwischen gut zwei Drittel eine Stelle, die ihrer Ausbildung entspricht. Beschleunigt hat das Mentoring die Verfahren allerdings nicht. Es hilft vor allem dabei, die Unterlagen vollständig einzureichen und berufliche Kontakte zu knüpfen.\nModerator: Und was fordern Sie von der Politik?\nExpertin: Nicht so sehr neue Gesetze als vielmehr zusätzliches Personal in den zuständigen Stellen. Solange dort Sachbearbeiter fehlen, läuft jede Erleichterung ins Leere. Integration ist keine Einbahnstraße, die Aufnahmegesellschaft muss ihren Teil eben auch leisten.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Worin sieht Frau Demir das größte Hindernis bei der Anerkennung ausländischer Abschlüsse?',
          optionen: [
            'In der unzureichenden Qualifikation vieler Antragstellender.',
            'In der langen Dauer der Verfahren.',
            'In unvollständigen Unterlagen der Antragstellenden.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Ratsuchenden der Beratungsstelle warten im Durchschnitt vier Monate auf ihren Bescheid.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Wirkung schreibt Frau Demir dem Mentoringprogramm zu?',
          optionen: [
            'Es hilft vor allem dabei, vollständige Unterlagen einzureichen und berufliche Kontakte aufzubauen.',
            'Es hat die Anerkennungsverfahren der Teilnehmenden spürbar verkürzt.',
            'Es hat sämtlichen Teilnehmenden des ersten Jahrgangs zu einer Stelle verholfen, die ihrer Ausbildung entspricht.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Nach Ansicht von Frau Demir bleiben gesetzliche Erleichterungen wirkungslos, solange es in den zuständigen Stellen an Personal fehlt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Achte auf ein sachliches Register, vermeide Verallgemeinerungen und verwende mindestens drei Ausdrücke aus dem Kernwortschatz.',
      aufgabe: 'In deiner Stadt sind die Integrationskurse seit Monaten überfüllt; viele Zugewanderte warten bis zu einem halben Jahr auf einen Platz. Schreibe an die Integrationsbeauftragte der Stadt.',
      punkte: [
        'Schildere die Situation und ihre Folgen für die Betroffenen.',
        'Erläutere, warum ein rascher Kursbeginn für Teilhabe und Arbeitsmarkt entscheidend ist.',
        'Schlage eine konkrete Maßnahme vor und bitte um eine Rückmeldung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Frau Nowak,\nals ehrenamtliche Sprachpatin wende ich mich mit einem dringenden Anliegen an Sie. Die Integrationskurse in unserer Stadt sind seit Monaten überfüllt; viele Zugewanderte warten bis zu einem halben Jahr auf einen Platz. Gerade in dieser Zeit geht wertvolle Motivation verloren, und manche nehmen notgedrungen Hilfstätigkeiten an, die weit unter ihrer Qualifikation liegen.\nDer Erwerb der Sprache ist jedoch der Schlüssel zu gesellschaftlicher Teilhabe und zur Anerkennung beruflicher Abschlüsse. Jede Verzögerung erschwert daher nicht nur die Integration der Betroffenen, sondern verschärft auch den Fachkräftemangel vor Ort.\nIch möchte Ihnen vorschlagen, zusätzliche Abendkurse in den Räumen der Volkshochschule einzurichten und pensionierte Lehrkräfte für die Überbrückung zu gewinnen. Über eine Rückmeldung würde ich mich sehr freuen.\nMit freundlichen Grüßen\nJonas Feldmann',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen Diskussionsbeitrag von etwa zwei Minuten. Sprich frei und zusammenhängend, bleibe sachlich und vermeide Verallgemeinerungen.',
      aufgabe: 'In einer Diskussionsrunde an deiner Volkshochschule wird die These vertreten: „Wer sich einbürgern lässt, sollte seine bisherige Staatsbürgerschaft aufgeben.“ Nimm in einem Diskussionsbeitrag dazu Stellung: Beziehe klar Position, begründe sie mit zwei Argumenten, gehe auf ein Gegenargument ein und schließe mit einem Fazit. Bleibe dabei sachlich und vermeide Verallgemeinerungen.',
      punkte: [
        'deine Position zur These',
        'zwei Argumente, möglichst mit einem Beispiel',
        'ein Gegenargument, das du aufgreifst und entkräftest',
        'ein kurzes Fazit',
      ],
      redemittel: [
        'Dieser These kann ich mich nicht anschließen, denn …',
        'Hinzu kommt, dass …',
        'Kritiker geben zu bedenken, dass …',
        'Diesen Einwand nehme ich ernst, er überzeugt mich aber nicht, weil …',
        'Alles in allem spricht vieles dafür, dass …',
      ],
      maxSekunden: 120,
      beispielLoesung: 'Dieser These kann ich mich nicht anschließen, und ich möchte kurz begründen, warum.\nErstens entspricht die doppelte Staatsbürgerschaft schlicht der Lebenswirklichkeit vieler Menschen. Wer seit zwanzig Jahren hier lebt und arbeitet, aber Eltern und Geschwister im Herkunftsland hat, fühlt sich eben beiden Ländern zugehörig. Ihn zu einer Entscheidung zu zwingen, hieße, einen Teil seiner Biografie für ungültig zu erklären.\nZweitens fördert die Einbürgerung die politische Teilhabe. Wer wählen darf, identifiziert sich stärker mit dem Land, in dem er lebt. Muss man dafür jedoch den alten Pass abgeben, verzichten viele auf die Einbürgerung — und bleiben dauerhaft von Wahlen ausgeschlossen. Das kann sich eine Einwanderungsgesellschaft meiner Ansicht nach nicht leisten.\nNun geben Kritiker zu bedenken, zwei Pässe könnten zu Loyalitätskonflikten führen. Diesen Einwand nehme ich ernst, er überzeugt mich aber nicht. Denn Zugehörigkeit zeigt sich doch im Alltag: darin, dass jemand die Sprache spricht, die Gesetze achtet und sich einbringt — und nicht darin, wie viele Pässe in der Schublade liegen.\nAlles in allem spricht also vieles dafür, die doppelte Staatsbürgerschaft zuzulassen. Entscheidend ist nicht der Pass, sondern die Frage, ob jemand gleichberechtigt am gesellschaftlichen Leben teilhat.',
    },
  ],
}
