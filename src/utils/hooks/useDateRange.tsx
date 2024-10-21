import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const useDateRange = (initialRange: DateRange) => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(initialRange);

    return { dateRange, setDateRange };
};

export default useDateRange;
