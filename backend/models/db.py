"""
All DB stuffs abstracted away here
"""
import sqlite3
import os

DATABASE_NAME = 'giro.db'


def getDB():
  connection = sqlite3.connect(DATABASE_NAME)
  
  connection.row_factory = sqlite3.Row
  return connection


def initDB():
  db = getDB()

  with open('db_setup.sql', 'r') as f:
     cur = db.cursor()
     cur.executescript(f.read())
  db.commit()
  cur.close()
  db.close()
