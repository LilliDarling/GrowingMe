from odmantic import Model, EmbeddedModel, Reference
from typing import List
from datetime import datetime
from .category import Category


class Resources(EmbeddedModel):
  resource: str 


class Post(Model):
  title: str
  date: datetime
  author: str 
  image: str 
  resources: List[Resources]
  category: Category = Reference()

