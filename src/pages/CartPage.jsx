import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/cartAction";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actions/cartAction";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  return (
    <>
      <h1>Cart Page</h1>
      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty Cart
      </button>
      <h3>Here's your Selected Items....</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Selected Quantity</th>
              <th>Color</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.selectedQuantity}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(increaseQuantity(item.id));
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(decreaseQuantity(item.id));
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                    >
                      Remove
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

export default CartPage;
