import { addDays, differenceInDays, isBefore } from 'date-fns';
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
            // Если начальная дата не выбрана, сбрасываем состояние
            setDateRange(undefined);
            return;
        }

        // Если выбрана только начальная дата, сбрасываем `to` и обновляем `from`
        if (!newDate.to) {
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }

        // Проверяем минимальный диапазон между `from` и `to`
        const selectedDays = differenceInDays(newDate.to, newDate.from);
        if (selectedDays < 3) {
            alert('Минимальный период между датами должен быть 3 дня.');
            setDateRange({ from: newDate.from, to: undefined });
            return;
        }

        // Если всё корректно, обновляем диапазон
        setDateRange(newDate);
    };

    return { dateRange, onChangeDateRange };
};

export default useDateRange;
