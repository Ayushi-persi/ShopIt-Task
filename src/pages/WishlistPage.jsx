import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishlist,
  emptyWishlist,
} from "../redux/actions/wishlistAction";
import { addToCart } from "../redux/actions/cartAction";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlistData);
  return (
    <>
      <h1>Wishlist Page</h1>
      <button onClick={() => dispatch(emptyWishlist())}>Empty Wishlist</button>
      <h3>Here's your Favourites</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.length > 0 ? (
              wishlistData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.category}
                      style={{ width: "75px", height: "75px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                    >
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(removeFromWishlist(item.id));
                      }}
                    >
                      Remove from Wishlist
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WishlistPage;
