import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import Loader from "../loader";
import { AiOutlineHeart } from "react-icons/ai";
import { CartContext } from "./Homepage/cartContext";
import { WishlistContext } from "./Homepage/wishlistContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const { addToCart, removeFromCart } = useContext(CartContext); // Get the addToCart function from the context
  const { addToWishlist } = useContext(WishlistContext); // Get the addToWishlist function from the context

  // Fetch product details from API
  const fetchProduct = async (id) => {
    try {
      const response = await fetch(
        `https://giro-fz5q.onrender.com/products/${id}`
      );
      const data = await response.json(); // Parse the JSON data
      console.log(data.data);

      // Set the product data
      setProduct(data.data.product);
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  // Fetch product data when the component mounts or when 'id' changes
  useEffect(() => {
    fetchProduct(id); // Pass the product ID to fetchProduct
  }, [id]);

  // Display loading state
  if (loading) {
    return <Loader />; // Show the loader component
  }

  // Display message if product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Render the product details
  return (
    <>
      <Top />
      <Navbar />
      <div>
        {/* breadcrumb link */}
        <span>
          <a href="">Home</a> / <a href={"/product/" + product.id}>Product</a>
        </span>
        {/* product detail section */}
        <div>
          {/* product image div */}
          <div>
            <img src={`/products/${product.image_url}`} alt={product.name} />
            <img src={`/products/${product.image_url}`} alt={product.name} />
            <img src={`/products/${product.image_url}`} alt={product.name} />
            <img src={`/products/${product.image_url}`} alt={product.name} />
          </div>
          {/* product details and price div */}
          <div>
            <h1>{product.name}</h1>
            <span>
              <p>{product.rating}</p> | <p>{product.stock}</p>
            </span>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
          {/* checkout and delivery div */}
          <div>
            <div>
              <div>
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
              <button>Buy Now</button>
              <div>
                <AiOutlineHeart
                  className="flashsales-icon"
                  onClick={() => addToWishlist(product)}
                />
              </div>
            </div>
            <div>
              <div>
                <p>Delivery</p>
                <span>
                  <p>Free delivery</p>
                  <p>Enter your postal code for Delivery Avaliablity</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* related items section */}
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
