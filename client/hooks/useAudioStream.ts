import { useState } from 'react'

export function useAudioStream(onData: (d: ArrayBuffer) => void) {
  const [active, setActive] = useState(false)
  let mediaRecorder: MediaRecorder | null = null

  const start = async () => {
    if (active) return
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = e => onData(e.data.arrayBuffer())
    mediaRecorder.start(20)
    setActive(true)
  }

  const stop = () => {
    if (mediaRecorder && active) {
      mediaRecorder.stop()
      setActive(false)
    }
  }

  return { start, stop, active }
}
