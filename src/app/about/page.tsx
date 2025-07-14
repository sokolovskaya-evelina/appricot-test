export default function Page() {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)

  return (
    <div className="bg-secondary p-4 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-2">About us</h1>
      <p className="mb-2">This is a test application to demonstrate working with Next.js</p>
      <p className="text-sm text-secondary-foreground">Page generated at: {formattedDate}</p>
    </div>
  )
}
