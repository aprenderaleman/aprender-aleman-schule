// Lektion 04 · Das Passiv & seine Ersatzformen

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'C1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Das Passiv & seine Ersatzformen',
  lead: 'Die Handlung in den Vordergrund, den Handelnden in den Hintergrund — samt der Alternativen, die man auf C1 beherrscht.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Vorgangs- und Zustandspassiv unterscheiden',
        'Passiv mit Modalverben bilden',
        'gängige Passiversatzformen aktiv verwenden',
      ],
    },

    { type: 'rule' },

    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'Vorgang',
          titel: 'Vorgangspassiv — werden + Partizip II',
          text: 'Der Prozess. __Das Haus **wird gebaut**.__',
        },
        {
          badge: 'Zustand',
          titel: 'Zustandspassiv — sein + Partizip II',
          text: 'Das Ergebnis. __Das Haus **ist gebaut**.__',
        },
        {
          badge: '+ Modal',
          titel: 'Passiv mit Modalverb',
          text: '__Das Problem **muss gelöst werden**.__',
        },
      ],
    },

    {
      type: 'beispiele',
      eyebrow: 'Passiversatzformen',
      items: [
        { text: 'Das Problem **lässt sich** lösen.', gl: '— sich lassen + Inf. = kann gelöst werden' },
        { text: 'Das Problem **ist zu** lösen.', gl: '— sein + zu + Inf. = muss/kann gelöst werden' },
        { text: 'Das Problem ist **lösbar**.', gl: '— Adjektiv auf -bar' },
        { text: '**Man** löst das Problem.', gl: '— unpersönliches man' },
      ],
    },

    {
      type: 'vergleich',
      titel: 'Eine Aussage, vier Formen',
      zeilen: [
        { satz: 'Das Problem kann gelöst werden.', label: 'Passiv + Modal' },
        { satz: 'Das Problem lässt sich lösen.', label: 'sich lassen' },
        { satz: 'Das Problem ist lösbar.', label: '-bar' },
        { satz: 'Das Problem ist zu lösen.', label: 'sein + zu + Inf.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben/Sprechen** wirkt ein variierter Gebrauch souverän; im **Lesen** erscheinen die Ersatzformen als Umschreibung derselben Aussage — erkenne die Synonymie und lass dich nicht täuschen.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Formuliere mit einer Passiversatzform.',
      aufgaben: [
        'Man kann diese Aufgabe leicht erledigen.',
        'Man muss den Fehler sofort beheben.',
      ],
      loesungen: [
        'Diese Aufgabe **lässt sich** leicht **erledigen**. / … **ist** leicht **zu erledigen**. / … ist leicht **erledigbar**.',
        'Der Fehler **ist** sofort **zu beheben**.',
      ],
    },
  ],
}
