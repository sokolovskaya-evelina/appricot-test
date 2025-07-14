import { Product } from '@/types/types'
import NotFound from '@/app/not-found'
import ImageCarousel from '@/components/ImageCarousel'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return { title: `Product #${id}` }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return <NotFound />
  }

  const product: Product = await res.json()

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-4">
      <div className="rounded self-center shadow p-4 bg-secondary shrink-0">
        <ImageCarousel images={product.images} alt={product.title} />
      </div>
      <div className="rounded shadow p-4 bg-secondary flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl">
          <span className="text-secondary-foreground">Price:</span> {product.price} $
        </p>
        <p className="mt-2">
          <span className="text-secondary-foreground">Description:</span> {product.description}
        </p>
      </div>
    </div>
  )
}
