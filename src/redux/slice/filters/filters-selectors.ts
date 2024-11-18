import { RootState } from '@/redux/store.ts';

export const getFilters = (state: RootState) => state.filters;
