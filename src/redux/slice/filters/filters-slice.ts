import { createSlice } from '@reduxjs/toolkit';

export type TypeBrands = {
    value: string;
    status: boolean;
    label: string;
};

const initialState = {
    brands: [
        { value: 'all', status: true, label: 'Любая' },
        { value: 'bmv', status: false, label: 'BMV' },
        { value: 'mercedes', status: false, label: 'Mercedes-Benz' },
        { value: 'ford', status: false, label: 'Ford' },
    ],
    price: {
        to: 100,
        from: 500,
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
});

// export const { setBrand } = filtersSlice.actions
export default filtersSlice.reducer;
