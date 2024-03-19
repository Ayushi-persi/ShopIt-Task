import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../../constants/constants";

export const setCart = (data) => ({
  type: SET_CART,
  payload: data,
});

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeFromCart = (dataId) => ({
  type: REMOVE_FROM_CART,
  payload: dataId,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
