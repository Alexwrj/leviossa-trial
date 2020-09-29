import { ICard } from 'pages/stock/components/card/interfaces';

export type { ICard };

export interface IStock {
  success: boolean;
  status: string;
  isLoading?: boolean;
  data: {
    message?: string;
    products: Array<ICard>;
    inFav: boolean;
  }
};

export interface IType {
  type: string;
  payload: { 
    response: IStock;
    id?: number;
  }
}