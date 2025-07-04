import { useRouter } from 'next/router'
import MicButton from '../components/MicButton'
import AgentBubble from '../components/AgentBubble'
import useWSChat from '../hooks/useWSChat'

export default function Chat() {
  const router = useRouter()
  const { name } = router.query as { name?: string }
  const { messages, sendAudio } = useWSChat()

  return (
    <div style={{ padding: 40 }}>
      <h2>Hello {name}</h2>
      <div>
        {messages.map((m, i) => (
          <AgentBubble key={i} text={m} />
        ))}
      </div>
      <MicButton onData={sendAudio} />
    </div>
  )
}
