import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/pizzasList/pizzasSlice';
import basket from '../components/basket/basketSlice';

export const store = configureStore({
  reducer: {pizzas, basket},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})