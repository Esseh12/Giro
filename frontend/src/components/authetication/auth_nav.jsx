import { NavLink } from "react-router-dom";
import giro_logo from "../../assets/giro_logo.png";
import { CiSearch } from "react-icons/ci";
import "../../styles/authNav.css";

const AuthNavbar = () => {
  return (
    <>
      <nav id="auth-navbar">
        <NavLink to="/" className="auth-navbar__logo-container">
          <img src={giro_logo} alt="Giro logo" className="auth-navbar__logo" />
          <h2 className="auth-navbar__title">Giro</h2>
        </NavLink>

        <div className="menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className="auth-navbar__menu">
          <li className="auth-navbar__menu-item">
            <NavLink to="/" className="auth-navbar__link">
              Home
            </NavLink>
          </li>
          <li className="auth-navbar__menu-item">
            <NavLink to="/contact" className="auth-navbar__link">
              Contact
            </NavLink>
          </li>
          <li className="auth-navbar__menu-item">
            <NavLink to="/about" className="auth-navbar__link">
              About
            </NavLink>
          </li>
          <li className="auth-navbar__menu-item">
            <NavLink to="/create-account" className="auth-navbar__link">
              Sign Up
            </NavLink>
          </li>
        </ul>

        <div className="auth-navbar__search">
          <input
            type="text"
            placeholder="Search here....."
            className="auth-navbar__search-input"
          />
          <CiSearch className="search_icon" />
        </div>
      </nav>

      <div className="menu-container"></div>
    </>
  );
};

export default AuthNavbar;
