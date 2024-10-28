import { createSlice } from '@reduxjs/toolkit';
import { authUser, fetchRegister } from '@/redux/thunk/auth-fetch.ts';

const initialState = {
    data: {},
    status: false,
    isLogged: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRegister.pending, state => {
            state.status = true;
            state.isLogged = false;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = false;
            state.isLogged = true;
        });
        builder.addCase(fetchRegister.rejected, state => {
            state.status = false;
            state.isLogged = false;
        });

        builder.addCase(authUser.pending, state => {
            state.status = true;
            state.isLogged = false;
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = true;
            state.isLogged = true;
        });
        builder.addCase(authUser.rejected, state => {
            state.status = false;
            state.isLogged = false;
        });
    },
});

export default usersSlice.reducer;
