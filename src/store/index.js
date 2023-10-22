import {
    configureStore,
    combineReducers
  } from '@reduxjs/toolkit';
  import productsReducer from './products'
  
  const reducer = combineReducers({
    products: productsReducer,
  });
  
  export const store = configureStore({
    reducer: reducer
  });
  