import { HIGH_LEVEL_PROJECTS } from '@/constants/projects.conts';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1>Projects</h1>
          <p className="text-xl dark:text-coal-300 text-coal-700">
            A collection of my recent work and ongoing projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {HIGH_LEVEL_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-6 dark:bg-coal-900/50 bg-coal-100/50 rounded-xl hover:bg-coal-200/50 dark:hover:bg-coal-800/50 transition-colors relative"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl" aria-hidden="true">
                    {project.thumbnail}
                  </span>
                  <h2 className="text-2xl font-semibold font-display dark:text-coal-100 text-coal-900 group-hover:text-coal-900 dark:group-hover:text-white">
                    {project.name}
                  </h2>
                </div>
                <p className="dark:text-coal-300 text-coal-700">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full dark:bg-coal-800 bg-coal-200 dark:text-coal-300 text-coal-700"
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
