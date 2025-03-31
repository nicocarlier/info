export interface TimelineEvent {
  key?: string;
  date: string;
  title: string;
  description: string | string[];
  type: 'education' | 'work' | 'travel' | 'project';
  location?: string;
}

export const LIFE_EVENTS: TimelineEvent[] = [
  {
    key: 'inventive-ai',
    date: `March 2024 - Present`,
    title: 'Software Engineer at Inventive AI (Y-Combinator)',
    description: [
      'Working with a YC-backed startup on AI agents for sales workflow automation',
      'Architected scalable knowledge management systems',
      'Implemented real-time collaboration features with WebSocket integration',
      'Built data visualization dashboards for monitoring system metrics',
    ],
    type: 'work',
    location: 'Mountain View, CA',
  },
  {
    date: `March 2024`,
    title: 'Moved to California',
    description: ['Moved to Mountain View, CA to join Inventive AI'],
    type: 'travel',
    location: 'Mountain View, CA',
  },
  {
    date: 'September 2023 - March 2024',
    title: 'Part-time software engineer at Couplr AI & Side Projects',
    description: [
      'Worked with an AI Financial analyst pairing app creating integrations with CRM tools',
      'Open source contributions to multiple projects including accessibility features for Apache Superset',
      'Working on side projects like Next.js Chess app and studying DS&A',
    ],
    type: 'work',
    location: 'Remote',
  },
  {
    date: 'May 2023 - September 2023',
    title: 'App Academy',
    description: [
      'Full-Stack Software Engineering Bootcamp',
      'Intensive training in algorithms, data structures, and software architecture',
      'Developed full-stack applications with focus on scalability',
    ],
    type: 'education',
    location: 'San Francisco',
  },
  {
    date: 'November 2022 - May 2023',
    title: 'Project Engineer at Aroa Biosurgery',
    description: [
      'Worked on various projects for the manufacturing of biomedical devices',
      'Wrote programs to iteratively solve for optimal linkage lengths and angles in machinery',
    ],
    type: 'work',
    location: 'Auckland, New Zealand',
  },
  {
    date: 'February 2019 - November 2022',
    title: 'University of Auckland',
    description: [
      'Bachelor of Engineering (Honours) in Mechanical Engineering',
      'Bachelor of Commerce (Economics and Finance)',
      'Best Mechanical Engineering Project Final Year Project Award (2022)',
      'Published research on autonomous UAV control systems',
    ],
    type: 'education',
    location: 'Auckland, New Zealand',
  },
  {
    date: '2014 - 2018',
    title: 'Saint Kentigern College',
    description: [
      'NCEA Level 3 Excellence Endorsed',
      'NCEA Physics Scholarship award',
      'Academic Honours (2017, 2018)',
    ],
    type: 'education',
    location: 'Auckland, New Zealand',
  },
  {
    date: '2005',
    title: 'Settled in New Zealand',
    description:
      'Relocated to New Zealand, where early interest in mathematics and physics developed',
    type: 'travel',
    location: 'New Zealand',
  },
  {
    date: '2001 - 2005',
    title: 'Living in Vietnam',
    description:
      'Early childhood lived abroad in Hanoi, Vietnam, attended a French speaking international kindergarten',
    type: 'travel',
    location: 'Vietnam',
  },
  {
    date: '2000 - 2001',
    title: 'Caribbean Adventures',
    description:
      'As a baby, spent half a year living aboard a boat in the Caribbean',
    type: 'travel',
    location: 'Caribbean',
  },
  {
    date: 'December 26, 2000',
    title: 'Born in Washington DC',
    description: '',
    type: 'travel',
    location: 'Washington DC, USA',
  },
];
