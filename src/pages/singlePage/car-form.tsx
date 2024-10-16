import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/select.tsx';
import { cn } from '@/lib/utils';

import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { Button } from '@/shared/button';
import { Calendar } from '@/shared/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover';
import { Label } from '@/shared/label';
import { Input } from '@/shared/input';

const CarForm = () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });
    const titleClsName = 'font-semiBold text-lg mb-2';

    return (
        <form className="grid gap-4 py-4">
            <div className="">
                <div className={titleClsName}>Получение</div>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Взять из офиса" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="1">Взять из офиса</SelectItem>
                            <SelectItem value="2">Доставка по городу 100$</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="">
                <div className={titleClsName}>Дата аренды</div>
                <div className={cn('grid gap-2')}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={'outline'}
                                className={cn(
                                    'w-full justify-start text-left font-normal',
                                    !date && 'text-muted-foreground'
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, 'LLL dd, y')} -{' '}
                                            {format(date.to, 'LLL dd, y')}
                                        </>
                                    ) : (
                                        format(date.from, 'LLL dd, y')
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <span className="ml-auto">days</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={newDate => {
                                    console.log(newDate);
                                    setDate(newDate);
                                }}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="">
                <div className={titleClsName}>Данные основного водителя</div>
                <div className="">
                    <Label htmlFor="email">Email</Label>
                    <Input type="tel" id="email" placeholder="tel" />
                </div>
                <div className="">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
            </div>
        </form>
    );
};

export default CarForm;
