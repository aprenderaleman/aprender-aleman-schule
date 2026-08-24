// Lektion 12 · Relativsätze komplex
//
// Bloque 1 «Grammatik & Struktur». Repaso der/die/das in allen Kasus,
// Relativsatz mit Präposition, Genitiv dessen/deren (regla anti-«cuyo»),
// was nach alles/etwas/nichts, wo für Orte. Ausblick → Lektion 13.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Lesen & Schreiben'],
  h1: 'Relativsätze komplex',
  lead: 'Personen und Dinge präzise beschreiben: Relativpronomen in allen Kasus, mit Präposition, im Genitiv (dessen/deren) — und die Sonderfälle was und wo.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Relativpronomen in allen vier Kasus korrekt wählen',
        'Relativsätze mit Präposition bilden (mit dem, für die, über das)',
        'dessen und deren richtig einsetzen — ohne den „cuyo“-Fehler',
        'die Sonderformen was und wo sicher verwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz (hier: die Formen als Tabelle) ─────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — alle Formen auf einen Blick',
      kopf: ['Kasus', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', 'der', 'die', 'das', 'die'],
        ['Akkusativ', 'den', 'die', 'das', 'die'],
        ['Dativ', 'dem', 'der', 'dem', '==denen=='],
        ['Genitiv', '==dessen==', '==deren==', '==dessen==', '==deren=='],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Fast alles ist identisch mit dem Artikel. Nur drei Formen sind neu: **denen** (Dativ Plural), **dessen** und **deren**. ~~Buena noticia: si dominas los artículos, ya tienes el 80% de esta lección.~~',
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Grundregel',
      card: true,
      absaetze: [
        'Zwei Fragen entscheiden über die Form: **Genus und Numerus** kommen vom Bezugswort im Hauptsatz, der **Kasus** kommt von der Funktion im Relativsatz. __Der Kollege, den ich gestern getroffen habe, …__ — *der Kollege* ist maskulin, aber im Relativsatz ist er Akkusativobjekt → *den*. Das Verb steht am Ende, der Relativsatz steht zwischen Kommas.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Präp.',
          titel: 'Mit Präposition',
          text: 'Die Präposition steht __vor__ dem Relativpronomen und bestimmt den Kasus.\n__Das ist der Kollege, **mit dem** ich das Projekt mache.__\n__Die Firma, **für die** er arbeitet, sitzt in Hamburg.__ ~~En alemán la preposición nunca se queda al final como en inglés.~~',
        },
        {
          badge: 'Genitiv',
          titel: 'dessen / deren — die Anti-„cuyo“-Regel',
          text: 'Die Form richtet sich **nach dem Bezugswort**, nicht nach dem folgenden Nomen: maskulin/neutral → __dessen__, feminin/Plural → __deren__.\n__Der Mann, **dessen** Tochter hier arbeitet, …__ (der Mann → dessen)\n~~En español «cuyo» concuerda con lo poseído (cuya hija); en alemán mira hacia atrás, al antecedente.~~ Nach dessen/deren steht das Nomen **ohne Artikel**.',
        },
        {
          badge: 'was',
          titel: 'was statt das',
          text: 'Nach __alles, etwas, nichts, vieles, das__ und nach einem Superlativ (__das Beste__) steht **was**: __Alles, **was** du sagst, stimmt.__ Auch, wenn sich der Relativsatz auf den **ganzen Satz** bezieht: __Er hat abgesagt, **was** ich schade finde.__',
        },
        {
          badge: 'wo',
          titel: 'wo für Orte',
          text: 'Bei Orten kannst du statt Präposition + Pronomen einfach **wo** nehmen: __die Stadt, **wo** ich wohne__ = __die Stadt, **in der** ich wohne__. Bei Städte- und Ländernamen ist *wo* sogar die einzige Option: __in Berlin, **wo** …__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Schritt für Schritt',
      kicker: 'Präposition',
      titel: 'Relativsatz mit Präposition',
      items: [
        { text: 'Das Thema, **über das** wir gesprochen haben, ist wichtig.', gl: '— sprechen über + Akk.' },
        { text: 'Die Nachbarn, **mit denen** wir uns gut verstehen, ziehen um.', gl: '— Dativ Plural: denen' },
        { text: 'Der Kurs, **an dem** ich teilnehme, endet im Juli.', gl: '— teilnehmen an + Dat.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Genitiv',
      titel: 'dessen / deren',
      items: [
        { text: 'Der Autor, **dessen** Buch ich gerade lese, kommt aus Österreich.', gl: '— der Autor → dessen (aunque «Buch» sea neutro)' },
        { text: 'Die Firma, **deren** Produkte du kennst, sucht Personal.', gl: '— die Firma → deren' },
        { text: 'Die Studenten, **deren** Prüfung verschoben wurde, protestieren.', gl: '— Plural → deren' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Sonderformen',
      titel: 'was & wo',
      items: [
        { text: 'Es gibt nichts, **was** ich lieber mache.', gl: '— nach nichts → was' },
        { text: 'Das ist das Beste, **was** mir passieren konnte.', gl: '— nach Superlativ → was' },
        { text: 'Das Café, **wo** wir uns immer treffen, hat zu.', gl: '— lugar → wo (= in dem)' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Der kritische Kontrast — español vs. Deutsch',
      zeilen: [
        { satz: 'la mujer cuyo coche… → die Frau, deren Auto…', label: 'concuerda con «die Frau», no con «Auto»' },
        { satz: 'el amigo con el que viajo → der Freund, mit dem ich reise', label: 'Präposition + Pronomen, verbo al final' },
        { satz: 'todo lo que dices → alles, was du sagst', label: 'alles/etwas/nichts → was, nunca das' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Form ist richtig — und warum?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Film, (der / den / dem) wir gesehen haben, war langweilig.',
        'Die Kollegin, (deren / dessen / die) Büro nebenan liegt, ist im Urlaub.',
        'Alles, (das / was / wo) er erzählt, ist übertrieben.',
        'Die Leute, (mit den / mit denen / mit deren) ich arbeite, sind nett.',
      ],
      loesungen: [
        '**den** — Akkusativobjekt im Relativsatz (wir haben *den Film* gesehen).',
        '**deren** — Bezugswort *die Kollegin* (feminin) → deren, egal dass *Büro* neutral ist.',
        '**was** — nach *alles* steht immer was.',
        '**mit denen** — Dativ Plural nach *mit*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Verbinden',
      frage: 'Bilde aus zwei Sätzen einen Relativsatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist der Trainer. Ich habe dir von ihm erzählt.',
        'Wir besichtigen eine Wohnung. Ihre Miete ist bezahlbar.',
        'Sie hat die Prüfung bestanden. Das freut mich sehr.',
      ],
      loesungen: [
        'Das ist der Trainer, **von dem** ich dir erzählt habe.',
        'Wir besichtigen eine Wohnung, **deren** Miete bezahlbar ist.',
        'Sie hat die Prüfung bestanden, **was** mich sehr freut.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Definiere die drei Begriffe mit einem Relativsatz: ein Mitbewohner, eine Bibliothek, ein Smartphone.',
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ein Mitbewohner ist jemand, **mit dem** man eine Wohnung teilt.',
        'Eine Bibliothek ist ein Ort, **wo** man Bücher ausleihen kann. ~~También válido: an dem / in der.~~',
        'Ein Smartphone ist ein Gerät, **ohne das** viele nicht mehr leben können.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'Setze das passende Relativpronomen ein (Auswahl) — so prüft der formelle Regeltext im Modul Lesen solche Strukturen.',
      absaetze: [
        'Teilnehmende, {1} Anmeldung nach dem 1. März eingeht, zahlen eine höhere Gebühr. Der Kursraum, {2} die Prüfung stattfindet, wird eine Woche vorher bekannt gegeben. Alles, {3} Sie zur Prüfung mitbringen müssen, steht auf der Einladung.',
      ],
      optionen: [
        '(1) a) dessen · b) deren · c) die',
        '(2) a) in dem · b) in den · c) in der',
        '(3) a) das · b) was · c) welches',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b) deren** — Bezugswort *Teilnehmende* (Plural) → deren.',
        '{2} **a) in dem** — *der Kursraum* (maskulin), Ort → Dativ nach *in*; *in den* wäre Akkusativ, *in der* feminin.',
        '{3} **b) was** — nach *alles* steht was.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Forumsbeitrag** hebt schon ein guter Relativsatz mit Präposition oder ein *dessen/deren* das Kriterium „Strukturen“. Kontrolliere beim Korrekturlesen zwei Dinge: steht das **Verb am Ende** des Relativsatzes, und stehen die **Kommas**? ~~Y recuerda: dessen/deren mira al antecedente, nunca a la palabra siguiente.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Fall', 'Regel', 'Beispiel'],
      zeilen: [
        ['Kasus', 'Genus vom Bezugswort, Kasus vom Relativsatz', 'der Mann, den ich kenne'],
        ['Präposition', 'Präp. vor dem Pronomen, sie regiert den Kasus', 'die Firma, für die er arbeitet'],
        ['Genitiv', 'dessen (m/n) · deren (f/Pl.), nach dem Bezugswort', 'die Frau, deren Auto'],
        ['was', 'nach alles/etwas/nichts, Superlativ, ganzem Satz', 'alles, was du sagst'],
        ['wo', 'bei Orten statt Präp. + Pronomen', 'die Stadt, wo ich wohne'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bestimme den Kasus des Relativpronomens nach seiner Funktion im Relativsatz.',
        'Ich stelle die Präposition vor das Pronomen (mit dem, für die).',
        'Ich wähle dessen/deren nach dem Bezugswort — nicht wie „cuyo“.',
        'Ich benutze was nach alles/etwas/nichts und wo für Orte.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Relativsätze beschreiben ein Nomen von rechts. Die nächste Lektion zeigt den Weg von links: die **Adjektivdeklination** und das **Partizip als Attribut** — aus *die Preise, die steigen* wird *die steigenden Preise*. Das ist die Tür zum schriftlichen Stil der B2-Prüfung.',
    },
  ],
}
