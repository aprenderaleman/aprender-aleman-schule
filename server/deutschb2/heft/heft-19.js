// Übungsheft B2 — Lektion 19: Lesen: Artikel & Detailverständnis
export default {
  lektion: 19,
  titel: 'Übungsheft — Artikel & Detailverständnis',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Mengenangaben, Paraphrasen und typische Strukturen aus Zeitungsartikeln: Wähle jeweils die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Laut einer aktuellen {1} arbeitet die Mehrheit der {2} lieber an zwei Tagen pro Woche zu Hause.',
          bank: ['Umfrage', 'Beschäftigten', 'Beschäftigte', 'Mehrheit'],
          loesungen: { 1: 'Umfrage', 2: 'Beschäftigten' },
        },
        {
          typ: 'luecke',
          text: 'Aufgabe 3 bezieht sich {1} den zweiten Absatz. Im Gegensatz {2} Absatz 1 nennt dieser Absatz konkrete Zahlen.',
          bank: ['auf', 'zu', 'an', 'für'],
          loesungen: { 1: 'auf', 2: 'zu' },
        },
        {
          typ: 'mc',
          frage: 'Im Text steht: „Kaum jemand nutzt die neue App.“ Welche Paraphrase gibt die Textstelle richtig wieder?',
          optionen: ['Fast niemand nutzt die neue App.', 'Viele nutzen die neue App nur selten.', 'Die neue App wird kaum noch angeboten.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Im Text steht: „Nur die wenigsten Befragten verzichten ganz auf das Auto.“ Was bedeutet das?',
          optionen: ['Die meisten Befragten verzichten auf das Auto.', 'Die meisten Befragten nutzen zumindest manchmal ein Auto.', 'Die wenigsten Befragten besitzen ein Auto.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die Firma hat feste Bürotage eingeführt, ___ viele Beschäftigte lieber zu Hause arbeiten.',
          optionen: ['weil', 'damit', 'obwohl'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Die Umfrage {1} im März unter 2 000 Beschäftigten durchgeführt. Die Ergebnisse {2} gestern veröffentlicht worden.',
          bank: ['wurde', 'sind', 'ist', 'haben'],
          loesungen: { 1: 'wurde', 2: 'sind' },
        },
        {
          typ: 'zuordnen',
          links: ['kaum jemand', 'die deutliche Mehrheit', 'nicht mehr hergeben wollen', 'auf etwas verzichten', 'im Gegensatz zu'],
          rechts: ['fast niemand', 'die meisten', 'behalten möchten', 'ohne etwas auskommen', 'anders als'],
          loesung: {
            'kaum jemand': 'fast niemand',
            'die deutliche Mehrheit': 'die meisten',
            'nicht mehr hergeben wollen': 'behalten möchten',
            'auf etwas verzichten': 'ohne etwas auskommen',
            'im Gegensatz zu': 'anders als',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Im Gegensatz von Absatz 1 nennt Absatz 2 konkrete Zahlen.', 'Im Gegensatz zu Absatz 1 nennt Absatz 2 konkrete Zahlen.'],
          loesung: 1,
          warum: '«A diferencia de» se dice **im Gegensatz zu** + dativo; *von* es un calco del «de» español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Frage bezieht sich auf den zweiten Absatz.', 'Die Frage bezieht sich zu dem zweiten Absatz.'],
          loesung: 0,
          warum: '*Sich beziehen* rige **auf** + acusativo, aunque en español digas «referirse a».',
        },
        {
          typ: 'satzbau',
          woerter: ['bezieht', 'Ich', 'Frage', 'nicht', 'worauf', 'sich', 'weiß', 'die'],
          loesung: 'Ich weiß nicht, worauf sich die Frage bezieht.',
          alt: ['Ich weiß nicht, worauf die Frage sich bezieht.', 'Worauf sich die Frage bezieht, weiß ich nicht.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug und löse die Aufgaben. Achte besonders auf Mengenangaben und Paraphrasen.',
      textTitel: 'Artikelauszug: Mittagspause ohne Schnitzel?',
      text: 'Laut einer aktuellen Umfrage unter 1 500 Beschäftigten essen immer mehr Menschen in der Kantine vegetarisch. Fast die Hälfte der Befragten wählt mindestens zweimal pro Woche ein Gericht ohne Fleisch; vor fünf Jahren war es nur jeder Fünfte. Ganz auf Fleisch verzichten möchten allerdings die wenigsten. Die Kantinen reagieren unterschiedlich auf diesen Trend. Ein großer Betrieb in Norddeutschland bietet seit Januar jeden Tag zwei vegetarische Gerichte an, aber weiterhin auch eines mit Fleisch. Im Gegensatz dazu hat eine Stadtverwaltung in Süddeutschland ihren „Veggie-Tag“ wieder abgeschafft: Die Beschäftigten hatten sich beschwert, weil sie an diesem Tag nicht selbst wählen durften. Für die Kantinen ist das Thema auch eine Kostenfrage. Gemüsegerichte sind in der Regel günstiger im Einkauf, brauchen aber mehr Zeit in der Küche. Eine Köchin aus dem norddeutschen Betrieb sagt: „Die Gäste sind kritischer geworden. Ein trockener Gemüsestrudel reicht heute nicht mehr.“ Die Mehrheit der Befragten wünscht sich vor allem eines: frische Zutaten und mehr Auswahl.',
      items: [
        {
          typ: 'mc',
          frage: 'Was zeigt die Umfrage?',
          optionen: [
            'Die meisten Befragten möchten ganz auf Fleisch verzichten.',
            'Vor fünf Jahren aß die Hälfte der Befragten regelmäßig vegetarisch.',
            'Fast die Hälfte der Befragten isst mindestens zweimal pro Woche fleischlos.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Betrieb in Norddeutschland hat Fleischgerichte ganz von der Speisekarte gestrichen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum wurde der „Veggie-Tag“ in der Stadtverwaltung abgeschafft?',
          optionen: [
            'Die Beschäftigten hatten keine Wahl und haben sich beschwert.',
            'Die vegetarischen Gerichte waren zu teuer.',
            'In der Küche fehlte die Zeit für Gemüsegerichte.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Gemüsegerichte sind im Einkauf meistens billiger, machen in der Küche aber mehr Arbeit.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Radiointerview über eine Umfrage zum Arbeitsweg. Entscheide, welche Aussage dem Gehörten entspricht.',
      audio: {
        transcript: 'Moderator: Frau Albers, Sie haben für Ihre Studie rund dreitausend Beschäftigte zu ihrem Arbeitsweg befragt. Was hat Sie am meisten überrascht?\nExpertin: Dass das Auto so wichtig geblieben ist. Die deutliche Mehrheit fährt damit zur Arbeit, obwohl fast alle über Staus und teures Benzin klagen.\nModerator: Woran liegt das?\nExpertin: Am Preis für Bus und Bahn jedenfalls nicht, wie viele vermuten. Die meisten nennen die schlechten Verbindungen. Wer auf dem Land wohnt, bräuchte mit dem Bus oft doppelt so lange.\nModerator: Und das Fahrrad?\nExpertin: Im Gegensatz zu den Älteren steigen jüngere Befragte immer öfter aufs Rad, allerdings fast nur in den Großstädten. Insgesamt ist es etwa jeder Sechste, nicht jeder Dritte, wie neulich in einer Zeitung stand.\nModerator: Was wünschen sich die Beschäftigten von ihren Arbeitgebern?\nExpertin: Einen Firmenwagen verlangt kaum jemand. Ganz oben steht ein günstiges Ticket für Bus und Bahn, gleich danach kommen sichere Abstellplätze für Fahrräder.\nModerator: Vielen Dank für das Gespräch.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Was hat Frau Albers an den Ergebnissen am meisten überrascht?',
          optionen: [
            'dass das Auto für den Arbeitsweg so wichtig geblieben ist',
            'dass so viele Beschäftigte im Stau stehen',
            'dass das Benzin so teuer geworden ist',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Warum steigen viele Befragte nicht auf Bus und Bahn um?',
          optionen: ['Die Fahrkarten sind ihnen zu teuer.', 'Die Verbindungen sind zu schlecht.', 'Die Busse sind ihnen zu voll.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie viele Befragte fahren mit dem Fahrrad zur Arbeit?',
          optionen: ['etwa jeder Dritte', 'etwa die Hälfte der Jüngeren', 'etwa jeder Sechste'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Von ihren Arbeitgebern wünschen sich die Befragten vor allem einen Firmenwagen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'In einem Online-Forum wird über eine neue Umfrage diskutiert: Die Mehrheit der Beschäftigten möchte nur noch an zwei Tagen pro Woche ins Büro kommen. Schreib einen Beitrag und nimm Stellung.',
      punkte: [
        'Gib das Ergebnis der Umfrage mit eigenen Worten wieder.',
        'Sag, wie du dazu stehst, und begründe deine Meinung mit einem Beispiel.',
        'Erkläre, welche Nachteile ein solches Modell haben kann.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen, laut der Umfrage wollen die meisten Beschäftigten nur noch zweimal pro Woche im Büro arbeiten. Ich kann das gut verstehen. Ich pendle jeden Tag über eine Stunde, und zu Hause arbeite ich viel konzentrierter, weil es dort ruhiger ist. Trotzdem sehe ich auch Nachteile: Neue Kolleginnen und Kollegen lernen das Team kaum kennen, wenn alle zu Hause sitzen, und spontane Gespräche fallen weg. Aus meiner Sicht funktioniert ein solches Modell nur mit klaren Regeln, zum Beispiel mit festen Teamtagen. Viele Grüße, Aylin',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Stell das Ergebnis einer Umfrage vor und kommentiere es. Sprich etwa 90 Sekunden.',
      aufgabe: 'In deinem Sprachkurs sollst du eine Umfrage vorstellen. Das Ergebnis: Die Mehrheit der Beschäftigten verbringt die Mittagspause am Schreibtisch; nur etwa jeder Fünfte geht mittags regelmäßig nach draußen. Präsentiere dieses Ergebnis in etwa 90 Sekunden und kommentiere es.',
      punkte: [
        'Fass zusammen, was die Umfrage zeigt, ohne die Formulierungen der Aufgabe zu wiederholen.',
        'Nenne mögliche Gründe für dieses Verhalten.',
        'Sag, wie du selbst deine Pausen verbringst und was du anderen empfiehlst.',
      ],
      redemittel: ['Laut der Umfrage …', 'Nur die wenigsten …', 'Das liegt vermutlich daran, dass …', 'Im Gegensatz dazu …', 'Deshalb würde ich empfehlen, …'],
      maxSekunden: 90,
      beispielLoesung: 'Ich möchte euch kurz eine Umfrage zur Mittagspause vorstellen. Laut dieser Umfrage bleiben die meisten Beschäftigten mittags an ihrem Arbeitsplatz sitzen. Nur ungefähr zwanzig Prozent gehen regelmäßig raus, die wenigsten machen also eine richtige Pause. Woran liegt das? Ich vermute, dass viele einfach zu viel zu tun haben und denken, sie sparen Zeit, wenn sie beim Essen weiterarbeiten. Dazu kommt, dass es in manchen Firmen keine Kantine und keinen schönen Pausenraum gibt. Ehrlich gesagt kenne ich das von mir selbst: Früher habe ich mein Brot vor dem Bildschirm gegessen und war nachmittags total müde. Inzwischen gehe ich jeden Mittag mindestens eine Viertelstunde spazieren, auch wenn es regnet. Danach kann ich mich viel besser konzentrieren. Deshalb würde ich jedem empfehlen, den Arbeitsplatz in der Pause wirklich zu verlassen. Und die Firmen sollten das unterstützen, zum Beispiel mit festen Pausenzeiten.',
    },
  ],
}
