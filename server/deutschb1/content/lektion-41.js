// Lektion 41 · Umwelt & Natur

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Sprechen & Hören'],
  h1: 'Umwelt & Natur',
  lead: 'Wetter, Jahreszeiten, Mülltrennung und Pfand: Alltagsdeutsch für draußen — und der perfekte Small-Talk-Stoff. ~~La lección que cierra el bloque temático.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'über das Wetter und die Jahreszeiten sprechen ~~(imprescindible para el small talk)~~',
        'Mülltrennung und Pfand im Alltag verstehen',
        'über Natur und Ausflüge sprechen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Wetter', kollokation: 'schönes Wetter haben', es: 'el tiempo (meteorológico)' },
        { wort: 'die Sonne', kollokation: 'die Sonne scheint', es: 'el sol' },
        { wort: 'regnen', kollokation: 'es regnet den ganzen Tag', es: 'llover' },
        { wort: 'der Schnee', kollokation: 'es liegt Schnee', es: 'la nieve' },
        { wort: 'die Jahreszeit, -en', kollokation: 'meine liebste Jahreszeit', es: 'la estación del año' },
        { wort: 'die Umwelt', kollokation: 'die Umwelt schützen', es: 'el medio ambiente' },
        { wort: 'der Müll', kollokation: 'den Müll rausbringen', es: 'la basura' },
        { wort: 'trennen', kollokation: 'den Müll trennen', es: 'separar' },
        { wort: 'das Pfand', kollokation: 'das Pfand zurückbekommen', es: 'el depósito (por el envase)' },
        { wort: 'der Ausflug, die Ausflüge', kollokation: 'einen Ausflug machen', es: 'la excursión' },
        { wort: 'wandern', kollokation: 'in den Bergen wandern', es: 'hacer senderismo' },
        { wort: 'der Wald, die Wälder', kollokation: 'im Wald spazieren gehen', es: 'el bosque' },
      ],
      hinweis: '**Achtung, Wetter auf Deutsch:** ~~«hace calor» no se traduce con hacer:~~ **Es ist** heiß / kalt. ~~Y «tengo frío» es~~ **Mir ist** kalt ~~— *Ich bin kalt* significa que eres una persona fría.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Umwelt im Alltag',
      card: true,
      kicker: 'Alltag 1',
      titel: 'Small Talk Nummer eins: das Wetter',
      absaetze: [
        'Im Aufzug, beim Bäcker, vor dem Kurs: __Über das Wetter kann man immer reden.__ „Schön heute, oder?“ — und schon läuft das Gespräch. Auch in der Prüfung hilft das Thema: als lockerer Einstieg beim Sprechen und in fast jeder Präsentation über das Heimatland.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 2',
      titel: 'Mülltrennung & Pfand',
      absaetze: [
        'In Deutschland trennt man den Müll: __Papier, Bioabfall, Verpackungen, Restmüll__ — und Glas kommt in Container. Auf vielen Flaschen ist außerdem __Pfand__: Du zahlst an der Kasse etwas mehr und bekommst das Geld zurück, wenn du die Flasche zum Automaten im Supermarkt bringst.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 3',
      titel: 'Raus in die Natur',
      absaetze: [
        'Am Wochenende geht man raus: __wandern__, Rad fahren, ein Spaziergang im Wald. Ein Ausflug an einen See ist im Sommer der Klassiker. Das kostet nichts — man braucht nur gutes Wetter. Und darüber spricht man dann natürlich wieder.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Wetter & Jahreszeiten',
      items: [
        { text: 'Heute ist schönes Wetter — die Sonne scheint.' },
        { text: 'Morgen soll es regnen.' },
        { text: 'Im Winter **liegt** hier oft **Schnee**.' },
        { text: 'Der Frühling ist meine liebste Jahreszeit.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Müll & Pfand',
      items: [
        { text: 'Papier kommt **in die blaue Tonne**.' },
        { text: 'Vergiss nicht, die Flaschen zurückzubringen — da ist **Pfand** drauf.' },
        { text: 'Wir trennen den Müll in der Küche.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Natur & Ausflüge',
      items: [
        { text: 'Am Sonntag machen wir einen Ausflug an den See.' },
        { text: 'Wir sind drei Stunden gewandert.' },
        { text: 'Bei gutem Wetter fahre ich mit dem Rad zur Arbeit.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — über das Wetter sprechen',
      gruppen: [
        {
          fn: 'Small Talk',
          saetze: [
            { satz: 'Schönes Wetter heute, oder?' },
            { satz: 'Ganz schön kalt geworden!' },
            { satz: 'Hoffentlich bleibt es trocken.', gloss: '~~ojalá no llueva~~' },
          ],
        },
        {
          fn: 'In der Präsentation',
          saetze: [
            { satz: 'In meinem Heimatland ist es im Sommer sehr heiß.' },
            { satz: 'Bei uns regnet es im Winter viel.' },
            { satz: 'Das Wetter ist bei uns ganz anders als in Deutschland.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Geld, das du für die Flasche zurückbekommst: das ___',
        'Frühling, Sommer, Herbst und Winter sind die vier ___',
        'Papier zu Papier, Glas zu Glas: den Müll ___',
        'eine kleine Reise für einen Tag: der ___',
      ],
      loesungen: [
        'das **Pfand**',
        'die vier **Jahreszeiten**',
        'den Müll **trennen**',
        'der **Ausflug**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ergänzen',
      frage: 'Wetter auf Deutsch — ergänze die Lücken.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Im August ___ es oft sehr heiß. ~~(hace)~~',
        'Kannst du das Fenster zumachen? ___ ist kalt.',
        'Nimm einen Regenschirm mit — es ___ gleich.',
        'In den Bergen ___ im Januar viel Schnee.',
      ],
      loesungen: [
        'Im August **ist** es oft sehr heiß. ~~(nunca *macht*)~~',
        '**Mir** ist kalt. ~~(no *Ich bin kalt*)~~',
        'es **regnet** gleich.',
        'In den Bergen **liegt** im Januar viel Schnee.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 60-80 Wörter: Wetter und Natur in deiner Heimat.',
      aufgabe: 'Wie sind die Jahreszeiten? Was ist dein Lieblingswetter? Gib einen Ausflugstipp.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich komme aus Valencia. Bei uns ist es im Sommer sehr heiß, oft über 35 Grad. Im Winter ist es mild, und es regnet nur wenig. Meine liebste Jahreszeit ist der Frühling, weil die Temperaturen dann perfekt sind. Wer Natur mag, sollte einen Ausflug in die Berge machen: Dort kann man wunderbar wandern, und die Landschaft ist sehr schön. Und danach gibt es am Strand ein Eis. ~~Este mismo texto te sirve casi entero para la Präsentation del examen.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2 (Präsentation, ~3 Minuten)',
      titel: 'Müll trennen — ist das wichtig?',
      anweisung: 'Bereite den Anfang deiner Präsentation vor: Begrüßung + Thema nennen + Situation in deinem Heimatland + deine Meinung (3-4 Sätze).',
      absaetze: [
        'Der Einstieg folgt immer demselben Muster: **Begrüßung → Thema → Heimatland → Meinung**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Hallo, ich heiße Laura. Das Thema meiner Präsentation ist: „Müll trennen — ist das wichtig?“',
        'In meinem Heimatland trennen wir den Müll auch, aber ein Pfandsystem wie in Deutschland gibt es bei uns nicht.',
        'Ich persönlich finde Mülltrennung wichtig, weil sie gut für die Umwelt ist.',
      ],
      kommentar: 'Dieses Einstiegs-Muster funktioniert für **jedes** Präsentationsthema — nur der Wortschatz ändert sich. Übe es, bis es automatisch kommt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Wetter ist dein **Joker**: Es passt als Einstieg in den Small Talk mit dem Prüfer, in die Präsentation über dein Heimatland und in Sprechen Teil 1 — denn ob ihr einen Ausflug oder ein Picknick plant: Über das Wetter muss man immer sprechen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Zusammenfassung — der Themenblock ist komplett',
      card: true,
      titel: 'Wortschatz quer nutzen',
      absaetze: [
        'In der Prüfung mischen sich die Themen ständig: Einen Ausflug planen = **Freizeit** (Lektion 38) + **Wetter** (diese Lektion) + **Einkaufen** (Lektion 40). Die Redemittel zum Vorschlagen und Reagieren funktionieren mit dem Wortschatz jeder Lektion. Lern also keine isolierten Wortlisten — **kombiniere die Themen**, genau wie im echten Leben.',
      ],
    },
    {
      type: 'tabelle',
      kopf: ['Situation', 'Das brauchst du'],
      zeilen: [
        ['Wetter', 'Es ist heiß / kalt. · Die Sonne scheint. · Es regnet.'],
        ['Small Talk', 'Schönes Wetter heute, oder?'],
        ['Müll & Pfand', 'den Müll trennen · Flaschen zurückbringen'],
        ['Natur', 'einen Ausflug machen · wandern · im Wald spazieren gehen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann über das Wetter sprechen — im Small Talk und in der Präsentation.',
        'Ich weiß, wie Mülltrennung und Pfand in Deutschland funktionieren.',
        'Ich kann über Natur und Ausflüge sprechen.',
        'Ich kombiniere den Wortschatz aus den Themen-Lektionen frei.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Themenblock geschafft: Du hast Wortschatz und Redemittel für alle großen Alltagsthemen. Jetzt beginnt die Zielgerade — in der nächsten Lektion wartet die erste **Prüfungssimulation**: eine komplette Runde durch alle vier Module, unter realen Bedingungen.',
    },
  ],
}
