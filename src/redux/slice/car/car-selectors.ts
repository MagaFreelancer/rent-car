import { RootState } from '@/redux/store.ts';

export const getCarSelector= (state: RootState) => state.car.car;
export const getCarStatusSelector = (state: RootState) => state.car.status;
