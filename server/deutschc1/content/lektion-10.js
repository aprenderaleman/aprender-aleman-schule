// Lektion 10 · Konnektoren der Schriftsprache

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben'],
  h1: 'Konnektoren der Schriftsprache',
  lead: 'Gleichwohl, mithin, wenngleich: die Verbindungswörter, die einen Text gehoben und präzise klingen lassen — und die Verbstellung, die jedes von ihnen verlangt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du gehobene Konnektoren nach ihrer Funktion einordnen: konzessiv, folgernd, adversativ, einschränkend, kausal und final.',
        'Du beherrschst die drei Syntaxmuster: Adverb → Inversion, Subjunktion → Verbletztstellung, Präposition → Nominalphrase.',
        'Du bildest gehobene Konzessivstrukturen wie *wenngleich*, *obschon* und *so überzeugend das Argument auch sein mag*.',
        'Du setzt schriftsprachliche Konnektoren im Diskussionsbeitrag gezielt und dosiert ein, ohne gekünstelt zu wirken.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'gleichwohl', kollokation: 'Das Risiko ist bekannt, gleichwohl handelt niemand.', es: 'no obstante, con todo' },
        { wort: 'nichtsdestotrotz', kollokation: 'nichtsdestotrotz an einem Plan festhalten', es: 'a pesar de todo' },
        { wort: 'folglich', kollokation: 'folglich müssen wir umdenken', es: 'por consiguiente' },
        { wort: 'mithin', kollokation: 'mithin ist der Einwand berechtigt', es: 'por tanto (muy formal)' },
        { wort: 'demnach', kollokation: 'demnach ändert sich nichts', es: 'según eso, por ende' },
        { wort: 'hingegen', kollokation: 'die Kritiker hingegen warnen', es: 'en cambio' },
        { wort: 'indes / indessen', kollokation: 'die Lage indes bleibt angespannt', es: 'sin embargo (elevado)' },
        { wort: 'zumal', kollokation: 'zumal die Zeit drängt', es: 'tanto más cuanto que' },
        { wort: 'wenngleich', kollokation: 'wenngleich Zweifel bestehen', es: 'si bien, aunque (culto)' },
        { wort: 'obschon', kollokation: 'obschon alles dagegen sprach', es: 'aunque (registro elevado)' },
        { wort: 'sofern', kollokation: 'sofern nichts dagegenspricht', es: 'siempre que, en tanto' },
        { wort: 'infolgedessen', kollokation: 'infolgedessen stiegen die Preise', es: 'a consecuencia de ello' },
        { wort: 'auf dass', kollokation: 'auf dass es gelingen möge', es: 'para que (solemne)' },
      ],
      hinweis: 'Lerne jeden Konnektor **mit seiner Wortart**: *gleichwohl* ist ein Adverb (Inversion), *wenngleich* eine Subjunktion (Verb ans Ende). Wer nur die Bedeutung kennt, baut den Satz falsch. ~~En español todos parecen «conectores»; en alemán la categoría gramatical decide la posición del verbo.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Vom B2-Repertoire zum C1-Register',
      absaetze: [
        'Auf B2 verbindet man Sätze mit *aber, deshalb, obwohl, trotzdem*. Diese Wörter sind korrekt — aber neutral. Die **Schriftsprache** der Kommentare, Fachtexte und Diskussionsbeiträge greift zu einem zweiten, gehobenen Repertoire: *gleichwohl* statt *trotzdem*, *folglich* statt *deshalb*, *wenngleich* statt *obwohl*, *hingegen* statt *aber*.',
        'Der Inhalt bleibt derselbe; was sich ändert, ist das **Register** — und genau das bewerten die Prüfer im Kriterium „Strukturen“ und testet der Lückentext in Lesen Teil 2. Entscheidend ist dabei nicht nur die Wortwahl, sondern die **Syntax**: Jeder Konnektor gehört zu einer von drei Klassen, und jede Klasse verlangt eine andere Verbstellung.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Syntaxklassen',
      steps: [
        {
          badge: 'Adverb',
          titel: 'Konnektoradverb → Inversion',
          text: 'Das Adverb besetzt Position 1, das konjugierte Verb folgt sofort: __Gleichwohl **überzeugt** das Argument viele.__ Es kann auch ins Mittelfeld rücken: *Das Argument überzeugt gleichwohl viele.* Dazu gehören *folglich, mithin, demnach, somit, hingegen, indes(sen), infolgedessen, nichtsdestotrotz*.',
        },
        {
          badge: 'Subjunktion',
          titel: 'Subjunktion → Verbletztstellung',
          text: 'Sie leitet einen Nebensatz ein, das konjugierte Verb wandert ans Ende: __Ich unterschreibe, sofern die Bedingungen fair **sind**.__ Dazu gehören *wenngleich, obschon, obgleich, sofern, zumal, da, auf dass*.',
        },
        {
          badge: 'Präposition',
          titel: 'Präposition → Nominalphrase',
          text: 'Kein Satz, sondern eine Phrase mit Kasus: __**Trotz aller Einwände** wurde das Projekt fortgesetzt.__ Dazu gehören *trotz, ungeachtet, infolge, zwecks* + Genitiv — das ist der Nominalstil aus Lektion 3.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Funktion und Register',
      kopf: ['Funktion', 'neutral (B2)', 'gehoben (C1)'],
      zeilen: [
        ['konzessiv', 'trotzdem, obwohl', 'gleichwohl · nichtsdestotrotz · wenngleich · obschon'],
        ['folgernd', 'deshalb, also', 'folglich · mithin · demnach · infolgedessen'],
        ['adversativ', 'aber, dagegen', 'hingegen · indes(sen) · wohingegen'],
        ['einschränkend/konditional', 'wenn, nur wenn', 'sofern · vorausgesetzt, dass · es sei denn'],
        ['kausal', 'weil, denn', 'da · zumal (= verstärkender Zusatzgrund)'],
        ['final', 'damit, um … zu', 'auf dass (feierlich, sehr selten)'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Gehobene Konzessivstrukturen: die Königsklasse',
      absaetze: [
        'Neben *wenngleich* und *obschon* kennt das C1-Deutsch eine elegante Einräumungsformel: **so + Adjektiv/Adverb + Subjekt + auch + Verb (+ mag)**. __So überzeugend das Argument auch sein mag__, es bleibt eine Vermutung. __So sehr ich Ihre Arbeit auch schätze__, dem Vorschlag kann ich nicht zustimmen. Der Nebensatz hat Verbletztstellung; der Hauptsatz danach beginnt oft mit dem Subjekt — ohne Inversion, weil der Konzessivsatz als „Vorspann“ gilt.',
        'Ebenfalls gehoben: **wie dem auch sei** (~~sea como fuere~~) als Überleitung und **mag … auch** mit Spitzenstellung des Verbs: *Mag der Preis auch hoch sein, die Qualität rechtfertigt ihn.*',
        '**Achtung, typischer Fehler:** *zumal* begründet immer **zusätzlich** — es setzt voraus, dass schon ein anderer Grund im Raum steht. *Er ist geeignet, zumal er Auslandserfahrung hat* = „und noch dazu“. Als bloßes *weil* ist es falsch. Und *da* wirkt schriftsprachlicher als *weil*, steht aber gern am Satzanfang: *Da die Frist abläuft, …*',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'konzessiv',
      titel: 'Einräumung (gehoben)',
      items: [
        { text: 'Das Argument ist schwach, **gleichwohl** überzeugt es viele.', gl: '— Adverb → Inversion' },
        { text: '**Nichtsdestotrotz** bleibt das Problem bestehen.' },
        { text: '**Wenngleich** die Datenlage dünn **ist**, lässt sich ein Trend erkennen.', gl: '— Subjunktion → Verbletztstellung' },
        { text: '**Obschon** man ihn mehrfach gewarnt **hatte**, unterschrieb er den Vertrag.' },
        { text: '**So plausibel die These auch klingen mag**, belegt ist sie nicht.', gl: '— gehobene Konzessivformel' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'folgernd',
      titel: 'Konsequenz',
      items: [
        { text: 'Die Kosten steigen, **folglich** muss gespart werden.' },
        { text: 'Er ist Muttersprachler, **mithin** ist er für die Aufgabe qualifiziert.', gl: '— *mithin*: sehr formell, typisch für Gutachten' },
        { text: 'Die Studie wurde nie wiederholt; **demnach** sind ihre Ergebnisse mit Vorsicht zu genießen.' },
        { text: 'Der Zulieferer fiel aus, **infolgedessen** stand die Produktion still.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'adversativ',
      titel: 'Gegenüberstellung',
      items: [
        { text: 'Die einen loben die Reform, die anderen **hingegen** kritisieren sie scharf.', gl: '— *hingegen* steht gern nach dem kontrastierten Element' },
        { text: 'Die Regierung zeigt sich optimistisch; die Opposition **indes** spricht von Schönfärberei.' },
        { text: 'In der Stadt sinken die Mieten, **wohingegen** sie auf dem Land steigen.', gl: '— Subjunktion: Verb ans Ende' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'einschränkend · kausal',
      titel: 'Bedingung und Begründung',
      items: [
        { text: 'Ich unterschreibe, **sofern** die Bedingungen fair **sind**.', gl: '— Subjunktion → Verb ans Ende' },
        { text: 'Wir nehmen teil, **es sei denn**, das Wetter macht uns einen Strich durch die Rechnung.' },
        { text: 'Er ist der richtige Kandidat, **zumal** er Auslandserfahrung **hat**.', gl: '— zusätzlicher Grund, nicht bloßes *weil*' },
        { text: '**Da** die Frist bereits morgen **abläuft**, bitten wir um eine rasche Antwort.' },
        { text: 'Möge das Projekt gelingen, **auf dass** sich die Mühe gelohnt **habe**.', gl: '— feierlich-archaisch; erkennen, kaum selbst verwenden' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bestimme für den markierten Konnektor die Wortart (Adverb, Subjunktion, Präposition) und erkläre die Verbstellung.',
      aufgaben: [
        'Die Zahlen sind rückläufig, **gleichwohl** investiert die Firma weiter.',
        '**Wenngleich** der Vorschlag Charme hat, ist er nicht finanzierbar.',
        '**Ungeachtet** aller Proteste wurde das Gesetz verabschiedet.',
        'Der Markt wächst, **demnach** lohnt sich der Einstieg.',
        'Wir verlängern den Vertrag, **sofern** beide Seiten zustimmen.',
      ],
      loesungen: [
        '**Adverb** — besetzt Position 1, danach sofort das konjugierte Verb: *gleichwohl investiert …* (Inversion).',
        '**Subjunktion** — leitet einen Nebensatz ein, das Verb steht am Ende: *… Charme hat*.',
        '**Präposition** — kein Satz, sondern Nominalphrase im Genitiv: *aller Proteste*. Die Verbstellung des Hauptsatzes bleibt unberührt.',
        '**Adverb** — Inversion: *demnach lohnt sich …*.',
        '**Subjunktion** — Verbletztstellung: *… beide Seiten zustimmen*. ~~Ojo: «siempre que» pide subjuntivo en español; en alemán basta el indicativo con el verbo al final.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Ersetze den neutralen Konnektor durch die gehobene Variante in Klammern und passe die Syntax an.',
      aufgaben: [
        'Das Projekt ist teuer, **trotzdem** wird es fortgesetzt. *(gleichwohl)*',
        'Die Nachfrage sinkt, **deshalb** müssen wir reagieren. *(folglich)*',
        '**Obwohl** die Beweislage klar ist, zögert das Gericht. *(wenngleich)*',
        'Die Jüngeren sind dafür, **aber** die Älteren lehnen ab. *(hingegen)*',
        'Er verdient den Posten, **auch weil** er das Team seit Jahren kennt. *(zumal)*',
        '**Obwohl es viele Warnungen gab**, fuhr er los. *(ungeachtet + Nominalphrase)*',
      ],
      loesungen: [
        'Das Projekt ist teuer, **gleichwohl wird es fortgesetzt**. — Adverb, Inversion bleibt.',
        'Die Nachfrage sinkt, **folglich müssen wir reagieren**.',
        '**Wenngleich die Beweislage klar ist**, zögert das Gericht. — Subjunktion, Verb ans Ende.',
        'Die Jüngeren sind dafür, **die Älteren hingegen lehnen ab**. — *hingegen* steht elegant nach dem kontrastierten Subjekt.',
        'Er verdient den Posten, **zumal er das Team seit Jahren kennt**.',
        '**Ungeachtet zahlreicher Warnungen** fuhr er los. — Aus dem Nebensatz wird eine Genitivphrase (Lektion 3 lässt grüßen).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen Absatz (4-5 Sätze) für einen Diskussionsbeitrag zum Thema „Homeoffice-Pflicht für Unternehmen?“. Verwende genau **drei** gehobene Konnektoren: einen konzessiven, einen folgernden und einen adversativen. Markiere sie.',
      aufgabe: '*Stichpunkte: Pendelzeiten entfallen · Teamgeist leidet · nicht jede Tätigkeit ist digitalisierbar · Vertrauen der Arbeitgeber*',
      loesung: '**Mögliche Lösung** (jede Kombination aus je einem konzessiven, folgernden und adversativen Konnektor ist richtig):\n*Für viele Beschäftigte entfallen im Homeoffice die täglichen Pendelzeiten, **folglich** steigt ihre Zufriedenheit messbar. **Wenngleich** dieser Gewinn an Lebensqualität unbestreitbar ist, leidet auf Dauer der Teamgeist. Befürworter verweisen auf das Vertrauen, das Arbeitgeber ihren Mitarbeitern entgegenbringen sollten; Kritiker **hingegen** betonen, dass sich längst nicht jede Tätigkeit digitalisieren lässt. Eine gesetzliche Pflicht griffe daher zu kurz.*\n~~Fíjate: tres conectores en cuatro frases es el máximo. Más sonaría artificial — y eso también resta puntos.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Im echten Teil 2 fehlen in einem Text Wörter aus einer Liste — Konnektoren gehören zu den häufigsten Testfällen, weil sie Wortart und Verbstellung verraten. Wähle für jede Lücke das passende Wort.',
      absaetze: [
        'Die Vier-Tage-Woche gilt vielen als Modell der Zukunft. {1} zeigen Pilotprojekte in mehreren Ländern, dass die Produktivität nicht zwangsläufig sinkt. Die Ergebnisse sind {2} mit Vorsicht zu interpretieren, {3} sich vor allem motivierte Unternehmen freiwillig gemeldet hatten. Befürworter sehen in der Verkürzung einen Gewinn an Lebensqualität; Skeptiker {4} verweisen auf Branchen, in denen sich Arbeitszeit nicht beliebig verdichten lässt. {5} der offenen Fragen wird das Modell weiter erprobt — {6} eine flächendeckende Einführung derzeit nicht zur Debatte steht.',
      ],
      optionen: ['hingegen', 'Immerhin', 'gleichwohl', 'zumal', 'wenngleich', 'Ungeachtet'],
      loesungen: [
        '{1} **Immerhin** — einräumend-positiv wertendes Adverb, Position 1 mit Inversion (*zeigen Pilotprojekte*)',
        '{2} **gleichwohl** — konzessives Adverb im Mittelfeld: *sind gleichwohl mit Vorsicht …*',
        '{3} **zumal** — verstärkender Zusatzgrund, Subjunktion: Verb *hatten* am Ende',
        '{4} **hingegen** — adversativ, elegant nach dem Subjekt *Skeptiker*',
        '{5} **Ungeachtet** — Präposition + Genitiv (*der offenen Fragen*)',
        '{6} **wenngleich** — konzessive Subjunktion: Verb *steht* am Ende',
      ],
      kommentar: 'Strategie: Prüfe zuerst die **Verbstellung nach der Lücke**. Verb sofort dahinter → Adverb; Verb am Satzende → Subjunktion; Genitivphrase ohne Verb → Präposition. Damit scheiden meist die Hälfte der Optionen sofort aus.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** genügen ein bis zwei gehobene Konnektoren pro Absatz — Übertreibung wirkt gekünstelt und die Prüfer erkennen auswendig gelernte Ketten sofort. Und Vorsicht vor dem spanischen Muster: nach *sin embargo* kommt ein Komma und dann das Subjekt; nach **gleichwohl** oder **folglich** kommt **sofort das Verb**. *„Gleichwohl, das Projekt wird fortgesetzt“* ist der klassische Interferenzfehler.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Adverb → Inversion', 'Gleichwohl überzeugt das Argument viele.'],
        ['Subjunktion → Verb ans Ende', 'wenngleich Zweifel bestehen'],
        ['Präposition → Nominalphrase + Genitiv', 'ungeachtet aller Proteste'],
        ['zumal = zusätzlicher Grund', 'zumal er Erfahrung hat (≠ bloßes weil)'],
        ['Konzessivformel', 'So überzeugend es auch sein mag, …'],
        ['Dosis: 1-2 pro Absatz', 'Register zeigen, nicht auftürmen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann jeden gehobenen Konnektor seiner Funktion und seiner Wortart zuordnen.',
        'Ich baue nach Adverbien die Inversion und nach Subjunktionen die Verbletztstellung fehlerfrei.',
        'Ich verwende *wenngleich*, *obschon* und die Formel *so … auch sein mag* aktiv im Schreiben.',
        'Ich setze pro Absatz höchstens ein bis zwei gehobene Konnektoren ein.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bisher stand jeder Konnektor allein. Die Schriftsprache liebt aber auch **Paare, die sich über den Satz verteilen**: *sowohl … als auch*, *je … desto*, *zwar … aber*. Diese zweiteiligen Konnektoren haben ihre eigenen Stellungsregeln — und ihre eigenen Fallen. Genau darum geht es in der nächsten Lektion.',
    },
  ],
}
