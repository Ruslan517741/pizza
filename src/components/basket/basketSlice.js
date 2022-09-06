import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            state.basket.push(action.payload);
        },
        deletePizza: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        },
        clearBasket: (state) => {
            state.basket = [];
        }

    },
});

const {actions, reducer} = basketSlice;

export default reducer;
export const {
    addPizza,
    deletePizza,
    clearBasket
} = actions;