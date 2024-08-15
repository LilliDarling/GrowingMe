from odmantic import AIOEngine
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models.post import Post


router = APIRouter()

post_exception = HTTPException(status_code=404, detail="Can't be found!")


@router.post("/posts")
async def create_post():
  pass

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
