// Lektion 16 · Modul Lesen — Überblick

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Lesen · 65 Minuten · 4 Teile'],
  h1: 'Modul Lesen — Überblick',
  lead: 'Vier Teile, 65 Minuten, 100 Punkte: Wer das Modul Lesen besteht, hat vorher nicht nur Deutsch gelernt, sondern auch eine Strategie — hier bekommst du sie.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du für jeden der vier Teile das Aufgabenformat, die Textsorte und die Fertigkeit, die dort gemessen wird.',
        'Du planst die 65 Minuten mit festen Zeitbudgets und weißt, in welcher Reihenfolge du die Teile bearbeitest.',
        'Du unterscheidest die drei Lesetechniken — Skimming, Scanning, detailliertes Lesen — und setzt pro Teil die richtige ein.',
        'Du erkennst die klassischen Fehler im Modul Lesen und hast für jeden ein Gegenmittel.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Sprache der Aufgabenstellungen',
      items: [
        { wort: 'die Aufgabe', kollokation: 'eine Aufgabe lösen / bearbeiten', es: 'tarea, ítem del examen' },
        { wort: 'die Aussage', kollokation: 'Welche Aussage entspricht dem Text?', es: 'afirmación' },
        { wort: 'die Anweisung', kollokation: 'die Anweisung genau lesen', es: 'instrucción' },
        { wort: 'zuordnen', kollokation: 'Aussagen den Texten zuordnen', es: 'asignar, emparejar' },
        { wort: 'entnehmen', kollokation: 'eine Information dem Text entnehmen', es: 'extraer (del texto)' },
        { wort: 'belegen', kollokation: 'eine Antwort mit einer Textstelle belegen', es: 'justificar, demostrar' },
        { wort: 'ankreuzen', kollokation: 'die richtige Lösung ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'die Lücke', kollokation: 'das passende Wort in die Lücke einsetzen', es: 'hueco' },
        { wort: 'der Abschnitt', kollokation: 'im zweiten Abschnitt des Textes', es: 'párrafo, sección' },
        { wort: 'die Textstelle', kollokation: 'die entscheidende Textstelle markieren', es: 'pasaje del texto' },
        { wort: 'sinngemäß', kollokation: 'sinngemäß wiedergeben', es: 'según el sentido, parafraseado' },
        { wort: 'übertragen', kollokation: 'die Lösungen auf den Antwortbogen übertragen', es: 'transferir, pasar a limpio' },
        { wort: 'zutreffen', kollokation: 'Was trifft auf den Autor zu?', es: 'ser aplicable, ser cierto' },
        { wort: 'der Distraktor', kollokation: 'auf einen Distraktor hereinfallen', es: 'opción trampa' },
      ],
      hinweis: 'Diese Wörter stehen in **jeder** Anweisung des Moduls. Wer sie erst am Prüfungstag entschlüsselt, verliert Minuten, die am Ende fehlen. ~~*Entnehmen* no es «entender»: es «sacar del texto» — la respuesta debe estar en el texto, no en tu conocimiento del mundo.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was das Modul misst — und was nicht',
      absaetze: [
        'Das Modul Lesen dauert **65 Minuten**, umfasst **vier Teile** und bringt **100 Punkte**; bestanden ist es ab **60**. Ein Wörterbuch ist nicht erlaubt — und wäre auch nutzlos, denn geprüft wird nicht, ob du jedes Wort kennst, sondern ob du einem anspruchsvollen Text **die richtige Information auf die richtige Art** entnimmst: mal das Gesamtbild, mal ein Detail, mal die Meinung hinter einer Formulierung.',
        'Die wichtigste Grundregel des Moduls: **Jede Antwort steht im Text.** Nicht in deinem Weltwissen, nicht in deiner eigenen Meinung. Wer bei einem Text über Elektromobilität aus eigener Überzeugung antwortet statt aus dem Text, produziert genau die Fehler, auf die die Distraktoren gebaut sind. ~~La trampa clásica: una opción que es verdad en el mundo real, pero que el texto no dice.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Teile im Überblick',
      kopf: ['Teil', 'Text & Format', 'Das misst er'],
      zeilen: [
        ['Teil 1', 'langer Sachtext (Artikel, Reportage) · Multiple-Choice-Aufgaben', 'Gesamt- und Detailverstehen: Hauptaussagen, Einzelinformationen, Autorenposition'],
        ['Teil 2', 'Text mit Wortlücken · passende Wörter aus einer Liste einsetzen', 'Strukturen: Konnektoren, Präpositionen, Nominalisierungen, Kollokationen'],
        ['Teil 3', 'Text mit fehlenden Sätzen · Sätze an der richtigen Stelle einsetzen', 'Textkohärenz: Verweise, Anschlüsse, roter Faden'],
        ['Teil 4', 'mehrere kurze Meinungstexte · Aussagen den Autoren zuordnen', 'selektives Lesen: Standpunkte erkennen, Paraphrasen durchschauen'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Zeitmanagement: 65 Minuten mit Plan',
      steps: [
        {
          badge: '5 Min',
          titel: 'Überblick und Puffer',
          text: 'Verschaffe dir zu Beginn in einer Minute einen __Überblick über alle vier Teile__ — Themen, Länge, gefühlte Schwierigkeit. Die restlichen vier Minuten sind dein Puffer am Ende: für unsichere Aufgaben und für das Übertragen der Lösungen.',
        },
        {
          badge: '20 Min',
          titel: 'Teil 1 — der lange Text',
          text: 'Der längste Text braucht das größte Budget und einen __frischen Kopf__. Mehr als 20 Minuten darf er trotzdem nicht bekommen: Wer sich hier festliest, bezahlt es in Teil 3 und 4.',
        },
        {
          badge: '10 Min',
          titel: 'Teil 2 — der Lückentext',
          text: 'Der kürzeste Teil, oft der planbarste: Die Lücken sind __grammatisch entscheidbar__ (Lektion 17). Zehn Minuten reichen — und wer schneller fertig ist, schenkt die Zeit an Teil 3 weiter.',
        },
        {
          badge: '2 × 15 Min',
          titel: 'Teil 3 und Teil 4',
          text: 'Je 15 Minuten. In beiden gilt die eiserne Regel: __Hänge nie an einer einzelnen Aufgabe.__ Markiere sie, arbeite weiter, komm im Puffer zurück. Eine offene Aufgabe kostet einen Punkt — fünf Minuten Grübeln kosten drei.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Drei Lesetechniken — und welche wohin gehört',
      absaetze: [
        '**Skimming** (überfliegendes Lesen) beantwortet die Frage *Worum geht es, und wie ist der Text gebaut?* — Überschrift, erster Absatz, erste Sätze der Absätze, letzter Absatz. **Scanning** (suchendes Lesen) jagt gezielt nach einem Signal: einem Namen, einer Zahl, einem Schlüsselwort aus der Aufgabe. **Detailliertes Lesen** entschlüsselt eine einzelne Textstelle Wort für Wort — inklusive Verneinungen, Einschränkungen und Ironie.',
        'Die Zuordnung: Teil 1 beginnt mit Skimming und endet pro Aufgabe im detaillierten Lesen der Belegstelle. Teil 2 und 3 verlangen detailliertes Lesen rund um die Lücke. Teil 4 lebt vom Scanning: Du suchst Positionen, nicht Wörter. **Wer alles gleich gründlich liest, liest falsch** — die Technik zu wechseln ist keine Schlamperei, sondern die geprüfte Kompetenz selbst.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Klassische Fehler und ihre Gegenmittel',
      kopf: ['Fehler', 'Gegenmittel'],
      zeilen: [
        ['Wort-für-Wort-Lesen von Anfang an', 'erst Skimming, dann gezielt in die Tiefe — die Aufgabe bestimmt die Technik'],
        ['Antwort aus dem Weltwissen statt aus dem Text', 'zu jeder Antwort die Belegstelle markieren — keine Stelle, keine Antwort'],
        ['Festbeißen an einer schweren Aufgabe', 'Zeitbudget pro Teil, markieren, weitergehen, im Puffer zurückkommen'],
        ['unbekannte Wörter als Blockade', 'aus Kontext und Wortbildung erschließen — kein einzelnes Wort entscheidet das Modul'],
        ['Aufgaben leer lassen', 'am Ende immer ankreuzen: Es gibt keine Minuspunkte, Raten kostet nichts'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Aufgabensprache entschlüsseln',
      kicker: 'Anweisung',
      titel: 'Was die Aufgabenstellung wirklich verlangt',
      items: [
        { text: '**„Welche Aussage entspricht dem Text?“** — Gesucht ist die Aussage, die der Text *belegt*, nicht die, die plausibel klingt.', gl: '— entsprechen = coincidir con lo que dice el texto' },
        { text: '**„Ordnen Sie die Aussagen den Personen zu.“** — Jede Aussage gehört zu genau einer Person; manche Personen können mehrfach vorkommen.', gl: '' },
        { text: '**„Was ist mit dem Ausdruck ==im Nebel stochern== gemeint?“** — Gefragt ist die Bedeutung *im Kontext*, nicht die wörtliche Übersetzung.', gl: '' },
        { text: '**„Ergänzen Sie die fehlenden Wörter aus der Liste.“** — Die Liste enthält mehr Wörter als Lücken: Nicht alles wird gebraucht.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Skimming',
      titel: 'Der erste Zugriff auf einen Text',
      items: [
        { text: 'Überschrift: **„Vier Tage arbeiten, fünf bezahlt bekommen?“** → Thema Arbeitszeitmodell, das Fragezeichen kündigt eine *kontroverse* Behandlung an.', gl: '' },
        { text: 'Erster Satz eines Absatzes: **„Kritiker halten dagegen, dass …“** → Dieser Absatz bringt die Gegenposition; Details erst lesen, wenn eine Aufgabe hierher zeigt.', gl: '' },
        { text: 'Letzter Absatz beginnt mit **„Unterm Strich zeigt sich …“** → Hier steht das Fazit — die typische Belegstelle für die Frage nach der Autorenposition.', gl: '~~En el Skimming lees la arquitectura del texto, no su contenido.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Scanning',
      titel: 'Gezielt suchen statt lesen',
      items: [
        { text: 'Aufgabe fragt nach **Kosten** → Du scannst nach Zahlen, €-Angaben, *Prozent*, *Ausgaben*, *finanzieren* — und liest erst dort genau.', gl: '' },
        { text: 'Aufgabe fragt nach **einer Studie** → Signalwörter: *Untersuchung, Befragung, Forscherteam, laut, zufolge*.', gl: '' },
        { text: 'Aufgabe nennt **Frau Weber** → Namen sind die schnellsten Anker im Text; von dort aus liest du den umliegenden Satz im Detail.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Distraktoren',
      titel: 'So sehen die Fallen aus',
      items: [
        { text: 'Die Option **wiederholt Wörter aus dem Text**, verdreht aber die Aussage: Text: *„Die Nachfrage stieg trotz höherer Preise.“* — Falle: *„Die Nachfrage stieg wegen höherer Preise.“*', gl: '' },
        { text: 'Die Option **verallgemeinert mit Extremwörtern**: Text: *„viele Betriebe“* — Falle: *„==alle== Betriebe“*. *Immer, nie, ausschließlich* in einer Option sind ein Warnsignal.', gl: '' },
        { text: 'Die Option **stimmt in der Welt, aber nicht im Text**: Dass Homeoffice Pendelzeit spart, mag wahr sein — wenn der Text es nicht sagt, ist die Option falsch.', gl: '' },
        { text: 'Die Option **zitiert eine referierte Meinung als Autorenmeinung**: *„Oft heißt es, X sei überflüssig“* ist nicht die Position des Autors — meist folgt ein *aber*.', gl: '~~El autor cita la opinión ajena para refutarla — no la comparte.~~' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Zu welchem Teil des Moduls Lesen passt die Beschreibung — Teil 1, 2, 3 oder 4?',
      aufgaben: [
        'Du liest vier Kommentare zum Thema Tempolimit und entscheidest, wer die Aussage „Verbote allein ändern kein Verhalten“ sinngemäß vertritt.',
        'In einem Artikel über Schlafforschung fehlen acht Wörter; daneben steht eine Liste mit zwölf Wörtern.',
        'Aus einem Reportagetext wurden ganze Sätze entfernt; du entscheidest, welcher Satz in welche Lücke gehört.',
        'Zu einem langen Artikel über Stadtplanung kreuzt du bei mehreren Aufgaben je eine von drei Optionen an.',
        'Die entscheidende Kompetenz dieses Teils ist es, Paraphrasen zu durchschauen: Die Aussagen wiederholen nie die Wörter der Texte.',
      ],
      loesungen: [
        '**Teil 4** — Zuordnung von Aussagen zu Meinungstexten.',
        '**Teil 2** — Lückentext mit Wortliste; es bleiben Wörter übrig.',
        '**Teil 3** — Satzeinsetzung; geprüft wird Textkohärenz.',
        '**Teil 1** — langer Sachtext mit Multiple-Choice-Aufgaben.',
        '**Teil 4** — die Aussagen sind sinngemäße Umformulierungen, keine Zitate.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Welche Lesetechnik wählst du — Skimming, Scanning oder detailliertes Lesen? Begründe kurz.',
      aufgaben: [
        'Du hast Teil 1 aufgeschlagen und noch keine Aufgabe gelesen.',
        'Eine Aufgabe fragt: „In welchem Jahr wurde das Pilotprojekt gestartet?“',
        'Zwei Optionen unterscheiden sich nur darin, ob der Autor etwas „ablehnt“ oder „für verfrüht hält“.',
        'In Teil 4 suchst du, welcher der vier Autoren sich zu den Kosten äußert.',
        'Du hast eine Lücke in Teil 3 gefunden und zwei Kandidatensätze in der engeren Wahl.',
      ],
      loesungen: [
        '**Skimming** — erst Thema und Textaufbau erfassen, dann zu den Aufgaben.',
        '**Scanning** — nach Jahreszahlen suchen; Zahlen sind die schnellsten Anker.',
        '**Detailliertes Lesen** — der Unterschied liegt in einer Nuance der Belegstelle; hier zählt jedes Wort, besonders Einschränkungen wie *noch*, *bislang*, *grundsätzlich*.',
        '**Scanning** — Signalwörter des Themas Kosten (*Preis, finanzieren, Budget*) in allen vier Texten suchen.',
        '**Detailliertes Lesen** — die Sätze vor und nach der Lücke genau prüfen: Verweise, Anschlüsse, Logik.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe deinen persönlichen **Prüfungsfahrplan** für das Modul Lesen: Reihenfolge der Teile, Zeitbudget pro Teil, deine zwei größten Risiken und je ein Gegenmittel. Nutze vollständige Sätze — der Fahrplan ist zugleich eine Schreibübung im Nominalstil.',
      loesung: '**Mögliche Lösung** (dein Plan darf abweichen — entscheidend ist, dass Budgets und Gegenmittel konkret sind):\n*Nach einem kurzen Überblick über alle vier Teile beginne ich mit Teil 2, weil er mir bei geringem Zeitaufwand sichere Punkte bringt (10 Minuten). Anschließend bearbeite ich Teil 3 und Teil 4 (je 15 Minuten) und zum Schluss den langen Teil 1 (20 Minuten). Mein größtes Risiko ist das Festlesen an schwierigen Textstellen; dagegen hilft das konsequente Markieren und Weitergehen. Mein zweites Risiko ist das Antworten aus dem Weltwissen; dagegen hilft die Regel, jede Antwort mit einer Textstelle zu belegen. Die letzten fünf Minuten reserviere ich für offene Aufgaben und die Kontrolle des Antwortbogens.*\n~~También es válido el orden 1→2→3→4: lo importante es que la suma dé 65 y que ningún Teil quede sin presupuesto.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 1 · Multiple-Choice',
      titel: 'Mini-Aufgabe · Ein Absatz, drei Fragen',
      anweisung: 'So fühlt sich Teil 1 an — hier im Kleinformat. Lies den Absatz und kreuze bei jeder Aufgabe die richtige Option an. Arbeite mit Belegstellen: Zu jeder Antwort muss es eine Textstelle geben.',
      absaetze: [
        'Die Vier-Tage-Woche galt lange als Fantasie überarbeiteter Angestellter — inzwischen liegt eine Reihe von Pilotprojekten vor, deren Ergebnisse aufhorchen lassen. In mehreren Unternehmen blieb die Produktivität trotz reduzierter Arbeitszeit stabil, in einigen stieg sie sogar; zugleich gingen Krankmeldungen und Kündigungen spürbar zurück. Von einer Patentlösung zu sprechen, wäre dennoch verfrüht. Denn die Betriebe, die sich an den Projekten beteiligten, waren überwiegend Dienstleister mit flexiblen Abläufen — ob sich die Befunde auf Produktion, Pflege oder Gastronomie übertragen lassen, ist offen. Zudem berichten manche Beschäftigte von einer Verdichtung der Arbeit: Was früher in fünf Tagen erledigt wurde, muss nun in vier passen. Wer die Vier-Tage-Woche einführen will, sollte deshalb weniger fragen, ob sie funktioniert, sondern unter welchen Bedingungen.',
      ],
      optionen: [
        '1 · Was zeigen die Pilotprojekte? — a) Die Produktivität sank in den meisten Betrieben leicht. — b) Die Produktivität blieb stabil oder stieg, während Krankmeldungen zurückgingen. — c) Krankmeldungen und Kündigungen nahmen zu.',
        '2 · Warum warnt der Autor vor voreiligen Schlüssen? — a) Die beteiligten Betriebe sind nicht repräsentativ für alle Branchen. — b) Die Projekte wurden vorzeitig abgebrochen. — c) Die Beschäftigten lehnten das Modell mehrheitlich ab.',
        '3 · Welche Position vertritt der Autor am Ende? — a) Die Vier-Tage-Woche funktioniert grundsätzlich nicht. — b) Die entscheidende Frage sind die Bedingungen der Einführung. — c) Die Vier-Tage-Woche sollte überall sofort eingeführt werden.',
      ],
      loesungen: [
        '1 **b** — Belegstelle: *„blieb die Produktivität … stabil, in einigen stieg sie sogar; zugleich gingen Krankmeldungen … zurück“*. Option a verdreht die Aussage, Option c kehrt sie um.',
        '2 **a** — Belegstelle: *„überwiegend Dienstleister mit flexiblen Abläufen — ob sich die Befunde … übertragen lassen, ist offen“*. Die Optionen b und c stehen nirgends im Text — plausibel klingen reicht nicht.',
        '3 **b** — Belegstelle: der Schlusssatz (*„weniger fragen, ob sie funktioniert, sondern unter welchen Bedingungen“*). Der Autor lehnt nicht ab (a) und empfiehlt keine flächendeckende Einführung (c) — er differenziert.',
      ],
      kommentar: 'Beachte die Reihenfolge: Die Aufgaben folgen dem Textverlauf — Frage 1 zielt auf den Anfang, Frage 3 auf das Ende. Das gilt im echten Teil 1 fast immer und spart dir die Suche.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lies in Teil 1 **zuerst die Aufgaben, dann den Text** — so weißt du beim Skimming schon, wo sich detailliertes Lesen lohnt. Und trainiere das Modul immer **mit laufender Uhr**: 65 Minuten sind eine sportliche, aber machbare Vorgabe — nur für den, der es unter Zeitdruck geübt hat.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['4 Teile, 65 Minuten, 100 Punkte', 'bestanden ab 60 — kein Wörterbuch'],
        ['Jede Antwort steht im Text', 'Belegstelle markieren; Weltwissen ist kein Beleg'],
        ['Feste Zeitbudgets', 'Teil 1 ≤ 20 Min · Teil 2 ≤ 10 · Teil 3/4 je 15 · 5 Min Puffer'],
        ['Technik pro Teil wechseln', 'Skimming → Scanning → detailliertes Lesen'],
        ['Nie leer lassen', 'keine Minuspunkte — am Ende immer ankreuzen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann für jeden der vier Teile Format, Textsorte und geprüfte Fertigkeit nennen.',
        'Ich habe einen Zeitplan für die 65 Minuten und weiß, in welcher Reihenfolge ich arbeite.',
        'Ich wähle bewusst zwischen Skimming, Scanning und detailliertem Lesen.',
        'Ich erkenne die typischen Distraktoren — Extremwörter, verdrehte Logik, Weltwissen-Fallen — und belege jede Antwort mit einer Textstelle.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt steigen wir in die Teile ein — und zwar dort, wo Strategie am schnellsten Punkte bringt: beim **Lückentext**. In der nächsten Lektion lernst du, jede Lücke grammatisch zu klassifizieren und die Wortliste systematisch auszudünnen, bis nur noch die richtige Lösung übrig ist.',
    },
  ],
}
