// Übungsheft C1 — Lektion 32: Arbeitswelt & Work-Life-Balance
export default {
  lektion: 32,
  titel: 'Übungsheft — Arbeitswelt & Work-Life-Balance',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen des Themenfelds Arbeitswelt bzw. wähle die Form, die Kollokation, Rektion und Kontext verlangen. Achte besonders auf Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Um dem Fachkräftemangel {1}, bieten viele Betriebe inzwischen flexible Arbeitszeitmodelle an; wer dauerhaft einer hohen Belastung {2} ist, erhält zudem kostenlose Beratung.',
          bank: ['entgegenzuwirken', 'ausgesetzt', 'entgegenzusetzen', 'ausgestellt'],
          loesungen: { 1: 'entgegenzuwirken', 2: 'ausgesetzt' },
        },
        {
          typ: 'luecke',
          text: 'Im Homeoffice {1} sich die Grenze zwischen Arbeit und Privatleben leicht; umso wichtiger ist es, die ständige {2} klar zu begrenzen.',
          bank: ['verwischt', 'verwirklicht', 'Erreichbarkeit', 'Erreichung'],
          loesungen: { 1: 'verwischt', 2: 'Erreichbarkeit' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} der Arbeitszeiten hat die {2} von Familie und Beruf in vielen Betrieben spürbar verbessert.',
          bank: ['Flexibilisierung', 'Vereinbarkeit', 'Verfügbarkeit', 'Befristung'],
          loesungen: { 1: 'Flexibilisierung', 2: 'Vereinbarkeit' },
        },
        {
          typ: 'mc',
          frage: 'Nach der Geburt ihrer Tochter hat Leonie ein Jahr Elternzeit ___.',
          optionen: ['genommen', 'erteilt', 'getroffen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Die Betriebsärztin stellte fest, dass Herr Kaya an einem Burnout ___ war.',
          optionen: ['befallen', 'gelitten', 'erkrankt'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Seit dem Umzug arbeitet Samira überwiegend vom Homeoffice.', 'Seit dem Umzug arbeitet Samira überwiegend im Homeoffice.'],
          loesung: 1,
          warum: 'Se dice **im Homeoffice arbeiten**; *vom Homeoffice* calca «trabajar desde casa».',
        },
        {
          typ: 'korrektur',
          optionen: ['Nach dem Abitur hat Julián in Leipzig Informatik studiert.', 'Nach dem Abitur hat Julián in Leipzig Karriere in Informatik gemacht.'],
          loesung: 0,
          warum: '«Hacer la carrera» es **studieren**; *Karriere machen* significa ascender profesionalmente.',
        },
        {
          typ: 'korrektur',
          optionen: ['Viele Eltern können Familie und Beruf nur mit großer Mühe miteinander versöhnen.', 'Viele Eltern können Familie und Beruf nur mit großer Mühe miteinander vereinbaren.'],
          loesung: 1,
          warum: '«Conciliar» trabajo y familia es **vereinbaren** (→ *die Vereinbarkeit*); *versöhnen* se dice ante todo de personas enemistadas y no es la colocación establecida con *Familie und Beruf*.',
        },
        {
          typ: 'zuordnen',
          links: ['dem Fachkräftemangel', 'die Vier-Tage-Woche', 'die Kündigung', 'in Teilzeit', 'die Produktivität konstant'],
          rechts: ['entgegenwirken', 'erproben', 'einreichen', 'wechseln', 'halten'],
          loesung: {
            'dem Fachkräftemangel': 'entgegenwirken',
            'die Vier-Tage-Woche': 'erproben',
            'die Kündigung': 'einreichen',
            'in Teilzeit': 'wechseln',
            'die Produktivität konstant': 'halten',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['bestreitet', 'Erreichbarkeit', 'dass', 'Kaum', 'belastet', 'ständige', 'jemand'],
          loesung: 'Kaum jemand bestreitet, dass ständige Erreichbarkeit belastet.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Ein Jahr Vier-Tage-Woche — die Bilanz eines Maschinenbauers',
      text: 'Weniger arbeiten, gleich viel leisten? Ein Jahr lang hat ein mittelständischer Maschinenbauer aus Bielefeld die Vier-Tage-Woche erprobt — nach der Formel 100-80-100. Die Bilanz, die Geschäftsführerin Katrin Wiegand jetzt vorgelegt hat, fällt überwiegend positiv aus: In Verwaltung und Konstruktion blieb die Produktivität konstant, der Krankenstand sank um knapp ein Drittel, und auf ausgeschriebene Stellen bewarben sich deutlich mehr Fachkräfte als zuvor. „Im Wettbewerb um qualifizierte Leute sind gute Arbeitsbedingungen unser stärkstes Argument“, so Wiegand.\nGanz reibungslos verlief der Versuch allerdings nicht. In der Fertigung, wo die Maschinen im Schichtbetrieb laufen, ließ sich die Arbeit nicht einfach auf vier Tage verdichten; dort musste der Betrieb zusätzliche Kräfte einstellen, was die Kosten spürbar erhöhte. Zudem gaben einige Beschäftigte an, die Belastung an den verbleibenden vier Tagen als höher zu empfinden. Der Betriebsrat fordert deshalb, die Arbeitsdichte regelmäßig zu überprüfen.\nTrotz dieser Einwände will das Unternehmen am Modell festhalten — allerdings nicht einheitlich: Künftig sollen die Abteilungen selbst entscheiden, ob sie die verkürzte Woche übernehmen oder bei fünf Tagen mit flexibleren Arbeitszeiten bleiben. Wiegand spricht von einem „Baukasten statt Einheitslösung“.',
      items: [
        { typ: 'rf', aussage: 'In der Fertigung ließ sich die Vier-Tage-Woche ohne zusätzliches Personal umsetzen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Bedeutung misst die Geschäftsführerin guten Arbeitsbedingungen bei?',
          optionen: ['Sie senkten langfristig vor allem die Kosten in der Fertigung.', 'Sie seien der wichtigste Trumpf im Wettbewerb um Fachkräfte.', 'Sie seien eine Bedingung, die der Betriebsrat durchgesetzt habe.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie will das Unternehmen künftig verfahren?',
          optionen: ['Es kehrt in allen Abteilungen zur Fünf-Tage-Woche zurück.', 'Es führt die Vier-Tage-Woche verbindlich für alle Beschäftigten ein.', 'Es überlässt den Abteilungen die Wahl zwischen verschiedenen Arbeitszeitmodellen.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Ein Teil der Beschäftigten empfand die Arbeit an den vier verbleibenden Tagen als belastender.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Verwende mindestens vier Begriffe aus dem Kernwortschatz, etwa Erreichbarkeit, Belastung, Vereinbarkeit oder Arbeitsbedingungen, und mindestens ein Redemittel, mit dem du differenzierst.',
      aufgabe: 'In einem Onlineforum wird darüber diskutiert, ob Beschäftigte ein gesetzlich verankertes Recht haben sollten, nach Feierabend nicht erreichbar zu sein. Nimm Stellung.',
      punkte: [
        'Beschreibe, wie sich die Erwartung ständiger Erreichbarkeit auf Beschäftigte auswirkt.',
        'Wäge je ein Argument für und gegen eine gesetzliche Regelung ab.',
        'Formuliere eine begründete eigene Position.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Seit sich das Homeoffice in vielen Büroberufen etabliert hat, verwischt die Grenze zwischen Arbeit und Privatleben zusehends. Wer auch abends noch Mails beantworten soll, ist einer dauerhaften Belastung ausgesetzt, die das Risiko eines Burnouts erhöht.\nFür ein Recht auf Nichterreichbarkeit spricht vor allem, dass es Beschäftigte schützt, die sich allein kaum gegen die Erwartungen ihrer Vorgesetzten wehren können. Man sollte allerdings nicht übersehen, dass starre Regeln gerade jenen schaden könnten, die ihre Arbeitszeit bewusst flexibel gestalten, um Familie und Beruf zu vereinbaren.\nIch halte ein solches Recht dennoch für sinnvoll — vorausgesetzt, es lässt Raum für individuelle Absprachen. Wer Fachkräfte halten will, muss ohnehin Arbeitsbedingungen bieten, die den Feierabend respektieren.',
    },
  ],
}
