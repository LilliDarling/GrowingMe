from fastapi import APIRouter, Depends
from models.category import CategoryIn, CategoryOut, CategoryList, CategoryPatchSchema
from queries.category import CategoryQueries
from models.post import PostList
from queries.post import PostQueries
from utils.exceptions import handle_not_found_error


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
    name=str,
    queries: CategoryQueries = Depends(),
):
    category = await queries.get_category(name=name)
    if not category:
        await handle_not_found_error("Category not found.")
    return category


@router.get("/categories/{name}/posts", response_model=PostList)
async def get_posts_by_category(
    name=str,
    queries: PostQueries = Depends()
):
    posts = await queries.get_posts_by_category(name=name)
    if not posts:
        await handle_not_found_error("Posts not found.")
    return PostList(posts=posts)


@router.patch("/categories/{name}", response_model=CategoryOut)
async def update_category(
    patch: CategoryPatchSchema,
    name=str,
    queries: CategoryQueries = Depends(),
):
    category = await queries.update_category(patch=patch, name=name)
    if not category:
        await handle_not_found_error("Category not found.")
    return category


@router.delete("/categories/{name}", status_code=204)
async def delete_category(
    name=str,
    queries: CategoryQueries = Depends(),
):
    success = await queries.delete_category(name)
    if not success:
        await handle_not_found_error("Category not found.")
    return success