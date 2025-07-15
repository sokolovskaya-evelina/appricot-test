import { Product } from '@/types/types'
import Link from 'next/link'

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc = product.images[0] ?? '/image-not-found.png'

  return (
    <div key={product.id} className="border p-4 rounded shadow-lg">
      <img src={imageSrc} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">
        <Link href={`/products/${product.id}`} className="underline hover:text-primary">
          {product.title}
        </Link>
      </h2>
      <p>{product.price} $</p>
    </div>
  )
}
