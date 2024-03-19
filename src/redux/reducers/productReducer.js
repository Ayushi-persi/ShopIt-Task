import {
  FETCH_PRODUCT_SAGA,
  ADD_PRODUCT_SAGA,
  DELETE_PRODUCT_SAGA,
  UPDATE_PRODUCT_SAGA,
} from "../../constants/constants";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SAGA:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT_SAGA:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT_SAGA:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case UPDATE_PRODUCT_SAGA:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
