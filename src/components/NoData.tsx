import Link from 'next/link'

type Props = {
  title: string
  description: string
  toMain?: boolean
}

export default function NoData({ title, description, toMain = false }: Props) {
  return (
    <div className="min-h-[calc(100vh - 76px) flex flex-col items-center justify-center text-center">
      <img src="/not-found.png" alt="Грустный котик" className="w-48 h-48 mb-6" />
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500">{description}</p>
      {toMain && (
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary-foreground dark:hover:bg-secondary"
        >
          To main
        </Link>
      )}
    </div>
  )
}
