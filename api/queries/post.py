from typing import List
from models.post import PostIn, PostOut, PostPatchSchema, Chapter, Resource
from models.category import CategoryIn
from utils.database import engine
from utils.exceptions import handle_not_found_error, handle_pymongo_error

class PostQueries:

    async def create_post(self, post: PostIn) -> PostOut:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == post.category)
        except Exception as e:
            handle_not_found_error(e)
            return None
        
        if category:
            try:
                await engine.save(post)

                return PostOut(
                    title=post.title,
                    author=post.author,
                    date=post.date,
                    image=post.image,
                    chapters=post.chapters,
                    resources=post.resources,
                    category=category
                )
            except Exception as e:
                handle_pymongo_error(e)
                return None

    def get_all_posts(self) -> List[PostOut]:
        pass

    def get_post():
        pass

    def update_post():
        pass

    def delete_post():
        pass
