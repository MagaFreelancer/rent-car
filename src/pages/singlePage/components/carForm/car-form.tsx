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

import useInput from '@/utils/hooks/useInput';
import {
    TextFieldError,
    TextFieldInput,
    TextFieldLabel,
    TextFieldGroup,
    TextFieldTextArea,
    TextFieldShow,
} from '@/components/textField';
import usePasswordInput from '@/utils/hooks/usePasswordInput';

const CarForm = () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });
    const titleClsName = 'font-semiBold text-lg mb-4';
    const textFieldsClsName = 'mb-2';
    const inputName = useInput();
    const inputEmail = useInput();
    const inputPhone = useInput();
    const inputTextarea = useInput();
    const { toggleInputType, show } = usePasswordInput();
    const { value, onChangeInputValue } = useInput();
    return (
        <form className="grid gap-4 py-4 ">
            <div>
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
            <div>
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
                                    setDate(newDate);
                                }}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div>
                <div className={titleClsName}>Данные основного водителя</div>
                <div className={textFieldsClsName}>
                    <TextFieldGroup label="Name">
                        <TextFieldLabel />
                        <TextFieldInput
                            type="text"
                            value={inputName.value}
                            onChange={inputName.onChangeInputValue}
                        />
                        <TextFieldError />
                    </TextFieldGroup>
                </div>
                <div className={textFieldsClsName}>
                    <TextFieldGroup label="Date">
                        <TextFieldLabel />
                        <TextFieldInput type="date" />
                        <TextFieldError />
                    </TextFieldGroup>
                </div>
                <div className={textFieldsClsName}>
                    <TextFieldGroup label="Email">
                        <TextFieldLabel />
                        <TextFieldInput
                            type="email"
                            value={inputEmail.value}
                            onChange={inputEmail.onChangeInputValue}
                        />
                        <TextFieldError />
                    </TextFieldGroup>
                </div>
                <div className="">
                    <TextFieldGroup label="Phone">
                        <TextFieldLabel />
                        <TextFieldInput
                            type="phone"
                            value={inputPhone.value}
                            onChange={inputPhone.onChangeInputValue}
                        />
                        <TextFieldError />
                    </TextFieldGroup>
                </div>
                <div className={textFieldsClsName}>
                    <TextFieldGroup label="Сообщение">
                        <TextFieldLabel />
                        <TextFieldTextArea
                            value={inputTextarea.value}
                            onChange={inputTextarea.onChangeInputValue}
                        />
                        <TextFieldError />
                    </TextFieldGroup>
                </div>
                <div className="">
                    <TextFieldGroup type={show ? 'password' : 'text'}>
                        <TextFieldInput value={value} onChange={onChangeInputValue} />
                        <TextFieldShow onToggle={toggleInputType} />
                    </TextFieldGroup>
                </div>
            </div>
        </form>
    );
};

export default CarForm;
