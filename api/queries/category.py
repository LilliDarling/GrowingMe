from typing import List
from models.category import CategoryIn, CategoryOut, CategoryPatchSchema
from utils.database import engine
from utils.exceptions import handle_not_found_error, handle_pymongo_error


class CategoryQueries:

    async def create_category(self, category: CategoryIn) -> CategoryOut:
        try:
            await engine.save(category)
            return CategoryOut(name=category.name, is_active=True)
        except Exception as e:
            await handle_pymongo_error(e)
            return None

    async def get_all_categories(self) -> List[CategoryOut]:
        try:
            categories = await engine.find(CategoryIn)
            return [
                CategoryOut(name=category.name, is_active=category.is_active)
                for category in categories
            ]
        except Exception as e:
            await handle_pymongo_error(e)
            return None

    async def get_category(self, name: str) -> CategoryOut:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == name)

            if not category:
                await handle_not_found_error("Category not found.")
                return None

            return category
        except Exception as e:
            await handle_pymongo_error(e)
            return None

    async def update_category(
        self, patch: CategoryPatchSchema, name: str
    ) -> CategoryOut:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == name)

            if not category:
                await handle_not_found_error("Category not found.")
                return None

            category.model_update(patch)
            await engine.save(category)
            return CategoryOut(name=category.name, is_active=category.is_active)
        except Exception as e:
            await handle_pymongo_error(e)
            return None

    async def delete_category(self, name: str) -> CategoryOut:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == name)

            if not category:
                await handle_not_found_error("Category not found.")
                return None

            await engine.delete(category)
            return CategoryOut(name=category.name)
        except Exception as e:
            await handle_pymongo_error(e)
            return None
