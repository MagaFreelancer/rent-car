import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/utils/axios.ts';
import { AppErrorsFetch } from '@/common/errors.ts';

export const getCarFetch = createAsyncThunk('car/car', async (id: number, { rejectWithValue }) => {
    try {
        const car = await instance.get(`/cars/${id}`);

        return car.data;
    } catch (error) {
        return rejectWithValue(AppErrorsFetch.Server);
    }
});
