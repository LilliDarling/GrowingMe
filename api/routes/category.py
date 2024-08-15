from odmantic import AIOEngine
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models.category import Category


router = APIRouter()

category_exception = HTTPException(status_code=404, detail="Can't be found!")


@router.post("/categories")
async def create_category():
  pass

@router.get("/categories")
async def get_all_categories():
  pass

@router.get("/categories/{id}")
async def get_category():
  pass

@router.put("/categories/{id}")
async def update_category():
  pass

@router.delete("/categories/{id}")
async def delete_category():
  pass
