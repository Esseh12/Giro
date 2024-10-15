import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { WishlistContext } from "./Homepage/wishlistContext";
import { CartContext } from "./Homepage/cartContext";
import { BsTrash3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import axios from "axios";
import "../../styles/homepage.css";
import "../../styles/wishlist.css";

const WishList = () => {
  const { wishlistItems, removeFromWishlist, getTotalWishlistItems } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); // Get the addToCart function from the context
  const [forYouItems, setForYouItems] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    axios
      .get("https://giro-fz5q.onrender.com/")
      .then((response) => {
        if (Array.isArray(response.data.data.all_products)) {
          setForYouItems(response.data.data.all_products);
        } else {
          console.error(
            "Unexpected flash_sales format:",
            response.data.data.all_products
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching for you data:", error);
      });
  }, []);

  return (
    <>
      <Top />
      <Navbar />
      {/* wishlist main container */}
      <div className="wishlist-main-section">
        {/* wishlist */}
        <section className="wishlist-top-section">
          <div>
            <p>Wishlist ({getTotalWishlistItems()})</p>
            <button>Move All To Cart</button>
          </div>
          <div>
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              <ul className="wishlist-items">
                {wishlistItems.map((item) => (
                  <li key={item.id}>
                    <div className="flashsales-single-image wishlist-single-image">
                      <img
                        src={`/products/${item.image_url}`}
                        alt={item.name}
                        className="wishlist-img"
                      />
                      <div className="flashsales-icon-container wishlist-icon-container">
                        <div className="flashsales-icon-background wishlist-icon-background">
                          <BsTrash3
                            onClick={() => removeFromWishlist(item.id)}
                            className="flashsales-icon wishlist-icon"
                          />
                        </div>
                      </div>
                      <div className="flashsales-cart-option">
                        <p
                          className="flashsales-cart-option-text"
                          onClick={() => addToCart(item)}
                        >
                          Add To Cart
                        </p>
                      </div>
                    </div>
                    <div className="wishlist-details">
                      <h4 className="flashsale-product-name">{item.name}</h4>
                      <p className="discounted-price">${item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        {/* just for you section */}
        <section className="wishlist-bottom-section">
          <div className="homepage-header wishlist-featurd-header">
            <div className="wishlist-title-container">
              <div className="homepage-red-icon"></div>
              {/* Add an icon or visual indicator */}
              <p className="homepage-title">Just For You</p>
            </div>
            <button onClick={() => navigate("/")} className="load-more-button">
              Load More
            </button>
          </div>
          <div>
            <ul className="all-product-items-container">
              {forYouItems.length > 0 ? (
                forYouItems.slice(0, 4).map(
                  (
                    item // Show only 4 items
                  ) => (
                    <li key={item.id} className="flashsales-subcontainer-item">
                      <div className="flashsales-single-image">
                        <img
                          src={`/products/${item.image_url}`}
                          alt={item.name}
                        />
                        <div className="flashsales-icon-container">
                          <div className="flashsales-icon-background">
                            <FiEye className="flashsales-icon" />
                          </div>
                        </div>
                        <div className="flashsales-cart-option">
                          <p
                            className="flashsales-cart-option-text"
                            onClick={() => addToCart(item)}
                          >
                            Add To Cart
                          </p>
                        </div>
                      </div>
                      <h2 className="flashsale-product-name">{item.name}</h2>
                      <div className="price-container">
                        <p className="discounted-price">${item.price}</p>
                        <p>
                          {Array(item.rating)
                            .fill("⭐")
                            .map((star, index) => (
                              <span key={index}>{star}</span>
                            ))}
                        </p>
                      </div>
                    </li>
                  )
                )
              ) : (
                <p>No items available at the moment.</p>
              )}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
