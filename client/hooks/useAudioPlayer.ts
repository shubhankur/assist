export default function useAudioPlayer() {
  const play = (data: ArrayBuffer) => {
    const blob = new Blob([data], { type: 'audio/wav' })
    const url = URL.createObjectURL(blob)
    const audio = new Audio(url)
    audio.play()
  }
  return { play }
}
