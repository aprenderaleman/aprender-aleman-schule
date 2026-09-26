// Übungsheft B2 — Lektion 42: Prüfungssimulation 2 + Strategien
export default {
  lektion: 42,
  titel: 'Übungsheft — Prüfungssimulation 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Abschließende Wiederholung der B2-Grammatik: Wähle jeweils die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Mieten steigen weiter, {1} die Stadt jedes Jahr neue Wohnungen baut. {2} ziehen immer mehr Familien aufs Land.',
          bank: ['obwohl', 'Deshalb', 'weil', 'Trotzdem'],
          loesungen: { 1: 'obwohl', 2: 'Deshalb' },
        },
        {
          typ: 'luecke',
          text: 'Je länger ich in Hamburg wohne, {1} besser gefällt mir die Stadt. Ich möchte {2} umziehen noch meine Stelle wechseln.',
          bank: ['desto', 'weder', 'sowohl', 'als'],
          loesungen: { 1: 'desto', 2: 'weder' },
        },
        {
          typ: 'luecke',
          text: 'An deiner Stelle {1} ich das Angebot annehmen. Das Gehalt {2} deutlich höher als jetzt.',
          bank: ['würde', 'wäre', 'hätte', 'werde'],
          loesungen: { 1: 'würde', 2: 'wäre' },
        },
        {
          typ: 'luecke',
          text: 'Die Brücke ist im letzten Jahr renoviert {1}. Die Kosten müssen allerdings von der Stadt übernommen {2}.',
          bank: ['worden', 'werden', 'geworden', 'wurden'],
          loesungen: { 1: 'worden', 2: 'werden' },
        },
        {
          typ: 'mc',
          frage: '___ der Sommerferien bleibt die Stadtbibliothek geschlossen.',
          optionen: ['Trotz', 'Während', 'Statt'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die Stadt hat lange ___ einer Lösung für das Verkehrsproblem gesucht.',
          optionen: ['nach', 'für', 'auf'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['folglich', 'dennoch', 'stattdessen', 'außerdem', 'zumal'],
          rechts: ['Folge', 'Einräumung', 'Alternative', 'Ergänzung', 'zusätzlicher Grund'],
          loesung: {
            folglich: 'Folge',
            dennoch: 'Einräumung',
            stattdessen: 'Alternative',
            außerdem: 'Ergänzung',
            zumal: 'zusätzlicher Grund',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich hätte gestern länger arbeiten gemusst.', 'Ich hätte gestern länger arbeiten müssen.'],
          loesung: 1,
          warum: 'Modal con otro infinitivo → doble infinitivo: **hätte … arbeiten müssen**, nunca *gemusst*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch, um in Wien zu studieren.', 'Ich lerne Deutsch, für in Wien zu studieren.'],
          loesung: 0,
          warum: 'La finalidad («para + infinitivo») se expresa con **um … zu**; *für* no introduce infinitivos.',
        },
        {
          typ: 'satzbau',
          woerter: ['wird', 'geplante', 'Die', 'gebaut', 'seit', 'endlich', 'Brücke', 'Jahren'],
          loesung: 'Die seit Jahren geplante Brücke wird endlich gebaut.',
          alt: ['Endlich wird die seit Jahren geplante Brücke gebaut.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug und löse die Aufgaben.',
      textTitel: 'Artikelauszug: Ehrenamt im Wandel',
      text: 'Rund ein Drittel der Erwachsenen engagiert sich ehrenamtlich — im Sportverein, in der Nachbarschaftshilfe oder im Umweltschutz. Doch die Art des Engagements hat sich verändert, wie eine neue Umfrage zeigt. Während sich frühere Generationen oft über Jahrzehnte an einen Verein banden, bevorzugen viele Jüngere heute kurzfristige Projekte. Sie helfen zum Beispiel ein Wochenende lang bei einem Stadtfest oder begleiten einige Monate lang Geflüchtete bei Behördengängen. Für die Vereine ist das eine Herausforderung: Vorstandsposten, die regelmäßige Arbeit erfordern, bleiben immer häufiger unbesetzt. Die Autorinnen der Umfrage sehen darin allerdings keinen Rückgang der Hilfsbereitschaft. Die Menschen seien nicht weniger engagiert als früher, sondern flexibler. Wer Freiwillige gewinnen wolle, müsse daher Aufgaben anbieten, die zeitlich klar begrenzt seien. Einige Vereine haben bereits reagiert und verteilen große Ämter auf mehrere Personen. Ob das genügt, um die Vereinsarbeit langfristig zu sichern, wird sich in den nächsten Jahren zeigen.',
      items: [
        { typ: 'rf', aussage: 'Laut der Umfrage engagieren sich viele jüngere Menschen lieber in zeitlich begrenzten Projekten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welches Problem haben viele Vereine?',
          optionen: ['Für Stadtfeste finden sie keine Helfer mehr.', 'Für Vorstandsposten finden sich immer seltener Freiwillige.', 'Sie erhalten weniger finanzielle Unterstützung.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Autorinnen der Umfrage meinen, dass die Hilfsbereitschaft abgenommen hat.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie reagieren einige Vereine auf die Entwicklung?',
          optionen: ['Sie verteilen große Ämter auf mehrere Personen.', 'Sie bieten nur noch kurzfristige Projekte an.', 'Sie zahlen ihren Vorständen ein Gehalt.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Stellungnahme mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'In einer Radiosendung wird gefragt, ob junge Erwachsene nach der Schule ein verpflichtendes soziales Jahr leisten sollten, zum Beispiel in einem Pflegeheim oder in einem Sportverein. Schreib deine Stellungnahme für die Website der Sendung.',
      punkte: [
        'Nimm Stellung und begründe deine Meinung.',
        'Nenne ein Gegenargument und bewerte es.',
        'Schlag eine Alternative oder einen Kompromiss vor.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Meiner Meinung nach sollte ein soziales Jahr nicht verpflichtend sein, obwohl ich die Idee grundsätzlich gut finde. Wer freiwillig hilft, ist in der Regel motivierter und leistet bessere Arbeit. Befürworter argumentieren zwar, dass ein Pflichtjahr den Zusammenhalt der Gesellschaft stärken würde. Das mag stimmen, aber junge Menschen, die gezwungen werden, verlieren schnell die Lust am Engagement. Stattdessen sollte der Staat das freiwillige soziale Jahr attraktiver machen, etwa durch eine bessere Bezahlung oder Vorteile bei der Studienplatzvergabe. So würden sich mehr junge Leute engagieren, ohne dass man sie dazu zwingen müsste.',
    },
  ],
}
