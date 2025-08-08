'use client';

import * as React from 'react';
import Link from 'next/link';
import * as Menubar from '@radix-ui/react-menubar';
import { FiSun, FiMoon, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../app/context/ThemeContext';
import { NAV_PROJECTS } from '@/constants/projects.conts';
import GoogleCalendarButton from './GoogleCalendarButton';

const SunIcon = () => (
  <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
);
const MoonIcon = () => (
  <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Menubar.Root className="MenubarRoot flex justify-center border-b border-gray-200 dark:border-coal-800 bg-white/50 dark:bg-coal-900/50 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-screen-md w-full px-4 md:px-0 flex items-center h-14 text-gray-700 dark:text-coal-300 ">
        <Menubar.Menu>
          <Link
            href="/"
            className="MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100"
          >
            About
          </Link>
        </Menubar.Menu>

        <Menubar.Menu>
          <Link
            href="/projects"
            className="MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100"
          >
            Projects
          </Link>
        </Menubar.Menu>

        <Menubar.Menu>
          <Link
            href="/life"
            className="MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100"
          >
            Life
          </Link>
        </Menubar.Menu>

        <div className="flex items-center ml-auto space-x-4">
          {/* <GoogleCalendarButton /> */}

          <a
            href="https://github.com/nicocarlier"
            target="_blank"
            rel="noopener noreferrer"
            className="MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100 flex items-center gap-1"
            aria-label="GitHub (opens in new tab)"
          >
            GitHub
            <FiExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/nicholas-carlier/"
            target="_blank"
            rel="noopener noreferrer"
            className="MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100 flex items-center gap-1"
            aria-label="LinkedIn (opens in new tab)"
          >
            LinkedIn
            <FiExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg dark:bg-gray-700 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
