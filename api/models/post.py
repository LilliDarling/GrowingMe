from odmantic import Model, EmbeddedModel, Reference, Field
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from .category import CategoryIn


class Chapter(EmbeddedModel):
    header: str
    image: Optional[str] = None
    quote: Optional[str] = None
    paragraphs: List[str] = []


class Resource(EmbeddedModel):
    resource: str


class PostIn(Model):
    title: str = Field(unique=True)
    date: datetime
    author: str
    image: str
    chapters: List[Chapter]
    resources: List[Resource] = []
    category: str


class PostOut(Model):
    title: str
    date: datetime
    author: str
    image: str
    chapters: List[Chapter]
    resources: List[Resource] = []
    category: CategoryIn = Reference()


class PostList(BaseModel):
    posts: List[PostOut]


class PostPatchSchema(BaseModel):
    title: Optional[str] = None
    date: Optional[datetime] = None
    author: Optional[str] = None
    image: Optional[str] = None
    chapters: Optional[List[Chapter]] = None
    resources: Optional[List[Resource]] = None
    category: Optional[str] = None
