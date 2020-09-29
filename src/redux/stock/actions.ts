import * as types from './constants';
import { IStock } from './interfaces';

export const favoriteRequest = (id: number) => ({
  type: types.FAVORITE_REQUEST,
  payload: { id },
});

export const favoriteSuccess = (id: number, response: IStock) => ({
  type: types.FAVORITE_SUCCESS,
  payload: { id, response },
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

export const filterRequest = (filters: Array<string>) => ({
  type: types.FILTER_REQUEST,
  payload: { filters },
});

export const filterSuccess = (response: IStock) => ({
  type: types.FILTER_SUCCESS,
  payload: { response }
});

export const filterFail = (error: IStock) => ({
  type: types.FILTER_FAIL,
  payload: { error },
});
