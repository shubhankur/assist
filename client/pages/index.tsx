import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/chat?name=${encodeURIComponent(name)}`)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        <button type="submit">Start</button>
      </form>
    </div>
  )
}
