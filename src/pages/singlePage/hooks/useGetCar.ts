import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import { getCarFetch } from '@/redux/thunk/car-fetch';
import { getCarStatusSelector, getCarSelector } from '@/redux/slice/car/car-selectors';
import { useParams } from 'react-router-dom';
import { ICar } from '@/common/car';

const useGetCar = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const statusCar = useAppSelector(getCarStatusSelector);
    const car: ICar = useAppSelector(getCarSelector);

    useEffect(() => {
        const idNumber = Number(id);
        dispatch(getCarFetch(idNumber));
    }, []);

    return {
        statusCar,
        car,
    };
};

export default useGetCar;
