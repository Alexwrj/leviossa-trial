import { combineReducers } from 'redux';
import stockReducer from './stock/reducers';

const RootReducer = combineReducers({
  stockReducer,
});

export default RootReducer;
