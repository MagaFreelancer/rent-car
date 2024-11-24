import { RootState } from '@/redux/store.ts';

export const getFilters = (state: RootState) => state.filters;
export const getBrandActiveItem = (state: RootState) =>
    state.filters.brands.find(item => item.status);
export const getDrivesActiveItems = (state: RootState) =>
    state.filters.drives.filter(item => item.status);
export const getBrands = (state: RootState) => state.filters.brands;
export const getDrives = (state: RootState) => state.filters.drives;
