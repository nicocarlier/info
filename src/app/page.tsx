import Link from 'next/link';
import Image from 'next/image';
import Timeline from '../components/Timeline';
import { HIGH_LEVEL_PROJECTS } from '@/constants/projects.conts';
import { FAVORITE_BOOKS, CURRENTLY_READING } from '@/constants/general.const';

export default function Home() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <section className="grid-cols-2 gap-16 sm:grid">
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
              <span>Taken in Fiji</span>
            </figcaption>
          </figure>
        </div>
        <div className="space-y-5">
          <h2 className="space-x-3 text-3xl font-semibold font-display">
            <span className="wave inline-block animate-wave" aria-hidden="true">
              👋{' '}
            </span>
            <span>{"Hi, I'm Nico"}</span>
          </h2>
          <p className="text-lg opacity-80">
            I'm currently building exciting projects as a full-stack software
            engineer, focusing on creating impactful solutions using
            cutting-edge technologies.
          </p>
          <p className="opacity-60">
            I have experience in various fields including AI, web development,
            and open-source contributions. Previously, I worked on projects
            involving [Project A] and [Project B]. I'm passionate about
            technology and its potential to solve real-world problems.
          </p>
          <Link
            href="/about"
            className="opacity-80 hover:opacity-100 hover:underline"
          >
            Learn more about me
          </Link>
        </div>
      </section>

      <section className="grid-cols-2 gap-16 sm:grid space-y-8 sm:space-y-0">
        <div className="space-y-12">
          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">🌈</span>
                <Link href="/themes" className="hover:underline">
                  Theme for 2024
                </Link>
              </h2>
              <p className="opacity-60">
                Yearly theme that dictates quarterly goals
              </p>
            </header>
            <div className="relative p-4 space-y-2 bg-gray-100 dark:bg-coal-800/50 rounded shadow-sm backdrop-blur-sm">
              <p className="text-2xl">Growth and Innovation</p>
              <p className="h-20 overflow-hidden text-sm opacity-80">
                This year, I'm focusing on expanding my skill set and
                contributing to innovative projects that push the boundaries of
                technology.
              </p>
            </div>
          </article>

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
            <div className="grid grid-cols-4 gap-4 text-xs text-center">
              {HIGH_LEVEL_PROJECTS.map((project) => (
                <div key={project.slug} className="space-y-3 opacity-80">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-gray-100 dark:bg-coal-800/50 rounded-2xl shadow backdrop-blur-sm aspect-square flex items-center justify-center text-2xl hover:scale-105 transition-transform"
                  >
                    {project.thumbnail}
                  </Link>
                  <div>{project.name}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-12">
          <article className="space-y-4 flex flex-col">
            <header className="space-y-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-coal-100">
                Life
              </h2>
              <p className="opacity-60">Tracking my life data in real time</p>
            </header>
            <div className="p-4 bg-gray-100 dark:bg-coal-800/50 rounded shadow-sm backdrop-blur-sm sm:flex sm:flex-col sm:justify-between space-y-4">
              <div className="flex space-x-3">
                <span aria-hidden="true">🎂</span>
                <div>
                  <p className="text-gray-900 dark:text-coal-100">
                    24 years old
                  </p>
                  <p className="text-sm text-gray-600 dark:text-coal-300">
                    Next birthday in 3 months
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display">
                <span aria-hidden="true">📚</span>
                <Link href="/books" className="hover:underline">
                  Books I've Enjoyed
                </Link>
              </h2>
              <p className="opacity-60">
                A collection of books that have influenced my thinking
              </p>
            </header>

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

            <div className="mt-8 space-y-4">
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
            </div>
          </article>
        </div>
      </section>

      <Timeline />
    </main>
  );
}
