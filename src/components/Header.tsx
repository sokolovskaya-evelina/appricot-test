'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-primary p-6 text-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="font-bold text-lg">Appricot Test</div>
        <div className="flex gap-4">
          <Link
            className={`hover:underline ${pathname === '/' ? 'font-semibold underline' : ''}`}
            href="/"
          >
            Главная
          </Link>
          <Link
            className={`hover:underline ${pathname === '/about' ? 'font-semibold underline' : ''}`}
            href="/about"
          >
            О нас
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
