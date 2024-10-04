import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/about.css";
import aboutSideImg from "../../assets/about-sideImg.svg";
import { BsShopWindow } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuGift } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import teamate_one from "../../assets/teamate_one.svg";
import teamate_two from "../../assets/teamate_two.svg";
import teamate_three from "../../assets/teamate_three.svg";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Stats from "../stats";

const About = () => {
  // for card slider <meet the team section>
  // create an array of the data to be rendered
  // iterate over the data using .map function
  // style it based on element and how the card should look

  const data = [
    {
      image: teamate_one,
      name: "Adebayo Adeyemi",
      role: "Founder",
      socials: [<CiTwitter />, <FaInstagram />, <FiLinkedin />],
      alt: "portrait photograph of the Founder Adebayo Adeyemi",
    },
    {
      image: teamate_two,
      name: "Onyeka Emeka",
      role: "Chief Technology Officer",
      socials: [<CiTwitter />, <FaInstagram />, <FiLinkedin />],
      alt: "portrait photograph of the Chief Technology Officer Onyeka Emeka",
    },
    {
      image: teamate_three,
      name: "Ngozi Obi",
      role: "Product Designer",
      socials: [<CiTwitter />, <FaInstagram />, <FiLinkedin />],
      alt: "portrait photograph of the Product Designer Ngozi Obi",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Top />
      <Navbar />
      {/* main about page container */}
      <div className="about-container">
        {/* our story section */}
        <div className="our-story">
          <div className="our-story-text">
            <h1>Our Story</h1>
            <p className="story-text-first_paragraph">
              Founded in 2015, Giro is Nigeria's leading online shopping
              marketplace <br /> with a strong presence in Lagos. Supported by a
              broad range of tailored <br /> marketing, data, and service
              solutions, Giro boasts 10,500 sellers and 300 <br />
              brands, serving 3 million customers across the region.
            </p>
            <p className="story-text-section_paragraph">
              Giro offers more than 1 million products and is growing at a rapid
              pace.
              <br /> It provides a diverse range of categories, from consumer
              goods to more <br /> specialized items.
            </p>
          </div>
          <img
            src={aboutSideImg}
            alt="Two girls holding shopping bags and looking at a phone"
            className="our-story-image"
            loading="lazy"
          />
        </div>

        {/* stats section */}
        <div className="stats-section">
          {/* Single stat */}
          <div className="stat-item">
            <div className="stat-icon-main">
              <div className="stat-icon-sub">
                <BsShopWindow className="stat-icon" />
              </div>
            </div>
            <h4 className="stat-number">10.5k</h4>
            <p className="stat-description">Active Sellers on Giro</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon-main">
              <div className="stat-icon-sub">
                <BsCurrencyDollar className="stat-icon" />
              </div>
            </div>
            <h4 className="stat-number">33K</h4>
            <p className="stat-description">Monthly Sales on Giro</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon-main">
              <div className="stat-icon-sub">
                <LuGift className="stat-icon" />
              </div>
            </div>
            <h4 className="stat-number">45.5K</h4>
            <p className="stat-description">Active customers on Giro</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon-main">
              <div className="stat-icon-sub">
                <FaSackDollar className="stat-icon" />
              </div>
            </div>
            <h4 className="stat-number">25K</h4>
            <p className="stat-description">Annual sales on Giro</p>
          </div>
        </div>

        {/*  Meet the team section */}
        <Carousel responsive={responsive} className="meet-the-team">
          {data.map((d, index) => (
            <div className="team-member" key={index}>
              <div className="team-photo">
                <img src={d.image} alt={d.alt} loading="lazy" />
              </div>

              <div className="teamate_description">
                <h4 className="teamate-name">{d.name}</h4>
                <p className="teamate-title">{d.role}</p>

                <div className="teamate-social-icons">
                  {d.socials.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* End of meet the team section */}

        {/* more information section */}
        <Stats />
        {/* end of more info section */}
      </div>
      <Footer />
    </>
  );
};

export default About;
