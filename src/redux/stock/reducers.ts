import * as types from './constants';
import { IStock, IType } from './interfaces';


const initialState: IStock = {
  success: false,
  isLoading: false,
  error: '',
  status: '',
  data: { 
    products: [],
    message: '',
    inFav: false,
  },
};

const stockReducer = (state = initialState, action: IType ): IStock => {
  switch (action.type) {
    case types.PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case types.PRODUCTS_SUCCESS:
      return { ...state, ...action.payload.response, isLoading: false };
    case types.FAVORITE_REQUEST:
      return { ...state, isLoading: true };
    case types.FAVORITE_SUCCESS:
      const data = action.payload.response.data;
      const oldItems = [...state.data.products];
      const itemIndex = oldItems.findIndex((item) => item.id === action.payload.id);
      oldItems[itemIndex].inFav = action.payload.response.data.inFav;
      data.products = [...oldItems];

      return { 
        ...state, 
        ...action.payload.response, 
        isLoading: false,
        data,
      };
    case types.FAVORITE_FAIL:
      return { ...state, ...action.payload.response, isLoading: false };
    case types.FILTER_REQUEST:
      return { ...state, isLoading: true };
    case types.FILTER_SUCCESS:
      return { ...state, ...action.payload.response, isLoading: false };
    case types.FILTER_FAIL:
      return { ...state, ...action.payload.response, isLoading: false };
    default: return initialState;
  }
};

export default stockReducer;
