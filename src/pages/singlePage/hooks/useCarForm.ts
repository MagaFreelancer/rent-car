import { useState } from 'react';
import useFormLogic from './useFormLogic';
import useRentCalculator from './useRentCalculator';
import useDeliveryLogic from './useDeliveryLogic';

export interface IRegistrationObj {
    days: number;
    totalSum: number;
    deliveryOption: number;
    price: number;
    decrementSum: number;
}
export interface ICarFormData {
    name: string;
    email: string;
    tel: string;
    dateOfBirth: string;
    deliveryOption: string;
    additionalInfo?: string;
}

const useCarForm = (price: number) => {
    const formLogic = useFormLogic();

    const [registrationObj, setRegistrationObj] = useState({
        days: 3,
        totalSum: price * 3,
        deliveryOption: 0,
        price,
        decrementSum: 0,
    });

    const rentCalculator = useRentCalculator({
        setRegistrationObj,
        price,
    });
    const deliveryOption = formLogic.watch('deliveryOption');
    const deliveryLogic = useDeliveryLogic({
        deliveryOption,
        setDeliveryOption: value => formLogic.setValue('deliveryOption', value),
        registrationObj,
        setRegistrationObj,
    });

    const onSubmit = (data: ICarFormData) => {
        console.log('Form Data:', { ...registrationObj, ...data });
    };

    return {
        ...formLogic,
        ...rentCalculator,
        ...deliveryLogic,
        deliveryOption,
        registrationObj,
        onSubmit,
    };
};

export default useCarForm;
