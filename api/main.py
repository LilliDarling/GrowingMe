from routes import post, category
from fastapi import FastAPI


app = FastAPI()

app.include_router(post.router, tags=["Post"])
app.include_router(category.router, tags=["Category"])
