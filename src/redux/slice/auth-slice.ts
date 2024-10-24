import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister } from '@/redux/thunk/auth-fetch.ts';

const initialState = {
    data: {},
    status: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRegister.pending, state => {
            state.status = true;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = false;
            state.data = action.payload;
            console.log(action.payload);
        });
        builder.addCase(fetchRegister.rejected, state => {
            state.status = false;
        });
    },
});

export default usersSlice.reducer;
