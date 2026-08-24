// Lektion 13 · Adjektivdeklination & Partizip als Attribut
//
// Bloque 1 «Grammatik & Struktur». Die drei Deklinationen in einer
// kompakten Tabelle mit Merktrick, dann Partizip I/II als Adjektiv
// (die steigenden Preise, das reparierte Auto). Ausblick → Lektion 14.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Lesen'],
  h1: 'Adjektivdeklination & Partizip als Attribut',
  lead: 'Die richtige Adjektivendung ohne Raten — mit einem einzigen Merktrick — und die Partizipien als Adjektive: die steigenden Preise, das reparierte Auto.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Adjektivendung nach der-Wort, ein-Wort und ohne Artikel korrekt wählen',
        'den Merktrick „ein Signal pro Nominalgruppe“ anwenden',
        'Partizip I und Partizip II als Attribut bilden und verstehen',
        'Partizip-Attribute in einen Relativsatz zurückübersetzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'steigend', kollokation: 'die steigenden Preise', es: 'creciente, en aumento' },
        { wort: 'sinkend', kollokation: 'die sinkenden Zahlen', es: 'decreciente' },
        { wort: 'wachsend', kollokation: 'eine wachsende Stadt', es: 'en crecimiento' },
        { wort: 'zunehmend', kollokation: 'der zunehmende Verkehr', es: 'cada vez mayor' },
        { wort: 'passend', kollokation: 'eine passende Lösung', es: 'adecuado' },
        { wort: 'folgend', kollokation: 'im folgenden Text', es: 'siguiente' },
        { wort: 'geplant', kollokation: 'das geplante Projekt', es: 'planeado, previsto' },
        { wort: 'renoviert', kollokation: 'eine frisch renovierte Wohnung', es: 'renovado' },
        { wort: 'gebraucht', kollokation: 'ein gebrauchtes Auto', es: 'usado, de segunda mano' },
        { wort: 'geöffnet', kollokation: 'das geöffnete Fenster', es: 'abierto' },
        { wort: 'genannt', kollokation: 'die oben genannten Gründe', es: 'mencionado' },
      ],
      hinweis: 'Die ersten sechs sind Partizip I (Infinitiv + d), die letzten fünf Partizip II — beide werden wie normale Adjektive dekliniert.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — der Merktrick',
      card: true,
      absaetze: [
        'In jeder Nominalgruppe muss **genau einmal** das Kasus-Signal erscheinen — die typische Endung des Artikels (de**r**, da**s**, de**m** …). Zeigt der Artikel das Signal schon (*der, dieses, dem*), bleibt das Adjektiv schwach: nur **-e** oder **-en**. Zeigt der Artikel nichts (*ein* □) oder fehlt er ganz, übernimmt das **Adjektiv** das Signal: *ein alte**r** Freund, frische**s** Brot*. ~~Un solo portador de la señal por grupo: o el artículo o el adjetivo, nunca ninguno.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die Tabelle (Nominativ & Akkusativ)',
      kopf: ['Genus/Kasus', 'nach der/die/das', 'nach ein/kein/mein', 'ohne Artikel'],
      zeilen: [
        ['m · Nom.', 'der alte Freund', 'ein alte**r** Freund', 'alte**r** Wein'],
        ['m · Akk.', 'den alte**n** Freund', 'einen alte**n** Freund', 'alte**n** Wein'],
        ['f · Nom./Akk.', 'die neue Idee', 'eine neue Idee', 'frische Milch'],
        ['n · Nom./Akk.', 'das kleine Kind', 'ein kleine**s** Kind', 'frische**s** Brot'],
        ['Pl. · Nom./Akk.', 'die neue**n** Ideen', 'keine neue**n** Ideen', 'neue Ideen'],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Und der Rest? Eine einzige Regel deckt ihn ab: **Dativ, Genitiv und Plural mit Artikel → immer -en.** *Mit dem neu**en** Kollegen, trotz des schlecht**en** Wetters, die best**en** Ideen.* Wer die Tabelle oben plus diese Regel kann, beherrscht ==über 90 % aller Fälle==.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Partizip als Attribut',
      steps: [
        {
          badge: 'P I',
          titel: 'Partizip I = Infinitiv + d → aktiv, gleichzeitig',
          text: 'Etwas **tut** gerade etwas: __die steigend**en** Preise__ = die Preise, **die steigen**. __das weinende Kind__ = das Kind, das weint. ~~Equivale a «que + verbo en activa».~~',
        },
        {
          badge: 'P II',
          titel: 'Partizip II → passiv oder abgeschlossen',
          text: 'Mit etwas **wurde** etwas gemacht: __das repariert**e** Auto__ = das Auto, **das repariert wurde**. __die geplante Reise__ = die Reise, die geplant wurde/ist.',
        },
        {
          badge: 'Endung',
          titel: 'Deklination wie ein normales Adjektiv',
          text: 'Das Partizip bekommt **dieselben Endungen** wie jedes Adjektiv: *ein gebraucht**es** Auto, mit den steigend**en** Preisen*. Genau darum steht diese Lektion hier: erst Endungen, dann Partizipien.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Die drei Deklinationen',
      kicker: 'Endungen',
      titel: 'Dieselbe Idee, drei Artikel',
      items: [
        { text: '**Der** neue Mitarbeiter stellt sich vor.', gl: '— der zeigt das Signal → -e' },
        { text: '**Ein** neue**r** Mitarbeiter stellt sich vor.', gl: '— ein zeigt nichts → el adjetivo toma -r' },
        { text: 'Wir suchen dringend neue Mitarbeiter mit gute**n** Ideen.', gl: '— Dativ Plural → -en' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Partizip I',
      titel: 'Aktiv & gleichzeitig',
      items: [
        { text: 'Die **steigenden** Mieten sind das größte Problem der Stadt.', gl: '= die Mieten, die steigen' },
        { text: 'Immer mehr Menschen leiden unter dem **zunehmenden** Lärm.', gl: '= dem Lärm, der zunimmt' },
        { text: 'Für **Berufstätige** mit **wachsender** Verantwortung ist Zeit knapp.', gl: '= Verantwortung, die wächst' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Partizip II',
      titel: 'Passiv & abgeschlossen',
      items: [
        { text: 'Die **renovierte** Wohnung kostet 200 Euro mehr.', gl: '= die Wohnung, die renoviert wurde' },
        { text: 'Aus den oben **genannten** Gründen bin ich dagegen.', gl: '— fórmula típica de la formelle Nachricht' },
        { text: 'Ein **gebrauchtes** Fahrrad ist oft die bessere Wahl.', gl: '= ein Fahrrad, das gebraucht (benutzt) wurde' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Relativsatz ↔ Partizip — derselbe Inhalt, zwei Stile',
      zeilen: [
        { satz: 'die Preise, die steigen → die steigenden Preise', label: 'Partizip I · gesprochen → geschrieben' },
        { satz: 'das Auto, das repariert wurde → das reparierte Auto', label: 'Partizip II · kompakter Schriftstil' },
        { satz: 'die Teilnehmer, die angemeldet sind → die angemeldeten Teilnehmer', label: 'typisch für formelle Regeltexte (Lesen Teil 5)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Wähle die richtige Endung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er trinkt gern (schwarzer / schwarzen / schwarzes) Kaffee.',
        'Das ist ein (interessantes / interessanter / interessante) Angebot.',
        'Sie hilft dem (neue / neuen / neuer) Praktikanten.',
        'Wir wohnen in einer ruhig___ Straße mit alt___ Häusern.',
      ],
      loesungen: [
        '**schwarzen** — Akkusativ maskulin ohne Artikel: das Adjektiv trägt das Signal -en.',
        '**interessantes** — ein zeigt beim Neutrum nichts → Adjektiv übernimmt -s.',
        '**neuen** — Dativ → immer -en.',
        'in einer ruhig**en** Straße mit alt**en** Häusern — Dativ → -en, Dativ Plural → -en.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Mach aus dem Relativsatz ein Partizip-Attribut.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'die Kosten, die steigen',
        'der Bericht, der veröffentlicht wurde',
        'die Kinder, die im Garten spielen',
        'ein Problem, das gelöst wurde',
      ],
      loesungen: [
        'die **steigenden** Kosten ~~(Partizip I: activo)~~',
        'der **veröffentlichte** Bericht ~~(Partizip II: pasivo)~~',
        'die **im Garten spielenden** Kinder — die Ergänzung rückt vor das Partizip',
        'ein **gelöstes** Problem',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib drei Sätze zum Thema „Wohnen in der Stadt“ — jeder mit einem Partizip-Attribut (steigend, renoviert, geplant).',
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Die **steigenden** Mieten machen das Wohnen im Zentrum fast unmöglich.',
        'Für eine frisch **renovierte** Wohnung zahlt man schnell 300 Euro mehr.',
        'Das **geplante** Wohnprojekt am Stadtrand soll 2028 fertig sein. ~~Cualquier sustantivo plausible con la terminación correcta vale.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'Setze die passende Form ein (Auswahl) — Adjektiv- und Partizipendungen gehören zu den häufigsten Fehlerquellen im Modul Schreiben.',
      absaetze: [
        'Sehr geehrte Damen und Herren, ich habe Ihre Anzeige für die {1} Wohnung in der Gartenstraße gelesen. Wegen der {2} Mieten in der Innenstadt suche ich seit Monaten ein {3} Angebot.',
      ],
      optionen: [
        '(1) a) möblierte · b) möblierten · c) möbliertes',
        '(2) a) steigende · b) steigenden · c) steigender',
        '(3) a) bezahlbarer · b) bezahlbare · c) bezahlbares',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) möblierte** — Akkusativ feminin nach die → -e.',
        '{2} **b) steigenden** — wegen + Genitiv Plural → -en.',
        '{3} **c) bezahlbares** — ein + Neutrum: das Adjektiv trägt das Signal -s.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Zweifel gilt in der Prüfung die Statistik-Regel: **-en ist die häufigste Endung** (Dativ und Genitiv mit Artikel, Plural mit Artikel, Akkusativ maskulin). Und ein Partizip-Attribut wie *die oben genannten Gründe* im Forumsbeitrag oder in der formellen Nachricht zeigt sofort B2-Niveau beim Kriterium „Strukturen“.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Kurzform', 'Beispiel'],
      zeilen: [
        ['Merktrick', 'ein Signal pro Gruppe: Artikel oder Adjektiv', 'der alte / ein alter Freund'],
        ['Dauerregel', 'Dativ, Genitiv, Plural mit Artikel → -en', 'mit dem neuen Kollegen'],
        ['Partizip I', 'Infinitiv + d = aktiv, gleichzeitig', 'die steigenden Preise'],
        ['Partizip II', 'passiv / abgeschlossen', 'das reparierte Auto'],
        ['Rückprobe', 'Attribut ↔ Relativsatz übersetzen', 'steigend = die steigen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, wann das Adjektiv das Kasus-Signal übernehmen muss.',
        'Ich setze in Dativ, Genitiv und Plural mit Artikel automatisch -en.',
        'Ich bilde Partizip I und II als Attribut und dekliniere sie korrekt.',
        'Ich kann ein Partizip-Attribut in einen Relativsatz zurückverwandeln.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit Relativsätzen und Attributen baust du komplexe Nominalgruppen. Die nächste Lektion erweitert den Satz nach rechts: **Infinitivsätze mit zu** — *Ich habe vor, mich zu bewerben* — inklusive der wichtigsten Falle für Spanischsprachige: *para + infinitivo* ist nicht immer *um … zu*.',
    },
  ],
}
