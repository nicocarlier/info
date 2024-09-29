import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DadstoDaddies - Empowering Fathers to Get Fit',
  description: 'A supportive community for dads on their fitness journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-full flex flex-col`}>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
