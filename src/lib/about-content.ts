export const aboutHorizon = {
  index: 'Field 02',
  label: 'Studio profile',
  note: 'Independent by design. Senior-led, remote by nature, and assembled around the question rather than a fixed production line.',
  imagePosition: '18% 66%',
  facts: [
    { label: 'Form', value: 'Independent studio' },
    { label: 'Rhythm', value: 'Close · Curious · Clear' },
  ],
} as const

export const aboutPositioning = {
  is: [
    {
      title: 'Small by design',
      description: 'Senior attention stays close to the work and the decisions that shape it.',
    },
    {
      title: 'Whole-journey minded',
      description: 'Strategy, expression, interaction, and implementation are treated as one experience.',
    },
    {
      title: 'Built around the question',
      description: 'The right collaborators and level of fidelity follow what the work actually needs.',
    },
  ],
  isNot: [
    {
      title: 'A volume machine',
      description: 'More output is never the substitute for a clear idea or a useful decision.',
    },
    {
      title: 'A style applied at the end',
      description: 'The feeling of a product begins with its purpose, structure, language, and pace.',
    },
    {
      title: 'A disappearing handoff',
      description: 'The same thinking remains present from the first conversation through the real thing.',
    },
  ],
} as const

export const aboutManifesto = {
  statement:
    'The world does not need more noise. It needs better places for attention, imagination, and care.',
  paragraphs: [
    'Aethera began with a simple belief: digital products can be ambitious without becoming overwhelming. The best technology expands human capacity, then quietly gets out of the way.',
    'That belief guides how we frame problems and make decisions. We seek the essential idea, give it a distinct voice, and build the system it needs to endure.',
  ],
} as const

export const principles = [
  {
    number: '01',
    title: 'Clarity before volume',
    description:
      'We remove before we add. Every screen, sentence, and interaction must earn its place in the whole.',
  },
  {
    number: '02',
    title: 'Feeling is a function',
    description:
      'Calm, trust, and delight are not decoration. They are outcomes designed with the same care as usability.',
  },
  {
    number: '03',
    title: 'Systems carry intent',
    description:
      'A good system protects the central idea while giving the product enough room to change and deepen.',
  },
  {
    number: '04',
    title: 'Endurance over novelty',
    description:
      'We borrow from the future carefully, building identities and products that can mature instead of date.',
  },
] as const

export const processSteps = [
  {
    name: 'Listen',
    output: 'Shared truth',
    description: 'Find the tension beneath the brief and the people the work must genuinely serve.',
  },
  {
    name: 'Distill',
    output: 'Product and creative direction',
    description: 'Turn complexity into one legible promise, a useful boundary, and a direction with gravity.',
  },
  {
    name: 'Make',
    output: 'Working experience',
    description: 'Prototype the whole feeling, test the important assumptions, then refine what matters.',
  },
  {
    name: 'Tend',
    output: 'Launch rhythm and learning',
    description: 'Bring the work into reality, observe it honestly, and help the system mature with use.',
  },
] as const

export const fitSignals = [
  'There is a meaningful problem beneath the feature list.',
  'The team values clarity, care, and a point of view—not novelty for its own sake.',
  'The work benefits from strategy, design, and implementation learning together.',
] as const
