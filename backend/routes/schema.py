from typing import Optional
from pydantic import BaseModel,Field

class ModelGenerateParams(BaseModel):
    input:str=Field(...)

class Comment(BaseModel):
    comment:str=Field(...)
    toxic:bool=Field(...)
    severe_toxic:bool=Field(...)
    obscene:bool=Field(...)
    threat:bool=Field(...)
    insult:bool=Field(...)
    identity_hate:bool=Field(...)
    visible:bool=Field(...)
    time:str=Field(...)