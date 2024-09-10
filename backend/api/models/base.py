# import uuid
# from datetime import datetime
# import sqlite3,os
# from dotenv import load_dotenv

# load_dotenv()


# def getDB():
#     """ get a database connection
#     Remeber to close after use
#     """
#     dbname = os.getenv('DATABASE_NAME')
#     conn = sqlite3.connect(dbname)
#     return conn


# class Base:
#     def __init__(self) -> None:
#         self.id =  str(uuid.uuid4())
#         self.created = str(datetime.now())
        
#     def save(self):
#         """ saves to database"""
#         ...

#     def create_table(self):
#         """this create table into the database"""
#         ...


# base = Base()

# print(len(base.id))
# print(base.created)