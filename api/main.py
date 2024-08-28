from routes import post, chapter, category
from fastapi import FastAPI
from utils.database import initialize_database


app = FastAPI()

app.include_router(post.router, tags=["Post"])
app.include_router(chapter.router, tags=["Chapter"])
app.include_router(category.router, tags=["Category"])


@app.on_event("startup")
async def startup():
	try:
		await initialize_database()
		print("database connected")
	except Exception as e:
		print(f"Unable to connect database: {e}")
		import sys
		sys.exit(1)

