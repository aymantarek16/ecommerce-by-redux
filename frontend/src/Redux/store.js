import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { oneproductsApi, productsApi } from './productsApi'
import cartSlice from './cartSlice'


export const store = configureStore({
  reducer: {
    carttt: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [oneproductsApi.reducerPath]: oneproductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(oneproductsApi.middleware),
})

setupListeners(store.dispatch)