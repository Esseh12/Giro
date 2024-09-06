#!/usr/bin/env python3

########## imports ##########
from flask import Flask, jsonify
import os
import sqlite3
from dotenv import load_dotenv
# from os import path
#############################


def get_db():
    """thi return a db connection"""
    conn = sqlite3.connect(os.getenv("DATABASE_NAME"))
    return conn

def init_db():   
    db = get_db()
    
    with app.open_resource('db_setup.sql', mode='r') as f:
        db.executescript(f.read())
    db.commit()
    db.close()
    

app = Flask(__name__)


############ Global configurations #############
app.url_map.strict_slashes = False  # its by default by the way! invariably, this line is redundant :)!

FLASK_PORT = os.getenv("FLASK_PORT")
FLASK_HOST = os.getenv("FLASK_HOST")

# #############################################


@app.route("/", methods=["GET"])
def index():
    """ the index route
        Method: GET /
        return: json
    """
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT id, name FROM users;")
    users = cur.fetchall()

    return jsonify({"data": users})


if __name__ == "__main__":
    load_dotenv()
    init_db() #: remember to comment it out 
    app.run(host=FLASK_HOST, port=FLASK_PORT)