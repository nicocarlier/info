import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-md px-4 mx-auto md:px-0 pt-8 pb-24">
      <div className="h-10 w-full ">
        <Link
          href="/projects"
          className="text-coal-700 dark:text-coal-300 hover:text-coal-100 transition-colors"
        >
          ← Back to All Projects
        </Link>
      </div>
      {children}
    </div>
  );
}
