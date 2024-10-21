import "../styles/footer.css";
import { Link } from "react-router-dom";
import { BiSolidPaperPlane } from "react-icons/bi";
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import qr_code from "../assets/Qr_code.png";
import app_store_badge from "../assets/apple-store-badge.png";
import google_store_badge from "../assets/google-store-badge.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first_footer_section">
        <div className="footer_sub_section">
          <div className="footer__section footer__section--subscribe">
            <h1 className="footer__title">Giro</h1>
            <h2 className="footer__subtitle">Subscribe</h2>
            <p className="footer__description">Get 10% off your first order</p>
            <div className="footer__input-group">
              <input
                type="email"
                placeholder="Enter your email"
                aria-placeholder="Enter your email"
                className="footer__input"
                name="email"
                autoComplete="email"
              />
              <BiSolidPaperPlane className="footer__icon footer__icon--plane" />
            </div>
          </div>

          {/* Second div - Support Section */}
          <div className="footer__section footer__section--support">
            <h1 className="footer__title">Support</h1>
            <p className="footer__address">
              111 Funsho William Avenue, <br />
              Off Iponri Lagos, Nigeria
            </p>
            <p className="footer__email">Giro@gmail.com</p>
            <p className="footer__phone">+888015-888888-9999</p>
          </div>
        </div>

        <div className="footer_sub_section second_section">
          {/* Third div - Account Section */}
          <div className="footer__section footer__section--account">
            <h1 className="footer__title">Account</h1>
            <p>
              <Link to="#more" className="footer__link">
                My Account
              </Link>
            </p>
            <p>
              <Link to="#more" className="footer__link">
                Login / Register
              </Link>
            </p>
            <p>
              <Link to="#more" className="footer__link">
                Cart
              </Link>
            </p>
            <p>
              <Link to="#more" className="footer__link">
                Wishlist
              </Link>
            </p>
            <p>
              <Link to="#more" className="footer__link">
                Shop
              </Link>
            </p>
          </div>

          {/* Fourth div - Quick Links Section */}
          <div className="footer__section footer__section--quick-links">
            <h1 className="footer__title">Quick Links</h1>
            <p className="footer__link">Privacy Policy</p>
            <p className="footer__link">Terms Of Use</p>
            <p className="footer__link">FAQ</p>
            <p className="footer__link">Contact</p>
          </div>
        </div>

        {/* Fifth div - Download App Section */}
        <div className="footer__section footer__section--download-app">
          <h1 className="footer__title">Download App</h1>
          <p className="footer__description">
            Save $3 with App, <br />
            New User Only
          </p>
          <div className="app_download">
            <div className="qr_code_container">
              <img
                src={qr_code}
                alt="qr code to download app"
                className="qr_code_img"
              />
            </div>
            <div className="footer_badge_container">
              <Link to="more">
                <img
                  src={google_store_badge}
                  alt="Google Play Store"
                  className="footer__badge google_badge"
                ></img>
              </Link>
              <Link to="more">
                <img
                  src={app_store_badge}
                  alt="Apple Store"
                  className="footer__badge apple_badge"
                />
              </Link>
            </div>
          </div>
          <div className="footer__social-icons">
            <RiFacebookLine className="footer__icon" />
            <FiTwitter className="footer__icon" />
            <FaInstagram className="footer__icon" />
            <FaLinkedinIn className="footer__icon" />
          </div>
        </div>
      </div>

      <div className="footer_copy_right">
        <p>&copy; Copyright Giro 2024, All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
