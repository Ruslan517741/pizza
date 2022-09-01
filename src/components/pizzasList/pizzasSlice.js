import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hooks';

const initialState = {
    pizzas: [],
    activeFilter: "all",
    activeSortFilter: "popularity",
    pizzasLoadingStatus: 'idle'
}

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    () => {
        const {request} = useHttp();
        return request('https://630760c2c0d0f2b8012df682.mockapi.io/pizzas');
    }
);

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
        activeSortFilterChanged: (state, action) => {
            state.activeSortFilter = action.payload;
        },
        sortingPizzas: (state) => {
            switch (state.activeSortFilter) {
                case 'popularity':
                    state.pizzas = state.pizzas.sort((a, b) => b.rating - a.rating);
                    break;
                case 'price':
                    state.pizzas = state.pizzas.sort((a, b) => b.price - a.price);
                    break;
                case 'alphabet':
                    state.pizzas = state.pizzas.sort((a, b) => b - a);
                    break;
                default: 
                    console.log('Ошибка сортировки');
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, state => {state.pizzasLoadingStatus = 'loading'})
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasLoadingStatus = 'idle';
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, state => {state.heroesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = pizzasSlice;

export default reducer;
export const {
    activeFilterChanged,
    activeSortFilterChanged,
    sortingPizzas
} = actions;