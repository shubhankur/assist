"""Streaming speech-to-text using OpenAI Whisper placeholder."""

async def stream_whisper(audio_chunks):
    for chunk in audio_chunks:
        # TODO: send to OpenAI Whisper with stream=True
        text = ""  # placeholder
        yield text
