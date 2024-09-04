from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
from models.category import CategoryOut
import os


client = AsyncIOMotorClient(os.environ["MONGO_DB_URI"])
engine = AIOEngine(client=client, database="growing_me")


async def initialize_database():
    await engine.configure_database(
        [
            CategoryOut,
        ]
    )
