#!/usr/bin/env python3

########## imports ##########
from flask import Flask, jsonify, abort
from markupsafe import escape
import os
import sqlite3
from dotenv import load_dotenv
# from os import path
#############################


def get_db():
    """thi return a db connection"""
    conn = sqlite3.connect(os.getenv("DATABASE_NAME"))
    conn.row_factory = sqlite3.Row
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

        Get flash_sales (products)
        get best_selling products
        get all products
    """

    # Get flash_sales (products)
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT id, name, price, discount, rating, image_url FROM products WHERE discount NOT NULL;")
    flash_sales_products = [dict(row) for row in cur.fetchall()]

    # get best selling products
    cur.execute("SELECT products.id, products.name, products.price, products.discount, products.rating, products.image_url FROM products JOIN sales ON sales.product_id = products.id;")
    best_selling_products = [dict(row) for row in cur.fetchall()]

    # get all products
    cur.execute("SELECT id, name, price, rating, image_url, is_new FROM products;")
    # cur = cur.row_factory
    all_products = [dict(row) for row in cur.fetchall()]


    cur.close()
    db.close()

    data = {
        "flash_sales": flash_sales_products,
        "best_selling_products": best_selling_products,
        "all_products": all_products
    }
    return jsonify({"data": data}), 200


@app.route("/products/<id>", methods=["GET"])
def single_product(id):
    if len(id) != 36:
        abort()
    
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT * FROM products WHERE id=?;", (escape(id), ))
    product = cur.fetchall()
    
    if not product:
        cur.close()
        db.close()
        abort(404)
    product = dict(product[0])

    category = product['category_name']
    
    cur.execute("SELECT id, name, price, discount, rating, image_url FROM products WHERE category_name = ?;", (category, ))
    
    related_products = [dict(row) for row in cur.fetchall()]

    cur.close()
    db.close()
    return jsonify({'data': {'product': product, 'related_products': related_products}})

@app.errorhandler(404)
def handle_404(error):
    print(error)
    return jsonify({"error": 'Not Found'}), 404

if __name__ == "__main__":
    load_dotenv()
    init_db() #: remember to comment it out 
    app.run(host=FLASK_HOST, port=FLASK_PORT)