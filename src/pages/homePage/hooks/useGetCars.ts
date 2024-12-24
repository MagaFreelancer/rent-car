import { getCarsSelector, getCarsStatusSelector } from '@/redux/slice/cars/cars-selectors';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getCarsFetch } from '@/redux/thunk/cars-fetch';
import { useEffect } from 'react';

const useGetCars = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector(getCarsSelector);
    const statusCars = useAppSelector(getCarsStatusSelector);

    useEffect(() => {
        dispatch(getCarsFetch());
    }, []);

    return {
        cars,
        statusCars,
    };
};
export default useGetCars;
