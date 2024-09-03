from typing import List
from models.category import CategoryIn, CategoryOut, CategoryPatchSchema
from models.post import Post
from utils.database import engine
from utils.exceptions import category_exception

class CategoryQueries:

	async def create_category(self, category: CategoryIn) -> CategoryOut:
		await engine.save(category)
		return CategoryOut(
			name=category.name,
			is_active=True
		)

	async def get_all_categories(self) -> List[CategoryOut]:
		categories = await engine.find(CategoryIn)
		return [CategoryOut(name=category.name, is_active=category.is_active) for category in categories]

	async def get_category(self, name: str) -> CategoryOut:
		category = await engine.find_one(CategoryIn, CategoryIn.name == name)

		if not category:
			raise category_exception
		
		return category

	async def update_category(self, patch: CategoryPatchSchema, name: str) -> CategoryOut:
		category = await engine.find_one(CategoryIn, CategoryIn.name == name)

		if not category:
			raise category_exception
		
		category.model_update(patch)
		
		await engine.save(category)

		return CategoryOut(
			name=category.name,
			is_active=category.is_active
		)


	async def delete_category():
		pass