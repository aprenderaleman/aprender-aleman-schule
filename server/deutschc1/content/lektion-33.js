// Lektion 33 · Themenfeld: Medien & soziale Netzwerke
//
// Bloque 3 «Themenfelder» — soziale Medien und Meinungsbildung, Desinformation,
// Medienkompetenz, öffentlich-rechtlicher Rundfunk, Influencer-Kultur.

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 1 · Hören Teil 2'],
  h1: 'Medien & soziale Netzwerke',
  lead: 'Wem glauben wir — und warum? Meinungsbildung, Desinformation und Influencer-Kultur: das Themenfeld, in dem die Prüfung deine Urteilsfähigkeit genauso testet wie deinen Wortschatz.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du beschreiben, wie soziale Netzwerke die öffentliche Meinungsbildung verändern — mit Begriffen wie Filterblase, Reichweite und Algorithmus.',
        'Du beherrschst 14 Schlüsselwörter des Themenfelds mit ihren typischen Kollokationen.',
        'Du kennst das deutsche Mediensystem (öffentlich-rechtlicher Rundfunk, Rundfunkbeitrag) und die europäische Plattformregulierung als Faktenargumente.',
        'Du schreibst einen Diskussionsbeitrag über die Regulierung sozialer Netzwerke nach dem Format von Schreiben Teil 1.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Meinungsbildung', kollokation: 'die öffentliche Meinungsbildung beeinflussen', es: 'formación de opinión' },
        { wort: 'die Desinformation', kollokation: 'gezielte Desinformation verbreiten', es: 'desinformación' },
        { wort: 'die Falschmeldung', kollokation: 'eine Falschmeldung entlarven', es: 'noticia falsa, bulo' },
        { wort: 'die Medienkompetenz', kollokation: 'Medienkompetenz vermitteln', es: 'competencia mediática' },
        { wort: 'der öffentlich-rechtliche Rundfunk', kollokation: 'den öffentlich-rechtlichen Rundfunk finanzieren', es: 'radiotelevisión pública' },
        { wort: 'die Filterblase', kollokation: 'in einer Filterblase gefangen sein', es: 'burbuja informativa' },
        { wort: 'die Reichweite', kollokation: 'eine enorme Reichweite erzielen', es: 'alcance (de una publicación)' },
        { wort: 'die Glaubwürdigkeit', kollokation: 'an Glaubwürdigkeit verlieren bzw. gewinnen', es: 'credibilidad' },
        { wort: 'die Quelle', kollokation: 'eine Quelle kritisch prüfen', es: 'fuente' },
        { wort: 'verbreiten', kollokation: 'sich in Windeseile verbreiten', es: 'difundir(se)' },
        { wort: 'die Schlagzeile', kollokation: 'reißerische Schlagzeilen produzieren', es: 'titular' },
        { wort: 'die Plattform', kollokation: 'Plattformen zur Verantwortung ziehen', es: 'plataforma' },
        { wort: 'der Influencer / die Influencerin', kollokation: 'Werbung als Empfehlung tarnen', es: 'influencer' },
        { wort: 'die Vielfalt', kollokation: 'die Meinungsvielfalt sichern', es: 'pluralidad, diversidad' },
      ],
      hinweis: 'Falscher Freund: **die Notiz** ist ein apunte, keine noticia — *las noticias* heißen **die Nachrichten** ~~y en alemán el informativo es *die Nachrichten*, siempre en plural~~. Merke außerdem: *etwas verbreitet **sich*** (reflexiv), aber *jemand verbreitet etwas* (transitiv).',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das deutsche Mediensystem — was du wissen musst',
      absaetze: [
        'Deutschland leistet sich ein **duales Mediensystem**: private Anbieter neben einem starken __öffentlich-rechtlichen Rundfunk__ — ARD, ZDF und Deutschlandradio. Finanziert wird er durch den __Rundfunkbeitrag__, den jeder Haushalt zahlt; dafür soll er unabhängig von Quoten und Werbekunden informieren, bilden und die **Meinungsvielfalt** sichern. Genau daran entzündet sich die Dauerdebatte: Kritiker halten den Apparat für zu teuer und zu schwerfällig, Befürworter sehen in ihm das Bollwerk gegen Desinformation und die Ökonomisierung der Öffentlichkeit. Die Aufsicht über private Anbieter führen die __Landesmedienanstalten__.',
        'Die zweite Ebene ist europäisch: Der __Digital Services Act__ der EU verpflichtet große Plattformen, illegale Inhalte zügig zu entfernen und die Funktionsweise ihrer Empfehlungsalgorithmen offenzulegen. Dahinter steht die Einsicht, dass sich die **Meinungsbildung** zunehmend dorthin verlagert, wo nicht Redaktionen, sondern **Algorithmen** entscheiden, was wir zu sehen bekommen.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Debattenfelder',
      steps: [
        {
          badge: 'Debatte 1',
          titel: 'Desinformation — wer trägt die Verantwortung?',
          text: '**Falschmeldungen** verbreiten sich nachweislich schneller als ihre Richtigstellungen, weil Empörung Klicks erzeugt. Die eine Seite fordert, __Plattformen zur Verantwortung zu ziehen__ — durch Löschpflichten und Transparenzauflagen. Die andere warnt: Wer Plattformen zum Schiedsrichter über wahr und falsch macht, riskiert **Überregulierung und Zensur**. Dazwischen stehen unabhängige Faktenprüfer und Recherchenetzwerke.',
        },
        {
          badge: 'Debatte 2',
          titel: 'Filterblase und Meinungsbildung',
          text: 'Empfehlungsalgorithmen zeigen uns bevorzugt, was uns ohnehin gefällt — es droht die __Filterblase__, in der die eigene Sicht ständig bestätigt wird. Kritiker sehen darin einen Motor der Polarisierung; andere Forscher relativieren: Auch früher las man die Zeitung des eigenen Lagers. Unstrittig ist der Befund, dass **Reichweite** heute nichts mehr über **Glaubwürdigkeit** aussagt.',
        },
        {
          badge: 'Debatte 3',
          titel: 'Influencer-Kultur und Medienkompetenz',
          text: 'Influencer erreichen ein Millionenpublikum, das ihnen wie Freunden vertraut — ideal für Werbung, die als persönliche Empfehlung **getarnt** wird; deshalb gilt eine **Kennzeichnungspflicht** für Werbung. Die Antwort fast aller Seiten auf beide Probleme lautet __Medienkompetenz__: Quellen prüfen, Absender hinterfragen, Mechanismen durchschauen — am besten schon in der Schule.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Institutionen und Konzepte im Überblick',
      kopf: ['Begriff', 'Was dahintersteckt'],
      zeilen: [
        ['ARD · ZDF · Deutschlandradio', 'der öffentlich-rechtliche Rundfunk — beitragsfinanziert, dem Gemeinwohl verpflichtet'],
        ['Rundfunkbeitrag', 'Haushaltsabgabe, die Unabhängigkeit von Werbung und Quote sichern soll'],
        ['Landesmedienanstalten', 'Aufsicht über private Rundfunk- und Telemedienanbieter'],
        ['Digital Services Act', 'EU-Regeln für Plattformen: Löschpflichten, Transparenz der Algorithmen'],
        ['Kennzeichnungspflicht', 'Werbung muss als solche erkennbar sein — auch bei Influencern'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Übernehmen',
      kicker: 'Meinungsbildung',
      titel: 'Über Öffentlichkeit und Algorithmen sprechen',
      items: [
        { text: 'Die öffentliche **Meinungsbildung** verlagert sich zunehmend in soziale Netzwerke — dorthin, wo Algorithmen statt Redaktionen entscheiden.', gl: '— *sich verlagern*: describe el desplazamiento estructural' },
        { text: 'Wer nur noch Inhalte sieht, die die eigene Sicht bestätigen, läuft Gefahr, in einer **Filterblase** gefangen zu bleiben.', gl: '— *Gefahr laufen zu + Inf.*: «correr el riesgo de»' },
        { text: 'Eine hohe **Reichweite** sagt nichts über die **Glaubwürdigkeit** des Absenders aus — genau das macht soziale Medien so ambivalent.' },
        { text: 'Reißerische **Schlagzeilen** erzeugen Klicks; differenzierte Berichterstattung leider deutlich seltener.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Desinformation',
      titel: 'Über Fake News und Verantwortung sprechen',
      items: [
        { text: 'Gezielte **Desinformation** zielt weniger darauf ab, eine Lüge zu etablieren, als darauf, das Vertrauen in alle Quellen zu zerstören.', gl: '— *weniger darauf … als darauf*: contraste C1 de manual' },
        { text: '**Falschmeldungen** verbreiten sich in Windeseile — ihre Richtigstellung erreicht meist nur einen Bruchteil des Publikums.' },
        { text: 'Es greift zu kurz, allein die **Plattformen** zur Verantwortung zu ziehen; ohne kritische Nutzer bleibt jede Regulierung Stückwerk.', gl: '— *es greift zu kurz* + *Stückwerk bleiben*: dos fórmulas de juicio en un solo Satz' },
        { text: 'Wer eine **Quelle** nicht prüfen kann, sollte sie auch nicht weiterverbreiten — so banal diese Regel klingt, so selten wird sie befolgt.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Rundfunk & Influencer',
      titel: 'Über das Mediensystem urteilen',
      items: [
        { text: 'Der **öffentlich-rechtliche Rundfunk** mag reformbedürftig sein — als Gegengewicht zur Aufmerksamkeitsökonomie ist er jedoch unverzichtbar.', gl: '— *mag … sein — jedoch*: concesión + réplica en una línea' },
        { text: 'Der **Rundfunkbeitrag** ist der Preis dafür, dass Information nicht allein den Gesetzen des Marktes überlassen wird.' },
        { text: 'Wenn **Influencer** Werbung als persönliche Empfehlung tarnen, verschwimmt die Grenze zwischen Inhalt und Anzeige.' },
        { text: 'Ohne systematisch vermittelte **Medienkompetenz** bleibt jeder Appell an den kritischen Nutzer ein frommer Wunsch.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld Medien',
      gruppen: [
        {
          fn: 'Entwicklung bewerten',
          saetze: [
            { satz: 'Ich beobachte mit Sorge, dass sich die Debattenkultur in den sozialen Netzwerken zunehmend verschärft.' },
            { satz: 'Man wird den sozialen Medien nicht gerecht, wenn man sie pauschal verurteilt — sie haben Debatten auch geöffnet und demokratisiert.', gloss: '— *jemandem/etwas gerecht werden*: hacer justicia a algo' },
          ],
        },
        {
          fn: 'Forderungen formulieren',
          saetze: [
            { satz: 'Meines Erachtens führt kein Weg daran vorbei, Medienkompetenz als festes Schulfach zu verankern.' },
            { satz: 'Von den Plattformen ist zu verlangen, dass sie die Funktionsweise ihrer Algorithmen offenlegen.' },
          ],
        },
        {
          fn: 'Skepsis und Vertrauen ausdrücken',
          saetze: [
            { satz: 'Ich stehe reißerischen Schlagzeilen grundsätzlich skeptisch gegenüber und prüfe die Quelle, bevor ich etwas teile.' },
            { satz: 'Bei aller Kritik halte ich unabhängigen Journalismus für das wirksamste Mittel gegen Desinformation.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz. Achte auf die Kollokation.',
      aufgaben: [
        'gezielte Desinformation …',
        'eine Falschmeldung … (aufdecken — aber mit dem C1-Verb)',
        'in einer Filterblase … sein',
        'an Glaubwürdigkeit … bzw. …',
        'die Plattformen zur Verantwortung …',
        'eine enorme … erzielen',
      ],
      loesungen: [
        'gezielte Desinformation **verbreiten**',
        'eine Falschmeldung **entlarven** — ~~«desenmascarar»: más preciso que *aufdecken* cuando algo se hace pasar por verdad~~',
        'in einer Filterblase **gefangen** sein',
        'an Glaubwürdigkeit **verlieren** bzw. **gewinnen** — *an* + Dat.',
        'die Plattformen zur Verantwortung **ziehen**',
        'eine enorme **Reichweite** erzielen',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Forme die einfachen Sätze in C1-Sätze um. Nutze das angegebene Wort aus dem Kernwortschatz.',
      aufgaben: [
        'Falsche Nachrichten verbreiten sich sehr schnell im Internet. (die Falschmeldung)',
        'Viele Leute glauben Influencern mehr als Journalisten. (die Glaubwürdigkeit)',
        'Die Schüler sollten lernen, Informationen zu prüfen. (die Medienkompetenz)',
        'Man sieht im Internet nur noch die eigene Meinung. (die Filterblase)',
        'Das Fernsehen von ARD und ZDF wird von allen bezahlt. (der öffentlich-rechtliche Rundfunk)',
      ],
      loesungen: [
        '**Falschmeldungen** verbreiten sich in sozialen Netzwerken in Windeseile — weit schneller als jede Richtigstellung.',
        'Dass Influencer bei vielen eine höhere **Glaubwürdigkeit** genießen als Journalisten, sollte den Qualitätsmedien zu denken geben. ~~*Glaubwürdigkeit genießen* y *zu denken geben*: dos colocaciones C1 en un Satz.~~',
        'Die Vermittlung von **Medienkompetenz** müsste fest im Lehrplan verankert werden.',
        'Empfehlungsalgorithmen begünstigen die Entstehung von **Filterblasen**, in denen die eigene Sicht ständig bestätigt wird.',
        'Der **öffentlich-rechtliche Rundfunk** wird über eine Haushaltsabgabe finanziert und ist dem Gemeinwohl verpflichtet.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen argumentativen Absatz (80-100 Wörter) zur Frage „Ist der öffentlich-rechtliche Rundfunk noch zeitgemäß?“. Verwende mindestens vier Kernwörter und ein konzessives Redemittel (mag … sein / bei aller Kritik).',
      loesung: '**Mögliche Lösung** (auch die kritische Position ist gültig, solange sie differenziert bleibt):\n*Der öffentlich-rechtliche Rundfunk mag schwerfällig und reformbedürftig sein — überflüssig ist er deshalb noch lange nicht. In einer Öffentlichkeit, in der sich Falschmeldungen in Windeseile verbreiten und Reichweite mehr zählt als Glaubwürdigkeit, braucht es ein Angebot, das der Meinungsvielfalt und nicht der Quote verpflichtet ist. Bei aller Kritik am Rundfunkbeitrag halte ich diese Unabhängigkeit für sein stärkstes Argument: Wer Information allein dem Markt überlässt, bekommt Schlagzeilen statt Einordnung. Zeitgemäß wird der Rundfunk allerdings nur bleiben, wenn er das junge Publikum dort erreicht, wo es längst ist — auf den Plattformen.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · Diskussionsbeitrag (~230 Wörter, 40 Min. empfohlen)',
      titel: 'Thema: „Sollten soziale Netzwerke stärker reguliert werden?“',
      anweisung: 'Schreibe einen Diskussionsbeitrag für ein Online-Forum: Einleitung mit Bezug zur Fragestellung, Argumente für beide Seiten, eigene Position, Schluss. Vergleiche anschließend mit der Modelllösung und den markierten Bausteinen.',
      absaetze: [
        'Ob Falschmeldungen im Wahlkampf oder Hassrede im Kommentarbereich — die Frage, ob soziale Netzwerke stärker reguliert werden sollten, ist längst keine Fachdebatte mehr, sondern betrifft jeden, der ein Smartphone besitzt.',
        'Für eine strengere Regulierung spricht vor allem, dass sich Desinformation in Windeseile verbreitet, während Richtigstellungen kaum jemanden erreichen. Plattformen verdienen an der Empörung, die ihre Algorithmen verstärken; es erscheint daher nur folgerichtig, sie zur Verantwortung zu ziehen und zur Transparenz zu verpflichten — genau diesen Weg geht die EU. Dem lässt sich entgegenhalten, dass staatliche Eingriffe in die Kommunikation stets ein Risiko bergen: Wer entscheidet, was gelöscht wird? Eine übereifrige Regulierung könnte am Ende genau die Meinungsvielfalt beschneiden, die sie schützen soll.',
        'Meines Erachtens braucht es beides in klarer Arbeitsteilung: verbindliche Regeln für die Konzerne — Transparenz der Algorithmen, konsequente Löschung strafbarer Inhalte — und zugleich massive Investitionen in Medienkompetenz. Reguliert werden sollten die Geschäftsmodelle, nicht die Meinungen. Denn mündige Nutzer, die Quellen prüfen, sind auf Dauer wirksamer als jede Löschpflicht. (~160 Wörter — in der Prüfung ergänzt du ein konkretes Beispiel und führst deine Position weiter aus, um auf ~230 zu kommen.)',
      ],
      loesungen: [
        '**Einleitung:** Aufhänger (Falschmeldungen, Hassrede) + Betroffenheit aller — die Fragestellung wird aufgenommen, nicht wiederholt',
        '**Pro-Block:** Verbreitungslogik der Desinformation + Geschäftsmodell der Plattformen + Verweis auf die EU-Regulierung als Faktenargument',
        '**Contra-Block:** eingeleitet mit „Dem lässt sich entgegenhalten“ — Zensurrisiko, Gefahr für die Meinungsvielfalt',
        '**Position + Schluss:** Arbeitsteilung als vermittelnde These + pointierter Schlussgedanke („Geschäftsmodelle, nicht Meinungen“)',
      ],
      kommentar: 'Beachte die Doppelstrategie der Position: Sie übernimmt aus **beiden** Blöcken etwas (Regeln + Medienkompetenz) und verdichtet sie in einer Antithese. Genau diese Syntheseleistung unterscheidet eine sehr gute Bearbeitung von einer bloßen Pro-Contra-Liste.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören Teil 2** (Radiointerview) sind Medienthemen häufig — und die Interviewten argumentieren genau mit den Begriffen dieser Lektion: *Meinungsvielfalt*, *Glaubwürdigkeit*, *Medienkompetenz*. Wer den Fachwortschatz kennt, versteht nicht nur schneller, sondern erkennt auch die Paraphrasen in den Aufgaben: *Falschmeldung* im Text wird zur *Desinformation* in der Frage.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Merksatz'],
      zeilen: [
        ['duales Mediensystem', 'öffentlich-rechtlich (beitragsfinanziert) neben privat — Meinungsvielfalt als Auftrag'],
        ['Desinformation', 'Falschmeldungen sind schneller als ihre Richtigstellung — Empörung erzeugt Reichweite'],
        ['Regulierungsfrage', 'Plattformen zur Verantwortung ziehen vs. Zensurrisiko — die EU setzt auf Transparenz'],
        ['Medienkompetenz', 'Quellen prüfen als Grundfertigkeit — der Konsens aller Lager'],
        ['Kollokationen', 'eine Falschmeldung entlarven · Reichweite erzielen · an Glaubwürdigkeit verlieren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann erklären, wie Algorithmen die Meinungsbildung beeinflussen — mit Filterblase, Reichweite und Glaubwürdigkeit.',
        'Ich verwende die 14 Kernwörter mit der richtigen Kollokation und verwechsle *Nachrichten* nicht mit *Notizen*.',
        'Ich kann das duale Mediensystem und die Rolle des Rundfunkbeitrags in drei Sätzen darstellen.',
        'Ich schreibe einen Diskussionsbeitrag zur Plattformregulierung mit Synthese statt bloßer Pro-Contra-Liste.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Wie über Themen gesprochen wird, prägt, wie wir sie denken — nirgends zeigt sich das deutlicher als in den Medien. Genau da setzt das nächste Themenfeld an: **Sprache & Gesellschaft** — Sprachwandel, Anglizismen, gendergerechte Sprache und die Frage, wem die deutsche Sprache eigentlich gehört.',
    },
  ],
}
