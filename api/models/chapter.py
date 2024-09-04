from odmantic import Model, Reference
from typing import Optional
from .post import Post


class Chapter(Model):
    title: str
    image: Optional[str] = None
    quote: Optional[str] = None
    post: Post = Reference()
