from odmantic import AIOEngine
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models.category import CategoryIn, CategoryOut, CategoryList
from queries.category import CategoryQueries


router = APIRouter()

category_exception = HTTPException(status_code=404, detail="Can't be found!")


@router.post("/categories/new", response_model=CategoryOut)
async def create_category(
  category: CategoryIn,
  queries: CategoryQueries = Depends(),
):
  category_new = await queries.create_category(category=category)
  return category_new

@router.get("/categories", response_model=CategoryList)
async def get_all_categories(
  queries: CategoryQueries = Depends(),
):
  categories = await queries.get_all_categories()
  return CategoryList(categories=categories)

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
