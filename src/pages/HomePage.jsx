import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/productAction";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";
import { addToWishlist } from "../redux/actions/wishlistAction";
import WishlistPage from "./WishlistPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  const totalProducts = useSelector((state) => state.products.totalProducts);
  let cartData = useSelector((state) => state.cartData);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    dispatch(fetchProduct(currentPage, productsPerPage));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Home Page</h1>

      <h2>{cartData.length}</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {productData.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/ProductDetails/${product.id}`}>
                <h4>{product.title}</h4>
                <img
                  src={product.image}
                  style={{ width: "100px", height: "100px" }}
                  alt="Product"
                />
                <h4>
                  <del>{product.price}</del>
                  {product.offerPrice}
                </h4>
              </Link>
              <button onClick={() => dispatch(addToWishlist(product))}>
                Add to Wishlist
              </button>
              <button onClick={() => dispatch(addToCart(product))}>
                Add To Cart
              </button>

              {/* {cartData.find((obj) => obj.id === product.id) && (
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  Remove
                </button>
              )} */}
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <WishlistPage />
    </>
  );
};

export default HomePage;
