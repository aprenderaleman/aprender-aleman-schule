// Geschichte 3 · Die Präsentation — Lectura graduada B2
//
// Saga «Geschichten»: der große Abend in der Buchhandlung Lesezeit.
// Volles Haus, tote Technik, ein fehlender Autor — und María improvisiert.

export default {
  spec: ['Geschichte 3', 'Lectura graduada', 'Niveau B2', 'Wortschatz: Bloque 0-3'],
  h1: 'Die Präsentation',
  lead: 'Wochenlang hat María jeden Schritt geplant. Dann bleibt der Bildschirm schwarz, ein Autor sagt ab — und aus dem Plan wird ein Abend, den niemand vergisst.',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'die Lesung, -en', kollokation: 'eine Lesung veranstalten', es: 'la lectura pública' },
        { wort: 'die Buchhandlung, -en', kollokation: 'eine kleine, feine Buchhandlung', es: 'la librería' },
        { wort: 'die Inhaberin, -nen / der Inhaber, -', kollokation: 'die Inhaberin der Buchhandlung', es: 'la dueña, el dueño' },
        { wort: 'das Publikum (nur Sg.)', kollokation: 'vor Publikum sprechen', es: 'el público' },
        { wort: 'das Lampenfieber (nur Sg.)', kollokation: 'Lampenfieber haben', es: 'los nervios escénicos' },
        { wort: 'die Folie, -n', kollokation: 'Folien für den Vortrag vorbereiten', es: 'la diapositiva' },
        { wort: 'die Panne, -n', kollokation: 'eine technische Panne', es: 'el fallo, la avería' },
        { wort: 'der Beamer, -', kollokation: 'der Beamer fällt aus', es: 'el proyector' },
        { wort: 'improvisieren', kollokation: 'frei improvisieren müssen', es: 'improvisar' },
        { wort: 'einspringen', kollokation: 'kurzfristig für jemanden einspringen', es: 'sustituir a alguien de improviso' },
        { wort: 'der Applaus (nur Sg.)', kollokation: 'kräftiger Applaus', es: 'el aplauso' },
        { wort: 'die Vorbestellung, -en', kollokation: 'Exemplare vorbestellen', es: 'la reserva anticipada' },
      ],
      hinweis: 'Beobachte, wie der Text Spannung aufbaut: erst der perfekte Plan, dann Panne für Panne. ~~El clásico «todo bajo control» que nunca sale bien.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Die Präsentation',
      absaetze: [
        'Die Buchhandlung Lesezeit lag in einer ruhigen Straße in Charlottenburg, und ihre **Inhaberin**, Frau Albrecht, arbeitete seit Jahren mit dem Verlag Morgenlicht zusammen. Für den Juniabend, an dem das Projekt zum ersten Mal öffentlich vorgestellt werden sollte, hatte sie achtzig Stühle bestellt, Wein kalt gestellt und die Einladung an ihre besten Kundinnen und Kunden verschickt. María hatte drei Wochen lang alles vorbereitet: fünfzehn **Folien**, einen genauen Ablaufplan, Kärtchen mit Stichwörtern. Zwei Nachwuchsautoren sollten lesen — Amira, deren Geschichte in einem Spätkauf ~~(el «Späti»: tienda de barrio abierta hasta la noche)~~ an der Ecke spielte, und Jakub, der über den ersten Winter seines Großvaters in Deutschland geschrieben hatte.',
        'Am Sonntag davor hatte María in der WG-Küche eine **Generalprobe** ~~(el ensayo general)~~ veranstaltet. Paul und Carla saßen als Publikum auf den Küchenstühlen, Carla stellte absichtlich gemeine Nachfragen, und Paul stoppte die Zeit. Beim dritten Durchgang saß jede Folie, jeder Übergang, jede Pause. „Zu perfekt", sagte Carla am Ende und griff in die Chipstüte. „Irgendetwas geht immer schief. Was machst du dann?" María lachte und winkte ab. Eine Woche später sollte sie an diesen Satz noch einmal denken.',
        'Um sechs Uhr, eine Stunde vor Beginn, klingelte Marías Handy. Jakub, mit kaum hörbarer Stimme: Fieber, Hals dick, die Ärztin habe ihm strengstens verboten zu lesen. Er entschuldigte sich ungefähr zwölf Mal. „Werden Sie gesund", sagte María, legte auf und starrte auf ihren schönen Ablaufplan, in dem jetzt ein Loch von fünfzehn Minuten klaffte ~~(klaffen: abrirse un hueco, quedar un vacío)~~.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Um sieben war jeder Stuhl besetzt, sogar zwischen den Regalen standen Leute. In der ersten Reihe saßen Herr Lindström, Tobias, Paul und Carla; Deniz hatte im Café Sonne kurzerhand die Schichten getauscht, um dabei zu sein. María trat ans Pult, begrüßte das **Publikum** — und drückte auf die Taste für die erste Folie. Der Bildschirm blieb schwarz. Frau Albrecht zog am Kabel, der **Beamer** brummte, dann startete der Laptop ein Update, das sich nicht abbrechen ließ. Jemand im Publikum kicherte. Achtzig Gesichter sahen María an, und ihr **Lampenfieber**, das sie den ganzen Tag mühsam unter Kontrolle gehalten hatte, war plötzlich sehr laut.',
        'Eine Sekunde lang dachte sie: Das war es. Die Präsentation, das Projekt, alles. Dann fiel ihr Blick auf den Stapel Manuskripte, den sie als Reserve mitgebracht hatte, und sie hörte innerlich Pauls Stimme: Du hast auch mal gedacht, dass du nie einen ganzen deutschen Satz verstehen würdest. María legte die Kärtchen weg, schob das Pult einen halben Meter zur Seite und trat direkt vor die erste Reihe. „Wissen Sie was?", sagte sie. „Die Technik streikt. Dann erzähle ich Ihnen die Geschichte eben so, wie man Geschichten erzählen sollte — ohne **Folien**."',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Sie erzählte frei. Von der grauen Mappe auf Herrn Lindströms Schreibtisch. Von Manuskripten, die in der U-Bahn gelesen und am Küchentisch sortiert wurden. Von zwölf Menschen, die noch nie etwas veröffentlicht hatten und trotzdem — oder gerade deshalb — Sätze schrieben, die man nicht mehr vergisst. Sie zitierte auswendig den ersten Satz von Amiras Geschichte, und als Amira danach las, war es so still, dass man die Straßenbahn draußen hören konnte.',
        'Dann kam das Loch im Programm. „Eigentlich würde jetzt Jakub lesen", sagte María. „Er liegt mit Fieber im Bett und ärgert sich vermutlich mehr als wir alle zusammen. Ich möchte nicht, dass Sie ohne seinen Text nach Hause gehen. Deshalb **springe** ich **ein** — mit seinem Einverständnis und mit meinem Akzent." Ein Lachen ging durch den Raum, ein freundliches. María las die ersten zwei Seiten von Jakubs Geschichte, langsam und mit ihrem spanischen Akzent, und am Ende sagte sie: „Dieser Text wurde von jemandem geschrieben, der Deutsch als zweite Sprache liebt. So wie ich." Der **Applaus** danach war der lauteste des Abends.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Später stand Frau Albrecht mit einem Glas Wein neben ihr. „In dreißig Jahren Buchhandel habe ich viele perfekte Präsentationen gesehen", sagte sie. „Vergessen habe ich fast alle. Ihren Abend werde ich nicht vergessen." Sie bestellte einhundert Exemplare vor — für das Schaufenster, wie sie sagte — und eine Journalistin einer Stadtzeitung fragte nach einem Interviewtermin. Herr Lindström verabschiedete sich mit einem einzigen Satz: „Gut improvisiert ist besser als perfekt geplant." Tobias grinste: „Ohne Folien war es sowieso besser."',
        'María lief mit Paul durch die warme Juninacht nach Hause, müde und glücklich. Sie ahnte nicht, dass an diesem Abend noch jemand im Publikum gesessen hatte: eine Frau mit grauem Blazer, die sich keine **Vorbestellung** notiert hatte, sondern einen Namen. Drei Tage später lag in Marías Postfach eine E-Mail. Absender: Verlag Silberweg. Betreff: „Ein Gespräch unter vier Augen?"',
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
        'Welche zwei Probleme treffen María kurz vor und während der Lesung?',
        'Wie rettet María den Abend? Nenne die drei wichtigsten Entscheidungen.',
        'Warum wirkt Marías Satz „So wie ich" so stark auf das Publikum?',
        'Im Text steht: „… ein Update, das sich nicht abbrechen **ließ**." Was drückt die Konstruktion „sich … lassen" hier aus, und wie könnte man den Satz im Passiv formulieren?',
      ],
      loesungen: [
        'Eine Stunde vor Beginn **sagt Jakub krank ab** — im Programm fehlen fünfzehn Minuten. Und beim Start der Präsentation **fällt die Technik aus**: Der Beamer bleibt schwarz, der Laptop startet ein Update.',
        'Sie **verzichtet auf die Folien** und spricht frei vor der ersten Reihe; sie **erzählt die Geschichte des Projekts** persönlich statt abstrakt; und sie **springt für Jakub ein** und liest seinen Text selbst vor.',
        'María macht sich in diesem Moment **persönlich und verletzlich**: Sie liest mit Akzent und stellt sich damit auf eine Stufe mit den Autoren, die auf Deutsch schreiben, obwohl es nicht ihre Muttersprache ist. Der Satz **beweist die Idee des Buches** an ihr selbst — das überzeugt mehr als jede Folie. ~~Inferencia: el texto muestra la reacción (el aplauso), no la explica.~~',
        '„sich abbrechen lassen" ist ein **Passiv-Ersatz mit Bedeutung „Möglichkeit"**: Das Update **konnte nicht abgebrochen werden**. Passiv-Variante mit Modalverb: „…, das nicht abgebrochen werden konnte."',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Eine E-Mail vom Verlag Silberweg — Konkurrenz, Geld, ein Gespräch unter vier Augen. In **Geschichte 4** bekommt María ein Angebot, das schwer abzulehnen ist. Und eine Woche, in der sie kaum schläft.',
    },
  ],
}
