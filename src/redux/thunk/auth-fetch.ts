import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';

export const fetchRegister = createAsyncThunk('user/register', async data => {
    const response = await instance.post('/register', data);
    console.log(response);
});
