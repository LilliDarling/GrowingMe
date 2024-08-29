from fastapi import HTTPException
from typing import List
from models.category import CategoryIn, CategoryOut, CategoryList
from models.post import Post
from utils.database import engine

class CategoryQueries:

	async def create_category(self, category: CategoryIn) -> CategoryOut:
		await engine.save(category)
		return CategoryOut(
			name=category.name,
			is_active=True
		)

	async def get_all_categories(self) -> List[CategoryOut]:
		categories = await engine.find(CategoryIn)
		return [CategoryOut(name=category.name) for category in categories]

	async def get_category():
		pass

	async def update_category():
		pass


	async def delete_category():
		pass