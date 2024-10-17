import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const useDateRange = (initialRange: DateRange) => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(initialRange);

    const onDateChange = (newDate: DateRange | undefined) => {
        setDateRange(newDate);
    };

    return { dateRange, onDateChange };
};

export default useDateRange;
