// Übungsheft B1 — Lektion 40: Einkaufen & Konsum
export default {
  lektion: 40,
  titel: 'Übungsheft — Einkaufen & Konsum',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Im Geschäft und online: Wähle das richtige Wort oder die richtige Form.',
      items: [
        {
          typ: 'mc',
          frage: 'Die Jacke passt nicht. Hier ist der Kassenbon. Kann ich sie ___?',
          optionen: ['umtauschen', 'anprobieren', 'bezahlen'],
          loesung: 0,
        },
        { typ: 'mc', frage: 'Guten Tag, ich ___ gern ein Kilo Äpfel.', optionen: ['habe', 'hatte', 'hätte'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ich habe die Schuhe online {1}, {2} die Preise dort besser sind. Leider {3} sie nicht.',
          bank: ['bestellt', 'weil', 'denn', 'passen', 'passt'],
          loesungen: { 1: 'bestellt', 2: 'weil', 3: 'passen' },
        },
        {
          typ: 'luecke',
          text: 'Im Schaufenster hängt ein {1} Mantel. Der {2} Mantel ist im Angebot. Ich probiere den {3} Mantel sofort an.',
          bank: ['schwarzer', 'schwarze', 'schwarzen', 'schwarzes'],
          loesungen: { 1: 'schwarzer', 2: 'schwarze', 3: 'schwarzen' },
        },
        {
          typ: 'luecke',
          text: 'Das ist der Pullover, {1} ich gestern gekauft habe. Die Verkäuferin, {2} mich beraten hat, war sehr nett. Das Geschäft, in {3} ich immer einkaufe, ist klein.',
          bank: ['den', 'die', 'dem', 'das', 'der'],
          loesungen: { 1: 'den', 2: 'die', 3: 'dem' },
        },
        {
          typ: 'zuordnen',
          links: ['der Kassenbon', 'das Angebot', 'anprobieren', 'umtauschen', 'die Werbung'],
          rechts: [
            'das kleine Papier von der Kasse',
            'ein Produkt zu einem reduzierten Preis',
            'Kleidung vor dem Kauf testen',
            'ein Produkt zurückbringen und ein anderes nehmen',
            'Prospekte im Briefkasten und Anzeigen im Internet',
          ],
          loesung: {
            'der Kassenbon': 'das kleine Papier von der Kasse',
            'das Angebot': 'ein Produkt zu einem reduzierten Preis',
            'anprobieren': 'Kleidung vor dem Kauf testen',
            'umtauschen': 'ein Produkt zurückbringen und ein anderes nehmen',
            'die Werbung': 'Prospekte im Briefkasten und Anzeigen im Internet',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['aufzuheben', 'den', 'nicht', 'Vergiss', 'Kassenbon'],
          loesung: 'Vergiss nicht, den Kassenbon aufzuheben.',
        },
        {
          typ: 'satzbau',
          woerter: ['beraten', 'man', 'Im', 'gut', 'wird', 'Geschäft', 'meistens'],
          loesung: 'Im Geschäft wird man meistens gut beraten.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich anprobiere die Jacke.', 'Ich probiere die Jacke an.'],
          loesung: 1,
          warum: '**anprobieren** es un verbo separable: en presente el prefijo **an** va al final de la frase.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Hose passt mir leider nicht.', 'Die Hose passt mich leider nicht.'],
          loesung: 0,
          warum: '**passen** rige **Dativ**: *mir*, *dir*, *ihm* … El error típico es usar el acusativo (*mich*) como con «me queda».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail an den Online-Shop. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail: Reklamation',
      text: 'Sehr geehrte Damen und Herren, am 3. März habe ich in Ihrem Online-Shop eine Kaffeemaschine für 89 Euro bestellt. Das Paket ist gestern angekommen, aber leider funktioniert die Maschine nicht: Das Licht geht an, doch es kommt kein Wasser. Ich habe alles genau nach der Anleitung gemacht. Außerdem fehlt im Paket die Rechnung. Ich habe nur die Bestellbestätigung per E-Mail. Ich möchte die Maschine nicht umtauschen, weil ich inzwischen ein anderes Modell im Geschäft gekauft habe. Bitte schicken Sie mir ein Etikett für die Rücksendung und überweisen Sie mir das Geld zurück. Meine Bestellnummer ist 4471-B. Mit freundlichen Grüßen Farida Amini',
      items: [
        { typ: 'rf', aussage: 'Frau Amini hat die Kaffeemaschine in einem Geschäft gekauft.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist das Problem mit der Maschine?',
          optionen: ['Das Licht geht nicht an.', 'Es kommt kein Wasser.', 'Die Maschine ist zu laut.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Im Paket war keine Rechnung.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was möchte Frau Amini?',
          optionen: ['eine neue Maschine vom gleichen Modell', 'einen Gutschein für den Shop', 'ihr Geld zurück'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch im Schuhgeschäft. Löse dann die vier Aufgaben.',
      audio: {
        transcript: 'Verkäufer: Guten Tag, kann ich Ihnen helfen?\nKundin: Ja, bitte. Ich suche Wanderschuhe. Die braunen hier gefallen mir, aber ich sehe keinen Preis.\nVerkäufer: Die kosten normalerweise fünfundneunzig Euro. Diese Woche sind sie aber im Angebot, für neunundsechzig Euro.\nKundin: Das ist ja günstig! Haben Sie die auch in Größe neununddreißig?\nVerkäufer: In Braun leider nicht mehr, nur noch in Grau. Die braunen bekommen wir erst am Montag wieder.\nKundin: Grau gefällt mir nicht so gut. Kann ich die braunen in Größe vierzig anprobieren?\nVerkäufer: Natürlich, bitte sehr.\nKundin: Sie sind ein bisschen groß, aber mit dicken Socken passen sie gut. Ich nehme sie. Kann ich mit Karte bezahlen?\nVerkäufer: Ja, gern, vorne an der Kasse. Heben Sie bitte den Kassenbon auf. Damit können Sie die Schuhe vierzehn Tage lang umtauschen.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Was kosten die Schuhe in dieser Woche?',
          optionen: ['95 Euro', '69 Euro', '59 Euro'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die braunen Schuhe gibt es heute in Größe 39.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Schuhe kauft die Kundin?',
          optionen: ['die braunen in Größe 40', 'die grauen in Größe 39', 'die braunen in Größe 39'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Kundin kann die Schuhe zwei Wochen lang umtauschen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an das Geschäft. Ergänze dann das Umtauschformular.',
      quelle: 'Guten Tag, mein Name ist Mateo Rinaldi. Letzten Samstag habe ich bei Ihnen eine blaue Winterjacke in Größe M gekauft. Leider ist sie zu klein. Ich möchte sie gern gegen Größe L umtauschen. Den Kassenbon habe ich noch. Sie erreichen mich unter 0171 5538902.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Mateo Rinaldi', 'Rinaldi'] },
        { id: 'artikel', label: 'Artikel', erwartet: ['Winterjacke', 'eine blaue Winterjacke', 'blaue Winterjacke', 'Jacke'] },
        { id: 'groesse_alt', label: 'Gekaufte Größe', erwartet: ['M', 'Größe M'] },
        { id: 'groesse_neu', label: 'Gewünschte Größe', erwartet: ['L', 'Größe L'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0171 5538902', '01715538902', '0171-5538902'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich über das Thema Einkaufen. Du hast 90 Sekunden Zeit.',
      aufgabe: 'Wie kaufst du ein? Beschreib deine Gewohnheiten und sag deine Meinung zu Werbung.',
      punkte: [
        'Wo und wie oft kaufst du ein?',
        'Wie bezahlst du am liebsten, und warum?',
        'Wie findest du Werbung und Angebote?',
      ],
      redemittel: ['… kaufe ich meistens im … / auf dem … ein.', 'Ich bezahle am liebsten …, weil …', 'Auf Angebote achte ich …', 'Werbung finde ich …, weil …'],
      maxSekunden: 90,
      beispielLoesung: 'Lebensmittel kaufe ich meistens einmal pro Woche im Supermarkt ein, am liebsten am Samstagmorgen. Obst und Gemüse hole ich aber auf dem Markt, weil es dort frischer ist. Kleidung kaufe ich nur im Geschäft, denn ich möchte alles zuerst anprobieren. Ich bezahle fast immer mit Karte. Das geht schnell, und ich muss kein Bargeld mitnehmen. Nur auf dem Markt bezahle ich bar. Auf Angebote achte ich schon, vor allem bei teuren Sachen. Werbung finde ich aber oft nervig. Ich bekomme jeden Tag viele E-Mails von Online-Shops und lösche sie sofort. Ehrlich gesagt habe ich wegen Werbung auch schon Dinge gekauft, die ich gar nicht gebraucht habe.',
    },
  ],
}
