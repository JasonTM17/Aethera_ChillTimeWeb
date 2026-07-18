export const reachHorizon = {
  index: 'Field 04',
  label: 'Open channel',
  note: 'A thoughtful first note is enough. This site prepares a draft in your own email app; it never sends or stores the information for you.',
  imagePosition: '52% 64%',
  facts: [
    { label: 'Start', value: 'The idea and its tension' },
    { label: 'Route', value: 'Your own email app' },
  ],
} as const

export const firstNotePrompts = [
  'What are you trying to make possible?',
  'Why does it matter now, and to whom?',
  'Where does the path currently feel unclear?',
] as const

export const nextSteps = [
  {
    number: '01',
    title: 'We read for alignment',
    description:
      'We look for the meaningful question, the change you hope to create, and whether Aethera can genuinely help.',
  },
  {
    number: '02',
    title: 'We begin with a conversation',
    description:
      'If there is a useful fit, the first exchange is about the problem and the people—not a polished pitch deck.',
  },
  {
    number: '03',
    title: 'We shape the right next step',
    description:
      'The work may begin with a focused foundation, a product chapter, or a closer ongoing studio rhythm.',
  },
] as const

export const reachFaqs = [
  {
    question: 'Do I need a finished brief?',
    answer:
      'No. A clear description of the idea, the tension, and the change you hope to make is more useful than a document that pretends every answer is already known.',
  },
  {
    question: 'What kinds of work are a strong fit?',
    answer:
      'New digital products, meaningful repositioning, important product chapters, and close creative partnerships where strategy, design, and implementation need to learn together.',
  },
  {
    question: 'What happens to the information I enter?',
    answer:
      'It stays in your browser until the site prepares a mailto link. Nothing is sent to a server or stored by this website; you review and send the final note in your own email app.',
  },
  {
    question: 'Where can we work together?',
    answer:
      'Aethera is remote by nature and can collaborate across time zones. The working rhythm is shaped around clear decisions, visible progress, and useful overlap.',
  },
] as const
