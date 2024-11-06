import { RootState } from '@/redux/store.ts';

export const getCar = (state: RootState) => state.car.car;
export const getCarStatus = (state: RootState) => state.car.status;
