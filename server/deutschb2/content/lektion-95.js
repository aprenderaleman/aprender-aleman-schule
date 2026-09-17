// Geschichte 5 · Der Neuanfang — Lectura graduada B2
//
// Saga «Geschichten»: María bleibt — zu neuen Bedingungen. Im Herbst
// erscheint «Zwölf Anfänge», und ein halbvolles Notizbuch deutet an,
// wie es im C1 weitergeht.

export default {
  spec: ['Geschichte 5', 'Lectura graduada', 'Niveau B2', 'Wortschatz: Bloque 0-4'],
  h1: 'Der Neuanfang',
  lead: 'Drei Sätze, ein neuer Vertrag, ein Karton frisch aus der Druckerei — und ein Notizbuch, das ein Geheimnis enthält.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Gehaltserhöhung, -en', kollokation: 'eine Gehaltserhöhung aushandeln', es: 'el aumento de sueldo' },
        { wort: 'aushandeln', kollokation: 'neue Bedingungen aushandeln', es: 'negociar (hasta cerrar el acuerdo)' },
        { wort: 'die Projektleitung (nur Sg.)', kollokation: 'die Projektleitung offiziell übernehmen', es: 'la dirección del proyecto' },
        { wort: 'der Umschlag, Umschläge', kollokation: 'der Umschlag des Buches', es: 'la cubierta (del libro)' },
        { wort: 'erscheinen', kollokation: 'das Buch erscheint im Herbst', es: 'publicarse, salir a la venta' },
        { wort: 'das Exemplar, -e', kollokation: 'das erste Exemplar in den Händen halten', es: 'el ejemplar' },
        { wort: 'die Rezension, -en', kollokation: 'eine wohlwollende Rezension', es: 'la reseña' },
        { wort: 'wohlwollend', kollokation: 'wohlwollend urteilen', es: 'benévolo, favorable' },
        { wort: 'anstoßen (auf + Akk.)', kollokation: 'auf den Erfolg anstoßen', es: 'brindar (por)' },
        { wort: 'sich lohnen', kollokation: 'die Mühe hat sich gelohnt', es: 'valer la pena' },
        { wort: 'die Mühe, -n', kollokation: 'viel Mühe kosten', es: 'el esfuerzo' },
        { wort: 'das Kapitel, -', kollokation: 'ein neues Kapitel beginnen', es: 'el capítulo' },
      ],
      hinweis: 'Die letzte Geschichte des B2-Kurses. Achte auf die kleinen Rückblicke: Vieles, was hier auftaucht, kennst du aus den Geschichten 1 bis 4. ~~Cierre de etapa — y puente al C1.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Der Neuanfang',
      absaetze: [
        'Herr Lindström hörte zu, ohne sie ein einziges Mal zu unterbrechen. María hatte ihre drei Sätze vorbereitet, und sie sagte sie so ruhig, wie sie konnte. Erstens: Sie habe ein Angebot vom Verlag Silberweg erhalten und es abgelehnt, weil sie ihr Projekt zu Ende führen wolle — das solle er nicht als Drohung verstehen, sondern als Tatsache. Zweitens: Sie wolle die **Projektleitung** auch offiziell übernehmen, mit Titel und Verantwortung, nicht nur in der Praxis. Drittens: Sie halte eine **Gehaltserhöhung** für angemessen und habe eine Zahl mitgebracht. Sie legte einen Zettel auf den Tisch, so wie Frau Vogel es bei ihr getan hatte — nur war ihre Zahl realistischer.',
        'Ihr Chef sah lange auf den Zettel. „Sie hätten drüben mehr verdient", sagte er schließlich. „Ich weiß", sagte María. „Aber ich hätte drüben nicht dieses Buch." Herr Lindström nickte langsam. „Vierundzwanzig Stunden", sagte er. „Solche Entscheidungen treffe ich nie sofort." Am Dienstagmorgen lag ein geänderter Vertrag auf ihrem Schreibtisch, und darauf klebte ein gelber Zettel mit drei Wörtern: „Ordentlich verhandelt. L."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Sommer verging schneller, als María gucken konnte. Mit den zwölf Autorinnen und Autoren wurden letzte Fassungen abgestimmt, Tobias’ Bleistiftkommentare machten jede Geschichte besser, und über den **Umschlag** wurde zwei Wochen lang diskutiert, bis Amira in einer Besprechung trocken fragte, warum auf einem Buch über Anfänge keine offene Tür sein könne. Der Titel dagegen stand plötzlich einfach im Raum, an einem Dienstag, und alle wussten sofort: Das ist er. **„Zwölf Anfänge"**.',
        'Im Oktober rief die **Druckerei** an: Die Kartons seien unterwegs. Als der Fahrer sie ins Büro trug, versammelte sich der ganze Verlag im Flur. María öffnete den ersten Karton mit einer Schere, sehr langsam, und hielt dann das erste **Exemplar** in den Händen: dunkelblauer Umschlag, eine offene Tür, zwölf Namen auf der Rückseite. Es roch nach frischem Papier. „Na los", sagte Tobias neben ihr, „aufschlagen." Sie schlug die erste Seite auf und las ihren eigenen Namen: Herausgegeben von María Vega. ~~(herausgeben: editar, ser la editora responsable)~~ Sie hatte sich vorgenommen, nicht zu weinen, und schaffte es fast.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Das Buch **erschien** an einem Freitag, und die Buchhandlung Lesezeit feierte das mit einem Abend, der noch voller war als der im Juni. Diesmal funktionierte der Beamer — und wurde trotzdem nicht benutzt, „aus Prinzip", wie María dem Publikum erklärte. Jakub, längst gesund, las endlich selbst die Geschichte seines Großvaters, und Frau Albrecht hatte das Schaufenster komplett mit „Zwölf Anfängen" dekoriert. Am Montag darauf stand in der Stadtzeitung eine lange, **wohlwollende** **Rezension**. Der Schlusssatz lautete: „Man möchte von allen zwölf sofort mehr lesen." Tobias schnitt den Artikel aus und hängte ihn an die Bürotür — er, der am Anfang gefragt hatte, wer so ein Buch überhaupt kaufen solle. Auf Marías Frage, ob er das noch wisse, sagte er nur: „Ich bestreite alles." ~~(bestreiten: negar)~~',
        'Die zwölf Autorinnen und Autoren standen an diesem Abend zum ersten Mal alle zusammen in einem Raum, und María beobachtete, wie sie sich gegenseitig ihre Bücher signierten, verlegen und stolz zugleich. Amira fotografierte das Schaufenster von außen, „für meine Mutter", wie sie sagte. Ein älterer Kunde kaufte gleich drei Exemplare und erklärte, ohne jemand Bestimmten anzusprechen, so etwas habe er seit Jahren gesucht: Geschichten von Leuten, die dieses Land mit frischen Augen sehen.',
        'Am Abend der Feier hob Herr Lindström sein Glas, wartete, bis es still war, und hielt die kürzeste Rede der Verlagsgeschichte: „Auf die, die anfangen." Alle **stießen an** — die Autoren, das Team, Frau Albrecht, Paul, Carla, sogar Deniz, der zwei Bücher gekauft hatte, „eins zum Lesen, eins fürs Regal im Café".',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Viel später, als die Gläser leer waren, ging María mit Paul die Runde um den See im Volkspark, die inzwischen ihre Runde geworden war. Sie dachte an die junge Frau, die vor Jahren mit zwei Koffern und drei Sätzen Deutsch in der Gartenstraße angekommen war, an das Café Sonne, an die erste Bewerbung beim Verlag, an all die **Mühe** dazwischen. „Und?", fragte Paul. „Hat es **sich gelohnt**?" María blieb stehen. „Frag mich in zehn Jahren", sagte sie. „Aber ich glaube, das hier war erst das erste **Kapitel**."',
        'Was sie Paul erst an diesem Abend verriet: Beim vielen Lesen in diesem Jahr hatte sie irgendwann selbst angefangen zu schreiben. In ihrer Tasche steckte ein Notizbuch, halb voll, auf Spanisch und auf Deutsch, durcheinander wie ihr Leben. Auf der ersten Seite stand ein einziger Satz, noch ohne Titel, noch ohne Plan. „Vielleicht", sagte María und sah über den dunklen See, „ist das nächste Manuskript, das bei Morgenlicht auf dem Tisch liegt, meins."',
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
        'Welche drei Punkte trägt María Herrn Lindström vor, und wie reagiert er?',
        'Wie heißt das fertige Buch, woher kommen Titel und Umschlagmotiv, und wie reagiert die Presse?',
        'Tobias hängt die Rezension an die Bürotür und sagt: „Ich bestreite alles." Was sagt diese Szene über die Entwicklung seiner Figur seit Geschichte 1?',
        'Lindströms Trinkspruch lautet: „Auf **die, die** anfangen." Analysiere die Konstruktion: Was für ein Satz ist das grammatisch?',
      ],
      loesungen: [
        'Erstens: Sie hat das **Angebot von Silberweg abgelehnt** — als Tatsache, nicht als Drohung. Zweitens: Sie will die **Projektleitung offiziell** übernehmen. Drittens: Sie hält eine **Gehaltserhöhung** für angemessen. Lindström bittet um 24 Stunden Bedenkzeit — am nächsten Morgen liegt der **geänderte Vertrag** auf ihrem Tisch, mit dem Zettel „Ordentlich verhandelt".',
        'Das Buch heißt **„Zwölf Anfänge"**. Das Umschlagmotiv — eine **offene Tür** — stammt aus einer trockenen Frage von Amira; der Titel „stand plötzlich im Raum". Die Stadtzeitung bringt eine **lange, wohlwollende Rezension** mit dem Schlusssatz, man möchte von allen zwölf sofort mehr lesen.',
        'Aus dem Skeptiker mit verschränkten Armen ist ein **stolzes Teammitglied** geworden: Er hängt ausgerechnet den Beweis seines Irrtums öffentlich auf. Sein „Ich bestreite alles" ist **Selbstironie** — er weiß genau, dass alle sich an seine Skepsis erinnern, und kann inzwischen darüber lachen. ~~Inferencia: el humor como forma de admitir un error sin decirlo.~~',
        'Nach der Präposition steht das **Demonstrativpronomen** „die" (= diejenigen), gefolgt von einem **Relativsatz** mit dem Relativpronomen „die": „auf diejenigen, die anfangen". Das Verb steht am Ende des Relativsatzes — typisch für Nebensätze.',
      ],
    },

    { type: 'rule' },

    // ── Zum Schluss ───────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Zum Schluss',
      card: true,
      titel: 'Wie es weitergeht',
      absaetze: [
        'Damit endet die B2-Staffel von Marías Geschichte: vom ersten „Trauen Sie es sich zu?" bis zum eigenen Namen auf der ersten Seite eines Buches. Du hast mit ihr verhandelt, gestritten, improvisiert und gefeiert — und dabei den Wortschatz und die Grammatik des ganzen Kurses in Aktion gesehen.',
        'Das halbvolle Notizbuch ist kein Zufall: Im Kurs **Deutsch C1** schreibt María selbst — sie verteidigt ihre Ideen in Diskussionen, hält Vorträge und legt am Ende ihr erstes eigenes Manuskript auf Herrn Lindströms Tisch. Wenn du so weit bist, liest du es im Original. **Bis dahin: auf die, die anfangen.**',
      ],
    },
  ],
}
