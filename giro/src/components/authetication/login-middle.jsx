import { useState } from "react";
import "../../styles/login-middle.css";
import loginImage from "../../assets/Side Image.svg";
import { TbEyeClosed } from "react-icons/tb";
import { RxEyeOpen } from "react-icons/rx";

const LoginMiddle = () => {
  const [isEyeClosed, setIsEyeClose] = useState(true);

  const handleEyeOpen = () => {
    setIsEyeClose(!isEyeClosed);
  };

  return (
    <div className="login-middle">
      <img
        src={loginImage}
        alt="pink shopping bag and phone close to cart"
        className="login-middle__image"
      />
      <div className="login-middle__content">
        <div className="login-middle__text">
          <h2 className="login-middle__title">LOGIN TO GIRO</h2>
          <p className="login-middle__description">Enter your details below</p>
        </div>

        <form className="login-middle__form">
          <input
            type="email"
            placeholder="Enter your Email"
            className="login-middle__input email_input"
          />
          <div className="input_password_container">
            <input
              type={isEyeClosed ? "password" : "text"}
              placeholder="Password"
              className="login-middle__input"
            />
            {isEyeClosed ? (
              <TbEyeClosed className="opened_eye" onClick={handleEyeOpen} />
            ) : (
              <RxEyeOpen className="opened_eye" onClick={handleEyeOpen} />
            )}
          </div>
          <a href="#forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>

          <div className="login-actions">
            <button type="button" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMiddle;
