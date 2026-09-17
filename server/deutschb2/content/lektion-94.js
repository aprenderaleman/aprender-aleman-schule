// Geschichte 4 · Zwischen zwei Angeboten — Lectura graduada B2
//
// Saga «Geschichten»: der Verlag Silberweg will María abwerben.
// Mehr Gehalt, eigenes Büro, eine ganze Buchreihe — und ein Dilemma.

export default {
  spec: ['Geschichte 4', 'Lectura graduada', 'Niveau B2', 'Wortschatz: Bloque 0-4'],
  h1: 'Zwischen zwei Angeboten',
  lead: 'Ein verlockendes Angebot der Konkurrenz, eine Woche Bedenkzeit — und die Frage, was María wirklich will.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'abwerben', kollokation: 'Mitarbeiter von der Konkurrenz abwerben', es: 'intentar fichar (a alguien de otra empresa)' },
        { wort: 'verlockend', kollokation: 'ein verlockendes Angebot', es: 'tentador' },
        { wort: 'die Konkurrenz (nur Sg.)', kollokation: 'zur Konkurrenz wechseln', es: 'la competencia' },
        { wort: 'die Bedenkzeit (nur Sg.)', kollokation: 'um eine Woche Bedenkzeit bitten', es: 'el tiempo para pensárselo' },
        { wort: 'verhandeln', kollokation: 'über das Gehalt verhandeln', es: 'negociar' },
        { wort: 'die Bedingung, -en', kollokation: 'zu guten Bedingungen', es: 'la condición' },
        { wort: 'schwanken', kollokation: 'zwischen zwei Möglichkeiten schwanken', es: 'dudar, oscilar' },
        { wort: 'die Loyalität (nur Sg.)', kollokation: 'Loyalität gegenüber der Firma', es: 'la lealtad' },
        { wort: 'kündigen', kollokation: 'eine Stelle kündigen', es: 'renunciar (a un puesto)' },
        { wort: 'aufbauen', kollokation: 'eine neue Buchreihe aufbauen', es: 'construir, crear desde cero' },
        { wort: 'die Buchreihe, -n', kollokation: 'eine eigene Buchreihe herausgeben', es: 'la colección editorial' },
        { wort: 'das Bauchgefühl (nur Sg.)', kollokation: 'auf sein Bauchgefühl hören', es: 'la intuición' },
      ],
      hinweis: 'In dieser Geschichte wird viel abgewogen: einerseits … andererseits, wenn … dann, hätte … wäre. **Konjunktiv II** ist hier keine Grammatikübung, sondern Marías Kopfkino. ~~El subjuntivo del «¿y si…?»~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Zwischen zwei Angeboten',
      absaetze: [
        'Der Verlag Silberweg residierte im vierten Stock eines Glasgebäudes mit Blick auf die Spree, und schon der Empfang war größer als Marías halbe Etage im Verlag Morgenlicht. Frau Vogel, die Programmleiterin — die Frau im grauen Blazer aus der Buchhandlung —, kam ohne Umwege zur Sache. Sie sagte, man habe die Lesung in der Lesezeit verfolgt und sei beeindruckt gewesen; man suche jemanden, der für Silberweg eine eigene **Buchreihe** mit internationalen Stimmen **aufbaue**. „Wir bieten Ihnen die Stelle als Projektleiterin", sagte sie. „Eigenes Büro, ein Team von drei Leuten. Und ein Gehalt, das ungefähr so aussieht." Sie schob einen Zettel über den Tisch.',
        'María sah die Zahl und brauchte einen Moment, um ihr Gesicht unter Kontrolle zu halten. Es war fast die Hälfte mehr, als sie jetzt verdiente. „Das ist ein sehr **verlockendes** Angebot", sagte sie ehrlich. „Aber mein Projekt erscheint erst im Herbst. Ich bitte um **Bedenkzeit**." Frau Vogel lächelte. „Eine Woche. Und, Frau Vega — Loyalität ist eine schöne Sache. Aber von Loyalität allein hat noch niemand seine Miete bezahlt."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Die Woche wurde die längste des Jahres. In der WG-Küche hängte María ein großes Blatt an den Kühlschrank: links „Silberweg", rechts „Morgenlicht". Einerseits das Geld, das Team, das Büro mit Spreeblick; andererseits ihr halbfertiges Buch, ihre zwölf Autoren, ein Chef, der ihr vertraut hatte, als sie noch niemand kannte. Carla war schnell fertig mit ihrer Meinung: „Nimm es! Wenn ich so ein Angebot bekäme, würde ich noch am selben Tag unterschreiben." Paul war vorsichtiger. Er stellte, wie immer, die eine Frage, die wehtat: „Was würdest du einer Freundin raten, die genau vor dieser Entscheidung stünde?"',
        'Im Büro spielte sie die Ruhe selbst, und genau das fühlte sich falsch an. Zweimal stand sie vor Herrn Lindströms Tür, um ihm von dem Angebot zu erzählen, und zweimal drehte sie wieder um — nicht aus Feigheit, sondern weil sie noch keine Antwort auf die Frage hatte, die er garantiert stellen würde: „Und was wollen Sie?" Solange sie das nicht wusste, war jedes Gespräch zu früh.',
        '„Wenn ich wechselte, hätte ich in fünf Jahren vielleicht eine eigene Abteilung", sagte María in die Stille der Küche. „Und wenn ich bliebe?" — „Dann wüsstest du wenigstens, warum", sagte Paul. Das half nichts und half doch. Nachts lag sie wach und **schwankte**: Um zwei Uhr hatte sie innerlich schon gekündigt, um vier blieb sie für immer bei Morgenlicht, um sechs stand sie auf und machte Kaffee.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am Donnerstag saß sie im Café Sonne, und Deniz stellte sich mit einem Espresso zu ihr. „Ich kenne das", sagte er. „Mir wollte mal ein schickes Lokal am Ku’damm das Doppelte zahlen. Ich habe drei Tage lang allen davon erzählt — und dann gemerkt, dass ich nur wollte, dass man mich fragt." María lachte zum ersten Mal in dieser Woche. Auf dem Heimweg traf sie Frau Krüger, die im Hof die Rosen goss. Die alte Dame hörte sich das Dilemma an, ohne die Gießkanne abzustellen. „Ich wohne seit vierzig Jahren in diesem Haus", sagte sie dann. „Bleiben ist nur richtig, wenn man weiß, warum man bleibt. Aus Angst zu bleiben ist genauso feige wie aus Gier zu gehen." ~~(die Gier: la codicia)~~',
        'Am Freitagabend holte María die zwölf Manuskripte hervor und las sie noch einmal, alle, bis nach Mitternacht. Bei Amiras Spätkauf-Geschichte merkte sie, dass sie einzelne Sätze inzwischen auswendig konnte. Und da war es plötzlich ganz einfach — oder wenigstens klar. Sie wollte nicht irgendeine Reihe mit „internationalen Stimmen" **aufbauen**, konzipiert in einem Glasbüro. Sie wollte dieses Buch zu Ende bringen, mit diesen Menschen. Aber ihr **Bauchgefühl** sagte ihr noch etwas anderes, und auch das war die Wahrheit: Sie wurde bei Morgenlicht schlechter bezahlt, als ihre Arbeit wert war. Beides konnte gleichzeitig stimmen.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am Samstag schrieb sie zwei E-Mails. Die erste an Frau Vogel: höflich, klar, ohne falsche Entschuldigungen — sie danke für das Vertrauen und das großzügige Angebot, habe sich aber entschieden, ihr aktuelles Projekt zu Ende zu führen. Die zweite E-Mail war kürzer und kostete sie mehr Mut. Sie ging an Herrn Lindström: „Könnten wir am Montag um acht Uhr sprechen? Es ist wichtig."',
        'Den Sonntag verbrachte sie mit Paul am See im Volkspark. Sie bereitete kein Dokument vor und keine Folien, nur drei Sätze, die sie sich zurechtlegte wie Stichwörter für eine Prüfung. Wenn sie schon blieb — und sie blieb gern —, dann nicht aus Bequemlichkeit, sondern zu neuen **Bedingungen**. Am Montagmorgen um Punkt acht klopfte sie an die Tür ihres Chefs. „Herr Lindström", sagte sie, „haben Sie einen Moment?" Diesmal war sie es, die die Frage stellte.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen zum Text — erst frei, dann mit der Lösung vergleichen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Was genau bietet der Verlag Silberweg María an?',
        'Wen fragt María um Rat, und wie unterscheiden sich die Antworten von Carla, Paul, Deniz und Frau Krüger?',
        '„Aus Angst zu bleiben ist genauso feige wie aus Gier zu gehen." — Was meint Frau Krüger damit, und wie setzt María den Rat am Ende um?',
        'Im Text steht: „Wenn ich **wechselte**, **hätte** ich in fünf Jahren vielleicht eine eigene Abteilung." Welche Form ist das, und warum passt sie hier besser als das Präsens?',
      ],
      loesungen: [
        'Die Stelle als **Projektleiterin**: Sie soll eine eigene Buchreihe mit internationalen Stimmen aufbauen — mit **eigenem Büro**, einem **Team von drei Leuten** und **fast fünfzig Prozent mehr Gehalt**.',
        '**Carla** würde sofort unterschreiben. **Paul** gibt keinen Rat, sondern stellt eine Gegenfrage („Was würdest du einer Freundin raten?"). **Deniz** erzählt von sich: Manchmal will man nur gefragt werden. **Frau Krüger** sagt: Bleiben ist nur richtig, wenn man weiß, warum.',
        'Eine Entscheidung ist nur dann gut, wenn sie **bewusst** getroffen wird — nicht aus Angst vor Veränderung und nicht nur wegen des Geldes. María setzt das um, indem sie **bleibt, aber neue Bedingungen verhandelt**: Sie lehnt Silberweg ab und bittet Herrn Lindström um ein Gespräch. ~~Inferencia: quedarse Y renegociar — las dos cosas a la vez.~~',
        '**Konjunktiv II** (wechselte = würde wechseln; hätte). Er markiert die Situation als **hypothetisch**: María spielt eine mögliche Zukunft nur im Kopf durch. Das Präsens würde die Entscheidung als real darstellen — genau das ist sie noch nicht.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Montag, acht Uhr, Lindströms Büro: María hat drei Sätze vorbereitet. In **Geschichte 5** fällt die Entscheidung — und im Herbst liegt ein Buch in den Schaufenstern, auf dem ein Titel steht, der auch Marías Geschichte erzählt.',
    },
  ],
}
