'use client';

import * as React from 'react';
import Link from 'next/link';
import * as Menubar from '@radix-ui/react-menubar';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../app/context/ThemeContext';
import { NAV_PROJECTS } from '@/constants/projects.conts';
import { Button, Input, Textarea } from '@heroui/react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';

const SunIcon = () => (
  <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
);
const MoonIcon = () => (
  <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
);

interface Error {
  linkedin: boolean;
  message: boolean;
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [linkedinUrl, setLinkedinUrl] = React.useState<string>('');
  const [contactMessage, setContactMessage] = React.useState<string>('');

  const [error, setError] = React.useState<Error>({
    linkedin: false,
    message: false,
  });

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
                {NAV_PROJECTS.map((project) => (
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

          <Menubar.Menu>
            <Menubar.Trigger className="MenubarTrigger text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100">
              Contact
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="MenubarContent w-[450px] h-80 bg-white dark:bg-coal-900 opacity-90 z-[61] "
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                <div className="h-full w-full flex flex-col gap-4 justify-between p-4">
                  <div className="h-full w-full flex flex-col gap-4">
                    <div className="w-full">
                      <p className="opacity-60 text-black dark:text-coal-100 mb-1">
                        Contact / Feedback:
                      </p>
                      <div className="bg-red-500 min-h-[104px] ">
                        <Textarea
                          value={contactMessage}
                          onValueChange={setContactMessage}
                          classNames={{
                            input:
                              'bg-coal-200 text-black placeholder:text-gray-700 p-3 h-28',
                            inputWrapper: 'p-0',
                          }}
                          placeholder="Let me know about any exciting projects or of any feedback"
                          minRows={4}
                          maxRows={4}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-gray-700 dark:text-coal-300 mb-1">
                        Your Linkedin:
                      </p>
                      <div>
                        <Input
                          value={linkedinUrl}
                          onValueChange={setLinkedinUrl}
                          classNames={{
                            input:
                              'bg-coal-200 text-black p-2 placeholder:text-gray-700',
                            inputWrapper: 'p-0',
                          }}
                          placeholder="https://www.linkedin.com/in/your-usename/"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    {error.message && (
                      <p className="text-error-500">Please leave a message</p>
                    )}
                    {error.linkedin && (
                      <p className="text-error-500">
                        Please include your linkedin url
                      </p>
                    )}
                    <Button
                      className="w-fit rounded-md"
                      size="md"
                      color="primary"
                      startContent={<PaperPlaneIcon />}
                      isDisabled={
                        !linkedinUrl?.length || !contactMessage?.length
                      }
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <div className="flex items-center ml-auto space-x-4">
            <a
              href="https://github.com/nicocarlier"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nicholas-carlier/"
              target="_blank"
              rel="noopener noreferrer"
              className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100 hover:underline"
            >
              LinkedIn
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
