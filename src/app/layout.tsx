import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <div className="flex-grow min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
