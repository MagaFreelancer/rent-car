import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCarFetch } from '@/redux/thunk/car-fetch.ts';

const initialState = {
    car: {},
    status: false,
    error: '',
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCarFetch.pending, state => {
            state.status = true;
        });
        builder.addCase(getCarFetch.fulfilled, (state, action) => {
            state.car = action.payload;
            state.status = true;
        });
        builder.addCase(getCarFetch.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });
    },
});

// export const { resetError } = usersSlice.actions;

export default carSlice.reducer;
