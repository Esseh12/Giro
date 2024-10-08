import { useState, useEffect } from "react";
import Top from "../top";
import Navbar from "../navbar";
import Footer from "../footer";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone_number: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/profile");
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
      <div>
        <div>
          <p>
            <a href="/">Home</a> / <a href="/profile">My Account</a>
          </p>
          <p>Welcome! {userData.firstname}</p>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
