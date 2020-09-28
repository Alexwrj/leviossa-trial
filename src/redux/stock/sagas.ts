import axios from "axios";
import * as types from './constants';
import { 
  productsSuccess,
  productsFail,
} from './actions';
import { put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";

const fetchItems = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS');

function *fetchItemsAsync(): SagaIterator {
  try {
    const { data } = yield call(fetchItems);
    yield put(productsSuccess(data));
  } catch (error) {
    yield put(productsFail(error));
  }
}

function *stockSaga(): SagaIterator {
  yield takeEvery(types.PRODUCTS_REQUEST, fetchItemsAsync);
}

export default stockSaga;
