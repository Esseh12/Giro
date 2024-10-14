import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/mainPages/Homepage/cartContext";
import { WishlistProvider } from "./components/mainPages/Homepage/wishlistContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
