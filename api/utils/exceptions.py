from fastapi import HTTPException
from pymongo.errors import PyMongoError, DuplicateKeyError


def handle_not_found_error(detail: str = "Item not found"):
  raise HTTPException(status_code=404, detail=detail)


def handle_pymongo_error(e: PyMongoError):
  if isinstance(e, DuplicateKeyError):
    raise HTTPException(status_code=400, detail="Duplicate key error")
  raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
