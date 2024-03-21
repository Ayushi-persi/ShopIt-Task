import React from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/actions/productAction";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const Category = () => {
  const dispatch = useDispatch();
  const handleClick = (query) => {
    return (
      <>
        <CartPage />
        <HomePage query={query} />;
      </>
    );
  };
  return (
    <>
      <h1>Category Page</h1>
      <div>
        <input
          type="text"
          onChange={(event) => dispatch(searchProduct(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <button onClick={() => handleClick("shoes")}>Shoes</button>
      <button onClick={() => dispatch(searchProduct("mobile"))}>Mobile</button>
      <button onClick={() => dispatch(searchProduct("Footwear"))}>
        Footwear
      </button>
      <button onClick={() => dispatch(searchProduct("Laptop"))}>Laptop</button>
      <button onClick={() => dispatch(searchProduct("Clothing"))}>
        Clothing
      </button>
    </>
  );
};

export default Category;
