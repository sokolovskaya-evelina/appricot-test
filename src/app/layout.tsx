import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Appricot Test',
  description: 'Тестовое задание',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <Header />
        </div>

        <main className="p-6">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}
