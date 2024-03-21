import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";
import { addToWishlist } from "../redux/actions/wishlistAction";
import { updateProduct, deleteProduct } from "../redux/actions/productAction";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const product = useSelector((state) => state.products.product);
  const isAdmin = useSelector((state) => state.userData.isAdmin);
  // let cartData = useSelector((state) => state.cartData);

  return (
    <>
      <h1>ProductPage</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        <div key={product.id}>
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
          {isAdmin ? (
            <>
              <button onClick={() => dispatch(updateProduct(product))}>
                Update Product
              </button>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Delete Product
              </button>
            </>
          ) : (
            <>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(addToWishlist(product))}>
                Add to Wishlist
              </button>
            </>
          )}
        </div>
      </div>
      <p>
        <Link to={"/"}>view all</Link>
      </p>
    </>
  );
};

export default ProductPage;
