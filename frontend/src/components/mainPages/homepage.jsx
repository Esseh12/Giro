import "../../styles/homepage.css";
import { Link } from "react-router-dom";
import Top from "../top";
import Navbar from "../navbar";
import Stats from "../stats";
import Footer from "../footer";
import IphoneImge from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.svg";
import appleLogo from "../../assets/1200px-Apple_gray_logo 1.svg";
import { IoMdArrowForward } from "react-icons/io";
import playStationImg from "../../assets/ps5-slim-goedkope-playstation_large 1.svg";
import womanInHat from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.svg";
import gucciIntense from "../../assets/Frame 706.svg";
import amazonSpeaker from "../../assets/Frame 707.svg";

const Homepage = () => {
  return (
    <>
      <Top />
      <Navbar />
      {/* homepage styling starts here */}
      <div className="homepage-container">
        {/* top of homepage */}
        <section className="promo-section">
          <div className="category-links">
            <Link to="/women" className="category-link first-category-link">
              Women's Fashion
            </Link>
            <Link to="/men" className="category-link">
              Men's Fashion
            </Link>
            <Link to="/electronics" className="category-link">
              Electronics
            </Link>
            <Link to="/lifestyle" className="category-link">
              Home & Lifestyle
            </Link>
            <Link to="/medicine" className="category-link">
              Medicine
            </Link>
            <Link to="/sports" className="category-link">
              Sports & Outdoor
            </Link>
            <Link to="/baby" className="category-link">
              Baby's & Toys
            </Link>
            <Link to="/groceries" className="category-link">
              Groceries & Pets
            </Link>
            <Link to="/health" className="category-link">
              Health & Beauty
            </Link>
          </div>

          <div className="promo-content">
            <div className="promo-details">
              <div className="promo-product-info">
                <img
                  src={appleLogo}
                  alt="apple logo"
                  className="promo-product-image"
                />
                <p className="promo-product-name">iPhone 14 Series</p>
              </div>
              <h3 className="promo-discount">
                Up to 10% <br />
                off Voucher
              </h3>
              <div className="promo-shop-button">
                <Link to="#shop" className="shop-now-link">
                  Shop Now
                </Link>
                <IoMdArrowForward />
              </div>
            </div>
            <div className="promo-image-container">
              <img
                src={IphoneImge}
                alt="iphone Img"
                className="promo-large-image"
              />
            </div>
          </div>
        </section>

        {/* flash sales container */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* browse by categories section */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* best selling product section */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* store add section */}
        <section></section>
        {/* explore our product section */}
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>

        {/* New Arrivals Section */}
        <section className="new-arrivals-section">
          <div className="new-arrivals-header">
            <div className="new-arrivals-icon"></div>
            {/* Add an icon or visual indicator */}
            <p className="new-arrivals-title">Featured</p>
          </div>

          <div className="new-arrivals-grid">
            <div className="new-arrivals-item">
              <img
                src={playStationImg}
                alt="Play station 5 with game pad"
                className="new-arrivals-image"
              />
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">PlayStation 5</h4>
                <p className="new-arrivals-description">
                  Black and white version of the PS5 coming out on sale.
                </p>
                <Link to="#more" className="shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item">
              <img
                src={womanInHat}
                alt="woman wearing a hat and earrings"
                className="new-arrivals-image"
              />
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Women's Collections</h4>
                <p className="new-arrivals-description">
                  Featured woman collections that give you another vibe.
                </p>
                <Link to="#more" className="shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item">
              <img
                src={amazonSpeaker}
                alt="amazon speaker"
                className="new-arrivals-image"
              />
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Speakers</h4>
                <p className="new-arrivals-description">
                  Amazon wireless speakers
                </p>
                <Link to="#more" className="shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item">
              <img
                src={gucciIntense}
                alt="gucci intense oud"
                className="new-arrivals-image"
              />
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Perfume</h4>
                <p className="new-arrivals-description">
                  Gucci intense oud Edp
                </p>
                <Link to="#more" className="shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* stats section */}
        <Stats />
      </div>
      {/* homepage styling hends here */}
      <Footer />
    </>
  );
};

export default Homepage;
