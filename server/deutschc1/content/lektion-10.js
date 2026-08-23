// Lektion 10 · Konnektoren der Schriftsprache

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'C1', 'Prüfungsrelevanz: Lesen · Schreiben'],
  h1: 'Konnektoren der Schriftsprache',
  lead: 'Die Verbindungswörter, die einen Text gehoben und präzise klingen lassen — mit der richtigen Verbstellung.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'schriftsprachliche Konnektoren korrekt einordnen (Verbstellung)',
        'konzessive, folgernde und einschränkende Nuancen ausdrücken',
        'Konnektoren gezielt und maßvoll im Schreiben einsetzen',
      ],
    },

    { type: 'rule' },

    {
      type: 'beispiele',
      eyebrow: 'Erklärung & Beispiele',
      kicker: 'konzessiv',
      titel: 'Einräumung (gehoben)',
      items: [
        { text: 'Das Argument ist schwach, **gleichwohl** überzeugt es viele.', gl: '— Adverb → Inversion' },
        { text: '**Nichtsdestotrotz** bleibt das Problem bestehen.' },
      ],
    },

    {
      type: 'beispiele',
      kicker: 'folgernd',
      titel: 'Konsequenz',
      items: [
        { text: 'Die Kosten steigen, **folglich** muss gespart werden.' },
        { text: 'Er ist Muttersprachler, **mithin** ist er qualifiziert.' },
      ],
    },

    {
      type: 'beispiele',
      kicker: 'einschränkend',
      titel: 'Konditional / adversativ',
      items: [
        { text: 'Ich unterschreibe, **sofern** die Bedingungen fair **sind**.', gl: '— Subjunktion → Verb ans Ende' },
        { text: 'Die einen loben es, die anderen **hingegen** kritisieren es.' },
        { text: 'Er ist qualifiziert, **zumal** er Auslandserfahrung **hat**.' },
      ],
    },

    {
      type: 'prose',
      card: true,
      absaetze: [
        'Gehobene konzessive Struktur: **„So überzeugend das Argument auch sein mag, …“** ~(por muy convincente que sea el argumento, …)~',
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Ein bis zwei gehobene Konnektoren *pro Absatz* genügen — Übertreibung wirkt gekünstelt. Im **Lesen-Lückentext** werden genau diese Konnektoren getestet.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Setze einen passenden schriftsprachlichen Konnektor ein.',
      aufgaben: [
        'Das Projekt ist teuer. ____ wird es fortgesetzt. ~(konzessiv)~',
        'Die Nachfrage sinkt, ____ müssen wir reagieren. ~(folgernd)~',
        'Ich stimme zu, ____ die Frist verlängert wird. ~(konditional)~',
      ],
      loesungen: [
        '**Dennoch / Gleichwohl** wird es fortgesetzt.',
        'Die Nachfrage sinkt, **folglich / somit** müssen wir reagieren.',
        'Ich stimme zu, **sofern** die Frist verlängert **wird**.',
      ],
    },
  ],
}
