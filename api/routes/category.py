from fastapi import APIRouter, Depends, HTTPException
from models.category import CategoryIn, CategoryOut, CategoryList, CategoryPatchSchema
from queries.category import CategoryQueries
from utils.exceptions import category_exception


router = APIRouter()


@router.post("/categories", response_model=CategoryOut)
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

@router.get("/categories/{name}", response_model=CategoryOut)
async def get_category(
  name = str,
  queries: CategoryQueries = Depends(),
):
  category = await queries.get_category(name=name)
  
  if not category:
    raise category_exception
  
  return category

@router.patch("/categories/{name}", response_model=CategoryOut)
async def update_category(
  patch: CategoryPatchSchema,
  name = str,
  queries: CategoryQueries = Depends(),
):
  category = await queries.update_category(patch=patch, name=name)

  if not category:
    raise category_exception
  
  return category

@router.delete("/categories/{name}", status_code=204)
async def delete_category(
  name = str,
  queries: CategoryQueries = Depends(),
):
  success = await queries.delete_category(name)
  if not success:
    raise HTTPException(status_code=404, detail="Category not found")
