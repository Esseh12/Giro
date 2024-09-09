from api.app import get_db
from uuid import uuid4


# create categories
"""
categories = [
    'phones', 'computers', 'smartwatch', 'camera',
    'headphones', 'gaming', 'furniture', 'fashion',
    'pets', 'health & beauty'
]

db = get_db()
cur =  db.cursor()

for i in categories:    
    id = str(uuid4())
    url = i + '.jpg'
    cur.execute(f"INSERT INTO categories (id, name, image_url) VALUES ('{id}', '{i}', '{url}');")
    
db.commit()
cur.close()
db.close()

"""

# insert into products

# products = [
#     {
#         'name': 'Breed Dry Dog Food',
#         'price': 100,
#         'discount': None,
#         'rating': 3,
#         'image_url':'Dry Dog Food.jpg',
#         'is_new': 0,
#         'category': 'pets'
#     },
#     {
#         'name': 'CANON EOS DSLR Camera',
#         'price': 360,
#         'discount': None,
#         'rating': 4,
#         'image_url':'CANONDSLRCamera.jpg',
#         'is_new': 0,
#         'category': 'camera'
#     },
#     {
#         'name': 'ASUS FHD Gaming Laptop',
#         'price': 700,
#         'discount': None,
#         'rating': 5,
#         'image_url':'GamingLaptop.jpg',
#         'is_new': 0,
#         'category': 'computer'
#     },
#     {
#         'name': 'Curology Product Set',
#         'price': 500,
#         'discount': None,
#         'rating': 4,
#         'image_url':'CurologyProductSet.jpg',
#         'is_new': 0,
#         'category': 'health & beauty'
#     },
#     {
#         'name': 'Kids Electric Car',
#         'price': 960,
#         'discount': None,
#         'rating': 5,
#         'image_url':'KidsElectricCar.jpg',
#         'is_new': 1,
#         'category': "baby's & toys"
#     },
#     {
#         'name': 'Jr. Zoom Soccer Cleats',
#         'price': 1160,
#         'discount': None,
#         'rating': 5,
#         'image_url':'ZoomSoccerCleats.jpg',
#         'is_new': 0,
#         'category': "sports & outdoor"
#     },
#     {
#         'name': 'GP11 Shooter USB Gamepad',
#         'price': 660,
#         'discount': None,
#         'rating': 4,
#         'image_url':'GP11ShooterUSBGamepad.jpg',
#         'is_new': 1,
#         'category': "gaming"
#     },
#     {
#         'name': 'Quilted Satin Jacket',
#         'price': 660,
#         'discount': None,
#         'rating': 5,
#         'image_url':'QuiltedSatinJacket.jpg',
#         'is_new': 0,
#         'category': "gaming"
#     },
#     {
#         'name': 'The north coat',
#         'price': 260,
#         'discount': 30,
#         'rating': 5,
#         'image_url':'northcoat.jpg',
#         'is_new': 0,
#         'category': "fashion"
#     },
#     {
#         'name': 'Gucci duffle bag',
#         'price': 960,
#         'discount': 20,
#         'rating': 4,
#         'image_url':'Guccidufflebag.jpg',
#         'is_new': 0,
#         'category': "fashion"
#     },
#     {
#         'name': 'RGB liquid CPU Cooler',
#         'price': 160,
#         'discount': 10,
#         'rating': 4,
#         'image_url':'RGBliquidCPUCooler.jpg',
#         'is_new': 0,
#         'category': "electronics"
#     },
#     {
#         'name': 'Small BookSelf',
#         'price': 360,
#         'discount': None,
#         'rating': 5,
#         'image_url':'SmallBookSelf.jpg',
#         'is_new': 0,
#         'category': "furniture"
#     },
#     {
#         'name': 'HAVIT HV-G92 Gamepad',
#         'price': 120,
#         'discount': 40,
#         'rating': 5,
#         'image_url':'HAVITHV-G92Gamepad.jpg',
#         'is_new': 0,
#         'category': "gaming"
#     },
#     {
#         'name': 'AK-900 Wired Keyboard',
#         'price': 960,
#         'discount': 35,
#         'rating': 4,
#         'image_url':'AK900WiredKeyboard.jpg',
#         'is_new': 0,
#         'category': "computer"
#     },
#     {
#         'name': 'IPS LCD Gaming Monitor',
#         'price': 370,
#         'discount': 30,
#         'rating': 5,
#         'image_url':'IPSLCDGamingMonitor.jpg',
#         'is_new': 0,
#         'category': "gaming"
#     },
#     {
#         'name': 'S-Series Comfort Chair',
#         'price': 375,
#         'discount': 25,
#         'rating': 4,
#         'image_url':'S-SeriesComfortChair.jpg',
#         'is_new': 0,
#         'category': "furniture"
#     }
# ]

# db = get_db()
# cur =  db.cursor()

# for i in products:    
#     id = str(uuid4())
#     cur.execute("""
#         INSERT INTO products (id, name, price, discount, rating, image_url, is_new, category_name)
#         VALUES (?, ?, ?, ?, ?, ?, ?, ?);""",
#         (id, i['name'], i['price'], i['discount'], i['rating'], i['image_url'], i['is_new'], i['category'])
#     )
# db.commit()
# cur.close()
# db.close()

# INSERT INTO SALES


# id VARCHAR(36) PRIMARY KEY,
#     amount FLOAT,
#     product_id VARCHAR(36),
#     FOREIGN KEY (product_id) REFERENCES products(id)

sales = [
    {'amount': 3, 'product_id': '0c3c3259-ac32-44da-b59f-2715574e756c'},
    {'amount': 2, 'product_id': '09395d81-71dd-44b0-9587-2c2513ce18ac'},
    {'amount': 5, 'product_id': 'be81049d-df3b-4e10-bf68-f27caa5ef1c0'},
    {'amount': 3, 'product_id': 'ebc165c9-31d7-487e-b35e-afe491a59acd'},
    {'amount': 4, 'product_id': '1d098074-e88f-43cb-8c42-724775619e92'}
]

db = get_db()
cur =  db.cursor()

for i in sales:    
    id = str(uuid4())
    cur.execute("""INSERT INTO sales (id, amount, product_id) VALUES (?, ?, ?);""", (id, i['amount'], i['product_id']))
db.commit()
cur.close()
db.close()
