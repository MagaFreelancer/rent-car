import { RootState } from '@/redux/store.ts';

export const getCars = (state: RootState) => state.cars.cars;
export const getCarsStatus = (state: RootState) => state.cars.status;
