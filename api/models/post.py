from odmantic import Model, EmbeddedModel, Reference
from typing import List
from datetime import datetime
from .category import CategoryIn


class Resources(EmbeddedModel):
  resource: str 


class Post(Model):
  title: str
  date: datetime
  author: str 
  image: str 
  resources: List[Resources]
  category: CategoryIn = Reference()

