// Übungsheft C1 — Lektion 29: Bildung & Ausbildung
export default {
  lektion: 29,
  titel: 'Übungsheft — Bildung & Ausbildung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen des Themenfelds Bildung, wähle jeweils die grammatisch und stilistisch passende Form und erkenne typische Fehlübertragungen aus dem Spanischen.',
      items: [
        {
          typ: 'zuordnen',
          links: ['an einer beruflichen Weiterbildung', 'einen höheren Bildungsabschluss', 'Studiengebühren', 'eine dreijährige Ausbildung', 'das lebenslange Lernen zur Selbstverständlichkeit'],
          rechts: ['teilnehmen', 'erwerben', 'erheben', 'absolvieren', 'machen'],
          loesung: {
            'an einer beruflichen Weiterbildung': 'teilnehmen',
            'einen höheren Bildungsabschluss': 'erwerben',
            'Studiengebühren': 'erheben',
            'eine dreijährige Ausbildung': 'absolvieren',
            'das lebenslange Lernen zur Selbstverständlichkeit': 'machen',
          },
        },
        {
          typ: 'luecke',
          text: 'Der Bildungserfolg hängt hierzulande nach wie vor eng {1} der sozialen Herkunft ab; Kinder aus bildungsfernen Familien werden {2} die frühe Aufteilung auf verschiedene Schulformen strukturell benachteiligt.',
          bank: ['von', 'durch', 'an', 'infolge'],
          loesungen: { 1: 'von', 2: 'durch' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} des Bildungssystems zu erhöhen, damit sich ein verpasster Abschluss später problemlos nachholen lässt, ist erklärtes Ziel der Landesregierung; zugleich soll die frühkindliche {2} deutlich ausgebaut werden.',
          bank: ['Durchlässigkeit', 'Förderung', 'Akademisierung', 'Benachteiligung'],
          loesungen: { 1: 'Durchlässigkeit', 2: 'Förderung' },
        },
        {
          typ: 'luecke',
          text: 'Die zunehmende {1} der Berufswelt verschärft den Fachkräftemangel im Handwerk, {2} sich immer weniger Schulabgänger für eine duale Ausbildung entscheiden.',
          bank: ['Akademisierung', 'da', 'Chancengleichheit', 'obwohl'],
          loesungen: { 1: 'Akademisierung', 2: 'da' },
        },
        {
          typ: 'mc',
          frage: 'Die ___ Förderprogramme sollen vor allem Kindern aus einkommensschwachen Familien zugutekommen.',
          optionen: ['vom Land finanzierenden', 'vom Land finanziert', 'vom Land finanzierten'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '___ von ihrer sozialen Herkunft sollen alle Kinder dieselben Bildungschancen erhalten.',
          optionen: ['Abgesehen', 'Unabhängig', 'Ungeachtet'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Nach der Realschule hat Aylin eine dreijährige Ausbildung zur Bankkauffrau absolviert.', 'Nach der Realschule hat Aylin eine dreijährige Bildung zur Bankkauffrau absolviert.'],
          loesung: 0,
          warum: 'La formación profesional es **die Ausbildung**; *die Bildung* designa la educación en sentido amplio y no lleva *zur* + profesión.',
        },
        {
          typ: 'korrektur',
          optionen: ['Im Herbst assistiert Jonas einer Weiterbildung zum Thema Projektmanagement.', 'Im Herbst nimmt Jonas an einer Weiterbildung zum Thema Projektmanagement teil.'],
          loesung: 1,
          warum: '«Asistir a un curso» es **an etwas teilnehmen** (o *einen Kurs besuchen*); *assistieren* significa «ayudar a alguien».',
        },
        {
          typ: 'korrektur',
          optionen: ['Nach dem Abitur hat Pablo in Heidelberg Jura studiert.', 'Nach dem Abitur hat Pablo in Heidelberg eine Karriere in Jura gemacht.'],
          loesung: 0,
          warum: '«Hacer la carrera de Derecho» es **Jura studieren** (o *ein Jurastudium absolvieren*); *Karriere machen* significa ascender profesionalmente.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Vom Gesellenbrief in den Hörsaal',
      text: 'Als Merve Aydın vor acht Jahren ihre Ausbildung zur Elektronikerin begann, hielten viele in ihrem Umfeld das für eine Notlösung. Mit einem Realschulabschluss, so die verbreitete Meinung, bleibe ihr der Weg an die Universität ohnehin verwehrt. Tatsächlich hatte sich die heute 27-Jährige bewusst gegen die gymnasiale Oberstufe entschieden: Sie wollte praktisch arbeiten und eigenes Geld verdienen. Nach der Gesellenprüfung absolvierte sie berufsbegleitend die Meisterschule, deren Kosten ihr Arbeitgeber zur Hälfte übernahm. Seit dem vergangenen Herbst studiert sie in Kassel Energietechnik — ohne je das Abitur abgelegt zu haben, denn der Meistertitel berechtigt in allen Bundesländern zum Studium.\nFälle wie ihrer zeigen, dass die Durchlässigkeit des Systems größer ist als ihr Ruf. Die Bildungsforscherin Johanna Brenner warnt dennoch vor Schönfärberei: Wer aus einer bildungsfernen Familie stamme, erfahre von solchen Wegen oft erst spät oder gar nicht. Die Berufsberatung an den Schulen setze zudem einseitig auf Abitur und Studium. Die Folge sei eine Akademisierung, die weniger den Neigungen der Jugendlichen entspreche als dem Ansehen, das ein Hochschulabschluss in der Gesellschaft genieße. Aydın selbst blickt nüchtern auf ihren Weg zurück: „Ich habe nichts verpasst. Ich bin nur einen Umweg gegangen, und der hat sich gelohnt.“',
      items: [
        { typ: 'rf', aussage: 'Merve Aydın begann ihre Ausbildung, weil ihr Schulabschluss für ein Studium nicht ausreichte und ihr keine andere Wahl blieb.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum kann Aydın ohne Abitur studieren?',
          optionen: ['Ihre Hochschule verzichtet im Studiengang Energietechnik auf formale Zugangsvoraussetzungen.', 'Ihr Arbeitgeber hat mit der Hochschule eine Sonderregelung für Beschäftigte vereinbart.', 'Der Meistertitel verschafft ihr die Berechtigung zum Studium.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Welchen Einwand erhebt Johanna Brenner?',
          optionen: ['Die schulische Berufsberatung lenke Jugendliche zu einseitig in Richtung Abitur und Studium.', 'Die Meisterschule sei für Jugendliche aus bildungsfernen Familien schlicht zu teuer.', 'Die Hochschulen nähmen beruflich Qualifizierte nur widerwillig auf.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Aydın bewertet ihren Bildungsweg im Rückblick positiv.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Verwende mindestens vier Begriffe aus dem Kernwortschatz der Lektion, etwa duales System, Akademisierung, soziale Herkunft oder eine Ausbildung absolvieren.',
      aufgabe: 'In einem Onlinemagazin für Eltern wird gefordert, an allen Gymnasien ein verpflichtendes vierwöchiges Praktikum in einem Ausbildungsbetrieb einzuführen. Nimm zu diesem Vorschlag Stellung.',
      punkte: [
        'Gib die Forderung knapp wieder und nenne ein Argument, das für sie spricht.',
        'Setze dich mit einem naheliegenden Einwand auseinander.',
        'Beziehe begründet Position und gehe dabei auf die Folgen für die Berufswahl ein.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Die Forderung, an allen Gymnasien ein verpflichtendes Praktikum in einem Ausbildungsbetrieb einzuführen, halte ich für überlegenswert. Viele Jugendliche entscheiden sich heute fast selbstverständlich für ein Studium, ohne die Alternativen überhaupt zu kennen. Ein Praktikum könnte ihnen zeigen, dass eine Ausbildung im dualen System kein Bildungsweg zweiter Klasse ist.\nDem lässt sich entgegenhalten, dass vier Wochen Unterricht verloren gingen und manche Betriebe mit zusätzlichen Praktikanten überfordert wären. Dieser Einwand wiegt jedoch weniger schwer als der Nutzen: Gerade Jugendliche, in deren Familie noch niemand eine Ausbildung absolviert hat, erhielten so Einblicke, die ihnen sonst verwehrt blieben.\nIch plädiere daher für das Praktikum — als Gegengewicht zur einseitigen Akademisierung und als Beitrag zu einer bewussteren Berufswahl.',
    },
  ],
}
