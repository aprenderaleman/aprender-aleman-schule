// Lektion 05 · Konjunktiv I — indirekte Rede
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen · Hören · Schreiben'],
  h1: 'Konjunktiv I — indirekte Rede',
  lead: 'Fremde Aussagen wiedergeben, ohne sie zu unterschreiben: die Grammatik der Distanz, ohne die kein Zeitungstext und kein Bericht auskommt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du den Konjunktiv I in allen drei Zeitstufen bilden (Gegenwart, Vergangenheit, Zukunft).',
        'Du überträgst direkte Rede korrekt — auch Fragen und Aufforderungen (*er solle*, *sie möge*).',
        'Du weichst bei Formengleichheit mit dem Indikativ systematisch auf den Konjunktiv II aus.',
        'Du liest Pressetexte richtig: Du erkennst am Konjunktiv, was Redewiedergabe ist — und was der Autor selbst behauptet.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'behaupten', kollokation: 'behaupten, etwas sei erwiesen', es: 'afirmar (sin garantía)' },
        { wort: 'betonen', kollokation: 'betonen, wie dringend etwas sei', es: 'recalcar, subrayar' },
        { wort: 'einräumen', kollokation: 'Fehler einräumen', es: 'admitir, reconocer' },
        { wort: 'bestreiten', kollokation: 'einen Vorwurf bestreiten', es: 'negar, refutar' },
        { wort: 'versichern', kollokation: 'glaubhaft versichern', es: 'asegurar' },
        { wort: 'dementieren', kollokation: 'Gerüchte dementieren', es: 'desmentir (oficialmente)' },
        { wort: 'sich äußern', kollokation: 'sich zu den Vorwürfen äußern', es: 'pronunciarse' },
        { wort: 'die Äußerung', kollokation: 'eine Äußerung zurücknehmen', es: 'declaración' },
        { wort: 'die Stellungnahme', kollokation: 'eine Stellungnahme abgeben', es: 'toma de postura, comunicado' },
        { wort: 'der Vorwurf', kollokation: 'schwere Vorwürfe erheben', es: 'acusación, reproche' },
        { wort: 'zufolge', kollokation: 'dem Bericht zufolge', es: 'según (pospuesto, + dativo)' },
        { wort: 'laut', kollokation: 'laut einer aktuellen Studie', es: 'según' },
        { wort: 'angeblich', kollokation: 'der angebliche Zeuge', es: 'supuesto, presunto' },
      ],
      hinweis: 'Diese **Redeeinleitungen** sind nie neutral: *behaupten* signalisiert Zweifel, *versichern* Nachdruck, *einräumen* ein Zugeständnis. Wer im Schreiben zwischen ihnen wechselt, statt dreimal *sagen* zu schreiben, punktet doppelt — beim Wortschatz und bei der Textlogik.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Distanz durch Form',
      absaetze: [
        'Der Konjunktiv I markiert: **Das sagt jemand anderes — ich gebe es nur weiter.** *Die Ministerin erklärte, die Lage **sei** ernst.* Ob die Lage wirklich ernst ist, lässt der Schreiber offen. Diese eingebaute Distanz macht den Konjunktiv I zum Pflichtwerkzeug von Journalismus, Protokoll und Bericht — und zu einem Verstehens-Schlüssel im Lesen und Hören.',
        'Für Hispanohablantes die wichtigste Warnung zuerst: ~~El Konjunktiv I NO es el subjuntivo español. El español usa indicativo en el estilo indirecto (dijo que la situación *era* grave); el alemán usa una forma propia que no expresa deseo ni emoción, solo „esto es cita“.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der Drei-Schritt der indirekten Rede',
      steps: [
        {
          titel: 'Zeitstufe bestimmen — es gibt nur drei',
          text: 'Original im Präsens → Konjunktiv I **Gegenwart** (*er komme*). Original in **irgendeiner** Vergangenheit (Präteritum, Perfekt, Plusquamperfekt) → Konjunktiv I **Perfekt** (*er sei gekommen*, *er habe gearbeitet*). Original im Futur → **werde + Infinitiv**. ~~No hay concordancia de tiempos como en español: „dijo que vendría“ ≠ retroceso — la referencia es siempre el momento del hablante original.~~',
        },
        {
          titel: 'Form bilden — Stamm + e',
          text: 'Verbstamm + **-e**-Endungen, ohne Vokalwechsel: *er komme, er habe, er könne, er wisse, er fahre*. Sonderfall __sein__: *ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien* — das einzige Verb mit vollem, brauchbarem Formensatz.',
        },
        {
          titel: 'Formengleichheit prüfen → Konjunktiv II',
          text: 'Ist die Konjunktiv-I-Form mit dem **Indikativ identisch** — vor allem in der 1. Person und im Plural (*sie haben*, *wir kommen*) —, weiche auf den **Konjunktiv II** aus: *sie hätten*, *wir kämen*. Ist auch der doppeldeutig, hilft *würde + Infinitiv*: *sie würden kommen*.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Zeitstufen im Überblick',
      kopf: ['Originalaussage', 'Indirekte Rede', 'Zeitstufe'],
      zeilen: [
        ['„Ich arbeite viel.“', 'Er sagte, er arbeite viel.', 'Gegenwart'],
        ['„Ich arbeitete / habe gearbeitet / hatte gearbeitet.“', 'Er sagte, er habe gearbeitet.', 'Vergangenheit — eine Form für alle drei'],
        ['„Ich kam zu spät an.“', 'Er sagte, er sei zu spät angekommen.', 'Vergangenheit mit sein-Perfekt'],
        ['„Ich werde helfen.“', 'Er sagte, er werde helfen.', 'Zukunft'],
        ['„Wir haben keine Zeit.“', 'Sie sagten, sie hätten keine Zeit.', 'Ausweichform Konjunktiv II'],
        ['„Kommen Sie bitte pünktlich!“', 'Er bat, sie möge pünktlich kommen. / Er sagte, sie solle pünktlich kommen.', 'Aufforderung'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Aufforderungen, Fragen — und die Logik der Pressesprache',
      absaetze: [
        'Ein **Imperativ** wird mit Modalverb wiedergegeben: neutral mit __sollen__ (*Er sagte, ich solle warten*), höflich-gehoben mit __mögen__ (*Sie bat, man möge sie entschuldigen*). **Ja/Nein-Fragen** leitet *ob* ein (*Sie fragte, ob der Termin noch stehe*), **W-Fragen** behalten ihr Fragewort (*Er wollte wissen, warum die Kosten gestiegen seien*).',
        'In Zeitungstexten trägt der Konjunktiv die Redewiedergabe **über ganze Absätze**, ohne dass *sagte* wiederholt wird: *Die Ministerin verteidigte den Plan. Die Finanzierung **sei** gesichert, niemand **müsse** sich Sorgen machen. Man **werde** alle Optionen prüfen.* Springt der Text zurück in den **Indikativ**, spricht wieder der Autor — genau diese Grenze fragt das Lesen ab.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'Zeitstufen',
      titel: 'Drei Stufen, keine mehr',
      items: [
        { text: '„Ich bin zuversichtlich.“ → Sie erklärte, sie **sei** zuversichtlich.', gl: '— Gegenwart' },
        { text: '„Wir hatten die Zahlen geprüft.“ → Sie versicherte, man **habe** die Zahlen **geprüft**.', gl: '— Plusquamperfekt → trotzdem nur K I Perfekt' },
        { text: '„Der Zug kam pünktlich an.“ → Er berichtete, der Zug **sei** pünktlich **angekommen**.' },
        { text: '„Wir werden die Preise senken.“ → Der Konzern kündigte an, man **werde** die Preise senken.', gl: '— Zukunft' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ausweichen',
      titel: 'Wenn Konjunktiv I wie Indikativ aussieht',
      items: [
        { text: '„Wir haben genug Beweise.“ → Die Anwälte erklärten, sie **hätten** genug Beweise.', gl: '— *sie haben* = Indikativ → K II' },
        { text: '„Die Mitarbeiter wissen davon nichts.“ → Es hieß, die Mitarbeiter **wüssten** davon nichts.' },
        { text: '„Wir gehen von steigenden Kosten aus.“ → Sie sagten, sie **gingen** von steigenden Kosten aus / sie **würden** von steigenden Kosten **ausgehen**.', gl: '— *gingen* klingt gehoben; *würde* ist die sichere Alternative' },
        { text: '„Ich habe nichts falsch gemacht.“ → Er beteuert, er **habe** nichts falsch gemacht — aber: „Wir haben nichts falsch gemacht.“ → Sie beteuern, sie **hätten** nichts falsch gemacht.', gl: '— derselbe Satz, zwei Formen: Nur der Numerus entscheidet' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Aufforderung · Frage',
      titel: 'Imperativ und Fragesatz indirekt',
      items: [
        { text: '„Reichen Sie die Unterlagen nach!“ → Die Behörde teilte mit, er **solle** die Unterlagen nachreichen.' },
        { text: '„Bitte haben Sie noch etwas Geduld.“ → Man bat, die Kunden **möchten** noch etwas Geduld haben.', gl: '— *möge/möchten*: die höfliche Variante von *sollen*; im Plural steht *möchten*, weil *mögen* mit dem Indikativ identisch wäre' },
        { text: '„Ist die Finanzierung gesichert?“ → Journalisten fragten, **ob** die Finanzierung gesichert **sei**.' },
        { text: '„Warum wurde niemand informiert?“ → Die Opposition wollte wissen, **warum** niemand informiert **worden sei**.', gl: '— K I + Passiv Perfekt: *worden sei*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Pressesprache',
      titel: 'Der Konjunktiv trägt den Absatz',
      items: [
        { text: 'Der Sprecher dementierte den Bericht. Es **gebe** keine Pläne für Entlassungen, der Standort **sei** nicht gefährdet. Man **wolle** im Gegenteil investieren.', gl: '— drei Sätze Redewiedergabe, nur eine Redeeinleitung' },
        { text: 'Laut der Studie **ist** das Risiko gering. / Der Studie zufolge **sei** das Risiko gering.', gl: '— nach *laut/zufolge* ist Indikativ üblich; der Konjunktiv verstärkt die Distanz' },
        { text: 'Die Zahlen sind falsch — das räumte inzwischen auch der Vorstand ein.', gl: '— Indikativ: hier behauptet es der Autor selbst' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Konjunktiv I, Ausweichform Konjunktiv II oder Indikativ? Entscheide — und sage, wer hier eigentlich spricht: die zitierte Person oder der Autor.',
      aufgaben: [
        'Der Bürgermeister erklärte, die Sanierung sei abgeschlossen.',
        'Die Anwohner sagten, sie hätten von den Plänen nichts gewusst.',
        'Die Sanierung hat drei Jahre gedauert.',
        'Die Firma teilte mit, man werde die Fristen künftig einhalten.',
        'Kritiker meinten, die Stadt wisse seit Langem von den Mängeln.',
      ],
      loesungen: [
        '**Konjunktiv I** (*sei*) — Redewiedergabe: Es ist die Behauptung des Bürgermeisters, nicht des Autors.',
        '**Ausweichform K II** (*hätten*) — *sie haben* wäre mit dem Indikativ identisch; die Aussage stammt von den Anwohnern.',
        '**Indikativ** — hier spricht der Autor selbst und stellt einen Fakt fest.',
        '**Konjunktiv I** (*werde*) — Zukunft in der indirekten Rede; Aussage der Firma.',
        '**Konjunktiv I** (*wisse*) — Behauptung der Kritiker. ~~En español las cinco frases llevarían indicativo — la diferencia que el alemán marca con la forma verbal, el español la deja al contexto.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Übertrage in die indirekte Rede. Achte auf Zeitstufe, Formengleichheit und die Wiedergabe von Frage und Aufforderung.',
      aufgaben: [
        'Die Ministerin: „Die Reform entlastet die Familien.“',
        'Der Zeuge: „Ich habe den Unfall genau gesehen.“',
        'Die Studierenden: „Wir bekommen zu wenig Unterstützung.“',
        'Der Arzt: „Bleiben Sie zwei Tage zu Hause!“',
        'Die Journalistin: „Wann wurde der Fehler entdeckt?“',
        'Der Trainer: „Wir werden das Finale gewinnen.“',
      ],
      loesungen: [
        'Die Ministerin sagte, die Reform **entlaste** die Familien.',
        'Der Zeuge versicherte, er **habe** den Unfall genau **gesehen**.',
        'Die Studierenden klagten, sie **bekämen** zu wenig Unterstützung / sie **würden** zu wenig Unterstützung **bekommen**. ~~*sie bekommen* sería idéntico al indicativo → Ausweichen.~~',
        'Der Arzt sagte, er/sie **solle** zwei Tage zu Hause bleiben.',
        'Die Journalistin fragte, **wann** der Fehler **entdeckt worden sei**.',
        'Der Trainer kündigte an, man **werde** das Finale gewinnen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Mache aus dem Interviewausschnitt eine kurze Zeitungsmeldung (3-4 Sätze) in indirekter Rede. Nur **eine** Redeeinleitung — danach soll der Konjunktiv allein die Wiedergabe tragen.',
      aufgabe: '*Interview mit der Leiterin des Stadtarchivs:* „Unser Archiv platzt aus allen Nähten. Wir haben seit Jahren einen Neubau beantragt, aber die Stadt hat nie reagiert. Nächstes Jahr werden wir wertvolle Bestände auslagern müssen. Besuchen Sie uns — dann verstehen Sie das Problem sofort!“',
      loesung: '**Mögliche Lösung** (Redeeinleitung und Satzfolge dürfen variieren):\n*Die Leiterin des Stadtarchivs schlug Alarm: Das Archiv **platze** aus allen Nähten. Man **habe** seit Jahren einen Neubau **beantragt**, doch die Stadt **habe** nie **reagiert**. Nächstes Jahr **werde** man wertvolle Bestände auslagern müssen. Man **möge** das Archiv besuchen — dann **verstehe** man das Problem sofort.*\nGültig sind auch *Die Bürger sollten das Archiv besuchen* statt *man möge* und *verstünde* statt *verstehe*; entscheidend ist, dass **jeder** Satz eine Konjunktivform trägt.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'In Zeitungstexten des Lückentexts fehlen oft genau die Konjunktivformen — wer die Zeitstufen und die Ausweichregel kennt, löst sie mechanisch. Wähle für jede Lücke das passende Wort — jede Option wird genau einmal gebraucht.',
      absaetze: [
        'Nach dem Brand im Recyclingwerk hat sich die Betreiberfirma erstmals geäußert. Die Anlage {1} allen Vorschriften entsprochen, erklärte der Geschäftsführer. Die Ursache {2} noch unklar, man {3} aber eng mit den Ermittlern zusammen. Anwohner hatten berichtet, sie {4} schon Wochen vorher einen Brandgeruch bemerkt. Die Behörden kündigten an, das Werk {5} vorerst geschlossen bleiben. Die Anwohner {6} sich bei Beschwerden direkt an das Umweltamt wenden.',
      ],
      optionen: ['arbeite', 'habe', 'hätten', 'sei', 'sollten', 'werde'],
      loesungen: [
        '{1} **habe** — K I Perfekt: *habe entsprochen* (Vergangenheit der Originalaussage)',
        '{2} **sei** — K I Gegenwart von *sein*',
        '{3} **arbeite** — K I Gegenwart: *man arbeite zusammen*',
        '{4} **hätten** — *sie haben* wäre Indikativ → Ausweichform K II',
        '{5} **werde** — Zukunft in der indirekten Rede: *werde geschlossen bleiben*',
        '{6} **sollten** — indirekte Aufforderung an die Anwohner (K II von *sollen*, da *sollen* im Plural formgleich wäre)',
      ],
      kommentar: 'Strategie: Suche zuerst die **Redeeinleitung** (*erklärte, berichteten, kündigten an*) — alles danach braucht Konjunktiv. Dann prüfe pro Lücke nur zwei Dinge: **Zeitstufe** der Originalaussage und **Formengleichheit** mit dem Indikativ.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** signalisiert der Konjunktiv, dass der Moderator fremde Positionen referiert — verwechsle sie nicht mit seiner Meinung. Im **Diskussionsbeitrag** wirkt *Kritiker wenden ein, das Verbot **greife** zu kurz* deutlich souveräner als *Kritiker sagen, dass das Verbot zu kurz greift*. Der häufigste Fehler bleibt das fehlende Ausweichen: ***sie haben gesagt* ist keine indirekte Rede — *sie hätten* schon.**',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Nur drei Zeitstufen', 'er komme · er sei gekommen · er werde kommen'],
        ['Alle Vergangenheiten → K I Perfekt', 'sagte / hat gesagt / hatte gesagt → er habe gesagt'],
        ['Formengleichheit → K II', 'sie haben → sie hätten · wir kommen → wir kämen'],
        ['Aufforderung → sollen / mögen', 'er solle warten · man möge sie entschuldigen'],
        ['Konjunktiv = Zitat, Indikativ = Autor', 'die Lage sei ernst (er) · die Lage ist ernst (ich)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann eine Aussage in allen drei Zeitstufen in die indirekte Rede übertragen.',
        'Ich erkenne Formengleichheit und weiche automatisch auf den Konjunktiv II aus.',
        'Ich gebe Fragen mit *ob*/W-Wort und Aufforderungen mit *sollen*/*mögen* wieder.',
        'Ich unterscheide in einem Pressetext, was Redewiedergabe ist und was der Autor behauptet.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Als Ausweichform hast du den **Konjunktiv II** hier schon benutzt — aber er kann viel mehr, als Lücken zu stopfen: Er baut ganze Gegenwelten. In der nächsten Lektion geht es um irreale Bedingungen, Wünsche und Vergleiche — und um die Höflichkeitsformen, ohne die keine formelle Nachricht auskommt.',
    },
  ],
}
