from fastapi import FastAPI

app = FastAPI(title="AURUM AI API")


@app.get("/")
def home():
    return {
        "message": "Welcome to AURUM AI Backend",
        "status": "running"
    }
