// Lektion 39 · Konsum & Geld
//
// Bloque 3 — Themenfelder & Wortschatz. Einkaufen, Online-Handel und
// Rücksendungen, Werbung, sparen vs. ausgeben — y la Reklamation, que
// enlaza con la formelle Nachricht de la lección 29 (Schreiben Teil 2).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: Schreiben Teil 2 & Lesen'],
  h1: 'Konsum & Geld',
  lead: 'Bestellen, zurückschicken, reklamieren, sparen — der Wortschatz des Alltagskonsums und die formelle Reklamation für die Prüfung.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Wortschatz rund um Einkaufen, Online-Handel und Geld korrekt verwenden',
        'die Debatte um Online-Handel und bewussten Konsum mit eigenen Argumenten führen',
        'eine formelle Reklamation schreiben — das Format von Schreiben Teil 2',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Bestellung, -en', kollokation: 'eine Bestellung aufgeben', es: 'el pedido' },
        { wort: 'die Lieferung, -en', kollokation: 'auf die Lieferung warten', es: 'la entrega, el envío' },
        { wort: 'die Rücksendung, -en', kollokation: 'die Rücksendung ist kostenlos', es: 'la devolución (del producto)' },
        { wort: 'umtauschen', kollokation: 'einen Pullover umtauschen', es: 'cambiar (un artículo)' },
        { wort: 'die Reklamation, -en', kollokation: 'eine Reklamation einreichen', es: 'la reclamación' },
        { wort: 'sich beschweren über + Akk.', kollokation: 'sich über den Service beschweren', es: 'quejarse de' },
        { wort: 'der Kassenbon, -s', kollokation: 'den Kassenbon aufbewahren', es: 'el tique de compra' },
        { wort: 'die Rechnung, -en', kollokation: 'die Rechnung prüfen', es: 'la factura' },
        { wort: 'der Rabatt, -e', kollokation: 'einen Rabatt bekommen', es: 'el descuento' },
        { wort: 'sparen', kollokation: 'für den Urlaub sparen', es: 'ahorrar' },
        { wort: 'ausgeben', kollokation: 'zu viel Geld ausgeben', es: 'gastar (dinero)' },
        { wort: 'die Werbung', kollokation: 'sich von Werbung beeinflussen lassen', es: 'la publicidad' },
      ],
      hinweis: '~~„Gastar“ se reparte en alemán:~~ Geld **ausgeben**, aber Zeit **verbringen**. Und *sich beschweren* verlangt **über + Akkusativ**: Ich beschwere mich **über die Lieferung** — nie ~~*von der Lieferung*~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Debatte',
      absaetze: [
        'Wie wir einkaufen, wird in den deutschsprachigen Ländern intensiv diskutiert: Der Online-Handel wächst, Innenstädte verändern sich, und zwischen Sparen und Ausgeben sucht jeder seine Linie. Drei Positionen kehren immer wieder.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Pro',
          titel: 'Online kaufen ist bequem und günstig',
          text: 'Mit wenigen Klicks eine Bestellung aufgeben, Preise vergleichen, Rabatte nutzen — und die Rücksendung ist oft kostenlos. Für viele Berufstätige und für Menschen auf dem Land ist der Online-Handel __eine echte Erleichterung__.',
        },
        {
          badge: 'Contra',
          titel: 'Leere Innenstädte, volle Pakete',
          text: 'Kritiker halten dagegen: Wenn alle online bestellen, __schließen die Geschäfte in der Innenstadt__. Dazu kommen die vielen Rücksendungen — Pakete fahren quer durchs Land, was Verpackungsmüll und lange Transportwege bedeutet.',
        },
        {
          badge: 'Mitte',
          titel: 'Bewusst konsumieren',
          text: 'Die vermittelnde Position setzt auf __bewussten Konsum__: weniger, aber gezielter kaufen; erst überlegen, dann bestellen; lokale Geschäfte unterstützen, wo es geht — und sich von Werbung und Rabattaktionen nicht zum Spontankauf drängen lassen.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Einkaufen & Online-Handel',
      kicker: 'Subthema 1',
      titel: 'Bestellen und zurückschicken',
      items: [
        { text: 'Ich habe die Bestellung am Montag **aufgegeben**, und die Lieferung kam schon am Mittwoch.' },
        { text: 'Die Schuhe waren zu klein, deshalb habe ich **die Rücksendung** gleich vorbereitet.' },
        { text: 'Im Geschäft kann man Sachen nur **mit Kassenbon umtauschen**.', gl: '— guarda el tique siempre' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Reklamation & Beschwerde',
      items: [
        { text: 'Die Kopfhörer funktionieren nicht — ich werde **eine Reklamation einreichen**.' },
        { text: 'Er hat sich beim Kundenservice **über die verspätete Lieferung beschwert**.' },
        { text: 'Prüfen Sie **die Rechnung**, bevor Sie bezahlen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Sparen oder ausgeben',
      items: [
        { text: 'Wir **sparen** seit einem Jahr **für** eine große Reise.' },
        { text: 'Im Schlussverkauf **gebe** ich immer mehr **aus**, als ich wollte.' },
        { text: 'Ohne Werbung würde ich die Hälfte dieser Dinge gar nicht kaufen.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung und Beschwerde',
      gruppen: [
        {
          fn: 'Meinung zum Konsum äußern',
          saetze: [
            { satz: 'Ich finde es problematisch, dass Werbung überall präsent ist.' },
            { satz: 'Man sollte sich vor jedem Kauf fragen, ob man die Sache wirklich braucht.' },
          ],
        },
        {
          fn: 'Formell reklamieren (für die Nachricht)',
          saetze: [
            { satz: 'Leider musste ich feststellen, dass die Ware beschädigt ist.', gloss: 'la frase estrella de toda Reklamation' },
            { satz: 'Ich bitte Sie, mir den Betrag zu erstatten oder Ersatz zu schicken.' },
            { satz: 'Ich hoffe auf eine schnelle Lösung und verbleibe mit freundlichen Grüßen.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt zur Situation?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Du schickst ein Paket an den Online-Shop zurück.',
        'Der Laden zieht zehn Prozent vom Preis ab.',
        'Du meldest dem Shop schriftlich, dass das Produkt defekt ist.',
        'Das Papier, das du an der Kasse bekommst und aufbewahren solltest.',
      ],
      loesungen: [
        '**die Rücksendung**',
        '**der Rabatt**',
        '**die Reklamation**',
        '**der Kassenbon**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ausgeben oder verbringen?',
      frage: 'Ergänze ausgeben, verbringen, sparen oder sich beschweren in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Letzten Monat habe ich viel zu viel Geld für Kleidung ___ .',
        'Am Wochenende ___ wir viel Zeit auf dem Flohmarkt.',
        'Sie ___ sich gestern beim Vermieter über den Lärm ___ . ~~(ojo: über + Akkusativ)~~',
        'Wenn du jeden Monat etwas zur Seite legst, ___ du genug für den Führerschein.',
      ],
      loesungen: [
        'Ich habe zu viel Geld **ausgegeben**. ~~(dinero → ausgeben)~~',
        'Wir **verbringen** viel Zeit auf dem Flohmarkt. ~~(tiempo → verbringen)~~',
        'Sie **hat** sich **über den Lärm beschwert**.',
        '… **sparst** du genug für den Führerschein.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe 80–100 Wörter: Kaufst du lieber online oder im Geschäft? Nenne einen Vorteil, einen Nachteil und ein persönliches Beispiel.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ehrlich gesagt kaufe ich fast alles online, weil es so bequem ist: Ich gebe die Bestellung abends auf, und zwei Tage später kommt die Lieferung. Außerdem findet man im Internet oft einen Rabatt. Ich finde es allerdings problematisch, dass dadurch viele Geschäfte in der Innenstadt schließen — und ich gebe online schneller Geld aus, weil alles nur einen Klick entfernt ist. Letzten Monat habe ich zum Beispiel drei Jacken bestellt und zwei zurückgeschickt. Deshalb versuche ich jetzt, bewusster zu konsumieren: erst überlegen, dann kaufen. ~~(~90 Wörter)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 — formelle Nachricht',
      titel: 'Die Reklamation',
      anweisung: 'Du hast online Kopfhörer bestellt. Nach einer Woche funktioniert der linke Kopfhörer nicht mehr. Schreibe eine formelle Nachricht an den Online-Shop (ca. 100 Wörter): Beschreibe das Problem, äußere deine Erwartung (Ersatz oder Erstattung) und bitte um eine schnelle Antwort. Vergiss Anrede und Gruß nicht.',
      absaetze: [
        'Der Aufbau ist derselbe wie bei jeder formellen Nachricht (Lektion 29): Betreff → Anrede → Anlass → Problem → Erwartung → Gruß. Neu ist nur der Reklamations-Wortschatz.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '**Betreff:** Reklamation — Bestellung Nr. 48213',
        'Sehr geehrte Damen und Herren,',
        'am 12. August habe ich bei Ihnen Kopfhörer bestellt, die zunächst einwandfrei funktionierten. Leider musste ich feststellen, dass der linke Kopfhörer seit gestern keinen Ton mehr wiedergibt, obwohl ich das Gerät vorsichtig behandelt habe.',
        'Da die Ware offensichtlich defekt ist, bitte ich Sie, mir ein neues Gerät zu schicken oder mir den Betrag zu erstatten. Die Rechnung habe ich dieser Nachricht beigefügt; die defekten Kopfhörer schicke ich Ihnen auf Wunsch gern zurück. Über eine schnelle Antwort würde ich mich freuen.',
        'Mit freundlichen Grüßen\nLaura Moreno ~~(~100 Wörter)~~',
      ],
      kommentar: 'Die Nachricht erfüllt alle drei Inhaltspunkte (Problem, Erwartung, Bitte um Antwort), bleibt durchgehend formell (Sie, keine Umgangssprache) und nutzt den Wortschatz der Lektion: bestellen, defekt, erstatten, die Rechnung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Für Schreiben Teil 2 hast du **etwa 25 Minuten** — die Reklamation ist dafür das dankbarste Szenario, weil der Aufbau immer gleich ist. Lerne die drei Redemittel-Sätze oben auswendig; sie passen fast wörtlich in jede Beschwerde. ~~Y recuerda: en la carta formal, nada de „Hallo“ ni „Liebe Grüße“.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Online-Handel', 'die Bestellung aufgeben → die Lieferung → ggf. die Rücksendung'],
        ['Probleme', 'die Reklamation einreichen · sich beschweren über + Akk. · umtauschen'],
        ['Geld', 'Geld ausgeben ↔ sparen für + Akk. · die Rechnung, der Rabatt, der Kassenbon'],
        ['Debatte', 'bequem & günstig · leere Innenstädte & Retouren · bewusster Konsum'],
        ['Typischer Fehler', 'Geld ausgeben / Zeit verbringen — „gastar“ no se traduce igual'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich beschreibe eine Online-Bestellung von der Bestellung bis zur Rücksendung.',
        'Ich unterscheide Geld ausgeben und Zeit verbringen und nutze sich beschweren über + Akkusativ.',
        'Ich schreibe eine formelle Reklamation mit Problem, Erwartung und Bitte um Antwort.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Gespart hast du — jetzt wird das Geld ausgegeben: In der nächsten Lektion geht es um **Reisen & Mobilität**. Urlaubsplanung, Verkehrsmittel und was du sagst, wenn der Zug Verspätung hat. Und die Reklamation von heute? Die brauchst du dort wieder.',
    },
  ],
}
