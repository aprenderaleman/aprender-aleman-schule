// Übungsheft B1 — Lektion 08: Wechselpräpositionen
export default {
  lektion: 8,
  titel: 'Übungsheft — Wechselpräpositionen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Frag dich immer: Wo? oder Wohin? Wähle dann die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Ich lege das Handy auf ___ Tisch.', optionen: ['dem', 'den', 'der'], loesung: 1 },
        { typ: 'mc', frage: 'Die Jacke ___ gestern im Schrank.', optionen: ['hängte', 'hängt', 'hing'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ich habe die Tasche auf {1} Stuhl {2}. Jetzt {3} sie dort.',
          bank: ['den', 'dem', 'gestellt', 'gestanden', 'steht'],
          loesungen: { 1: 'den', 2: 'gestellt', 3: 'steht' },
        },
        {
          typ: 'luecke',
          text: 'Wir haben zwei Stunden {1} Café {2}. Danach sind wir {3} Kino gegangen.',
          bank: ['im', 'ins', 'gesessen', 'gesetzt'],
          loesungen: { 1: 'im', 2: 'gesessen', 3: 'ins' },
        },
        {
          typ: 'luecke',
          text: 'Das Poster {1} lange über {2} Bett. Gestern habe ich es an {3} Tür gehängt.',
          bank: ['hing', 'hängte', 'dem', 'das', 'die', 'der'],
          loesungen: { 1: 'hing', 2: 'dem', 3: 'die' },
        },
        {
          typ: 'zuordnen',
          links: ['stand', 'lag', 'saß', 'hing', 'legte'],
          rechts: ['hat gestanden', 'hat gelegen', 'hat gesessen', 'hat gehangen', 'hat gelegt'],
          loesung: { 'stand': 'hat gestanden', 'lag': 'hat gelegen', 'saß': 'hat gesessen', 'hing': 'hat gehangen', 'legte': 'hat gelegt' },
        },
        { typ: 'satzbau', woerter: ['Kühlschrank', 'stand', 'Die', 'im', 'Flasche'], loesung: 'Die Flasche stand im Kühlschrank.' },
        { typ: 'satzbau', woerter: ['gehängt', 'Wand', 'Ich', 'das', 'an', 'habe', 'Bild', 'die'], loesung: 'Ich habe das Bild an die Wand gehängt.' },
        {
          typ: 'korrektur',
          optionen: ['Ich warte auf dem Bus.', 'Ich warte auf den Bus.'],
          loesung: 1,
          warum: '*warten auf* va **siempre con acusativo**: la preposición es fija del verbo, aquí no se pregunta Wo?/Wohin?',
        },
        {
          typ: 'korrektur',
          optionen: ['Wir haben den ganzen Abend auf dem Sofa gesessen.', 'Wir haben den ganzen Abend auf dem Sofa gesetzt.'],
          loesung: 0,
          warum: 'Posición (Wo?) → **sitzen → hat gesessen**. *Setzen* es la acción de sentar algo o a alguien (Wohin? + Akk.).',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Nachricht der Hausverwaltung. Löse dann die vier Aufgaben.',
      textTitel: 'Hausverwaltung Krämer — Information für alle Mieter',
      text: 'Sehr geehrte Mieterinnen und Mieter, in den letzten Wochen standen im Hausflur oft Fahrräder und Kinderwagen. Letzten Montag lag dort sogar ein alter Teppich. Das ist gefährlich, denn bei Feuer brauchen wir einen freien Weg. Bitte stellen Sie Ihre Fahrräder ab sofort in den Keller. Dort gibt es jetzt neben der Waschküche einen neuen Fahrradraum. Den Schlüssel bekommen Sie beim Hausmeister, Herrn Yilmaz. Er sitzt montags und donnerstags von 17 bis 19 Uhr in seinem Büro im Erdgeschoss. Kinderwagen dürfen weiter unter der Treppe stehen. Den Teppich haben wir schon an die Straße gestellt, die Müllabfuhr holt ihn am Freitag ab. Vielen Dank für Ihre Hilfe! Mit freundlichen Grüßen, Ihre Hausverwaltung Krämer',
      items: [
        { typ: 'rf', aussage: 'Letzten Montag lag ein Teppich im Hausflur.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wohin sollen die Mieter ihre Fahrräder stellen?',
          optionen: ['in den Hausflur', 'unter die Treppe', 'in den Fahrradraum im Keller'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Herr Yilmaz ist jeden Tag in seinem Büro.', loesung: false },
        { typ: 'rf', aussage: 'Kinderwagen dürfen nicht mehr unter der Treppe stehen.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Nachricht auf dem Anrufbeantworter. Löse dann die vier Aufgaben.',
      audio: {
        transcript: 'Hallo Felix, hier ist Carla. Danke, dass du nächste Woche meine Blumen gießt! Der Schlüssel liegt nicht unter der Fußmatte, sondern bei meiner Nachbarin, Frau Sommer. Sie wohnt im ersten Stock. Die Gießkanne steht im Bad neben der Waschmaschine. Die Blumen auf dem Balkon brauchen jeden Tag Wasser, die Pflanzen im Wohnzimmer nur zweimal pro Woche. Stell bitte die große Pflanze nicht ans Fenster, denn dort ist es zu kalt für sie. Meine Post kannst du einfach auf den Küchentisch legen. Ach ja, im Kühlschrank liegt noch Käse, und auf dem Regal über dem Herd steht eine Flasche Saft. Das kannst du gern nehmen. Ich komme am Sonntag gegen neunzehn Uhr zurück. Vielen Dank und bis bald!',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wo ist der Schlüssel für die Wohnung?',
          optionen: ['unter der Fußmatte', 'bei der Nachbarin', 'im Briefkasten'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Gießkanne steht auf dem Balkon.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie oft brauchen die Pflanzen im Wohnzimmer Wasser?',
          optionen: ['jeden Tag', 'einmal pro Woche', 'zweimal pro Woche'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Felix soll die Post auf den Küchentisch legen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze dann das Formular für die Möbellieferung.',
      quelle: 'Guten Tag, hier ist Lucía Fernández. Ich habe gestern bei Ihnen ein Sofa und ein Regal gekauft. Können Sie die Möbel am 14. Oktober liefern? Ich wohne im dritten Stock. Bitte stellen Sie das Sofa ins Wohnzimmer und das Regal ins Arbeitszimmer. Vielen Dank!',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Lucía Fernández', 'Fernández', 'Lucia Fernandez', 'Fernandez'] },
        { id: 'termin', label: 'Liefertermin', erwartet: ['14. Oktober', 'am 14. Oktober', '14.10.', '14.10'] },
        { id: 'etage', label: 'Stockwerk', erwartet: ['dritter Stock', 'im dritten Stock', 'dritten Stock', '3. Stock', '3'] },
        { id: 'sofa', label: 'Sofa — wohin?', erwartet: ['ins Wohnzimmer', 'in das Wohnzimmer', 'Wohnzimmer'] },
        { id: 'regal', label: 'Regal — wohin?', erwartet: ['ins Arbeitszimmer', 'in das Arbeitszimmer', 'Arbeitszimmer'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Beschreib ein Zimmer. Sprich ungefähr 75 Sekunden.',
      aufgabe: 'Beschreib dein Lieblingszimmer. Wo steht, liegt und hängt alles?',
      punkte: [
        'Welches Zimmer ist es? Was machst du dort?',
        'Wo stehen die Möbel? Was hängt an der Wand?',
        'Was hast du zuletzt neu hingestellt oder aufgehängt? Wohin?',
      ],
      redemittel: ['Mein Lieblingszimmer ist …', 'Neben dem Fenster steht …', 'An der Wand hängt …', 'Ich habe … an die Wand gehängt.'],
      maxSekunden: 75,
      beispielLoesung: 'Mein Lieblingszimmer ist das Wohnzimmer. Dort lese ich abends oder sehe Filme. Das Sofa steht an der Wand, und vor dem Sofa liegt ein Teppich. Neben dem Fenster steht mein Schreibtisch, weil es dort hell ist. Über dem Sofa hängen drei Fotos von meiner Familie. Zwischen dem Sofa und der Tür steht ein Regal mit Büchern. Letzten Monat habe ich eine Lampe gekauft. Ich habe sie zuerst auf den Schreibtisch gestellt, aber das war nicht gut. Jetzt steht sie in der Ecke hinter dem Sofa. Und meine Gitarre habe ich an die Wand gehängt.',
    },
  ],
}
