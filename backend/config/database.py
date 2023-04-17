# mongoDB driver
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# connection between mongodb and database.py
client = MongoClient(os.getenv('MONGOURL'))

database = client.modelcomments

comment_col = database.comments


# openssl rand -hex 32 to randomly generate JWT SECRET
