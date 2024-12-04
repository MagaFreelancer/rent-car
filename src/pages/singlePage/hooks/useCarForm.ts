import { useState } from 'react';

import useFormLogic from './useFormLogic';
import useRentCalculator from './useRentCalculator';
import useDeliveryLogic from './useDeliveryLogic';
//usedelivery
//usedate
//usetotal
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
    const [registrationObj, setRegistrationObj] = useState<any>({
        days: 3,
        price,
        totalSum: price * 3,
        deliveryOption: 0,
    });
    const rentCalculator = useRentCalculator({ setRegistrationObj, price, registrationObj });
    const deliveryLogic = useDeliveryLogic({
        watch: formLogic.watch,
        setValue: formLogic.setValue,
        setRegistrationObj,
        registrationObj,
    });

    const onSubmit = (data: ICarFormData) => {
        console.log('Form Data:', {
            ...registrationObj,
            ...data,
        });
    };

    return {
        ...formLogic,
        ...rentCalculator,
        ...deliveryLogic,
        onSubmit,
        registrationObj,
    };
};

export default useCarForm;
