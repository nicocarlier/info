import Link from 'next/link';
import Image from 'next/image';
import Timeline from '../components/Timeline';
import { HIGH_LEVEL_PROJECTS } from '@/constants/projects.conts';
import {
  FAVORITE_BOOKS,
  CURRENTLY_READING,
  ACTIVITIES,
  RECENT_TRIPS,
} from '@/constants/general.const';
import LiveAgeTracker from '@/components/LiveAgeTracker';
import LiveLocalTimeTracker from '@/components/LiveLocalTimeTracker';
import { CodeIcon } from '@radix-ui/react-icons';
import { BsRobot } from 'react-icons/bs';
import { GiLightBulb } from 'react-icons/gi';

export default function About() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <section className="grid-cols-2 gap-16 sm:grid">
        {/* Portrait */}
        <div className="items-start justify-center sm:flex">
          <figure>
            <Image
              priority
              alt="Portrait photo of Nico"
              src="/portrait.webp"
              className="object-contain object-bottom w-full rounded-xl shadow"
              width={1067}
              height={1317}
              loading="eager"
            />
            <figcaption className="text-center text-walnut text-xs mt-2 inline-flex items-center justify-center w-full">
              <span>Taken in Nadi, Fiji - 2023</span>
            </figcaption>
          </figure>
        </div>

        {/* About me */}
        <div className="space-y-5 ">
          <h2 className="space-x-3 text-3xl font-semibold font-display text-gray-900 dark:text-coal-100">
            <span className="wave inline-block animate-wave" aria-hidden="true">
              👋{' '}
            </span>
            <span>Hi, I'm Nico</span>
          </h2>
          <p className="text-lg opacity-80 text-gray-900 dark:text-coal-100">
            Full-stack engineer at Inventive AI, where we're building AI agents
            to automate sales tasks and RFP responses. I work with React,
            Next.js, TypeScript, and Django developing knowledge systems and
            collaboration tools.
          </p>
          <p className="opacity-60 text-gray-900 dark:text-coal-100">
            I began in mechanical engineering before transitioning to software
            development. My focus has been on AI platforms, web applications,
            and optimization tools. Based in the San Francisco Bay Area, I enjoy
            solving complex technical challenges.
          </p>
          <p className="opacity-60 text-gray-900 dark:text-coal-100">
            Outside of work, I hike Bay Area trails, play tennis and rugby, and
            read books on tech and science, or sci-fi novels.
          </p>
        </div>
      </section>

      <section className="grid-cols-2 gap-16 sm:grid space-y-8 sm:space-y-0 ">
        <div className="space-y-12">
          {/* Theme for 2025 */}
          <article className="space-y-4 dark:bg-coal-800 bg-coal-200 p-2 ">
            <header className="space-y-1">
              <h2 className="mb-6 text-gray-900 dark:text-coal-100">
                <span className="mr-4">🎯{'  '}</span>
                Goals for 2025
              </h2>
              <p className="opacity-60 text-gray-900 dark:text-coal-100">
                Annual focus that guides my decisions
              </p>
            </header>
            <div className="relative space-y-4 rounded shadow-sm backdrop-blur-sm">
              <div>
                <p className="text-xl mb-2 text-gray-900 dark:text-coal-100">
                  Work Goals
                </p>

                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <span aria-hidden="true" className="h-6 flex items-center">
                      <CodeIcon />
                    </span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Deep Expertise
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Mastering React performance optimization, TypeScript
                        architecture patterns, and advanced state management
                        techniques to build more robust, maintainable
                        applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <span aria-hidden="true" className="h-6 flex items-center">
                      <BsRobot />
                    </span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Continue exploring Latest AI technologies
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Build projects or features using the latest AI
                        technologies. Most recently I aim to build an app using
                        Model Context Protocol (MCP)
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <span aria-hidden="true" className="h-6 flex items-center">
                      <GiLightBulb />
                    </span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Practice deep work
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Focus on maximising my impact during working hours -
                        practicing Cal Newport's techniques in his book.
                        Minimise context switching and practice diving deep with
                        intense focus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-coal-700">
                <p className="text-xl mb-2 text-gray-900 dark:text-coal-100">
                  Personal Goals
                </p>

                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <span aria-hidden="true">🎾</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">Tennis</p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Improve consistency and advance NTRP ranking
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <span aria-hidden="true">💪</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Strength
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Hit new targets: 130kg squat, 90kg bench, 55kg OHP
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <span aria-hidden="true">📊</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Body Composition
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Reach sub 10% body fat for at least one milestone
                        measurement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Projects */}
          <article className="space-y-4 dark:bg-coal-800 bg-coal-200 p-2">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">💻</span>
                <Link
                  href="/projects"
                  className="hover:underline text-gray-900 dark:text-coal-100"
                >
                  Projects
                </Link>
              </h2>
              <p className="opacity-60 text-gray-900 dark:text-coal-100">
                My current and favorite work pieces
              </p>
            </header>
            <div className="space-y-3">
              {HIGH_LEVEL_PROJECTS.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex items-center gap-4 p-3 bg-gray-100 dark:bg-coal-800/50 rounded-xl shadow backdrop-blur-sm hover:scale-[1.02] transition-transform"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {project.thumbnail}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-coal-800 dark:text-coal-100">
                        {project.name}
                      </h3>
                      {project.slug === 'chess-app' && (
                        <span className="px-2 py-0.5 bg-blue-600 text-xs text-white rounded-full font-medium">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-coal-600 dark:text-coal-300 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-12">
          <article className="space-y-4 dark:bg-coal-800 bg-coal-200 p-2">
            <header className="space-y-1">
              <h2 className="mb-6 text-gray-900 dark:text-coal-100">
                <span className="mr-2">🧬</span>
                Life
              </h2>
              <p className="opacity-60 text-gray-900 dark:text-coal-100">
                Tracking my life data in real time
              </p>
            </header>
            <div className="relative space-y-4 rounded shadow-sm backdrop-blur-sm">
              <p className="text-xl mb-2 text-gray-900 dark:text-coal-100">
                Time Tracking
              </p>

              {/* Age */}
              <LiveAgeTracker />

              {/* Location */}
              <LiveLocalTimeTracker />

              <div className=" border-t border-gray-200 mb-3" />

              <p className="text-xl mb-2 text-gray-900 dark:text-coal-100">
                Hobbies
              </p>

              {/* Activities */}
              <div className="flex space-x-3">
                <span aria-hidden="true">🏋️‍♂️</span>
                <div>
                  <p className="text-gray-900 dark:text-coal-100">
                    Favorite activities
                  </p>
                  <p className="text-sm text-gray-600 dark:text-coal-300">
                    {ACTIVITIES.map(
                      (activity) => `${activity.emoji} ${activity.name}`
                    ).join(', ')}
                  </p>
                </div>
              </div>

              {/* Recent Travels */}
              <div className="flex space-x-3">
                <span aria-hidden="true">✈️</span>
                <div className="space-y-2">
                  <p className="text-gray-900 dark:text-coal-100">
                    Most Recent Travels
                  </p>
                  <div className="space-y-1.5">
                    {RECENT_TRIPS.map((trip) => (
                      <p
                        key={trip.date}
                        className="text-sm text-gray-600 dark:text-coal-300"
                      >
                        {trip.date}: {trip.location} {trip.flag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="space-y-4 dark:bg-coal-800 bg-coal-200  p-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-gray-900 dark:text-coal-100">
                <span aria-hidden="true">📚</span>
                <div>Books I Enjoyed</div>
              </h2>
              <p className="opacity-60 text-gray-900 dark:text-coal-100">
                A collection of books that have influenced my thinking
              </p>
            </header>

            {/* Favorite Books */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {FAVORITE_BOOKS.map((book) => (
                <div
                  key={book.title}
                  className="aspect-[2/3] rounded-lg shadow overflow-hidden group relative"
                >
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <p className="font-semibold text-sm">{book.title}</p>
                      <p className="text-xs mt-1 text-gray-300">
                        {book.authors}
                      </p>
                      <p className="text-[10px] mt-1 text-gray-400">
                        {book.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Currently Reading */}
            <div className="mt-8 space-y-4 ">
              <header className="space-y-1">
                <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-gray-900 dark:text-coal-100">
                  <span aria-hidden="true">⏳</span>
                  <span>Currently Reading</span>
                </h2>
              </header>

              <div className="grid grid-cols-1 gap-4">
                {CURRENTLY_READING.map((book) => (
                  <div key={book.title} className="flex items-center space-x-4">
                    <div className="aspect-[2/3] w-24 rounded-lg shadow overflow-hidden group relative">
                      <Image
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-gray-900 dark:text-coal-100">
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm opacity-60">{book.authors}</p>
                      <p className="text-xs mt-1 opacity-60">{book.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <Timeline />
    </main>
  );
}
