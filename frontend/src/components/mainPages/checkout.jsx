import "../../styles/cart.css";
import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "./Homepage/cartContext";
import { useNavigate } from "react-router-dom";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import Modal from "./Homepage/modalPopup";
import visaIcon from "../../assets/Visa.svg";
import verveIcon from "../../assets/verve-icon.png";
import masterCardIcon from "../../assets/masterCard.svg";
import paypalIcon from "../../assets/paypal-icon.webp";

const Checkout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(""); // Message inside modal
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  // Retrieve email from localStorage
  const savedEmail = localStorage.getItem("userEmail"); // Replace "userEmail" with the key you used to store the email

  // Prepare the data to send, including cartItems and the saved email
  const checkoutData = {
    cartItems, // cartItems is already an array of items
    email: savedEmail, // Adding the saved email to the checkout data
  };

  const handleCheckout = () => {
    axios
      .post("https://giro-fz5q.onrender.com//checkout", checkoutData)
      .then((response) => {
        if (response.status === 201) {
          setModalMessage(
            "Your order has been placed successfully! \n Thanks for shopping with Giro💜🎉"
          );
          setIsModalOpen(true); // Open modal

          setTimeout(() => {
            navigate("/");
          }, 4500);
          clearCart();
        }
      })
      .catch((error) => {
        console.log(error);
        setModalMessage(
          "There was an error placing your order. Please try again."
        );
        setIsModalOpen(true); // Open modal with error message
      });
  };

  return (
    <>
      <Top />
      <Navbar />
      <div className="checkout-container">
        <span className="navigation-link">
          <a href="/">Home</a> / <a href="/cart">Cart</a> /
          <a href="/checkout">Checkout</a>
        </span>
        <div className="checkout-section">
          {/* billing details section */}
          <div className="billing-details">
            <h2 className="billing-header">Billing Details</h2>
            <form className="billing-form">
              {/* firstname */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="firstname">First name</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  className="checkout-input-field"
                />
              </div>
              {/* lastname */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="lastname">Last name</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="checkout-input-field"
                />
              </div>
              {/* street address */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="address">Street Address</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="checkout-input-field"
                />
              </div>
              {/* apartment */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="apartment">
                    Apartment, floor, etc (optional)
                  </label>
                </span>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="checkout-input-field"
                />
              </div>
              {/* town/city */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="town">Town/City</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="checkout-input-field"
                />
              </div>
              {/* phone number */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="phone_number">Phone Number</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  className="checkout-input-field"
                />
              </div>
              {/* email */}
              <div className="checkout-form-group">
                <span className="input-label">
                  <label htmlFor="email">Email Address</label>
                  <p className="required-marker">*</p>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="checkout-input-field"
                />
              </div>

              {/* save information section */}
              <div className="save-info">
                <input type="checkbox" name="save_info" className="checkbox" />
                <p className="save-info-text">
                  Save this information for faster check-out next time
                </p>
              </div>
            </form>
          </div>
          {/* place order section */}
          <div className="order-section">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id}>
                  <div className="order-items">
                    <div className="order-img-container">
                      <img
                        src={`/products/${item.image_url}`}
                        alt={item.name}
                        className="order-img"
                      />
                      <p className="order-item-name">{item.name}</p>
                    </div>
                    <p className="order-item-subtotal">
                      Subtotal: ${item.totalPrice}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>Your cart is empty</div>
            )}
            <div className="order-details">
              <span className="order-item-price">
                Subtotal: <p>${getCartTotal()}</p>
              </span>
              <span className="order-item-delivery">
                Shipping: <p>Free</p>
              </span>
              <span className="order-item-totalPrice">
                Total: <p>${getCartTotal()} </p>
              </span>

              {/* payment method div */}
              <div className="payment-method">
                <span className="payment-option">
                  <input
                    type="radio"
                    name="bank"
                    id="bank"
                    className="payment-checkbox"
                  />
                  <p className="payment-label">Bank</p>
                </span>
                <div className="payment-icons">
                  <img
                    src={visaIcon}
                    alt="Visa Payment Icon"
                    className="payment-icon"
                  />
                  <img
                    src={verveIcon}
                    alt="Verve Icon"
                    className="payment-icon verve-icon"
                  />
                  <img
                    src={masterCardIcon}
                    alt="Master Card Icon"
                    className="payment-icon"
                  />
                  <img
                    src={paypalIcon}
                    alt="Paypal Payment Icon"
                    className="payment-icon paypal-icon"
                  />
                </div>
              </div>

              <div>
                <input type="checkbox" name="delivery payment" />
                <label htmlFor="delivery payment">Cash on delivery</label>
              </div>
            </div>
            <button className="place-order-btn" onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal Popup */}
      {isModalOpen && (
        <Modal trigger={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="modal-content">
            <p>{modalMessage}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
