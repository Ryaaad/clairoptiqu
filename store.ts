import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './feature/main/mainSlice' 
import ShopReducer from './feature/Shoping/ShopingSlice' 

export const store = configureStore({
  reducer: {
    main:mainReducer,
    Shop:ShopReducer
  },
});