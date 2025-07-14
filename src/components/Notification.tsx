import { useEffect } from 'react'

interface NotificationProps {
  message: string
  onClose: () => void
}

export default function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded shadow-lg z-50">
      {message}
    </div>
  )
}
