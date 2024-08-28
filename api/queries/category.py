from psycopg.rows import class_row
from fastapi import HTTPException
from typing import List
from models.category import Category
from models.post import Post
from main import get_engine


class CategoryQueries:

	@property
	def collection(self):
		return get_engine("category")

	def create_category(self, category: Category):
		self.collection.insert_one(category)


	def get_category():
		pass


	def get_all_categories():
		pass


	def update_category():
		pass


	def delete_category():
		pass