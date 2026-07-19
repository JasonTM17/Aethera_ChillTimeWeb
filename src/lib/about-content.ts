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

export const aboutOrigin = {
  eyebrow: 'The reason for the studio',
  title: 'Built for the space between a strong idea and the world it must enter.',
  lead:
    'Aethera is shaped around a recurring tension: meaningful teams need momentum, while the decisions that make work coherent still need attention.',
  chapters: [
    {
      number: 'I',
      title: 'The tension',
      body:
        'Important ideas rarely arrive as neat briefs. They arrive surrounded by feature lists, deadlines, inherited assumptions, and many valid voices. When every discipline answers separately, the central promise becomes harder to see and the experience begins to fragment.',
    },
    {
      number: 'II',
      title: 'The choice',
      body:
        'We keep strategy, language, design, and implementation in one conversation. That closeness lets an early truth travel further: through the structure of a product, the tone of a sentence, the rhythm of an interaction, and the details people finally touch.',
    },
    {
      number: 'III',
      title: 'The measure',
      body:
        'The measure is not how many artifacts leave the studio. It is whether a team can name the same center, make difficult trade-offs with confidence, and carry the work forward without losing the feeling that made it worth beginning.',
    },
  ],
} as const

export const workingAgreements = [
  {
    number: '01',
    title: 'A shared question',
    promise: 'We return every decision to the change the work should create.',
    practice: 'Bring the unresolved tension, the people it affects, and the truth behind the brief.',
  },
  {
    number: '02',
    title: 'Visible unfinished work',
    promise: 'We show the thinking while it is still open enough to improve.',
    practice: 'Respond to what feels true, what feels unclear, and what the team is learning—not surface polish alone.',
  },
  {
    number: '03',
    title: 'Named trade-offs',
    promise: 'We make the cost of each choice legible before it becomes hidden complexity.',
    practice: 'Choose together what deserves depth now, what can remain simple, and what should not exist yet.',
  },
  {
    number: '04',
    title: 'Care through reality',
    promise: 'We keep the original intent present as the work meets technical and human constraints.',
    practice: 'Keep builders, decision-makers, and real use close enough that craft can survive implementation.',
  },
] as const

export const principles = [
  {
    number: '01',
    title: 'Clarity before volume',
    description:
      'We remove before we add. Every screen, sentence, and interaction must earn its place in the whole.',
    practice: 'One clear hierarchy, fewer competing calls, and language that tells people where they are.',
  },
  {
    number: '02',
    title: 'Feeling is a function',
    description:
      'Calm, trust, and delight are not decoration. They are outcomes designed with the same care as usability.',
    practice: 'Pacing, feedback, and motion support the task instead of asking for attention of their own.',
  },
  {
    number: '03',
    title: 'Systems carry intent',
    description:
      'A good system protects the central idea while giving the product enough room to change and deepen.',
    practice: 'Reusable decisions carry the voice forward without turning every future choice into a negotiation.',
  },
  {
    number: '04',
    title: 'Endurance over novelty',
    description:
      'We borrow from the future carefully, building identities and products that can mature instead of date.',
    practice: 'Novel gestures earn their place through usefulness; durable patterns do the quiet everyday work.',
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
