from fastapi import HTTPException
from typing import List
from models.category import CategoryIn, CategoryOut
from models.post import Post
from utils.database import engine

class CategoryQueries:

	async def create_category(self, category: CategoryIn) -> CategoryOut:
		await engine.save(category)
		return CategoryOut(
			name=category.name,
			is_active=True
		)


	def get_category():
		pass


	def get_all_categories():
		pass


	def update_category():
		pass


	def delete_category():
		pass