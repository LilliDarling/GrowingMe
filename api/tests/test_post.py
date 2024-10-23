from queries.post import PostQueries
from models.post import PostIn, PostOut, PostPatchSchema, Chapter, Resource
from models.category import CategoryIn
from fastapi.testclient import TestClient
from datetime import datetime
from main import app
import pytest


client = TestClient(app)


class FakePostQueries:
    async def create_post(self, post: PostIn):
        if post.category.lower() == "tests":
            return PostOut(
                title=post.title,
                date=post.date,
                author=post.author,
                image=post.image,
                chapters=post.chapters,
                resources=post.resources,
                category=CategoryIn(name="Tests", is_active=True),
            )
        return None

    async def get_all_posts(self):
        return [
            PostOut(
                title=f"Test Post {i}",
                date=datetime.now(),
                author="Test Author",
                image="test.jpg",
                chapters=[
                    Chapter(header="Test Chapter", paragraphs=["Test paragraph"])
                ],
                resources=[Resource(resource="test.pdf")],
                category=CategoryIn(name="Tests", is_active=True),
            )
            for i in range(3)
        ]

    async def get_post(self, title: str):
        if title.lower() == "test post":
            return PostIn(
                title="Test Post",
                date=datetime.now(),
                author="Test Author",
                image="test.jpg",
                chapters=[
                    Chapter(header="Test Chapter", paragraphs=["Test paragraph"])
                ],
                resources=[Resource(resource="test.pdf")],
                category="Tests",
            )
        return None

    async def update_post(self, patch: PostPatchSchema, title: str):
        if title.lower() == "test post":
            return PostOut(
                title=patch.title or "Test Post",
                date=patch.date or datetime.now(),
                author=patch.author or "Test Author",
                image=patch.image or "test.jpg",
                chapters=patch.chapters
                or [Chapter(header="Test Chapter", paragraphs=["Test paragraph"])],
                resources=patch.resources or [Resource(resource="test.pdf")],
                category=CategoryIn(name="Tests", is_active=True),
            )
        return None

    async def delete_post(self, title: str):
        if title.lower() == "test post":
            return PostOut(
                title="Test Post",
                date=datetime.now(),
                author="Test Author",
                image="test.jpg",
                chapters=[
                    Chapter(header="Test Chapter", paragraphs=["Test paragraph"])
                ],
                resources=[Resource(resource="test.pdf")],
                category=CategoryIn(name="Tests", is_active=True),
            )
        return None


@pytest.mark.asyncio
async def test_create_post_200():
    app.dependency_overrides[PostQueries] = FakePostQueries
    post_data = {
        "title": "Test Post",
        "date": datetime.now().isoformat(),
        "author": "Test Author",
        "image": "test.jpg",
        "chapters": [{"header": "Test Chapter", "paragraphs": ["Test paragraph"]}],
        "resources": [{"resource": "test.pdf"}],
        "category": "Tests",
    }
    res = client.post("/posts", json=post_data)
    assert res.status_code == 200
    data = res.json()
    assert data["title"] == "Test Post"
    assert data["author"] == "Test Author"
    assert data["category"]["name"] == "Tests"
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_create_post_400():
    app.dependency_overrides[PostQueries] = FakePostQueries
    post_data = {
        "title": "Test Post",
        "date": datetime.now().isoformat(),
        "author": "Test Author",
        "image": "test.jpg",
        "chapters": [{"header": "Test Chapter", "paragraphs": ["Test paragraph"]}],
        "resources": [{"resource": "test.pdf"}],
        "category": "NonExistent",
    }
    res = client.post("/posts", json=post_data)
    assert res.status_code == 400
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_get_all_posts():
    app.dependency_overrides[PostQueries] = FakePostQueries
    res = client.get("/posts")
    assert res.status_code == 200
    data = res.json()
    assert "posts" in data
    assert len(data["posts"]) == 3
    for post in data["posts"]:
        assert "title" in post
        assert "author" in post
        assert "category" in post
        assert "chapters" in post
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_get_post_200():
    app.dependency_overrides[PostQueries] = FakePostQueries
    res = client.get("/posts/Test Post")
    assert res.status_code == 200
    data = res.json()
    assert data["title"] == "Test Post"
    assert data["author"] == "Test Author"
    assert data["category"] == "Tests"
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_get_post_404():
    app.dependency_overrides[PostQueries] = FakePostQueries
    res = client.get("/posts/NonExistent")
    assert res.status_code == 404
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_update_post_200():
    app.dependency_overrides[PostQueries] = FakePostQueries
    patch_data = {"author": "Updated Author", "image": "updated.jpg"}
    res = client.put("/posts/Test Post", json=patch_data)
    assert res.status_code == 200
    data = res.json()
    assert data["author"] == "Updated Author"
    assert data["image"] == "updated.jpg"
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_update_post_404():
    app.dependency_overrides[PostQueries] = FakePostQueries
    patch_data = {"author": "Updated Author"}
    res = client.put("/posts/NonExistent", json=patch_data)
    assert res.status_code == 404
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_delete_post_204():
    app.dependency_overrides[PostQueries] = FakePostQueries
    res = client.delete("/posts/Test Post")
    assert res.status_code == 204
    app.dependency_overrides = {}


@pytest.mark.asyncio
async def test_delete_post_404():
    app.dependency_overrides[PostQueries] = FakePostQueries
    res = client.delete("/posts/NonExistent")
    assert res.status_code == 404
    app.dependency_overrides = {}
