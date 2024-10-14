import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Homepage/cartContext";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/cart.css";
import emptyCart from "../../assets/emptyCartIllustration.webp";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="cart-main-container">
        <span className="navigation-link">
          <a href="/">Home</a> / <a href="">Cart</a>
        </span>

        {/* Only display the cart content if there are items */}
        {cartItems.length > 0 ? (
          <div className="cart-items-container">
            <div className="cart-sub-container">
              <p className="cart-header-text">Product</p>
              <p className="cart-header-text price-text">Price</p>
              <p className="cart-header-text">Quantity</p>
              <p className="cart-header-text">Subtotal</p>
            </div>
            {cartItems.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="cart-img-container">
                  <img
                    src={`/products/${item.image_url}`}
                    alt={item.name}
                    className="cart-img"
                  />
                  <p className="cart-item-name">{item.name}</p>
                </div>
                <div>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="cart-items-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
                <div>
                  <p>${item.totalPrice}</p>
                </div>
              </div>
            ))}
            <div className="reset-cart-container">
              <button
                className="return-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Return To Shop
              </button>
              <button
                className="clear-cart-btn"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
            </div>
            <div className="total-items-maincontainer">
              <div className="total-items-container">
                <h4>Cart Total</h4>
                <span className="total-items-subcontainer">
                  <p className="total-items">Subtotal:</p>
                  <p className="total-items">${getCartTotal()}</p>
                </span>
                <span className="total-items-subcontainer">
                  <p className="total-items">Shipping: </p>
                  <p className="total-items">Free</p>
                </span>
                <span className="total-items-subcontainer last-container">
                  <p className="total-items">Total:</p>
                  <p className="total-items">${getCartTotal()}</p>
                </span>
                <div className="checkout-btn-container">
                  <button
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-container">
            <div className="empty-cart-subcontainer">
              <img
                src={emptyCart}
                alt="Empty Cart"
                className="empty-cart-img"
              />
              <p>Your Cart is Empty</p>
            </div>
            <button
              className="empty-cart-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Add items to cart
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
