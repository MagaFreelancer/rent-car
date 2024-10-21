import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import { addDays, format, differenceInDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { Button } from '@/shared/button';
import { Calendar } from '@/shared/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover';
interface ICarDateProps {
    dateRange: DateRange | undefined;
    onDateChange: (newDate: DateRange | undefined) => void;
    errors?: any;
}
const CarDate: React.FC<ICarDateProps> = ({ dateRange, errors, onDateChange }: ICarDateProps) => {
    const days = differenceInDays(dateRange?.to || new Date(), dateRange?.from || new Date());

    return (
        <div>
            <div className="font-semiBold text-lg mb-4">Дата аренды</div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={'outline'}
                        className={cn(
                            'w-full justify-start text-left font-normal',
                            !dateRange && 'text-muted-foreground'
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                            dateRange.to ? (
                                <>
                                    {format(dateRange.from, 'LLL dd, y')} -{' '}
                                    {format(dateRange.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(dateRange.from, 'LLL dd, y')
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <span className="ml-auto">{days} days</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={newDate => {
                            onDateChange(newDate);
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
            {errors?.date && <div className="text-red-500">{errors?.date?.message}</div>}
        </div>
    );
};

export default CarDate;
