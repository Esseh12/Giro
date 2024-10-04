import { useState } from "react";
import logo from "../assets/giro_logo.png";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegTimesCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav id="navbar" className="navbar">
        <NavLink to="/home" className="navbar-logo-container">
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
        </div>
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
            <FaRegHeart className="navbar-icon" />
            <BsCart3 className="navbar-icon" />

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
                    <FaRegUser classname="dropdown-icon" />
                    <a href="#more">Manage My Account</a>
                  </div>
                  <div className="dropdown-content-subcontainer">
                    <LuShoppingBag classname="dropdown-icon" />
                    <a href="#more">My Order</a>
                  </div>
                  <div className="dropdown-content-subcontainer">
                    <FaRegTimesCircle classname="dropdown-icon" />
                    <a href="#more">My Cancellations</a>
                  </div>
                  <div className="dropdown-content-subcontainer">
                    <CiStar classname="dropdown-icon" />
                    <a href="#more">My Reviews</a>
                  </div>
                  <div className="dropdown-content-subcontainer">
                    <TbLogout2 classname="dropdown-icon" />
                    <a href="#more">Logout</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
