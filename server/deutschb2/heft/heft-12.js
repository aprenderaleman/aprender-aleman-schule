// Übungsheft B2 — Lektion 12: Relativsätze komplex
export default {
  lektion: 12,
  titel: 'Übungsheft — Relativsätze komplex',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze das passende Relativpronomen. Genus und Numerus kommen vom Bezugswort, der Kasus kommt aus dem Relativsatz.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Kollege, {1} ich gestern im Aufzug getroffen habe, arbeitet in der Buchhaltung. Die Kollegin, {2} er jeden Morgen beim Drucker hilft, ist neu im Team.',
          bank: ['den', 'der', 'dem', 'die'],
          loesungen: { 1: 'den', 2: 'der' },
        },
        {
          typ: 'luecke',
          text: 'Das Projekt, {1} wir seit Monaten arbeiten, wird im Mai vorgestellt. Die Nachbarn, {2} wir uns so gut verstehen, ziehen leider weg.',
          bank: ['an dem', 'mit denen', 'mit deren', 'an das'],
          loesungen: { 1: 'an dem', 2: 'mit denen' },
        },
        {
          typ: 'luecke',
          text: 'Der Autor, {1} Roman gerade verfilmt wird, lebt heute auf dem Land. Die Sängerin, {2} Konzert gestern abgesagt wurde, hat sich bei ihren Fans entschuldigt.',
          bank: ['dessen', 'deren', 'denen', 'der'],
          loesungen: { 1: 'dessen', 2: 'deren' },
        },
        { typ: 'mc', frage: 'Die Schüler, ___ ich zweimal pro Woche Nachhilfe gebe, sind sehr motiviert.', optionen: ['deren', 'die', 'denen'], loesung: 2 },
        { typ: 'mc', frage: 'Er hat die Prüfung schon wieder verschoben, ___ ich überhaupt nicht verstehe.', optionen: ['was', 'das', 'die'], loesung: 0 },
        { typ: 'mc', frage: 'Nächste Woche fahren wir nach Leipzig, ___ meine Großeltern früher gelebt haben.', optionen: ['in denen', 'wo', 'wohin'], loesung: 1 },
        {
          typ: 'korrektur',
          optionen: ['Die Ärztin, dessen Sohn in meiner Klasse ist, arbeitet im Krankenhaus.', 'Die Ärztin, deren Sohn in meiner Klasse ist, arbeitet im Krankenhaus.'],
          loesung: 1,
          warum: 'A diferencia de «cuyo», **dessen/deren** concuerda con el antecedente (*die Ärztin* → deren), no con lo poseído (*Sohn*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Alles, was du über das Projekt gesagt hast, stimmt.', 'Alles, das du über das Projekt gesagt hast, stimmt.'],
          loesung: 0,
          warum: '«Todo lo que» es **alles, was**: después de *alles, etwas, nichts* va siempre *was*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das ist die Stadt, in der ich studiert habe.', 'Das ist die Stadt, in der ich habe studiert.'],
          loesung: 0,
          warum: 'El relativo es una oración subordinada: el verbo conjugado va **al final** (*studiert habe*), aunque en español digas «donde he estudiado».',
        },
        {
          typ: 'satzbau',
          woerter: ['arbeitet', 'Firma', 'Bruder', 'die', 'für', 'ist', 'Das', 'mein', 'die'],
          loesung: 'Das ist die Firma, für die mein Bruder arbeitet.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Artikelauszug: Vier Generationen unter einem Dach',
      text: 'In der Kastanienallee in Freiburg steht ein Haus, in dem vier Generationen zusammenleben. Das Projekt, dessen Idee von einer Gruppe befreundeter Familien stammt, wurde vor fünf Jahren gegründet. Heute wohnen dort 32 Menschen, deren Alter zwischen acht Monaten und 91 Jahren liegt. Jede Partei hat eine eigene Wohnung, doch es gibt auch Räume, die alle gemeinsam nutzen: eine große Küche, eine Werkstatt und einen Garten, in dem Gemüse angebaut wird. „Das Wichtigste, was wir hier gelernt haben, ist Rücksicht“, sagt Helga Brenner, die mit 78 Jahren zu den ältesten Bewohnerinnen gehört. Sie liest den Kindern, deren Eltern abends arbeiten, regelmäßig vor. Dafür hilft ihr ein junger Nachbar, mit dem sie sich angefreundet hat, beim Einkaufen. Ganz ohne Konflikte geht es trotzdem nicht: Entscheidungen, über die alle abstimmen müssen, dauern oft Wochen. Wer hier einziehen möchte, braucht deshalb vor allem eines: Geduld.',
      items: [
        { typ: 'rf', aussage: 'Die Idee für das Wohnprojekt kam von der Stadtverwaltung.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wofür wird der Garten genutzt?',
          optionen: ['für gemeinsame Feste', 'für den Anbau von Gemüse', 'als Spielplatz für die Kinder'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie unterstützt Helga Brenner andere Bewohner?',
          optionen: ['Sie kauft für die ganze Hausgemeinschaft ein.', 'Sie kocht abends in der Gemeinschaftsküche.', 'Sie liest Kindern vor, deren Eltern abends arbeiten.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Gemeinsame Entscheidungen brauchen in diesem Haus oft viel Zeit.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Radiointerview. Entscheide, welche Aussage dem Gehörten entspricht.',
      audio: {
        transcript: 'Moderator: Heute bei uns im Studio: Sandra Vogt, die in Kassel ein Reparaturcafé gegründet hat. Frau Vogt, was genau ist das?\nFrau: Das ist ein Ort, an dem man kaputte Dinge gemeinsam mit Fachleuten repariert. Zu uns kommen Menschen, deren Toaster oder Fahrrad nicht mehr funktioniert und die nichts wegwerfen wollen.\nModerator: Und wer repariert?\nFrau: Ehrenamtliche, von denen viele früher als Elektriker oder Schneiderin gearbeitet haben. Im Moment sind es vierzehn. Wichtig ist: Die Besucher schauen nicht nur zu, sondern helfen selbst mit.\nModerator: Muss man dafür bezahlen?\nFrau: Nein, die Reparatur ist kostenlos. Nur Ersatzteile, die wir bestellen müssen, bezahlt man selbst. Die meisten spenden trotzdem etwas, was uns natürlich sehr freut.\nModerator: Was wird denn am häufigsten gebracht?\nFrau: Viele denken an Handys, aber es sind eindeutig Kaffeemaschinen. Etwa zwei Drittel der Geräte können wir retten.\nModerator: Und wann haben Sie geöffnet?\nFrau: Jeden ersten Samstag im Monat, von zehn bis vierzehn Uhr, im Stadtteilzentrum, wo wir auch unser Werkzeug lagern.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wer repariert die Gegenstände im Reparaturcafé?',
          optionen: ['bezahlte Fachleute', 'Ehrenamtliche zusammen mit den Besuchern', 'die Besucher ganz allein'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Ersatzteile, die bestellt werden müssen, bezahlen die Besucher selbst.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was wird am häufigsten ins Reparaturcafé gebracht?',
          optionen: ['Kaffeemaschinen', 'Handys', 'Toaster'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Das Reparaturcafé hat jeden Samstag geöffnet.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Stellungnahme mit mindestens 60 Wörtern.',
      aufgabe: 'Deine Stadt überlegt, Wohnprojekte zu fördern, in denen junge und alte Menschen zusammenleben. Die Lokalzeitung bittet ihre Leserinnen und Leser um ihre Meinung. Schreib eine Stellungnahme.',
      punkte: [
        'Nenne Vorteile für die Menschen, die in solchen Projekten wohnen.',
        'Beschreibe mögliche Probleme, mit denen man rechnen muss.',
        'Formuliere deine eigene Meinung und begründe sie mit einem Beispiel.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich halte Wohnprojekte, in denen Jung und Alt zusammenleben, für eine sehr gute Idee. Ältere Menschen, deren Familien oft weit weg wohnen, fühlen sich weniger einsam, und junge Eltern bekommen Unterstützung im Alltag. Natürlich gibt es auch Probleme, mit denen man rechnen muss: Wer Ruhe braucht, kann sich durch Kinderlärm gestört fühlen, und gemeinsame Entscheidungen dauern länger. Trotzdem überwiegen für mich die Vorteile. Meine Tante lebt seit drei Jahren in einem solchen Haus, und alles, was sie davon erzählt, klingt positiv: Sie hilft bei den Hausaufgaben und bekommt dafür Hilfe beim Einkaufen. Deshalb sollte die Stadt solche Projekte unbedingt fördern. Julia Moreno',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag. Du hast 100 Sekunden Zeit.',
      aufgabe: 'Stell in einem kurzen Vortrag von etwa 100 Sekunden eine Person vor, die in deinem Leben eine wichtige Rolle spielt oder gespielt hat. Verwende dabei Relativsätze, auch mit Präposition, mit dessen / deren oder mit was und wo.',
      punkte: [
        'wer diese Person ist und woher du sie kennst',
        'was du von ihr gelernt hast',
        'eine Situation, an die du dich besonders gern erinnerst',
      ],
      redemittel: ['Ich möchte von … erzählen, mit dem / mit der …', 'Sie ist ein Mensch, auf den man sich verlassen kann.', 'Das Wichtigste, was ich von ihr gelernt habe, ist …', 'Eine Situation, an die ich oft denke, ist …'],
      maxSekunden: 100,
      beispielLoesung: 'Ich möchte von meiner Großmutter erzählen, bei der ich als Kind fast jeden Sommer verbracht habe. Sie wohnte in einem kleinen Dorf in den Bergen, wo es damals nicht einmal einen Supermarkt gab. Meine Großmutter war eine Frau, deren Tür immer offen stand: Jeder Nachbar, der ein Problem hatte, kam zuerst zu ihr. Sie hatte nicht viel Geld, aber sie war der zufriedenste Mensch, den ich kenne. Das Wichtigste, was ich von ihr gelernt habe, ist Geduld. Sie hat mir beigebracht, dass man Dinge, die kaputt sind, zuerst repariert und nicht sofort wegwirft. Das gilt übrigens auch für Freundschaften. Eine Situation, an die ich mich besonders gern erinnere, ist mein zehnter Geburtstag. Ich hatte mir ein Fahrrad gewünscht, für das meine Eltern kein Geld hatten. Meine Großmutter hat dann das alte Rad meines Onkels aus dem Keller geholt und es mit mir zusammen neu gestrichen. Dieses Fahrrad, auf das ich unglaublich stolz war, bin ich noch jahrelang gefahren. Alles, was ich heute über Hilfsbereitschaft weiß, habe ich von ihr.',
    },
  ],
}
