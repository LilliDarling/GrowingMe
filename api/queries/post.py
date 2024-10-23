from typing import List
from models.post import PostIn, PostOut, PostPatchSchema
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
            return None

    async def get_posts_by_category(self, name: str) -> List[PostOut]:
        try:
            category = await engine.find_one(CategoryIn, CategoryIn.name == name)
            if not category:
                await handle_not_found_error("Category not found.")
                return None

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
            return None

    async def get_post(self, title: str) -> PostIn:
        try:
            post = await engine.find_one(PostIn, PostIn.title == title)

            if not post:
                await handle_pymongo_error("Post not found.")
                return None
            
            return post
        
        except Exception as e:
            await handle_pymongo_error(e)
            return None

    async def update_post(self, patch: PostPatchSchema, title: str) -> PostOut:
        try:
            post = await engine.find_one(PostIn, PostIn.title == title)
            if not post:
                await handle_not_found_error("Post not found.")
                return None

            if patch.category:
                category = await engine.find_one(CategoryIn, CategoryIn.name == patch.category)
                if not category:
                    await handle_not_found_error("Category not found.")
                    return None
            
            else:
                category = await engine.find_one(CategoryIn, CategoryIn.name == post.category)
                if not category:
                    await handle_not_found_error("Category not found.")
                    return None
            
            for field, value in patch.dict(exclude_unset=True).items():
                setattr(post, field, value)
            
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

    async def delete_post(self, title: str) -> PostOut:
        try:
            post = await engine.find_one(PostIn, PostIn.title == title)
            if not post:
                await handle_not_found_error("Post not found.")
                return None
            
            category = await engine.find_one(CategoryIn, CategoryIn.name == post.category)
            if not category:
                await handle_not_found_error("Category not found.")
                return None
            
            await engine.delete(post)
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
