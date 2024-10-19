from routes import post, chapter, category
from fastapi import FastAPI


app = FastAPI()

app.include_router(post.router, tags=["Post"])
app.include_router(chapter.router, tags=["Chapter"])
app.include_router(category.router, tags=["Category"])
