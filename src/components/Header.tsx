import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-primary p-6 text-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="font-bold text-lg">Appricot Test</div>
        <div className="flex gap-4">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
