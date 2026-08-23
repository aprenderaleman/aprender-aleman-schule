// Lektion 25 · Schreiben Teil 2 — Die formelle Nachricht

export default {
  spec: ['Modul Schreiben', 'Teil 2', 'ca. 120 Wörter', 'Teil des 75-Min-Moduls', 'Bewertung A–E'],
  h1: 'Die formelle Nachricht',
  lead: 'Eine offizielle Nachricht adressatengerecht und im richtigen Register verfassen — die zweite Schreibaufgabe.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine formelle Nachricht klar strukturieren (Anrede, Anliegen, Schluss)',
        'das formelle Register und höfliche Redemittel verwenden',
        'alle Leitpunkte der Aufgabe abdecken',
      ],
    },

    { type: 'rule' },

    {
      type: 'steps',
      eyebrow: 'Die Struktur',
      steps: [
        { titel: 'Anrede', text: '__Sehr geehrte Damen und Herren, / Sehr geehrte Frau …__' },
        { titel: 'Einleitung — Grund', text: '*„Ich wende mich an Sie, weil…“ / „Bezugnehmend auf…“*' },
        { titel: 'Hauptteil', text: '__Anliegen + alle Leitpunkte__, höflich und klar.' },
        { titel: 'Schluss + Gruß', text: 'Bitte/Erwartung + __„Mit freundlichen Grüßen“__.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel',
      gruppen: [
        { fn: 'Einleiten', saetze: [{ satz: 'Ich wende mich an Sie, weil… / Bezugnehmend auf Ihr Schreiben…' }] },
        { fn: 'Bitte / Forderung', saetze: [{ satz: 'Ich möchte Sie bitten, … / Ich wäre Ihnen dankbar, wenn Sie…' }] },
        { fn: 'Beschwerde', saetze: [{ satz: 'Leider muss ich feststellen, dass…' }] },
        { fn: 'Schließen', saetze: [{ satz: 'Für eine baldige Rückmeldung wäre ich Ihnen dankbar.' }] },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Beschwerde über einen Sprachkurs',
      woerter: '104 Wörter',
      absaetze: [
        '==Sehr geehrte Damen und Herren,==',
        '==ich wende mich an Sie, weil== ich mit dem Ablauf des Sprachkurses, an dem ich seit September teilnehme, nicht zufrieden bin.',
        '==Zum einen== beginnt der Unterricht regelmäßig verspätet, ==zum anderen== fällt er häufig kurzfristig aus. Dadurch kommen wir kaum voran.',
        '==Ich möchte Sie daher bitten,== für einen pünktlichen und verlässlichen Ablauf zu sorgen. Sollte sich die Situation nicht verbessern, ==sähe== ich mich gezwungen, eine Rückerstattung zu beantragen.',
        'Für eine baldige Rückmeldung wäre ich Ihnen dankbar.',
        '==Mit freundlichen Grüßen==\nMaría López',
      ],
      annotationen: [
        { tag: 'Anrede', text: 'Formell, mit Komma; danach klein weiter.' },
        { tag: 'Hauptteil', text: 'Zwei Kritikpunkte klar gegliedert (*zum einen … zum anderen*).' },
        { tag: 'Register', text: 'Höfliche Forderung im Konjunktiv II (*sähe, wäre*).' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane ca. **30 Minuten** für Teil 2. Halte das **Sie-Register** durch (keine Umgangssprache), hake **alle Leitpunkte** ab, und mache Bitten mit Konjunktiv II höflich.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Anfrage an die Volkshochschule: Bitte um Verschiebung deines Kurstermins.',
      aufgabe: 'Schreibe **Anrede + Einleitung + eine höfliche Bitte**.',
      loesung: '*Sehr geehrte Damen und Herren,\nich wende mich an Sie, weil ich aus beruflichen Gründen an meinem aktuellen Kurstermin nicht mehr teilnehmen kann. Ich wäre Ihnen sehr dankbar, wenn Sie mir einen Wechsel in den Abendkurs ermöglichen könnten.*',
    },
  ],
}
