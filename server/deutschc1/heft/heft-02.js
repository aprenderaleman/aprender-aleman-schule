// Übungsheft C1 — Lektion 02: Diagnose C1 — Standortbestimmung
//
// Diagnoseheft: Teil 1 sondiert die Strukturen von Block 1 (Lektionen 3-15).
// Die Auswertungstabelle der Lektion ordnet jede Struktur ihrer Lektion zu;
// die warum-Texte der Korrektur-Aufgaben verweisen ebenfalls darauf.
export default {
  lektion: 2,
  titel: 'Übungsheft — Diagnose C1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Diagnoseteil: Löse alle Aufgaben ohne Hilfsmittel und notiere, bei welchen Strukturen du gezögert oder dich geirrt hast. Gleiche deine Notizen anschließend mit der Auswertungstabelle der Lektion ab.',
      items: [
        {
          typ: 'luecke',
          text: '{1} der stark gestiegenen Nachfrage wurden die Preise erhöht; {2} aller Proteste hielt der Hersteller an seiner Entscheidung fest.',
          bank: ['Aufgrund', 'Ungeachtet', 'Obwohl', 'Anstelle'],
          loesungen: { 1: 'Aufgrund', 2: 'Ungeachtet' },
        },
        {
          typ: 'mc',
          frage: 'Das Formular ___ sich in wenigen Minuten online ausfüllen.',
          optionen: ['kann', 'lässt', 'wird'],
          loesung: 1,
          warum: 'sich lassen + Infinitiv als Passiversatz → Lektion 4',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Ministerin betonte, die Lage sei stabil und die Zahlen sprächen für sich.', 'Die Ministerin betonte, die Lage ist stabil und die Zahlen sprechen für sich.'],
          loesung: 0,
          warum: 'En el estilo indirecto escrito se usa el **Konjunktiv I** (*sei*); si coincide con el indicativo, se recurre al Konjunktiv II (*sprächen*). → Lektion 5',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich von dem Termin gewusst hätte, hätte ich selbstverständlich gekommen.', 'Wenn ich von dem Termin gewusst hätte, wäre ich selbstverständlich gekommen.'],
          loesung: 1,
          warum: '*kommen* forma el perfecto con **sein** → *wäre gekommen*, aunque en español digas «habría venido». → Lektion 6',
        },
        {
          typ: 'mc',
          frage: 'Die Ergebnisse der ___ Studie überraschten selbst die Fachwelt.',
          optionen: ['im vergangenen Jahr veröffentlichte', 'im vergangenen Jahr veröffentlicht', 'im vergangenen Jahr veröffentlichten'],
          loesung: 2,
          warum: 'erweitertes Partizipialattribut mit Adjektivendung → Lektion 7',
        },
        {
          typ: 'korrektur',
          optionen: ['Nach langer Diskussion hat der Vorstand endlich eine Entscheidung getroffen.', 'Nach langer Diskussion hat der Vorstand endlich eine Entscheidung genommen.'],
          loesung: 0,
          warum: 'Calco de «tomar una decisión»: en alemán es **eine Entscheidung treffen**. → Lektion 8 (Funktionsverbgefüge) y Lektion 15 (Kollokationen)',
        },
        {
          typ: 'korrektur',
          optionen: ['Trotz dem schlechten Wetter fand die Veranstaltung im Freien statt.', 'Trotz des schlechten Wetters fand die Veranstaltung im Freien statt.'],
          loesung: 1,
          warum: 'En registro escrito, *trotz* rige **genitivo** (*des schlechten Wetters*); *trotz dem* es coloquial y en C1 resta puntos. → Lektion 9',
        },
        {
          typ: 'luecke',
          text: '{1} ehrlicher man seine Schwächen einschätzt, {2} gezielter kann man an ihnen arbeiten.',
          bank: ['Je', 'desto', 'als', 'wie'],
          loesungen: { 1: 'Je', 2: 'desto' },
        },
        {
          typ: 'mc',
          frage: 'Samuel ist immer noch nicht da — er ___ den Zug verpasst haben.',
          optionen: ['dürfte', 'musste', 'konnte'],
          loesung: 0,
          warum: 'Modalverb in subjektiver Bedeutung (Vermutung) → Lektion 13',
        },
        {
          typ: 'mc',
          frage: 'Am Ende bestand sie alle vier Module, ___ ohnehin niemand ernsthaft gezweifelt hatte.',
          optionen: ['woran', 'an dem', 'was'],
          loesung: 0,
          warum: 'Relativsatz, der sich auf den ganzen Satz bezieht, mit Präposition → *wo(r)* + Präposition (*woran*) → Lektion 12',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment und entscheide, welche Lösung dem Text entspricht.',
      textTitel: 'Essayfragment: Die bequeme Illusion des Verstehens',
      text: 'Wer eine Fremdsprache lernt, neigt zu einer eigentümlichen Form der Selbsttäuschung. Weil wir einen Text mühelos verstehen, glauben wir, die darin verwendeten Strukturen auch zu beherrschen. Doch zwischen Erkennen und Produzieren klafft eine Lücke, die sich erst zeigt, wenn wir selbst schreiben oder sprechen müssen. Eine ehrliche Standortbestimmung ist deshalb unbequem: Sie konfrontiert uns mit Schwächen, die wir lieber übersehen würden. Gerade auf fortgeschrittenem Niveau ist dieser Befund allerdings kein Grund zur Entmutigung. Die Anforderungen der Stufe C1 bestehen weniger in neuer Grammatik als in Präzision und Registerbewusstsein — also in Fertigkeiten, die sich durch gezielte Übung vergleichsweise rasch entwickeln lassen. Entscheidend ist, die eigene Leistung nicht an Gefühlen, sondern an überprüfbaren Kriterien zu messen: Habe ich das treffende Verb gewählt? Sitzt die Kollokation? Passt der Ton zum Adressaten? Wer sich diese Fragen regelmäßig stellt, erkennt Handlungsbedarf früh genug. Nichts wäre verfehlter, als die Selbsteinschätzung einmal vorzunehmen und sie dann für endgültig zu halten. Sie ist vielmehr eine Momentaufnahme, die man in regelmäßigen Abständen überprüfen und korrigieren sollte.',
      items: [
        {
          typ: 'mc',
          frage: 'Worin besteht laut dem Text die Selbsttäuschung vieler Lernender?',
          optionen: ['Sie unterschätzen ihre Fortschritte beim Schreiben.', 'Sie halten das Verstehen einer Struktur für einen Beweis, dass sie sie aktiv beherrschen.', 'Sie verwechseln Präzision mit Registerbewusstsein.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Dem Autor zufolge verlangt die Stufe C1 vor allem das Erlernen zahlreicher neuer Grammatikregeln.', loesung: false },
        {
          typ: 'mc',
          frage: 'Woran sollte man die eigene Leistung dem Text nach messen?',
          optionen: ['am eigenen Sprachgefühl', 'am Urteil anderer Lernender', 'an nachprüfbaren Kriterien wie Wortwahl, Kollokation und Ton'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Autor empfiehlt, die Selbsteinschätzung in gewissen Abständen zu wiederholen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einem Podcast über das Sprachenlernen. Entscheide, welche Lösung dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Moderatorin: Willkommen zu einer neuen Folge unseres Podcasts über das Sprachenlernen. Mein Gast ist heute der Lernberater Paul Winter. Herr Winter, wie gut schätzen Fortgeschrittene ihr eigenes Deutsch ein?\nExperte: Erstaunlich ungenau. In meinen Beratungen bitte ich alle, sich zuerst selbst einzuschätzen, und vergleiche das dann mit einem Test. Beim Schreiben überschätzen sich rund zwei Drittel, beim Hören dagegen unterschätzen sich die meisten.\nModeratorin: Woran liegt das?\nExperte: Beim Schreiben bemerkt man die eigenen Lücken nicht, solange niemand korrigiert. Beim Hören bleibt dagegen jedes unverstandene Wort im Gedächtnis, und das verunsichert.\nModeratorin: Was raten Sie konkret?\nExperte: Früher habe ich empfohlen, täglich ein Lerntagebuch zu führen. Davon bin ich abgekommen, weil kaum jemand durchhält. Heute empfehle ich etwas anderes: Einmal pro Woche nimmt man sich drei Minuten lang beim freien Sprechen auf und hört die Aufnahme erst am nächsten Tag an.\nModeratorin: Warum erst am nächsten Tag?\nExperte: Weil man mit Abstand nüchterner urteilt. Man notiert höchstens zwei Schwächen, nicht zehn, und arbeitet eine Woche lang nur daran.\nModeratorin: Und wann zeigen sich Fortschritte?\nExperte: Nach etwa sechs Wochen, wenn man die erste Aufnahme mit der neuesten vergleicht. Dieser Vergleich motiviert mehr als jede Note.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Was beobachtet Herr Winter, wenn er Selbsteinschätzung und Testergebnis vergleicht?',
          optionen: ['Die meisten überschätzen ihr Hörverstehen.', 'Rund zwei Drittel überschätzen ihre Schreibfertigkeit.', 'Etwa ein Drittel schätzt sich in allen Fertigkeiten zutreffend ein.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Herr Winter rät nach wie vor dazu, jeden Tag ein Lerntagebuch zu führen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann soll man sich die eigene Aufnahme anhören?',
          optionen: ['unmittelbar nach dem Sprechen', 'erst nach einer Woche', 'am folgenden Tag'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Pro Aufnahme soll man sich nur wenige Schwächen notieren und sich eine Woche lang auf sie beschränken.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreibdiagnose: Verfasse in höchstens 15 Minuten und ohne Hilfsmittel eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Prüfe deinen Text danach mit der Checkliste im Modelltext der Lektion.',
      aufgabe: 'Fasse die Kernaussage des Essayfragments aus Teil 2 in eigenen Worten zusammen und nimm anschließend begründet Stellung dazu.',
      punkte: [
        'Gib die zentrale These des Autors knapp und in eigenen Worten wieder.',
        'Beurteile, ob deine eigene Lernerfahrung seine Einschätzung bestätigt.',
        'Nenne eine konkrete Konsequenz für deine Prüfungsvorbereitung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Autor vertritt die These, dass Lernende ihr Können häufig überschätzen, weil sie das Verstehen einer Struktur mit ihrer aktiven Beherrschung verwechseln. Eine ehrliche Standortbestimmung sei zwar unbequem, auf C1-Niveau aber lohnend, da es vor allem um Präzision und Registerbewusstsein gehe. Diese Einschätzung teile ich weitgehend. Deutsche Zeitungsartikel lese ich ohne größere Schwierigkeiten, doch sobald ich selbst eine formelle Nachricht verfasse, greife ich auf Allerweltswörter wie „machen“ zurück. Allerdings halte ich Gefühle nicht für gänzlich wertlos: Unsicherheit ist oft ein erster Hinweis auf eine Lücke. Für meine Vorbereitung ziehe ich daraus eine klare Konsequenz: Ich werde meine Texte regelmäßig anhand fester Kriterien überprüfen und meine Selbsteinschätzung alle vier Wochen aktualisieren.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprechdiagnose: Halte ohne Notizen einen Kurzvortrag von etwa zwei Minuten. Achte auf einen klaren Aufbau und auf präzise Wortwahl statt Allerweltswörtern.',
      aufgabe: 'Deine Lernberaterin bittet dich um eine mündliche Standortbestimmung. Stell in einem frei gehaltenen Kurzvortrag von etwa zwei Minuten dar, wo du mit deinem Deutsch derzeit stehst. Gliedere ihn in Stärke, Schwäche und Konsequenz und achte auf präzise Wortwahl statt Allerweltswörtern.',
      punkte: [
        'Beschreibe eine Fertigkeit, die du bereits sicher beherrschst, und belege das mit einem Beispiel.',
        'Benenne deine größte Schwäche und erkläre, woran du sie erkennst.',
        'Leite daraus ab, wo Handlungsbedarf besteht und wie du konkret vorgehen willst.',
      ],
      redemittel: ['Zu meinen Stärken zählt …', 'Deutlich schwerer fällt es mir, …', 'Das merke ich vor allem daran, dass …', 'Daraus ergibt sich für mich, dass …'],
      maxSekunden: 120,
      beispielLoesung: 'Ich möchte kurz darstellen, wo ich mit meinem Deutsch im Moment stehe. Zu meinen Stärken zählt eindeutig das Leseverstehen. Ich lese regelmäßig deutsche Zeitungen, und selbst bei längeren Artikeln über Politik oder Wirtschaft verstehe ich in der Regel auch das, was nur zwischen den Zeilen steht. Neulich habe ich zum Beispiel einen Kommentar zur Rentenreform gelesen und konnte ihn anschließend einer Kollegin ohne Mühe zusammenfassen. Deutlich schwerer fällt es mir, mich beim Sprechen differenziert auszudrücken. Das merke ich vor allem daran, dass ich immer wieder zu denselben Allerweltswörtern greife: Bei mir ist alles „gut“, „wichtig“ oder „interessant“, und ständig „mache“ ich etwas. Außerdem wechsle ich das Register nicht sicher genug. In einer Besprechung mit meiner Chefin rede ich oft genauso wie mit meinen Freunden, und das wirkt schnell unpassend. Daraus ergibt sich für mich ein klarer Handlungsbedarf. Ich muss nicht in erster Linie neue Grammatik lernen, sondern an Präzision und an festen Verbindungen arbeiten. Konkret habe ich mir vorgenommen, jede Woche zehn Kollokationen zu einem Thema zu lernen und sie sofort in einem kurzen freien Vortrag anzuwenden. Nach vier Wochen überprüfe ich meine Selbsteinschätzung noch einmal, und dann sehe ich, ob die Lücke kleiner geworden ist.',
    },
  ],
}
