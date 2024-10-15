import { useContext } from "react";
import { WishlistContext } from "./Homepage/wishlistContext";
import { CartContext } from "./Homepage/cartContext";
import { BsTrash3 } from "react-icons/bs";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/homepage.css";
import "../../styles/wishlist.css";

const WishList = () => {
  const { wishlistItems, removeFromWishlist, getTotalWishlistItems } =
    useContext(WishlistContext);

  const { addToCart } = useContext(CartContext); // Get the addToCart function from the context

  return (
    <>
      <Top />
      <Navbar />
      {/* wishlist main container */}
      <div>
        {/* wishlist */}
        <section>
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
                    {/* {item.name} */}
                    {/* <img src={`/products/${item.image_url}`} alt="" /> */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        {/* just for you section */}
        <section>
          <div></div>
          <div></div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
