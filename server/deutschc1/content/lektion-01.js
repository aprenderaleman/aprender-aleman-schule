// Lektion 01 · Das Goethe-Zertifikat C1 im Überblick
//
// Bloque 0 · Einführung — Orientierungslektion: Aufbau der Prüfung,
// Bewertungssystem, Prüfungssprache und Vorbereitungsplanung.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau C1', 'Prüfungsrelevanz: Alle vier Module'],
  h1: 'Das Goethe-Zertifikat C1 im Überblick',
  lead: 'Bevor die Vorbereitung beginnt: Wie ist die Prüfung aufgebaut, wie wird bewertet, was verlangen die Aufgabenstellungen — und wie plant man den Weg zum Bestehen?',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du die vier Module mit Dauer, Teilen und Aufgabentypen — und weißt, was dich in jedem erwartet.',
        'Du verstehst das Bewertungssystem: 100 Punkte pro Modul, Bestehensgrenze bei 60, Module einzeln ablegbar und wiederholbar.',
        'Du deutest die typischen Arbeitsanweisungen der Prüfung sicher — vom „Ordnen Sie zu“ bis zum „Nehmen Sie Stellung“.',
        'Du entwirfst einen ersten Vorbereitungsplan entlang der fünf Blöcke dieses Kurses.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Sprache rund um die Prüfung',
      items: [
        { wort: 'das Modul', kollokation: 'ein Modul einzeln ablegen', es: 'módulo (parte independiente del examen)' },
        { wort: 'der Prüfungsteil', kollokation: 'der anspruchsvollste Prüfungsteil', es: 'parte de la prueba' },
        { wort: 'die Fertigkeit', kollokation: 'die vier Fertigkeiten getrennt prüfen', es: 'destreza' },
        { wort: 'die Bewertung', kollokation: 'eine Bewertung nach festen Kriterien', es: 'evaluación, calificación' },
        { wort: 'die Bestehensgrenze', kollokation: 'die Bestehensgrenze liegt bei 60 Punkten', es: 'puntuación mínima para aprobar' },
        { wort: 'bestehen', kollokation: 'ein Modul knapp bestehen', es: 'aprobar' },
        { wort: 'ablegen', kollokation: 'eine Prüfung ablegen', es: 'presentarse a, realizar (un examen)' },
        { wort: 'die Zulassung', kollokation: 'die Zulassung zur Prüfung', es: 'admisión' },
        { wort: 'die Anmeldung', kollokation: 'die Anmeldung beim Prüfungszentrum', es: 'inscripción' },
        { wort: 'der Prüfungstermin', kollokation: 'einen Prüfungstermin wählen', es: 'fecha de examen, convocatoria' },
        { wort: 'das Prüfungszentrum', kollokation: 'sich an ein Prüfungszentrum wenden', es: 'centro examinador' },
        { wort: 'die Aufgabenstellung', kollokation: 'die Aufgabenstellung genau lesen', es: 'enunciado, instrucciones' },
        { wort: 'die Wiederholung', kollokation: 'die Wiederholung eines einzelnen Moduls', es: 'repetición' },
        { wort: 'das Zeugnis', kollokation: 'ein Zeugnis ausstellen lassen', es: 'certificado, diploma' },
      ],
      hinweis: 'Merke dir die Verben als Paar: eine Prüfung __ablegen__ (= sie machen) und eine Prüfung __bestehen__ (= erfolgreich sein). ~~«Aprobar» es bestehen — nunca *probieren* ni *aprobieren*. Y «presentarse a un examen» no es *sich präsentieren*, sino eine Prüfung ablegen.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was das Zertifikat nachweist',
      absaetze: [
        'Das Goethe-Zertifikat C1 bescheinigt eine **selbstständige, souveräne Sprachverwendung** auf der Stufe C1 des Gemeinsamen Europäischen Referenzrahmens (GER): Du verstehst anspruchsvolle, längere Texte auch dort, wo Bedeutungen nur **implizit** mitschwingen, du drückst dich spontan und fließend aus, ohne erkennbar nach Worten suchen zu müssen, und du gebrauchst die Sprache **wirksam und flexibel** im gesellschaftlichen, beruflichen und akademischen Leben.',
        'In der Praxis öffnet das Zertifikat vor allem zwei Türen: die **Zulassung zum Studium** an deutschsprachigen Hochschulen und den Nachweis qualifizierter Sprachkenntnisse im Beruf — etwa bei der Anerkennung medizinischer oder technischer Abschlüsse. Geprüft werden **vier Fertigkeiten getrennt**: Lesen, Hören, Schreiben und Sprechen. Jede Fertigkeit ist ein eigenes Modul mit eigener Bewertung und eigenem Ergebnis. ~~Cuatro exámenes independientes bajo un mismo techo — esa es la idea clave del sistema modular.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Module',
      kopf: ['Modul', 'Zeit', 'Format'],
      zeilen: [
        ['Lesen', '65 Min', '4 Teile — langer Text mit Multiple-Choice, Lückentext, Satzeinsetzung, Zuordnung von Aussagen zu Autoren'],
        ['Hören', 'ca. 40 Min', '4 Teile — Podcast, Interview, Diskussion, Vortrag; Teil 1–3 hörst du nur einmal, den Vortrag in Teil 4 zweimal'],
        ['Schreiben', '75 Min', '2 Aufgaben — Diskussionsbeitrag (~230 Wörter) + formelle Nachricht (~120 Wörter)'],
        ['Sprechen', 'ca. 15 Min', 'Paarprüfung — Vortrag mit Nachfragen + Diskussion mit der Partnerin oder dem Partner'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Das Bewertungssystem',
      steps: [
        {
          badge: '100 / 60',
          titel: 'Punkte und Bestehensgrenze',
          text: 'Jedes Modul zählt __100 Punkte__; bestanden ist es ab __60 Punkten__ (60 %). Es gibt keine Gesamtnote über alle Module hinweg — jedes Ergebnis steht für sich.',
        },
        {
          badge: 'modular',
          titel: 'Module einzeln ablegen',
          text: 'Die vier Module lassen sich __getrennt ablegen und einzeln wiederholen__. Wer drei besteht und eines nicht, wiederholt nur dieses eine — die bestandenen Ergebnisse bleiben gültig.',
        },
        {
          badge: 'Kriterien',
          titel: 'Wie Schreiben und Sprechen bewertet werden',
          text: 'Lesen und Hören werden objektiv ausgewertet: richtig oder falsch. Die produktiven Module bewerten geschulte Prüfende nach vier Kriterien: __Erfüllung__ der Aufgabe, __Kohärenz__, __Wortschatz__ und __Strukturen__. Diese vier Wörter begleiten dich durch den ganzen Kurs.',
        },
        {
          badge: 'digital',
          titel: 'Digitales Format',
          text: 'Die Prüfung wird zunehmend __am Computer__ abgelegt: Lesen und Hören per Klick, Schreiben per Tastatur. Nur das Sprechen bleibt ein persönliches Gespräch mit zwei Prüfenden.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Von der Anmeldung bis zum Zeugnis',
      absaetze: [
        'Die **Zulassung** setzt kein bestimmtes Vorzeugnis voraus — ein B2-Zertifikat musst du nicht nachweisen; empfohlen wird lediglich ein Mindestalter von 16 Jahren. Die **Anmeldung** erfolgt direkt bei einem Prüfungszentrum, also einem Goethe-Institut oder einem seiner Kooperationspartner. Achte auf die Fristen: Beliebte Prüfungstermine sind oft Wochen im Voraus ausgebucht.',
        'Am Prüfungstag brauchst du ein **gültiges Ausweisdokument** — dasselbe, mit dem du dich angemeldet hast. Nach der Prüfung erhältst du für jedes Modul ein eigenes Ergebnis und auf Wunsch ein **Zeugnis**; nicht bestandene Module wiederholst du zu einem späteren Prüfungstermin, ohne die anderen erneut ablegen zu müssen.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Der Weg durch diesen Kurs',
      absaetze: [
        'Der Kurs folgt der Logik der Prüfung. Nach der **Einführung** (Lektionen 1–2) konsolidiert Block 1 (Lektionen 3–15) die **sprachlichen Strukturen**, die C1 von B2 trennen — vom Nominalstil bis zu den Kollokationen. Block 2 (16–28) trainiert **Modul für Modul die Prüfungsstrategie**, Block 3 (29–38) baut den Wortschatz der zehn wichtigsten **Themenfelder** auf, und Block 4 (39–40) schließt mit zwei kompletten **Prüfungssimulationen**. In der nächsten Lektion findest du heraus, wo du in diesem Plan einsteigst.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Die Sprache der Prüfung',
      kicker: 'Lesen · Hören',
      titel: 'Arbeitsanweisungen der rezeptiven Module',
      items: [
        { text: '„**Wählen Sie** bei jeder Aufgabe die richtige Lösung.“', gl: '— Multiple-Choice: genau eine Option ist richtig' },
        { text: '„**Ordnen Sie** die Aussagen den Personen **zu**. Zwei Aussagen bleiben übrig.“', gl: '— Zuordnung mit Distraktoren: nicht alles passt irgendwohin' },
        { text: '„**Ergänzen Sie** den Text mit den Wörtern aus der Liste.“', gl: '— der Lückentext, das klassische Format von Lesen Teil 2' },
        { text: '„Sie hören den Text **nur einmal**.“', gl: '— keine zweite Chance: Notizen machen, nicht zurückblättern wollen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Schreiben',
      titel: 'Arbeitsanweisungen im Modul Schreiben',
      items: [
        { text: '„**Verfassen Sie** einen Diskussionsbeitrag von etwa 230 Wörtern.“', gl: '— *verfassen*: das formelle Verb für *schreiben*' },
        { text: '„**Gehen Sie** dabei **auf alle** Inhaltspunkte **ein**.“', gl: '— jeder ausgelassene Punkt kostet Punkte beim Kriterium Erfüllung' },
        { text: '„**Begründen Sie** Ihre Meinung und **veranschaulichen Sie** sie mit Beispielen.“', gl: '— Behauptung allein genügt nicht: Argument + Beleg' },
        { text: '„Verwenden Sie eine der Situation **angemessene Sprache**.“', gl: '— das Register zählt: eine formelle Nachricht duzt niemanden' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Sprechen',
      titel: 'Arbeitsanweisungen in der Paarprüfung',
      items: [
        { text: '„**Halten Sie** einen kurzen Vortrag zu **einem** der beiden Themen.“', gl: '— du wählst eines von zwei Themen; *einen Vortrag halten*, nicht *geben*' },
        { text: '„**Gehen Sie auf** die Nachfragen der Prüfenden **ein**.“', gl: '— nach dem Vortrag kommen Fragen: flexibel reagieren' },
        { text: '„**Diskutieren Sie** mit Ihrer Partnerin oder Ihrem Partner und **begründen Sie** Ihren Standpunkt.“', gl: '— echtes Gespräch: aufeinander eingehen, nicht zwei Monologe' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Bewertung',
      titel: 'Die vier Kriterien — was hinter den Wörtern steckt',
      items: [
        { text: '**Erfüllung** — Sind alle Inhaltspunkte behandelt, stimmen Textsorte und Länge?' },
        { text: '**Kohärenz** — Ist der Text klar aufgebaut und flüssig verbunden, oder stehen die Sätze nebeneinander?' },
        { text: '**Wortschatz** — Ist das Vokabular breit, präzise und dem Thema angemessen?' },
        { text: '**Strukturen** — Zeigt der Text C1-Grammatik: Nominalstil, Passiv, komplexe Sätze — und zwar korrekt?', gl: '— genau die Baustellen von Block 1 dieses Kurses' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Die Fakten sitzen? Beantworte aus dem Gedächtnis, ohne nach oben zu scrollen.',
      aufgaben: [
        'Wie viele Punkte braucht man pro Modul zum Bestehen — und gibt es eine Gesamtnote?',
        'Welche zwei Textsorten schreibt man im Modul Schreiben, und wie lang sind sie ungefähr?',
        'Wie lange dauern die Module Lesen und Schreiben?',
        'Was bedeutet es, dass die Prüfung „modular“ ist?',
        'Nach welchen vier Kriterien werden Schreiben und Sprechen bewertet?',
      ],
      loesungen: [
        '**60 von 100** Punkten (60 %). Eine Gesamtnote gibt es nicht — jedes Modul wird **einzeln** bewertet und bestanden.',
        'Einen **Diskussionsbeitrag** (~230 Wörter) und eine **formelle Nachricht** (~120 Wörter).',
        'Lesen **65 Minuten**, Schreiben **75 Minuten**.',
        'Die vier Module sind **einzeln ablegbar und einzeln wiederholbar**; bestandene Ergebnisse bleiben gültig.',
        '**Erfüllung, Kohärenz, Wortschatz, Strukturen.**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Was genau musst du tun? Erkläre mit eigenen Worten, was die Anweisung verlangt — im echten Prüfungsstress bleibt dafür keine Zeit mehr.',
      aufgaben: [
        '„**Kreuzen Sie an**, ob die Aussage richtig oder falsch ist.“',
        '„**Ordnen Sie** jeder Überschrift den passenden Abschnitt **zu**.“',
        '„**Nehmen Sie Stellung** zur Aussage des Autors.“',
        '„**Begründen Sie** Ihre Auffassung.“',
        '„**Gehen Sie** dabei **auf** folgende Punkte **ein**.“',
        '„**Verfassen Sie** eine formelle Nachricht an Ihre Vermieterin.“',
      ],
      loesungen: [
        '**Markieren**, welche der zwei (oder mehr) Optionen zutrifft — es wird nichts geschrieben, nur gewählt.',
        'Paare bilden: Jede Überschrift bekommt **genau einen** Abschnitt. Achtung, *zuordnen* ist trennbar: *ich ordne … zu*.',
        'Die **eigene Position** klar formulieren — zustimmen, widersprechen oder differenzieren — und sie vertreten.',
        '**Argumente liefern**: das *Warum* hinter der Meinung. Eine Behauptung ohne Begründung zählt nicht als Stellungnahme.',
        'Jeden genannten Punkt im Text **tatsächlich behandeln**. ~~Ojo: eingehen auf no es «entrar» — significa tratar, abordar un punto. Es de los trennbare Verben que más despistan.~~',
        'Einen **formellen Brief/eine formelle E-Mail** schreiben: Anrede *Sehr geehrte …*, Sie-Form, sachlicher Ton, Grußformel.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere in **fünf bis sechs Sätzen** deinen persönlichen Vorbereitungsplan: Ziel-Prüfungstermin, stärkstes und schwächstes Modul, Reihenfolge. Verwende dabei mindestens **fünf Wörter** aus dem Kernwortschatz.',
      loesung: '**Mögliche Lösung** (deine Angaben sind natürlich andere — entscheidend ist der korrekte Gebrauch des Prüfungswortschatzes):\n*Ich möchte die Prüfung im Juni ablegen und habe mich bereits über die Anmeldung beim Prüfungszentrum in Madrid informiert. Da die Module einzeln bewertet werden, plane ich strategisch: Lesen und Hören sind meine stärksten Fertigkeiten, dort sollte ich die Bestehensgrenze sicher erreichen. Das Modul Schreiben bereitet mir dagegen Sorgen, weil ich die Aufgabenstellungen oft zu schnell lese und Inhaltspunkte übersehe. Deshalb beginne ich meine Vorbereitung mit den Struktur-Lektionen und übe das Schreiben von Anfang an mit. Falls ein Modul nicht klappt, ist die Wiederholung zum nächsten Prüfungstermin möglich — aber mein Ziel ist, alle vier auf einmal zu bestehen.*\nGültig ist jede Fassung, die kohärent ist, echte Planung zeigt und die Kernwörter **richtig kollokiert** verwendet (*eine Prüfung ablegen*, *die Bestehensgrenze erreichen*, *die Anmeldung beim Prüfungszentrum* …).',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Module · Orientierung',
      titel: 'Welches Modul, welcher Teil?',
      anweisung: 'Sechs Aufgabenbeschreibungen, wie sie in den offiziellen Übungsmaterialien stehen. Ordne jede dem passenden Modul bzw. Prüfungsteil aus der Liste zu — jede Option wird genau einmal gebraucht.',
      absaetze: [
        '**A** — In einem anspruchsvollen Text über ein gesellschaftliches Thema fehlen mehrere Wörter; Sie ergänzen sie aus einer vorgegebenen Liste.\n**B** — Sie hören ein Radiointerview und wählen bei jeder Aufgabe die richtige Antwort. Sie hören den Text nur einmal.\n**C** — Sie schreiben einen Beitrag für ein Online-Forum, in dem Sie Ihre Meinung zu einer Streitfrage begründet darlegen (etwa 230 Wörter).\n**D** — Sie sprechen einige Minuten über ein vorbereitetes Thema und beantworten anschließend Nachfragen.\n**E** — Aus einem Text wurden Sätze entfernt; Sie setzen sie an der richtigen Stelle wieder ein.\n**F** — Sie schreiben eine Nachricht an Ihren Arbeitgeber, in der Sie sich für ein Angebot bedanken und einen Gegenvorschlag machen (etwa 120 Wörter).',
      ],
      optionen: ['Lesen — Lückentext', 'Lesen — Satzeinsetzung', 'Hören', 'Schreiben Teil 1', 'Schreiben Teil 2', 'Sprechen Teil 1'],
      loesungen: [
        '**A → Lesen — Lückentext**: „fehlen Wörter“ + „aus einer Liste ergänzen“ ist das Signal für den Lückentext.',
        '**B → Hören**: „Sie hören … nur einmal“ gibt es ausschließlich im Modul Hören.',
        '**C → Schreiben Teil 1**: Forum + Meinung + ~230 Wörter = der Diskussionsbeitrag.',
        '**D → Sprechen Teil 1**: vorbereitetes Thema + Nachfragen = der Vortrag in der Paarprüfung.',
        '**E → Lesen — Satzeinsetzung**: entfernte Sätze an die richtige Stelle setzen — hier zählt Textlogik, nicht Wortwissen.',
        '**F → Schreiben Teil 2**: formeller Adressat + ~120 Wörter = die formelle Nachricht.',
      ],
      kommentar: 'Strategie: Jede Aufgabenbeschreibung enthält **Signalwörter** — Wortzahl, „nur einmal“, „aus einer Liste“, der Adressat. Wer die Formate kennt, erkennt die Aufgabe am ersten Satz und spart in der Prüfung wertvolle Lesezeit.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Nutze die **Modularität** strategisch: Wenn Zeit oder Nerven knapp sind, lege zuerst die zwei stärksten Module ab und die schwächeren einen Prüfungstermin später — der Druck sinkt, die Bestehenschance steigt. Und lies in jedem Modul die **Aufgabenstellung zweimal**: Die meisten vermeidbaren Punktverluste entstehen nicht durch fehlendes Deutsch, sondern durch überlesene Anweisungen. ~~No tienes que aprobar los cuatro módulos a la vez — repite solo el que falle.~~',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Modul / System', 'Das Wichtigste'],
      zeilen: [
        ['Lesen', '65 Min · 4 Teile · Multiple-Choice, Lückentext, Satzeinsetzung, Zuordnung'],
        ['Hören', 'ca. 40 Min · 4 Teile · Teil 1–3 einmal, Vortrag (Teil 4) zweimal'],
        ['Schreiben', '75 Min · Diskussionsbeitrag ~230 W. + formelle Nachricht ~120 W.'],
        ['Sprechen', 'ca. 15 Min · Paarprüfung · Vortrag + Diskussion'],
        ['Bewertung', '100 Punkte pro Modul · Bestehensgrenze 60 · Kriterien: Erfüllung, Kohärenz, Wortschatz, Strukturen'],
        ['Modular', 'Module einzeln ablegbar und wiederholbar — bestandene Ergebnisse bleiben gültig'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die vier Module mit Dauer, Teilen und Aufgabentypen.',
        'Ich weiß, wie bewertet wird: 100 Punkte pro Modul, bestanden ab 60, keine Gesamtnote.',
        'Ich verstehe die typischen Arbeitsanweisungen und weiß genau, was sie von mir verlangen.',
        'Ich habe einen ersten Plan, wann ich die Prüfung ablege und womit ich die Vorbereitung beginne.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Format kennst du jetzt — aber wo stehst **du** sprachlich? Bevor du in die Grammatik- und Strategielektionen einsteigst, brauchst du eine ehrliche **Standortbestimmung**: Was kannst du schon auf C1-Niveau, wo liegen die Lücken? In der nächsten Lektion diagnostizierst du mit drei Mini-Tests deine Grammatik, deinen Wortschatz und dein Schreiben — und bekommst eine Landkarte, welche Lektionen des Kurses du zuerst brauchst.',
    },
  ],
}
