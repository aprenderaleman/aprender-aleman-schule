// Lektion 41 · Prüfungssimulation 1 + Korrektur
//
// Bloque 4 «Prüfungssimulation» — primer simulacro B2 autocorregible.
// Esqueleto de 8 secciones adaptado: las tres «Übungen» SON el simulacro
// (Lesen · Hören · Schreiben Teil 1); el Prüfungsbezug enseña a corregirse
// con los 4 criterios del Goethe y un texto de alumno comentado.

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau B2', 'Prüfungsrelevanz: alle vier Module'],
  h1: 'Prüfungssimulation 1 + Korrektur',
  lead: 'Die erste Generalprobe: drei Prüfungsaufgaben unter echten Bedingungen — und danach der Schritt, den die meisten auslassen: die eigene Korrektur.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du eine Prüfungssimulation zu Hause unter realen Bedingungen durchführen — mit Timer, ohne Wörterbuch, möglichst am Bildschirm wie im digitalen Format.',
        'Du bearbeitest je eine Aufgabe aus Lesen, Hören und Schreiben unter Zeitdruck.',
        'Du bewertest deinen eigenen Forumsbeitrag mit den vier Goethe-Kriterien und einer vereinfachten Rubrik.',
        'Du erkennst die typischen B2-Fehler spanischsprachiger Lernender und legst eine persönliche Fehlerliste an.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz: die Sprache der Korrektur ──────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Selbstkorrektur', kollokation: 'Zeit für die Selbstkorrektur einplanen', es: 'la autocorrección' },
        { wort: 'das Kriterium, -ien', kollokation: 'die vier Kriterien anwenden', es: 'el criterio' },
        { wort: 'die Verbstellung', kollokation: 'die Verbstellung im Nebensatz prüfen', es: 'la posición del verbo' },
        { wort: 'das Genus', kollokation: 'das Genus im Wörterbuch nachschlagen', es: 'el género gramatical' },
        { wort: 'die Endung', kollokation: 'die richtige Endung wählen', es: 'la terminación' },
        { wort: 'der falsche Freund', kollokation: 'auf falsche Freunde achten', es: 'el falso amigo' },
        { wort: 'die Kongruenz', kollokation: 'die Kongruenz von Subjekt und Verb', es: 'la concordancia' },
        { wort: 'der Ausdruck', kollokation: 'einen passenderen Ausdruck suchen', es: 'la expresión, la forma de decirlo' },
        { wort: 'der Flüchtigkeitsfehler', kollokation: 'Flüchtigkeitsfehler passieren jedem', es: 'el error por descuido' },
        { wort: 'die Wiederholung', kollokation: 'Wiederholungen im Text vermeiden', es: 'la repetición' },
        { wort: 'die Fehlerliste', kollokation: 'eine persönliche Fehlerliste führen', es: 'la lista de errores propios' },
        { wort: 'die Generalprobe', kollokation: 'eine Generalprobe unter realen Bedingungen', es: 'el ensayo general' },
      ],
      hinweis: 'Das ist die Sprache, mit der du **über deine eigenen Fehler sprichst**. Wer seinen Fehler benennen kann (*Verbstellung nach „weil“*, *falsches Genus*), korrigiert ihn schneller — und macht ihn seltener wieder.',
    },

    { type: 'rule' },

    // ── 4. Erklärung: die Simulation zu Hause ─────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Warum eine Generalprobe — und wie sie zu Hause funktioniert',
      absaetze: [
        'Bestehen ist nicht nur eine Frage des **Könnens**, sondern auch der **Kondition**: 65 Minuten konzentriert lesen, danach etwa 40 Minuten hören, dann 75 Minuten schreiben. Das muss der Kopf einmal komplett erlebt haben, bevor es ernst wird. Eine Simulation zeigt genau die Schwächen, die einzelne Übungen verstecken: Zeitnot im Lesen, Konzentrationslöcher beim Hören, ein Schluss in Eile.',
        'Entscheidend ist die **Ehrlichkeit der Bedingungen**: ohne Wörterbuch, ohne Pausen nach Belieben, ohne Blick auf die Lösungen. ~~Un simulacro «blando» te da una nota falsa — y la sorpresa te la llevas el día del examen.~~ Und wenn möglich: **digital**, wie in Lektion 2 beschrieben — Lesen am Bildschirm, Hören mit Kopfhörern, Schreiben mit der Tastatur. So trainierst du das Format, in dem du wahrscheinlich auch geprüft wirst.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Module unter realen Bedingungen',
      kopf: ['Modul', 'Zeit', 'Umfang', 'So simulierst du es zu Hause'],
      zeilen: [
        ['Lesen', '65 Min.', '5 Teile', 'am Bildschirm lesen, Timer sichtbar, Antworten notieren oder anklicken — nicht im Text „wohnen bleiben“'],
        ['Hören', 'ca. 40 Min.', '4 Teile', 'mit Kopfhörern; Audio oder vorgelesenes Transkript nur einmal hören, nichts zurückspulen'],
        ['Schreiben', '75 Min.', '2 Aufgaben (empf. 50 + 25 Min.)', 'mit der Tastatur tippen, **Rechtschreibkorrektur ausschalten** — im digitalen Format gibt es keine'],
        ['Sprechen', 'ca. 15 Min.', 'Paarprüfung: Vortrag + Diskussion', 'mit Partner oder Aufnahmegerät — kommt in Lektion 42 an die Reihe'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die vier Spielregeln',
      steps: [
        {
          titel: 'Zeitfenster blocken',
          text: 'Reserviere einen ungestörten Vormittag. __Handy aus__, Tür zu, Timer sichtbar auf dem Tisch.',
        },
        {
          titel: 'Keine Hilfsmittel',
          text: 'Kein Wörterbuch, keine Übersetzungs-App, keine Rechtschreibkorrektur. Erlaubt ist nur, was auch im Prüfungsraum erlaubt ist.',
        },
        {
          titel: 'Reihenfolge einhalten, kein Feld leer',
          text: 'Wie am Prüfungstag: __Lesen → Hören → Schreiben__, dazwischen höchstens zehn Minuten Pause. Was du nicht weißt, kreuzt du trotzdem an — __ein leeres Feld ist immer null Punkte__.',
        },
        {
          titel: 'Heute abgeben, morgen korrigieren',
          text: 'Nach der Simulation alles weglegen. Die Korrektur folgt __am nächsten Tag mit frischem Blick__ — wie ein Prüfer, nicht wie der Autor.',
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele: die typischen B2-Fehler ─────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Fehlertypen, die dich Punkte kosten',
      kicker: 'Wortstellung',
      titel: 'Verbposition — der teuerste B2-Fehler',
      items: [
        { text: '*…, weil ich ==habe== keine Zeit.* → *…, weil ich keine Zeit **habe**.*', gl: '— nach *weil, obwohl, dass* geht das Verb ans Ende (Lektion 4)' },
        { text: '*Deshalb ==ich bin== dagegen.* → *Deshalb **bin ich** dagegen.*', gl: '— nach *deshalb, trotzdem, außerdem* auf Position 1 folgt sofort das Verb' },
        { text: '*Ich weiß nicht, ob ==kommt er==.* → *…, ob er **kommt**.*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Genus & Ausdruck',
      titel: 'Falsche Freunde und falsche Artikel',
      items: [
        { text: '*Ich ==habe== 30 Jahre.* → *Ich **bin** 30 Jahre **alt**.*', gl: '— *tener años* lässt sich nicht wörtlich übertragen' },
        { text: '*==In meiner Meinung== ist das gut.* → ***Meiner Meinung nach** ist das gut.*', gl: '— «en mi opinión» ist keine deutsche Struktur' },
        { text: '*==die== Problem, ==der== Lösung* → ***das** Problem, **die** Lösung*', gl: '— das Genus stimmt oft nicht mit dem Spanischen überein' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen = die Simulation ───────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Artikel & Detailverständnis, Stil Teil 1–2 (empfohlen: 12 Minuten)',
      titel: 'Simulation · Artikel mit 5 Auswahlaufgaben',
      anweisung: 'Lies den Artikel und wähle bei jeder Aufgabe die richtige Antwort: a, b oder c. Timer auf 12 Minuten — das entspricht dem Tempo des echten Moduls. Erst lesen, dann antworten, nichts nachschlagen.',
      absaetze: [
        '**Gemüse mitten in der Stadt** *(ca. 300 Wörter)*',
        'Wer in einer Großstadt lebt, hat selten einen eigenen Garten. Trotzdem wächst in vielen deutschen Städten Gemüse: auf Dächern, in Hinterhöfen und auf Flächen, die lange leer standen. Möglich machen das sogenannte Gemeinschaftsgärten — Gärten, die von einer Gruppe von Nachbarinnen und Nachbarn gemeinsam bepflanzt und gepflegt werden.',
        'Die Idee stammt ursprünglich aus New York und kam in den achtziger Jahren nach Europa. Richtig populär wurde sie in Deutschland aber erst in den letzten fünfzehn Jahren. Heute gibt es nach Schätzungen von Fachleuten mehrere hundert solcher Projekte, und ständig kommen neue dazu. Viele Stadtverwaltungen unterstützen die Gärten, indem sie Flächen günstig oder sogar kostenlos zur Verfügung stellen. Ein typischer Gemeinschaftsgarten hat zwischen zwanzig und hundert Mitglieder; wer mitmachen will, zahlt meist einen kleinen Beitrag und übernimmt dafür feste Aufgaben — vom Gießen bis zum Bau der Beete.',
        'Warum machen so viele Menschen mit? Das eigene Gemüse spielt eine kleinere Rolle, als man denkt. In Umfragen nennen die meisten Teilnehmer an erster Stelle den Kontakt zu anderen: Im Garten treffen sich Studentinnen, Familien und Rentner, die sich sonst nie begegnen würden. Erst danach folgen Gründe wie frische Lebensmittel, Bewegung an der frischen Luft und der Wunsch, etwas für die Umwelt zu tun.',
        'Probleme gibt es trotzdem. Das größte ist die Unsicherheit: Viele Gärten haben nur einen Vertrag für wenige Jahre, weil die Stadt die Fläche später vielleicht für Wohnungen braucht. Wer nicht weiß, ob sein Garten nächstes Jahr noch existiert, pflanzt keine Bäume. Auch die Arbeit selbst wird oft unterschätzt: Ein Garten braucht das ganze Jahr über Pflege, nicht nur im Sommer, und in vielen Projekten bleibt sie an wenigen Aktiven hängen. Fachleute fordern deshalb längere Verträge — denn eines zeigen alle Studien: Gemeinschaftsgärten machen ein Stadtviertel lebenswerter und verbinden Menschen, die vorher nur Tür an Tür gewohnt haben.',
      ],
      optionen: [
        '1. Gemeinschaftsgärten sind Flächen, die … — a) von der Stadtverwaltung bepflanzt werden · b) von einer Gruppe von Nachbarn gemeinsam gepflegt werden · c) nur auf Dächern entstehen',
        '2. Die Idee der Gemeinschaftsgärten … — a) ist in Deutschland seit den achtziger Jahren populär · b) stammt ursprünglich aus New York · c) wurde von deutschen Städten entwickelt',
        '3. Der wichtigste Grund für die meisten Teilnehmer ist … — a) das eigene Gemüse · b) der Kontakt zu anderen Menschen · c) der Umweltschutz',
        '4. In vielen Gärten pflanzt man keine Bäume, weil … — a) die Verträge nur für wenige Jahre gelten · b) die Stadt es verbietet · c) die Mitglieder zu wenig Zeit haben',
        '5. Die Pflege der Gärten … — a) ist nur im Sommer nötig · b) wird von der Stadtverwaltung übernommen · c) bleibt oft an wenigen Aktiven hängen',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — „von einer Gruppe von Nachbarinnen und Nachbarn gemeinsam bepflanzt und gepflegt“. Die Stadt stellt nur Flächen bereit (a), und Dächer sind nur ein Ort von mehreren (c).',
        '2. **b** — „stammt ursprünglich aus New York“. Vorsicht bei a: In den achtziger Jahren kam die Idee nach *Europa*; populär in Deutschland wurde sie erst „in den letzten fünfzehn Jahren“.',
        '3. **b** — „nennen die meisten Teilnehmer an erster Stelle den Kontakt zu anderen“. Gemüse und Umwelt kommen „erst danach“ — genau diese Rangfolge wird geprüft.',
        '4. **a** — „Wer nicht weiß, ob sein Garten nächstes Jahr noch existiert, pflanzt keine Bäume“ — und davor steht der Grund: Verträge „nur für wenige Jahre“. Ein Verbot (b) steht nirgends im Text.',
        '5. **c** — „bleibt sie an wenigen Aktiven hängen“. Der Text sagt ausdrücklich: Pflege „das ganze Jahr über …, nicht nur im Sommer“ — a ist das Gegenteil.',
      ],
      kommentar: 'Merke die Methode: Die falschen Optionen klingen **plausibel**, stehen aber nicht im Text — oder verdrehen ein Detail (Europa ≠ Deutschland, Sommer ≠ ganzes Jahr). Entscheide immer mit der Textstelle, nie mit dem eigenen Weltwissen.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Hören',
      modul: 'Hören · Vortrag, Stil Teil 4 (empfohlen: 8 Minuten)',
      titel: 'Simulation · Vortrag mit 4 Auswahlaufgaben',
      anweisung: 'Lass dir das Transkript von jemandem **in normalem Tempo vorlesen** — oder nimm es selbst auf und höre die Aufnahme später mit Kopfhörern. Höre nur **einmal**, ohne zurückzuspulen. Lies die vier Aufgaben **vor** dem Hören und wähle danach jeweils die richtige Lösung: a, b oder c.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio)~~ *(ca. 180 Wörter)*: Herzlich willkommen zu unserer Reihe „Mobilität von morgen“. Mein Thema heute: Carsharing — das organisierte Teilen von Autos.\nDas Prinzip ist einfach: Man meldet sich einmal bei einem Anbieter an, reserviert ein Auto per App und zahlt nur für die Zeit, die man wirklich fährt. Ein eigenes Auto steht dagegen im Durchschnitt 23 Stunden am Tag ungenutzt herum — und kostet trotzdem jeden Monat Geld: Versicherung, Reparaturen, Parkplatz.\nWer profitiert am meisten? Nach den Zahlen der Anbieter sind es Menschen in großen Städten, die nur selten ein Auto brauchen — etwa für den Wochenendeinkauf oder einen Ausflug. Für Pendler, die jeden Tag zur Arbeit fahren, lohnt sich Carsharing dagegen meistens nicht; für sie bleibt das eigene Auto oder die Bahn günstiger.\nEin Problem will ich dabei nicht verschweigen: Auf dem Land funktioniert das Modell bisher kaum, weil es dort zu wenige Nutzer gibt. Carsharing ersetzt das eigene Auto also nicht überall. Aber in der Stadt kann ein geteiltes Auto bis zu zehn private Autos ersetzen — und das bedeutet vor allem eines: mehr Platz für alle, auf den Straßen wie auf den Parkplätzen.',
      ],
      optionen: [
        '1. Ein privates Auto … — a) wird im Durchschnitt 23 Stunden am Tag genutzt · b) steht die meiste Zeit ungenutzt herum · c) kostet nur dann Geld, wenn man es fährt',
        '2. Carsharing lohnt sich am meisten für … — a) Menschen in großen Städten, die selten ein Auto brauchen · b) Pendler, die täglich zur Arbeit fahren · c) Familien auf dem Land',
        '3. Für Pendler ist nach dem Vortrag … — a) Carsharing meistens die günstigste Lösung · b) das eigene Auto oder die Bahn meistens günstiger · c) das Fahrrad die beste Alternative',
        '4. Ein geteiltes Auto kann in der Stadt … — a) höchstens zwei private Autos ersetzen · b) das Parkproblem nicht lösen · c) bis zu zehn private Autos ersetzen',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — es „steht … im Durchschnitt 23 Stunden am Tag ungenutzt herum“. Klassische Falle in a: Die Zahl stimmt, aber die Aussage dreht ihre Bedeutung um (*genutzt* statt *ungenutzt*). ~~El audio dice el número correcto — pero con el significado contrario.~~ Und c widerspricht dem Text: Das eigene Auto „kostet trotzdem jeden Monat Geld“.',
        '2. **a** — „Menschen in großen Städten, die nur selten ein Auto brauchen“. Für Pendler (b) lohnt es sich ausdrücklich „meistens nicht“.',
        '3. **b** — „für sie bleibt das eigene Auto oder die Bahn günstiger“. Vom Fahrrad (c) ist im Vortrag gar keine Rede.',
        '4. **c** — „kann ein geteiltes Auto bis zu zehn private Autos ersetzen“ — und die Folge ist „mehr Platz … auf den Parkplätzen“, also das Gegenteil von b.',
      ],
      kommentar: 'Beim Hören entscheiden oft **einzelne kleine Wörter**: *ungenutzt*, *nicht*, *meistens*. Lies die Aufgaben vorher und markiere dir, worauf du hören musst — Zahlen, Personen, Bewertungen. Und wie in Lektion 26 gilt: Die Aufgaben folgen der Reihenfolge des Vortrags.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 1 · Forumsbeitrag (~150 Wörter, empfohlen: 50 Minuten)',
      titel: 'Simulation · Forumsbeitrag',
      anweisung: 'Tippe am Computer (ohne Rechtschreibkorrektur), Timer auf 50 Minuten. Vergleiche erst **nach** deiner eigenen Korrektur (siehe unten) mit der Möglichen Lösung.',
      absaetze: [
        'Sie lesen in einem Online-Forum eine Diskussion zum Thema **„Sollten Geschäfte auch sonntags öffnen dürfen?“** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter): **Äußern Sie Ihre Meinung** · **nennen Sie Vor- und Nachteile** · **berichten Sie von eigenen Erfahrungen** · **ziehen Sie ein Fazit oder machen Sie einen Vorschlag**.',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 150 Wörter)',
      loesungen: [
        'In meiner Heimatstadt sind die Geschäfte sonntags geschlossen, und ehrlich gesagt finde ich das gut so — auch wenn es manchmal unpraktisch ist, zum Beispiel wenn der Kühlschrank am Wochenende plötzlich leer ist.',
        'Natürlich hat eine Öffnung am Sonntag Vorteile: Wer in der Woche lange arbeitet, könnte dann entspannt einkaufen, und die Innenstädte hätten mehr Besucher. Dagegen spricht aber vor allem, dass dann Tausende Verkäuferinnen und Verkäufer am Wochenende arbeiten müssten. Ein gemeinsamer freier Tag ist für Familien wichtiger als offene Läden.',
        'Ich habe zwei Jahre in Spanien gelebt, wo viele Geschäfte auch sonntags öffnen. Praktisch war das schon — aber gebraucht habe ich es selten, weil man den Einkauf gut planen kann.',
        'Deshalb bin ich gegen eine generelle Öffnung. Ein guter Kompromiss wären einige verkaufsoffene Sonntage im Jahr, zum Beispiel vor Weihnachten oder zu Stadtfesten. So bleibt der Sonntag ein Ruhetag, ohne dass der Handel ganz auf das Geschäft verzichten muss.',
      ],
      kommentar: 'Auch die **Gegenposition** ist völlig gültig — bewertet wird nicht deine Meinung, sondern **Erfüllung, Kohärenz, Wortschatz und Strukturen**. Prüfe vor der Abgabe: alle vier Leitpunkte behandelt? Konnektoren gesetzt? Wortzahl ungefähr erreicht?',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug: die Selbstkorrektur ─────────────────────
    {
      type: 'prose',
      eyebrow: 'Prüfungsbezug — Die Selbstkorrektur',
      card: true,
      titel: 'Korrigiere wie ein Prüfer: drei Durchgänge',
      absaetze: [
        'Am Tag nach der Simulation korrigierst du deinen Forumsbeitrag in drei Durchgängen. **Erstens — als Prüfer lesen:** Bewerte den Text mit der Rubrik unten, Kriterium für Kriterium, je 0 bis 5 Punkte. **Zweitens — Fehlerjagd:** Geh Satz für Satz durch und markiere jeden Fehler mit seiner Kategorie (Verbstellung, Genus, Endung, Ausdruck, Kongruenz). **Drittens — Fehlerliste:** Schreib jeden Fehler mit der korrigierten Version auf deine Liste. ~~Cada error entra una sola vez en la lista — el objetivo es no volver a verlo.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Vereinfachte Rubrik (je 0–5 Punkte)',
      kopf: ['Kriterium', 'Leitfrage', 'Warnsignal'],
      zeilen: [
        ['Erfüllung', 'Habe ich alle Leitpunkte behandelt — im richtigen Format und Umfang?', 'ein Leitpunkt fehlt · deutlich unter 150 Wörtern · klingt wie ein Brief statt wie ein Forumsbeitrag'],
        ['Kohärenz', 'Führt ein roter Faden durch den Text? Verbinden Konnektoren die Sätze und Absätze?', 'Gedankensprünge · jeder Satz beginnt mit *Ich* · kein einziges *deshalb, trotzdem, außerdem*'],
        ['Wortschatz', 'Ist der Wortschatz passend und variiert?', 'dreimal *gut*, dreimal *wichtig* · vage Verben (*machen, sein*) · wörtliche Übersetzungen aus dem Spanischen'],
        ['Strukturen', 'Nutze ich B2-Strukturen korrekt — Nebensätze, Konnektoren, Konjunktiv II?', 'nur Hauptsätze · Verb nach *weil* nicht am Ende · fehlende Inversion nach *deshalb*'],
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — Korrigierter Lernertext',
      thema: 'Auszug aus einem Forumsbeitrag zum selben Thema — mit sechs typischen Fehlern spanischsprachiger B2-Kandidaten',
      woerter: 'Auszug, ca. 60 Wörter · Fehler markiert, darunter korrigiert und kommentiert',
      absaetze: [
        '==In meiner Meinung== sollten die Geschäfte am Sonntag öffnen. Viele Leute arbeiten die ganze Woche, ==deshalb sie haben== nur am Wochenende Zeit zum Einkaufen. Das ist ==ein Problem, die== wir lösen müssen. Ich glaube, dass die Mehrheit der Kunden das ==wollen==. Aber der Sonntag ist auch wichtig, weil die Familien ==können== zusammen Zeit ==passieren==. Vielleicht ist ein Kompromiss die beste Lösung.',
      ],
      annotationen: [
        { tag: 'Ausdruck · Calco', text: '*In meiner Meinung* ist «en mi opinión» Wort für Wort. Richtig: **„Meiner Meinung nach sollten die Geschäfte …“**' },
        { tag: 'Wortstellung · Inversion', text: 'Nach *deshalb* auf Position 1 folgt sofort das Verb: **„deshalb haben sie nur am Wochenende Zeit“** (Lektion 4). ~~En español el orden no cambia tras «por eso» — en alemán, siempre.~~' },
        { tag: 'Genus · Relativpronomen', text: '*das Problem* ist Neutrum — das Relativpronomen richtet sich danach: **„ein Problem, das wir lösen müssen“** (Lektion 12).' },
        { tag: 'Kongruenz', text: '*die Mehrheit* ist Singular: **„dass die Mehrheit der Kunden das will“**.' },
        { tag: 'Wortstellung · Nebensatz', text: 'Nach *weil* steht das Verb am Ende: **„weil die Familien zusammen Zeit verbringen können“**.' },
        { tag: 'Ausdruck · Calco', text: '*Zeit passieren* ist «pasar tiempo» wörtlich. Die deutsche Kollokation: **„Zeit verbringen“**.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Reserviere in der echten Prüfung die **letzten fünf Minuten** jeder Schreibaufgabe für eine Mini-Korrektur — und prüfe dann nur deine **zwei häufigsten Fehlertypen** von der Fehlerliste, nicht alles. Wer gezielt nach Verbstellung und Genus sucht, findet fast immer zwei Fehler — und zwei korrigierte Fehler können beim Kriterium „Strukturen“ den Unterschied machen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Simulation = reale Bedingungen', 'Timer, kein Wörterbuch, möglichst digital (Bildschirm, Kopfhörer, Tastatur)'],
        ['Kein Feld bleibt leer', 'eine begründete Vermutung ist besser als null Punkte'],
        ['Korrektur erst am Folgetag', 'mit frischem Blick — als Prüfer, nicht als Autor'],
        ['Vier Kriterien, je 0–5 Punkte', 'Erfüllung · Kohärenz · Wortschatz · Strukturen'],
        ['Fehler bekommen Namen', 'Verbstellung, Genus, Endung, Ausdruck, Kongruenz'],
        ['Fehlerliste führen', 'jeder Fehler einmal — mit der korrigierten Version daneben'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich habe die drei Simulationsaufgaben unter Zeitdruck und ohne Hilfsmittel bearbeitet.',
        'Ich habe meinen Forumsbeitrag mit der Vier-Kriterien-Rubrik bewertet.',
        'Ich kann jeden gefundenen Fehler einer Kategorie zuordnen und benennen.',
        'Meine Fehlerliste ist angelegt — mit meinen zwei häufigsten Fehlertypen ganz oben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die erste Generalprobe hat dir gezeigt, **wo** du stehst; die Fehlerliste zeigt dir, **woran** du arbeitest. In der letzten Lektion folgt die zweite Simulation: Meinungen zuordnen (Lesen Teil 3), ein kompletter Vortrag fürs Sprechen und die formelle Nachricht. Dazu bekommst du den Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',
    },
  ],
}
