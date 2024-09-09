-- CREATE TABLES

-- DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(255),
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    password VARCHAR NOT NULL,
    address TEXT
);

/*
    cur.execute("SELECT id, name, price, discount, rating, image_url FROM products WHERE discount != null;")
    flash_sales_products = cur.fetchall()

    # get best selling products
    cur.execute("SELECT products.id, products.name, products.price, products.discount, products.rating, products.image_url FROM products JOIN sales ON sales.product_id = products.id;")
    best_selling_products = cur.fetchall()

    # get all products
    cur.execute("SELECT id, name, price, rating, image_url, newly_added FROM products;")
    all_products = cur.fetchall()
    */
-- PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products(
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price FLOAT DEFAULT 0,
    discount INTEGER,
    rating INTEGER CHECK(rating IN (1, 2, 3, 4, 5)),
    image_url VARCHAR(50),
    is_new BOOLEAN DEFAULT 0,
    category_name VARCHAR(36),
    stock INTEGER,
    description TEXT
);

-- CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories(
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    image_url VARCHAR(50)
);

-- SALES TABLE
CREATE TABLE IF NOT EXISTS sales(
    id VARCHAR(36) PRIMARY KEY,
    amount FLOAT,
    product_id VARCHAR(36),
    FOREIGN KEY (product_id) REFERENCES products(id)
)
