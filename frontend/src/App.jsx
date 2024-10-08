import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/mainPages/homepage";
import Signup from "./components/authetication/signup";
import About from "./components/mainPages/about";
import Error404 from "./components/mainPages/error404";
import Contact from "./components/mainPages/contact";
import Signin from "./components/authetication/signin";
import Profile from "./components/mainPages/profile";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
