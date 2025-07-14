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
    <div>
      <h1 className="text-2xl font-bold mb-2">О нас</h1>
      <p className="mb-2">Это тестовое приложение для демонстрации работы с Next.js</p>
      <p className="text-sm text-secondary-foreground">Страница сгенерирована: {formattedDate}</p>
    </div>
  )
}
