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

    async def get_posts_by_category(self, name: str) -> List[PostOut]:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == name)
            if not category:
                await handle_not_found_error("Category not found.")

            posts = await engine.find(PostIn, PostIn.category == name)
            posts_by_cat = []

            for post in posts:
                post_out = PostOut(
                    title=post.title,
                    author=post.author,
                    date=post.date,
                    image=post.image,
                    chapters=post.chapters,
                    resources=post.resources,
                    category=category
                )
                posts_by_cat.append(post_out)     
            return posts_by_cat
        
        except Exception as e:
            await handle_pymongo_error(e)

    async def get_post(self, title: str) -> PostIn:
        try:
            post = await engine.find_one(PostIn, PostIn.title == title)

            if not post:
                handle_pymongo_error("Post not found")
            
            return post
        
        except Exception as e:
            handle_pymongo_error(e)

    def update_post():
        pass

    def delete_post():
        pass
