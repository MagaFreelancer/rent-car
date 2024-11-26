import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const today = new Date();

const useDateRange = () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: today,
        to: addDays(today, 3),
    });

    const onChangeDateRange = (newDate: DateRange | undefined) => {
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
        setDateRange(newDate);
    };

    return { dateRange, onChangeDateRange };
};

export default useDateRange;
