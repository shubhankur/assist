import { useAudioStream } from '../hooks/useAudioStream'

export default function MicButton({ onData }: { onData: (d: ArrayBuffer) => void }) {
  const { start, stop, active } = useAudioStream(onData)
  return (
    <button onMouseDown={start} onMouseUp={stop} style={{ padding: 20 }}>
      {active ? 'Recording...' : 'Hold to Talk'}
    </button>
  )
}
