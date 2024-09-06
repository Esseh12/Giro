#!/usr/bin/env python3

########## imports ##########
from flask import Flask, jsonify
import os
#############################


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
    return jsonify({"msg": "home"})


if __name__ == "__main__":
    app.run(host=FLASK_HOST, port=FLASK_PORT)
