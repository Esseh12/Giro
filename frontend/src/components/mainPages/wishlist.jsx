import { useContext } from "react";
import { WishlistContext } from "./Homepage/wishlistContext";

const WishList = () => {
  const { wishlistItems, removeFromWishlist, getTotalWishlistItems } =
    useContext(WishlistContext);

  return (
    <div>
      <h2>WishList</h2>
      <p>Total Wishlist Items: {getTotalWishlistItems()}</p>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishList;
