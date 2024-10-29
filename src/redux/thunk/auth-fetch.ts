import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';
import { IUser } from '@/pages/auth/auth.tsx';
import { TypeLogin } from '@/pages/auth/components/hook/useAuthForm.ts';
import { AxiosError } from 'axios';
import { AppErrorsFetch } from '@/common/errors.ts';

export const fetchRegister = createAsyncThunk(
    'user/register',
    async (data: IUser, { rejectWithValue }) => {
        try {
            const response = await instance.post('/register', data);

            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 401) {
                return rejectWithValue(AppErrorsFetch.Exists);
            }

            return rejectWithValue(AppErrorsFetch.Server);
        }
    }
);

export const authUser = createAsyncThunk(
    'user/login',
    async (data: TypeLogin, { rejectWithValue }) => {
        try {
            const user = await instance.post(`/auth`, data);

            return user.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 401) {
                return rejectWithValue(AppErrorsFetch.AuthLogin);
            }

            return rejectWithValue(AppErrorsFetch.Server);
        }
    }
);

export const userAuthMe = createAsyncThunk(
    'auth/authMe',
    async (token: string, { rejectWithValue }) => {
        try {
            const response = await instance.get('/auth_me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(AppErrorsFetch.Server);
        }
    }
);
