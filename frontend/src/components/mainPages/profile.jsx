import { useState, useEffect } from "react";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/profile.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

const Profile = () => {
  const [eyeClosed, setEyeClosed] = useState(true);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone_number: "",
  });

  // for password toggle
  const handleEyeToggle = () => {
    setEyeClosed(!eyeClosed);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://giro-fz5q.onrender.com/auth/profile",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the response as JSON
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Top />
      <Navbar />
      <div className="profile-container">
        <div className="breadcrumb">
          <span className="breadcrumb-span">
            <Link to="/">Home</Link> / <Link to="/profile">My Account</Link>
          </span>
          <p className="welcome-message">
            Welcome! <span>{userData.firstname}</span>
          </p>
        </div>
        <div className="profile-content">
          <div className="profile-options">
            <div className="account-section">
              <h3>Manage My Account</h3>
              <Link to="/profile">My Profile</Link>
              <Link to="#more">Address Book</Link>
              <Link to="#more">My Payment Options</Link>
            </div>
            <div className="orders-section">
              <h3>My Orders</h3>
              <Link to="#more">My Returns</Link>
              <Link to="#more">My Cancellations</Link>
            </div>
            <div className="wishlist-section">
              <h3>My WishList</h3>
            </div>
          </div>
          <form className="profile-form">
            <div className="form-header">
              <h2>Edit Your Profile</h2>
            </div>
            <div className="form-body">
              <div className="form-group">
                <div className="form-sub-group">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="First Name"
                    id="firstname"
                  />
                </div>
                <div className="form-sub-group">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="Last Name"
                    id="lastname"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-sub-group">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    id="Email"
                    type="email"
                    className="form-input"
                    name="Email"
                    autoComplete="Email"
                  />
                </div>
                <div className="form-sub-group">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="Address"
                    autoComplete="Address"
                    id="address"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-sub-group">
                  <label htmlFor="password" className="form-label">
                    Password (Leave blank to keep the same)
                  </label>
                  <div className="form-password-container">
                    <input
                      type={eyeClosed ? "password" : "text"}
                      className="form-input"
                      name="password"
                      id="password"
                    />
                    {eyeClosed ? (
                      <VscEyeClosed
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    ) : (
                      <VscEye
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    )}
                  </div>
                  <div className="form-password-container">
                    <input
                      type={eyeClosed ? "password" : "text"}
                      className="form-input"
                      name="password"
                    />
                    {eyeClosed ? (
                      <VscEyeClosed
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    ) : (
                      <VscEye
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    )}
                  </div>
                  <div className="form-password-container">
                    <input
                      type={eyeClosed ? "password" : "text"}
                      className="form-input"
                      name="password"
                    />
                    {eyeClosed ? (
                      <VscEyeClosed
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    ) : (
                      <VscEye
                        className="profile-eye-icon"
                        onClick={handleEyeToggle}
                      />
                    )}
                  </div>
                </div>
                <div className="form-sub-group">
                  <label htmlFor="phone number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="phoneNumber"
                    id="phone number"
                  />
                </div>
              </div>
            </div>
            <div className="form-footer">
              <a to="#reset" type="submit" className="form-button reset-button">
                Reset Changes
              </a>
              <button type="submit" className="form-button submit-button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
