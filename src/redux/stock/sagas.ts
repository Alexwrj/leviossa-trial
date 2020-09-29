import axios from "axios";
import * as types from './constants';
import { 
  productsSuccess,
  productsFail,
  favoriteSuccess,
  favoriteFail,
  filterSuccess,
  filterFail,
} from './actions';
import { put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";

interface IPayload { 
  type: string;
  payload: any;
}

const fetchItems = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS');

const addToFavorite = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_SUCCESS');

const filterItems = () => axios.get('https://my-json-server.typicode.com/aero-frontend/test-task/FILTER_SUCCESS');

function *fetchItemsAsync(): SagaIterator {
  try {
    const { data } = yield call(fetchItems);
    yield put(productsSuccess(data));
  } catch (error) {
    yield put(productsFail(error));
  }
}

function *addToFavoriteAsync({ payload: { id } }: IPayload): SagaIterator {
  try {
    const { data } = yield call(addToFavorite);
    yield put(favoriteSuccess(id, data));
  } catch (error) {
    yield put(favoriteFail(error));
  }
}

function *filterItemsAsync({ payload: { filters } }: IPayload): SagaIterator {
  try {
    let fetchedData = [];
    if (filters.length) {
      const { data } = yield call(filterItems);
      fetchedData = data;
    } else {
      const { data } = yield call(fetchItems);
      fetchedData = data;
    }

    yield put(filterSuccess(fetchedData));
  } catch (error) {
    yield put(filterFail(error));
  }
}

function *stockSaga(): SagaIterator {
  yield takeEvery(types.PRODUCTS_REQUEST, fetchItemsAsync);
  yield takeEvery<IPayload>(types.FAVORITE_REQUEST, addToFavoriteAsync);
  yield takeEvery(types.FILTER_REQUEST, filterItemsAsync);
}

export default stockSaga;
