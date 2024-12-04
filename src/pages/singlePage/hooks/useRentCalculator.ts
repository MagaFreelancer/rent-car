import { addDays, differenceInDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { IRegistrationObj } from './useCarForm';
import { useState } from 'react';
import useCarSale from '@/utils/hooks/useCarSale';

interface IUseRentCalculator {
    setRegistrationObj: React.Dispatch<React.SetStateAction<IRegistrationObj>>;
    price: number;
}

const today = new Date();

const useRentCalculator = ({ setRegistrationObj, price }: IUseRentCalculator) => {
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
        const days = differenceInDays(newDate.to, newDate.from);

        if (days < 3) {
            alert('Минимальный период аренды — 3 дня.');
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }
        const { decrementSum, totalSum } = useCarSale(price, days);

        setRegistrationObj(prev => ({
            ...prev,
            days,
            totalSum,
            decrementSum,
        }));
        setDateRange(newDate);
    };

    return {
        dateRange,
        onChangeRentDate,
    };
};

export default useRentCalculator;
