export const statuses = [
  {
    name: '[burning|Burning]',
    effects: [
      'Any targets that are in a [burning] field at the end of the round receive [fire|1] damage.',
      'Targets with a [wet] status standing in a [burning] field at the end of the round loose the [wet] status and do not receive the [fire] damage.',
    ],
    shortEffects: [
      '[burning] + [water] => remove [burning]',
      'take 1 [fire|damage] if you and your round at a [burning] field',
    ]
  },
  {
    name: '[wet|Wet]',
    effects: [
      'A target receives a [wet] status when hit by a [water] spell .',
      'A [wet] target receives extra 1 [lightning] damage.',
      'A [wet] target receives hit by a [frost] spell looses the [wet] status and gets a [frozen] status instead.',
    ],
    shortEffects: [
      '[wet] + [fire] => remove [wet]',
      '[wet] + [frost] => [frozen]',
      'You take 1 extra [lightning|damage]',
    ]
  },
  {
    name: '[frozen|Frozen]',
    effects: [
      'A [wet] target that gets hit by a [frost] spell looses the [wet] status and gains a [frozen] status instead.',
      'A target cannot move on its own [frozen].',
      'A [frozen] target that gets hit by a [fire] spell looses the [frozen] status and gains a [wet] status instead.',
    ],
    shortEffects: [
      '[frozen] + [fire] => [wet]',
      'You cannot move on your own',
    ]
  },
  {
    name: '[cursed|Cursed]',
    effects: [
      'A target that gets [cursed] can only make spells with the total of 4 elements per round.',
      'The [cursed] status is replaced by any other [hex] status, like Fire Immunity.',
    ],
    shortEffects: [
      'Caster steals one card from your hand or discard one of your choice',
      'You can cast maximum of 4 element cards',
      'Replaced by any [hex] status',
    ]
  },
];
