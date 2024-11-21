import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carRegistrationSchema } from '@/utils/yup';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { useState } from 'react';

interface CarFormData {
    name: string;
    email: string;
    tel: string;
    dateOfBirth: string;
    deliveryOption: string;
    additionalInfo?: string;
}
const useCarForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<CarFormData>({
        resolver: yupResolver(carRegistrationSchema),
    });
    const deliveryOption = watch('deliveryOption');
    const onSelectChange = (value: string) => {
        setValue('deliveryOption', value);
    };

    const onSubmit = (data: CarFormData) => {
        console.log('Form Data:', data);
    };

    return {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        errors,
        deliveryOption,
        onSelectChange,
        onSubmit,
    };
};

export default useCarForm;
