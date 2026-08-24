// Lektion 38 · Themenfeld: Globalisierung & Wirtschaft — Abschluss des Themenblocks

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 1 · Sprechen · Lesen'],
  h1: 'Globalisierung & Wirtschaft',
  lead: 'Lieferketten, Freihandel, Konsumkritik — das letzte Themenfeld des Blocks, und zugleich die Anleitung, wie du alle fünf Felder zu einem einzigen Argumente-Arsenal verbindest.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die großen Wirtschaftsdebatten (Freihandel, Lieferketten, Nachhaltigkeit, Ungleichheit) mit präzisem C1-Wortschatz erörtern.',
        'Du argumentierst mit dem Dreieck Wohlstand — Verantwortung — Verteilung, das fast jede Wirtschaftsfrage strukturiert.',
        'Du kennst reale Bezugspunkte (Lieferkettengesetz, Exportnation Deutschland, Schweizer Konzernverantwortungsinitiative) als Belege.',
        'Du weißt, wie du Wortschatz und Argumente zwischen allen fünf Themenfeldern des Blocks recycelst — die eigentliche Prüfungsstrategie.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Lieferkette', kollokation: 'globale Lieferketten lückenlos überwachen', es: 'cadena de suministro' },
        { wort: 'der Freihandel', kollokation: 'für ungehinderten Freihandel plädieren', es: 'libre comercio' },
        { wort: 'das Handelsabkommen', kollokation: 'ein Handelsabkommen aushandeln', es: 'acuerdo comercial' },
        { wort: 'die Wettbewerbsfähigkeit', kollokation: 'die Wettbewerbsfähigkeit der Industrie sichern', es: 'competitividad' },
        { wort: 'die Verlagerung', kollokation: 'die Verlagerung der Produktion ins Ausland', es: 'deslocalización' },
        { wort: 'die Wertschöpfung', kollokation: 'die Wertschöpfung im Inland halten', es: 'creación de valor' },
        { wort: 'die Sorgfaltspflicht', kollokation: 'seiner Sorgfaltspflicht nachkommen', es: 'deber de diligencia' },
        { wort: 'menschenwürdig', kollokation: 'menschenwürdige Arbeitsbedingungen garantieren', es: 'digno (condiciones dignas)' },
        { wort: 'die Nachhaltigkeit', kollokation: 'die Produktion auf Nachhaltigkeit umstellen', es: 'sostenibilidad' },
        { wort: 'die Kreislaufwirtschaft', kollokation: 'den Übergang zur Kreislaufwirtschaft beschleunigen', es: 'economía circular' },
        { wort: 'die Ungleichheit', kollokation: 'die soziale Ungleichheit verschärfen', es: 'desigualdad' },
        { wort: 'das Gefälle', kollokation: 'das Gefälle zwischen Arm und Reich', es: 'brecha, desnivel' },
        { wort: 'der Konsum', kollokation: 'den eigenen Konsum kritisch hinterfragen', es: 'consumo' },
        { wort: 'der Verzicht', kollokation: 'bewussten Verzicht üben', es: 'renuncia' },
      ],
      hinweis: 'Merke die Rektionen: *plädieren **für** + Akk.*, *einer Pflicht **nachkommen** (+ Dat.)*, *auf etwas **verzichten***. ~~Falso amigo: „la competencia“ es *der Wettbewerb* (rivalidad) o *die Konkurrenz* (los rivales); *die Kompetenz* significa capacidad, no competencia de mercado.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Exportnation unter Druck',
      absaetze: [
        'Kaum eine Volkswirtschaft ist so eng mit dem Weltmarkt verflochten wie die deutsche: **Rund jeder vierte Arbeitsplatz hängt direkt oder indirekt vom Export ab.** Deshalb ist die Haltung zum __Freihandel__ hier traditionell wohlwollend — offene Märkte haben den Wohlstand des Landes mit aufgebaut. Zugleich zeigen unterbrochene __Lieferketten__ und geopolitische Spannungen die Kehrseite der Verflechtung: Wer alles auslagert, macht sich verwundbar.',
        'Die Debatte hat sich darum verschoben — von der Frage *„Wie viel Öffnung?“* zur Frage *„Öffnung zu welchen Bedingungen?“*: Sozial- und Umweltstandards in Handelsabkommen, __Sorgfaltspflichten__ entlang der Lieferkette, strategische Rückverlagerung kritischer Produktion. ~~El eslogan que resume el giro: von „free trade“ zu „fair trade“.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Streitfragen im Überblick',
      kopf: ['Streitfrage', 'Dafür wird angeführt…', 'Dagegen wird eingewandt…'],
      zeilen: [
        ['Freihandel', 'Wohlstandsgewinne für alle Beteiligten; größere Auswahl, niedrigere Preise; Exportarbeitsplätze', 'Verlierer in einzelnen Branchen und Regionen; Wettlauf um niedrigste Standards; Abhängigkeiten'],
        ['Lieferkettengesetz', 'Unternehmen tragen Verantwortung für menschenwürdige Arbeitsbedingungen bei Zulieferern; freiwillige Selbstverpflichtung hat nicht ausgereicht', 'Bürokratielast, besonders für den Mittelstand; Wettbewerbsnachteil, wenn andere Länder nicht mitziehen; Rückzug aus armen Ländern als unbeabsichtigte Folge'],
        ['Nachhaltiges Wirtschaften', 'Kreislaufwirtschaft schont Ressourcen und schafft Innovation; Nachhaltigkeit wird zum Wettbewerbsvorteil', 'höhere Kosten kurzfristig; „Greenwashing“ statt echter Umstellung; globale Wirkung nur bei globalen Regeln'],
        ['Konsumkritik', 'bewusster Konsum und Verzicht als wirksamer Hebel des Einzelnen; Fast Fashion und Wegwerfkultur sind vermeidbar', 'individueller Verzicht bleibt Symbolik, solange die Verhältnisse unverändert sind; Konsumverzicht dürfe nicht zur Frage des Geldbeutels werden'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Fakten und Bezugspunkte für deine Argumentation',
      absaetze: [
        '**Erstens:** Deutschland hat mit dem __Lieferkettensorgfaltspflichtengesetz__ (in Kraft seit 2023) große Unternehmen verpflichtet, Menschenrechte und Umweltstandards **bei ihren Zulieferern** zu achten — auf europäischer Ebene wird eine entsprechende Richtlinie kontrovers weiterverhandelt. **Zweitens:** Die Schweiz stimmte 2020 über die __Konzernverantwortungsinitiative__ ab: Eine Mehrheit der Stimmenden sagte Ja, doch die Vorlage scheiterte am Ständemehr — ein Lehrstück dafür, wie umstritten Unternehmensverantwortung selbst in reichen Ländern ist.',
        '**Drittens:** Zur Ungleichheit genügt ein belastbarer Befund: Vermögen sind in Deutschland **deutlich ungleicher verteilt als Einkommen** — die Debatte dreht sich darum, ob Aufstiegschancen oder Umverteilung das wirksamere Gegenmittel sind. Und beim Konsum liefert das Schlagwort __Fast Fashion__ das anschaulichste Beispiel: Kleidung, die billig produziert, kurz getragen und schnell entsorgt wird — das Gegenmodell heißt Kreislaufwirtschaft.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Blockabschluss: Ein Arsenal, fünf Felder',
      absaetze: [
        'Die Prüfungsthemen halten sich nicht an Kapitelgrenzen — **und genau das ist deine Chance.** Die Achse *Eigenverantwortung vs. Bevormundung* aus der Gesundheitslektion trägt jede Konsumdebatte; der Maßstab *Teilhabe* aus der Migrationslektion passt auf soziale Ungleichheit; der Dreischritt *Nutzen — Risiko — Alternativen* aus der Wissenschaftslektion strukturiert jede Technologie- und Wirtschaftsfrage; und die Gewissheitsskala *belegen — nahelegen — widerlegen* adelt jeden Text. Selbst die Sprachdebatten liefern Material: Wer über Globalisierung spricht, spricht automatisch über Anglizismen und Mehrsprachigkeit.',
        'Praktische Konsequenz: Bereite **keine zwanzig Themen** vor, sondern **fünf Achsen und drei Belege pro Feld**. Bekommst du im Examen „Homeoffice“, „Tourismus“ oder „Künstliche Intelligenz“ — alles schon dagewesen —, zerlegst du das Thema in bekannte Achsen: Wer profitiert (Verteilung)? Wer trägt Verantwortung? Was sagt die Studienlage? Was wäre die Alternative? So wird aus fünf Lektionen ein Werkzeugkasten für **jedes** Thema. ~~Esta es la estrategia del bloque: no memorizar temas, sino reciclar ejes.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze fürs Examen',
      kicker: 'Freihandel',
      titel: 'Offene Märkte und ihre Kehrseite',
      items: [
        { text: 'Als Exportnation **verdankt Deutschland dem Freihandel einen erheblichen Teil seines Wohlstands** — rund jeder vierte Arbeitsplatz hängt am Export.' },
        { text: 'Handelsabkommen ohne verbindliche Sozial- und Umweltstandards **laufen Gefahr, einen Wettlauf nach unten auszulösen**.', gl: '— *der Wettlauf nach unten*: race to the bottom; imagen fija del debate' },
        { text: 'Die Pandemie hat schonungslos offengelegt, **wie verwundbar lückenlos optimierte Lieferketten sind**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Verantwortung',
      titel: 'Lieferketten und Sorgfaltspflicht',
      items: [
        { text: 'Wer von globaler Arbeitsteilung profitiert, **kann sich der Verantwortung für die Arbeitsbedingungen am Anfang der Kette nicht entziehen**.' },
        { text: 'Kritiker des Lieferkettengesetzes bemängeln, die Bürokratielast **treffe ausgerechnet den Mittelstand** und bewirke im Zweifel den Rückzug aus armen Ländern.' },
        { text: 'Dass die freiwillige Selbstverpflichtung der Unternehmen **hinter den Erwartungen zurückblieb**, war das stärkste Argument für eine gesetzliche Regelung.', gl: '— *hinter den Erwartungen zurückbleiben*: quedarse corto; ya la viste en la lección de salud — recíclala' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ungleichheit',
      titel: 'Verteilungsfragen sachlich formulieren',
      items: [
        { text: 'Während die Einkommen vergleichsweise ausgeglichen sind, **klafft beim Vermögen ein erhebliches Gefälle** — eine Unterscheidung, die in Debatten oft untergeht.' },
        { text: 'Ob man der Ungleichheit mit besseren **Aufstiegschancen** oder mit stärkerer **Umverteilung** begegnet, trennt die politischen Lager.' },
        { text: 'Globalisierung hat weltweit Millionen aus der Armut geholt **und zugleich innerhalb der Industrieländer Verlierer hinterlassen** — beides ist wahr, und beides gehört in jede ehrliche Bilanz.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Konsum',
      titel: 'Konsumkritik ohne Moralkeule',
      items: [
        { text: 'Fast Fashion steht sinnbildlich für ein Wirtschaftsmodell, das **auf Wegwerfen statt auf Weiterverwenden** setzt — die Kreislaufwirtschaft kehrt diese Logik um.' },
        { text: 'Bewusster Verzicht ist ehrenwert, **bleibt aber Symbolpolitik**, solange die günstigste Option zugleich die schädlichste ist.' },
        { text: 'Konsumkritik darf nicht zur **Frage des Geldbeutels** werden: Wer wenig verdient, kauft nicht aus Überzeugung billig.', gl: '— con esta frase matizas la crítica al consumo sin sonar moralista' },
        { text: 'Statt den Einzelnen zu moralisieren, sollte man **die nachhaltige Wahl zur einfachsten machen** — ein Prinzip, das du schon aus der Gesundheitsdebatte kennst.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Wirtschaftsfragen erörtern',
      gruppen: [
        {
          fn: 'Bilanz ziehen',
          saetze: [
            { satz: 'Zieht man Bilanz, so überwiegen die Wohlstandsgewinne — freilich sind sie höchst ungleich verteilt.' },
            { satz: 'Die Globalisierung pauschal zu verdammen ist ebenso verfehlt, wie ihre Schattenseiten kleinzureden.', gloss: '~~ebenso …, wie …: la balanza retórica que ya usaste en ciencia y migración~~' },
          ],
        },
        {
          fn: 'Bedingungen und Forderungen',
          saetze: [
            { satz: 'Offene Märkte ja — aber nur zu Bedingungen, die menschenwürdige Arbeit und Umweltstandards verbindlich machen.' },
            { satz: 'Es wäre an der Zeit, Nachhaltigkeit nicht als Kostenfaktor, sondern als Wettbewerbsvorteil zu begreifen.' },
          ],
        },
        {
          fn: 'Auf Einwände reagieren',
          saetze: [
            { satz: 'Der Einwand der Bürokratielast wiegt schwer — er spricht jedoch für bessere Regeln, nicht für gar keine.' },
            { satz: 'Gewiss kann der Einzelne wenig ausrichten; daraus folgt aber nicht, dass er nichts tun sollte.' },
          ],
        },
        {
          fn: 'Übergreifend schließen',
          saetze: [
            { satz: 'Am Ende läuft es — wie bei Gesundheit und Migration — auf dieselbe Frage hinaus: Wie verteilen wir Nutzen, Lasten und Verantwortung?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz in der richtigen Form.',
      aufgaben: [
        'Große Unternehmen müssen ihrer ______ entlang der gesamten Lieferkette nachkommen.',
        'Die ______ der Produktion ins Ausland hat ganze Regionen ihrer Industriearbeitsplätze beraubt.',
        'Ziel der ______ ist es, Rohstoffe so lange wie möglich im Wirtschaftskreislauf zu halten.',
        'Ökonomen streiten darüber, ob die Globalisierung die soziale ______ innerhalb der Industrieländer verschärft hat.',
        'Hohe Energiepreise gefährden die ______ der europäischen Industrie im globalen Vergleich.',
      ],
      loesungen: [
        '… ihrer **Sorgfaltspflicht** … nachkommen. (*einer Pflicht nachkommen* + Dat.)',
        'Die **Verlagerung** der Produktion … ~~*berauben* + Gen.: „ha privado a regiones enteras de sus empleos“ — genitivo de privación, registro alto.~~',
        'Ziel der **Kreislaufwirtschaft** ist es …',
        '… die soziale **Ungleichheit** … verschärft hat.',
        '… gefährden die **Wettbewerbsfähigkeit** der europäischen Industrie.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Formuliere auf C1-Niveau um — und recycle dabei bewusst Strukturen aus den vier vorigen Themenfeldern (Konjunktiv I, Balance-Formeln, Gewissheitsskala).',
      aufgaben: [
        'Freihandel ist gut für Deutschland, aber manche Leute verlieren ihre Arbeit.',
        'Firmen sollen kontrollieren, dass ihre Zulieferer die Arbeiter fair behandeln.',
        'Manche sagen, jeder soll weniger kaufen. Andere sagen, das bringt nichts.',
        'Die Reichen werden reicher und die Armen bleiben arm.',
      ],
      loesungen: [
        '**So unbestritten Deutschland als Exportnation vom Freihandel profitiert, so wenig lässt sich leugnen, dass einzelne Branchen und Regionen zu den Verlierern zählen.**',
        '**Das Lieferkettengesetz verpflichtet Unternehmen, menschenwürdige Arbeitsbedingungen bei ihren Zulieferern sicherzustellen — die freiwillige Selbstverpflichtung war den Befunden zufolge hinter den Erwartungen zurückgeblieben.**',
        '**Während die einen im bewussten Verzicht einen wirksamen Hebel sehen, wenden andere ein, individueller Konsumverzicht bleibe Symbolik, solange sich die Verhältnisse nicht änderten.** ~~Konjunktiv de la voz referida que entrenaste en migración y ciencia: „bleibe“ (Konjunktiv I) y „änderten“ (Konjunktiv II como sustituto, porque el Konjunktiv I coincidiría con el indicativo).~~',
        '**Das Vermögensgefälle verfestigt sich: Wer viel besitzt, akkumuliert weiter, während Aufstiegschancen für Einkommensschwache begrenzt bleiben.**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — der Feldwechsel-Test',
      frage: 'Der eigentliche Blockabschluss: Nimm das Prüfungsthema **„Sollte Fliegen teurer werden?“** — es stand in keiner Lektion. Skizziere in 5 Stichpunkten eine Argumentation, indem du Achsen aus mindestens **drei** Themenfeldern des Blocks wiederverwendest (benenne die Felder in Klammern).',
      loesung: '**Mögliche Lösung** (jede Kombination aus mindestens drei Feldern ist richtig):\n**1.** Relevanz: Fliegen ist die klimaschädlichste Fortbewegungsart pro Kilometer — die Folgekosten trägt die Allgemeinheit (Achse *Folgekosten/Solidargemeinschaft* — Gesundheit).\n**2.** Pro Verteuerung: Preissignale haben Lenkungswirkung, wie die Zuckerabgabe in Großbritannien belegt (Beleg-Recycling — Gesundheit/Wissenschaft).\n**3.** Contra: Eine Flugabgabe trifft Geringverdiener härter als Vielflieger mit hohem Einkommen — Verzicht darf keine Frage des Geldbeutels sein (Achse *Verteilung/Ungleichheit* — Wirtschaft).\n**4.** Abwägung: Studienlage referieren statt behaupten — *den Daten zufolge*, *belegen vs. nahelegen* (Gewissheitsskala — Wissenschaft).\n**5.** Fazit: Verteuern ja, aber sozial abgefedert und mit Alternativen (Bahnausbau) — die nachhaltige Wahl zur einfachsten machen (Achse *Verhältnisprävention* — Gesundheit/Wirtschaft).',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · Diskussionsbeitrag',
      titel: 'Diskussionsbeitrag: „Brauchen wir strengere Regeln für globale Lieferketten?“',
      anweisung: 'Verfasse in ca. 40 Minuten einen Diskussionsbeitrag von etwa 230 Wörtern für ein Wirtschaftsforum. Behandle alle vier Leitpunkte: Bedeutung des Themas · Argumente beider Seiten · eigene begründete Meinung · ein Beispiel.',
      absaetze: [
        '**Frage:** Sollten Unternehmen gesetzlich verpflichtet werden, für Arbeitsbedingungen und Umweltstandards bei ihren Zulieferern weltweit geradezustehen?',
      ],
      loesungLabel: 'Musterlösung (~230 Wörter)',
      loesungen: [
        'Ob T-Shirt oder Smartphone — fast alles, was wir kaufen, durchläuft globale Lieferketten. Unter welchen Bedingungen am Anfang dieser Ketten gearbeitet wird, bekommen Verbraucher selten zu sehen. Die Frage, ob Unternehmen dafür gesetzlich geradestehen sollen, betrifft daher unser aller Konsum.\n\nFür eine gesetzliche Sorgfaltspflicht spricht zunächst, dass die freiwillige Selbstverpflichtung vieler Konzerne nach übereinstimmender Einschätzung hinter den Erwartungen zurückgeblieben ist. Wer von globaler Arbeitsteilung profitiert, kann sich der Verantwortung für menschenwürdige Arbeitsbedingungen nicht entziehen. Deutschland hat mit dem Lieferkettengesetz vorgelegt; verbindliche Regeln schaffen zudem gleiche Bedingungen für alle Anbieter: Wer heute schon verantwortungsvoll produziert, hätte endlich keinen Wettbewerbsnachteil mehr gegenüber Konkurrenten, die billiger fertigen lassen.\n\nDagegen wird eingewandt, die Bürokratielast treffe ausgerechnet den Mittelstand, während Weltkonzerne eigene Abteilungen dafür unterhalten. Auch sei die Kontrolle weit verzweigter Lieferketten in der Praxis kaum zu leisten. Schlimmstenfalls ziehen sich Unternehmen aus armen Ländern ganz zurück — den Beschäftigten dort wäre damit am wenigsten gedient.\n\nMeines Erachtens sprechen die besseren Argumente dennoch für verbindliche Regeln. Der Einwand der Bürokratie wiegt schwer, doch er spricht für praktikablere Vorschriften, nicht für gar keine. Dass die Schweizer Konzernverantwortungsinitiative trotz einer Mehrheit der Stimmen scheiterte, zeigt zugleich, wie zäh der Weg ist — und dass nationale Alleingänge nicht genügen: Wirksam wird eine Sorgfaltspflicht erst auf europäischer Ebene.\n\nUnterm Strich gilt: Wohlstand, der auf unwürdigen Arbeitsbedingungen beruht, ist zu billig erkauft. Strengere Regeln sind kein Handelshemmnis, sondern die Geschäftsgrundlage eines fairen Welthandels.',
      ],
      kommentar: 'Beachte das Recycling: *hinter den Erwartungen zurückbleiben* (Gesundheit), das referierende *treffe/wäre gedient* (Migration), der Umgang mit dem Gegenargument (*wiegt schwer, doch…*) und ein realer Beleg pro Seite. Genau so sieht ein 90-Punkte-Text aus.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lege dir vor der Prüfung eine **einzige Seite** an: fünf Achsen (Freiheit/Vorgabe · Eigenverantwortung/Verhältnisse · Teilhabe · Nutzen/Risiko/Alternativen · Verteilung) plus drei Belege pro Themenfeld. Diese Seite ist mehr wert als jede Themensammlung — denn im Examen bekommst du nie „dein“ Thema, aber immer eine deiner Achsen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — der ganze Block auf einen Blick',
      kopf: ['Themenfeld', 'Tragende Achse', 'Bester Beleg'],
      zeilen: [
        ['Sprache & Gesellschaft', 'Freiheit vs. Vorgabe · Identität', 'Rechtschreibrat · Schweizer Diglossie'],
        ['Gesundheit & Ernährung', 'Eigenverantwortung vs. Verhältnisse', 'britische Zuckerabgabe · RKI-Daten'],
        ['Migration & Integration', 'Teilhabe als Maßstab', 'Anwerbeabkommen · Fachkräftegesetz'],
        ['Wissenschaft & Forschung', 'Nutzen — Risiko — Alternativen', '3R-Prinzip · Wissenschaftsbarometer'],
        ['Globalisierung & Wirtschaft', 'Wohlstand — Verantwortung — Verteilung', 'Lieferkettengesetz · Exportquote'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Freihandel, Lieferkettengesetz, Nachhaltigkeit und Konsumkritik mit je einem Pro, einem Contra und einem Beleg erörtern.',
        'Ich unterscheide Einkommens- und Vermögensungleichheit und formuliere Verteilungsfragen ohne Polemik.',
        'Ich kann ein unbekanntes Prüfungsthema in die fünf Achsen des Blocks zerlegen.',
        'Ich habe meine Belege-Seite (fünf Achsen, drei Belege pro Feld) tatsächlich angelegt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Themenblock komplett: Du hast fünf Felder, fünf Achsen und ein Arsenal an Belegen und Redemitteln. Jetzt wird ernst gemacht — in der nächsten Lektion wartet die **Prüfungssimulation 1 mit anschließender Korrektur**: alle Module unter realen Bedingungen, danach die systematische Auswertung deiner Fehler. Leg die Belege-Seite bereit.',
    },
  ],
}
