from fastapi import APIRouter, HTTPException, Depends
from models.post import PostIn, PostOut, PostList, PostPatchSchema
from queries.post import PostQueries
from utils.exceptions import handle_not_found_error


router = APIRouter()

@router.post("/posts", response_model=PostOut)
async def create_post(
    post: PostIn,
    queries: PostQueries = Depends()
):
    post_new = await queries.create_post(post=post)
    if post_new is None:
        raise HTTPException(status_code=400, detail="Post not created. Category may not exist.")
    return post_new


@router.get("/posts", response_model=PostList)
async def get_all_posts(
    queries: PostQueries = Depends()
):
    posts = await queries.get_all_posts()
    return PostList(posts=posts)


@router.get("/posts/{title}", response_model=PostIn)
async def get_post(
    title=str,
    queries: PostQueries = Depends()
):
    post = await queries.get_post(title=title)
    if not post:
        await handle_not_found_error("Post not found.")
    return post


@router.put("/posts/{title}", response_model=PostOut)
async def update_post(
    patch: PostPatchSchema,
    title: str,
    queries: PostQueries = Depends()
):
    post = await queries.update_post(patch=patch, title=title)
    if not post:
        await handle_not_found_error("Post not found.")
    return post


@router.delete("/posts/{title}", status_code=204)
async def delete_post(
    title: str,
    queries: PostQueries = Depends()
):
    success = await queries.delete_post(title)
    if not success:
        await handle_not_found_error("Post not found.")
    return success
