import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TypeBrands = {
    value: string;
    status: boolean;
    label: string;
};

interface IInitialState {
    brands: TypeBrands[];
    drives: TypeBrands[];
    price: { from: number | undefined; to: number | undefined };
}

const initialState: IInitialState = {
    brands: [
        { value: 'all', status: true, label: 'Любая' },
        { value: 'bmv', status: false, label: 'BMV' },
        { value: 'mercedes', status: false, label: 'Mercedes-Benz' },
        { value: 'ford', status: false, label: 'Ford' },
    ],
    drives: [
        { value: 'all', status: true, label: 'Выбрать все' },
        { value: 'front', status: false, label: 'Передний' },
        { value: 'rear', status: false, label: 'Задний' },
        { value: 'full', status: false, label: 'Полный' },
    ],
    price: {
        from: undefined,
        to: undefined,
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setChangeBrands(state, action: PayloadAction<string>) {
            state.brands.forEach(brand => {
                brand.status = brand.value === action.payload;
            });
        },
        setToggleDrives(state, action: PayloadAction<string>) {
            state.drives = state.drives
                .map(drive => {
                    if (action.payload === 'all') {
                        return { ...drive, status: drive.value === 'all' };
                    } else if (drive.value === action.payload) {
                        return { ...drive, status: !drive.status };
                    }

                    return drive;
                })
                .map((drive, index, drives) => {
                    if (index === 0) {
                        const areAllOthersFalse = drives.slice(1).every(d => !d.status);
                        return { ...drive, status: areAllOthersFalse };
                    }

                    return drive;
                });
        },
        setChangePrice(
            state,
            action: PayloadAction<{ from: number | undefined; to: number | undefined }>
        ) {
            state.price = action.payload;
        },
    },
});

export const { setChangeBrands, setToggleDrives, setChangePrice } = filtersSlice.actions;
export default filtersSlice.reducer;
