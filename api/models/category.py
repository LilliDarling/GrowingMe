from odmantic import Model, Field


class CategoryIn(Model):
  name: str = Field(unique=True)


class CategoryOut(Model):
  name: str 
  is_active: bool = True

