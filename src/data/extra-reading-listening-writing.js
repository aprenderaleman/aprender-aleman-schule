// Extra Reading, Listening & Writing exercises for A1 and A2
// IDs continue from existing ranges

export const A1_EXTRA_EXERCISES = [
  // ============ A1 READING (10 exercises: r-a1-007 to r-a1-016) ============

  // Unit 1 (3 exercises)
  { id:'r-a1-007', type:'reading', subtype:'comprehension', level:'A1', unit:1, title:'Mein Morgen',
    text:'Ich stehe um sieben Uhr auf. Ich frühstücke mit Brot und Marmelade. Dann trinke ich einen Kaffee. Um acht Uhr gehe ich zur Arbeit.',
    vocabulary:[{word:'aufstehen',translation:'aus dem Bett steigen'},{word:'frühstücken',translation:'das Frühstück zu sich nehmen'},{word:'das Brot',translation:'Backware aus Mehl'},{word:'die Marmelade',translation:'süßer Aufstrich aus Früchten'}],
    questions:[
      {question:'Wann steht die Person auf?', options:['Um sechs Uhr','Um sieben Uhr','Um acht Uhr','Um neun Uhr'], answer:'Um sieben Uhr'},
      {question:'Was isst die Person zum Frühstück?', options:['Müsli','Brot und Marmelade','Eier','Obst'], answer:'Brot und Marmelade'},
      {question:'Wann geht die Person zur Arbeit?', options:['Um sieben Uhr','Um neun Uhr','Um acht Uhr','Um zehn Uhr'], answer:'Um acht Uhr'},
    ], xp:15 },

  { id:'r-a1-008', type:'reading', subtype:'comprehension', level:'A1', unit:1, title:'Meine Familie',
    text:'Ich habe eine kleine Familie. Mein Vater heißt Klaus und meine Mutter heißt Anna. Ich habe einen Bruder. Er heißt Max und ist zwölf Jahre alt. Wir wohnen in Berlin.',
    vocabulary:[{word:'die Familie',translation:'Eltern und Kinder'},{word:'der Vater',translation:'männlicher Elternteil'},{word:'die Mutter',translation:'weiblicher Elternteil'},{word:'der Bruder',translation:'männliches Geschwisterkind'}],
    questions:[
      {question:'Wie heißt der Vater?', options:['Max','Klaus','Peter','Hans'], answer:'Klaus'},
      {question:'Wie alt ist Max?', options:['Zehn Jahre','Elf Jahre','Zwölf Jahre','Dreizehn Jahre'], answer:'Zwölf Jahre'},
      {question:'Wo wohnt die Familie?', options:['In Hamburg','In München','In Berlin','In Köln'], answer:'In Berlin'},
    ], xp:15 },

  { id:'r-a1-009', type:'reading', subtype:'comprehension', level:'A1', unit:1, title:'Im Supermarkt',
    text:'Ich gehe in den Supermarkt. Ich kaufe Milch, Brot und Äpfel. Die Milch kostet einen Euro. Das Brot kostet zwei Euro. Die Äpfel kosten drei Euro.',
    vocabulary:[{word:'der Supermarkt',translation:'großes Geschäft für Lebensmittel'},{word:'kaufen',translation:'etwas gegen Geld erwerben'},{word:'die Milch',translation:'weißes Getränk von Kühen'},{word:'kosten',translation:'einen bestimmten Preis haben'}],
    questions:[
      {question:'Was kauft die Person?', options:['Milch, Brot und Äpfel','Käse und Wurst','Wasser und Saft','Reis und Nudeln'], answer:'Milch, Brot und Äpfel'},
      {question:'Wie viel kostet die Milch?', options:['Zwei Euro','Drei Euro','Einen Euro','Vier Euro'], answer:'Einen Euro'},
      {question:'Was kostet drei Euro?', options:['Die Milch','Das Brot','Die Äpfel','Der Käse'], answer:'Die Äpfel'},
    ], xp:15 },

  // Unit 2 (4 exercises)
  { id:'r-a1-010', type:'reading', subtype:'comprehension', level:'A1', unit:2, title:'Das Wetter heute',
    text:'Heute ist das Wetter schön. Die Sonne scheint und es ist warm. Es sind 25 Grad. Ich gehe in den Park. Morgen regnet es vielleicht.',
    vocabulary:[{word:'das Wetter',translation:'Klima und Temperatur draußen'},{word:'die Sonne',translation:'Stern am Tag, gibt Licht und Wärme'},{word:'scheinen',translation:'Licht geben, leuchten'},{word:'warm',translation:'nicht kalt, angenehme Temperatur'}],
    questions:[
      {question:'Wie ist das Wetter heute?', options:['Es regnet','Es ist kalt','Es ist schön und warm','Es schneit'], answer:'Es ist schön und warm'},
      {question:'Wie viel Grad sind es?', options:['20 Grad','25 Grad','30 Grad','15 Grad'], answer:'25 Grad'},
      {question:'Wohin geht die Person?', options:['In die Schule','In den Park','Ins Kino','Nach Hause'], answer:'In den Park'},
    ], xp:15 },

  { id:'r-a1-011', type:'reading', subtype:'comprehension', level:'A1', unit:2, title:'Mein Zimmer',
    text:'Mein Zimmer ist klein, aber gemütlich. Ich habe ein Bett, einen Schreibtisch und einen Schrank. An der Wand hängt ein Bild. Das Fenster ist groß.',
    vocabulary:[{word:'das Zimmer',translation:'Raum in einer Wohnung'},{word:'gemütlich',translation:'angenehm und behaglich'},{word:'der Schreibtisch',translation:'Tisch zum Arbeiten oder Lernen'},{word:'der Schrank',translation:'Möbel zum Aufbewahren von Kleidung'}],
    questions:[
      {question:'Wie ist das Zimmer?', options:['Groß und hell','Klein aber gemütlich','Groß und kalt','Klein und dunkel'], answer:'Klein aber gemütlich'},
      {question:'Was hängt an der Wand?', options:['Eine Uhr','Ein Spiegel','Ein Bild','Ein Regal'], answer:'Ein Bild'},
      {question:'Wie ist das Fenster?', options:['Klein','Groß','Rund','Kaputt'], answer:'Groß'},
    ], xp:15 },

  { id:'r-a1-012', type:'reading', subtype:'comprehension', level:'A1', unit:2, title:'Meine Hobbys',
    text:'Ich habe viele Hobbys. Am Montag spiele ich Fußball. Am Mittwoch lese ich Bücher. Am Wochenende koche ich gern. Ich koche am liebsten Pasta.',
    vocabulary:[{word:'das Hobby',translation:'Beschäftigung in der Freizeit'},{word:'spielen',translation:'sich mit einem Spiel beschäftigen'},{word:'lesen',translation:'Texte mit den Augen aufnehmen'},{word:'kochen',translation:'Essen zubereiten'}],
    questions:[
      {question:'Wann spielt die Person Fußball?', options:['Am Dienstag','Am Montag','Am Freitag','Am Sonntag'], answer:'Am Montag'},
      {question:'Was macht die Person am Mittwoch?', options:['Sie kocht','Sie spielt Fußball','Sie liest Bücher','Sie schwimmt'], answer:'Sie liest Bücher'},
      {question:'Was kocht die Person am liebsten?', options:['Suppe','Salat','Pizza','Pasta'], answer:'Pasta'},
    ], xp:15 },

  { id:'r-a1-013', type:'reading', subtype:'comprehension', level:'A1', unit:2, title:'Der Hund',
    text:'Ich habe einen Hund. Er heißt Bello. Bello ist drei Jahre alt. Er ist braun und weiß. Bello spielt gern im Garten. Er frisst gern Fleisch.',
    vocabulary:[{word:'der Hund',translation:'Haustier, das bellt'},{word:'der Garten',translation:'Grünfläche am Haus mit Pflanzen'},{word:'fressen',translation:'essen (bei Tieren)'},{word:'das Fleisch',translation:'Nahrungsmittel von Tieren'}],
    questions:[
      {question:'Wie heißt der Hund?', options:['Max','Rex','Bello','Buddy'], answer:'Bello'},
      {question:'Welche Farbe hat der Hund?', options:['Schwarz und weiß','Braun und weiß','Grau','Braun und schwarz'], answer:'Braun und weiß'},
      {question:'Was frisst Bello gern?', options:['Obst','Gemüse','Fleisch','Brot'], answer:'Fleisch'},
    ], xp:15 },

  // Unit 3 (3 exercises)
  { id:'r-a1-014', type:'reading', subtype:'comprehension', level:'A1', unit:3, title:'Im Restaurant',
    text:'Wir gehen ins Restaurant. Ich bestelle eine Suppe und einen Salat. Mein Freund bestellt ein Schnitzel. Wir trinken Wasser. Das Essen schmeckt gut.',
    vocabulary:[{word:'das Restaurant',translation:'Ort, wo man Essen kaufen und essen kann'},{word:'bestellen',translation:'etwas beim Kellner anfordern'},{word:'die Suppe',translation:'flüssiges warmes Gericht'},{word:'schmecken',translation:'einen bestimmten Geschmack haben'}],
    questions:[
      {question:'Was bestellt die Person?', options:['Ein Schnitzel','Eine Pizza','Eine Suppe und einen Salat','Nur einen Salat'], answer:'Eine Suppe und einen Salat'},
      {question:'Was bestellt der Freund?', options:['Eine Suppe','Einen Salat','Ein Schnitzel','Eine Pizza'], answer:'Ein Schnitzel'},
      {question:'Wie schmeckt das Essen?', options:['Schlecht','Gut','Okay','Sehr salzig'], answer:'Gut'},
    ], xp:15 },

  { id:'r-a1-015', type:'reading', subtype:'comprehension', level:'A1', unit:3, title:'Die Schule',
    text:'Ich gehe in die Schule. Der Unterricht beginnt um acht Uhr. Mein Lieblingsfach ist Mathematik. In der Pause spiele ich mit meinen Freunden. Um 13 Uhr ist die Schule fertig.',
    vocabulary:[{word:'die Schule',translation:'Ort, wo Kinder lernen'},{word:'der Unterricht',translation:'Zeit, in der der Lehrer etwas erklärt'},{word:'das Lieblingsfach',translation:'das Schulfach, das man am meisten mag'},{word:'die Pause',translation:'kurze Unterbrechung zum Ausruhen'}],
    questions:[
      {question:'Wann beginnt der Unterricht?', options:['Um sieben Uhr','Um acht Uhr','Um neun Uhr','Um zehn Uhr'], answer:'Um acht Uhr'},
      {question:'Was ist das Lieblingsfach?', options:['Deutsch','Englisch','Mathematik','Sport'], answer:'Mathematik'},
      {question:'Wann ist die Schule fertig?', options:['Um 12 Uhr','Um 13 Uhr','Um 14 Uhr','Um 15 Uhr'], answer:'Um 13 Uhr'},
    ], xp:15 },

  { id:'r-a1-016', type:'reading', subtype:'comprehension', level:'A1', unit:3, title:'Eine Postkarte',
    text:'Liebe Maria, ich bin in München. Das Wetter ist toll. Ich besuche das Schloss Neuschwanstein. Das Essen hier ist lecker. Viele Grüße, Tom.',
    vocabulary:[{word:'die Postkarte',translation:'Karte mit Bild, die man per Post schickt'},{word:'besuchen',translation:'zu jemandem oder an einen Ort gehen'},{word:'das Schloss',translation:'großes historisches Gebäude für Könige'},{word:'lecker',translation:'sehr gut im Geschmack'}],
    questions:[
      {question:'Wo ist Tom?', options:['In Berlin','In Hamburg','In München','In Wien'], answer:'In München'},
      {question:'Was besucht Tom?', options:['Ein Museum','Das Schloss Neuschwanstein','Den Zoo','Den Park'], answer:'Das Schloss Neuschwanstein'},
      {question:'Wie ist das Essen?', options:['Schlecht','Okay','Teuer','Lecker'], answer:'Lecker'},
    ], xp:15 },

  // ============ A1 LISTENING (10 exercises: l-a1-007 to l-a1-016) ============

  // Unit 1 (3 exercises)
  { id:'l-a1-007', type:'listening', subtype:'audio_questions', level:'A1', unit:1, title:'Am Telefon',
    audioText:'Hallo, hier ist Maria. Ich rufe dich an. Kommst du heute Abend zur Party? Die Party beginnt um acht Uhr.',
    questions:[
      {question:'Wer ruft an?', options:['Anna','Maria','Lisa','Julia'], answer:'Maria'},
      {question:'Wann beginnt die Party?', options:['Um sieben Uhr','Um acht Uhr','Um neun Uhr','Um zehn Uhr'], answer:'Um acht Uhr'},
    ], xp:15 },

  { id:'l-a1-008', type:'listening', subtype:'audio_questions', level:'A1', unit:1, title:'Sich vorstellen',
    audioText:'Guten Tag! Mein Name ist Peter Schmidt. Ich komme aus Hamburg. Ich bin 30 Jahre alt und ich bin Lehrer.',
    questions:[
      {question:'Woher kommt Peter?', options:['Aus Berlin','Aus München','Aus Hamburg','Aus Köln'], answer:'Aus Hamburg'},
      {question:'Was ist Peter von Beruf?', options:['Arzt','Lehrer','Koch','Ingenieur'], answer:'Lehrer'},
    ], xp:15 },

  { id:'l-a1-009', type:'listening', subtype:'audio_questions', level:'A1', unit:1, title:'Die Adresse',
    audioText:'Ich wohne in der Berliner Straße 15. Meine Telefonnummer ist 030 12345. Ich wohne im zweiten Stock.',
    questions:[
      {question:'In welcher Straße wohnt die Person?', options:['Münchner Straße','Berliner Straße','Hamburger Straße','Kölner Straße'], answer:'Berliner Straße'},
      {question:'In welchem Stock wohnt die Person?', options:['Im ersten Stock','Im zweiten Stock','Im dritten Stock','Im Erdgeschoss'], answer:'Im zweiten Stock'},
    ], xp:15 },

  // Unit 2 (4 exercises)
  { id:'l-a1-010', type:'listening', subtype:'audio_questions', level:'A1', unit:2, title:'Beim Arzt',
    audioText:'Guten Tag, Herr Doktor. Ich bin krank. Ich habe Kopfschmerzen und Fieber. Seit gestern fühle ich mich nicht gut.',
    questions:[
      {question:'Was hat die Person?', options:['Halsschmerzen','Kopfschmerzen und Fieber','Bauchschmerzen','Einen Husten'], answer:'Kopfschmerzen und Fieber'},
      {question:'Seit wann ist die Person krank?', options:['Seit heute','Seit gestern','Seit einer Woche','Seit Montag'], answer:'Seit gestern'},
    ], xp:15 },

  { id:'l-a1-011', type:'listening', subtype:'audio_questions', level:'A1', unit:2, title:'Im Bus',
    audioText:'Entschuldigung, fährt dieser Bus zum Bahnhof? Ja, der Bus fährt direkt zum Bahnhof. Die Fahrt dauert zehn Minuten. Danke schön!',
    questions:[
      {question:'Wohin fährt der Bus?', options:['Zum Flughafen','Zum Bahnhof','Zur Schule','Zum Krankenhaus'], answer:'Zum Bahnhof'},
      {question:'Wie lange dauert die Fahrt?', options:['Fünf Minuten','Zehn Minuten','Fünfzehn Minuten','Zwanzig Minuten'], answer:'Zehn Minuten'},
    ], xp:15 },

  { id:'l-a1-012', type:'listening', subtype:'audio_questions', level:'A1', unit:2, title:'Das Frühstück',
    audioText:'Am Morgen frühstücke ich immer um halb sieben. Ich esse ein Brötchen mit Käse. Dazu trinke ich einen Orangensaft. Mein Frühstück ist immer schnell.',
    questions:[
      {question:'Wann frühstückt die Person?', options:['Um sechs Uhr','Um halb sieben','Um sieben Uhr','Um halb acht'], answer:'Um halb sieben'},
      {question:'Was trinkt die Person?', options:['Kaffee','Tee','Orangensaft','Milch'], answer:'Orangensaft'},
    ], xp:15 },

  { id:'l-a1-013', type:'listening', subtype:'audio_questions', level:'A1', unit:2, title:'Der Geburtstag',
    audioText:'Morgen ist mein Geburtstag. Ich werde 25 Jahre alt. Ich mache eine Party bei mir zu Hause. Ich lade zehn Freunde ein.',
    questions:[
      {question:'Wie alt wird die Person?', options:['20 Jahre','23 Jahre','25 Jahre','30 Jahre'], answer:'25 Jahre'},
      {question:'Wie viele Freunde lädt die Person ein?', options:['Fünf','Acht','Zehn','Zwölf'], answer:'Zehn'},
    ], xp:15 },

  // Unit 3 (3 exercises)
  { id:'l-a1-014', type:'listening', subtype:'audio_questions', level:'A1', unit:3, title:'Im Geschäft',
    audioText:'Guten Tag, ich suche ein T-Shirt. Welche Größe brauchen Sie? Größe M, bitte. Dieses blaue T-Shirt kostet 15 Euro.',
    questions:[
      {question:'Was sucht die Person?', options:['Eine Hose','Ein T-Shirt','Einen Pullover','Eine Jacke'], answer:'Ein T-Shirt'},
      {question:'Wie viel kostet das T-Shirt?', options:['10 Euro','12 Euro','15 Euro','20 Euro'], answer:'15 Euro'},
    ], xp:15 },

  { id:'l-a1-015', type:'listening', subtype:'audio_questions', level:'A1', unit:3, title:'Das Wochenende',
    audioText:'Am Samstag gehe ich schwimmen. Das Schwimmbad öffnet um neun Uhr. Am Sonntag besuche ich meine Großeltern. Sie wohnen auf dem Land.',
    questions:[
      {question:'Was macht die Person am Samstag?', options:['Sie geht einkaufen','Sie geht schwimmen','Sie geht spazieren','Sie geht ins Kino'], answer:'Sie geht schwimmen'},
      {question:'Wo wohnen die Großeltern?', options:['In der Stadt','Am Meer','Auf dem Land','In den Bergen'], answer:'Auf dem Land'},
    ], xp:15 },

  { id:'l-a1-016', type:'listening', subtype:'audio_questions', level:'A1', unit:3, title:'Der Weg zur Post',
    audioText:'Entschuldigung, wo ist die Post? Gehen Sie geradeaus und dann links. Die Post ist neben der Bäckerei. Sie ist nicht weit von hier.',
    questions:[
      {question:'Wohin muss die Person gehen?', options:['Geradeaus und dann rechts','Geradeaus und dann links','Nur geradeaus','Zwei Mal rechts'], answer:'Geradeaus und dann links'},
      {question:'Wo ist die Post?', options:['Neben der Schule','Neben dem Supermarkt','Neben der Bäckerei','Neben dem Park'], answer:'Neben der Bäckerei'},
    ], xp:15 },

  // ============ A1 WRITING (10 exercises: w-a1-004 to w-a1-013) ============

  // Unit 1 (3 exercises)
  { id:'w-a1-004', type:'writing', subtype:'prompt', level:'A1', unit:1, title:'Stell dich vor',
    prompt:'Stell dich vor! Schreib deinen Namen, dein Alter, woher du kommst und was du gern machst. (Mindestens 30 Wörter)',
    hints:['Schreib: Ich heiße...','Sag dein Alter: Ich bin ... Jahre alt.','Sag woher du kommst: Ich komme aus...','Schreib ein Hobby: Ich spiele gern...'], minWords:30, xp:20 },

  { id:'w-a1-005', type:'writing', subtype:'prompt', level:'A1', unit:1, title:'Meine Wohnung',
    prompt:'Beschreib deine Wohnung. Wie viele Zimmer hast du? Was ist in deinem Zimmer? (Mindestens 30 Wörter)',
    hints:['Schreib: Meine Wohnung hat ... Zimmer.','Beschreib die Zimmer: Es gibt ein Schlafzimmer, ...','Sag was in deinem Zimmer ist: In meinem Zimmer gibt es...','Wie findest du deine Wohnung? Meine Wohnung ist...'], minWords:30, xp:20 },

  { id:'w-a1-006', type:'writing', subtype:'prompt', level:'A1', unit:1, title:'Mein bester Freund',
    prompt:'Schreib über deinen besten Freund oder deine beste Freundin. Wie heißt er/sie? Wie alt ist er/sie? Was macht ihr zusammen? (Mindestens 35 Wörter)',
    hints:['Schreib den Namen: Mein bester Freund heißt...','Beschreib die Person: Er/Sie ist ... Jahre alt.','Was macht ihr zusammen? Wir spielen zusammen...','Wie ist die Person? Er/Sie ist sehr nett und...'], minWords:35, xp:20 },

  // Unit 2 (4 exercises)
  { id:'w-a1-007', type:'writing', subtype:'prompt', level:'A1', unit:2, title:'Mein Tag',
    prompt:'Beschreib deinen normalen Tag. Was machst du am Morgen, am Mittag und am Abend? (Mindestens 35 Wörter)',
    hints:['Am Morgen: Ich stehe um ... Uhr auf.','Am Mittag: Ich esse zu Mittag...','Am Nachmittag: Dann mache ich...','Am Abend: Am Abend sehe ich fern oder...'], minWords:35, xp:20 },

  { id:'w-a1-008', type:'writing', subtype:'prompt', level:'A1', unit:2, title:'Einkaufen gehen',
    prompt:'Du gehst einkaufen. Was kaufst du? Wo kaufst du ein? Wie viel kostet alles? (Mindestens 30 Wörter)',
    hints:['Sag wohin du gehst: Ich gehe in den Supermarkt.','Was kaufst du? Ich kaufe Brot, Milch und...','Wie viel kostet es? Das Brot kostet...','Zusammen: Das kostet zusammen ... Euro.'], minWords:30, xp:20 },

  { id:'w-a1-009', type:'writing', subtype:'prompt', level:'A1', unit:2, title:'Das Wetter beschreiben',
    prompt:'Wie ist das Wetter heute? Was ist dein Lieblingswetter? Was machst du bei schönem Wetter? (Mindestens 30 Wörter)',
    hints:['Beschreib das Wetter: Heute ist es sonnig und...','Dein Lieblingswetter: Ich mag ... am liebsten.','Was machst du? Bei schönem Wetter gehe ich...','Und bei schlechtem Wetter? Bei Regen bleibe ich...'], minWords:30, xp:20 },

  { id:'w-a1-010', type:'writing', subtype:'prompt', level:'A1', unit:2, title:'Mein Lieblingsessen',
    prompt:'Was ist dein Lieblingsessen? Kannst du kochen? Was isst du gern zum Frühstück, Mittagessen und Abendessen? (Mindestens 35 Wörter)',
    hints:['Schreib: Mein Lieblingsessen ist...','Zum Frühstück esse ich...','Zum Mittagessen esse ich gern...','Kannst du kochen? Ja, ich koche gern... / Nein, ich kann nicht gut kochen.'], minWords:35, xp:20 },

  // Unit 3 (3 exercises)
  { id:'w-a1-011', type:'writing', subtype:'prompt', level:'A1', unit:3, title:'Ein Brief an einen Freund',
    prompt:'Schreib einen kurzen Brief an einen Freund. Erzähl, was du am Wochenende gemacht hast. (Mindestens 35 Wörter)',
    hints:['Beginne mit: Lieber .../Liebe ...','Erzähl: Am Samstag habe ich...','Dann: Am Sonntag bin ich...','Ende mit: Viele Grüße, dein/deine...'], minWords:35, xp:20 },

  { id:'w-a1-012', type:'writing', subtype:'prompt', level:'A1', unit:3, title:'Mein Haustier',
    prompt:'Hast du ein Haustier? Beschreib es. Wenn nicht, welches Haustier möchtest du haben? (Mindestens 30 Wörter)',
    hints:['Schreib: Ich habe einen/eine/ein... oder: Ich möchte einen/eine/ein... haben.','Beschreib das Tier: Es ist ... und heißt...','Was macht das Tier? Es spielt gern...','Warum magst du das Tier? Ich mag es, weil...'], minWords:30, xp:20 },

  { id:'w-a1-013', type:'writing', subtype:'prompt', level:'A1', unit:3, title:'Meine Lieblingsstadt',
    prompt:'Welche Stadt magst du? Was gibt es dort? Was kann man dort machen? (Mindestens 40 Wörter)',
    hints:['Schreib: Meine Lieblingsstadt ist...','Was gibt es dort? Es gibt viele Parks und...','Was kann man machen? Man kann dort ... besuchen.','Warum magst du die Stadt? Ich mag die Stadt, weil...'], minWords:40, xp:20 },
];

export const A2_EXTRA_EXERCISES = [
  // ============ A2 READING (10 exercises: r-a2-007 to r-a2-016) ============

  // Unit 1 (3 exercises)
  { id:'r-a2-007', type:'reading', subtype:'comprehension', level:'A2', unit:1, title:'Ein neuer Job',
    text:'Sarah hat einen neuen Job gefunden. Sie arbeitet jetzt als Sekretärin in einer großen Firma. Jeden Morgen fährt sie mit dem Bus zur Arbeit. Die Arbeit beginnt um neun Uhr und endet um fünf Uhr. Ihre Kollegen sind sehr freundlich. In der Mittagspause isst sie in der Kantine.',
    vocabulary:[{word:'die Firma',translation:'Unternehmen, wo man arbeitet'},{word:'der Kollege',translation:'Person, mit der man zusammenarbeitet'},{word:'die Mittagspause',translation:'Pause am Mittag zum Essen'},{word:'die Kantine',translation:'Essensraum in einer Firma oder Schule'}],
    questions:[
      {question:'Was ist Sarahs neuer Beruf?', options:['Lehrerin','Sekretärin','Ärztin','Verkäuferin'], answer:'Sekretärin'},
      {question:'Wie kommt Sarah zur Arbeit?', options:['Mit dem Auto','Mit der U-Bahn','Mit dem Bus','Mit dem Fahrrad'], answer:'Mit dem Bus'},
      {question:'Wo isst Sarah in der Mittagspause?', options:['Im Restaurant','Zu Hause','In der Kantine','Im Park'], answer:'In der Kantine'},
    ], xp:15 },

  { id:'r-a2-008', type:'reading', subtype:'comprehension', level:'A2', unit:1, title:'Der Umzug',
    text:'Wir ziehen nächste Woche in eine neue Wohnung um. Die neue Wohnung hat drei Zimmer, eine Küche und ein großes Bad. Sie liegt im Stadtzentrum, ganz in der Nähe von einem Park. Die Miete ist etwas teurer als vorher, aber die Lage ist viel besser. Meine Freunde helfen mir beim Umzug.',
    vocabulary:[{word:'umziehen',translation:'in eine neue Wohnung ziehen'},{word:'die Miete',translation:'Geld, das man monatlich für die Wohnung zahlt'},{word:'die Lage',translation:'der Ort, wo etwas liegt'},{word:'der Umzug',translation:'der Wechsel in eine andere Wohnung'}],
    questions:[
      {question:'Wie viele Zimmer hat die neue Wohnung?', options:['Zwei','Drei','Vier','Fünf'], answer:'Drei'},
      {question:'Wo liegt die neue Wohnung?', options:['Am Stadtrand','Im Stadtzentrum','Auf dem Land','In einem Dorf'], answer:'Im Stadtzentrum'},
      {question:'Wie ist die Miete?', options:['Billiger als vorher','Gleich wie vorher','Etwas teurer als vorher','Viel billiger'], answer:'Etwas teurer als vorher'},
    ], xp:15 },

  { id:'r-a2-009', type:'reading', subtype:'comprehension', level:'A2', unit:1, title:'Deutschkurs',
    text:'Markus besucht einen Deutschkurs an der Volkshochschule. Der Kurs findet jeden Dienstag und Donnerstag statt. Im Kurs lernt er Grammatik, neue Wörter und übt das Sprechen. Seine Lehrerin kommt aus Österreich und ist sehr geduldig. Nach dem Kurs macht Markus immer seine Hausaufgaben im Café nebenan.',
    vocabulary:[{word:'die Volkshochschule',translation:'Bildungseinrichtung für Erwachsene'},{word:'stattfinden',translation:'passieren, geschehen (an einem Ort/Zeit)'},{word:'geduldig',translation:'ruhig warten können, nicht schnell ärgerlich'},{word:'die Hausaufgaben',translation:'Aufgaben, die man zu Hause macht'}],
    questions:[
      {question:'Wann findet der Kurs statt?', options:['Montag und Mittwoch','Dienstag und Donnerstag','Mittwoch und Freitag','Jeden Tag'], answer:'Dienstag und Donnerstag'},
      {question:'Woher kommt die Lehrerin?', options:['Aus Deutschland','Aus der Schweiz','Aus Österreich','Aus Luxemburg'], answer:'Aus Österreich'},
      {question:'Wo macht Markus seine Hausaufgaben?', options:['Zu Hause','In der Bibliothek','Im Café nebenan','Im Park'], answer:'Im Café nebenan'},
    ], xp:15 },

  // Unit 2 (4 exercises)
  { id:'r-a2-010', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Ein Ausflug ins Museum',
    text:'Am letzten Samstag sind wir ins Naturkundemuseum gegangen. Die Ausstellung über Dinosaurier war besonders interessant. Wir haben viele Skelette und Fossilien gesehen. Danach haben wir im Museumsshop ein Buch über Tiere gekauft. Der Eintritt hat acht Euro pro Person gekostet.',
    vocabulary:[{word:'das Naturkundemuseum',translation:'Museum über Tiere, Pflanzen und Natur'},{word:'die Ausstellung',translation:'Präsentation von Objekten zum Ansehen'},{word:'das Skelett',translation:'die Knochen eines Körpers'},{word:'der Eintritt',translation:'Preis, den man zum Hineingehen zahlt'}],
    questions:[
      {question:'Welches Museum haben sie besucht?', options:['Kunstmuseum','Technikmuseum','Naturkundemuseum','Historisches Museum'], answer:'Naturkundemuseum'},
      {question:'Was war besonders interessant?', options:['Die Ausstellung über Pflanzen','Die Ausstellung über Dinosaurier','Die Ausstellung über Fische','Die Ausstellung über Vögel'], answer:'Die Ausstellung über Dinosaurier'},
      {question:'Wie viel hat der Eintritt gekostet?', options:['Fünf Euro','Sechs Euro','Acht Euro','Zehn Euro'], answer:'Acht Euro'},
    ], xp:15 },

  { id:'r-a2-011', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Gesund leben',
    text:'Mein Arzt sagt, ich soll gesünder leben. Ich soll mehr Obst und Gemüse essen und weniger Süßigkeiten. Außerdem soll ich dreimal pro Woche Sport machen. Seit letztem Monat gehe ich jeden Morgen joggen. Ich fühle mich jetzt schon viel besser und habe mehr Energie.',
    vocabulary:[{word:'gesund',translation:'gut für den Körper, nicht krank'},{word:'die Süßigkeiten',translation:'Schokolade, Bonbons und andere süße Sachen'},{word:'joggen',translation:'langsam laufen als Sport'},{word:'die Energie',translation:'Kraft, um etwas zu tun'}],
    questions:[
      {question:'Was soll die Person öfter essen?', options:['Mehr Fleisch','Mehr Obst und Gemüse','Mehr Brot','Mehr Reis'], answer:'Mehr Obst und Gemüse'},
      {question:'Wie oft soll die Person Sport machen?', options:['Einmal pro Woche','Zweimal pro Woche','Dreimal pro Woche','Jeden Tag'], answer:'Dreimal pro Woche'},
      {question:'Wie fühlt sich die Person jetzt?', options:['Müde','Krank','Viel besser','Gleich wie vorher'], answer:'Viel besser'},
    ], xp:15 },

  { id:'r-a2-012', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Reise nach Wien',
    text:'Letzten Sommer bin ich nach Wien gereist. Ich bin mit dem Zug gefahren. Die Fahrt hat vier Stunden gedauert. In Wien habe ich das Schloss Schönbrunn besucht und Sachertorte gegessen. Das Hotel war im Zentrum und hatte einen schönen Blick auf die Stadt. Ich möchte bald wieder nach Wien fahren.',
    vocabulary:[{word:'reisen',translation:'an einen anderen Ort fahren'},{word:'der Zug',translation:'Verkehrsmittel auf Schienen'},{word:'die Sachertorte',translation:'berühmte Schokoladentorte aus Wien'},{word:'der Blick',translation:'das, was man sieht'}],
    questions:[
      {question:'Wie ist die Person nach Wien gereist?', options:['Mit dem Flugzeug','Mit dem Auto','Mit dem Zug','Mit dem Bus'], answer:'Mit dem Zug'},
      {question:'Was hat die Person in Wien besucht?', options:['Den Stephansdom','Das Schloss Schönbrunn','Das Riesenrad','Die Oper'], answer:'Das Schloss Schönbrunn'},
      {question:'Wo war das Hotel?', options:['Am Stadtrand','Im Zentrum','Am Flughafen','Außerhalb der Stadt'], answer:'Im Zentrum'},
    ], xp:15 },

  { id:'r-a2-013', type:'reading', subtype:'comprehension', level:'A2', unit:2, title:'Der Flohmarkt',
    text:'Jeden Sonntag gibt es in unserer Stadt einen Flohmarkt. Letzte Woche habe ich dort ein altes Fahrrad für 30 Euro gekauft. Meine Freundin hat schöne Ohrringe und ein Buch gefunden. Auf dem Flohmarkt kann man auch Kaffee trinken und Kuchen essen. Es ist immer ein schöner Ausflug.',
    vocabulary:[{word:'der Flohmarkt',translation:'Markt mit gebrauchten Sachen'},{word:'das Fahrrad',translation:'Verkehrsmittel mit zwei Rädern und Pedalen'},{word:'die Ohrringe',translation:'Schmuck für die Ohren'},{word:'der Ausflug',translation:'kurze Reise für den Tag'}],
    questions:[
      {question:'Wann findet der Flohmarkt statt?', options:['Jeden Samstag','Jeden Sonntag','Jeden Freitag','Jeden Mittwoch'], answer:'Jeden Sonntag'},
      {question:'Was hat die Person auf dem Flohmarkt gekauft?', options:['Ein Buch','Ohrringe','Ein altes Fahrrad','Einen Kuchen'], answer:'Ein altes Fahrrad'},
      {question:'Was hat die Freundin gefunden?', options:['Ein Fahrrad und ein Buch','Ohrringe und ein Buch','Einen Ring und Schuhe','Kleidung und Schuhe'], answer:'Ohrringe und ein Buch'},
    ], xp:15 },

  // Unit 3 (3 exercises)
  { id:'r-a2-014', type:'reading', subtype:'comprehension', level:'A2', unit:3, title:'Weihnachten in Deutschland',
    text:'Weihnachten ist ein wichtiges Fest in Deutschland. Am 24. Dezember feiert man Heiligabend. Viele Familien schmücken einen Weihnachtsbaum und singen Lieder. Zum Abendessen gibt es oft Kartoffelsalat mit Würstchen. Die Kinder bekommen Geschenke. Am 25. und 26. Dezember besucht man die Verwandten.',
    vocabulary:[{word:'Weihnachten',translation:'christliches Fest im Dezember'},{word:'Heiligabend',translation:'der Abend des 24. Dezember'},{word:'schmücken',translation:'etwas schön dekorieren'},{word:'die Geschenke',translation:'Dinge, die man anderen gibt'}],
    questions:[
      {question:'Wann feiert man Heiligabend?', options:['Am 23. Dezember','Am 24. Dezember','Am 25. Dezember','Am 31. Dezember'], answer:'Am 24. Dezember'},
      {question:'Was gibt es oft zum Abendessen an Heiligabend?', options:['Gans und Knödel','Kartoffelsalat mit Würstchen','Pizza und Pasta','Suppe und Brot'], answer:'Kartoffelsalat mit Würstchen'},
      {question:'Was machen viele Familien am 25. und 26. Dezember?', options:['Sie reisen ins Ausland','Sie gehen einkaufen','Sie besuchen die Verwandten','Sie bleiben zu Hause'], answer:'Sie besuchen die Verwandten'},
    ], xp:15 },

  { id:'r-a2-015', type:'reading', subtype:'comprehension', level:'A2', unit:3, title:'Sport im Verein',
    text:'In Deutschland sind Sportvereine sehr beliebt. Mein Bruder spielt seit fünf Jahren Handball im Verein. Das Training findet zweimal pro Woche statt, immer dienstags und freitags. Am Wochenende hat die Mannschaft oft Spiele gegen andere Vereine. Letztes Jahr haben sie den zweiten Platz in der Meisterschaft gewonnen.',
    vocabulary:[{word:'der Sportverein',translation:'Gruppe von Menschen, die zusammen Sport machen'},{word:'das Training',translation:'das Üben einer Sportart'},{word:'die Mannschaft',translation:'Gruppe von Spielern im Teamsport'},{word:'die Meisterschaft',translation:'großes Turnier um den besten Platz'}],
    questions:[
      {question:'Wie lange spielt der Bruder schon Handball?', options:['Seit drei Jahren','Seit vier Jahren','Seit fünf Jahren','Seit sechs Jahren'], answer:'Seit fünf Jahren'},
      {question:'Wann findet das Training statt?', options:['Montags und mittwochs','Dienstags und freitags','Mittwochs und samstags','Donnerstags und sonntags'], answer:'Dienstags und freitags'},
      {question:'Welchen Platz hat die Mannschaft gewonnen?', options:['Den ersten Platz','Den zweiten Platz','Den dritten Platz','Keinen Platz'], answer:'Den zweiten Platz'},
    ], xp:15 },

  { id:'r-a2-016', type:'reading', subtype:'comprehension', level:'A2', unit:3, title:'Ein Brief von der Vermieterin',
    text:'Liebe Mieter, ab nächstem Monat gibt es neue Regeln im Haus. Bitte bringen Sie den Müll immer in die richtige Tonne. Die blaue Tonne ist für Papier, die gelbe für Plastik und die braune für Bioabfall. Außerdem ist es ab 22 Uhr Ruhezeit. Bitte machen Sie keinen lauten Lärm nach dieser Zeit. Vielen Dank für Ihr Verständnis.',
    vocabulary:[{word:'die Vermieterin',translation:'Frau, der die Wohnung gehört'},{word:'der Müll',translation:'Dinge, die man wegwirft'},{word:'die Tonne',translation:'großer Behälter für Müll'},{word:'die Ruhezeit',translation:'Zeit, in der man leise sein muss'}],
    questions:[
      {question:'Wofür ist die blaue Tonne?', options:['Für Plastik','Für Glas','Für Papier','Für Bioabfall'], answer:'Für Papier'},
      {question:'Ab wann ist Ruhezeit?', options:['Ab 20 Uhr','Ab 21 Uhr','Ab 22 Uhr','Ab 23 Uhr'], answer:'Ab 22 Uhr'},
      {question:'Wofür ist die braune Tonne?', options:['Für Papier','Für Plastik','Für Glas','Für Bioabfall'], answer:'Für Bioabfall'},
    ], xp:15 },

  // ============ A2 LISTENING (10 exercises: l-a2-007 to l-a2-016) ============

  // Unit 1 (3 exercises)
  { id:'l-a2-007', type:'listening', subtype:'audio_questions', level:'A2', unit:1, title:'Beim Bäcker',
    audioText:'Guten Morgen! Ich hätte gern drei Brötchen und ein Vollkornbrot, bitte. Möchten Sie noch etwas? Ja, ein Stück Apfelkuchen bitte. Das macht zusammen 6,50 Euro. Hier bitte, stimmt so.',
    questions:[
      {question:'Was bestellt die Person außer Brötchen und Brot?', options:['Ein Stück Käsekuchen','Ein Stück Apfelkuchen','Ein Croissant','Einen Berliner'], answer:'Ein Stück Apfelkuchen'},
      {question:'Wie viel kostet alles zusammen?', options:['5,50 Euro','6,00 Euro','6,50 Euro','7,00 Euro'], answer:'6,50 Euro'},
    ], xp:15 },

  { id:'l-a2-008', type:'listening', subtype:'audio_questions', level:'A2', unit:1, title:'Die Wegbeschreibung',
    audioText:'Entschuldigung, wie komme ich zum Rathaus? Gehen Sie hier geradeaus bis zur Ampel. Dann biegen Sie rechts ab. Nach etwa 200 Metern sehen Sie das Rathaus auf der linken Seite. Es ist ein großes weißes Gebäude. Sie können es nicht verfehlen.',
    questions:[
      {question:'Wohin muss die Person an der Ampel gehen?', options:['Links','Rechts','Geradeaus','Zurück'], answer:'Rechts'},
      {question:'Auf welcher Seite ist das Rathaus?', options:['Auf der rechten Seite','Auf der linken Seite','Geradeaus','Hinter der Ampel'], answer:'Auf der linken Seite'},
    ], xp:15 },

  { id:'l-a2-009', type:'listening', subtype:'audio_questions', level:'A2', unit:1, title:'Arzttermin vereinbaren',
    audioText:'Praxis Doktor Müller, guten Tag. Guten Tag, ich brauche einen Termin. Ich habe starke Rückenschmerzen. Können Sie am Donnerstag um 14 Uhr kommen? Ja, das passt mir gut. Dann notiere ich Sie für Donnerstag, den 15. März um 14 Uhr. Vielen Dank!',
    questions:[
      {question:'Welches Problem hat die Person?', options:['Kopfschmerzen','Zahnschmerzen','Rückenschmerzen','Halsschmerzen'], answer:'Rückenschmerzen'},
      {question:'Wann ist der Termin?', options:['Mittwoch um 14 Uhr','Donnerstag um 14 Uhr','Freitag um 15 Uhr','Donnerstag um 15 Uhr'], answer:'Donnerstag um 14 Uhr'},
    ], xp:15 },

  // Unit 2 (4 exercises)
  { id:'l-a2-010', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Im Reisebüro',
    audioText:'Guten Tag, wir möchten im August nach Mallorca fliegen. Für wie viele Personen? Für zwei Erwachsene und ein Kind. Ich habe ein gutes Angebot: eine Woche All-inclusive für 1800 Euro. Das Angebot beinhaltet Flug und Hotel direkt am Strand.',
    questions:[
      {question:'Wie viele Personen reisen?', options:['Zwei Personen','Drei Personen','Vier Personen','Fünf Personen'], answer:'Drei Personen'},
      {question:'Was kostet das Angebot?', options:['1500 Euro','1600 Euro','1800 Euro','2000 Euro'], answer:'1800 Euro'},
    ], xp:15 },

  { id:'l-a2-011', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Die Nachricht auf dem Anrufbeantworter',
    audioText:'Hallo Mama, hier ist Lena. Ich wollte dir sagen, dass ich heute später komme. Der Zug hat Verspätung wegen des Sturms. Ich bin wahrscheinlich erst um 20 Uhr da, nicht um 18 Uhr wie geplant. Du brauchst mich nicht abzuholen, ich nehme ein Taxi.',
    questions:[
      {question:'Warum kommt Lena später?', options:['Weil sie arbeiten muss','Weil der Zug Verspätung hat','Weil sie den Zug verpasst hat','Weil sie krank ist'], answer:'Weil der Zug Verspätung hat'},
      {question:'Wie kommt Lena vom Bahnhof?', options:['Mit dem Bus','Ihre Mutter holt sie ab','Mit einem Taxi','Sie geht zu Fuß'], answer:'Mit einem Taxi'},
    ], xp:15 },

  { id:'l-a2-012', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Einkaufen im Kaufhaus',
    audioText:'Entschuldigung, ich suche eine Winterjacke. Welche Größe tragen Sie? Größe 40. Die Winterjacken finden Sie im zweiten Stock, Abteilung Damenmode. Diese Woche haben wir 20 Prozent Rabatt auf alle Jacken. Das klingt super, vielen Dank!',
    questions:[
      {question:'In welchem Stock sind die Winterjacken?', options:['Im ersten Stock','Im zweiten Stock','Im dritten Stock','Im Erdgeschoss'], answer:'Im zweiten Stock'},
      {question:'Wie viel Rabatt gibt es diese Woche?', options:['10 Prozent','15 Prozent','20 Prozent','25 Prozent'], answer:'20 Prozent'},
    ], xp:15 },

  { id:'l-a2-013', type:'listening', subtype:'audio_questions', level:'A2', unit:2, title:'Das Konzert',
    audioText:'Hast du gehört? Am Samstag gibt es ein Konzert im Stadtpark. Die Band heißt Sonnenschein und spielt Popmusik. Der Eintritt kostet nur fünf Euro. Das Konzert beginnt um 19 Uhr. Sollen wir zusammen hingehen? Ja, das klingt toll!',
    questions:[
      {question:'Was für Musik spielt die Band?', options:['Rockmusik','Klassische Musik','Popmusik','Jazzmusik'], answer:'Popmusik'},
      {question:'Wann beginnt das Konzert?', options:['Um 18 Uhr','Um 19 Uhr','Um 20 Uhr','Um 21 Uhr'], answer:'Um 19 Uhr'},
    ], xp:15 },

  // Unit 3 (3 exercises)
  { id:'l-a2-014', type:'listening', subtype:'audio_questions', level:'A2', unit:3, title:'Wohnungsbesichtigung',
    audioText:'Willkommen zur Wohnungsbesichtigung. Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Wie Sie sehen, ist die Küche frisch renoviert. Die Wohnung kostet 650 Euro warm pro Monat. Haustiere sind leider nicht erlaubt. Wann könnte ich einziehen? Ab dem ersten Mai.',
    questions:[
      {question:'Wie viel kostet die Wohnung warm?', options:['550 Euro','600 Euro','650 Euro','700 Euro'], answer:'650 Euro'},
      {question:'Sind Haustiere erlaubt?', options:['Ja, alle Haustiere','Nur Katzen','Nur kleine Tiere','Nein, keine Haustiere'], answer:'Nein, keine Haustiere'},
    ], xp:15 },

  { id:'l-a2-015', type:'listening', subtype:'audio_questions', level:'A2', unit:3, title:'Auf der Bank',
    audioText:'Guten Tag, ich möchte ein Konto eröffnen. Möchten Sie ein Girokonto oder ein Sparkonto? Ein Girokonto bitte. Dafür brauche ich Ihren Personalausweis und eine Meldebescheinigung. Das Girokonto kostet 3,90 Euro pro Monat. Sie bekommen eine EC-Karte in etwa einer Woche.',
    questions:[
      {question:'Was möchte die Person eröffnen?', options:['Ein Sparkonto','Ein Girokonto','Ein Festgeldkonto','Ein Firmenkonto'], answer:'Ein Girokonto'},
      {question:'Wann bekommt die Person die EC-Karte?', options:['Sofort','In drei Tagen','In etwa einer Woche','In zwei Wochen'], answer:'In etwa einer Woche'},
    ], xp:15 },

  { id:'l-a2-016', type:'listening', subtype:'audio_questions', level:'A2', unit:3, title:'Die Durchsage am Bahnhof',
    audioText:'Achtung, eine Durchsage. Der ICE 578 nach Frankfurt hat heute 25 Minuten Verspätung. Der Zug fährt voraussichtlich um 15:40 Uhr von Gleis 7 ab. Wir bitten um Ihr Verständnis. Reisende nach Köln können den Regionalexpress um 15:20 Uhr auf Gleis 3 nehmen.',
    questions:[
      {question:'Wie viel Verspätung hat der ICE 578?', options:['15 Minuten','20 Minuten','25 Minuten','30 Minuten'], answer:'25 Minuten'},
      {question:'Von welchem Gleis fährt der ICE ab?', options:['Gleis 3','Gleis 5','Gleis 7','Gleis 9'], answer:'Gleis 7'},
    ], xp:15 },

  // ============ A2 WRITING (10 exercises: w-a2-004 to w-a2-013) ============

  // Unit 1 (3 exercises)
  { id:'w-a2-004', type:'writing', subtype:'prompt', level:'A2', unit:1, title:'Eine E-Mail an den Vermieter',
    prompt:'Schreib eine E-Mail an deinen Vermieter. Deine Heizung ist kaputt und du brauchst Hilfe. Erkläre das Problem und frage, wann jemand kommen kann. (Mindestens 50 Wörter)',
    hints:['Beginne mit: Sehr geehrter Herr/Frau...','Erkläre das Problem: Seit ... funktioniert die Heizung nicht.','Frage nach Hilfe: Können Sie bitte einen Techniker schicken?','Ende mit: Mit freundlichen Grüßen...'], minWords:50, xp:25 },

  { id:'w-a2-005', type:'writing', subtype:'prompt', level:'A2', unit:1, title:'Mein letzter Urlaub',
    prompt:'Beschreib deinen letzten Urlaub. Wohin bist du gereist? Was hast du dort gemacht? Wie war das Wetter? Was hat dir am besten gefallen? (Mindestens 55 Wörter)',
    hints:['Sag wohin du gereist bist: Letzten Sommer bin ich nach ... gereist.','Beschreib was du gemacht hast: Dort habe ich ... besucht und ...','Beschreib das Wetter: Das Wetter war...','Was hat dir gefallen? Am besten hat mir ... gefallen, weil...'], minWords:55, xp:25 },

  { id:'w-a2-006', type:'writing', subtype:'prompt', level:'A2', unit:1, title:'Ein Rezept beschreiben',
    prompt:'Beschreib dein Lieblingsrezept. Welche Zutaten brauchst du? Was muss man zuerst, dann und zum Schluss machen? (Mindestens 55 Wörter)',
    hints:['Nenne das Gericht: Mein Lieblingsgericht ist...','Nenne die Zutaten: Man braucht...','Beschreib die Schritte: Zuerst muss man... Dann...','Wie schmeckt es? Das Gericht schmeckt...'], minWords:55, xp:25 },

  // Unit 2 (4 exercises)
  { id:'w-a2-007', type:'writing', subtype:'prompt', level:'A2', unit:2, title:'Beschwerde im Restaurant',
    prompt:'Du warst in einem Restaurant und das Essen war schlecht. Schreib eine Beschwerde. Was hast du bestellt? Was war das Problem? Was möchtest du als Lösung? (Mindestens 55 Wörter)',
    hints:['Beginne mit: Ich war am ... in Ihrem Restaurant.','Beschreib die Bestellung: Ich habe ... bestellt.','Erkläre das Problem: Leider war das Essen... Die Suppe war kalt und...','Schlage eine Lösung vor: Ich möchte gern mein Geld zurück / einen Gutschein...'], minWords:55, xp:25 },

  { id:'w-a2-008', type:'writing', subtype:'prompt', level:'A2', unit:2, title:'Einen Freund einladen',
    prompt:'Schreib eine Einladung an einen Freund. Du machst eine Grillparty am Wochenende. Beschreib wann und wo die Party ist, was du vorbereitest und was dein Freund mitbringen soll. (Mindestens 50 Wörter)',
    hints:['Beginne mit: Lieber/Liebe ..., ich lade dich herzlich ein.','Sag wann und wo: Die Party ist am ... um ... Uhr bei mir zu Hause.','Was gibt es? Ich bereite ... vor.','Was soll der Freund mitbringen? Kannst du bitte ... mitbringen?'], minWords:50, xp:25 },

  { id:'w-a2-009', type:'writing', subtype:'prompt', level:'A2', unit:2, title:'Mein Traumjob',
    prompt:'Beschreib deinen Traumjob. Was möchtest du werden? Warum interessiert dich dieser Beruf? Welche Fähigkeiten braucht man dafür? Was musst du noch lernen? (Mindestens 60 Wörter)',
    hints:['Nenne den Beruf: Mein Traumjob ist...','Warum? Ich möchte ... werden, weil...','Welche Fähigkeiten? Man braucht...','Was musst du lernen? Ich muss noch ... lernen.'], minWords:60, xp:25 },

  { id:'w-a2-010', type:'writing', subtype:'prompt', level:'A2', unit:2, title:'Ein Wochenende in der Stadt',
    prompt:'Ein Freund aus dem Ausland besucht dich am Wochenende. Beschreib, was ihr zusammen machen könnt. Welche Sehenswürdigkeiten gibt es? Wo könnt ihr essen? Was empfiehlst du? (Mindestens 60 Wörter)',
    hints:['Beginne mit: Wenn du mich besuchst, können wir...','Nenne Sehenswürdigkeiten: In meiner Stadt gibt es...','Wo könnt ihr essen? Zum Mittagessen können wir...','Was empfiehlst du? Ich empfehle dir besonders...'], minWords:60, xp:25 },

  // Unit 3 (3 exercises)
  { id:'w-a2-011', type:'writing', subtype:'prompt', level:'A2', unit:3, title:'Erfahrung mit dem Deutschlernen',
    prompt:'Schreib über deine Erfahrung mit dem Deutschlernen. Seit wann lernst du Deutsch? Was findest du leicht und was schwer? Welche Tipps hast du für andere Lernende? (Mindestens 60 Wörter)',
    hints:['Seit wann? Ich lerne seit ... Deutsch.','Was ist leicht? Ich finde ... leicht, weil...','Was ist schwer? Aber ... ist schwer für mich, weil...','Tipps: Mein Tipp ist: Man sollte viel ... und ...'], minWords:60, xp:25 },

  { id:'w-a2-012', type:'writing', subtype:'prompt', level:'A2', unit:3, title:'Ein Problem lösen',
    prompt:'Dein Nachbar macht jeden Abend laute Musik. Du kannst nicht schlafen. Schreib einen höflichen Brief an deinen Nachbarn. Erkläre das Problem und schlage eine Lösung vor. (Mindestens 55 Wörter)',
    hints:['Beginne höflich: Lieber Nachbar / Liebe Nachbarin...','Erkläre das Problem: Seit einigen Wochen höre ich jeden Abend...','Beschreib die Folgen: Ich kann leider nicht gut schlafen und...','Schlage eine Lösung vor: Könnten Sie bitte nach 22 Uhr...'], minWords:55, xp:25 },

  { id:'w-a2-013', type:'writing', subtype:'prompt', level:'A2', unit:3, title:'Meine Kindheitserinnerung',
    prompt:'Erzähl von einer schönen Erinnerung aus deiner Kindheit. Was ist passiert? Wo warst du? Wer war dabei? Warum ist diese Erinnerung besonders für dich? (Mindestens 65 Wörter)',
    hints:['Beginne mit: Als ich ein Kind war...','Erzähl was passiert ist: Eines Tages sind wir...','Wer war dabei? Meine Familie / Meine Freunde waren auch da.','Warum ist es besonders? Diese Erinnerung ist besonders, weil...'], minWords:65, xp:25 },
];
