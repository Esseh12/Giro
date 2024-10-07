import Top from "../top";
import AuthNavbar from "./auth_nav";
import Footer from "../footer";
import "../../styles/login-middle.css";
import loginImg from "../../assets/Side Image.svg";

const Signin = () => {
  return (
    <>
      <Top />
      <AuthNavbar />
      <div className="signup-container">
        <img
          src={loginImg}
          alt="A cart, a phone and two shopping bags"
          className="signup-image"
        />
        <div className="signup-form-container">
          <h2 className="signup-title">Login to Giro</h2>
          <p className="signup-subtitle">Enter your details below</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
