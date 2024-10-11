import { useState, useEffect } from "react";
import axios from "axios";
import { CountdownTimer } from "../homepagefunction";
import "../../styles/homepage.css";
import { Link } from "react-router-dom";
import Top from "../top";
import Navbar from "../navbar";
import Stats from "../stats";
import Footer from "../footer";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import IphoneImge from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.svg";
import appleLogo from "../../assets/1200px-Apple_gray_logo 1.svg";
import { IoMdArrowForward } from "react-icons/io";
import womanInHat from "../../assets/attractive-woman-wearing-hat-posing-black.svg";
import jblSpeaker from "../../assets/jbl-boomplay.svg";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  // useEffect to fetch products when the component loads
  useEffect(() => {
    axios
      .get("https://giro-fz5q.onrender.com/")
      .then((response) => {
        console.log(response.data); // Check the structure of the response
        // Set products from the correct path in the API response
        if (Array.isArray(response.data.data.flash_sales)) {
          setProducts(response.data.data.flash_sales); // Access the 'flash sales ' array
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error); // Handle errors
      });
  }, []); // Empty array ensures this effect runs only once when the component mounts

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
              Women&#39;s Fashion
            </Link>
            <Link to="/men" className="category-link">
              Men&#39;s Fashion
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
              Baby&#39;s & Toys
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
                <Link to="#shop" className="new-shop-now-link">
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
        <section className="flashsales-section">
          <div className="homepage-header">
            <div className="homepage-red-icon"></div>
            {/* Add an icon or visual indicator */}
            <p className="homepage-title">Today&#39;s</p>
          </div>
          <div className="flashsales-top-container">
            <div className="flashsales-countdown">
              <h2 className="new-arrival-heading">Flash Sales</h2>
              <CountdownTimer />
            </div>
            <div className="flashsales-nav-arrow">
              <div className="flashsales-nav-arrow-container">
                <IoIosArrowRoundBack className="flashsales-nav-arrow-icon" />
              </div>
              <div className="flashsales-nav-arrow-container">
                <IoIosArrowRoundForward className="flashsales-nav-arrow-icon" />
              </div>
            </div>
          </div>
          {/* flash sales items */}
          <div>
            <ul className="flashsales-items-container">
              {/* Render products if it's an array */}
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <li key={product.id} className="flashsales-subcontainer-item">
                    <div className="flashsales-single-image">
                      <img
                        src={`/products/${product.image_url}`}
                        alt={product.name}
                      />
                      <p className="product-discount">-{product.discount}%</p>
                      <div className="flashsales-icon-container">
                        <div className="flashsales-icon-background">
                          <AiOutlineHeart className="flashsales-icon" />
                        </div>
                        <div className="flashsales-icon-background">
                          <FiEye className="flashsales-icon" />
                        </div>
                      </div>
                      <div className="flashsales-cart-option">
                        <p className="flashsales-cart-option-text">
                          Add To Cart
                        </p>
                      </div>
                    </div>
                    <h2 className="flashsale-product-name">{product.name}</h2>
                    <div className="price-container">
                      <p className="discounted-price">
                        $
                        {product.price -
                          (product.price * product.discount) / 100}
                      </p>
                      <p className="original-price">${product.price}</p>
                    </div>
                    <p>
                      {Array(product.rating)
                        .fill("⭐")
                        .map((star, index) => (
                          <span key={index}>{star}</span>
                        ))}
                    </p>
                  </li>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </ul>
          </div>
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
        <section>
          <div></div>
          <div>
            <img src={jblSpeaker} alt="jbl speaker" />
          </div>
        </section>
        {/* explore our product section */}
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>

        {/* New Arrivals Section */}
        <section className="new-arrivals-section">
          <div className="homepage-header">
            <div className="homepage-red-icon"></div>
            {/* Add an icon or visual indicator */}
            <p className="homepage-title">Featured</p>
          </div>

          <div>
            <h2 className="new-arrival-heading">New Arrival</h2>
          </div>

          <div className="new-arrivals-grid">
            <div className="new-arrivals-item featured-item">
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">PlayStation 5</h4>
                <p className="new-arrivals-description">
                  Black and white version of the PS5 coming out on sale.
                </p>
                <Link to="#more" className="new-shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item women-collections">
              <img
                src={womanInHat}
                alt="woman wearing a hat and earrings"
                className="new-arrivals-image women-image"
              />
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Women&#39;s Collections</h4>
                <p className="new-arrivals-description">
                  Featured woman collections that give you another vibe.
                </p>
                <Link to="#more" className="new-shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item speakers">
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Speakers</h4>
                <p className="new-arrivals-description">
                  Amazon wireless speakers
                </p>
                <Link to="#more" className="new-shop-now-link">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="new-arrivals-item perfume">
              <div className="new-arrivals-info">
                <h4 className="new-arrivals-name">Perfume</h4>
                <p className="new-arrivals-description">
                  Gucci intense oud Edp
                </p>
                <Link to="#more" className="new-shop-now-link">
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
