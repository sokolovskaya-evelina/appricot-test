'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/types'
import Loader from '@/components/loader/Loader'
import Notification from '@/components/Notification'
import NoData from '@/components/NoData'

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loader />

  return (
    <>
      {products ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <NoData title="The kitten didn't find anything :-(" description="Try again later" />
      )}
      {error && <Notification message="Something went wrong 😞" onClose={() => setError(false)} />}
    </>
  )
}
