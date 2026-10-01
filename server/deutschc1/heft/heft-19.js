// Übungsheft C1 — Lektion 19: Lesen: Zuordnung Aussagen–Autoren
export default {
  lektion: 19,
  titel: 'Übungsheft — Zuordnung Aussagen–Autoren',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache der Meinung. Achte auf feste Verbindungen, die Rektion der Verben und die feinen Abstufungen zwischen Zustimmung, Einräumung und Skepsis.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Ministerin {1} zwar ein, dass die Reform kostspielig ist, {2} aber dennoch für eine rasche Umsetzung.',
          bank: ['räumt', 'plädiert', 'bezweifelt', 'lehnt'],
          loesungen: { 1: 'räumt', 2: 'plädiert' },
        },
        {
          typ: 'luecke',
          text: 'Viele Fachleute {1} diese Einschätzung nicht; sie halten die Forderung vielmehr für {2}.',
          bank: ['teilen', 'überzogen', 'nehmen', 'überzeugt'],
          loesungen: { 1: 'teilen', 2: 'überzogen' },
        },
        {
          typ: 'luecke',
          text: 'Die Autorin spricht sich {1} ein generelles Verbot aus und plädiert stattdessen {2} eine befristete Übergangslösung.',
          bank: ['gegen', 'für', 'auf', 'an'],
          loesungen: { 1: 'gegen', 2: 'für' },
        },
        {
          typ: 'mc',
          frage: 'Im Text heißt es: „Gewiss, nicht jeder Einwand ist aus der Luft gegriffen.“ Welche Paraphrase gibt die Stelle sinngemäß wieder?',
          optionen: ['Der Autor räumt ein, dass ein Teil der Kritik berechtigt ist.', 'Der Autor weist sämtliche Einwände als unbegründet zurück.', 'Der Autor hält jeden einzelnen Einwand für stichhaltig.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Im Text heißt es: „Ob das die erhofften Effekte bringt, wage ich zu bezweifeln.“ Welche Paraphrase trifft zu?',
          optionen: ['Die Autorin befürwortet die Maßnahme mit Nachdruck.', 'Die Autorin hält die Maßnahme für sozial ungerecht.', 'Die Autorin stellt die Wirksamkeit der Maßnahme infrage.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Im Text heißt es: „Oft heißt es, Tempolimits brächten nichts. Die Unfallzahlen zeigen das Gegenteil.“ Welche Aussage vertritt der Autor?',
          optionen: ['Geschwindigkeitsbegrenzungen sind weitgehend wirkungslos.', 'Geschwindigkeitsbegrenzungen tragen nachweislich zur Verkehrssicherheit bei.', 'Über die Wirkung von Tempolimits lässt sich keine Aussage treffen.'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Der Verband plädiert auf eine schnelle Einigung.', 'Der Verband plädiert für eine schnelle Einigung.'],
          loesung: 1,
          warum: 'En el sentido de «abogar por» el verbo exige **plädieren für** + Akk.; *auf* solo aparece en la jerga judicial (*auf Freispruch plädieren*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Zwar die Kosten sind hoch, aber der Nutzen überwiegt.', 'Zwar sind die Kosten hoch, aber der Nutzen überwiegt.'],
          loesung: 1,
          warum: '*Zwar* ocupa la primera posición y el verbo conjugado va justo detrás: *Zwar **sind** die Kosten hoch …* No se trata como un conector de posición cero.',
        },
        {
          typ: 'zuordnen',
          links: ['Das halte ich für längst überfällig.', 'Das wage ich zu bezweifeln.', 'Zwar …, doch …', 'Oft heißt es, …', 'Das greift zu kurz.'],
          rechts: ['Zustimmung', 'Skepsis', 'Einräumung', 'referierte Fremdmeinung', 'Relativierung'],
          loesung: {
            'Das halte ich für längst überfällig.': 'Zustimmung',
            'Das wage ich zu bezweifeln.': 'Skepsis',
            'Zwar …, doch …': 'Einräumung',
            'Oft heißt es, …': 'referierte Fremdmeinung',
            'Das greift zu kurz.': 'Relativierung',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['hält', 'Den', 'für', 'sie', 'überzogen', 'Einwand'],
          loesung: 'Den Einwand hält sie für überzogen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Handyverbot an Schulen — vier Stimmen',
      text: 'Seit Beginn des Schuljahres dürfen Smartphones an den Gymnasien der Stadt Kassel weder im Unterricht noch in den Pausen benutzt werden. Die Maßnahme spaltet die Schulgemeinschaft.\nSchulleiterin Birgit Hansen befürwortet das Verbot ausdrücklich: Seit der Einführung seien die Pausenhöfe wieder lebendiger, und Konflikte in Chatgruppen hätten spürbar abgenommen. Der Elternvertreter Jonas Albrecht räumt zwar ein, dass die ständige Ablenkung ein ernstes Problem darstelle, hält ein pauschales Verbot aber für überzogen. Er plädiert dafür, die Schülerinnen und Schüler an der Ausarbeitung eigener Regeln zu beteiligen.\nDeutlich skeptischer äußert sich die Medienpädagogin Selin Kaya. Oft heiße es, ohne Handy lernten Kinder besser; belastbare Belege dafür gebe es jedoch kaum. Wer Medienkompetenz fördern wolle, müsse den Umgang mit dem Gerät einüben, statt es aus dem Schulalltag zu verbannen.\nDie Schülersprecherin Mia Lorenz schließlich relativiert die Aufregung: Die meisten ihrer Mitschülerinnen und Mitschüler hätten sich nach wenigen Wochen an die Regel gewöhnt. Problematisch sei allein, dass Eltern ihre Kinder in Notfällen nicht mehr direkt erreichen könnten. Die Schulkonferenz will die Regelung nach einem Jahr überprüfen und dabei alle Beteiligten anhören.',
      items: [
        { typ: 'rf', aussage: 'Jonas Albrecht bestreitet, dass die Ablenkung durch Smartphones ein ernsthaftes Problem ist.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Position vertritt Selin Kaya?',
          optionen: ['Sie hält den Lernvorteil ohne Handy für wissenschaftlich gut belegt.', 'Sie hält das Verbot für ungeeignet, einen verantwortungsvollen Umgang mit dem Smartphone zu vermitteln.', 'Sie fordert, dass die Jugendlichen ihre Regeln selbst ausarbeiten.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was bemängelt Mia Lorenz an der neuen Regelung?',
          optionen: ['Viele Jugendliche haben sich bis heute nicht an das Verbot gewöhnt.', 'Das Verbot gilt auch in den Pausen.', 'Im Ernstfall sind die Kinder für ihre Eltern nicht unmittelbar erreichbar.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Laut der Schulleiterin wird seit dem Verbot in digitalen Gruppen weniger gestritten.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Radiofeature über eine Streitfrage. Entscheide beim Hören, welche Antwort zutrifft bzw. ob die Aussage richtig oder falsch ist. Achte darauf, wer welche Position vertritt.',
      audio: {
        transcript: 'In der Freiburger Altstadt sorgt ein kleines Schild für große Diskussionen. Seit dem ersten März nimmt die Bäckerei am Münsterplatz kein Bargeld mehr an, bezahlt wird nur noch mit Karte oder Handy. Die Inhaberin, Carola Wirth, verteidigt den Schritt. Nicht etwa die Angst vor Überfällen habe den Ausschlag gegeben, sondern der Aufwand. Das Zählen und Wegbringen des Münzgelds habe ihr Team jeden Abend fast eine Stunde gekostet. Der Verbraucherberater Henning Vogel hält die Entscheidung für rechtlich zulässig, aber für kurzsichtig. Gewiss, die meisten Kundinnen und Kunden zahlten ohnehin längst mit Karte. Wer jedoch kein Konto habe oder seine Ausgaben nur mit Scheinen und Münzen im Blick behalte, werde stillschweigend ausgeschlossen. Am gelassensten sieht es ausgerechnet eine Stammkundin, die vierundachtzigjährige Ilse Brandner. Oft heiße es, ältere Menschen kämen mit der Technik nicht zurecht. Sie selbst zahle seit Jahren mit Karte. Was sie störe, sei etwas anderes, nämlich dass ihr niemand die Umstellung vorher angekündigt habe. Eine Rückkehr zum Bargeld schließt die Bäckerin aus. Sie räumt allerdings ein, die Kundschaft zu spät informiert zu haben, und will künftig einen Monat im Voraus auf solche Änderungen hinweisen.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Was hat Carola Wirth nach eigenen Angaben zu der Umstellung bewogen?',
          optionen: ['die Furcht vor Überfällen', 'der Wunsch der Kundschaft nach Kartenzahlung', 'der tägliche Aufwand im Umgang mit dem Bargeld'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Henning Vogel hält die Umstellung für einen Rechtsverstoß.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was beanstandet Ilse Brandner?',
          optionen: ['Sie kommt mit der Kartenzahlung nicht zurecht.', 'Sie wurde über die Umstellung nicht vorab in Kenntnis gesetzt.', 'Sie sieht ältere Kundinnen und Kunden grundsätzlich benachteiligt.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Inhaberin gesteht ein Versäumnis bei der Information ihrer Kundschaft ein.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar von mindestens 80 Wörtern. Gib die Positionen mit eigenen Worten wieder, ohne die Formulierungen des Artikels zu übernehmen.',
      aufgabe: 'Die Schülerzeitung bittet dich, den Artikel über das Handyverbot für eine Leserschaft zusammenzufassen, die ihn nicht kennt, und anschließend deine eigene Sicht darzulegen.',
      punkte: [
        'Fasse die Positionen von mindestens drei der vier Personen sinngemäß zusammen.',
        'Verwende dabei Verben der Meinungswiedergabe wie befürworten, einräumen, bezweifeln oder relativieren.',
        'Nimm abschließend begründet Stellung und wäge dabei ein Gegenargument ab.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Artikel beleuchtet die Debatte über das Smartphoneverbot an Kasseler Gymnasien. Die Schulleitung begrüßt die Regel, weil der Schulalltag seither geselliger und friedlicher verlaufe. Ein Elternvertreter gesteht zwar zu, dass die Geräte stark ablenken, lehnt ein generelles Verbot jedoch als unverhältnismäßig ab und setzt auf gemeinsam erarbeitete Regeln. Eine Medienpädagogin bezweifelt, dass der Lernerfolg ohne Handy tatsächlich steigt, und fordert, den Umgang mit digitalen Medien gezielt zu trainieren.\nIch teile ihre Einschätzung weitgehend. Zwar leuchtet mir ein, dass ein Verbot kurzfristig für Ruhe sorgt, doch lernen Jugendliche auf diese Weise nicht, sich selbst Grenzen zu setzen. Sinnvoller wäre es, klare Handyzeiten gemeinsam festzulegen.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich etwa zwei Minuten. Gib fremde Standpunkte mit eigenen Worten wieder und trenne sie hörbar von deiner eigenen Haltung.',
      aufgabe: 'In deiner Stadt wird darüber gestritten, ob Busse und Bahnen künftig für alle kostenlos sein sollen. Gib vor dem Bürgerforum eine mündliche Stellungnahme von etwa zwei Minuten ab: Stelle zunächst die beiden gegensätzlichen Standpunkte mit eigenen Worten dar und beziehe anschließend selbst Position. Trenne dabei hörbar zwischen den fremden Standpunkten und deiner eigenen Haltung.',
      punkte: [
        'Gib die Position der Befürworter mit ihrem Hauptargument wieder.',
        'Stelle den wichtigsten Einwand der Kritiker dar.',
        'Räume ein, was an einer der beiden Positionen berechtigt ist, und begründe deine eigene Haltung.',
      ],
      redemittel: ['Die Befürworter plädieren für …, weil …', 'Die Kritiker bezweifeln, dass …', 'Zwar lässt sich nicht bestreiten, dass …, doch …', 'Ich spreche mich deshalb für … aus.'],
      maxSekunden: 120,
      beispielLoesung: 'Sehr geehrte Damen und Herren, in unserer Stadt wird im Moment heftig darüber gestritten, ob Busse und Bahnen kostenlos werden sollen. Ich möchte kurz beide Seiten wiedergeben und dann sagen, wo ich selbst stehe. Die Befürworter plädieren für den Nulltarif, weil sie sich davon weniger Autoverkehr versprechen. Wer nichts bezahlen muss, so ihr Argument, lässt den Wagen eher stehen, und davon profitieren vor allem Menschen mit geringem Einkommen. Die Kritiker bezweifeln genau das. Sie wenden ein, dass gar nicht der Preis das eigentliche Problem ist, sondern das Angebot. Wo der Bus nur einmal pro Stunde fährt, steigt niemand um, auch wenn die Fahrt nichts kostet. Außerdem fehlen der Stadt dann Einnahmen in Millionenhöhe. Diesen Einwand halte ich nicht für überzogen. Zwar lässt sich nicht bestreiten, dass ein kostenloses Angebot ein starkes Signal wäre, doch ein leerer Fahrplan bleibt ein leerer Fahrplan. Ich spreche mich deshalb für einen Kompromiss aus, nämlich für ein sehr günstiges Jahresticket und gleichzeitig dichtere Takte, vor allem abends und am Stadtrand. Erst wenn das Angebot stimmt, sollten wir über den Nulltarif neu abwägen. Vielen Dank.',
    },
  ],
}
