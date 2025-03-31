import ProjectLink from '@/components/ProjectLink';
import Image from 'next/image';

export default function FairbnbProject() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-12 md:px-0 pt-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1>Fairbnb</h1>
        <p className="text-xl text-coal-300">
          A comprehensive full-stack Airbnb clone built with React/Redux
          frontend and Ruby on Rails backend, featuring Google Maps integration
          and AWS S3 for media storage.
        </p>

        {/* Project Links */}
        <div className="flex space-x-4">
          <ProjectLink
            href="https://fairbnb-36c07c3f3067.herokuapp.com/"
            variant="primary"
            target="_blank"
            isDisabled={true}
          >
            Live Demo
          </ProjectLink>
          <ProjectLink
            href="https://github.com/nicocarlier/Fairbnb"
            variant="secondary"
            target="_blank"
          >
            GitHub Repository
          </ProjectLink>
        </div>

        {/* Main Project Image */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-coal-800">
          <Image
            priority
            alt="fairbnb dashboard"
            src="/projects/fairbnb.webp"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={95}
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2>Project Overview</h2>
        {/* ... */}
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2>Technology Stack</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-200">Backend</h3>
            <p className="text-coal-300">
              Built with Ruby on Rails for its convention-over-configuration
              paradigm, accelerating development and providing excellent
              scalability for growing user bases.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-200">Database</h3>
            <p className="text-coal-300">
              PostgreSQL database with Active Record ORM, ensuring data
              integrity and enabling complex operations through object-oriented
              database interactions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-200">Frontend</h3>
            <p className="text-coal-300">
              React.js with Redux for state management, creating a dynamic and
              modular UI with predictable state updates and reusable components.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold font-display text-coal-100">
          Key Features
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-coal-800/50 p-4 rounded-md">
            <h3 className="font-semibold text-coal-100 mb-2">
              User Authentication
            </h3>
            <ul className="space-y-2 text-coal-300 text-sm">
              <li>• Secure account management with CSRF protection</li>
              <li>• Intelligent email routing for signup/login</li>
              <li>• Password strength validation</li>
              <li>• Demo user access available</li>
            </ul>
          </div>

          <div className="bg-coal-800/50 p-4 rounded-md">
            <h3 className="font-semibold text-coal-100 mb-2">Booking System</h3>
            <ul className="space-y-2 text-coal-300 text-sm">
              <li>• Interactive booking calendar</li>
              <li>• Real-time availability updates</li>
              <li>• Booking management interface</li>
              <li>• Date validation and conflict prevention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Highlights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold font-display text-coal-100">
          Technical Implementation
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-200">
              Date Handling Solution
            </h3>
            <p className="text-coal-300">
              Implemented robust date handling to ensure consistency across
              timezones:
            </p>
            <div className="bg-coal-800 p-4 rounded-md">
              <pre className="text-sm text-coal-300 overflow-x-auto">
                {`export const convertLocalDateToUTC = (inputDate) => {
    const parts = inputDate.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localDate = DateTime.fromObject({ day, month, year }).setZone(timeZone);
    const utcDate = localDate.toUTC();
    return utcDate.toFormat('dd/MM/yyyy');
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold font-display text-coal-100">
          Feature Demo
        </h2>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-coal-800">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/projects/UserAuth.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
