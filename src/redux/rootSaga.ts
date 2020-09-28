import { all } from 'redux-saga/effects';
import stockSaga from './stock/sagas';

export default function *rootSaga() {
  yield all([stockSaga()]);
}
