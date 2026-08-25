// Lektion 40 · Einkaufen & Konsum

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Lesen'],
  h1: 'Einkaufen & Konsum',
  lead: 'Im Geschäft und online: einkaufen, bezahlen, umtauschen — und die Werbung durchschauen. ~~Léxico de supervivencia diaria.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'im Geschäft nach Produkten, Größen und Preisen fragen',
        'etwas umtauschen oder reklamieren',
        'über Online-Einkäufe und Werbung sprechen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'einkaufen', kollokation: 'im Supermarkt einkaufen', es: 'hacer la compra' },
        { wort: 'das Geschäft, -e', kollokation: 'ins Geschäft gehen', es: 'la tienda' },
        { wort: 'der Preis, -e', kollokation: 'nach dem Preis fragen', es: 'el precio' },
        { wort: 'das Angebot, -e', kollokation: 'im Angebot sein', es: 'la oferta' },
        { wort: 'bezahlen', kollokation: 'bar oder mit Karte bezahlen', es: 'pagar' },
        { wort: 'die Größe, -n', kollokation: 'eine Größe kleiner', es: 'la talla' },
        { wort: 'anprobieren', kollokation: 'die Hose anprobieren', es: 'probarse (ropa)' },
        { wort: 'passen', kollokation: 'die Jacke passt nicht', es: 'quedar bien (de talla)' },
        { wort: 'umtauschen', kollokation: 'das Geschenk umtauschen', es: 'cambiar (un producto)' },
        { wort: 'der Kassenbon, -s', kollokation: 'den Kassenbon aufheben', es: 'el tique de compra' },
        { wort: 'bestellen', kollokation: 'online bestellen', es: 'pedir, encargar' },
        { wort: 'die Werbung', kollokation: 'zu viel Werbung bekommen', es: 'la publicidad' },
      ],
      hinweis: '**passen** hat drei Gesichter: Die Hose **passt** ~~(es mi talla)~~, sie **passt zu** der Jacke ~~(combina con)~~, der Termin **passt mir** ~~(me viene bien)~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Einkaufen in Deutschland',
      card: true,
      kicker: 'Alltag 1',
      titel: 'Im Geschäft',
      absaetze: [
        'Das Wichtigste zuerst: __Sonntags sind die Geschäfte geschlossen__ — auch die Supermärkte. Und an der Kasse geht es schnell: Tasche bereit, zügig einpacken. Bezahlt wird bar oder mit Karte; kleine Läden nehmen manchmal nur Bargeld.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 2',
      titel: 'Umtauschen & reklamieren',
      absaetze: [
        'Die Größe passt nicht? Mit dem __Kassenbon__ kann man in den meisten Geschäften umtauschen. Ist die Ware kaputt, __reklamiert__ man sie. ~~Guarda siempre el tique: sin Kassenbon no hay cambio.~~ Online bestellte Ware kann man in der Regel zurückschicken.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 3',
      titel: 'Angebote & Werbung',
      absaetze: [
        'Werbung ist überall: im Briefkasten, online, im Supermarkt. __„Im Angebot“__ heißt: reduziert. Preise vergleichen lohnt sich — aber nicht alles, was „Angebot“ heißt, ist wirklich billig.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Im Geschäft',
      items: [
        { text: 'Entschuldigung, ich suche eine Winterjacke.' },
        { text: 'Haben Sie die auch **in Größe M**?' },
        { text: 'Kann ich das anprobieren?' },
        { text: 'Was kostet das? — Es ist im Angebot: nur 20 Euro.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Umtauschen & reklamieren',
      items: [
        { text: 'Die Hose **passt** leider **nicht**. Kann ich sie umtauschen?' },
        { text: 'Hier ist der Kassenbon.' },
        { text: 'Das Radio ist kaputt. Ich möchte es **reklamieren**.', gl: '~~reclamar (un producto defectuoso)~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Online einkaufen',
      items: [
        { text: 'Ich habe die Schuhe **online bestellt**.' },
        { text: 'Wenn etwas nicht passt, schicke ich es zurück.' },
        { text: 'Online kann man die Preise gut vergleichen.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — im Geschäft',
      gruppen: [
        {
          fn: 'Fragen & wünschen',
          saetze: [
            { satz: 'Ich hätte gern ein Kilo Tomaten.', gloss: '~~«Ich will …» suena brusco en la tienda — usa siempre hätte gern / möchte~~' },
            { satz: 'Ich suche ein Geschenk für meine Mutter.' },
            { satz: 'Haben Sie das in Größe M / in Rot?' },
          ],
        },
        {
          fn: 'Umtauschen & reklamieren',
          saetze: [
            { satz: 'Ich möchte das bitte umtauschen. Die Größe passt nicht.' },
            { satz: 'Hier ist der Kassenbon.' },
            { satz: 'Das Gerät funktioniert leider nicht.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das kleine Papier von der Kasse: der ___',
        'Die Jacke ist zu klein — sie ___ nicht.',
        'reduziert = im ___',
        'ein Produkt zurückbringen und ein anderes nehmen: ___',
      ],
      loesungen: [
        'der **Kassenbon**',
        'sie **passt** nicht',
        'im **Angebot**',
        '**umtauschen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Dialog ergänzen',
      frage: 'Im Kleidungsgeschäft. Ergänze die Lücken.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '● Guten Tag, ich ___ eine Winterjacke. ~~(buscar)~~',
        '○ Gern. Welche ___ haben Sie? — M oder L.',
        '● Kann ich die Jacke ___?',
        '● Ich nehme sie. Kann ich mit Karte ___?',
      ],
      loesungen: [
        'ich **suche** eine Winterjacke',
        'Welche **Größe** haben Sie?',
        'Kann ich die Jacke **anprobieren**?',
        'Kann ich mit Karte **bezahlen**? ~~(o: zahlen)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 60-80 Wörter: Kaufst du lieber im Geschäft oder online?',
      aufgabe: 'Sag, was du wo kaufst und warum. Nenne auch einen Nachteil.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Lebensmittel kaufe ich immer im Geschäft, weil ich frisches Obst und Gemüse sehen möchte. Kleidung bestelle ich aber oft online, denn dort ist die Auswahl größer und die Preise sind oft besser. Ein Nachteil ist: Man kann nichts anprobieren. Letzte Woche habe ich Schuhe bestellt, aber die Größe hat nicht gepasst, und ich musste sie zurückschicken. Trotzdem finde ich Online-Einkaufen sehr praktisch. ~~Estructura ganadora: opinión + porqué + un ejemplo propio.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 (Forumsbeitrag, ~80 Wörter)',
      titel: 'Deine Meinung im Forum',
      anweisung: 'In einem Online-Forum steht die Frage: „Online einkaufen — besser als im Geschäft?“ Schreib deine Meinung (~80 Wörter): eigene Erfahrung + Meinung + Beispiel.',
      absaetze: [
        'Denk an die Kriterien: **Erfüllung** (alle Punkte), **Kohärenz** (weil, denn, trotzdem), **Wortschatz**, **Strukturen**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich kaufe oft online ein, weil es praktisch ist: Man kann rund um die Uhr bestellen und die Preise gut vergleichen. Trotzdem finde ich kleine Geschäfte wichtig. Dort bekommt man gute Beratung, und man kann die Sachen anprobieren. Letzten Monat habe ich zum Beispiel online eine Jacke bestellt — sie hat nicht gepasst, und das Umtauschen hat zwei Wochen gedauert. Meine Meinung: Online ist gut für den Preis, aber im Geschäft kauft man mit weniger Stress.',
      ],
      kommentar: 'Meinung + Grund + eigenes Beispiel + Schluss — mehr verlangt Teil 2 nicht. Kontrolliere am Ende immer: Verb auf Position 2 und die Konnektoren *weil, denn, trotzdem*.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen Teil 2** ordnest du Anzeigen zu — oft genau mit diesem Wortschatz: *Angebot, Preis, Größe, umtauschen*. Lies zuerst, **was die Person sucht**, und markiere dann in jeder Anzeige die Schlüsselwörter.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Das brauchst du'],
      zeilen: [
        ['im Geschäft fragen', 'Ich suche … · Haben Sie …? · Kann ich das anprobieren?'],
        ['bezahlen', 'Was kostet …? · bar oder mit Karte bezahlen'],
        ['umtauschen', 'Die Größe passt nicht. · Hier ist der Kassenbon.'],
        ['online', 'bestellen · zurückschicken · Preise vergleichen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann im Geschäft nach Produkten, Größen und Preisen fragen.',
        'Ich kann etwas höflich umtauschen oder reklamieren.',
        'Ich kann meine Meinung zu Online-Einkäufen und Werbung sagen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Beim Einkaufen begegnet dir in Deutschland noch etwas Besonderes: das **Pfand** auf Flaschen. Warum man Flaschen zurückbringt, wie man Müll trennt — und wie du über das Wetter sprichst: Das alles kommt in der nächsten Lektion, **Umwelt & Natur**.',
    },
  ],
}
