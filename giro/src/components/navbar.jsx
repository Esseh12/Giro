import logo from "../assets/giro_logo.png";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";

const Navbar = () => {
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
              <NavLink to="/signup" className="navbar-link">
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
            <LuUserCircle2 className="navbar-icon" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
