import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hooks';

const initialState = {
    pizzas: [],
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
    reducers: {},
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
    pizzasFetching,
    pizzasFetched,
    pizzasFetchingError
} = actions;