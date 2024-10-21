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
            await handle_not_found_error(e)
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
                await handle_pymongo_error(e)
                return None

    async def get_all_posts(self) -> List[PostOut]:
        try:
            posts = await engine.find(PostIn)
            posts_list = []

            for post in posts:
                category = await engine.find_one(CategoryIn, CategoryIn.name == post.category)

                if not category:
                    continue

                post_out = PostOut(
                    title=post.title,
                    author=post.author,
                    date=post.date,
                    image=post.image,
                    chapters=post.chapters,
                    resources=post.resources,
                    category=category
                )
                posts_list.append(post_out)
            return posts_list
        
        except Exception as e:
            await handle_pymongo_error(e)

    def get_posts_by_category():
        pass

    def update_post():
        pass

    def delete_post():
        pass
