'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HIGH_LEVEL_PROJECTS } from '@/constants/projects.conts';
import {
  FAVORITE_BOOKS,
  CURRENTLY_READING,
  ACTIVITIES,
  RECENT_TRIPS,
} from '@/constants/general.const';
import LiveAgeTracker from '@/components/LiveAgeTracker';
import LiveLocalTimeTracker from '@/components/LiveLocalTimeTracker';
import { useTheme } from './context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 py-8">
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
          <h2 className="space-x-3 text-3xl font-semibold font-display">
            <span className="wave inline-block animate-wave" aria-hidden="true">
              👋{' '}
            </span>
            <span>{"Hi, I'm Nico"}</span>
          </h2>
          <p className="">
            Full-stack engineer at Inventive AI, where I build AI-powered
            platforms to automate sales workflows and streamline RFP responses.
            I specialize in React, Next.js, TypeScript, and Django, delivering
            performant knowledge systems and real-time collaboration tools.
          </p>
          <p className="">
            My journey started in mechanical engineering before transitioning to
            software development. I’m passionate about creating AI-driven
            products, optimizing complex systems, and architecting scalable web
            applications. Based in the San Francisco Bay Area, I love tackling
            technical challenges that push me to grow.
          </p>
          <p className="">
            Outside of work, you’ll find me hiking Bay Area trails, playing
            tennis and rugby, or diving into sci-fi and tech books.
          </p>
        </div>
      </section>

      <section className="grid-cols-2 gap-16 sm:grid space-y-8 sm:space-y-0">
        <div className="space-y-12">
          {/* Theme for 2025 */}
          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">🎯</span>
                <div>Goals for 2025</div>
              </h2>
              <p className="opacity-60">
                Annual focus that shapes my projects and decisions
              </p>
            </header>
            <div className="relative space-y-4 rounded shadow-sm backdrop-blur-sm">
              <div className="pl-2">
                <p className="text-lg">{`->`} Work</p>
                <div className="space-y-3 pl-2">
                  <div className="flex space-x-3">
                    <span aria-hidden="true">⚡️</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Performance Optimization
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Master React performance, TypeScript patterns, and
                        advanced state management for robust, scalable apps
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span aria-hidden="true">🚀</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        AI Integration
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Build smarter products by integrating AI/ML APIs and
                        enhancing user experiences with async workflows
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span aria-hidden="true">🤝</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Collaboration
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Level up teamwork and communication with
                        cross-functional teams to deliver product features from
                        0-to-1
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span aria-hidden="true">🛠️</span>
                    <div>
                      <p className="text-gray-900 dark:text-coal-100">
                        Developer Velocity
                      </p>
                      <p className="text-sm text-gray-600 dark:text-coal-300">
                        Optimize workflows and codebases with better testing,
                        CI/CD, and deployment strategies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 dark:border-coal-700">
                <p className="text-lg mb-2">{`->`} Personal</p>

                <div className="space-y-3 pl-2">
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
          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">💻</span>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </h2>
              <p className="opacity-60">My current and favorite work pieces</p>
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
          {/* Life */}
          <article className="space-y-4 flex flex-col">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">🧬</span>
                <div>Life</div>
              </h2>
              <p className="opacity-60">Tracking my life data in real time</p>
            </header>
            <div className="p-4 rounded shadow-sm backdrop-blur-sm sm:flex sm:flex-col sm:justify-between space-y-4">
              {/* Age */}
              <LiveAgeTracker />

              {/* Location */}
              <LiveLocalTimeTracker />

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

              {/* LinkedIn Profile */}
              <div className="space-y-2 ">
                <div className="flex space-x-3 ">
                  <span aria-hidden="true">💼</span>
                  <p className="text-gray-900 dark:text-coal-100 ">
                    Professional Profile
                  </p>
                </div>
                <div
                  className="badge-base LI-profile-badge bg-transparent"
                  data-locale="en_US"
                  data-size="medium"
                  data-theme={theme === 'light' ? 'light' : 'dark'}
                  data-type="VERTICAL"
                  data-vanity="nicholas-carlier"
                  data-version="v1"
                >
                  {/* <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nicholas-carlier?trk=profile-badge">
                    Nicholas Carlier
                  </a> */}
                </div>
              </div>
            </div>
          </article>

          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">📚</span>
                <div>Books I Enjoyed</div>
              </h2>
              <p className="opacity-60">
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
            {/* <div className="mt-8 space-y-4">
              <header className="space-y-1">
                <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
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
                    <div>
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm opacity-60">{book.authors}</p>
                      <p className="text-xs mt-1 opacity-60">{book.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </article>
        </div>
      </section>
    </main>
  );
}
