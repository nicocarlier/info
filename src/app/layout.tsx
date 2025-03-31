import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nico Carlier',
  description: 'Personal website and portfolio of Nico Carlier',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-100 dark:bg-coal-950 text-gray-900 dark:text-coal-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <div className="flex-grow">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
