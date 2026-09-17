// Geschichte 5 · Eine wichtige Entscheidung
//
// Lectura graduada B1 — cierre de la saga B1 (ver BIBLIA de la saga).
// Gramática: bloques 0-4 completos. María decide (editorial, según canon:
// «se postula y consigue trabajo de asistente») y con Paul cambia algo —
// sutil, sin telenovela. Cierra con prose (no ausblick) hacia B2.

export default {
  spec: ['Geschichte 5', 'Lectura graduada', 'Niveau B1', 'Wortschatz: Bloque 0-4'],
  h1: 'Eine wichtige Entscheidung',
  lead: 'Café Sonne oder Verlag Morgenlicht? María trifft ihre Entscheidung — und am See passiert noch etwas anderes. ~~Último capítulo del curso B1.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Entscheidung, -en', kollokation: 'eine Entscheidung treffen', es: 'la decisión' },
        { wort: 'sich entscheiden für + Akk.', kollokation: 'sich für die Stelle entscheiden', es: 'decidirse por' },
        { wort: 'kündigen', kollokation: 'seine Stelle kündigen', es: 'dejar (un trabajo), renunciar' },
        { wort: 'der Abschied, -e', kollokation: 'der Abschied fällt schwer', es: 'la despedida' },
        { wort: 'der Vertrag, ·träge', kollokation: 'einen Vertrag unterschreiben', es: 'el contrato' },
        { wort: 'unterschreiben', kollokation: 'mit blauem Stift unterschreiben', es: 'firmar' },
        { wort: 'der Neuanfang, ·fänge', kollokation: 'ein Neuanfang im Juni', es: 'el nuevo comienzo' },
        { wort: 'umarmen', kollokation: 'jemanden fest umarmen', es: 'abrazar' },
        { wort: 'stolz auf + Akk.', kollokation: 'stolz auf jemanden sein', es: 'orgulloso/a de' },
      ],
      hinweis: 'Ojo: **kündigen** es dejar el trabajo o rescindir un contrato — no «anunciar» (eso es *ankündigen*). Un clásico entre hispanohablantes.',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Eine Liste mit zwei Spalten',
      absaetze: [
        'Am Sonntagabend saß María am Küchentisch und machte eine Liste mit zwei Spalten ~~(columnas)~~: **Vorteile**, **Nachteile**. Café Sonne: die Menschen, die Sicherheit, Deniz. Verlag: der Traum, das Lernen, die Angst. **Einerseits** war das Café ihr Zuhause geworden. **Andererseits** — und dieses „andererseits" wurde jede Minute größer — war sie nicht nach Berlin gekommen, um für immer Milchkaffee zu machen. Am Ende half die Liste nichts. Listen helfen nie bei den wichtigen Fragen.',
        'Sie rief Deniz an. „Ich muss dir etwas sagen", begann sie. — „Du nimmst die Stelle", sagte Deniz sofort. „María, bitte. Ich arbeite seit Jahren mit dir. Ich sehe doch, wie du jedes Buch ansiehst, das ein Gast auf den Tisch legt." Er machte eine Pause. „Eine neue Kollegin finden wir. Aber du findest nicht jeden Tag einen Traum, der **zurückruft**."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am Montag um acht rief María im Verlag an. „Herr Lindström? Ich nehme die Stelle." — „Gut", sagte er. „Dienstag, zehn Uhr, **Vertrag**. Bringen Sie einen Stift mit." Das war alles. María stand noch eine Minute mit dem Handy in der Hand am Fenster und lachte einfach.',
        '**Kündigen** war schwerer. María stand eine Minute vor dem Büro, atmete tief und dachte an ihren ersten Tag im Café Sonne: wie sie „Cappuccino" verstanden hatte, wenn die Gäste „Kakao" sagten, und wie Deniz sie damals gerettet hatte, immer wieder. Dann klopfte sie an. Ihre Chefin hörte zu, nickte langsam und sagte nur: „Schade. Und richtig so." Zwei Sätze, beide wahr.',
        'Am letzten Arbeitstag, Ende Mai, hängte Deniz ein Schild an die Tür: „Heute Abend geschlossen — Familienfeier." Es kamen alle: Carla mit einem Kuchen, Frau Krüger mit einer Karte („Für das Mädchen aus dem dritten Stock, das jetzt Bücher macht"), sogar zwei Stammgäste. Es gab Musik, Kaffee und am Ende Tränen ~~(lágrimas)~~ — die guten. Deniz **umarmte** sie fest. Der **Abschied** war kein Ende. Er fühlte sich an wie eine Tür, die offen bleibt.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Später, als alle weg waren, gingen María und Paul durch den Volkspark. Sie redeten erst viel und dann immer weniger, so wie Menschen, die sich gut kennen und nichts beweisen müssen. Am See blieben sie stehen. Der Abend war warm, das Wasser still.',
        '„Weißt du noch", sagte Paul, „vor zwei Jahren? Du konntest drei Sätze auf Deutsch, und einen davon hast du zur Waschmaschine gesagt." María lachte. „Und jetzt?" — „Jetzt", sagte Paul, „unterschreibst du morgen einen **Vertrag** in einem Verlag." Er sah auf das Wasser. „Ich bin **stolz auf** dich. Das wollte ich schon lange sagen. Und noch etwas —" Er sagte es nicht.',
        'Er nahm ihre Hand. Einfach so, mitten im Satz. Und María, die in zwei Jahren gelernt hatte, dass die wichtigsten Dinge oft ohne Worte passieren, sagte auch nichts. Sie ließ die Hand, wo sie war. Am See wurde es langsam dunkel, und irgendwo hinter den Bäumen fing der Sommer an.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen zur Geschichte.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum hilft die Liste mit Vorteilen und Nachteilen María nicht — und wer hilft ihr wirklich?',
        'Wie reagieren die Chefin und Deniz auf Marías Entscheidung?',
        'Richtig oder falsch? Der Abschied vom Café fühlt sich für María wie ein Ende an.',
        '**Interpretation:** Paul sagt: „Und noch etwas —" und spricht nicht weiter. Was passiert stattdessen, und was bedeutet das für die beiden?',
      ],
      loesungen: [
        'Die Liste hilft nicht, weil wichtige Entscheidungen keine Rechenaufgaben sind — „Listen helfen nie bei den wichtigen Fragen". Deniz hilft ihr: Er kennt sie gut und sagt ihr ehrlich, dass ein Traum, der zurückruft, wichtiger ist als die Sicherheit.',
        'Die Chefin sagt: „Schade. Und richtig so" — sie verliert María ungern, findet die Entscheidung aber richtig. Deniz organisiert am letzten Tag eine „Familienfeier" im Café und umarmt sie zum Abschied.',
        '**Falsch.** Der Abschied „war kein Ende. Er fühlte sich an wie eine Tür, die offen bleibt" — die Freundschaften bleiben.',
        'Mögliche Antwort: Statt den Satz zu beenden, nimmt Paul ihre Hand — und María lässt sie dort. Die beiden sagen mit dieser Geste mehr als mit Worten: Aus der Freundschaft ist etwas mehr geworden. Die Geschichte zeigt es diskret, ohne großes Drama — „die wichtigsten Dinge passieren oft ohne Worte". ~~Cualquier respuesta que lea el gesto como el inicio discreto de algo más es válida.~~',
      ],
    },

    { type: 'rule' },

    // ── Abschluss (cierre de la saga B1) ──────────────────────────
    {
      type: 'prose',
      card: true,
      eyebrow: 'Wie es weitergeht',
      titel: 'Ende — und Anfang',
      absaetze: [
        'Am Dienstag um zehn **unterschrieb** María den **Vertrag** — mit blauem Stift und der geradesten Unterschrift ihres Lebens. Ab Juni ist sie Assistentin im Verlag Morgenlicht: E-Mails, **Termine**, Post, Kaffee — und Bücher, jeden Tag Bücher. Ein **Neuanfang**, ganz ohne Netz? Nicht ganz: Carla wohnt im Zimmer nebenan, Deniz macht weiter den besten Kaffee der Stadt, und Paul … Paul ist jetzt mehr als der Nachbar von früher.',
        'Wie María ihr erstes eigenes Projekt im Verlag koordiniert, was Herr Lindström wirklich von ihr erwartet und wie es mit Paul weitergeht — das erzählen die Geschichten im Kurs **Deutsch B2**. Du hast das letzte Kapitel von B1 gelesen. **Das hast du geschafft.**',
      ],
    },
  ],
}
