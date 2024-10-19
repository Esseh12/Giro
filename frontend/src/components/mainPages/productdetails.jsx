import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/productDetail.css";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import Loader from "../loader";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { CartContext } from "./Homepage/cartContext";
import { WishlistContext } from "./Homepage/wishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(
        `https://giro-fz5q.onrender.com/products/${id}`
      );
      const data = await response.json();
      console.log(data.data);

      setProduct(data.data.product);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Top />
      <Navbar />
      <div className="product-details-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>
            <a href="/">Home</a> /{" "}
            <a href={"/product/" + product.id}>Product</a>
          </span>
        </div>

        {/* Product Detail Section */}
        <div className="product-section">
          {/* Product Image Section */}
          <div className="product-image-gallery">
            <div className="product-image">
              <img
                src={`/products/${product.image_url}`}
                alt={product.name}
                className="product-image1"
              />
            </div>
            <div className="product-image">
              <img
                src={`/products/${product.image_url}`}
                alt={product.name}
                className="product-image2"
              />
            </div>
            <div className="product-image">
              <img
                src={`/products/${product.image_url}`}
                alt={product.name}
                className="product-image3"
              />
            </div>
            <div className="product-image image-4">
              <img
                src={`/products/${product.image_url}`}
                alt={product.name}
                className="product-image4"
              />
            </div>
          </div>

          {/* Product Details and Price Section */}
          <div className="product-info">
            <div className="product-info-subsection">
              <h1 className="product-name">{product.name}</h1>
              <div className="product-meta">
                <p className="product-rating">
                  {Array(product.rating)
                    .fill("⭐")
                    .map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                </p>{" "}
                |<p className="product-stock">Stock ({product.stock})</p>
              </div>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>

            {/* Checkout and Delivery Section */}
            <div className="product-checkout">
              <div className="product-checkout-subsection">
                <div className="product-quantity-control">
                  <button
                    className="quantity-button"
                    onClick={() => removeFromCart(product)}
                    disabled
                  >
                    -
                  </button>
                  <span className="product-quantity">0</span>
                  <button
                    className="quantity-button"
                    onClick={() => addToCart(product)}
                    disabled
                  >
                    +
                  </button>
                </div>
                <button
                  className="buy-now-button"
                  onClick={() => addToCart(product)}
                >
                  Buy Now
                </button>
                <div className="wishlist-icon">
                  <AiOutlineHeart
                    className="flashsales-icon"
                    onClick={() => addToWishlist(product)}
                  />
                </div>
              </div>

              <div className="delivery-info">
                <div className="delivery-item">
                  <FaTruckFast className="delivery-icon" />
                  <span className="delivery-details">
                    <p>Free delivery</p>
                    <p>Enter your postal code for Delivery Availability</p>
                  </span>
                </div>
                <div className="return-policy">
                  <TfiReload className="return-icon" />
                  <span className="return-details">
                    <p>Return Delivery</p>
                    <p>Free 30 Days Delivery Returns.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        <div className="related-items">
          {/* You can add related products here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
