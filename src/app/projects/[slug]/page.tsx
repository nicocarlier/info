import { PROJECTS } from '@/constants/projects.conts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Add this function to generate static paths
export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  // read route params
  const { slug } = await params;

  // get project from projects const
  const project = PROJECTS[slug as keyof typeof PROJECTS];

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
