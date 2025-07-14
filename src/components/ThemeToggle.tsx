'use client'

import { useTheme } from '@/lib/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="cursor-pointer p-2 rounded border-none bg-secondary text-sm hover:bg-accent outline-none focus:outline-none"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}
