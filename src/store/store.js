import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/pizzasList/pizzasSlice';

export const store = configureStore({
  reducer: {pizzas},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})