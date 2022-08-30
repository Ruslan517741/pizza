import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [
        {'Мясные': 0},
        {'Вегетарианские': 1},
        {'Гриль': 2},
        {'Острые': 3},
        {'Закрытые': 4},
    ],
    activeFilter: 'all'
}

