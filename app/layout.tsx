import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mekoko — Coming Soon',
  description:
    'Handcrafted crochet treasures made with love. Launching soon — join the waitlist.',
  icons: {
    icon: '/mekoko.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased bg-cream text-warm-dark">
        {children}
      </body>
    </html>
  )
}
