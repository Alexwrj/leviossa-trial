import axios from "axios";
import * as types from './constants';
import { 
  productsSuccess,
  productsFail,
  favoriteSuccess,
  favoriteFail,
} from './actions';
import { put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";

interface IFavorite { 
  payload: {
    id: number;
  }
  type: string;
}

const fetchItems = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS');

const addToFavorite = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_SUCCESS');

function *fetchItemsAsync(): SagaIterator {
  try {
    const { data } = yield call(fetchItems);
    yield put(productsSuccess(data));
  } catch (error) {
    yield put(productsFail(error));
  }
}

function *addToFavoriteAsync({ payload: { id } }: IFavorite): SagaIterator {
  try {
    const { data } = yield call(addToFavorite);
    yield put(favoriteSuccess(id, data));
  } catch (error) {
    yield put(favoriteFail(error));
  }
}

function *stockSaga(): SagaIterator {
  yield takeEvery(types.PRODUCTS_REQUEST, fetchItemsAsync);
  yield takeEvery<IFavorite>(types.FAVORITE_REQUEST, addToFavoriteAsync);
}

export default stockSaga;
