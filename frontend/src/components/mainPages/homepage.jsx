import { useState, useEffect } from "react";
import "../../styles/homepage.css";
import { Link } from "react-router-dom";
import Top from "../top";
import Navbar from "../navbar";
import Stats from "../stats";
import Footer from "../footer";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import IphoneImge from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.svg";
import appleLogo from "../../assets/1200px-Apple_gray_logo 1.svg";
import { IoMdArrowForward } from "react-icons/io";
import womanInHat from "../../assets/attractive-woman-wearing-hat-posing-black.svg";

const Homepage = () => {
  // flashsales countdown timer
  // Calculate the target time which is 3 days (72 hours) from now in milliseconds
  const targetTime = Date.now() + 3 * 24 * 60 * 60 * 1000;

  // Function to calculate the time remaining
  const calculateTimeLeft = () => {
    // Get the difference between the target time and the current time
    const difference = targetTime - Date.now();

    // Initialize an empty object to store time left
    let timeLeft = {};

    // If there's still time remaining
    if (difference > 0) {
      // Calculate the remaining days, hours, minutes, and seconds
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Remaining days
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Remaining hours
        minutes: Math.floor((difference / 1000 / 60) % 60), // Remaining minutes
        seconds: Math.floor((difference / 1000) % 60), // Remaining seconds
      };
    } else {
      // If the countdown is over, set everything to 0
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Return the calculated time left
    return timeLeft;
  };

  // useState hook to store the time left, initialized with the calculateTimeLeft function
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect hook to update the countdown every second
  useEffect(() => {
    // Set an interval to update the time every 1000ms (1 second)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Update the state with the new time left
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []); // Empty dependency array so the effect runs only once when the component mounts

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
              <div className="flashsales-countdown-main">
                <div className="flashsales-countdown-date">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </div>
                <span className="flashsales-countdown-time">
                  {timeLeft.days}
                  <h4>:</h4>
                  {timeLeft.hours}
                  <h4>:</h4> {timeLeft.minutes}
                  <h4>:</h4>
                  {timeLeft.seconds}
                </span>
              </div>
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
