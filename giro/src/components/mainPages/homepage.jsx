import "../../styles/homepage.css";
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
            <a href="/women" className="category-link first-category-link">
              Women's Fashion
            </a>
            <a href="/men" className="category-link">
              Men's Fashion
            </a>
            <a href="/electronics" className="category-link">
              Electronics
            </a>
            <a href="/lifestyle" className="category-link">
              Home & Lifestyle
            </a>
            <a href="/medicine" className="category-link">
              Medicine
            </a>
            <a href="/sports" className="category-link">
              Sports & Outdoor
            </a>
            <a href="/baby" className="category-link">
              Baby's & Toys
            </a>
            <a href="/groceries" className="category-link">
              Groceries & Pets
            </a>
            <a href="/health" className="category-link">
              Health & Beauty
            </a>
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
                <a href="#shop" className="shop-now-link">
                  Shop Now
                </a>
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
                <a href="#more" className="shop-now-link">
                  Shop Now
                </a>
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
                <a href="#more" className="shop-now-link">
                  Shop Now
                </a>
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
                <a href="#more" className="shop-now-link">
                  Shop Now
                </a>
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
                <a href="#more" className="shop-now-link">
                  Shop Now
                </a>
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
