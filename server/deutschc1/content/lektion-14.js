// Lektion 14 · Modalpartikeln

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Hören · Sprechen'],
  h1: 'Modalpartikeln',
  lead: 'Doch, ja, wohl, eben: die kleinen unbetonten Wörter, die keinen Inhalt hinzufügen — sondern Haltung. Wer sie hört, versteht den Sprecher; wer sie setzt, klingt endlich natürlich.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die neun wichtigsten Modalpartikeln ihrer kommunikativen Funktion zuordnen: appellieren, beschwichtigen, vermuten, resignieren.',
        'Du erkennst im Hören, welche Haltung eine Partikel verrät — Erstaunen, Ungeduld, gemeinsames Wissen, Drohung.',
        'Du setzt *doch, mal, ruhig* und *eigentlich* im Sprechen gezielt ein, um Bitten und Fragen abzutönen.',
        'Du verstehst, warum Modalpartikeln unübersetzbar sind — und übersetzt trotzdem ihre Wirkung.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'doch', kollokation: 'Komm doch mit!', es: 'anda, venga (apelación)' },
        { wort: 'ja', kollokation: 'Das ist ja interessant!', es: 'vaya, pero si… (sorpresa)' },
        { wort: 'wohl', kollokation: 'Er ist wohl schon weg.', es: 'seguramente (suposición)' },
        { wort: 'eben / halt', kollokation: 'So ist es eben.', es: 'qué le vamos a hacer' },
        { wort: 'eigentlich', kollokation: 'Wie heißt sie eigentlich?', es: 'por cierto; en el fondo' },
        { wort: 'ruhig', kollokation: 'Setzen Sie sich ruhig.', es: 'tranquilamente, sin reparo' },
        { wort: 'bloß / nur', kollokation: 'Sag das bloß nicht dem Chef!', es: 'ni se te ocurra (advertencia)' },
        { wort: 'schon', kollokation: 'Das wird schon klappen.', es: 'ya verás como sí' },
        { wort: 'mal', kollokation: 'Guck mal! Kannst du mal helfen?', es: 'suavizador de peticiones' },
        { wort: 'die Abtönung', kollokation: 'die Abtönung einer Aussage', es: 'matización del tono' },
        { wort: 'die Sprechabsicht', kollokation: 'die Sprechabsicht erkennen', es: 'intención comunicativa' },
        { wort: 'unbetont', kollokation: 'unbetont im Mittelfeld stehen', es: 'átono' },
      ],
      hinweis: 'Modalpartikeln stehen **unbetont im Mittelfeld**, nie am Satzanfang. Betont ist es keine Partikel mehr: *Das ist **ja** klar* (Partikel, unbetont) vs. *Ja, das ist klar* (Antwortpartikel, betont). Diese Probe funktioniert bei allen neun.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was Modalpartikeln tun — und warum sie unübersetzbar sind',
      absaetze: [
        'Modalpartikeln ändern nichts am **Sachverhalt**, aber alles an der **Beziehung**: Sie zeigen, wie der Sprecher zur Aussage und zum Gegenüber steht. *Komm mit!* ist ein Befehl; *Komm doch mit!* ist eine freundliche Ermunterung; *Komm bloß mit!* eine Drohung. Drei Sätze, ein Inhalt, drei Haltungen.',
        'Deshalb scheitert jede Wort-für-Wort-Übersetzung: ~~El español reparte estas funciones entre entonación, partículas sueltas («anda», «venga», «ya», «pues») y el contexto — no hay equivalencia uno a uno.~~ Übersetze nie die Partikel, sondern die **Wirkung**. Und Vorsicht mit zwei falschen Freunden: *eigentlich* heißt nicht *actualmente*, und das unbetonte *ja* ist kein Ja.',
        'Fast jede Partikel hat außerdem einen **Doppelgänger** in anderer Wortart: *eben* (= gerade eben, temporal), *ruhig* (= leise, Adjektiv), *schon* (= bereits, temporal). Nur die unbetonte Mittelfeld-Verwendung ist die Modalpartikel.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die neun Partikeln im Überblick',
      kopf: ['Partikel', 'Satztyp', 'Was sie transportiert'],
      zeilen: [
        ['doch', 'Aufforderung, Aussage', 'Ermunterung; Erinnerung an Bekanntes („du weißt es doch“)'],
        ['ja', 'Aussage, Ausruf', 'Überraschung; oder: das ist uns beiden bekannt'],
        ['wohl', 'Aussage', 'Vermutung („vermutlich“) — Brücke zu Lektion 13'],
        ['eben / halt', 'Aussage', 'resignierte Feststellung: daran ist nichts zu ändern'],
        ['eigentlich', 'Frage, Aussage', 'Themenwechsel („übrigens“); oder: im Grunde genommen'],
        ['ruhig', 'Aufforderung', 'Erlaubnis, Beschwichtigung: kein Grund zur Scheu'],
        ['bloß / nur', 'Aufforderung, Frage', 'Warnung/Drohung; in Fragen: Ratlosigkeit („Wo ist er nur?“)'],
        ['schon', 'Aussage', 'Zuversicht trotz Zweifel; einräumend („na ja, schon, aber …“)'],
        ['mal', 'Aufforderung', 'macht Bitten beiläufig und unverbindlich'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Kombinationen und Reihenfolge',
      absaetze: [
        'Partikeln treten gern **im Rudel** auf, und ihre Reihenfolge ist fest: __Komm doch mal vorbei!__ (nicht *mal doch*), __Das ist ja wohl ein Witz!__ (Empörung), __Sag doch bloß nicht ab!__ Häufige Ketten: *doch mal*, *ja wohl*, *doch eben*, *nun mal*: __So ist das nun mal.__',
        'Für dein aktives Sprechen reichen vier sichere Werkzeuge: **doch** (ermuntern), **mal** (Bitte entschärfen), **ruhig** (Erlaubnis geben), **eigentlich** (Frage beiläufig eröffnen). Die übrigen musst du vor allem **hörend** entschlüsseln — dort entscheiden sie über die richtige Antwort. Und keine Angst vor Fehlern: Eine falsch gesetzte Partikel klingt höchstens ungewohnt; eine treffend gesetzte lässt dich sofort um eine Stufe natürlicher wirken.',
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Erklärung — Kontrast',
      titel: 'Ein Satz, vier Haltungen',
      zeilen: [
        { satz: 'Mach die Tür zu!', label: 'nackter Befehl — je nach Ton neutral bis unhöflich' },
        { satz: 'Mach doch die Tür zu!', label: 'freundlicher Anstoß — oder leichte Ungeduld' },
        { satz: 'Mach mal die Tür zu!', label: 'beiläufige Bitte unter Vertrauten' },
        { satz: 'Mach bloß die Tür zu!', label: 'dringliche Warnung — es steht etwas auf dem Spiel' },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — im Dialog',
      kicker: 'appellierend',
      titel: 'doch · mal · ruhig — auffordern und erlauben',
      items: [
        { text: '„Ich trau mich nicht, den Chef zu fragen.“ — „Frag ihn **doch** einfach! Er beißt nicht.“', gl: '— Ermunterung, nimmt die Hemmung' },
        { text: '„Kannst du **mal** kurz das Fenster aufmachen?“', gl: '— mal macht die Bitte klein und beiläufig' },
        { text: '„Stör ich?“ — „Nein, kommen Sie **ruhig** rein.“', gl: '— Erlaubnis: kein Grund zur Zurückhaltung' },
        { text: '„Nimm dir **ruhig** noch ein Stück — es ist genug da.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'wertend',
      titel: 'ja · wohl · schon — staunen, vermuten, beruhigen',
      items: [
        { text: '„Du bist **ja** klatschnass! Was ist passiert?“', gl: '— Überraschung über Offensichtliches' },
        { text: '„Das Meeting ist **ja** erst um vier — wir haben Zeit.“', gl: '— Appell an gemeinsames Wissen' },
        { text: '„Wo ist Herr Yilmaz?“ — „Der ist **wohl** noch in der Mittagspause.“', gl: '— Vermutung ≈ dürfte (Lektion 13)' },
        { text: '„Ich hab Angst vor dem Ergebnis.“ — „Das wird **schon** gutgehen.“', gl: '— Zuversicht mit Restzweifel' },
        { text: '„War der Vortrag gut?“ — „Interessant war er **schon** — nur viel zu lang.“', gl: '— einräumendes schon: Ja, aber' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'resignativ · warnend',
      titel: 'eben/halt · bloß/nur — hinnehmen und drohen',
      items: [
        { text: '„Schon wieder Stau!“ — „Berlin ist **eben** keine Kleinstadt.“', gl: '— resignierte Feststellung: unabänderlich' },
        { text: '„Dann müssen wir **halt** früher losfahren.“', gl: '— halt = eben, eher süddeutsch/mündlich' },
        { text: '„Erzähl das **bloß** nicht der Presse!“', gl: '— scharfe Warnung' },
        { text: '„Wo hab ich **nur** meine Schlüssel hingelegt?“', gl: '— Ratlosigkeit, Frage an sich selbst' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'eröffnend',
      titel: 'eigentlich — beiläufig fragen, im Grunde meinen',
      items: [
        { text: '„Sag mal, was macht **eigentlich** dein Umzug?“', gl: '— leitet beiläufig ein neues Thema ein' },
        { text: '„**Eigentlich** wollte ich heute früher gehen — aber jetzt kam dieser Anruf.“', gl: '— der Plan galt, die Realität kam dazwischen. ~~Nunca «actualmente»: es «en principio / en realidad».~~' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Haltung transportiert die markierte Partikel? Wähle: Ermunterung, Überraschung, Vermutung, Resignation, Warnung, Beschwichtigung.',
      aufgaben: [
        '„Das ist **ja** unglaublich — die haben schon geöffnet!“',
        '„Verlier **bloß** nicht den Vertrag, der ist das einzige Exemplar.“',
        '„Dann nehmen wir **halt** den späteren Zug.“',
        '„Die Kollegin ist **wohl** im Urlaub, ihr Kalender ist geblockt.“',
        '„Machen Sie sich **ruhig** Notizen, das ist ausdrücklich erwünscht.“',
        '„Bewirb dich **doch** auf die Stelle — du erfüllst alle Anforderungen.“',
      ],
      loesungen: [
        '**Überraschung** — der Sprecher stellt etwas Unerwartetes fest.',
        '**Warnung** — *bloß* + Negation in der Aufforderung ist eine dringliche Warnung.',
        '**Resignation** — man fügt sich in die Umstände.',
        '**Vermutung** — *wohl* markiert einen plausiblen Schluss, wie *dürfte*.',
        '**Beschwichtigung/Erlaubnis** — kein Grund zur Zurückhaltung.',
        '**Ermunterung** — *doch* schiebt freundlich an.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Setze die passende Partikel ein (doch, ja, wohl, eben, ruhig, bloß, schon, mal, eigentlich). Die Klammer nennt die gewünschte Wirkung.',
      aufgaben: [
        'Kommen Sie ____ vorbei, wenn Sie in der Nähe sind. *(beiläufige Einladung)*',
        'Du hast ____ ein neues Auto! Seit wann? *(Überraschung)*',
        'Der Bus kommt heute nicht mehr — dann laufen wir ____. *(Resignation)*',
        'Was ist ____ aus deinem alten Mitbewohner geworden? *(beiläufiger Themenwechsel)*',
        'Fass die Kabel ____ nicht an, die stehen unter Strom! *(scharfe Warnung)*',
        'Keine Sorge, die Präsentation wird ____ klappen. *(Zuversicht)*',
      ],
      loesungen: [
        'Kommen Sie **doch mal** vorbei … — *doch*, *mal* oder beide zusammen; die Kette *doch mal* ist am natürlichsten.',
        'Du hast **ja** ein neues Auto!',
        '… dann laufen wir **eben**. — auch **halt** (mündlicher) ist richtig.',
        'Was ist **eigentlich** aus deinem alten Mitbewohner geworden?',
        'Fass die Kabel **bloß** nicht an! — auch **ja** (betont!) wäre hier möglich: *Fass die ja nicht an!*',
        '… die Präsentation wird **schon** klappen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen Mini-Dialog (6-8 Repliken) zwischen zwei Kollegen: A hat Angst, im Meeting die Kritik am Projektplan anzusprechen; B ermutigt. Verwende mindestens **fünf verschiedene** Partikeln und markiere sie.',
      aufgabe: '*Situation: Montagmorgen, Kaffeeküche, das Meeting beginnt in zehn Minuten.*',
      loesung: '**Mögliche Lösung** (jede natürliche Kombination aus fünf Partikeln zählt):\n*A: „Ich weiß nicht, ob ich das mit den Fristen ansprechen soll.“\nB: „Sag es **doch** einfach — du hast die Zahlen auf deiner Seite.“\nA: „Der Projektleiter reagiert **ja** manchmal ziemlich dünnhäutig.“\nB: „Der ist heute **wohl** ohnehin milde gestimmt, sein Urlaub ist genehmigt. Sprich es **ruhig** an.“\nA: „Und wenn es schiefgeht?“\nB: „Das wird **schon** nicht eskalieren. Sag **bloß** nicht, die Planung sei ‚chaotisch‘ — bleib bei den Fakten.“\nA: „Na gut. Dann ist es **eben** heute so weit.“*\n~~Fíjate: todas van átonas y en el Mittelfeld. Si una partícula acaba al principio de la frase, ya no es Modalpartikel.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Sprecherhaltung erkennen',
      titel: 'Mini-Aufgabe · Was meint der Sprecher wirklich?',
      anweisung: 'Im Hören entscheiden Partikeln oft darüber, welche Antwortoption die Haltung des Sprechers korrekt wiedergibt. Lies die Repliken {1}-{4} und wähle jeweils die zutreffende Deutung A oder B.',
      absaetze: [
        '{1} „Das Budget ist **eben** begrenzt.“ — A: Der Sprecher hält das für änderbar. B: Der Sprecher sieht das als unabänderliche Tatsache.\n{2} „Rufen Sie **ruhig** auch am Wochenende an.“ — A: Der Sprecher erlaubt es ausdrücklich. B: Der Sprecher bittet um leises Sprechen.\n{3} „Der Bericht ist **ja wohl** nicht Ihr Ernst!“ — A: Der Sprecher ist empört. B: Der Sprecher vermutet vorsichtig.\n{4} „Das kriegen wir **schon** hin.“ — A: Der Sprecher ist sicher und beruhigt. B: Der Sprecher hat bereits eine fertige Lösung.',
      ],
      loesungen: [
        '{1} **B** — *eben* = resignierte Feststellung: So ist es, Punkt.',
        '{2} **A** — *ruhig* = Erlaubnis/Beschwichtigung; mit Lautstärke hat es nichts zu tun.',
        '{3} **A** — die Kette *ja wohl* in Ausrufen signalisiert Empörung, keine Vermutung.',
        '{4} **A** — *schon* = Zuversicht trotz Restzweifel; eine fertige Lösung behauptet der Satz nicht.',
      ],
      kommentar: 'Die falschen Optionen in der Prüfung übersetzen die Partikel wörtlich (*ruhig* = leise, *schon* = bereits). Wer die Abtönungsfunktion kennt, ist immun gegen genau diese Fallen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Sprechen** heben zwei, drei gut platzierte Partikeln deine Natürlichkeit sofort: *„Da müsste man doch eigentlich ansetzen“* klingt nach Gespräch, nicht nach Aufsatz. Aber: Im **Schreiben** (Diskussionsbeitrag, formelle Nachricht) haben Modalpartikeln fast nichts verloren — sie sind ein Register-Signal für Mündlichkeit. Nur *wohl* und *eigentlich* gehen auch schriftlich durch.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['unbetont im Mittelfeld — sonst keine Partikel', 'Das ist ja klar. ≠ Ja, das ist klar.'],
        ['doch = ermuntern, erinnern', 'Frag ihn doch einfach!'],
        ['ja = Überraschung, gemeinsames Wissen', 'Du bist ja klatschnass!'],
        ['wohl = Vermutung (≈ dürfte)', 'Er ist wohl noch unterwegs.'],
        ['eben/halt = Resignation · bloß = Warnung', 'So ist es eben. · Sag das bloß nicht!'],
        ['mal + ruhig entschärfen Bitten', 'Kannst du mal …? · Kommen Sie ruhig rein.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich ordne jede der neun Partikeln ihrer kommunikativen Funktion zu.',
        'Ich höre den Unterschied zwischen Partikel und betontem Doppelgänger (*ja*, *schon*, *ruhig*).',
        'Ich entschärfe Bitten mit *doch mal* und gebe mit *ruhig* Erlaubnis.',
        'Ich weiß, dass Partikeln in den formellen Schreibaufgaben nichts zu suchen haben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit den Partikeln ist die Satzebene komplett. Die letzte Grammatiklektion des Blocks steigt eine Ebene tiefer — ins **Wort selbst**: Präfixe, die Bedeutungen kippen (*suchen → versuchen → besuchen*), Suffixe, die das Genus verraten, und Kollokationen wie *eine Entscheidung treffen*, die man nicht bauen, sondern kennen muss. Danach hast du das ganze sprachliche Fundament für die Prüfungsmodule beisammen.',
    },
  ],
}
