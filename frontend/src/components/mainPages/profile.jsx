import { useState, useEffect } from "react";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/profile.css";
import axios from "axios";
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
      const response = await axios.get(
        "https://giro-fz5q.onrender.com/auth/profile",
        {
          withCredentials: true,
        }
      );
      setUserData(response.data.data);
    } catch (error) {
      console.log(`Ese look at this ${error}`);
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
            <a href="/">Home</a> / <a href="/profile">My Account</a>
          </span>
          <p className="welcome-message">
            Welcome! <span>{userData.firstname}</span>
          </p>
        </div>
        <div className="profile-content">
          <div className="profile-options">
            <div className="account-section">
              <h3>Manage My Account</h3>
              <a href="/profile">My Profile</a>
              <a href="#more">Address Book</a>
              <a href="#more">My Payment Options</a>
            </div>
            <div className="orders-section">
              <h3>My Orders</h3>
              <a href="#more">My Returns</a>
              <a href="#more">My Cancellations</a>
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
                  <input type="text" className="form-input" />
                </div>
                <div className="form-sub-group">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-sub-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    // value={userData.email}
                  />
                </div>
                <div className="form-sub-group">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-sub-group">
                  <label htmlFor="current password" className="form-label">
                    password changes
                  </label>
                  <div className="form-password-container">
                    <input
                      type={eyeClosed ? "password" : "text"}
                      className="form-input"
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
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
            <div className="form-footer">
              <a
                href="#reset"
                type="submit"
                className="form-button reset-button"
              >
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
