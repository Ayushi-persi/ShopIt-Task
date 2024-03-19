import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCT_SAGA,
  ADD_PRODUCT_SAGA,
  DELETE_PRODUCT_SAGA,
  UPDATE_PRODUCT_SAGA,
} from "../../constants/constants";
import { URL } from "../../constants/routes";
import axios from "axios";

function* addProductSaga(action) {
  try {
    const response = yield call(axios.post, URL, action.payload);
    yield put({ type: ADD_PRODUCT_SAGA, payload: response.data });
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

function* deleteProductSaga(action) {
  try {
    yield axios.delete(`${URL}/${action.payload}`);
    yield put({ type: DELETE_PRODUCT_SAGA, payload: action.payload });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

function* updateProductSaga(action) {
  try {
    const response = yield axios.put(
      `${URL}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: UPDATE_PRODUCT_SAGA, payload: response.data });
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

function* fetchProductSaga() {
  try {
    const response = yield axios.get(URL);
    yield put({ type: FETCH_PRODUCT_SAGA, payload: response.data });
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

function* productSaga() {
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(DELETE_PRODUCT, deleteProductSaga);
  yield takeEvery(UPDATE_PRODUCT, updateProductSaga);
  yield takeEvery(FETCH_PRODUCT, fetchProductSaga);
}

export default productSaga;
