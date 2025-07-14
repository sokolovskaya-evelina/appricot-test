import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh - 76px) flex flex-col items-center justify-center text-center">
      <img src="/not-found.png" alt="Грустный котик" className="w-48 h-48 mb-6" />
      <h1 className="text-4xl font-bold mb-2">Page not found</h1>
      <p className="mb-4 text-gray-500">Kitten lost this page :(</p>
      <Link href="/" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">
        To main
      </Link>
    </div>
  )
}
