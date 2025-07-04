from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import asyncio

app = FastAPI()

# allow local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return HTMLResponse("Voice Planner backend running")

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            data = await ws.receive_bytes()
            # TODO: process Opus/PCM frames
            # placeholder: echo back
            await ws.send_bytes(data)
    except Exception:
        pass
    finally:
        await ws.close()
