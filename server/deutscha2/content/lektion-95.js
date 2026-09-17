// Geschichte 5 · Überraschung für Paul
//
// Lectura graduada A2 — canon: A1 completo + Bloques 0-4 (todo el curso).
// Gran final del A2: todos los personajes juntos (Party, Geburtstag, feiern,
// einladen, mitbringen, sich freuen — canon del Bloque 2). Cierra con una
// prose de despedida que enlaza con el B1.

export default {
  spec: ['Geschichte 5', 'Lectura graduada', 'Niveau A2', 'Wortschatz: Bloque 0-4'],
  h1: 'Überraschung für Paul',
  lead: 'Alle sind da, das Licht ist aus, und Paul weiß nichts. ~~El último capítulo reúne a todos los personajes del A2 — y cierra la etapa.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Überraschung', kollokation: 'eine Überraschung planen', es: 'la sorpresa' },
        { wort: 'der Kuchen', kollokation: 'einen Kuchen backen', es: 'la tarta, el pastel' },
        { wort: 'backen', kollokation: 'Deniz hat einen Kuchen gebacken.', es: 'hornear, hacer (un pastel)' },
        { wort: 'das Geschenk, -e', kollokation: 'ein Geschenk kaufen', es: 'el regalo' },
        { wort: 'die Kerze, -n', kollokation: 'dreißig Kerzen auf dem Kuchen', es: 'la vela' },
        { wort: 'schmücken', kollokation: 'das Wohnzimmer schmücken', es: 'decorar, adornar' },
        { wort: 'der Luftballon, -s', kollokation: 'Luftballons an der Tür', es: 'el globo' },
        { wort: 'leise', kollokation: 'leise warten', es: 'en silencio, en voz baja' },
        { wort: 'rufen', kollokation: 'Alle rufen: „Überraschung!“', es: 'gritar, exclamar' },
        { wort: 'kaputt', kollokation: 'Mein Computer ist kaputt.', es: 'roto, estropeado' },
      ],
    },

    { type: 'rule' },

    // ── Geschichte ────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Überraschung für Paul',
      absaetze: [
        'Am Samstag hat Paul Geburtstag: Er wird dreißig ~~(cumple treinta)~~. Paul weiß von nichts ~~(no sabe nada)~~ — aber María hat alles organisiert ~~(organizado)~~. Sie hat Deniz und Carla eingeladen, und auch Frau Krüger. Die alte Dame hat zuerst „Nein, nein“ gesagt — und dann: „Na gut. Aber um zehn Uhr ist Schluss! ~~(¡a las diez se acabó!)~~“',
        'Am Vormittag kaufen María und Carla im Supermarkt ein: Brot, Käse, Obst und Wasser — und Luftballons in allen Farben ~~(de todos los colores)~~. Am Nachmittag **schmücken** sie Marías Wohnzimmer. Deniz kommt nach dem Feierabend und hat einen **Kuchen** **gebacken** — mit Schokolade ~~(chocolate)~~, natürlich. Carla bringt die Musik mit, und María stellt dreißig kleine **Kerzen** auf den Kuchen. Das **Geschenk** liegt auf dem Tisch: ein großes Foto vom Ausflug nach Potsdam. Um halb sieben ist alles fertig ~~(listo)~~.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Um sieben ruft María Paul an. „Paul? Kannst du kommen? Mein Computer ist **kaputt**.“ Paul lacht ~~(se ríe)~~: „Schon wieder? ~~(¿otra vez?)~~ Ich komme.“ Alle warten **leise** im Wohnzimmer. Das Licht ist aus ~~(la luz está apagada)~~. Dann macht Paul die Tür auf — und alle **rufen**: „Überraschung! Alles Gute zum Geburtstag! ~~(¡feliz cumpleaños!)~~“',
        'Paul sagt zuerst nichts. Er steht an der Tür und schaut ~~(mira)~~: Deniz mit dem Kuchen, Carla mit der Musik, Frau Krüger mit Blumen ~~(flores)~~ — und María in der Mitte ~~(en el medio)~~. Dann lacht er und lacht. „Mein Computer ist gar nicht kaputt, oder?“ — „Nein“, sagt María. „Dein Computer ist ganz gesund.“ ~~(chiste: tu ordenador está sanísimo)~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Es ist ein schöner Abend. Sie essen Kuchen, hören Musik und erzählen ~~(cuentan)~~ Geschichten. Carla tanzt ~~(baila)~~ mit Deniz durch das kleine Wohnzimmer. Deniz erzählt vom Café: „Ein Gast hat heute fünf Kaffee bestellt — für sich allein! ~~(para él solo)~~“ Frau Krüger erzählt von Berlin, trinkt ein Glas Wein ~~(vino)~~ — und um elf sitzt sie immer noch auf dem Sofa und lacht am lautesten ~~(es la que más se ríe)~~. Von „Schluss um zehn“ spricht niemand ~~(nadie)~~ mehr.',
        'Paul freut sich sehr über das Geschenk. „Potsdam“, sagt er. „Das war ein guter Tag.“ — „Der Zug war kalt“, sagt María, „und dann war ich drei Tage krank!“ Alle lachen. Paul geht als Letzter ~~(el último)~~. An der Tür sagt er: „Danke, María. Der Kuchen war gut. Aber der Abend mit dir — der war besser.“ María lächelt ~~(sonríe)~~ noch lange.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~(Última lectura del A2: responde en Perfekt cuando la historia lo haga.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum sagt María am Telefon: „Mein Computer ist kaputt“?',
        'Wer hat den Kuchen gebacken, und wer hat die Musik mitgebracht?',
        'Was ist das Geschenk für Paul?',
        'Was macht Frau Krüger um elf Uhr?',
      ],
      loesungen: [
        'Das ist ein Trick ~~(un truco)~~: Paul soll kommen, aber die Party ist eine **Überraschung** — er weiß von nichts.',
        '**Deniz** hat den Kuchen **gebacken**; **Carla** hat die Musik **mitgebracht**.',
        'Ein großes **Foto vom Ausflug nach Potsdam**.',
        'Sie sitzt **immer noch auf dem Sofa** und **lacht am lautesten** — von „Schluss um zehn“ spricht niemand mehr.',
      ],
    },

    { type: 'rule' },

    // ── Schluss ───────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Zusammenfassung — Wie es weitergeht',
      card: true,
      titel: 'Ende von Teil 2',
      absaetze: [
        'Ein Jahr in Berlin: María hat eine Wohnung, eine Arbeit und Freunde. Am Anfang hatte sie oft Angst ~~(miedo)~~ — vor dem Telefon, vor der Sprache, vor den Formularen. Jetzt nimmt sie Bestellungen auf Deutsch, geht allein zum Arzt und macht Witze ~~(bromas)~~ mit Frau Krüger.',
        'Und es geht weiter: Im **B1-Kurs** sucht María eine neue Arbeit, zieht mit Carla zusammen ~~(se muda con Carla)~~ … und die Geschichte mit Paul? Die fängt gerade erst an. ~~(no ha hecho más que empezar)~~ Bis bald!',
      ],
    },
  ],
}
