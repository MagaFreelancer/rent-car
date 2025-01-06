import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    authUser,
    fetchPatchProfile,
    fetchRegister,
    userAuthMe,
} from '@/redux/thunk/auth-fetch.ts';

export type TypeUser = {
    id: number;
    name: string;
    email: string;
    date: string;
    favorites: string[];
    rewievs: string[];
    address: string;
    moreInfo: { address: string; numberPhone: string };
    phone: string;
    createdProfile: string;
};

interface IInitialState {
    data: {
        data: TypeUser;
        token: string;
    };
    error: string;
    status: boolean;
    isLogged: boolean;
}

const initialState: IInitialState = {
    data: {
        data: {} as TypeUser,
        token: '',
    },
    error: '',
    status: false,
    isLogged: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetError: state => {
            state.error = '';
        },
    },
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
        builder.addCase(fetchRegister.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.isLogged = false;
            state.error = (action.payload as string) || 'Ошибка регистрации';
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
        builder.addCase(authUser.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.isLogged = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });

        builder.addCase(userAuthMe.pending, state => {
            state.status = true;
            state.isLogged = false;
        });
        builder.addCase(userAuthMe.fulfilled, (state, action) => {
            state.data.data = action.payload;
            state.status = true;
            state.isLogged = true;
        });
        builder.addCase(userAuthMe.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.isLogged = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });

        builder.addCase(fetchPatchProfile.pending, state => {
            state.status = true;
            state.isLogged = false;
        });
        builder.addCase(fetchPatchProfile.fulfilled, (state, action) => {
            state.data.data = action.payload;
            state.status = true;
            state.isLogged = true;
        });
        builder.addCase(fetchPatchProfile.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.isLogged = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });
    },
});

export const { resetError } = usersSlice.actions;

export default usersSlice.reducer;
