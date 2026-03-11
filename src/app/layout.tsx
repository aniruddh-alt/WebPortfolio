import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aniruddhan Ramesh',
  description:
    'CS @ University of Cincinnati. Building at Oumi. Interested in mechanistic interpretability and understanding how neural networks think.',
  keywords:
    'Aniruddhan Ramesh, AI, mechanistic interpretability, Oumi, University of Cincinnati, computer science',
  authors: [{ name: 'Aniruddhan Ramesh' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased bg-surface-0 text-zinc-50 min-h-screen">
        <div className="noise" />
        {children}
      </body>
    </html>
  )
}
