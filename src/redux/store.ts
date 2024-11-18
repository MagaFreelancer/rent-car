import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import usersSlice from '@/redux/slice/auth/auth-slice.ts';
import carSlice from '@/redux/slice/car/car-slice.ts';
import carsSlice from '@/redux/slice/cars/cars-slice.ts';
import filtersSlice from '@/redux/slice/filters/filters-slice.ts';

export const store = configureStore({
    reducer: {
        user: usersSlice,
        car: carSlice,
        cars: carsSlice,
        filters: filtersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
