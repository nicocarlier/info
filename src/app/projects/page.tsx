import Link from 'next/link';

const projects = [
  {
    name: 'Fairbnb',
    slug: 'fairbnb',
    description:
      'A full-stack Airbnb clone built with React, Redux, and Ruby on Rails, featuring real-time booking and interactive maps.',
    tags: [
      'React',
      'Redux',
      'Ruby on Rails',
      'PostgreSQL',
      'AWS S3',
      'Google Maps API',
    ],
    thumbnail: '🏠',
  },
  {
    name: 'Project A',
    slug: 'project-a',
    description:
      'A revolutionary AI-powered application that helps users automate their daily tasks.',
    tags: ['React', 'Python', 'Machine Learning'],
    thumbnail: '🤖',
  },
  {
    name: 'Project B',
    slug: 'project-b',
    description:
      'A real-time collaboration platform for remote teams with innovative features.',
    tags: ['Next.js', 'WebSocket', 'PostgreSQL'],
    thumbnail: '👥',
  },
  {
    name: 'Project C',
    slug: 'project-c',
    description:
      'An open-source library that simplifies complex data visualizations.',
    tags: ['TypeScript', 'D3.js', 'React'],
    thumbnail: '📊',
  },
];

export default function Projects() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold font-display text-coal-100">
            Projects
          </h1>
          <p className="text-xl text-coal-300">
            A collection of my recent work and ongoing projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-6 bg-coal-900/50 rounded-xl hover:bg-coal-800/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl" aria-hidden="true">
                    {project.thumbnail}
                  </span>
                  <h2 className="text-2xl font-semibold font-display text-coal-100 group-hover:text-coal-50">
                    {project.name}
                  </h2>
                </div>
                <p className="text-coal-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-coal-800 text-coal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
