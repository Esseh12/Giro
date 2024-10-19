import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Top from "../top";
import AuthNavbar from "./auth_nav";
import Footer from "../footer";
import "../../styles/login-middle.css";
import loginImg from "../../assets/Side Image.svg";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

const Signin = () => {
  const navigate = useNavigate();
  const [isEyeClosed, setIsEyeClose] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleEyeOpen = () => {
    setIsEyeClose(!isEyeClosed);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://giro-fz5q.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // ensures cookies are sent with cross-origin requests
          body: JSON.stringify(loginData), // Send the login data in JSON format
        }
      );

      if (response.ok) {
        setSuccessMessage("Account login successfully");

        // Redirect user after 1.5 seconds
        setTimeout(() => {
          navigate("/");
        }, 1500);

        // Clear form data after success
        setLoginData({
          email: "",
          password: "",
        });
        setErrorMessage("");
      } else if (response.status === 403) {
        const errorDetail = (await response.json()).error;

        if (errorDetail === "Password Incorrect!") {
          setErrorMessage("Invalid credentials");
        } else if (errorDetail === "No User with that email") {
          setErrorMessage("No user with that email");

          // Redirect to create account after 2.5 seconds
          setTimeout(() => {
            navigate("/create-account");
          }, 2500);
        }
      } else {
        // Handle other errors
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      // General error handling
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Top />
      <AuthNavbar />
      <div className="signup-container">
        <LazyLoadImage
          src={loginImg}
          alt="A cart, a phone and two shopping bags"
          className="signup-image signin-image"
        />
        <div className="signup-form-container signin-form-container">
          <h2 className="signup-title">Login to Giro</h2>
          <p className="signup-subtitle">Enter your details below</p>
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              className="signup-input signup-input--email"
              onChange={handleInputChange}
              value={loginData.email}
              required
            />
            <div className="password-container">
              <input
                type={isEyeClosed ? "password" : "text"}
                name="password"
                placeholder="Enter your password"
                className="signup-input signup-input--password"
                onChange={handleInputChange}
                value={loginData.password}
                required
              />
              {isEyeClosed ? (
                <VscEyeClosed
                  className="signup-open_eye"
                  onClick={handleEyeOpen}
                />
              ) : (
                <VscEye className="signup-open_eye" onClick={handleEyeOpen} />
              )}
            </div>
            <Link to="#forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            <button
              type="submit"
              className="signup-button signup-button--submit"
            >
              LOGIN
            </button>
            <p>
              New User?{" "}
              <Link
                to="/create-account"
                className="signup-login-link signin-login-link"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
