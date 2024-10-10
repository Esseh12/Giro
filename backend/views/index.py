"""
This module contains route for the index 
"""
from flask import Blueprint, jsonify, request, abort
from models.db import getDB
import os

index = Blueprint('index', __name__)

@index.get('/')
def index_route():
  """ Get flash_sales (products), best_selling, all_products """

  db = getDB()
  cur = db.cursor()

  # Get flash_sales (products)
  # fetch only the products with discounts
  cur.execute("SELECT id, name, price, discount, rating, image_url FROM products WHERE discount NOT NULL;")
  flash_sales_products = [dict(row) for row in cur.fetchall()]

  # get best selling products
  # fetch only the products that has been sold before
  cur.execute("SELECT products.id, products.name, products.price, products.discount, products.rating, products.image_url FROM products JOIN sales ON sales.product_id = products.id;")
  best_selling_products = [dict(row) for row in cur.fetchall()]

  # get all products
  cur.execute("SELECT id, name, category_name, price, rating, image_url, is_new FROM products;")
  all_products = [dict(row) for row in cur.fetchall()]

  # Cursor and DB Connection close
  cur.close()
  db.close()

  data = {
      "flash_sales": flash_sales_products,
      "best_selling_products": best_selling_products,
      "all_products": all_products
  }
  return jsonify({"status": 200, "data": data}), 200


@index.post('/contact')
def contact_us():
  if request.content_type != 'application/json':
    abort(415, "Unsupported Media Type: Please supply a json body")
  data = request.json

  from app import mail

  name = data.get('name')
  email = data.get('email')
  phone = data.get('phone_number')
  message = data.get('message')

  body = f'Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}\n'''

  CONTACT_US_EMAIL = os.getenv('CONTACT_US_EMAIL')

  try:
    mail.sendMail('Giro Contact Us Form', CONTACT_US_EMAIL, body)
    return jsonify({'status': 200, 'msg': 'Message sent successfully!'}), 200
  except Exception as e:
    print(e)
    return jsonify({'status': 401, 'msg': 'Contact us failed'}), 401
