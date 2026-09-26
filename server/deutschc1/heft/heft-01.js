// Übungsheft C1 — Lektion 01: Das Zertifikat C1 im Überblick
export default {
  lektion: 1,
  titel: 'Übungsheft — Das Zertifikat C1 im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle jeweils die Lösung, die grammatisch korrekt ist und dem Register der Prüfungssprache entspricht. Achte besonders auf feste Verbindungen und Präpositionen.',
      items: [
        {
          typ: 'luecke',
          text: 'Selin hat im Mai alle vier Module {1} und drei davon auf Anhieb {2}.',
          bank: ['abgelegt', 'bestanden', 'präsentiert', 'aufgenommen'],
          loesungen: { 1: 'abgelegt', 2: 'bestanden' },
        },
        {
          typ: 'mc',
          frage: 'Bei Fragen zur Zulassung wendest du dich am besten direkt ___ ein Prüfungszentrum.',
          optionen: ['bei', 'an', 'zu'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['einen Vortrag', 'zu einer These Stellung', 'eine Prüfung', 'eine Frist', 'Punkte'],
          rechts: ['halten', 'nehmen', 'ablegen', 'einhalten', 'erzielen'],
          loesung: {
            'einen Vortrag': 'halten',
            'zu einer These Stellung': 'nehmen',
            'eine Prüfung': 'ablegen',
            'eine Frist': 'einhalten',
            'Punkte': 'erzielen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte mich im Juni zur Prüfung präsentieren.', 'Ich möchte im Juni die Prüfung ablegen.'],
          loesung: 1,
          warum: '«Presentarse a un examen» es **eine Prüfung ablegen**; *sich präsentieren* significa exhibirse o darse a conocer ante un público.',
        },
        {
          typ: 'luecke',
          text: 'Die Bestehensgrenze {1} bei 60 Punkten; wer sie verfehlt, kann das Modul zu einem späteren Prüfungstermin {2}.',
          bank: ['liegt', 'wiederholen', 'beträgt', 'bewerten'],
          loesungen: { 1: 'liegt', 2: 'wiederholen' },
        },
        {
          typ: 'mc',
          frage: 'Wer die Bestehensgrenze knapp ___, kann das Modul beim nächsten Prüfungstermin wiederholen.',
          optionen: ['versäumt', 'verfehlt', 'vermisst'],
          loesung: 1,
          warum: '**die Bestehensgrenze verfehlen** = no alcanzar el mínimo. *Versäumen* es dejar pasar (una fecha, una clase); *vermissen*, echar de menos.',
        },
        {
          typ: 'korrektur',
          optionen: ['Gehen Sie in Ihrem Beitrag auf alle drei Punkte ein.', 'Gehen Sie in Ihrem Beitrag in alle drei Punkte ein.'],
          loesung: 0,
          warum: '**eingehen auf** + acusativo = tratar, abordar un punto. No es «entrar en»: la preposición es siempre *auf*.',
        },
        {
          typ: 'luecke',
          text: 'Die vier Module werden {1} bewertet; {2} gibt es keine Gesamtnote.',
          bank: ['getrennt', 'folglich', 'obwohl', 'dennoch'],
          loesungen: { 1: 'getrennt', 2: 'folglich' },
        },
        {
          typ: 'mc',
          frage: 'Wer drei Module besteht, ___ nur das vierte zu wiederholen.',
          optionen: ['braucht', 'muss', 'soll'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Morgen gebe ich im Kurs einen Vortrag über erneuerbare Energien.', 'Morgen halte ich im Kurs einen Vortrag über erneuerbare Energien.'],
          loesung: 1,
          warum: '«Dar una charla» es **einen Vortrag halten** (igual: *eine Rede halten*). *Einen Vortrag geben* es un calco del español.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht und entscheide, welche Lösung dem Text entspricht.',
      textTitel: 'Bericht: Zwei Anläufe zum Zertifikat',
      text: 'Als Tomás Reyes vor zwei Jahren beschloss, das Zertifikat C1 abzulegen, hatte er ein klares Ziel: Die Anerkennung seines Ingenieurabschlusses in Deutschland setzte qualifizierte Sprachkenntnisse voraus. Nach mehrmonatiger Vorbereitung meldete er sich bei einem Prüfungszentrum in Stuttgart an und legte alle vier Module an einem einzigen Wochenende ab. Das Ergebnis fiel gemischt aus: Lesen, Hören und Sprechen bestand er deutlich, im Modul Schreiben verfehlte er die Bestehensgrenze jedoch um vier Punkte. „Ich hatte die Aufgabenstellung der formellen Nachricht zu schnell gelesen und einen Inhaltspunkt schlicht übersehen“, erzählt er. Entmutigen ließ er sich davon nicht. Da die bestandenen Ergebnisse gültig blieben, konzentrierte er sich in den folgenden Wochen ausschließlich auf das Schreiben: Zweimal pro Woche verfasste er einen Text und ließ ihn von einer Kollegin korrigieren. Beim nächsten Prüfungstermin wiederholte er nur dieses eine Modul und erzielte 78 Punkte. Rückblickend hält er den ersten Misserfolg sogar für lehrreich: „Ohne ihn hätte ich nie begriffen, wie wichtig es ist, jede Anweisung zweimal zu lesen.“ Anderen rät er, die Modularität bewusst zu nutzen, statt die Anmeldung aus Angst vor dem Scheitern immer weiter hinauszuschieben.',
      items: [
        { typ: 'rf', aussage: 'Beim ersten Versuch legte Tomás zunächst nur einen Teil der Module ab.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum verfehlte Tomás zunächst die Bestehensgrenze im Modul Schreiben?',
          optionen: ['Sein Text war deutlich zu kurz.', 'Er hatte einen Punkt der Aufgabe nicht behandelt.', 'Er hatte das Register der Nachricht verfehlt.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie bereitete er sich auf die Wiederholung vor?',
          optionen: ['Er besuchte einen Intensivkurs am Prüfungszentrum.', 'Er wiederholte zur Sicherheit alle vier Module.', 'Er übte gezielt das Schreiben und ließ seine Texte korrigieren.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Im Nachhinein bewertet Tomás sein anfängliches Scheitern auch positiv.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle Nachricht von mindestens 80 Wörtern. Achte auf Anrede, Register und Grußformel.',
      aufgabe: 'Du möchtest das Zertifikat C1 ablegen, bist dir aber bei einigen organisatorischen Fragen unsicher. Schreib eine formelle Nachricht an das Prüfungszentrum deiner Stadt.',
      punkte: [
        'Stell dich kurz vor und nenne den Anlass deiner Nachricht.',
        'Erkundige dich nach Anmeldefristen und freien Prüfungsterminen.',
        'Frag, unter welchen Bedingungen sich ein einzelnes Modul wiederholen lässt.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren, mein Name ist Lucía Ferrer; ich arbeite seit einem Jahr als Pflegefachkraft in Nürnberg und benötige für die Anerkennung meines Abschlusses das Zertifikat C1. Daher möchte ich mich bei Ihnen über die Anmeldung informieren. Könnten Sie mir bitte mitteilen, bis wann die Anmeldung für die Prüfungstermine im Herbst erfolgen muss und ob noch Plätze frei sind? Darüber hinaus wüsste ich gern, ob sich ein nicht bestandenes Modul einzeln wiederholen lässt und ob dafür eine bestimmte Frist gilt. Für Ihre Auskunft bedanke ich mich im Voraus. Mit freundlichen Grüßen Lucía Ferrer',
    },
  ],
}
