// Übungsheft C1 — Lektion 10: Konnektoren der Schriftsprache
export default {
  lektion: 10,
  titel: 'Übungsheft — Konnektoren der Schriftsprache',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den gehobenen Konnektoren. Prüfe jeweils zuerst die Wortart — Adverb, Subjunktion oder Präposition — und leite daraus die Verbstellung ab.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Studie wurde lediglich an vierzig Probanden durchgeführt; {1} lassen sich ihre Ergebnisse kaum verallgemeinern. Die Autorinnen {2} sprechen von einem eindeutigen Befund.',
          bank: ['folglich', 'hingegen', 'wenngleich', 'zumal'],
          loesungen: { 1: 'folglich', 2: 'hingegen' },
        },
        {
          typ: 'luecke',
          text: '{1} die Datenlage noch dünn ist, zeichnet sich ein klarer Trend ab. Die Kommission empfiehlt, das Programm zu verlängern, {2} die Mittel dafür bereits bewilligt sind.',
          bank: ['Wenngleich', 'zumal', 'Gleichwohl', 'folglich'],
          loesungen: { 1: 'Wenngleich', 2: 'zumal' },
        },
        {
          typ: 'luecke',
          text: '{1} aller Einwände hielt der Stadtrat an dem Vorhaben fest. {2} der anhaltenden Dürre stiegen die Lebensmittelpreise im Sommer deutlich.',
          bank: ['Ungeachtet', 'Infolge', 'Infolgedessen', 'Obschon'],
          loesungen: { 1: 'Ungeachtet', 2: 'Infolge' },
        },
        {
          typ: 'mc',
          frage: 'In den Ballungszentren steigen die Mieten weiter, ___ sie in ländlichen Regionen stagnieren.',
          optionen: ['hingegen', 'wohingegen', 'demnach'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Der wichtigste Zulieferer musste Insolvenz anmelden; ___ stand die Produktion wochenlang still.',
          optionen: ['wenngleich', 'ungeachtet dessen', 'infolgedessen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '___ überzeugend der Entwurf auch sein mag, finanzierbar ist er nicht.',
          optionen: ['So', 'Zwar', 'Obschon'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Gleichwohl, das Projekt wird fortgesetzt.', 'Gleichwohl wird das Projekt fortgesetzt.'],
          loesung: 1,
          warum: '*Gleichwohl* es adverbio: ocupa la posición 1 y el verbo va **inmediatamente detrás**, sin coma. Copiar el patrón de «sin embargo, …» es la interferencia clásica.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Reform ist dringend, zumal läuft die Frist bald ab.', 'Die Reform ist dringend, zumal die Frist bald abläuft.'],
          loesung: 1,
          warum: '*Zumal* es subjunción: abre una subordinada y el verbo conjugado va **al final** (*abläuft*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Jüngeren befürworten die Reform, die Älteren hingegen lehnen sie ab.', 'Die Jüngeren befürworten die Reform, hingegen die Älteren sie ablehnen.'],
          loesung: 0,
          warum: '*Hingegen* es adverbio y no manda el verbo al final; suele ir tras el elemento contrastado. Con verbo final se usa la subjunción *wohingegen*.',
        },
        {
          typ: 'satzbau',
          woerter: ['berechtigt', 'der', 'Mithin', 'Einwand', 'ist'],
          loesung: 'Mithin ist der Einwand berechtigt.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Drei Jahre ohne Autos in der Altstadt',
      text: 'Als eine süddeutsche Mittelstadt vor drei Jahren beschloss, den Autoverkehr weitgehend aus ihrer Altstadt zu verbannen, war der Protest groß. Vor allem der Einzelhandel befürchtete Umsatzeinbußen, zumal viele Kundinnen und Kunden aus dem Umland mit dem Auto anreisen. Eine nun vorgelegte Auswertung zeichnet indes ein differenzierteres Bild. Demnach ist die Zahl der Passanten in den Fußgängerzonen um knapp ein Fünftel gestiegen; Cafés und Restaurants verzeichnen folglich deutlich höhere Einnahmen. Die Fachgeschäfte hingegen profitieren kaum: Wer größere Einkäufe tätigt, weicht offenbar auf die Einkaufszentren am Stadtrand aus. Wenngleich sich die Luftqualität messbar verbessert hat, fällt die Bilanz mithin zwiespältig aus.\nDie Verfasser der Studie warnen denn auch vor voreiligen Schlüssen. Ihre Daten stammten aus einem vergleichsweise kurzen Zeitraum, und Sondereffekte wie die gestiegenen Energiepreise ließen sich nicht sauber herausrechnen. Gleichwohl empfehlen sie, das Modell beizubehalten, sofern die Stadt die Anbindung durch Busse und Park-and-Ride-Plätze spürbar verbessert. Ob der Gemeinderat dieser Empfehlung folgt, ist offen: Die Opposition fordert, die Sperrung zumindest an Samstagen aufzuheben, und hat bereits ein Bürgerbegehren angekündigt.',
      items: [
        { typ: 'rf', aussage: 'Der Auswertung zufolge hat die Gastronomie von der Sperrung profitiert.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie wirkt sich die Sperrung auf die Fachgeschäfte aus?',
          optionen: ['Sie verzeichnen ähnliche Zuwächse wie Cafés und Restaurants.', 'Sie profitieren kaum, weil größere Einkäufe offenbar am Stadtrand erledigt werden.', 'Viele von ihnen mussten inzwischen schließen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum mahnen die Verfasser der Studie zur Vorsicht?',
          optionen: ['Weil der Untersuchungszeitraum kurz war und sich Sondereffekte nicht klar herausrechnen ließen.', 'Weil der Einzelhandel die Methodik der Studie angezweifelt hat.', 'Weil sich die Luftqualität entgegen den Erwartungen nicht verbessert hat.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Verfasser der Studie empfehlen, die Sperrung an Samstagen aufzuheben.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einer Podiumsdiskussion. Entscheide, welche Antwort dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      audio: {
        transcript: 'Moderatorin: Willkommen zu unserer Podiumsdiskussion. Die Frage des Abends lautet, ob wir noch Bargeld brauchen. Herr Albrecht, Sie sind Ökonom und sagen Nein.\nMann: Nicht ganz. Ich sage, wir brauchen deutlich weniger davon. Bargeld verursacht hohe Kosten, zumal Transport und Sicherung immer aufwendiger werden. Folglich tragen am Ende alle diese Kosten mit, auch diejenigen, die längst mit Karte zahlen.\nModeratorin: Frau Demir, Sie vertreten einen Verbraucherverband und sehen das anders.\nFrau: Allerdings. Wenngleich das Kostenargument stimmt, übersieht Herr Albrecht etwas Entscheidendes. Bargeld schützt die Privatsphäre. Bei jeder Kartenzahlung entstehen Daten. Münzen und Scheine hingegen hinterlassen keine Spur.\nMann: Das bestreite ich nicht. Gleichwohl zeigt die Erfahrung aus Skandinavien, dass eine Gesellschaft fast ohne Bargeld funktioniert.\nFrau: Dort wurden indes gerade wieder Gesetze erlassen, die die Banken verpflichten, Bargeld anzubieten. Ältere Menschen und Menschen ohne Konto waren nämlich ausgeschlossen.\nModeratorin: Wäre ein Kompromiss denkbar?\nMann: Durchaus. Ich könnte mit einer Obergrenze leben, sofern sie nicht bei zehntausend, sondern bei etwa dreitausend Euro pro Barzahlung liegt.\nFrau: Eine Obergrenze lehne ich nicht grundsätzlich ab. Wichtiger wäre mir allerdings ein gesetzlich garantiertes Recht, überall bar zahlen zu dürfen.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Welches Argument führt Herr Albrecht gegen das Bargeld an?',
          optionen: ['Es erleichtert Straftaten.', 'Es verursacht hohe Kosten, die alle mittragen.', 'Es wird von jüngeren Menschen kaum noch genutzt.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Frau Demir hält das Kostenargument von Herrn Albrecht für falsch.', loesung: false },
        {
          typ: 'mc',
          frage: 'Unter welcher Bedingung würde Herr Albrecht eine Obergrenze für Barzahlungen akzeptieren?',
          optionen: ['wenn sie bei rund dreitausend Euro liegt', 'wenn sie bei zehntausend Euro liegt', 'wenn sie ausschließlich für Unternehmen gilt'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Frau Demir ist ein gesetzliches Recht auf Barzahlung wichtiger als die Frage der Obergrenze.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme mit mindestens 80 Wörtern. Verwende mindestens drei gehobene Konnektoren aus unterschiedlichen Funktionsgruppen und achte auf die Verbstellung, die jeder von ihnen verlangt.',
      aufgabe: 'Auch in deiner Stadt wird darüber diskutiert, die Innenstadt für den Autoverkehr zu sperren. Die Lokalzeitung bittet ihre Leserschaft um Beiträge für eine Sonderseite. Nimm Stellung.',
      punkte: [
        'Gib die wichtigsten Ergebnisse der im Artikel beschriebenen Auswertung knapp wieder.',
        'Wäge Vor- und Nachteile einer autofreien Innenstadt für verschiedene Gruppen ab.',
        'Formuliere eine begründete Empfehlung und nenne eine Bedingung, unter der du sie aufrechterhältst.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Die Auswertung aus Süddeutschland zeigt, dass eine autofreie Altstadt mehr Passanten anzieht und der Gastronomie nützt, während die Fachgeschäfte kaum profitieren.\nFür die Anwohner ist der Gewinn offensichtlich: weniger Lärm, bessere Luft, mehr Aufenthaltsqualität. Der Einzelhandel hingegen hat berechtigte Sorgen, zumal viele Kunden aus dem Umland auf das Auto angewiesen sind. Wenngleich ich diese Bedenken ernst nehme, halte ich die Sperrung insgesamt für richtig, denn eine lebendige Innenstadt lebt von Menschen, nicht von Parkplätzen.\nIch befürworte das Modell daher, sofern die Stadt gleichzeitig in Busverbindungen und Park-and-Ride-Plätze investiert. Ohne diese Anbindung verlagert sich der Einkauf an den Stadtrand; folglich wäre am Ende niemandem geholfen.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen zusammenhängenden Diskussionsbeitrag von etwa zwei Minuten. Sprich frei und mach den Gang deiner Argumentation hörbar.',
      aufgabe: 'In einer Diskussionsrunde wird folgende These vertreten: „Hausaufgaben sind überholt und sollten abgeschafft werden.“ Reagiere darauf mit einem zusammenhängenden Diskussionsbeitrag von etwa zwei Minuten, in dem du die These prüfst und eine eigene Position beziehst. Mach den Gang deiner Argumentation mit mindestens drei gehobenen Konnektoren hörbar.',
      punkte: [
        'Greif die These auf und räume ein, was für sie spricht.',
        'Halte mit mindestens einem gewichtigen Gegenargument dagegen.',
        'Zieh ein Fazit und nenne eine Bedingung, unter der du deine Position ändern würdest.',
        'Verwende mindestens drei gehobene Konnektoren, etwa „gleichwohl“, „zumal“, „folglich“ oder „sofern“.',
      ],
      redemittel: [
        'Die These klingt zunächst überzeugend, zumal …',
        'Gleichwohl halte ich es für voreilig, …',
        'Folglich plädiere ich dafür, …',
        'Meine Position würde ich ändern, sofern …',
      ],
      maxSekunden: 120,
      beispielLoesung: 'Die These, Hausaufgaben seien überholt, klingt zunächst überzeugend. Viele Kinder sitzen nach einem langen Schultag noch stundenlang am Schreibtisch, und die Freizeit kommt zu kurz. Hinzu kommt ein Gerechtigkeitsproblem: Manche Eltern können helfen oder Nachhilfe bezahlen, andere hingegen nicht. Hausaufgaben vergrößern mithin die Unterschiede zwischen den Kindern, statt sie auszugleichen.\nGleichwohl halte ich eine vollständige Abschaffung für voreilig. Wer eine Sprache oder Mathematik lernt, muss üben, und zwar regelmäßig und selbstständig. Im Unterricht bleibt dafür selten genug Zeit, zumal die Klassen groß sind. Außerdem lernen Kinder durch Hausaufgaben, sich ihre Arbeit selbst einzuteilen. Diese Fähigkeit brauchen sie später im Studium und im Beruf.\nDas eigentliche Problem liegt demnach nicht in den Hausaufgaben selbst, sondern in ihrer Menge und in der fehlenden Unterstützung. Folglich plädiere ich dafür, sie nicht abzuschaffen, sondern zu verändern: kürzere, sinnvollere Aufgaben, die niemanden überfordern.\nMeine Position würde ich allerdings ändern, sofern alle Schulen zu echten Ganztagsschulen würden. Wenn dort feste Übungszeiten mit Lehrkräften stattfänden, wären Hausaufgaben zu Hause tatsächlich überflüssig. Solange das nicht der Fall ist, sollten wir an ihnen festhalten.',
    },
  ],
}
