import * as types from './constants';
import { IStock } from './interfaces';

export const favoriteRequest = () => ({
  type: types.FAVORITE_REQUEST,
});

export const favoriteSuccess = (response: IStock) => ({
  type: types.FAVORITE_SUCCESS,
  payload: { response },
});

export const favoriteFail = (error: IStock) => ({
  type: types.FAVORITE_FAIL,
  payload: { error },
});

export const productsRequest = () => ({
  type: types.PRODUCTS_REQUEST,
});

export const productsSuccess = (response: IStock) => ({
  type: types.PRODUCTS_SUCCESS,
  payload: { response },
});

export const productsFail = (error: IStock) => ({
  type: types.PRODUCTS_FAIL,
  payload: { error },
});

export const filterRequest = () => ({
  type: types.FILTER_REQUEST,
});

export const filterSuccess = (response: IStock) => ({
  type: types.FILTER_SUCCESS,
  payload: { response }
});

export const filterFail = (error: IStock) => ({
  type: types.FILTER_FAIL,
  payload: { error },
});
