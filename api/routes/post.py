from fastapi import APIRouter, HTTPException, Depends
from models.post import PostIn, PostOut, PostList, PostPatchSchema
from queries.post import PostQueries
from utils.exceptions import handle_not_found_error, handle_pymongo_error


router = APIRouter()

@router.post("/posts", response_model=PostOut)
async def create_post(
    post: PostIn,
    queries: PostQueries = Depends()
):
    post_new = await queries.create_post(post=post)
    return post_new


@router.get("/posts")
async def get_all_posts():
    pass


@router.get("/posts/{_id}")
async def get_post():
    pass


@router.put("/posts/{_id}")
async def update_post():
    pass


@router.delete("/posts/{_id}")
async def delete_post():
    pass
