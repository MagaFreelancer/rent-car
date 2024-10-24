import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';
import { TypeForm } from '@/pages/auth/components/auth-form.tsx';

export const fetchRegister = createAsyncThunk('user/register', async (data: TypeForm) => {
    try {
        const response = await instance.post('/register', data);

        return response.data;
    } catch (error) {
        return error;
    }
});
