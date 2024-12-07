import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TypeSort = {
    status: boolean;
    value: string;
    label: string;
};

export type TypeBrands = {
    value: string;
    status: boolean;
    label: string;
};

export type TypeDrives = {
    value: string;
    status: boolean;
    label: string;
};

type CarModel = {
    value: string;
    status: boolean;
    label: string;
};

export type TypeCarsModel = {
    [brand: string]: CarModel[] | string | null;
};

interface IInitialState {
    model: TypeCarsModel;
    brands: TypeBrands[];
    drives: TypeDrives[];
    price: { from: number | undefined; to: number | undefined };
    sort: TypeSort[];
}

const initialState: IInitialState = {
    model: {
        // all: { value: 'all', status: true, label: 'Выбрать всё' },
        bmv: [
            { value: 'bmv', status: false, label: 'bmv' },
            { value: 'x2', status: false, label: 'X2' },
            { value: 'x3', status: false, label: 'X3' },
            { value: 'x4', status: false, label: 'X4' },
            { value: 'x5', status: false, label: 'X5' },
        ],
        mercedes: [
            { value: 'mersce', status: false, label: 'mersce' },
            { value: 'x2', status: false, label: 'X2' },
            { value: 'x3', status: false, label: 'X3' },
            { value: 'x4', status: false, label: 'X4' },
            { value: 'x5', status: false, label: 'X5' },
        ],
    },
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
    sort: [
        { value: 'all', status: true, label: 'По умолчанию' },
        { value: 'cheap', status: false, label: 'По цене (сначала дешевле)' },
        { value: 'expensive', status: false, label: 'По цене (сначала дороже)' },
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
        setChangeSort(state, action: PayloadAction<string>) {
            state.sort.forEach(sortItem => {
                sortItem.status = sortItem.value === action.payload;
            });
        },
        setToggleDrives(state, action: PayloadAction<string>) {
            console.log(true);
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

export const { setChangeBrands, setToggleDrives, setChangePrice, setChangeSort } =
    filtersSlice.actions;
export default filtersSlice.reducer;
