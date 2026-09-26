// Lektion 03 · Diagnose B2 — Standortbestimmung
//
// Bloque 0 «Einführung» — autodiagnóstico: B1 vs. B2, tres mini-tests
// con remisión a las lecciones 4-17, tabla can-do por módulo y el plan
// de los 5 bloques del curso.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B2', 'Prüfungsrelevanz: Standortbestimmung'],
  h1: 'Diagnose B2 — Standortbestimmung',
  lead: 'Bevor der Kurs startet: ehrlich testen, wo du stehst — und daraus deinen persönlichen Weg durch die 42 Lektionen ableiten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Unterschied zwischen B1 und B2 an konkreten Beispielen erkennen',
        'mit der Diagnose im Übungsheft deine Lücken in Grammatik, Lesen und Schreiben finden',
        'dich pro Modul realistisch einschätzen (Kann-ich-das-Tabelle)',
        'deinen Weg durch die fünf Blöcke des Kurses planen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über das Lernen sprechen',
      items: [
        { wort: 'die Standortbestimmung, -en', kollokation: 'eine ehrliche Standortbestimmung machen', es: 'el diagnóstico inicial' },
        { wort: 'einschätzen', kollokation: 'das eigene Niveau realistisch einschätzen', es: 'evaluar, estimar' },
        { wort: 'die Stärke, -n', kollokation: 'seine Stärken kennen', es: 'el punto fuerte' },
        { wort: 'die Schwäche, -n', kollokation: 'an einer Schwäche arbeiten', es: 'el punto débil' },
        { wort: 'die Lücke, -n', kollokation: 'eine Lücke schließen', es: 'la laguna' },
        { wort: 'auffrischen', kollokation: 'die Grammatik auffrischen', es: 'refrescar' },
        { wort: 'der Fortschritt, -e', kollokation: 'sichtbare Fortschritte machen', es: 'el progreso' },
        { wort: 'das Lernziel, -e', kollokation: 'sich ein klares Lernziel setzen', es: 'el objetivo de aprendizaje' },
        { wort: 'gezielt', kollokation: 'gezielt üben statt alles wiederholen', es: 'de forma selectiva' },
        { wort: 'der Lernplan, ·pläne', kollokation: 'einen realistischen Lernplan erstellen', es: 'el plan de estudio' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — warum eine Diagnose?',
      absaetze: [
        'Wer B2 vorbereitet, hat **keine Zeit, alles zu wiederholen**. Eine Standortbestimmung zeigt dir, wo deine Lücken sind — damit du __gezielt__ übst. Deshalb zeigt dir das Übungsheft bei jedem Thema einen Wegweiser: **„Fehler? → Lektion N“**.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — was B1 von B2 unterscheidet',
      kopf: ['Bereich', 'B1', 'B2'],
      zeilen: [
        ['Sätze verbinden', 'weil, aber, deshalb', 'obwohl, trotzdem, je … desto, zweiteilige Konnektoren'],
        ['Hypothesen & Höflichkeit', '„vielleicht“, „ich möchte“', 'Konjunktiv II: „Es wäre besser, wenn …“'],
        ['Passiv', 'einfaches Präsens-Passiv', 'Passiv mit Modalverben, Passiversatzformen'],
        ['Themen', 'Alltag: Familie, Hobbys, Reisen', 'abstrakter: Arbeitswelt, Medien, Umwelt — mit Pro & Contra'],
        ['Texte', 'kurze, einfache Mitteilungen', 'strukturierte Texte mit begründetem Standpunkt'],
      ],
    },
    {
      type: 'vergleich',
      titel: 'Dieselbe Meinung — zwei Niveaus',
      zeilen: [
        { satz: 'Homeoffice ist gut, weil man Zeit spart. Aber manchmal ist es auch schlecht.', label: 'B1 — einfache Sätze, weil + aber' },
        { satz: 'Obwohl man im Homeoffice viel Zeit spart, würde ich nicht jeden Tag zu Hause arbeiten — der Kontakt zu den Kollegen lässt sich kaum ersetzen.', label: 'B2 — obwohl, Konjunktiv II, Passiversatz' },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — so funktioniert die Diagnose',
      absaetze: [
        'Die Diagnose machst du im **Übungsheft** zu dieser Lektion: ein Grammatik-Test mit Themen aus Block 1, ein Lesetext und eine kurze Schreibaufgabe. Arbeite **ohne Hilfsmittel** und schau erst danach in die Lösungen. ~~No es un examen: un fallo aquí es información valiosa, no un problema.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — woran du B2-Strukturen erkennst',
      kicker: 'Radar',
      titel: 'Vier typische B2-Sätze',
      items: [
        { text: 'Wenn ich das **gewusst hätte**, **wäre** ich früher **gekommen**.', gl: '— Konjunktiv II der Vergangenheit → Lektion 8' },
        { text: 'Die Ministerin sagte, die Reform **sei** notwendig.', gl: '— indirekte Rede → Lektion 9' },
        { text: 'Die **steigenden** Mieten sind ein **viel diskutiertes** Problem.', gl: '— Partizip als Attribut → Lektion 13' },
        { text: '**Beim Lesen** der E-Mail fiel mir der Fehler auf.', gl: '— Nominalisierung → Lektion 16' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Über das eigene Lernen sprechen',
      items: [
        { text: 'Nach der **Standortbestimmung** wusste Emre genau, wo seine **Lücken** lagen.' },
        { text: 'Meine größte **Stärke** ist das Hören, meine größte **Schwäche** das Schreiben.' },
        { text: 'Bevor ich mit Block 2 anfange, will ich die Adjektivdeklination **auffrischen**.', gl: '— refrescar lo ya aprendido' },
        { text: 'Es ist gar nicht so leicht, das eigene Niveau realistisch **einzuschätzen**.', gl: '— por eso ayuda un test' },
        { text: 'Statt alles zu wiederholen, übt Carla **gezielt** die Themen, bei denen sie unsicher ist.' },
        { text: 'Ein realistischer **Lernplan** mit klaren **Lernzielen** macht deine **Fortschritte** sichtbar.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wortschatz',
      titel: 'Kollokationen, die im B2 zählen',
      items: [
        { text: 'Nach langem Überlegen hat Ana eine **Entscheidung getroffen**.', gl: '— nunca «eine Entscheidung machen»' },
        { text: 'Samir **bewirbt sich um** eine Stelle als Ingenieur.', gl: '— lo estándar: sich **um** eine Stelle bewerben' },
        { text: 'Bevor du dich festlegst, solltest du die **Vor- und Nachteile abwägen**.', gl: '— la base de toda argumentación B2' },
        { text: '**Meiner Meinung nach** ist Homeoffice nicht für jeden geeignet.', gl: '— sin preposición delante: no «nach meiner Meinung nach»' },
        { text: 'Wir **warten** schon seit Wochen **auf** eine Antwort.', gl: '— warten auf + Akk., no «für»' },
      ],
    },

    { type: 'rule' },

    // ── Modelltext ────────────────────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modelltext — Vorstellung im Lernforum',
      thema: 'Forumsbeitrag · Achte auf die Verbstellung nach *weil*, *deshalb* und *obwohl*.',
      absaetze: [
        'Hallo zusammen! Ich heiße Lucía und komme aus Spanien. Ich arbeite als Krankenschwester und lerne seit zwei Jahren Deutsch, **weil** ich in Deutschland arbeiten möchte. Für die Berufsanerkennung brauche ich das Zertifikat B2, **deshalb** bereite ich mich jetzt intensiv vor. **Obwohl** die Grammatik manchmal schwierig ist, macht mir die Sprache viel Spaß. Mein Ziel ist es, die Prüfung im Sommer zu bestehen!',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Selbsteinschätzung pro Modul',
      kopf: ['Modul', 'Kann ich das schon? — bewerte dich: ✓ / teils / ✗'],
      zeilen: [
        ['Lesen', 'Ich verstehe längere Artikel im Detail und erkenne Meinungen und Standpunkte.'],
        ['Hören', 'Ich folge Interviews, Diskussionen und einem Vortrag in normalem Tempo.'],
        ['Schreiben', 'Ich schreibe einen strukturierten Forumsbeitrag (~150 Wörter) mit begründeter Meinung.'],
        ['Sprechen', 'Ich halte einen kurzen Vortrag und diskutiere spontan mit einem Partner.'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sei bei der Selbsteinschätzung **streng** — ein zu optimistisches „✓“ kostet dich am Prüfungstag Punkte. Notiere dein Ergebnis von heute und **wiederhole die Diagnose nach Block 2**: Der sichtbare Fortschritt ist die beste Motivation.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Weg durch den Kurs',
      kopf: ['Block', 'Lektionen', 'Inhalt'],
      zeilen: [
        ['0 · Einführung', '1–3', 'Prüfung, digitales Format, Diagnose — hier bist du jetzt'],
        ['1 · Grammatik & Struktur', '4–17', 'die komplette B2-Grammatik, von Konnektoren bis Genitiv-Präpositionen'],
        ['2 · Prüfungsstrategie', '18–32', 'jedes Modul Teil für Teil: Lesen, Hören, Schreiben, Sprechen'],
        ['3 · Themenfelder & Wortschatz', '33–40', 'die acht großen Prüfungsthemen mit Wortschatz und Redemitteln'],
        ['4 · Prüfungssimulation', '41–42', 'zwei komplette Simulationen mit Korrektur und Strategien'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann an Beispielen erklären, was B2 von B1 unterscheidet.',
        'Ich habe die Diagnose im Übungsheft gemacht und weiß, welche Lektionen ich zuerst brauche.',
        'Ich habe mich pro Modul ehrlich eingeschätzt.',
        'Ich kenne die fünf Blöcke des Kurses und habe einen Lernplan.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt geht es richtig los: **Lektion 4, „Konnektoren I“** — die Modelllektion des Kurses. An ihr siehst du, wie jede Lektion der Methode aufgebaut ist: Wortschatz, Erklärung, Beispiele, Prüfungsbezug — und dazu das Übungsheft. Inhaltlich lernst du dort, Grund, Einräumung und Folge mit der richtigen Verbstellung zu verbinden.',
    },
  ],
}
