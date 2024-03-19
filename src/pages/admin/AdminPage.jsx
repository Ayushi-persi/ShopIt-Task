import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  fetchProduct,
  updateProduct,
} from "../../redux/actions/productAction";
import ProductForm from "../../components/ProductForm";

const AdminPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (isFormOpen) window.scrollTo({ top: 10, behavior: "smooth" });
  }, [isFormOpen]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setIsFormOpen(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsFormOpen(false);
  };

  const handleAddButtonClick = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };

  const handleUpdateButtonClick = (product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  return (
    <>
      <h1>Admin Page</h1>
      <button onClick={handleAddButtonClick}>Add Product</button>
      {isFormOpen && (
        <ProductForm
          product={selectedProduct}
          handleUpdateProduct={handleUpdateProduct}
          handleAddProduct={handleAddProduct}
        />
      )}

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
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Delete Product
              </button>
              <button
                onClick={() => {
                  handleUpdateButtonClick(product);
                }}
              >
                Update Product
              </button>
            </div>
          );
        })}
      </div>
      <h2>{productData.length}</h2>
    </>
  );
};

export default AdminPage;
