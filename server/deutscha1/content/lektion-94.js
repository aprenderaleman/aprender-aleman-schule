// Geschichte 4 · Ein Sonntag mit Paul
//
// Lectura graduada A1 — capítulo 4 de la saga de María (ver BIBLIA).
// Gramática: Bloques 0-3 (Tagesablauf, trennbare Verben, Modalverben —
// Themenfeld Tagesablauf & Hobbys).

export default {
  spec: ['Geschichte 4', 'Lectura graduada', 'Niveau A1', 'Wortschatz: Bloque 0-3'],
  h1: 'Ein Sonntag mit Paul',
  lead: 'Sonne, Volkspark, ein Eis am See — und sehr viel Deutsch. ~~Sol, parque, un helado junto al lago… y mucho alemán.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      titel: 'Neue Wörter',
      items: [
        { wort: 'der Sonntag', kollokation: 'am Sonntag', es: 'el domingo' },
        { wort: 'das Wetter', kollokation: 'das Wetter ist super', es: 'el tiempo (clima)' },
        { wort: 'die Sonne', kollokation: 'die Sonne ist da', es: 'el sol' },
        { wort: 'warm', kollokation: 'es ist warm', es: 'caluroso, cálido' },
        { wort: 'spazieren gehen', kollokation: 'im Park spazieren gehen', es: 'ir a pasear' },
        { wort: 'der See', kollokation: 'am See', es: 'el lago' },
        { wort: 'das Eis', kollokation: 'ein Eis kaufen', es: 'el helado' },
        { wort: 'zusammen', kollokation: 'zusammen frühstücken', es: 'juntos' },
        { wort: 'lachen', kollokation: 'viel lachen', es: 'reír(se)' },
      ],
      hinweis: '~~Ojo: „das Eis“ significa tanto el helado como el hielo — aquí, claro, un helado junto al lago.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Ein Sonntag mit Paul',
      absaetze: [
        '**Sonntag**. Um zehn Uhr steht María auf. ~~María se levanta a las diez.~~ Das **Wetter** ist super: Die **Sonne** ist da, und es ist **warm**. Fernsehen? Nein! Das Wetter ist zu schön. ~~¿Ver la tele? ¡No! Hace demasiado bueno.~~ Paul ruft an. „Guten Morgen! Das Wetter ist so schön. Kommst du mit in den Volkspark?“ ~~¿Te vienes al Volkspark?~~ „Ja, gern!“',
        'Um elf Uhr frühstücken sie **zusammen** im Café. ~~Desayunan juntos.~~ María trinkt Kaffee — sie hat jetzt Kaffee! — und isst Brot mit Butter und Käse. Paul spricht über seine Arbeit: Er arbeitet mit Computern. María versteht nicht alles — aber sie versteht viel!',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Im Volkspark',
      absaetze: [
        'Dann **gehen** sie **spazieren**. ~~Luego van a pasear.~~ Der Volkspark ist groß und schön. ~~grande y bonito~~ Viele Familien sind im Park: Eltern, Kinder, Musik. Im Park gibt es auch einen **See**. Paul: „Was ist dein Hobby, María?“ „Musik hören. Und schwimmen!“ „Schwimmen? Im See ist das leider verboten.“ ~~Nadar en el lago, por desgracia, está prohibido.~~ Am See kaufen sie ein **Eis**. „Zwei Eis, bitte!“ Das Eis kostet zwei Euro — billig, und so gut! Sie sprechen über Valencia, über Berlin, über Musik. Sie **lachen** viel. ~~Se ríen mucho.~~ María spricht Deutsch — viel Deutsch! Paul: „Dein Deutsch ist gut.“ María: „Danke. Ich lerne jeden Tag ein bisschen.“',
        'Um sechs Uhr hat María Hunger. Paul kann kochen! Sie essen zusammen in der Küche in der Gartenstraße. María: „Du, Paul — die Prüfung kommt. Ich muss viel lernen.“ Paul: „Du lernst jeden Tag, das ist super. Und nach der Prüfung machen wir eine Party!“ ~~¡Y después del examen hacemos una fiesta!~~',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~Responde a las preguntas y comprueba.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wie ist das Wetter am Sonntag?',
        'Was machen María und Paul im Volkspark?',
        'Was kostet das Eis?',
        'Was kommt nach der Prüfung?',
      ],
      loesungen: [
        'Super: Die **Sonne** ist da, und es ist **warm**.',
        'Sie **gehen spazieren**, kaufen ein Eis am See, sprechen viel — und lachen viel.',
        '**Zwei Euro**. Billig, und so gut!',
        'Eine **Party**! Aber zuerst muss María lernen — jeden Tag ein bisschen. ~~primero, el examen~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Prüfung kommt: Hören, Lesen, Schreiben, Sprechen. Und dann? Die Party! ~~Llega el examen… ¿y después? ¡La fiesta!~~',
    },
  ],
}
