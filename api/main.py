from routes import post, chapter, category
from fastapi import FastAPI
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
import os


load_dotenv('./.env')

app = FastAPI()
client = AsyncIOMotorClient(os.environ['MONGO_DB_URI'])
engine = AIOEngine(client=client, database=os.environ['MONGO_DB'])


def get_engine():
  return engine


app.include_router(post.router, tags=["Post"])
app.include_router(chapter.router, tags=["Chapter"])
app.include_router(category.router, tags=["Category"])


@app.on_event("startup")
async def startup():
	try:
		await client.admin.command('ping')
	except Exception as e:
		print(f"Unable to connect database: {e}")
		import sys
		sys.exit(1)


@app.on_event("shutdown")
async def shutdown():
  client.close()
