import {
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../../constants/constants";

export const fetchProduct = () => ({
  type: FETCH_PRODUCT,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
