// Geschichte 1 · Das neue Projekt — Lectura graduada B2
//
// Saga «Geschichten»: María Vega im Verlag Morgenlicht. Herr Lindström
// vertraut ihr ein großes Projekt an: eine Sammlung von Kurzgeschichten
// junger Autorinnen und Autoren.

export default {
  spec: ['Geschichte 1', 'Lectura graduada', 'Niveau B2', 'Wortschatz: Bloque 0-1'],
  h1: 'Das neue Projekt',
  lead: 'Ein grauer Montagmorgen, eine Mappe voller Manuskripte — und ein Satz von Herrn Lindström, der alles ändert.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'das Manuskript, -e', kollokation: 'ein Manuskript einschicken', es: 'el manuscrito' },
        { wort: 'der Nachwuchsautor, -en / die Nachwuchsautorin, -nen', kollokation: 'Nachwuchsautoren fördern', es: 'el autor joven, emergente' },
        { wort: 'die Kurzgeschichte, -n', kollokation: 'eine Kurzgeschichte schreiben', es: 'el relato corto' },
        { wort: 'die Sammlung, -en', kollokation: 'eine Sammlung von Kurzgeschichten', es: 'la colección, la antología' },
        { wort: 'veröffentlichen', kollokation: 'einen Text veröffentlichen', es: 'publicar' },
        { wort: 'anvertrauen', kollokation: 'jemandem ein Projekt anvertrauen', es: 'confiar (algo a alguien)' },
        { wort: 'sich (Dat.) etwas zutrauen', kollokation: 'sich eine Aufgabe zutrauen', es: 'verse capaz de algo' },
        { wort: 'bereuen', kollokation: 'eine Entscheidung bereuen', es: 'arrepentirse de' },
        { wort: 'die Druckerei, -en', kollokation: 'Termine mit der Druckerei', es: 'la imprenta' },
        { wort: 'der Lektor, -en / die Lektorin, -nen', kollokation: 'als Lektor im Verlag arbeiten', es: 'el editor de mesa (revisa los textos)' },
        { wort: 'die Arme verschränken', kollokation: 'schweigend die Arme verschränken', es: 'cruzar los brazos' },
      ],
      hinweis: 'Diese Wörter tragen die Geschichte. Lies sie zweimal — dann läuft der Text fast von allein. ~~Todo lo demás ya lo conoces del curso.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Das neue Projekt',
      absaetze: [
        '„Frau Vega, haben Sie einen Moment?" Es war ein grauer Montagmorgen im Februar, und wenn Herr Lindström diese Frage stellte, war es keine Frage. María speicherte die Datei, an der sie gerade arbeitete, nahm ihren Block und ging durch den langen Flur zu seinem Büro. Seit zwei Jahren arbeitete sie nun im Verlag Morgenlicht — erst als Assistentin, inzwischen koordinierte sie Termine, Verträge und kleinere Projekte. Die kurzen Sätze ihres Chefs konnte sie mittlerweile gut deuten. Kurze Sätze bedeuteten: Es ist wichtig.',
        '„Setzen Sie sich", sagte Herr Lindström und schob eine dicke Mappe über den Tisch. „Öffnen Sie das." In der Mappe lagen Texte, Namen, handschriftliche Notizen. „Seit Monaten werden uns **Manuskripte** von jungen Autorinnen und Autoren geschickt", erklärte er. „Gute Texte. Sehr gute Texte. Und wir tun nichts damit." Er machte eine Pause, wie immer, wenn der wichtigste Satz noch kam. „Das soll sich ändern."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Plan war einfach und groß zugleich: eine **Sammlung** von **Kurzgeschichten**, geschrieben von **Nachwuchsautoren**, die noch nie etwas **veröffentlicht** hatten. Zwölf Texte, ein Buch, ein Jahr Zeit. „Die Auswahl der Texte, der Kontakt mit den Autoren, die Zusammenarbeit mit dem Lektorat, die Termine mit der **Druckerei** — alles aus einer Hand", sagte Herr Lindström. „Und diese Hand, Frau Vega, soll Ihre sein. Ich möchte Ihnen das Projekt **anvertrauen**."',
        'María brauchte einen Moment. „Warum ich?", fragte sie schließlich. „Sie kennen den Verlag. Sie kennen unsere Leser. Und Sie wissen selbst, wie es ist, in einer neuen Sprache anzukommen. Die Hälfte dieser Autoren schreibt auf Deutsch, obwohl Deutsch nicht ihre Muttersprache ist." Er sah sie ruhig an. „Trauen Sie es sich zu?"',
        'Sie dachte an ihre erste Woche in Berlin, an das Wörterbuch auf dem Küchentisch in der Gartenstraße, an die Prüfungen, die sie seitdem abgelegt und bestanden hatte. Wenn sie jetzt Nein sagte, würde sie es ihr Leben lang **bereuen** — so viel war sicher. „Ja", sagte sie. „Das traue ich mir zu." — „Gut." Herr Lindström stand auf, was bei ihm das Ende jeder Besprechung bedeutete. „Budget und Fristen besprechen wir am Donnerstag. Und, Frau Vega — machen Sie ein gutes Buch."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Die Besprechung am Donnerstag dauerte genau zwanzig Minuten, wie fast alle Besprechungen mit Herrn Lindström. Das Budget war kleiner, als María gehofft hatte, die Fristen waren enger, als ihr lieb war: Bis zum Sommer musste die Auswahl stehen, im Herbst sollte gedruckt werden. „Das ist knapp", sagte sie ehrlich. „Das ist es", antwortete ihr Chef. „Wenn es einfach wäre, hätte ich es längst jemand anderem gegeben." Auf dem Weg zurück an ihren Schreibtisch merkte María, dass sie lächelte — vor Nervosität, vor Freude, wahrscheinlich vor beidem gleichzeitig.',
        'Am Abend saß sie mit Carla in der Küche ihrer WG und erzählte alles — zweimal, weil Carla beim ersten Mal vor Freude ständig unterbrach. Später kam Paul vorbei, mit einer Pizza und diesem ruhigen Lächeln, das er immer hatte, wenn María aufgeregt war. „Und wenn ich es nicht schaffe?", fragte sie irgendwann leise. „Zwölf Autoren, ein knappes Budget, und am Ende muss ein fertiges Buch auf dem Tisch liegen." Paul legte ihr ein Stück Pizza auf den Teller. „Du hast auch mal gedacht, dass du nie einen ganzen deutschen Satz verstehen würdest", sagte er. „Und heute korrigierst du meine E-Mails."',
        'Sogar Frau Krüger bekam die Neuigkeit mit, als María ihr am nächsten Morgen im Treppenhaus begegnete. „Ein Buch also", sagte die alte Dame und nickte langsam. „Dann machen Sie es ordentlich." Aus dem Mund ihrer Vermieterin war das fast eine Umarmung.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'In den folgenden Tagen las María Manuskripte — im Büro, in der U-Bahn, einmal sogar im Café Sonne, wo Deniz ihr kommentarlos einen dritten Kaffee hinstellte. Sie legte Listen an, unterstrich Textstellen, notierte Stärken und Schwächen. Aus dreißig Seiten wurden hundert, aus hundert dreihundert. Langsam entstand ein Plan: welche Texte in die Sammlung aufgenommen werden sollten, welche Autoren angeschrieben werden mussten, wo noch Lücken blieben.',
        'Nur eine Sache beschäftigte sie mehr, als sie zugeben wollte. Als das Projekt im Team vorgestellt worden war, hatten alle applaudiert — fast alle. Tobias Franke, der **Lektor**, der seit fünfzehn Jahren im Verlag arbeitete, hatte nur **die Arme verschränkt** und gesagt: „Kurzgeschichten von Unbekannten. Na dann viel Glück." Es war kein Streit gewesen, nicht einmal ein lauter Satz. Aber María spürte genau: Dieses Gespräch war noch nicht zu Ende.',
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
        'Was für ein Buch soll im Verlag Morgenlicht entstehen, und wie viel Zeit gibt es dafür?',
        'Mit welchen Argumenten begründet Herr Lindström, dass gerade María das Projekt leiten soll?',
        '„Dann machen Sie es ordentlich." — Warum ist dieser Satz von Frau Krüger „fast eine Umarmung"?',
        'Im Text steht: „Seit Monaten **werden** uns Manuskripte **geschickt**." Warum benutzt der Text hier das Passiv?',
      ],
      loesungen: [
        'Eine **Sammlung von zwölf Kurzgeschichten**, geschrieben von Nachwuchsautoren, die noch nie etwas veröffentlicht haben. Dafür gibt es **ein Jahr** Zeit.',
        'María **kennt den Verlag und seine Leser**, und sie weiß selbst, wie es ist, **in einer neuen Sprache anzukommen** — wie die Hälfte der Autoren, die auf Deutsch schreiben, obwohl es nicht ihre Muttersprache ist.',
        'Frau Krüger ist streng und zeigt Gefühle fast nie. Ihr trockener Satz ist **ihre Art zu sagen, dass sie María die Aufgabe zutraut** — mehr Anerkennung gibt es bei ihr nicht. ~~Es una inferencia: el texto no lo dice, lo muestra.~~',
        'Weil **unwichtig ist, wer schickt** — im Mittelpunkt steht der Vorgang: Es kommen ständig Manuskripte an. Form: **Passiv Präsens** (werden + Partizip II).',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nicht alle im Verlag freuen sich über Marías Projekt. In **Geschichte 2** werden aus verschränkten Armen offene Worte — und María lernt, dass man Respekt nicht geschenkt bekommt, sondern gewinnt.',
    },
  ],
}
