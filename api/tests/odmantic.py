from odmantic import AIOEngine, Model
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
import os


class Category(Model):
  name: str


async def test_odmantic():
  client = AsyncIOMotorClient("mongodb://localhost:27017")
  engine = AIOEngine(client=client, database="test_db")

  test_category = Category(name='Learning')

  created_category = await engine.save(test_category)
  print(f"Created category: {created_category}")

  found_category = await engine.find_one(Category, Category.name == "Learning")
  print(f"Found user: {found_category}")

  found_category.name = 'Adventure'
  updated_category = await engine.save(found_category)
  print(f"Updated category: {updated_category}")

  await engine.delete(updated_category)
  print("Category deleted")

  deleted_category = await engine.find_one(Category, Category.name == "Adventure")
  print(f"Category after deletion: {deleted_category}")

asyncio.run(test_odmantic())