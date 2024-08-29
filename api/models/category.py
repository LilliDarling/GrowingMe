from odmantic import Model, Field
from pydantic import BaseModel
from typing import List


class CategoryIn(Model):
  name: str = Field(unique=True)
  is_active: bool = True


class CategoryOut(Model):
  name: str 
  is_active: bool = True


class CategoryList(BaseModel):
  categories: List[CategoryIn]

class CategoryPatchSchema(BaseModel):
  name: str = None
  is_active: bool = None

