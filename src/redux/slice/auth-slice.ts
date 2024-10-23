import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister } from '@/redux/thunk/auth-fetch.ts';

const initialState = {
    entities: [],
    loading: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRegister.pending, () => {
            console.log('pending');
        });
        builder.addCase(fetchRegister.fulfilled, () => {
            console.log('fulfilled');
        });
        builder.addCase(fetchRegister.rejected, () => {
            console.log('rejected');
        });
    },
});

export default usersSlice.reducer;
