import { useState, useContext } from "react";
import { CartContext } from "./mainPages/Homepage/cartContext";
import { WishlistContext } from "./mainPages/Homepage/wishlistContext";
import logo from "../assets/giro_logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegTimesCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  // Get the total item  function from the context
  const { getTotalItems } = useContext(CartContext);
  // Get the total item count
  const totalItems = getTotalItems();

  const { getTotalWishlistItems } = useContext(WishlistContext);
  const totalWishlistItems = getTotalWishlistItems();

  return (
    <>
      <nav id="navbar" className="navbar">
        <NavLink to="/" className="navbar-logo-container">
          <img src={logo} alt="Giro logo" className="navbar-logo" />
          <h2 className="navbar-brand">Giro</h2>
        </NavLink>
        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li className="navbar-link-item">
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li className="navbar-link-item">
              <NavLink to="/contact" className="navbar-link">
                Contact
              </NavLink>
            </li>
            <li className="navbar-link-item">
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
            </li>
            <li className="navbar-link-item">
              <NavLink to="/create-account" className="navbar-link">
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="navbar-search-container">
            <div className="navbar-search-box">
              <input
                type="text"
                className="navbar-search-input"
                placeholder="Search"
              />
              <IoMdSearch className="navbar-search-icon" />
            </div>
            <div className="navbar-icons">
              <div className="cart-container">
                <FaRegHeart
                  className="navbar-icon"
                  onClick={handleWishlistClick}
                />
                <div className="cart-quantity">
                  <p>{totalWishlistItems}</p>
                </div>
              </div>
              <div className="cart-container">
                <BsCart3 className="navbar-icon" onClick={handleCartClick} />
                <div className="cart-quantity">
                  <p>{totalItems}</p>
                </div>
              </div>

              {/* icon with dropdowns */}
              <div className="user-icon-container">
                <FaRegUser
                  className={`navbar-icon user-icon ${
                    isDropdownOpen ? "active" : ""
                  }`}
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="dropdown-content glass-bg">
                    <div className="dropdown-content-subcontainer">
                      <FaRegUser className="dropdown-icon" />
                      <Link to="/profile">Manage My Account</Link>
                    </div>
                    <div className="dropdown-content-subcontainer">
                      <LuShoppingBag className="dropdown-icon" />
                      <Link to="#more">My Order</Link>
                    </div>
                    <div className="dropdown-content-subcontainer">
                      <FaRegTimesCircle className="dropdown-icon" />
                      <Link to="#more">My Cancellations</Link>
                    </div>
                    <div className="dropdown-content-subcontainer">
                      <CiStar className="dropdown-icon" />
                      <Link to="#more">My Reviews</Link>
                    </div>
                    <div className="dropdown-content-subcontainer">
                      <TbLogout2 className="dropdown-icon" />
                      <Link to="#more">Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="nav__close" id="nav-close">
          <IoClose />
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <IoMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
