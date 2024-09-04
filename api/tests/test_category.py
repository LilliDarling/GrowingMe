from queries.category import CategoryQueries
from models.category import CategoryIn, CategoryOut
from fastapi.testclient import TestClient
from main import app
import pytest


client = TestClient(app)


class FakeCategoryQueries:

    async def get_category(self, name: str):
        if name.lower() == "tests":
            return CategoryOut(name="Tests", is_active=True)
        return None

    async def get_all_categories(self):
        return [CategoryOut(name=f"Tests{i}", is_active=True) for i in range(3)]

    async def create_category(self, category: CategoryIn):
        return CategoryOut(name=category.name, is_active=True)

    async def delete_category(self, name: str):
        if name.lower() == "tests":
            return True
        return False


@pytest.mark.asyncio
async def test_get_category_200():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    res = client.get("/categories/Tests")
    assert res.status_code == 200
    data = res.json()
    assert data["name"] == "Tests"
    assert data["is_active"] is True
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_get_category_404():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    res = client.get("/categories/NotFound")
    assert res.status_code == 404
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_get_categories():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    res = client.get("/categories")
    assert res.status_code == 200
    data = res.json()
    assert "categories" in data
    assert len(data["categories"]) == 3
    for category in data["categories"]:
        assert "name" in category
        assert "is_active" in category
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_create_category_200():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    cat_data = {"name": "Tests"}
    res = client.post("/categories", json=cat_data)
    assert res.status_code == 200
    data = res.json()
    assert data["name"] == "Tests"
    assert data["is_active"] is True
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_delete_category_204():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    res = client.delete("/categories/Tests")
    assert res.status_code == 204
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_delete_category_404():
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    res = client.delete("/categories/NotFound")
    assert res.status_code == 404
    app.dependency_overrides = {}
