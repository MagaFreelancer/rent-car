import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCarsFetch } from '@/redux/thunk/cars-fetch.ts';

const initialState = {
    cars: [],
    status: false,
    error: '',
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCarsFetch.pending, state => {
            state.status = true;
        });
        builder.addCase(getCarsFetch.fulfilled, (state, action) => {
            state.cars = action.payload;
            state.status = true;
        });
        builder.addCase(getCarsFetch.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });
    },
});

// export const { resetError } = usersSlice.actions;

export default carsSlice.reducer;
