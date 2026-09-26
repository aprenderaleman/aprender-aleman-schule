// Übungsheft C1 — Lektion 33: Medien & soziale Netzwerke
export default {
  lektion: 33,
  titel: 'Übungsheft — Medien & soziale Netzwerke',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen des Themenfelds Medien bzw. wähle die Form, die Kollokation, Rektion und Kontext verlangen. Achte besonders auf falsche Freunde und Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Faktenprüfer haben die angebliche Studie inzwischen als Falschmeldung {1}; zuvor hatte sich der Beitrag allerdings in Windeseile {2}.',
          bank: ['entlarvt', 'verbreitet', 'entlastet', 'verbreitert'],
          loesungen: { 1: 'entlarvt', 2: 'verbreitet' },
        },
        {
          typ: 'luecke',
          text: 'Wer ausschließlich Inhalte konsumiert, die die eigene Sicht bestätigen, ist schnell in einer {1} gefangen; eine hohe {2} sagt dabei nichts über die Glaubwürdigkeit eines Absenders aus.',
          bank: ['Filterblase', 'Reichweite', 'Seifenblase', 'Weitsicht'],
          loesungen: { 1: 'Filterblase', 2: 'Reichweite' },
        },
        {
          typ: 'luecke',
          text: 'Der öffentlich-rechtliche Rundfunk soll die Meinungsvielfalt {1}; Kritiker werfen ihm jedoch vor, zunehmend an Glaubwürdigkeit zu {2}.',
          bank: ['sichern', 'verlieren', 'versichern', 'verlernen'],
          loesungen: { 1: 'sichern', 2: 'verlieren' },
        },
        {
          typ: 'mc',
          frage: 'Viele Schulen haben inzwischen begonnen, gezielt Medienkompetenz zu ___.',
          optionen: ['erteilen', 'vermitteln', 'beibringen'],
          loesung: 1,
          warum: 'La colocación es **Medienkompetenz vermitteln**. *Beibringen* es separable y exigiría *beizubringen*; *erteilen* va con *Unterricht* o *Auskunft*, no con una competencia.',
        },
        {
          typ: 'mc',
          frage: 'Reißerische Schlagzeilen zielen vor allem ___ ab, möglichst viele Klicks zu erzeugen.',
          optionen: ['dafür', 'damit', 'darauf'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe die Notiz vom Wahlausgang gestern im Radio gehört.', 'Ich habe die Nachricht vom Wahlausgang gestern im Radio gehört.'],
          loesung: 1,
          warum: 'Falso amigo: *die Notiz* es un apunte; la noticia es **die Nachricht** (el informativo: *die Nachrichten*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Gerücht verbreitete sich innerhalb weniger Stunden im ganzen Land.', 'Das Gerücht verbreitete innerhalb weniger Stunden im ganzen Land.'],
          loesung: 0,
          warum: 'Sin objeto, **verbreiten** es reflexivo: *etwas verbreitet sich*; transitivo solo con complemento (*jemand verbreitet ein Gerücht*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Seriöse Journalisten kontrastieren jede Information mit einer zweiten Quelle.', 'Seriöse Journalisten überprüfen jede Information anhand einer zweiten Quelle.'],
          loesung: 1,
          warum: '«Contrastar» una información es **überprüfen** o *abgleichen*; *kontrastieren* significa «hacer contraste».',
        },
        {
          typ: 'zuordnen',
          links: ['eine Falschmeldung', 'Plattformen zur Verantwortung', 'eine enorme Reichweite', 'reißerische Schlagzeilen', 'eine Quelle kritisch'],
          rechts: ['entlarven', 'ziehen', 'erzielen', 'produzieren', 'prüfen'],
          loesung: {
            'eine Falschmeldung': 'entlarven',
            'Plattformen zur Verantwortung': 'ziehen',
            'eine enorme Reichweite': 'erzielen',
            'reißerische Schlagzeilen': 'produzieren',
            'eine Quelle kritisch': 'prüfen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['ist', 'Transparenz', 'den', 'verlangen', 'Von', 'zu', 'Plattformen'],
          loesung: 'Von den Plattformen ist Transparenz zu verlangen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension und entscheide, welche Antwort der Einschätzung des Textes entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Die Ökonomie der Empörung“ von Henrik Solberg',
      text: 'Mit „Die Ökonomie der Empörung“ legt der Kommunikationswissenschaftler Henrik Solberg eine Analyse vor, die weit über die üblichen Klagen über Fake News hinausgeht. Seine zentrale These: Nicht die einzelne Falschmeldung sei das Problem, sondern ein Geschäftsmodell, das Reichweite belohne und Glaubwürdigkeit ignoriere. Plattformen verdienten an jeder Erregung, die ihre Algorithmen verstärkten — und genau deshalb verbreiteten sich Gerüchte schneller als deren Richtigstellung.\nÜberzeugend ist Solberg vor allem dort, wo er Daten sprechen lässt: Die Kapitel über die Dynamik viraler Beiträge sind präzise recherchiert und angenehm unaufgeregt geschrieben. Weniger gelungen ist der Schlussteil. Solberg fordert zwar, Plattformen konsequent zur Verantwortung zu ziehen, bleibt aber auffallend vage, wenn es um die Frage geht, wer über wahr und falsch entscheiden soll. Die Gefahr der Überregulierung, die er im Vorwort selbst anspricht, wird am Ende in einem einzigen Absatz abgehandelt.\nWer sich einen Ratgeber für den Alltag erhofft, wird enttäuscht: Tipps zum Prüfen von Quellen sucht man vergeblich. Als Diagnose der digitalen Öffentlichkeit ist das Buch dennoch ein Gewinn — und ein Plädoyer dafür, Medienkompetenz nicht als Privatsache abzutun.',
      items: [
        {
          typ: 'mc',
          frage: 'Worin sieht Solberg laut Rezension die eigentliche Ursache der Desinformation?',
          optionen: ['In der mangelnden Sorgfalt einzelner Redaktionen.', 'In einem Geschäftsmodell, das Reichweite höher bewertet als Glaubwürdigkeit.', 'In der unzureichenden Medienkompetenz der Nutzerinnen und Nutzer.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Rezension lobt die sachliche Darstellung in den datengestützten Kapiteln.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was bemängelt die Rezension am Schlussteil des Buches?',
          optionen: ['Solberg lasse offen, wer über den Wahrheitsgehalt von Inhalten entscheiden solle.', 'Solberg lehne jede Regulierung der Plattformen grundsätzlich ab.', 'Solberg widme der Gefahr der Überregulierung übermäßig viel Raum.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Das Buch enthält praktische Hinweise, wie man Quellen überprüft.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Zusammenfassung mit Kommentar (mindestens 80 Wörter). Gib die Positionen der Rezension in indirekter Rede wieder und verwende mindestens vier Begriffe aus dem Kernwortschatz.',
      aufgabe: 'Fasse die Rezension aus Teil 2 für den Kulturteil einer Studierendenzeitung zusammen und kommentiere Solbergs Forderung, die Plattformen stärker in die Pflicht zu nehmen.',
      punkte: [
        'Fasse Solbergs zentrale These und die Gesamteinschätzung der Rezension knapp zusammen.',
        'Gib die Kritik am Schlussteil mit eigenen Worten wieder.',
        'Nimm begründet Stellung: Wer sollte die Verantwortung für Desinformation tragen?',
      ],
      minWoerter: 80,
      beispielLoesung: 'Die Rezension bespricht Henrik Solbergs Buch „Die Ökonomie der Empörung“. Solberg vertritt die These, nicht einzelne Falschmeldungen seien das Problem, sondern ein Geschäftsmodell, das Reichweite belohne und Glaubwürdigkeit vernachlässige. Gelobt werden die sorgfältig recherchierten Kapitel über virale Beiträge; kritisiert wird hingegen, dass der Autor im Schlussteil offenlasse, wer über wahr und falsch entscheiden solle.\nDiese Kritik halte ich für berechtigt. Die Plattformen zur Verantwortung zu ziehen, ist zwar notwendig, denn sie verdienen an der Verbreitung von Desinformation. Löschpflichten allein greifen aber zu kurz, solange Nutzer Quellen nicht kritisch prüfen. Meines Erachtens führt daher kein Weg daran vorbei, Medienkompetenz fest im Unterricht zu verankern — nur so lässt sich die Meinungsbildung dauerhaft vor Manipulation schützen.',
    },
  ],
}
