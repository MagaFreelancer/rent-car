import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TypeBrands = {
    value: string;
    status: boolean;
    label: string;
};

interface IInitialState {
    brands: TypeBrands[];
    drives: TypeBrands[];
    price: {
        to: number | null;
        from: number | null;
    };
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
        to: null,
        from: null,
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
        setChangePriceTo(state, action: PayloadAction<number>) {
            state.price.to = action.payload;
        },
        setChangePriceFrom(state, action: PayloadAction<number>) {
            state.price.from = action.payload;
        },
    },
});

export const { setChangeBrands, setToggleDrives, setChangePriceTo, setChangePriceFrom } =
    filtersSlice.actions;
export default filtersSlice.reducer;
