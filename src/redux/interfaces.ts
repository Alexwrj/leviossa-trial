import { IStock } from './stock/interfaces';

export interface IStore {
  stockReducer: IStock;
}
