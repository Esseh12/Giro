from flask import Blueprint, jsonify, abort
from models.db import getDB

products = Blueprint('products', __name__)

@products.get('/<id>')
def single_product(id):
  if len(id) != 36:
      abort(404, "Invalid ID: Please supply a valid product ID at least")
  
  db = getDB()
  cur = db.cursor()
  cur.execute("SELECT * FROM products WHERE id=?;", (id, ))
  product = cur.fetchall()
  
  if not product:
      cur.close()
      db.close()
      abort(404, "No Product found!")
  product = dict(product[0])

  category = product['category_name']
  
  cur.execute("SELECT id, name, price, discount, rating, image_url FROM products WHERE category_name = ?;", (category, ))
  
  related_products = [dict(row) for row in cur.fetchall()]

  cur.close()
  db.close()
  return jsonify({'status': 200, 'data': {'product': product, 'related_products': related_products}}), 200
