import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const useDateRange = () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 3),
    });

    const onChangeDateRange = (newDate: DateRange | undefined) => {
        if (newDate?.from && newDate?.to) {
            const selectedDays = differenceInDays(newDate.to, newDate.from);
            if (selectedDays < 3) {
                return;
            }
        }
        setDateRange(newDate);
    }; // onChangeDate
    return { dateRange, onChangeDateRange };
};

export default useDateRange;
