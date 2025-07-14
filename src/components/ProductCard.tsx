'use client'

import Image from 'next/image'
import { Product } from '@/types/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className="border p-4 rounded shadow-lg">
      <Image
        src={'/image-not-found.png'}
        alt={product.title}
        height={760}
        width={760}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">
        <a href={`/products/${product.id}`} className="underline">
          {product.title}
        </a>
      </h2>
      <p>{product.price} $</p>
    </div>
  )
}
