import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCarFetch } from '@/redux/thunk/car-fetch.ts';
import { ICar } from '@/common/car';
interface IInitialState {
    car: ICar;
    status: boolean;
    error: string;
}
const initialState: IInitialState = {
    car: {} as ICar,
    status: false,
    error: '',
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCarFetch.pending, state => {
            state.status = false;
        });
        builder.addCase(getCarFetch.fulfilled, (state, action) => {
            state.car = action.payload;
            state.status = true;
        });
        builder.addCase(getCarFetch.rejected, (state, action: PayloadAction<unknown>) => {
            state.status = false;
            state.error = (action.payload as string) || 'Ошибка авторизации';
        });
    },
});

export default carSlice.reducer;
