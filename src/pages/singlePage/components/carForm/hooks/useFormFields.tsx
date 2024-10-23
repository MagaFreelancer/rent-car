import useDateRange from '@/utils/hooks/useDateRange';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carRegistrationSchema } from '@/utils/yup';
import { DateRange } from 'react-day-picker';

const useFormFields = () => {
    const [showAddress, setShowAddress] = useState(false);
    const { dateRange, setDateRange } = useDateRange({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 3),
    });

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        register,
    } = useForm({
        resolver: yupResolver(carRegistrationSchema),
        defaultValues: {
            address: 'inOffice',
        },
    });

    const onSumbit = (data: any) => {
        console.log(data);
    };
    const onChangeSelectValue = (state: string) => {
        const checkState = state !== 'undefined' ? true : false;
        setShowAddress(checkState);
        if (showAddress) {
            setValue('address', '');
        }
    };
    const onDateChange = (newDate: DateRange | undefined) => {
        if (newDate?.from && newDate?.to) {
            setValue('date', {
                from: newDate.from,
                to: newDate.to,
            });
            setDateRange(newDate);
        }
    };

    return {
        dateRange,
        onDateChange,
        onSumbit,
        showAddress,
        onChangeSelectValue,
        errors,
        register,
        handleSubmit,
    };
};
export default useFormFields;
