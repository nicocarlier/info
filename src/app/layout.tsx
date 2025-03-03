import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import './globals.css';
import 'react-vertical-timeline-component/style.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nico Carlier',
  description: 'Full stack software engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-coal-950">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
