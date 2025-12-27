from fastapi import FastAPI

app = FastAPI(title="RPG Tormenta API")

@app.get("/health")
def health():
    return {"status": "ok"}
