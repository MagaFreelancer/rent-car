import { RootState } from '@/redux/store.ts';

export const getCarsSelector = (state: RootState) => state.cars.cars;
export const getCarsStatusSelector = (state: RootState) => state.cars.status;
