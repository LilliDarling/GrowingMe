from odmantic import Model, Field
from pydantic import BaseModel
from typing import List, Optional


class CategoryIn(Model):
    name: str = Field(unique=True)
    is_active: bool = True

class CategoryOut(Model):
    name: str
    is_active: bool = True

class CategoryList(BaseModel):
    categories: List[CategoryOut]

class CategoryPatchSchema(BaseModel):
    name: Optional[str] = None
    is_active: Optional[bool] = None
