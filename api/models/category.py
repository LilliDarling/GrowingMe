from odmantic import Model, Field
from pydantic import BaseModel
from typing import List


class CategoryIn(Model):
  name: str = Field(unique=True)


class CategoryOut(Model):
  name: str 
  is_active: bool = True


class CategoryList(BaseModel):
  categories: List[CategoryOut]
