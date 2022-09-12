import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: [],
    amountOfPizzas: 0,
    totalPrice: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPizza: (state, action) => { 
            if (state.basket.length === 0) {
                state.basket.push(action.payload);
            } else {
                if (!state.basket.some(item => item.name === action.payload.name && item.activeType === action.payload.activeType && item.activeSize === action.payload.activeSize)) {
                    state.basket.push(action.payload);
                } else {
                    state.basket.forEach((item, i) => {
                        if (item.name === action.payload.name && item.activeType === action.payload.activeType && item.activeSize === action.payload.activeSize) {
                            state.basket[i].counter += 1;
                        }
                    })
                }
            }
        },
        plusPizza: (state, action) => {
            state.basket[state.basket.findIndex(item => item.id === action.payload)].counter += 1;
        },
        minusPizza: (state, action) => {
            if (state.basket[state.basket.findIndex(item => item.id === action.payload)].counter > 1) {
                state.basket[state.basket.findIndex(item => item.id === action.payload)].counter -= 1;
            }
        },
        deletePizza: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        },
        clearBasket: (state) => {
            state.basket = [];
        },
        changeAmountOfPizzas: (state, action) => {
            state.amountOfPizzas = action.payload;
        },
        changeTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        }

    },
});

const {actions, reducer} = basketSlice;

export default reducer;
export const {
    addPizza,
    plusPizza,
    minusPizza,
    deletePizza,
    clearBasket,
    changeAmountOfPizzas,
    changeTotalPrice
} = actions;