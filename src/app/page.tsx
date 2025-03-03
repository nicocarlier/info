import Link from 'next/link';
import Image from 'next/image';
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0">
      <section className="grid-cols-2 gap-16 sm:grid">
        <div className="items-start justify-center mb-6 mt-7 sm:flex">
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
              <span>&copy; Professional Photographer</span>
            </figcaption>
          </figure>
        </div>
        <div className="space-y-5">
          <h2 className="space-x-3 text-3xl font-semibold font-display text-coal-100">
            <span className="wave" aria-hidden="true">
              👋{' '}
            </span>
            <span>{"Hi, I'm Nico"}</span>
          </h2>
          <p className="text-lg text-coal-300">
            I'm currently building exciting projects as a full-stack software
            engineer, focusing on creating impactful solutions using
            cutting-edge technologies.
          </p>
          <p className="text-coal-400">
            I have experience in various fields including AI, web development,
            and open-source contributions. Previously, I worked on projects
            involving [Project A] and [Project B]. I'm passionate about
            technology and its potential to solve real-world problems.
          </p>
          <Link
            href="/about"
            className="text-coal-200 hover:text-coal-100 hover:underline"
          >
            Learn more about me
          </Link>
        </div>
      </section>

      <section className="grid-cols-2 gap-16 sm:grid space-y-8 sm:space-y-0">
        <div className="space-y-12">
          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-coal-100">
                <span aria-hidden="true">🌈</span>
                <Link href="/themes" className="hover:underline">
                  Theme for 2024
                </Link>
              </h2>
              <p className="text-coal-400">
                Yearly theme that dictates quarterly goals
              </p>
            </header>
            <div className="relative p-4 space-y-2 bg-coal-800/50 rounded shadow-sm backdrop-blur-sm">
              <p className="text-2xl text-coal-100">Growth and Innovation</p>
              <p className="h-20 overflow-hidden text-sm text-coal-300">
                This year, I'm focusing on expanding my skill set and
                contributing to innovative projects that push the boundaries of
                technology.
              </p>
            </div>
          </article>

          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-coal-100">
                <span aria-hidden="true">💻</span>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </h2>
              <p className="text-coal-400">
                My current and favorite work pieces
              </p>
            </header>
            <div className="grid grid-cols-4 gap-4 text-xs text-center">
              {/* Replace with your actual projects */}
              {['Project A', 'Project B', 'Project C', 'Project D'].map(
                (project, index) => (
                  <div key={index} className="space-y-3 text-coal-300">
                    <div className="bg-coal-800/50 rounded-2xl shadow backdrop-blur-sm aspect-square flex items-center justify-center">
                      {project[0]}
                    </div>
                    <div>{project}</div>
                  </div>
                )
              )}
            </div>
          </article>
        </div>

        <div className="space-y-12">
          <article className="space-y-4 flex flex-col">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-coal-100">
                <span aria-hidden="true">🧬</span>
                <Link href="/life" className="hover:underline">
                  Life
                </Link>
              </h2>
              <p className="text-coal-400">
                Tracking my life data in real time
              </p>
            </header>
            <div className="p-4 bg-coal-800/50 rounded shadow-sm backdrop-blur-sm sm:flex sm:flex-col sm:justify-between space-y-4">
              {/* Add your life data sections here */}
              <div className="flex space-x-3">
                <span aria-hidden="true">🎂</span>
                <div>
                  <p className="text-coal-100">24 years old</p>
                  <p className="text-sm text-coal-300">
                    Next birthday in 3 months
                  </p>
                </div>
              </div>
              {/* Add more life data sections as needed */}
            </div>
          </article>

          <article className="space-y-4">
            <header className="space-y-1">
              <h2 className="flex items-center space-x-3 text-xl font-semibold font-display text-coal-100">
                <span aria-hidden="true">📕</span>
                <Link href="/books" className="hover:underline">
                  Books
                </Link>
              </h2>
              <p className="text-coal-400">
                Currently reading and recently finished
              </p>
            </header>
            <div className="grid grid-cols-5 gap-4">
              {/* Replace with your actual book data */}
              {[1, 2, 3, 4, 5].map((book) => (
                <div
                  key={book}
                  className="bg-coal-800/50 backdrop-blur-sm aspect-[2/3] rounded shadow"
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <Timeline />
    </main>
  );
}
