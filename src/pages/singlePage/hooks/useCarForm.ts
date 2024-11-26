import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carRegistrationSchema } from '@/utils/yup';
import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

interface CarFormData {
    name: string;
    email: string;
    tel: string;
    dateOfBirth: string;
    deliveryOption: string;
    additionalInfo?: string;
}
const today = new Date();
const useCarForm = (price: number) => {
    const [registrationObj, setRegistrationObj] = useState({
        days: 3,
        price: price,
        deliveryOption: 0,
    });
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
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: today,
        to: addDays(today, 3),
    });

    const onChangeRentDate = (newDate: DateRange | undefined) => {
        if (!newDate?.from) {
            setDateRange(undefined);
            return;
        }

        if (!newDate.to) {
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }

        const selectedDays = differenceInDays(newDate.to, newDate.from);
        if (selectedDays < 3) {
            alert('Минимальный период между датами должен быть 3 дня.');
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }

        setRegistrationObj({
            ...registrationObj,
            days: selectedDays,
        });
        setDateRange(newDate);
    };

    const deliveryOption = watch('deliveryOption');
    const onSelectChange = (value: string) => {
        let sum = 0;
        setValue('deliveryOption', value);
        if (value === 'delivery') {
            sum = 100;
        }
        setRegistrationObj({
            ...registrationObj,
            deliveryOption: sum,
        });
    };
    const onSubmit = (data: CarFormData) => {
        console.log('Form Data:', {
            ...registrationObj,
            ...data,
        });
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
        onChangeRentDate,
        RentDate: dateRange,
        registrationObj,
    };
};

export default useCarForm;
