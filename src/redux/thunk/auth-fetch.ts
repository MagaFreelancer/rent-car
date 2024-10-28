import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';
import { IUser } from '@/pages/auth/auth.tsx';
import { TypeLogin } from '@/pages/auth/components/hook/useAuthForm.ts';

export const fetchRegister = createAsyncThunk('user/register', async (data: IUser) => {
    try {
        const response = await instance.post('/register', data);

        return response.data;
    } catch (error) {
        return error;
    }
});

export const authUser = createAsyncThunk('user/login', async (data: TypeLogin) => {
    try {
        const user = await instance.post(`/auth`, data);

        return user.data;
    } catch (error) {
        return error;
    }
});

export const userAuthMe = createAsyncThunk('auth/authMe', async (token: string) => {
    try {
        const response = await instance.get('/auth_me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        return error;
    }
});
