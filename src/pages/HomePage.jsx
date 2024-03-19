import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/productAction";
import {
  setCart,
  addToCart,
  removeFromCart,
  emptyCart,
} from "../redux/actions/cartAction";
import WishlistPage from "./WishlistPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  let cartData = useSelector((state) => state.cartData);

  useEffect(() => {
    dispatch(fetchProduct());
    const savedData = localStorage.getItem("cartData");
    console.log("Get");
    // if (savedData) dispatch(setCart(JSON.parse(savedData)));
    // console.log("savedData", savedData);
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
    console.log("Set");
  }, [cartData]);

  return (
    <>
      <WishlistPage />

      <h1>Home Page</h1>
      <h2>{cartData.length}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {productData.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <img
                src={product.image}
                style={{ width: "100px", height: "100px" }}
                alt="Product"
              />
              <h4> {product.price}</h4>
              <button onClick={() => dispatch(addToCart(product))}>Add</button>
              <button
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  dispatch(emptyCart());
                }}
              >
                Empty Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
