import { useState, useContext } from "react";
import { CartContext } from "./mainPages/Homepage/cartContext";
import { WishlistContext } from "./mainPages/Homepage/wishlistContext";
import logo from "../assets/giro_logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart, FaRegUser, FaRegTimesCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);
  const handleCartClick = () => navigate("/cart");
  const handleWishlistClick = () => navigate("/wishlist");

  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  const { getTotalWishlistItems } = useContext(WishlistContext);
  const totalWishlistItems = getTotalWishlistItems();

  return (
    <nav id="navbar" className="navbar">
      <NavLink to="/" className="navbar-logo-container">
        <img src={logo} alt="Giro logo" className="navbar-logo" />
        <h2 className="navbar-brand">Giro</h2>
      </NavLink>

      {/* Mobile Menu Toggle */}
      <div className="nav-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Main Links */}
      <div className={`navbar-links-container ${isMenuOpen ? "show" : ""}`}>
        <ul className="navbar-links">
          <li className="link-items">
            <NavLink to="/" className="navbar-link" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="link-items">
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
          <li className="link-items">
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          <li className="link-items">
            <NavLink
              to="/create-account"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Search and Icons */}
      <div className="navbar-actions">
        <div className="navbar-search-box">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search"
          />
          <IoMdSearch className="navbar-search-icon" />
        </div>

        {/* Wishlist and Cart */}
        <div className="navbar-icons">
          <div className="cart-container">
            <FaRegHeart className="navbar-icon" onClick={handleWishlistClick} />
            <div className="cart-quantity">{totalWishlistItems}</div>
          </div>
          <div className="cart-container">
            <BsCart3 className="navbar-icon" onClick={handleCartClick} />
            <div className="cart-quantity">{totalItems}</div>
          </div>

          {/* User icon with dropdown */}
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
                  <Link to="/logout">Log Out</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
