import * as React from 'react';
import Link from 'next/link';
import * as Menubar from '@radix-ui/react-menubar';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const PROJECTS = [
  { name: 'Project A', slug: 'project-a' },
  { name: 'Project B', slug: 'project-b' },
  { name: 'Project C', slug: 'project-c' },
];

const Navbar = () => {
  return (
    <Menubar.Root className="MenubarRoot flex justify-center border-b border-coal-800 bg-coal-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-screen-md w-full px-4 md:px-0">
        <div className="flex items-center h-14">
          <Menubar.Menu>
            <Link href="/" className="MenubarTrigger px-3 hover:text-coal-100">
              Home
            </Link>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger className="MenubarTrigger">
              Projects
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="MenubarContent"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                {PROJECTS.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block"
                  >
                    <Menubar.Item className="MenubarItem">
                      {project.name}
                    </Menubar.Item>
                  </Link>
                ))}
                <Menubar.Separator className="MenubarSeparator" />
                <Link href="/projects" className="block">
                  <Menubar.Item className="MenubarItem">
                    View All Projects
                  </Menubar.Item>
                </Link>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <Menubar.Menu>
            <a
              href="https://github.com/nicocarlier"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 hover:text-coal-100"
            >
              GitHub
            </a>
          </Menubar.Menu>

          <Menubar.Menu>
            <a
              href="https://www.linkedin.com/in/nicholas-carlier/"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 hover:text-coal-100"
            >
              LinkedIn
            </a>
          </Menubar.Menu>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
