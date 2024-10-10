import { useState } from "react";
import axios from "axios";
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

  const handleFormSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Send the form data to the server
    try {
      const response = await axios.post(
        "https://giro-fz5q.onrender.com/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if account is created successfully
      if (response.status === 200) {
        //  send a sucess message and redirect user to homepage
        setSuccessMessage("Account login successfully");

        // redirect user to homepage after 1.5 seconds
        setTimeout(() => {
          navigate("/");
        }, 1500);

        // clear form data and error message
        setLoginData({
          email: "",
          password: "",
        });
        setErrorMessage("");
      }
    } catch (error) {
      // if there is an error
      if (
        error.status === 403 &&
        error.response.data.error === "Password Incorrect!"
      ) {
        setErrorMessage("Invalid credentials");

        // clear form data and error message
        setLoginData({
          email: "",
          password: "",
        });
        setErrorMessage("");
      }

      // No User with that email
      else if (
        error.status === 403 &&
        error.response.data.error === "No User with that email"
      ) {
        setErrorMessage("No user with that email");

        setTimeout(() => {
          navigate("/create-account");
        }, 2500);
      }
    }
  };

  const handleEyeOpen = () => {
    setIsEyeClose(!isEyeClosed);
  };
  return (
    <>
      <Top />
      <AuthNavbar />
      <div className="signup-container">
        <img
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
            {/* if error message is true return this */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {/* if sucess message is true return this */}
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
              New User?
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
