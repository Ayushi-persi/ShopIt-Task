import React from "react";
import { useSelector } from "react-redux";

const WishlistPage = () => {
  const cartData = useSelector((state) => state.cartData);
  return (
    <>
      <h1>WishlistPage</h1>
      <h3>Here's your Selected Items....</h3>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
          </thead>
          <tbody>
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <tr key={item.price}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
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
