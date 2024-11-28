import { RootState } from '@/redux/store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const getFilteredItems = (state: RootState) => state.filters;

export const getBrandActiveItem = createSelector(
    (state: RootState) => state.filters.brands,
    brands => brands.find(item => item.status)
);

export const getSortActiveItem = createSelector(
    (state: RootState) => state.filters.sort,
    sortItem => sortItem.find(item => item.status)
);

export const getDrivesActiveItems = createSelector(
    (state: RootState) => state.filters.drives,
    drives => drives.filter(item => item.status)
);

export const getBrands = createSelector(getFilteredItems, filters => filters.brands);

export const getDrives = createSelector(getFilteredItems, filters => filters.drives);
export const getPrice = (state: RootState) => state.filters.price;
export const getSort = (state: RootState) => state.filters.sort;
