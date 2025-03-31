'use client';

import * as React from 'react';
import Link from 'next/link';
import * as Menubar from '@radix-ui/react-menubar';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../app/context/ThemeContext';

const PROJECTS = [
  { name: '🏠  Fairbnb (Airbnb clone)', slug: 'fairbnb' },
  { name: '♟️  Chess App', slug: 'chess-app' },
  { name: "💪  Reps 'N Recipes", slug: 'reps-n-recipes' },
  { name: '🛠️  Mini Projects', slug: 'mini-projects' },
];

const Navbar = () => {
  const { darkMode, toggleDarkMode, isLoaded } = useTheme();

  return (
    <Menubar.Root className="MenubarRoot flex justify-center border-b border-gray-200 dark:border-coal-800 bg-white/50 dark:bg-coal-900/50 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-screen-md w-full px-4 md:px-0">
        <div className="flex items-center h-14">
          <Menubar.Menu>
            <Link
              href="/"
              className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100"
            >
              About
            </Link>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger className="MenubarTrigger text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100">
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
                  <Menubar.Item className="MenubarItem">View All</Menubar.Item>
                </Link>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <div className="flex items-center ml-auto space-x-4">
            <a
              href="https://github.com/nicocarlier"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nicholas-carlier/"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100"
            >
              LinkedIn
            </a>

            {isLoaded && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
