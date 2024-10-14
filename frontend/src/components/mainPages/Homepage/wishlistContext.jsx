import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create the context
export const WishlistContext = createContext();

// Create the provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(
    localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : []
  );

  // Add item to wishlist
  const addToWishlist = (item) => {
    const isItemInWishlist = wishlistItems.find(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (!isItemInWishlist) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // Get total items in wishlist
  const getTotalWishlistItems = () => {
    return wishlistItems.length;
  };

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        getTotalWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Validate the children prop
WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
