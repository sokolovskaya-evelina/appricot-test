'use client'

import { useState } from 'react'

type Props = {
  images: string[]
  alt?: string
}

export default function ImageCarousel({ images, alt = 'Изображение' }: Props) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  if (images.length === 0)
    return <img src="/image-not-found.png" alt="not found" className="object-contain max-h-96" />

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded shadow bg-white">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full relative">
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              sizes="100%"
              className="object-contain"
              onError={(e) => (e.currentTarget.src = '/image-not-found.png')}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition shadow-lg"
            aria-label="Назад"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition shadow-lg"
            aria-label="Вперёд"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full cursor-pointer hover:bg-secondary-foreground ${i === index ? 'bg-primary' : 'bg-secondary'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
