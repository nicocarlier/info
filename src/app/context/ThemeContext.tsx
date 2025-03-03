'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true); // Start with dark mode
  const isClient = useIsClient();

  useEffect(() => {
    // Only check localStorage if it exists
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        const initialDarkMode = JSON.parse(saved);
        setDarkMode(initialDarkMode);
        // Only remove dark class if explicitly set to light mode
        if (!initialDarkMode) {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [darkMode, isClient]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, isLoaded: isClient }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
