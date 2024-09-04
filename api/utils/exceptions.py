from fastapi import HTTPException


category_exception = HTTPException(status_code=404, detail="Can't be found!")
