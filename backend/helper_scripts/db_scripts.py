"""
This is necessary to replace the .jpg to .svg in the image url field
in the database for all records of the products table
"""
from models.db import getDB
import random


db = getDB()
cur = db.cursor()
def rename_url_ext():
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


def fill_stock():
    cur.execute('SELECT id FROM products;')

    objs = cur.fetchall()

    ids = [i['id'] for i in objs]
    print(ids)

    for i in ids:
        stock = random.randint(10,50)
        cur.execute('UPDATE products SET stock = ? WHERE id = ?;', (stock, i,))
    db.commit()
    print('done')

# fill_stock()

def update_discription():    
    product_descriptions = {
        'Breed Dry Dog Food': 'Breed Dry Dog Food is a premium kibble formulated to meet the specific nutritional needs of various dog breeds. With high-quality proteins, essential vitamins, and minerals, it promotes optimal health, energy, and a shiny coat tailored to your dog’s unique requirements.',
        
        'CANON EOS DSLR Camera': 'The CANON EOS DSLR Camera is a high-performance digital camera designed for photography enthusiasts. It features advanced imaging technology, allowing you to capture stunning photos and videos with clarity and detail, making it perfect for both beginners and professionals.',
        
        'ASUS FHD Gaming Laptop': 'The ASUS FHD Gaming Laptop is a powerful device equipped with a full HD display and high-performance graphics. Engineered for gamers, it delivers smooth gameplay and immersive visuals, making it ideal for intense gaming sessions and multimedia tasks.',
        
        'Curology Product Set': 'The Curology Product Set offers a personalized skincare solution tailored to your individual skin concerns. This comprehensive set includes targeted treatments and moisturizers designed to help achieve clear, healthy skin, making it a great choice for those seeking effective skincare.',
        
        'Kids Electric Car': 'The Kids Electric Car is a fun and safe ride-on toy designed for young children. With easy-to-use controls and realistic features, it provides an exciting driving experience while promoting imaginative play and outdoor activity.',
        
        'Jr. Zoom Soccer Cleats': 'Jr. Zoom Soccer Cleats are lightweight and comfortable footwear designed specifically for young athletes. Engineered for optimal performance on the field, these cleats provide excellent traction and support, helping kids excel in their game.',
        
        'GP11 Shooter USB Gamepad': 'The GP11 Shooter USB Gamepad offers an ergonomic design for an enhanced gaming experience. Compatible with multiple platforms, it provides precise controls and a comfortable grip, making it ideal for gamers who seek both performance and comfort.',
        
        'Quilted Satin Jacket': 'The Quilted Satin Jacket combines style and warmth with its luxurious satin fabric and quilted design. Perfect for layering, this jacket provides a fashionable look while ensuring comfort during cooler weather.',
        
        'The north coat': 'The North Coat is a durable and insulated outerwear option designed to protect against extreme weather conditions. With its quality materials and functional design, it’s perfect for outdoor adventures and everyday wear in cold climates.',
        
        'Gucci duffle bag': 'The Gucci Duffle Bag is a luxurious accessory featuring the iconic Gucci design and premium craftsmanship. Spacious and stylish, it’s perfect for travel or as a statement piece for everyday use.',
        
        'RGB liquid CPU Cooler': 'The RGB Liquid CPU Cooler is an efficient cooling solution that enhances your gaming rig’s performance. With customizable RGB lighting, it not only keeps your system cool but also adds a stylish aesthetic to your setup.',
        
        'Small BookShelf': 'The Small Bookshelf is a compact and functional storage solution perfect for organizing books and decorative items. Its stylish design fits seamlessly into smaller spaces, making it ideal for apartments or cozy nooks.',
        
        'HAVIT HV-G92 Gamepad': 'The HAVIT HV-G92 Gamepad is a versatile controller compatible with various gaming platforms. It features responsive buttons and an ergonomic design, ensuring a comfortable and enjoyable gaming experience for hours on end.',
        
        'AK-900 Wired Keyboard': 'The AK-900 Wired Keyboard is a sleek and responsive typing tool designed for efficiency. With customizable keys and a modern design, it’s perfect for gamers and professionals alike who seek precision and style.',
        
        'IPS LCD Gaming Monitor': 'The IPS LCD Gaming Monitor delivers high-definition visuals with vibrant colors and wide viewing angles, enhancing your gaming experience. Designed for serious gamers, it ensures every detail is captured, bringing your games to life.',
        
        'S-Series Comfort Chair': 'The S-Series Comfort Chair features an ergonomic design that provides excellent support and comfort. Ideal for long hours of sitting, this chair combines functionality with style, making it a great addition to any workspace or gaming setup.'
    }
    for k, v in product_descriptions.items():
        cur.execute('UPDATE products SET description = ? WHERE name = ?;', (v, k,))
    
    db.commit()
    print('done')

# update_discription()


cur.close()
db.close()
