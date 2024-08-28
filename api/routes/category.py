from odmantic import AIOEngine
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models.category import Category
from queries.category import CategoryQueries


router = APIRouter()

category_exception = HTTPException(status_code=404, detail="Can't be found!")


@router.post("/categories")
async def create_category(
  category: Category,
  queries: CategoryQueries = Depends(),
):
  category_new = queries.create_category(category)
  return category_new

@router.get("/categories")
async def get_all_categories(
  queries: CategoryQueries = Depends(),
):
  pass

@router.get("/categories/{id}")
async def get_category(
  category_id = str,
  queries: CategoryQueries = Depends(),
):
  pass

@router.put("/categories/{id}")
async def update_category(
  category_id = str,
  queries: CategoryQueries = Depends(),
):
  pass

@router.delete("/categories/{id}")
async def delete_category(
  category_id = str,
  queries: CategoryQueries = Depends(),
):
  pass
