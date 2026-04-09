export const A2_EXERCISES = [
  // ══════ A2 GRAMMATIK — Einheit 1: Perfekt, trennbare Verben ══════
  { id:'g-a2-001', type:'grammar', subtype:'multiple_choice', level:'A2', unit:1, title:'Perfekt mit sein', question:'Ich ___ gestern ins Kino gegangen.', options:['habe','bin','hatte','war'], answer:'bin', explanation:'Los verbos de movimiento usan "sein" como auxiliar en Perfekt: ich bin gegangen.', xp:10 },
  { id:'g-a2-002', type:'grammar', subtype:'multiple_choice', level:'A2', unit:1, title:'Perfekt mit haben', question:'Sie ___ das Buch gelesen.', options:['ist','bin','hat','haben'], answer:'hat', explanation:'La mayoría de verbos transitivos usan "haben" en Perfekt: sie hat gelesen.', xp:10 },
  { id:'g-a2-003', type:'grammar', subtype:'multiple_choice', level:'A2', unit:1, title:'Trennbare Verben', question:'Ich ___ um 7 Uhr ___. (aufstehen)', options:['stehe...auf','aufstehe...','stehe...an','auf...stehe'], answer:'stehe...auf', explanation:'Los verbos separables dividen su prefijo: aufstehen → ich stehe auf.', xp:10 },
  { id:'g-a2-004', type:'grammar', subtype:'fill_blank', level:'A2', unit:1, title:'Perfekt: Partizip II', question:'Ich habe einen Kuchen ___. (backen)', options:['gebacken','gebackt','backen','bäckt'], answer:'gebacken', explanation:'"Backen" es irregular. Partizip II: gebacken. Ich habe gebacken = he horneado.', xp:10 },
  { id:'g-a2-005', type:'grammar', subtype:'multiple_choice', level:'A2', unit:1, title:'Perfekt: sein oder haben?', question:'Er ___ nach Berlin geflogen.', options:['hat','ist','wird','war'], answer:'ist', explanation:'"Fliegen" (volar) es un verbo de movimiento → usa "sein": er ist geflogen.', xp:10 },
  { id:'g-a2-006', type:'grammar', subtype:'conjugation', level:'A2', unit:1, title:'Trennbare Verben: einkaufen', question:'Maria ___ im Supermarkt ___.', options:['kauft...ein','einkauft...','kauft...an','ein...kauft'], answer:'kauft...ein', explanation:'Einkaufen → sie kauft ein. El prefijo "ein" va al final de la oración.', xp:10 },

  // ══════ A2 GRAMMATIK — Einheit 2: Modalverben, Wortstellung ══════
  { id:'g-a2-007', type:'grammar', subtype:'multiple_choice', level:'A2', unit:2, title:'Modalverben: können', question:'Ich ___ Deutsch sprechen.', options:['kann','will','muss','soll'], answer:'kann', explanation:'"Kann" de "können" expresa capacidad/habilidad. Ich kann = yo puedo/sé.', xp:10 },
  { id:'g-a2-008', type:'grammar', subtype:'multiple_choice', level:'A2', unit:2, title:'Modalverben: müssen', question:'Du ___ zum Arzt gehen.', options:['kannst','willst','musst','sollst'], answer:'musst', explanation:'"Müssen" expresa obligación/necesidad. Du musst = tú debes/tienes que.', xp:10 },
  { id:'g-a2-009', type:'grammar', subtype:'multiple_choice', level:'A2', unit:2, title:'Wortstellung', question:'Morgen ___ ich zur Schule.', options:['gehe','ich gehe','gehe ich','bin gegangen'], answer:'gehe', explanation:'Cuando un adverbio temporal va al inicio, el verbo ocupa el 2do lugar: Morgen gehe ich...', xp:10 },
  { id:'g-a2-010', type:'grammar', subtype:'multiple_choice', level:'A2', unit:2, title:'Modalverben: wollen', question:'Wir ___ heute ins Kino gehen.', options:['können','wollen','müssen','sollen'], answer:'wollen', explanation:'"Wollen" expresa deseo/intención. Wir wollen = queremos.', xp:10 },
  { id:'g-a2-011', type:'grammar', subtype:'fill_blank', level:'A2', unit:2, title:'Imperativ', question:'___ bitte das Fenster! (öffnen, du-Form)', options:['Öffne','Öffnest','Öffnet','Öffnen'], answer:'Öffne', explanation:'El imperativo con "du" se forma con la raíz del verbo: öffnen → Öffne!', xp:10 },

  // ══════ A2 GRAMMATIK — Einheit 3: Akkusativ, Dativ, Präpositionen ══════
  { id:'g-a2-012', type:'grammar', subtype:'fill_blank', level:'A2', unit:3, title:'Akkusativ', question:'Ich sehe ___ Mann.', options:['der','den','dem','des'], answer:'den', explanation:'En acusativo, "der" cambia a "den": ich sehe den Mann. Solo el masculino cambia.', xp:10 },
  { id:'g-a2-013', type:'grammar', subtype:'multiple_choice', level:'A2', unit:3, title:'Dativpräpositionen', question:'Ich gehe ___ dem Supermarkt.', options:['zu','nach','bei','mit'], answer:'zu', explanation:'"Zu" + dativo indica dirección hacia un lugar concreto: zum Supermarkt.', xp:10 },
  { id:'g-a2-014', type:'grammar', subtype:'multiple_choice', level:'A2', unit:3, title:'Dativ: Personalpronomen', question:'Ich gebe ___ das Buch. (a él)', options:['er','ihn','ihm','sein'], answer:'ihm', explanation:'El pronombre personal en dativo de "er" es "ihm": ich gebe ihm = le doy (a él).', xp:10 },
  { id:'g-a2-015', type:'grammar', subtype:'multiple_choice', level:'A2', unit:3, title:'Wechselpräpositionen', question:'Die Katze liegt ___ dem Tisch. (debajo)', options:['unter','auf','neben','hinter'], answer:'unter', explanation:'"Unter" + dativo (posición estática) = debajo de. Las Wechselpräpositionen usan Dativ para posición y Akkusativ para dirección.', xp:10 },
  { id:'g-a2-016', type:'grammar', subtype:'fill_blank', level:'A2', unit:3, title:'Komparativ', question:'Berlin ist ___ als München. (groß)', options:['großer','größer','am größten','groß'], answer:'größer', explanation:'El comparativo de "groß" es "größer" (con Umlaut). Comparativo: Adj + -er + als.', xp:10 },

  // ══════ A2 LESEN ══════
  { id:'r-a2-001', type:'reading', subtype:'comprehension', level:'A2', unit:1, title:'Eine Einladung',
    text:'Liebe Maria, ich möchte dich zu meiner Geburtstagsparty einladen. Die Party findet am Samstag, den 15. März statt. Sie beginnt um 19 Uhr bei mir zu Hause. Bitte bring etwas zu trinken mit. Ich freue mich auf dich! Deine Freundin Julia',
    vocabulary:[{word:'einladen',translation:'invitar'},{word:'Geburtstag',translation:'cumpleaños'},{word:'findet statt',translation:'tiene lugar'},{word:'Ich freue mich',translation:'me alegro'}],
    questions:[
      {question:'Zu welchem Anlass ist die Party?', options:['Neujahr','Weihnachten','Geburtstag','Hochzeit'], answer:'Geburtstag'},
      {question:'Wann findet die Party statt?', options:['Freitag, 15.','Samstag, 15.','Sonntag, 15.','Montag, 15.'], answer:'Samstag, 15.'},
      {question:'Was soll Maria mitbringen?', options:['Essen','Etwas zu trinken','Ein Geschenk','Blumen'], answer:'Etwas zu trinken'},
    ], xp:15 },
  { id:'r-a2-002', type:'reading', subtype:'comprehension', level:'A2', unit:1, title:'Postkarte aus dem Urlaub',
    text:'Lieber Tom, ich bin in Italien! Das Wetter ist fantastisch, jeden Tag Sonne und 30 Grad. Gestern bin ich im Meer geschwommen und habe Pizza gegessen. Morgen besuche ich den Vatikan. Viele Grüße, Lisa',
    vocabulary:[{word:'Meer',translation:'mar'},{word:'geschwommen',translation:'nadado'},{word:'besuche',translation:'visito'},{word:'Grüße',translation:'saludos'}],
    questions:[
      {question:'Wo ist Lisa?', options:['In Frankreich','In Italien','In Spanien','In Griechenland'], answer:'In Italien'},
      {question:'Was hat Lisa gestern gemacht?', options:['Einen Berg bestiegen','Im Meer geschwommen','Ein Museum besucht','Eingekauft'], answer:'Im Meer geschwommen'},
    ], xp:15 },
  { id:'r-a2-003', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Wohnungssuche',
    text:'Ich suche eine neue Wohnung in Berlin. Die Wohnung soll nicht zu teuer sein, maximal 800 Euro pro Monat. Sie muss mindestens zwei Zimmer haben. Ein Balkon wäre toll. Ich brauche auch eine gute Anbindung an die U-Bahn.',
    vocabulary:[{word:'suche',translation:'busco'},{word:'mindestens',translation:'al menos'},{word:'Anbindung',translation:'conexión'},{word:'U-Bahn',translation:'metro'}],
    questions:[
      {question:'Wie viel darf die Wohnung maximal kosten?', options:['600€','700€','800€','900€'], answer:'800€'},
      {question:'Wie viele Zimmer braucht die Person mindestens?', options:['Eins','Zwei','Drei','Vier'], answer:'Zwei'},
    ], xp:15 },
  { id:'r-a2-004', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Wegbeschreibung',
    text:'Gehen Sie geradeaus bis zur Ampel. An der Ampel biegen Sie links ab. Dann gehen Sie die zweite Straße rechts. Das Krankenhaus ist auf der linken Seite, neben der Apotheke.',
    vocabulary:[{word:'Ampel',translation:'semáforo'},{word:'biegen ab',translation:'giran/doblan'},{word:'Straße',translation:'calle'},{word:'Krankenhaus',translation:'hospital'},{word:'Apotheke',translation:'farmacia'}],
    questions:[
      {question:'Wo soll man an der Ampel abbiegen?', options:['Rechts','Links','Geradeaus','Zurück'], answer:'Links'},
      {question:'Was ist neben dem Krankenhaus?', options:['Ein Supermarkt','Eine Apotheke','Eine Schule','Ein Park'], answer:'Eine Apotheke'},
    ], xp:15 },
  { id:'r-a2-005', type:'reading', subtype:'comprehension', level:'A2', unit:3, title:'Eine Stellenanzeige',
    text:'Wir suchen eine freundliche Verkäuferin für unser Geschäft. Die Arbeitszeit ist von Montag bis Freitag, 9 bis 17 Uhr. Erfahrung im Verkauf ist erwünscht, aber nicht notwendig. Wir bieten ein gutes Gehalt und nette Kollegen.',
    vocabulary:[{word:'Verkäuferin',translation:'vendedora'},{word:'Geschäft',translation:'tienda'},{word:'Erfahrung',translation:'experiencia'},{word:'Gehalt',translation:'salario'}],
    questions:[
      {question:'Wen suchen sie?', options:['Einen Koch','Eine Verkäuferin','Einen Lehrer','Eine Sekretärin'], answer:'Eine Verkäuferin'},
      {question:'Wie sind die Arbeitszeiten?', options:['8-16 Uhr','9-17 Uhr','10-18 Uhr','8-14 Uhr'], answer:'9-17 Uhr'},
    ], xp:15 },
  { id:'r-a2-006', type:'reading', subtype:'comprehension', level:'A2', unit:3, title:'Beim Arzt',
    text:'Ich habe seit drei Tagen Kopfschmerzen und Fieber. Der Arzt sagt, ich habe eine Erkältung. Ich soll viel Tee trinken und mich ausruhen. Er gibt mir ein Rezept für Medikamente. Ich muss nächste Woche wiederkommen.',
    vocabulary:[{word:'Kopfschmerzen',translation:'dolor de cabeza'},{word:'Fieber',translation:'fiebre'},{word:'Erkältung',translation:'resfriado'},{word:'Rezept',translation:'receta'},{word:'ausruhen',translation:'descansar'}],
    questions:[
      {question:'Was hat die Person?', options:['Magenschmerzen','Eine Erkältung','Einen gebrochenen Arm','Zahnschmerzen'], answer:'Eine Erkältung'},
      {question:'Was soll die Person machen?', options:['Sport treiben','Viel Tee trinken und ausruhen','Ins Büro gehen','Reisen'], answer:'Viel Tee trinken und ausruhen'},
    ], xp:15 },

  // ══════ A2 HÖREN ══════
  { id:'l-a2-001', type:'listening', subtype:'audio_questions', level:'A2', unit:1, title:'Am Bahnhof',
    audioText:'Der nächste Zug nach Hamburg fährt um vierzehn Uhr dreißig ab. Er kommt um sechzehn Uhr fünfzig an. Das Ticket kostet zweiundvierzig Euro.',
    questions:[
      {question:'Wann fährt der Zug nach Hamburg ab?', options:['13:30','14:00','14:30','15:00'], answer:'14:30'},
      {question:'Wie viel kostet das Ticket?', options:['24€','32€','42€','52€'], answer:'42€'},
    ], xp:15 },
  { id:'l-a2-002', type:'listening', subtype:'audio_questions', level:'A2', unit:1, title:'Telefonanruf beim Arzt',
    audioText:'Guten Tag, Praxis Doktor Meier. Ich möchte bitte einen Termin. Haben Sie am Mittwoch um zehn Uhr noch einen freien Termin? Ja, das passt. Unter welchem Namen? Schmidt, Maria Schmidt.',
    questions:[
      {question:'Wann möchte Frau Schmidt den Termin?', options:['Montag 10 Uhr','Dienstag 10 Uhr','Mittwoch 10 Uhr','Donnerstag 10 Uhr'], answer:'Mittwoch 10 Uhr'},
      {question:'Wie heißt die Patientin?', options:['Maria Müller','Maria Meier','Maria Schmidt','Maria Weber'], answer:'Maria Schmidt'},
    ], xp:15 },
  { id:'l-a2-003', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Im Restaurant',
    audioText:'Guten Abend! Ich möchte bitte die Speisekarte. Ich nehme die Tomatensuppe als Vorspeise und das Hähnchen mit Reis als Hauptgericht. Zum Trinken hätte ich gern ein Wasser.',
    questions:[
      {question:'Was bestellt die Person als Vorspeise?', options:['Salat','Tomatensuppe','Brot mit Butter','Nichts'], answer:'Tomatensuppe'},
      {question:'Was trinkt die Person?', options:['Bier','Wein','Wasser','Saft'], answer:'Wasser'},
    ], xp:15 },
  { id:'l-a2-004', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Einkaufen',
    audioText:'Entschuldigung, wo finde ich die Milch? Die Milch steht im Kühlregal, gleich neben dem Käse. Und haben Sie auch frisches Brot? Ja, das frische Brot finden Sie in der Bäckerei-Abteilung.',
    questions:[
      {question:'Wo steht die Milch?', options:['Neben dem Obst','Im Kühlregal neben dem Käse','An der Kasse','Am Eingang'], answer:'Im Kühlregal neben dem Käse'},
      {question:'Wo findet man frisches Brot?', options:['Im Kühlregal','An der Kasse','In der Bäckerei-Abteilung','Neben der Milch'], answer:'In der Bäckerei-Abteilung'},
    ], xp:15 },
  { id:'l-a2-005', type:'listening', subtype:'audio_questions', level:'A2', unit:3, title:'Wettervorhersage',
    audioText:'Morgen wird es in Berlin regnerisch und kühl, nur zwölf Grad. Im Süden Deutschlands scheint die Sonne, und es wird warm, bis zu fünfundzwanzig Grad.',
    questions:[
      {question:'Wie wird das Wetter in Berlin?', options:['Sonnig','Regnerisch und kühl','Verschneit','Sehr heiß'], answer:'Regnerisch und kühl'},
      {question:'Wie warm wird es im Süden?', options:['12 Grad','20 Grad','25 Grad','30 Grad'], answer:'25 Grad'},
    ], xp:15 },
  { id:'l-a2-006', type:'listening', subtype:'audio_questions', level:'A2', unit:3, title:'Wohnungsbesichtigung',
    audioText:'Die Wohnung hat drei Zimmer, eine Küche und ein Bad. Die Miete beträgt siebenhundert Euro pro Monat, inklusive Nebenkosten. Es gibt einen kleinen Balkon mit Blick auf den Park.',
    questions:[
      {question:'Wie viele Zimmer hat die Wohnung?', options:['Zwei','Drei','Vier','Fünf'], answer:'Drei'},
      {question:'Wie viel kostet die Miete?', options:['500€','600€','700€','800€'], answer:'700€'},
    ], xp:15 },

  // ══════ A2 SCHREIBEN ══════
  { id:'w-a2-001', type:'writing', subtype:'prompt', level:'A2', unit:1, title:'Eine E-Mail über den Urlaub',
    prompt:'Schreibe eine E-Mail an deinen deutschen Freund über deinen letzten Urlaub. Wohin bist du gefahren? Was hast du gemacht? Hat es dir gefallen? (Mindestens 60 Wörter, benutze das Perfekt)',
    hints:['Ich bin nach ... gefahren.','Ich habe ... besucht.','Das Wetter war...','Es hat mir sehr gut gefallen.'], minWords:60, xp:25 },
  { id:'w-a2-002', type:'writing', subtype:'prompt', level:'A2', unit:2, title:'Meine Wohnung',
    prompt:'Beschreibe deine Wohnung oder dein Haus. Wie viele Zimmer hat es? Wie sieht dein Lieblingszimmer aus? (Mindestens 50 Wörter)',
    hints:['Meine Wohnung hat...','Das Wohnzimmer ist...','In meinem Zimmer gibt es...','Ich finde...'], minWords:50, xp:25 },
  { id:'w-a2-003', type:'writing', subtype:'prompt', level:'A2', unit:3, title:'Beim Arzt',
    prompt:'Du bist krank und gehst zum Arzt. Beschreibe deine Symptome und was der Arzt dir gesagt hat. (Mindestens 55 Wörter)',
    hints:['Ich habe seit ... Tagen...','Mir tut ... weh.','Der Arzt hat gesagt, dass...','Ich soll...'], minWords:55, xp:25 },
]
