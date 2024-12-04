import { addDays, differenceInDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import useCarSale from '@/utils/hooks/useCarSale';
import { useState } from 'react';

interface IuseRentCalculator {
    setRegistrationObj: any;
    price: number;
    registrationObj: any;
}

const today = new Date();
const useRentCalculator = ({ setRegistrationObj, price, registrationObj }: IuseRentCalculator) => {
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
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }
        const { decrementSum, totalSum } = useCarSale(price, selectedDays);

        setRegistrationObj({
            ...registrationObj,
            days: selectedDays,
            decrementSum,
            totalSum,
        });
        setDateRange(newDate);
    };

    return {
        dateRange,
        setDateRange,
        onChangeRentDate,
    };
};

export default useRentCalculator;
