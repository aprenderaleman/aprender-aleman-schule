// Lektion 28 · Schreiben Teil 1 — Der Forumsbeitrag
//
// Bloque 2 · Die wichtigste Schreibaufgabe des B2: Meinung zu einem
// Alltagsthema, ~150 Wörter, alle Inhaltspunkte. Struktur in vier
// Schritten, Redemittel nach Funktion, kommentiertes Muster (150 Wörter,
// nachgezählt), drei Übungen und eine komplette Prüfungsaufgabe.
// Ausblick → Lektion 29 (formelle Nachricht).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Schreiben Teil 1 (~150 Wörter · empf. 50 Min)'],
  h1: 'Schreiben Teil 1 — Der Forumsbeitrag',
  lead: 'Deine Meinung zu einem Alltagsthema, klar aufgebaut und mit einem eigenen Beispiel belegt — die Aufgabe, die im Modul Schreiben am meisten zählt.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du einen Forumsbeitrag von ~150 Wörtern klar aufbauen: Einstieg, Meinung, Argument mit Beispiel, Fazit.',
        'Du deckst alle Inhaltspunkte der Aufgabenstellung ab und triffst das freundlich-neutrale Forum-Register.',
        'Du setzt Redemittel gezielt nach Funktion ein: Meinung äußern, Beispiele geben, einräumen, zusammenfassen.',
        'Du nutzt die empfohlenen 50 Minuten mit einem festen Plan: notieren, schreiben, prüfen.',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Meinung & Argument',
      items: [
        { wort: 'der Beitrag', kollokation: 'einen Beitrag im Forum schreiben', es: 'aportación, post' },
        { wort: 'die Meinung', kollokation: 'meiner Meinung nach', es: 'opinión' },
        { wort: 'die Ansicht', kollokation: 'der Ansicht sein, dass …', es: 'punto de vista' },
        { wort: 'die Erfahrung', kollokation: 'aus eigener Erfahrung sprechen', es: 'experiencia' },
        { wort: 'der Vorteil / der Nachteil', kollokation: 'Vor- und Nachteile abwägen', es: 'ventaja / inconveniente' },
        { wort: 'der Grund', kollokation: 'Gründe für seine Meinung nennen', es: 'razón, motivo' },
        { wort: 'das Argument', kollokation: 'ein überzeugendes Argument', es: 'argumento' },
        { wort: 'zustimmen', kollokation: 'ich stimme dir / den anderen zu', es: 'estar de acuerdo (con + dativo)' },
        { wort: 'betreffen', kollokation: 'das Thema betrifft mich persönlich', es: 'afectar, concernir' },
        { wort: 'überzeugt', kollokation: 'von etwas überzeugt sein', es: 'convencido' },
        { wort: 'das Fazit', kollokation: 'am Ende ein Fazit ziehen', es: 'conclusión, balance' },
      ],
      hinweis: '**zustimmen** braucht Dativ und **kein** *mit*: *Ich stimme **dir** zu.* ~~«Estoy de acuerdo contigo» te empuja a un *mit* que en alemán sobra.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Die Aufgabe zeigt dir ein **Forum zu einem Alltagsthema** — Arbeit, Wohnen, Konsum, Medien, Lernen — und nennt **Inhaltspunkte**, die dein Beitrag von etwa **150 Wörtern** behandeln muss: typischerweise deine Meinung, eigene Erfahrungen sowie Vor- oder Nachteile. Empfohlen sind **50 der 75 Minuten** — Teil 1 ist der große Text des Moduls.',
        'Deine Leser sind **andere Nutzer im Forum**: Du schreibst freundlich-neutral in der ich-Form, ohne Anrede und ohne Grußformel. Kein Slang, aber auch keine Amtssprache. Und die wichtigste Regel des Kriteriums „Erfüllung“: **Jeder Inhaltspunkt der Aufgabenstellung muss im Text erkennbar sein** — ein brillanter Beitrag, der einen Punkt auslässt, verliert sofort Punkte.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Struktur in vier Schritten',
      steps: [
        {
          titel: 'Einstieg mit Themenbezug',
          text: 'Ein bis zwei Sätze, die zeigen, warum dich das Thema angeht: __Das Thema kommt für mich genau zur richtigen Zeit, denn …__ Kein allgemeines Blabla — dein Bezug zum Thema.',
        },
        {
          titel: 'Deine Meinung',
          text: 'Klar Position beziehen: __Meiner Meinung nach … / Ich bin überzeugt, dass …__ — gern mit zwei, drei Gründen in einem Satz.',
        },
        {
          titel: 'Argument + eigenes Beispiel',
          text: 'Das Herz des Beitrags: ein konkretes Beispiel aus **deinem Alltag** (erfunden ist erlaubt!). __Ein Beispiel aus meinem Alltag: …__ Konkrete Details — Zahlen, Orte, Situationen — machen den Text glaubwürdig.',
        },
        {
          titel: 'Einräumung + Fazit',
          text: 'Zeig, dass du auch die andere Seite siehst (__Natürlich stimmt es, dass …__), und schließe mit einem Fazit: __Insgesamt bin ich davon überzeugt, dass …__',
        },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        {
          fn: 'Einsteigen & Bezug nehmen',
          saetze: [
            { satz: 'Das Thema finde ich sehr interessant, denn es betrifft mich jeden Tag.' },
            { satz: 'Diese Frage kommt für mich genau zur richtigen Zeit, weil …' },
            { satz: 'In meinem Freundeskreis diskutieren wir oft darüber, ob …' },
          ],
        },
        {
          fn: 'Meinung äußern',
          saetze: [
            { satz: 'Meiner Meinung nach …' },
            { satz: 'Ich bin (davon) überzeugt, dass …' },
            { satz: 'Ich bin der Ansicht, dass …', gloss: '~~un peldaño más formal que «ich finde» — sube el Wortschatz~~' },
          ],
        },
        {
          fn: 'Beispiele geben',
          saetze: [
            { satz: 'Ein Beispiel aus meinem Alltag: …' },
            { satz: 'Ich spreche aus eigener Erfahrung: …' },
            { satz: 'Bei uns in der Firma ist das zum Beispiel so: …' },
          ],
        },
        {
          fn: 'Einräumen & abwägen',
          saetze: [
            { satz: 'Natürlich stimmt es, dass …' },
            { satz: 'Ich gebe zu, dass …' },
            { satz: 'Einerseits …, andererseits …' },
          ],
        },
        {
          fn: 'Zusammenfassen & schließen',
          saetze: [
            { satz: 'Insgesamt bin ich davon überzeugt, dass …' },
            { satz: 'Alles in allem finde ich, dass …' },
            { satz: 'Am Ende hängt es davon ab, ob …' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Muster ────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Das Forum-Register',
      kicker: 'zu formell → zu locker → richtig',
      titel: 'So klingt ein Forumsbeitrag',
      items: [
        { text: '**Zu formell:** *Sehr geehrte Damen und Herren, hiermit äußere ich mich zum Thema …*', gl: '— im Forum gibt es keine Anrede und kein Amtsdeutsch' },
        { text: '**Zu locker:** *Ey Leute, voll krass diese Frage!*', gl: '— freundlich ja, Slang nein' },
        { text: '**Richtig:** *Das Thema finde ich spannend, denn es betrifft mich jeden Tag.*', gl: '— natürlich, persönlich, neutral' },
        { text: '**Auch richtig:** *Ich sehe das ähnlich wie viele hier im Forum, aber aus einem anderen Grund.*', gl: '— Bezug auf die anderen Nutzer wirkt authentisch' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Forum: „Einkaufen im Internet oder im Geschäft?“',
      woerter: '150 Wörter',
      absaetze: [
        '==Das Thema kommt für mich genau zur richtigen Zeit,== denn ich bestelle selbst fast jede Woche etwas im Internet.',
        '==Meiner Meinung nach== hat das Einkaufen im Internet viele Vorteile: Man spart Zeit, kann die Preise in Ruhe vergleichen und findet auch Produkte, die es in kleinen Städten gar nicht gibt.',
        '==Ein Beispiel aus meinem Alltag:== Vor einem Monat habe ich einen Drucker gesucht. Im Geschäft war er vierzig Euro teurer als online, und der Verkäufer konnte meine Fragen kaum beantworten. Im Internet habe ich die Bewertungen anderer Kunden gelesen und in fünf Minuten bestellt.',
        '==Natürlich stimmt es, dass== viele kleine Geschäfte durch den Online-Handel Probleme bekommen. Deshalb kaufe ich Lebensmittel und Geschenke bewusst in den Läden in meinem Viertel.',
        '==Insgesamt bin ich davon überzeugt, dass== beide Formen ihren Platz haben. Man sollte nur bewusst entscheiden, wo man was kauft — und ab und zu auch an die Geschäfte vor Ort denken.',
      ],
      annotationen: [
        { tag: 'Einstieg', text: 'Persönlicher Themenbezug in einem Satz — keine Anrede, kein allgemeiner Einleitungssatz.' },
        { tag: 'Meinung', text: 'Klare Position + drei Gründe in einem Satz, mit Doppelpunkt sauber angeschlossen.' },
        { tag: 'Beispiel', text: 'Konkrete Details (ein Monat, vierzig Euro, fünf Minuten) machen die Erfahrung glaubwürdig — erfunden ist erlaubt.' },
        { tag: 'Einräumung', text: 'Die Gegenseite wird ernst genommen und mit *deshalb* in eigenes Verhalten übersetzt — das hebt Kohärenz und Erfüllung.' },
        { tag: 'Fazit', text: 'Ausgewogener Schluss, der die Einräumung wieder aufnimmt. Genau 150 Wörter — kein Wort verschenkt.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teile die 50 Minuten fest ein: **10 Minuten** Aufgabe lesen und zu jedem Inhaltspunkt ein Stichwort notieren, **30 Minuten** schreiben (ein Absatz pro Punkt), **10 Minuten** Schluss-Check aus Lektion 27. Die Wortzahl musst du nicht zählen: Vier bis fünf Absätze wie im Muster liegen automatisch bei ~150.',
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Passt der Satz in einen Forumsbeitrag? Entscheide: ja oder nein — und warum?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Sehr geehrte Damen und Herren, ich beziehe mich auf Ihre Diskussion.“',
        '„Aus meiner Erfahrung kann ich sagen, dass Wochenmärkte oft günstiger sind, als man denkt.“',
        '„Boah, wer so was glaubt, hat echt keine Ahnung!“',
        '„Ich sehe das ähnlich wie die meisten hier, möchte aber einen Punkt ergänzen.“',
        '„Mit freundlichen Grüßen, Ana López“',
      ],
      loesungen: [
        '**Nein** — Anrede und Amtston gehören in die formelle Nachricht (Teil 2), nicht ins Forum.',
        '**Ja** — persönliche Erfahrung, neutraler Ton: genau das Register von Teil 1.',
        '**Nein** — Slang und Angriffe auf andere Nutzer kosten beim Register sofort Punkte.',
        '**Ja** — höflicher Bezug auf die Diskussion plus eigener Beitrag: ideal.',
        '**Nein** — ein Forumsbeitrag endet mit dem Fazit, ohne Grußformel.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Redemittel einsetzen',
      frage: 'Ergänze den Beitrag zum Thema „Brauchen Kinder ein eigenes Handy?“ mit dem passenden Redemittel: *Meiner Meinung nach · zum Beispiel · Natürlich stimmt es, dass · Alles in allem*.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„___ sollten Kinder erst in der Schulzeit ein eigenes Handy bekommen.“',
        '„Mein Neffe hat ___ schon mit acht Jahren stundenlang Videos geschaut.“',
        '„___ Eltern ihre Kinder unterwegs erreichen möchten.“',
        '„___ finde ich klare Regeln besser als ein komplettes Verbot.“',
      ],
      loesungen: [
        '**Meiner Meinung nach** sollten Kinder … — danach Inversion: das Verb bleibt an Position 2.',
        'Mein Neffe hat **zum Beispiel** schon mit acht Jahren …',
        '**Natürlich stimmt es, dass** Eltern ihre Kinder unterwegs erreichen möchten. — Nebensatz: Verb ans Ende.',
        '**Alles in allem** finde ich klare Regeln besser als ein komplettes Verbot.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Forum „Leben in der Stadt oder auf dem Land?“ — Schreibe einen kompletten Beitrag (ca. 150 Wörter). Gehe auf drei Punkte ein: deine Meinung, eine eigene Erfahrung, ein Vorteil der anderen Seite.',
      aufgabe: 'Prüfe danach mit dem Schluss-Check: Verb an Position 2? Komma vor dass/weil? Nomen groß? Alle drei Punkte erkennbar?',
      loesung: '**Mögliche Lösung** (150 Wörter):\n*In meiner Familie diskutieren wir seit Monaten über genau diese Frage, deshalb schreibe ich hier sehr gern meine Meinung dazu.\nIch bin überzeugt, dass das Leben in der Stadt für junge Leute mehr Vorteile bietet: Die Wege sind kurz, das Angebot an Arbeit ist deutlich größer, und man braucht für den Alltag nicht unbedingt ein eigenes Auto.\nIch spreche aus eigener Erfahrung: Vor drei Jahren bin ich vom Dorf nach Valencia gezogen. Seitdem erreiche ich meine Arbeit in zwanzig Minuten mit der U-Bahn und treffe meine Freunde auch spontan am Abend.\nNatürlich hat das Land auch Vorteile, zum Beispiel die Ruhe, die günstigeren Wohnungen und die Natur direkt vor der Tür. Für Familien mit kleinen Kindern kann das Dorf sogar ideal sein.\nInsgesamt finde ich aber, dass die Stadt besser zu meinem Leben passt. Am Ende hängt die Entscheidung wohl davon ab, in welcher Phase des Lebens man gerade steht.*\nGleich gültig: die Gegenposition (pro Land) — bewertet wird die Struktur, nicht die Meinung.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · komplette Aufgabe',
      titel: 'Forumsbeitrag „Arbeiten von zu Hause“ · ca. 150 Wörter · empf. 50 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen — Stichwörter, Text, Schluss-Check — und vergleiche erst danach mit der Lösung.',
      absaetze: [
        'Im Forum eines Karriereportals wird diskutiert: „Arbeiten von zu Hause — die bessere Art zu arbeiten?“ Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter). Gehen Sie dabei auf folgende Punkte ein:\n• Äußern Sie Ihre Meinung zum Homeoffice.\n• Berichten Sie von einer eigenen Erfahrung.\n• Nennen Sie auch einen Nachteil.\n• Ziehen Sie ein Fazit.',
      ],
      loesungLabel: 'Mögliche Lösung (150 Wörter)',
      loesungen: [
        '*Diese Frage passt perfekt zu meinem Alltag, denn ich arbeite seit zwei Jahren an drei Tagen pro Woche von zu Hause.*',
        '*Meiner Meinung nach ist das Homeoffice eine große Chance: Man spart die tägliche Fahrt ins Büro, kann sich zu Hause besser konzentrieren und teilt sich den Tag viel freier ein.*',
        '*Ein Beispiel: Früher stand ich jeden Morgen um sechs Uhr auf und saß danach eine Stunde im Zug. Heute nutze ich diese Zeit für Sport und ein ruhiges Frühstück und beginne trotzdem pünktlich um acht Uhr mit der Arbeit.*',
        '*Ich gebe allerdings zu, dass mir der Kontakt zu den Kollegen manchmal fehlt. Deshalb finde ich es wichtig, regelmäßig ins Büro zu gehen — bei uns sind das der Dienstag und der Donnerstag.*',
        '*Insgesamt bin ich davon überzeugt, dass für die meisten Berufe die Mischung die beste Lösung ist: zu Hause konzentriert arbeiten und im Büro den Kontakt zum Team pflegen.*',
      ],
      kommentar: 'Jeder Absatz bedient genau einen Inhaltspunkt: Einstieg + Bezug, Meinung, Erfahrung mit konkreten Details, Nachteil mit Konsequenz (*deshalb*), Fazit. Die Konnektoren (*denn, allerdings, deshalb, insgesamt*) tragen die Kohärenz; die Nebensätze mit *dass* und die Inversion nach *deshalb* zeigen dem Prüfer die Strukturen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Schreibe die Inhaltspunkte als Stichwörter über deinen Text und **hake jeden ab**, sobald sein Absatz steht. Der häufigste Punkteverlust in Teil 1 ist kein Grammatikfehler, sondern ein **vergessener Inhaltspunkt** — meist der unbequeme (der Nachteil, wenn man dafür ist).',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Aufgabe', 'Meinung zu einem Alltagsthema · ~150 Wörter · alle Inhaltspunkte'],
        ['Struktur', 'Einstieg mit Themenbezug → Meinung → Argument + eigenes Beispiel → Einräumung + Fazit'],
        ['Register', 'freundlich-neutral, ich-Form — keine Anrede, keine Grußformel, kein Slang'],
        ['Redemittel', 'Meiner Meinung nach · Ein Beispiel aus meinem Alltag · Natürlich stimmt es, dass · Insgesamt'],
        ['Zeitplan', '10 Min notieren · 30 Min schreiben · 10 Min Schluss-Check'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich baue einen Forumsbeitrag in vier Schritten auf und decke alle Inhaltspunkte ab.',
        'Ich äußere meine Meinung mit passenden Redemitteln und belege sie mit einem konkreten Beispiel.',
        'Ich treffe das Forum-Register: persönlich und freundlich, ohne Anrede und ohne Slang.',
        'Ich halte den Zeitplan 10 / 30 / 10 ein und prüfe am Ende mit dem Schluss-Check.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Forum in den Posteingang: In der nächsten Lektion übst du **Teil 2, die formelle Nachricht** — 100 Wörter an die Vorgesetzte, die Vermieterin oder die Kursleitung, mit korrekter Anrede, Sie-Register und dem höflichen Konjunktiv II (*ich würde gern, könnten Sie …*).',
    },
  ],
}
