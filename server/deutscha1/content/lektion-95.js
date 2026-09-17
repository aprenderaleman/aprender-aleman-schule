// Geschichte 5 · Die Party
//
// Lectura graduada A1 — capítulo 5 (final) de la saga de María (ver BIBLIA).
// Gramática: Bloques 0-4 (todo el A1: bestehen, schaffen, das Zertifikat).

export default {
  spec: ['Geschichte 5', 'Lectura graduada', 'Niveau A1', 'Wortschatz: Bloque 0-4'],
  h1: 'Die Party',
  lead: 'María besteht die Prüfung — und die Gartenstraße 12 feiert. ~~María aprueba el examen, y el número 12 de la Gartenstraße lo celebra.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      titel: 'Neue Wörter',
      items: [
        { wort: 'feiern', kollokation: 'eine Party feiern', es: 'celebrar' },
        { wort: 'der Gast, die Gäste', kollokation: 'die Gäste kommen', es: 'el invitado' },
        { wort: 'mitbringen', kollokation: 'einen Kuchen mitbringen', es: 'traer (consigo)' },
        { wort: 'der Kuchen', kollokation: 'der Kuchen ist für Sie', es: 'la tarta, el pastel' },
        { wort: 'tanzen', kollokation: 'essen, trinken und tanzen', es: 'bailar' },
        { wort: 'der Freund / die Freundin', kollokation: 'ein Freund, zwei Freundinnen', es: 'el amigo / la amiga' },
        { wort: 'das Geschenk', kollokation: 'ein Geschenk haben', es: 'el regalo' },
        { wort: 'glücklich', kollokation: 'müde und glücklich', es: 'feliz' },
        { wort: 'die Stadt', kollokation: 'ihre Stadt', es: 'la ciudad' },
      ],
      hinweis: '~~Y del curso ya conoces las palabras clave del final: die Prüfung, bestehen, das Zertifikat, schaffen.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Die Party',
      absaetze: [
        'Die **Prüfung** ist um neun Uhr. María hat den Ausweis und einen Kugelschreiber. Sie hört Gespräche und Ansagen. Sie liest eine E-Mail und ein Schild. Sie schreibt einen Text und füllt ein Formular aus: Vorname, Familienname, Wohnort — das kann sie! ~~¡eso lo sabe hacer!~~ Und dann spricht sie: „Ich bin María Vega. Ich komme aus Spanien …“ Sie ist nervös, aber sie versteht viel. Und dann: María **besteht** die Prüfung! ~~¡María aprueba el examen!~~ Viele Punkte! Das **Zertifikat** ist da. María **schafft** es. ~~María lo consigue.~~',
        'Heute ist die Party in der Gartenstraße 12. María möchte **feiern**. ~~María quiere celebrarlo.~~ Die **Gäste** kommen: Paul, zwei **Freundinnen** aus dem Haus ~~(dos amigas del edificio)~~ — und Frau Krüger! Frau Krüger **bringt** einen **Kuchen** **mit**. ~~Frau Krüger trae una tarta.~~ „Frau Vega, der Kuchen ist für Sie. Und Musik ist heute okay — aber nur bis zehn Uhr!“ Alle lachen. ~~Todos se ríen.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Das Geschenk',
      absaetze: [
        'Es gibt Brot, Käse, Äpfel und Kaffee aus Spanien. María kocht, Paul hilft. Sie essen, trinken und **tanzen** — auch Frau Krüger tanzt ein bisschen! Die Freundinnen fragen: „Und wer ist Paul?“ María: „Paul ist … ein Freund.“ ~~un amigo… de momento~~ Dann hat Paul ein **Geschenk**: zwei Kino-Tickets. ~~dos entradas de cine~~ „Für dich. Äh … für uns?“ María: „Für uns. Gern!“',
        'Um zehn Uhr ist die Party zu Ende. ~~A las diez la fiesta se acaba.~~ María ist müde ~~(cansada)~~ und **glücklich**. Morgen ruft sie die Mutter in Valencia an: „Mama, ich habe das Zertifikat!“ Ein Zertifikat, eine Wohnung, Freundinnen und Freunde — und Berlin ist jetzt ein bisschen ihre **Stadt**. ~~Y Berlín ya es un poco su ciudad.~~',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~Responde a las preguntas y comprueba.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Was besteht María?',
        'Wer bringt einen Kuchen mit?',
        'Was ist Pauls Geschenk?',
        'Wann ist die Party zu Ende?',
      ],
      loesungen: [
        'Die **Prüfung**. Viele Punkte — das Zertifikat ist da!',
        '**Frau Krüger**. Und heute ist Musik okay — bis zehn Uhr.',
        '**Zwei Kino-Tickets** — „für uns“. ~~Continuará…~~',
        'Um **zehn Uhr**. Die Regel von Frau Krüger — du kennst sie aus Kapitel 1! ~~la conoces del capítulo 1~~',
      ],
    },

    { type: 'rule' },

    // ── Abschied von der Staffel A1 ───────────────────────────────
    {
      type: 'prose',
      card: true,
      eyebrow: 'Ausblick',
      titel: 'Bis bald, María!',
      absaetze: [
        'Das ist das Ende der A1-Geschichten. ~~Aquí termina la primera temporada: la has leído entera en alemán. ¡Enhorabuena!~~ Und María? María hat einen neuen Plan. Ein Café, ein Job, neue Freunde — die Geschichte geht im Kurs A2 weiter. **Bis bald!** ~~La historia continúa en el curso A2. ¡Hasta pronto!~~',
      ],
    },
  ],
}
