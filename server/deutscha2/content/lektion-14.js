// Lektion 14 · Konnektoren — und, oder, aber, denn, deshalb
//
// Bloque 1 · Grammatik & Struktur — unir frases sin cambiar el orden
// (Position 0) frente a deshalb (inversión). Muy visual.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Konnektoren: und, oder, aber, denn, deshalb',
  lead: '~~Con cinco palabritas unes tus frases:~~ **und, oder, aber, denn** ~~no cambian nada~~ — nur **deshalb** ~~cambia el orden.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Sätze verbinden mit *und, oder, aber, denn*',
        'wissen: nach diesen vier Wörtern bleibt die Wortstellung normal (Position 0)',
        'mit *deshalb* eine Folge ausdrücken — Verb direkt danach',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die 5 Konnektoren',
      kopf: ['Konnektor', 'Funktion', 'Bedeutung'],
      zeilen: [
        ['und', 'Addition', 'y'],
        ['oder', 'Alternative', 'o'],
        ['aber', 'Kontrast', 'pero'],
        ['denn', 'Grund', 'porque / pues'],
        ['deshalb', 'Folge', 'por eso'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Position 0 oder Inversion?',
      steps: [
        {
          badge: 'Position 0',
          titel: 'und, oder, aber, denn',
          text: 'Diese vier Wörter stehen auf __Position 0__ ~~(fuera de la frase, como en español)~~. Danach kommt ein ganz normaler Satz: **Subjekt + Verb**.\n__Ich lerne Deutsch, **denn** ich **arbeite** in Berlin.__',
        },
        {
          badge: 'deshalb',
          titel: 'Folge mit Inversion',
          text: '__deshalb__ steht auf Position 1 — das Verb muss auf __Position 2__ bleiben. ~~Resultado: el sujeto salta detrás del verbo (inversión).~~\n__Ich bin müde, **deshalb gehe ich** ins Bett.__ ~~(NO: *deshalb ich gehe*)~~',
        },
        {
          badge: 'Komma',
          titel: 'Das Komma',
          text: 'Vor __aber__, __denn__ und __deshalb__ steht ein Komma. Vor *und* und *oder* meistens nicht.\n__Ich komme gern, **aber** ich habe wenig Zeit.__',
        },
      ],
    },
    {
      type: 'vergleich',
      eyebrow: 'Erklärung — der Vergleich',
      titel: 'denn oder deshalb?',
      zeilen: [
        { satz: 'Ich bleibe zu Hause, **denn** ich **bin** krank.', label: 'Grund ~~(porque)~~ — Wortstellung normal: Subjekt + Verb' },
        { satz: 'Ich bin krank, **deshalb** **bleibe** ich zu Hause.', label: 'Folge ~~(por eso)~~ — Verb direkt nach deshalb' },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich trinke Kaffee **und** ich esse ein Brötchen.', gl: '— y' },
        { text: 'Kommst du mit **oder** bleibst du zu Hause?', gl: '— o' },
        { text: 'Das Hotel ist schön, **aber** es ist teuer.', gl: '— pero' },
        { text: 'Wir nehmen den Bus, **denn** das Auto ist kaputt.', gl: '— porque (orden normal)' },
        { text: 'Das Auto ist kaputt, **deshalb** nehmen wir den Bus.', gl: '— por eso (¡verbo justo después!)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welcher Konnektor passt?',
      frage: 'Ergänze und, oder, aber, denn.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich mag Tee, ___ ich mag keinen Kaffee.',
        'Möchtest du Wasser ___ Saft?',
        'Ich lerne Deutsch, ___ ich möchte in Deutschland arbeiten.',
        'Am Samstag kaufe ich ein ___ ich koche für Freunde.',
      ],
      loesungen: [
        'Ich mag Tee, **aber** ich mag keinen Kaffee. ~~(contraste)~~',
        'Möchtest du Wasser **oder** Saft?',
        'Ich lerne Deutsch, **denn** ich möchte in Deutschland arbeiten. ~~(razón)~~',
        'Am Samstag kaufe ich ein **und** ich koche für Freunde.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze mit deshalb bauen',
      frage: 'Verbinde die Sätze mit deshalb. ~~Ojo con el orden: deshalb + verbo + sujeto.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Es regnet. + Ich bleibe zu Hause.',
        'Ich habe Hunger. + Ich mache ein Sandwich.',
        'Der Zug hat Verspätung. + Wir warten am Gleis.',
      ],
      loesungen: [
        'Es regnet, **deshalb bleibe ich** zu Hause.',
        'Ich habe Hunger, **deshalb mache ich** ein Sandwich.',
        'Der Zug hat Verspätung, **deshalb warten wir** am Gleis.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst schreiben',
      frage: 'Schreibe zwei Sätze über dich: einen mit denn, einen mit deshalb.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Warum lernst du Deutsch? (denn)',
        'Du bist müde. Was machst du? (deshalb)',
      ],
      loesungen: [
        'Ich lerne Deutsch, **denn** meine Firma hat ein Büro in Hamburg. ~~(vale cualquier razón real)~~',
        'Ich bin müde, **deshalb trinke ich** einen Kaffee.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Konnektoren einsetzen',
      anweisung: 'Mit Konnektoren wirkt deine E-Mail (Teil 2) sofort besser. Ergänze denn, aber, deshalb:',
      absaetze: [
        '„Hallo Jan, ich komme am Freitag, {1} ich habe frei. Ich bringe Kuchen mit, {2} ich habe keine Getränke. Mein Auto ist kaputt, {3} komme ich mit dem Zug.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **denn** ich habe frei. ~~(razón, orden normal)~~',
        '{2} **aber** ich habe keine Getränke.',
        '{3} **deshalb** komme **ich** mit dem Zug. ~~(inversión)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** zählt die Verbindung der Sätze. Zwei kurze Sätze + ein **denn** oder **deshalb** — das reicht schon für einen guten Text. ~~Truco: memoriza «…, deshalb + verbo + yo» como bloque fijo.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Konnektor', 'Wortstellung danach', 'Beispiel'],
      zeilen: [
        ['und / oder / aber / denn', 'normal: Subjekt + Verb', '…, denn ich bin krank.'],
        ['deshalb', 'Inversion: Verb + Subjekt', '…, deshalb bleibe ich hier.'],
        ['Komma', 'vor aber, denn, deshalb', 'schön, aber teuer'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verbinde Sätze mit und, oder, aber, denn — ohne die Wortstellung zu ändern.',
        'Nach deshalb stelle ich das Verb direkt an den Anfang.',
        'Ich weiß, wo das Komma steht.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit **denn** gibst du einen Grund — und die Wortstellung bleibt normal. Es gibt noch ein Wort für „porque“: **weil**. Aber Achtung: nach *weil* wandert das Verb **ans Ende**! Das ist die Star-Regel der nächsten Lektion.',
    },
  ],
}
