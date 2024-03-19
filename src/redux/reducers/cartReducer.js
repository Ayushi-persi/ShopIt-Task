import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  SET_CART,
} from "../../constants/constants";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART:
      console.log("reducer state", state);
      console.log("reducer", action.payload);

      return [...state, action.payload];
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const remainingItems = state.filter((item) => item.id !== action.payload);
      return [...remainingItems];
    case EMPTY_CART:
      state = [];
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
