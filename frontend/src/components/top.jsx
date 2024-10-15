import "../styles/top.css";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="top-header-container">
      <p className="top-container-text">
        Summer Sale For Swim Suits And Free Express Delivery
        <span> - OFF 50%!</span>
      </p>
      <Link to="/more">ShopNow</Link>
    </div>
  );
}

export default Top;
