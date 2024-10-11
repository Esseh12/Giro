"""
This is necessary to replace the .jpg to .svg in the image url field
in the database for all records of the products table
"""
from models.db import getDB


db = getDB()

cur = db.cursor()

cur.execute('SELECT id, image_url FROM products')
products = dict(cur.fetchall())

print(products)
print('-----------------------------------')


for key_id, url in products.items():
  url = url.replace('.jpg', '.svg').lower()
  cur.execute('UPDATE products SET image_url = ? WHERE id = ?', (url, key_id))

db.commit()

cur.execute('SELECT id, image_url FROM products')
products = dict(cur.fetchall())
print(products)

cur.close()
db.close()
