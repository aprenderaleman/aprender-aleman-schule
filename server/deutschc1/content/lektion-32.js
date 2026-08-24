// Lektion 32 · Themenfeld: Arbeitswelt & Work-Life-Balance
//
// Bloque 3 «Themenfelder» — Homeoffice, Fachkräftemangel, Vier-Tage-Woche,
// Burnout, Vereinbarkeit von Familie und Beruf.

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Sprechen Teil 1 · Schreiben Teil 1'],
  h1: 'Arbeitswelt & Work-Life-Balance',
  lead: 'Homeoffice, Fachkräftemangel, Vier-Tage-Woche: Wie wollen wir arbeiten? Das Themenfeld, das jede Prüfungsdiskussion erreichen kann — mit Wortschatz, Fakten und beiden Seiten jeder Debatte.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die Umbrüche der Arbeitswelt — Homeoffice, Flexibilisierung, Fachkräftemangel — mit präzisem Fachwortschatz beschreiben.',
        'Du beherrschst 14 Schlüsselwörter des Themenfelds mit ihren typischen Kollokationen.',
        'Du führst die Debatte um die Vier-Tage-Woche mit Argumenten beider Seiten und beziehst begründet Position.',
        'Du hältst einen strukturierten Vortrag über Vereinbarkeit von Familie und Beruf nach dem Format von Sprechen Teil 1.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Homeoffice', kollokation: 'im Homeoffice arbeiten', es: 'teletrabajo' },
        { wort: 'der Fachkräftemangel', kollokation: 'dem Fachkräftemangel entgegenwirken', es: 'escasez de mano de obra cualificada' },
        { wort: 'die Vier-Tage-Woche', kollokation: 'die Vier-Tage-Woche erproben', es: 'semana laboral de cuatro días' },
        { wort: 'die Vereinbarkeit', kollokation: 'die Vereinbarkeit von Familie und Beruf verbessern', es: 'conciliación' },
        { wort: 'die Belastung', kollokation: 'einer hohen Belastung ausgesetzt sein', es: 'carga, presión' },
        { wort: 'das Burnout', kollokation: 'an einem Burnout erkranken', es: 'síndrome de desgaste profesional' },
        { wort: 'die Erreichbarkeit', kollokation: 'ständige Erreichbarkeit erwarten', es: 'disponibilidad (estar localizable)' },
        { wort: 'die Flexibilisierung', kollokation: 'die Flexibilisierung der Arbeitszeiten', es: 'flexibilización' },
        { wort: 'die Produktivität', kollokation: 'die Produktivität konstant halten', es: 'productividad' },
        { wort: 'die Teilzeit', kollokation: 'in Teilzeit wechseln', es: 'jornada parcial' },
        { wort: 'die Elternzeit', kollokation: 'Elternzeit nehmen bzw. beantragen', es: 'permiso parental' },
        { wort: 'die Kündigung', kollokation: 'die Kündigung einreichen', es: 'renuncia, despido' },
        { wort: 'die Arbeitsbedingungen (Pl.)', kollokation: 'attraktive Arbeitsbedingungen bieten', es: 'condiciones laborales' },
        { wort: 'die Grenze', kollokation: 'die Grenze zwischen Arbeit und Privatleben verwischen', es: 'límite, frontera' },
      ],
      hinweis: 'Falscher Freund: **die Karriere** meint den beruflichen Aufstieg, nie das Studium ~~«hacer la carrera» = *studieren*; *Karriere machen* = ascender profesionalmente~~. Und im Homeoffice arbeitet man **im** Homeoffice — nicht *von* oder *auf*.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die Arbeitswelt im Umbruch — das Spielfeld',
      absaetze: [
        'Zwei Kräfte treiben die Debatte. Erstens der **demografische Wandel**: Die geburtenstarken Jahrgänge gehen in Rente, und der __Fachkräftemangel__ erfasst Handwerk, Pflege und IT gleichermaßen — das __Institut für Arbeitsmarkt- und Berufsforschung (IAB)__ dokumentiert ihn fortlaufend. Plötzlich werben Betriebe um Beschäftigte statt umgekehrt, und Arbeitsbedingungen werden zum Wettbewerbsfaktor.',
        'Zweitens die **Flexibilisierung** durch die Digitalisierung: Das Homeoffice hat sich in vielen Büroberufen etabliert, doch mit ihm **verwischt die Grenze** zwischen Arbeit und Privatleben — Stichwort ständige __Erreichbarkeit__. Den rechtlichen Rahmen setzen das __Arbeitszeitgesetz__ (Höchstarbeitszeiten, Ruhezeiten) und Instrumente wie __Elternzeit__ und __Elterngeld__, die die Vereinbarkeit von Familie und Beruf absichern sollen. In der Realität bleibt die Teilzeitquote von Müttern allerdings um ein Vielfaches höher als die von Vätern — der Kern jeder Diskussion über Vereinbarkeit.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Debattenfelder',
      steps: [
        {
          badge: 'Debatte 1',
          titel: 'Homeoffice — Freiheit oder Entgrenzung?',
          text: '**Pro:** entfallende Pendelwege, konzentrierteres Arbeiten, bessere Vereinbarkeit, größerer Bewerberkreis für Unternehmen. **Contra:** Die Arbeit wandert ins Wohnzimmer und kennt keinen Feierabend mehr — die __Entgrenzung__ der Arbeit; dazu schwindende Bindung ans Team und die Sorge, im Homeoffice bei Beförderungen übersehen zu werden.',
        },
        {
          badge: 'Debatte 2',
          titel: 'Vier-Tage-Woche — weniger ist mehr?',
          text: 'Die Formel der Befürworter lautet meist „100-80-100“: voller Lohn, 80 Prozent der Zeit, volle Leistung. **Pro:** Pilotprojekte in mehreren Ländern melden gleichbleibende __Produktivität__ bei sinkendem Krankenstand und höherer Zufriedenheit. **Contra:** In Pflege, Handwerk und Produktion lässt sich Arbeit nicht einfach verdichten; bei akutem Fachkräftemangel sei kollektive Arbeitszeitverkürzung das falsche Signal.',
        },
        {
          badge: 'Debatte 3',
          titel: 'Gesundheit und Vereinbarkeit',
          text: 'Psychische Erkrankungen zählen zu den häufigsten Ursachen langer Krankschreibungen; __Burnout__ ist vom Modewort zur anerkannten Gefahr geworden. Gegenmittel in der Debatte: ein „Recht auf Nichterreichbarkeit“, verlässliche Arbeitszeiten, mehr Ganztagsbetreuung — und eine gerechtere Aufteilung der Sorgearbeit zwischen den Geschlechtern.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Begriffe und Institutionen im Überblick',
      kopf: ['Begriff', 'Was dahintersteckt'],
      zeilen: [
        ['Fachkräftemangel', 'demografisch bedingter Mangel an qualifizierten Arbeitskräften (IAB)'],
        ['Arbeitszeitgesetz', 'regelt Höchstarbeitszeiten und Ruhezeiten in Deutschland'],
        ['Elternzeit / Elterngeld', 'Auszeit mit Rückkehrrecht + staatliche Lohnersatzleistung'],
        ['Entgrenzung', 'die Grenze zwischen Arbeit und Privatleben löst sich auf'],
        ['100-80-100', 'Formel der Vier-Tage-Woche: voller Lohn, 80 % Zeit, volle Leistung'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Übernehmen',
      kicker: 'Homeoffice',
      titel: 'Über mobiles Arbeiten sprechen',
      items: [
        { text: 'Das **Homeoffice** hat sich vom Ausnahmefall zum festen Bestandteil vieler Büroberufe entwickelt.', gl: '— *sich entwickeln vom … zum …*: describe evoluciones con elegancia' },
        { text: 'Viele Beschäftigte empfinden die eingesparte Pendelzeit als unmittelbaren Zugewinn an Lebensqualität.' },
        { text: 'Zugleich **verwischt die Grenze** zwischen Arbeit und Privatleben, wenn der Laptop auf dem Küchentisch steht.' },
        { text: 'Die Erwartung ständiger **Erreichbarkeit** macht den Feierabend für viele zur bloßen Theorie.', gl: '— *zur bloßen Theorie werden*: ironía de registro alto' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Arbeitsmarkt',
      titel: 'Fachkräftemangel und Vier-Tage-Woche',
      items: [
        { text: 'Der **Fachkräftemangel** verschiebt die Machtverhältnisse auf dem Arbeitsmarkt zugunsten der Beschäftigten.', gl: '— *zugunsten + Gen.*: «a favor de»' },
        { text: 'Um dem Mangel **entgegenzuwirken**, setzen Betriebe auf Zuwanderung, Weiterbildung und attraktivere **Arbeitsbedingungen**.' },
        { text: 'Befürworter der **Vier-Tage-Woche** verweisen darauf, dass ausgeruhte Beschäftigte in kürzerer Zeit dieselbe Leistung erbringen.' },
        { text: 'Skeptiker wenden ein, dass sich Arbeit in der Pflege oder auf dem Bau nicht beliebig verdichten lässt.', gl: '— *einwenden, dass…*: introduce la objeción con precisión' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gesundheit & Familie',
      titel: 'Belastung und Vereinbarkeit',
      items: [
        { text: 'Wer dauerhaft einer hohen **Belastung ausgesetzt ist**, riskiert langfristig seine Gesundheit — **Burnout** ist keine Modediagnose, sondern eine reale Gefahr.' },
        { text: 'Die **Vereinbarkeit** von Familie und Beruf entscheidet sich weniger an schönen Worten als an Betreuungsplätzen und verlässlichen Arbeitszeiten.' },
        { text: 'Solange vor allem Mütter in **Teilzeit** wechseln, bleibt die partnerschaftliche Aufteilung der Sorgearbeit ein Versprechen.' },
        { text: 'Immer mehr Väter nehmen **Elternzeit** — allerdings meist nur für die Mindestdauer.' },
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Beispiele — Register im Vergleich',
      titel: 'Derselbe Gedanke, zwei Register',
      zeilen: [
        { satz: 'Viele Leute sind gestresst, weil sie zu viel arbeiten müssen.', label: 'B2 — verständlich, aber flach' },
        { satz: 'Die zunehmende Entgrenzung der Arbeit setzt viele Beschäftigte einer erheblichen psychischen Belastung aus.', label: 'C1 — nominal, präzise, thematischer Fachwortschatz' },
        { satz: 'Homeoffice ist praktisch, weil man nicht zur Arbeit fahren muss.', label: 'B2' },
        { satz: 'Der Wegfall des Pendelns verschafft Beschäftigten im Homeoffice einen spürbaren Zugewinn an Lebensqualität.', label: 'C1 — *der Wegfall*: nominalización rentable' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld Arbeit',
      gruppen: [
        {
          fn: 'Position beziehen',
          saetze: [
            { satz: 'Ich halte die Vier-Tage-Woche für einen vielversprechenden Ansatz, sofern sie branchenspezifisch ausgestaltet wird.' },
            { satz: 'Für mich steht außer Frage, dass gute Arbeitsbedingungen im Wettbewerb um Fachkräfte den Ausschlag geben.', gloss: '— *den Ausschlag geben*: ser el factor decisivo' },
          ],
        },
        {
          fn: 'Relativieren und differenzieren',
          saetze: [
            { satz: 'Was in einem Großraumbüro funktioniert, lässt sich nicht ohne Weiteres auf eine Pflegestation übertragen.' },
            { satz: 'Man sollte allerdings nicht übersehen, dass Flexibilität für die einen Freiheit bedeutet und für die anderen Entgrenzung.' },
          ],
        },
        {
          fn: 'Eigene Erfahrung einbringen',
          saetze: [
            { satz: 'Aus eigener Erfahrung kann ich bestätigen, wie schnell das Wohnzimmer zum Büro wird — und der Feierabend zur Verhandlungssache.' },
            { satz: 'In meinem Heimatland wird diese Debatte ganz anders geführt, was vor allem an der Arbeitskultur liegt.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Ergänze das passende Wort oder Verb aus dem Kernwortschatz.',
      aufgaben: [
        'dem Fachkräftemangel … (Verb mit Dativ)',
        'einer hohen Belastung … sein',
        'die Grenze zwischen Arbeit und Privatleben …',
        'Elternzeit … bzw. …',
        'die Vereinbarkeit … Familie und Beruf (Präposition!)',
        '… Homeoffice arbeiten (Präposition!)',
      ],
      loesungen: [
        'dem Fachkräftemangel **entgegenwirken** — Verb mit Dativ, wie *begegnen*',
        'einer hohen Belastung **ausgesetzt** sein — *ausgesetzt sein* + Dat.',
        'die Grenze zwischen Arbeit und Privatleben **verwischen**',
        'Elternzeit **nehmen** bzw. **beantragen**',
        'die Vereinbarkeit **von** Familie und Beruf — ~~no «zwischen»: la colocación fija es *Vereinbarkeit von X und Y*~~',
        '**im** Homeoffice arbeiten',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Forme die einfachen Sätze in C1-Sätze um. Nutze das angegebene Wort aus dem Kernwortschatz.',
      aufgaben: [
        'Es gibt nicht genug Pflegekräfte und Handwerker. (der Fachkräftemangel)',
        'Viele Leute müssen auch abends noch Mails beantworten. (die Erreichbarkeit)',
        'Wer zu viel arbeitet, kann krank werden. (das Burnout)',
        'Mit Kindern ist es schwer, voll zu arbeiten. (die Vereinbarkeit)',
        'Die Firmen müssen ihren Mitarbeitern mehr bieten. (die Arbeitsbedingungen)',
      ],
      loesungen: [
        'Der **Fachkräftemangel** trifft Pflege und Handwerk mit besonderer Härte.',
        'Die Erwartung ständiger **Erreichbarkeit** höhlt den Feierabend zunehmend aus. ~~*aushöhlen* = «vaciar de contenido»: verbo C1 muy expresivo.~~',
        'Dauerhafte Überlastung erhöht das Risiko, an einem **Burnout** zu erkranken.',
        'Die **Vereinbarkeit** von Familie und Beruf scheitert häufig an fehlenden Betreuungsangeboten.',
        'Wer Fachkräfte gewinnen will, muss attraktive **Arbeitsbedingungen** bieten.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen argumentativen Absatz (80-100 Wörter) zur Frage „Sollten Unternehmen die Vier-Tage-Woche einführen?“. Verwende mindestens vier Kernwörter, ein Redemittel des Differenzierens und einen Verweis auf Pilotprojekte.',
      loesung: '**Mögliche Lösung** (auch ein klares Ja oder Nein ist gültig, wenn es differenziert begründet wird):\n*Pilotprojekte in mehreren Ländern deuten darauf hin, dass eine Vier-Tage-Woche die Produktivität keineswegs senken muss: Ausgeruhte Beschäftigte arbeiten konzentrierter, der Krankenstand sinkt, und im Wettbewerb um Fachkräfte werden attraktive Arbeitsbedingungen ohnehin zum entscheidenden Faktor. Man sollte allerdings nicht übersehen, dass sich Arbeit in der Pflege oder im Handwerk nicht beliebig verdichten lässt — was im Büro funktioniert, ist dort kaum übertragbar. Ich plädiere deshalb für branchenspezifische Modelle statt einer pauschalen Lösung: Die Vier-Tage-Woche sollte erprobt werden, wo sie machbar ist, ohne den Fachkräftemangel andernorts zu verschärfen.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 · Vortrag (ca. 4 Minuten)',
      titel: 'Vortragsthema: „Homeoffice — Arbeitsmodell der Zukunft?“',
      anweisung: 'Im echten Teil 1 hältst du einen Vortrag: Thema vorstellen, Situation im Heimatland beschreiben, Vor- und Nachteile abwägen, begründete Meinung formulieren. Hier die Modellgliederung mit ausformulierten Kernsätzen — lerne die Gelenkstellen, nicht den Text.',
      absaetze: [
        'Baue deinen Vortrag aus den vier bekannten Bausteinen: **Einstieg**, **Situation im Heimatland**, **Abwägung**, **Fazit**. Nutze dabei mindestens fünf Wörter aus dem Kernwortschatz dieser Lektion.',
      ],
      loesungen: [
        '**Einstieg:** „In meinem Vortrag geht es um die Frage, ob das Homeoffice das Arbeitsmodell der Zukunft ist. Spätestens seit sich mobiles Arbeiten in vielen Büroberufen etabliert hat, betrifft diese Frage Millionen von Beschäftigten.“',
        '**Heimatland:** „In meinem Heimatland ist das Homeoffice bislang eher die Ausnahme; viele Arbeitgeber setzen weiterhin auf Präsenzkultur, was vor allem Beschäftigte mit langen Pendelwegen belastet.“',
        '**Abwägung:** „Auf der einen Seite verbessert das Homeoffice die Vereinbarkeit von Familie und Beruf und erspart tägliches Pendeln. Auf der anderen Seite verwischt die Grenze zwischen Arbeit und Privatleben, und die Erwartung ständiger Erreichbarkeit kann zur echten Belastung werden.“',
        '**Fazit:** „Alles in allem halte ich hybride Modelle für die überzeugendste Lösung: einige Tage im Betrieb für Austausch und Zusammenhalt, die übrigen im Homeoffice — vorausgesetzt, klare Regeln schützen den Feierabend.“',
      ],
      kommentar: 'Beachte, wie die Abwägung mit Kernwortschatz arbeitet (*Vereinbarkeit*, *verwischen*, *Erreichbarkeit*, *Belastung*): Beim Kriterium „Wortschatz“ zählt genau dieses themenspezifische Vokabular — nicht die Länge des Vortrags.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Arbeitswelt ist das Themenfeld, in dem persönliche Beispiele am natürlichsten wirken — nutze das im **Vortrag** und in der **Diskussion**. Aber halte die Balance: ein Beispiel aus eigener Erfahrung, dann sofort zurück zur allgemeinen Ebene (*Das zeigt exemplarisch, dass …*). Wer nur erzählt, statt zu argumentieren, verliert Punkte bei der Aufgabenbewältigung.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Merksatz'],
      zeilen: [
        ['Fachkräftemangel', 'demografischer Wandel verschiebt die Macht zugunsten der Beschäftigten'],
        ['Homeoffice', 'Freiheit und Vereinbarkeit vs. Entgrenzung und ständige Erreichbarkeit'],
        ['Vier-Tage-Woche', '100-80-100 — überzeugend im Büro, schwierig in Pflege und Handwerk'],
        ['Vereinbarkeit', 'entscheidet sich an Betreuung, Arbeitszeiten und Aufteilung der Sorgearbeit'],
        ['Kollokationen', 'im Homeoffice arbeiten · dem Mangel entgegenwirken · Elternzeit nehmen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann die Umbrüche der Arbeitswelt mit fünf Fachbegriffen präzise beschreiben.',
        'Ich verwende die 14 Kernwörter mit der richtigen Kollokation und Präposition.',
        'Ich kann die Vier-Tage-Woche-Debatte von beiden Seiten führen und differenziert Position beziehen.',
        'Ich habe einen kompletten Vortrag zum Homeoffice mit allen vier Bausteinen parat.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Ständige Erreichbarkeit, verschwimmende Grenzen — vieles davon spielt sich auf dem Smartphone ab. Das nächste Themenfeld sind die **Medien und sozialen Netzwerke**: Meinungsbildung, Desinformation, Influencer-Kultur und der öffentlich-rechtliche Rundfunk. Dort wird aus der Frage „Wie wollen wir arbeiten?“ die Frage „Wem glauben wir eigentlich?“.',
    },
  ],
}
