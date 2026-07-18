export const studioHorizon = {
  index: 'Field 01',
  label: 'Studio ledger',
  note: 'Selected explorations—not commissioned client work. Each study makes a product belief visible enough to question, shape, and test.',
  imagePosition: '50% 70%',
  facts: [
    { label: 'Mode', value: 'Concept studies' },
    { label: 'Range', value: 'Strategy · Design · Build' },
  ],
} as const

export const studioProjects = [
  {
    number: '01',
    name: 'Nocturne',
    type: 'Focus platform',
    status: 'Concept study · 2026',
    artworkVariant: 'orbit',
    title: 'A quieter operating system for ambitious minds.',
    description:
      'A product world designed around uninterrupted thought—where rituals, tasks, and reflection become one calm daily rhythm.',
    hypothesis:
      'Focus improves when planning, presence, and reflection share one legible rhythm.',
    method: 'Map the attention journey, prototype the daily loop, then tune every signal.',
    services: ['Product strategy', 'Experience design', 'Digital identity'],
  },
  {
    number: '02',
    name: 'Field Notes',
    type: 'Knowledge ecosystem',
    status: 'Concept study · 2026',
    artworkVariant: 'archive',
    title: 'Turning scattered insight into living memory.',
    description:
      'An editorial system that helps independent teams capture what they learn, connect ideas over time, and make knowledge useful again.',
    hypothesis:
      'Knowledge becomes valuable when the path between capture and rediscovery feels natural.',
    method: 'Model the information, shape retrieval rituals, and build a durable visual grammar.',
    services: ['Research', 'Information architecture', 'Design system'],
  },
  {
    number: '03',
    name: 'Stillpoint',
    type: 'Wellbeing product',
    status: 'Concept study · 2026',
    artworkVariant: 'stillpoint',
    title: 'Technology that knows when to step aside.',
    description:
      'A restorative digital companion shaped by gentle pacing, intentional silence, and interactions that never ask for more than they give.',
    hypothesis:
      'A wellbeing product earns trust by releasing attention rather than accumulating it.',
    method: 'Reduce the journey to essential moments, then prototype pace, language, and rest.',
    services: ['Creative direction', 'Interaction design', 'Prototype'],
  },
] as const

export const studioCapabilities = [
  {
    number: '01',
    title: 'Shape the idea',
    description:
      'Find the useful truth beneath the ambition and define what the product should mean before deciding how it should look.',
    deliverables: ['Research framing', 'Product strategy', 'Positioning', 'Experience principles'],
  },
  {
    number: '02',
    title: 'Craft the experience',
    description:
      'Turn that truth into a clear journey, a distinct visual language, and a system able to carry the idea through real use.',
    deliverables: ['Information architecture', 'Interface design', 'Motion direction', 'Design systems'],
  },
  {
    number: '03',
    title: 'Bring it to life',
    description:
      'Close the gap between intention and the thing people can actually touch, test, launch, and continue to improve.',
    deliverables: ['Prototyping', 'Creative development', 'Launch direction', 'Product care'],
  },
] as const

export const studioWorkingModels = [
  {
    name: 'Focused foundation',
    bestFor: 'An idea that needs a center',
    description: 'Clarify the opportunity, product promise, audience, and creative direction.',
  },
  {
    name: 'Product chapter',
    bestFor: 'A meaningful release or reinvention',
    description: 'Move from shared strategy through a coherent, testable experience.',
  },
  {
    name: 'Embedded studio',
    bestFor: 'Continuity across decisions',
    description: 'Stay close as the product, system, and story mature together.',
  },
] as const
