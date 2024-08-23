import giro_logo from "../../assets/giro_logo.png";
import { CiSearch } from "react-icons/ci";

function AuthNavbar() {
  return (
    <div className="auth-navbar">
      <div className="auth-navbar__logo-container">
        <img src={giro_logo} alt="Giro logo" className="auth-navbar__logo" />
        <h2 className="auth-navbar__title">Giro</h2>
      </div>
      <ul className="auth-navbar__menu">
        <li className="auth-navbar__menu-item">
          <a href="#home" className="auth-navbar__link">
            Home
          </a>
        </li>
        <li className="auth-navbar__menu-item">
          <a href="#contact" className="auth-navbar__link">
            Contact
          </a>
        </li>
        <li className="auth-navbar__menu-item">
          <a href="#about" className="auth-navbar__link">
            About
          </a>
        </li>
        <li className="auth-navbar__menu-item">
          <a href="#signup" className="auth-navbar__link">
            Sign Up
          </a>
        </li>
      </ul>
      <div className="auth-navbar__search">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="auth-navbar__search-input"
        />
        <CiSearch />
      </div>
    </div>
  );
}

export default AuthNavbar;
