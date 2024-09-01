import "../../styles/login-middle.css";
import loginImage from "../../assets/Side Image.svg";

const LoginMiddle = () => {
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
            className="login-middle__input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-middle__input"
          />
          <a href="#forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </form>

        <div className="login-actions">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginMiddle;
