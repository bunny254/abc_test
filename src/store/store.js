//Importing dependencies

import { configureStore } from '@reduxjs/toolkit';

//Importing reducers

import cartSlice from './cartSlice';

//persist store
const store = configureStore({
  reducer:{
      cart: cartSlice,
  }
})


export default store;