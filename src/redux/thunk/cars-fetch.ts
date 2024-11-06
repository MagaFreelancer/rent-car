import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';
import { AppErrorsFetch } from '@/common/errors.ts';

export const getCarsFetch = createAsyncThunk('cars/cars', async (_, { rejectWithValue }) => {
    try {
        const car = await instance.get('/cars');

        return car.data;
    } catch (error) {
        return rejectWithValue(AppErrorsFetch.Server);
    }
});
