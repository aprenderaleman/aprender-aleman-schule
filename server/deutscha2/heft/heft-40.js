// Übungsheft A2 — Lektion 40: Prüfungssimulation 2 + Strategien
// Repaso mezclado de todo el curso A2 (simulacro final).
export default {
  lektion: 40,
  titel: 'Übungsheft — Prüfungssimulation 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Die letzte Wiederholung: Löse die Aufgaben. ~~(El último repaso: resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Ich möchte ein Zimmer ___ .', optionen: ['reserviert', 'reservieren', 'reservierst'], loesung: 1 },
        { typ: 'mc', frage: 'Wo ist ___ Apotheke?', optionen: ['die', 'das', 'der'], loesung: 0 },
        { typ: 'mc', frage: 'Kannst du ___ bitte helfen?', optionen: ['mich', 'ich', 'mir'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Gestern {1} ich einkaufen gegangen. Danach {2} ich für meine Familie gekocht.',
          bank: ['bin', 'habe', 'ist', 'hat'],
          loesungen: { 1: 'bin', 2: 'habe' },
        },
        {
          typ: 'luecke',
          text: 'Entschuldigung, wie {1} ich zum Bahnhof? — Gehen Sie {2} und dann links.',
          bank: ['komme', 'geradeaus', 'wohin'],
          loesungen: { 1: 'komme', 2: 'geradeaus' },
        },
        { typ: 'satzbau', woerter: ['seit', 'Deutsch', 'Ich', 'einem', 'lerne', 'Jahr'], loesung: 'Ich lerne seit einem Jahr Deutsch.' },
        { typ: 'satzbau', woerter: ['ich', 'mitbringen', 'Was', 'zum', 'kann', 'Fest'], loesung: 'Was kann ich zum Fest mitbringen?' },
        {
          typ: 'zuordnen',
          links: ['um', 'am', 'im', 'seit', 'mit'],
          rechts: ['7 Uhr', 'Montag', 'August', 'einem Jahr', 'dem Zug'],
          loesung: { 'um': '7 Uhr', 'am': 'Montag', 'im': 'August', 'seit': 'einem Jahr', 'mit': 'dem Zug' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.'],
          loesung: 1,
          warum: 'Delante de un sustantivo se niega con **kein/keine**: *keine Zeit, kein Auto*. ~~(nicht no acompaña al sustantivo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe fieber und bleibe zu Hause.', 'Ich habe Fieber und bleibe zu Hause.'],
          loesung: 1,
          warum: 'Los sustantivos van SIEMPRE con mayúscula: **Fieber**. ~~(La minúscula en un sustantivo cuesta puntos en Schreiben.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die vier Aufgaben. ~~(Lee el texto. Resuelve las cuatro tareas.)~~',
      textTitel: 'Blog von Selin — Meine Prüfung',
      text: 'Vor einer Woche habe ich die Prüfung gemacht — das Zertifikat A2! Am Abend davor habe ich nichts Neues gelernt. Ich habe nur meinen Ausweis in die Tasche gelegt und bin früh ins Bett gegangen. Am Morgen war ich sehr nervös, aber die Aufgaben waren nicht so schwer. Beim Hören habe ich eine Antwort nicht verstanden — kein Problem, ich habe trotzdem etwas angekreuzt. Nach der Prüfung habe ich mit meinen Freunden Pizza gegessen. Und heute? Heute habe ich das Ergebnis bekommen: bestanden! Jetzt beginne ich mit dem Niveau B1.',
      items: [
        { typ: 'rf', aussage: 'Selin hat am Abend vor der Prüfung viel gelernt.', loesung: false },
        { typ: 'rf', aussage: 'Am Morgen war Selin sehr nervös.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was hat Selin beim Hören gemacht?',
          optionen: ['Sie hat ein Feld leer gelassen.', 'Sie hat trotzdem etwas angekreuzt.', 'Sie hat eine Pause gemacht.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Selin hat die Prüfung bestanden.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Andrés Silva und ich möchte mich für die Prüfung „Zertifikat A2“ anmelden. Ich bin am 3. Februar 1995 geboren und komme aus Chile. Ich möchte die Prüfung im Dezember machen. Meine Telefonnummer ist 0170 4491238.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Andrés Silva', 'Silva'] },
        { id: 'geburtsdatum', label: 'Geburtsdatum', erwartet: ['3. Februar 1995', '03.02.1995', '3.2.1995'] },
        { id: 'land', label: 'Land', erwartet: ['Chile'] },
        { id: 'monat', label: 'Prüfung im Monat', erwartet: ['Dezember', 'im Dezember'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0170 4491238', '01704491238'] },
      ],
    },
  ],
}
