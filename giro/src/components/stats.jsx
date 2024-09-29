import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";
import "../styles/about.css";

const Stats = () => {
  return (
    <>
      {/* more information section */}
      <div className="more-info">
        {/* Add additional information here */}
        <div className="info-container">
          <div className="stat-icon-main">
            <div className="stat-icon-sub">
              <FaTruckFast className="stat-icon" />
            </div>
          </div>
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        {/* second div */}
        <div className="info-container">
          <div className="stat-icon-main">
            <div className="stat-icon-sub">
              <BiSupport className="stat-icon" />
            </div>
          </div>
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        {/* third div */}
        <div className="info-container">
          <div className="stat-icon-main">
            <div className="stat-icon-sub">
              <IoShieldCheckmark className="stat-icon" />
            </div>
          </div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>Refund always made within 30 days</p>
        </div>
      </div>
      {/* end of more info section */}
    </>
  );
};

export default Stats;
