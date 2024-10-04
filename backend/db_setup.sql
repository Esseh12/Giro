-- CREATE TABLES

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(255),
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    password VARCHAR NOT NULL,
    address TEXT
);

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
