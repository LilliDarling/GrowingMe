from odmantic import AIOEngine
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models.chapter import Chapter
from models.post import Post


router = APIRouter()

chapter_exception = HTTPException(status_code=404, detail="Can't be found!")


@router.post("/posts/{id}/chapters")
async def create_chapter():
  pass

@router.get("/posts/{id}/chapters")
async def get_all_chapters():
  pass

@router.get("/posts/{id}/chapters/{number}")
async def get_chapter():
  pass

@router.put("/posts/{id}/chapters/{number}")
async def update_chapter():
  pass

@router.delete("/posts/{id}/chapters/{number}")
async def delete_chapter():
  pass

