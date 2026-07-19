export const journalHorizon = {
  index: 'Field 03',
  label: 'Reading ledger',
  note: 'Studio notes on the invisible decisions behind calm, useful digital places. Written to clarify the work—not to feed a publishing machine.',
  imagePosition: '76% 67%',
  facts: [
    { label: 'Format', value: 'Reflections and field notes' },
    { label: 'Themes', value: 'Attention · Craft · Technology' },
  ],
} as const

export const journalThemes = [
  'Design practice',
  'Creative direction',
  'Product thinking',
  'Studio notes',
  'Humane technology',
] as const

export const journalEntries = [
  {
    slug: 'designing-for-the-quiet-mind',
    number: '004',
    category: 'Design practice',
    date: 'July 02, 2026',
    dateTime: '2026-07-02',
    readTime: '2 min reflection',
    title: 'Designing for the quiet mind',
    excerpt:
      'A calm interface is not an empty interface. It is a place where every signal has been considered and attention can move without friction.',
    body: [
      'Quiet design begins long before color, type, or spacing. It begins with a decision about what deserves the user’s attention—and an equal willingness to remove what does not.',
      'The work is not to make an experience feel sparse. It is to make its meaning feel immediate. Hierarchy, rhythm, language, and motion should point in the same direction, so people spend less energy interpreting the interface and more energy doing what brought them there.',
      'Calm is therefore not a visual style. It is evidence that a team has made the difficult decisions early enough for the interface to become generous.',
    ],
  },
  {
    slug: 'the-useful-weight-of-restraint',
    number: '003',
    category: 'Creative direction',
    date: 'June 18, 2026',
    dateTime: '2026-06-18',
    readTime: '2 min reflection',
    title: 'The useful weight of restraint',
    excerpt:
      'Restraint is not the absence of expression. Used well, it gives the most important idea enough space to become unforgettable.',
    body: [
      'Every product contains more possible moves than it should make. A distinctive experience comes from choosing a small number of gestures and repeating them with conviction.',
      'Constraints create a center of gravity. They help a team decide faster, give the product a recognizable voice, and protect it from the slow accumulation of choices that do not belong together.',
      'The useful question is not “Can we add this?” but “Does this make the central idea easier to feel, understand, or use?”',
    ],
  },
  {
    slug: 'products-that-learn-to-disappear',
    number: '002',
    category: 'Product thinking',
    date: 'May 29, 2026',
    dateTime: '2026-05-29',
    readTime: '2 min reflection',
    title: 'Products that learn to disappear',
    excerpt:
      'The most humane technology does not compete for a permanent place in our thoughts. It helps us move, then releases us back into life.',
    body: [
      'Engagement is easy to count, which makes it tempting to treat more time as more value. But many useful products succeed by shortening the distance between intention and outcome.',
      'Designing for disappearance changes the questions we ask. Instead of “How do we keep people here?” we can ask “What would let them leave with confidence?” That shift creates clearer flows, gentler reminders, and products people trust enough to return to when they truly need them.',
      'A product can remain memorable without remaining open. The memory comes from how clearly it helped, not how insistently it called people back.',
    ],
  },
  {
    slug: 'a-ritual-for-beginnings',
    number: '001',
    category: 'Studio notes',
    date: 'May 07, 2026',
    dateTime: '2026-05-07',
    readTime: '2 min reflection',
    title: 'A ritual for beginnings',
    excerpt:
      'Before a roadmap, before a moodboard, there is a conversation that decides whether a project will become merely polished or genuinely true.',
    body: [
      'We begin by listening for tension: the gap between what a team says it wants to make and the change it hopes people will feel. That tension usually contains the real brief.',
      'A good beginning makes later decisions lighter. Once the shared truth is named, strategy becomes a boundary, design becomes an expression of intent, and craft can deepen instead of decorate.',
      'The ritual is simple: name what must change, what must remain true, and what the work should make possible. Everything else can follow.',
    ],
  },
  {
    slug: 'a-prototype-is-a-question',
    number: '005',
    category: 'Product thinking',
    date: 'July 19, 2026',
    dateTime: '2026-07-19',
    readTime: '2 min reflection',
    title: 'A prototype is a question, not a preview',
    excerpt:
      'The most useful prototype does not pretend the future is settled. It gives a team one precise uncertainty they can finally see, feel, and discuss.',
    body: [
      'A polished prototype can be persuasive while teaching very little. When every surface looks finished, people respond to color, copy, and confidence instead of the assumption that actually needs testing.',
      'We prefer to name the question first. Can someone understand the promise without explanation? Does this rhythm support focus? Will the model still make sense when the easiest example is removed? The fidelity should serve that question and nothing more.',
      'A prototype earns its value by changing the next decision. It may confirm a direction, expose a missing truth, or make a cherished idea easier to release. In every case, learning is the deliverable; the screen is only the instrument.',
    ],
  },
  {
    slug: 'the-interface-as-a-host',
    number: '006',
    category: 'Design practice',
    date: 'July 19, 2026',
    dateTime: '2026-07-19',
    readTime: '2 min reflection',
    title: 'The interface as a host',
    excerpt:
      'A good digital place receives people with context, gives them room to orient, and makes the next useful action feel natural rather than demanded.',
    body: [
      'Hospitality is a useful lens for interface design because it shifts attention from surfaces to relationships. A host notices what a guest may not know, offers guidance without control, and makes the structure of a place easier to trust.',
      'In an interface, that care appears through small decisions: language that names what will happen, defaults that respect intent, pauses before irreversible actions, and enough continuity that people never feel dropped between rooms.',
      'The goal is not constant warmth or decoration. It is a reliable sense that the product understands why someone arrived and will help them leave with the thing they came for.',
    ],
  },
  {
    slug: 'against-the-endless-invitation',
    number: '007',
    category: 'Humane technology',
    date: 'July 19, 2026',
    dateTime: '2026-07-19',
    readTime: '2 min reflection',
    title: 'Against the endless invitation',
    excerpt:
      'Not every empty moment needs a prompt, a recommendation, or another place to go. Sometimes the most respectful interface is the one that knows when it is finished.',
    body: [
      'Many products are designed as sequences without a natural end. Completion immediately becomes another invitation: continue, discover, return, enable, share. The interface may be helpful in each individual moment while the whole experience quietly refuses closure.',
      'Designing an ending is an act of confidence. It means showing that the task is complete, making the outcome easy to find again, and allowing silence where a growth mechanic might otherwise appear.',
      'A clear ending does not weaken a relationship. It tells people the product values the life around their use of it. That restraint can become one of the strongest reasons to return.',
    ],
  },
] as const

export type JournalEntryContent = (typeof journalEntries)[number]

export const journalReadingPaths = [
  {
    number: '01',
    title: 'Attention',
    description: 'How products can protect focus, create closure, and give time back.',
    slugs: [
      'designing-for-the-quiet-mind',
      'products-that-learn-to-disappear',
      'against-the-endless-invitation',
    ],
  },
  {
    number: '02',
    title: 'Craft',
    description: 'How restraint, prototypes, and considered details turn intent into form.',
    slugs: [
      'the-useful-weight-of-restraint',
      'a-prototype-is-a-question',
      'the-interface-as-a-host',
    ],
  },
  {
    number: '03',
    title: 'Practice',
    description: 'How shared questions and useful rituals make the work clearer together.',
    slugs: ['a-ritual-for-beginnings', 'a-prototype-is-a-question'],
  },
] as const

export const journalFieldNotes = [
  {
    number: 'A',
    label: 'On hierarchy',
    note: 'When everything asks for attention, the interface has stopped making decisions.',
  },
  {
    number: 'B',
    label: 'On systems',
    note: 'A design system is useful when it preserves intent, not merely visual sameness.',
  },
  {
    number: 'C',
    label: 'On motion',
    note: 'Movement should explain a change, carry continuity, or leave the screen still.',
  },
  {
    number: 'D',
    label: 'On endings',
    note: 'Completion is a designed state. Give it as much care as the invitation to begin.',
  },
] as const
