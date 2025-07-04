import { useEffect, useState } from 'react'
import { WSMessage } from '../../shared/schema'
import useAudioPlayer from './useAudioPlayer'

export default function useWSChat() {
  const [messages, setMessages] = useState<string[]>([])
  const { play } = useAudioPlayer()
  const [ws, setWs] = useState<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws')
    socket.binaryType = 'arraybuffer'
    socket.onmessage = (event) => {
      if (typeof event.data === 'string') {
        setMessages(m => [...m, event.data])
      } else {
        play(event.data)
      }
    }
    setWs(socket)
    return () => socket.close()
  }, [])

  const sendAudio = (buf: ArrayBuffer) => {
    ws?.send(buf)
  }

  return { messages, sendAudio }
}
