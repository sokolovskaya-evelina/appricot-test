import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

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
    <html lang="en">
      <body>
        <Header />
        <main className="p-6">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}
