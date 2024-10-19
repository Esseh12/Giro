import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/mainPages/homepage";
import Signup from "./components/authetication/signup";
import About from "./components/mainPages/about";
import Error404 from "./components/mainPages/404";
import Contact from "./components/mainPages/contact";
import Signin from "./components/authetication/signin";
import Profile from "./components/mainPages/profile";
import Cart from "./components/mainPages/cart";
import Checkout from "./components/mainPages/checkout";
import WishList from "./components/mainPages/wishlist";
import ProductDetails from "./components/mainPages/productdetails";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-account" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
