import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/login-middle.css";
import Top from "../top";
import AuthNavbar from "./auth_nav";
import Footer from "../footer";
import loginImg from "../../assets/Side Image.svg";
import googleBadge from "../../assets/Icon-Google.svg";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

const Signup = () => {
  // for password visibility
  const [isEyeClosed, setIsEyeClose] = useState(true);
  // data sent to the server
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // error message state
  const [errorMessage, setErrorMessage] = useState("");
  // success message state
  const [successMessage, setSuccessMessage] = useState("");
  // for navigation
  const navigate = useNavigate();

  // Toggles password visibility
  const handleEyeOpen = () => {
    setIsEyeClose(!isEyeClosed);
  };

  // Updates form data as user types
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission logic
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Prepare the data to send (excluding confirmPassword)
    const dataToSend = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
    };

    // handle form submission
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if account is created successfully
      if (response.status === 201) {
        //  send a sucess message and redirect user to homepage
        setSuccessMessage("Account created successfully");

        // redirect user to homepage after 1.5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 1500);

        // clear form data and error message
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setErrorMessage("");
      }

      // if account creation fails
    } catch (error) {
      // if error 400 meaning user already exists
      if (
        error.response?.status === 400 &&
        error.response.data.error === "Email Exists!"
      ) {
        setErrorMessage("Email already exists,  please signin");

        // redirect user to login page after 1.5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        return;
      }
      // Set appropriate error message
      setErrorMessage(
        // making sure that if the error message isnt avaliable, we display a generic message
        error.response.data.error || "Something went wrong, please try again"
      );
    }
  };

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
          <h2 className="signup-title">Create an account</h2>
          <p className="signup-subtitle">Enter your details below</p>
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First name"
              className="signup-input signup-input--first-name"
              required
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last name"
              className="signup-input signup-input--last-name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email Address"
              className="signup-input signup-input--email"
              required
            />
            <div className="password-container">
              <input
                type={isEyeClosed ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="signup-input signup-input--password"
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
            <div className="password-container">
              <input
                type={isEyeClosed ? "password" : "text"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="signup-input signup-input--password"
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
              Create account
            </button>
            <div className="signup-button signup-google-container">
              <img src={googleBadge} alt="Google icon" />
              <button className="signup-google-button">
                Sign up with Google
              </button>
            </div>
            <p className="signup-login">
              Already have an account?
              <a href="/login" className="signup-login-link">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
