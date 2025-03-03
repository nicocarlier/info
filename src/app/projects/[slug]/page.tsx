import Link from 'next/link';
import { notFound } from 'next/navigation';

const projects = {
  'project-a': {
    name: 'Project A',
    description:
      'A revolutionary AI-powered application that helps users automate their daily tasks.',
    fullDescription: `
      Project A is an innovative solution that leverages artificial intelligence to streamline everyday tasks.
      Built with modern technologies and designed with user experience in mind, it helps users save time
      and increase productivity.

      Key Features:
      • Intelligent task automation
      • Natural language processing
      • Custom workflow creation
      • Real-time analytics

      Technologies Used:
      • React for the frontend
      • Python backend with FastAPI
      • TensorFlow for machine learning
      • PostgreSQL database
    `,
    links: {
      github: 'https://github.com/username/project-a',
      demo: 'https://project-a-demo.com',
    },
  },
  'project-b': {
    name: 'Project B',
    description:
      'A real-time collaboration platform for remote teams with innovative features.',
    fullDescription: `
      Project B revolutionizes how remote teams work together. With features like real-time document
      editing, video conferencing, and smart task management, it's the ultimate collaboration tool.

      Key Features:
      • Real-time document collaboration
      • Integrated video conferencing
      • Smart task management
      • Team analytics dashboard

      Technologies Used:
      • Next.js for frontend and API routes
      • WebSocket for real-time features
      • PostgreSQL for data storage
      • WebRTC for video calls
    `,
    links: {
      github: 'https://github.com/username/project-b',
      demo: 'https://project-b-demo.com',
    },
  },
  'project-c': {
    name: 'Project C',
    description:
      'An open-source library that simplifies complex data visualizations.',
    fullDescription: `
      Project C is an open-source library that makes it easy to create beautiful, interactive data
      visualizations. Perfect for developers who want to add powerful charts and graphs to their applications.

      Key Features:
      • Easy-to-use API
      • Customizable themes
      • Interactive visualizations
      • Responsive design

      Technologies Used:
      • TypeScript for type safety
      • D3.js for visualizations
      • React for component system
      • Jest for testing
    `,
    links: {
      github: 'https://github.com/username/project-c',
      demo: 'https://project-c-demo.com',
    },
  },
};

// Add this function to generate static paths
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <article className="space-y-8">
        <header className="space-y-4">
          <div className="space-y-2">
            <Link
              href="/projects"
              className="text-coal-300 hover:text-coal-100 transition-colors"
            >
              ← Back to Projects
            </Link>
            <h1 className="text-4xl font-semibold font-display text-coal-100">
              {project.name}
            </h1>
          </div>
          <p className="text-xl text-coal-300">{project.description}</p>
        </header>

        <div className="flex gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-coal-800 text-coal-100 rounded-md hover:bg-coal-700 transition-colors"
          >
            View on GitHub
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-coal-800 text-coal-100 rounded-md hover:bg-coal-700 transition-colors"
          >
            Live Demo
          </a>
        </div>

        <div className="prose prose-invert max-w-none">
          {project.fullDescription.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
