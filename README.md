# Voice-First Routine Planner

This project contains a minimal prototype for a voice-based routine-planning assistant. It uses a Next.js client with WebSocket streaming to a FastAPI backend.

## Layout

```
/              # root
├── client/    # Next.js SPA
│   ├── pages/
│   │   ├── index.tsx        # ask name
│   │   └── chat.tsx         # voice session
│   ├── components/
│   │   ├── MicButton.tsx    # mute / push-to-talk
│   │   └── AgentBubble.tsx  # avatar + audio
│   ├── hooks/
│   │   ├── useAudioStream.ts     # mic → Opus chunks
│   │   ├── useWSChat.ts          # WS connect / protocol
│   │   └── useAudioPlayer.ts     # play incoming PCM
│   └── lib/codecs/
│
├── server/
│   ├── main.py              # FastAPI bootstrap; /ws endpoint
│   ├── pipelines/
│   │   ├── endpoint.py           # VAD + punctuation rules
│   │   ├── stt.py                # streaming Whisper
│   │   ├── chat.py               # incremental LLM
│   │   └── tts.py                # streaming TTS
│   └── utils/
│       └── audio.py            # resample, framing
|
├── shared/schema.ts          # common types
└── README.md
```

## Development

```bash
# install Python deps
cd server
pip install -r requirements.txt

# run FastAPI server
uvicorn main:app --reload

# in another terminal, run Next.js client
cd ../client
npm install
npm run dev
```

This repository only includes minimal scaffolding. The detailed interview logic, streaming audio handling and OpenAI integrations still need to be implemented.
