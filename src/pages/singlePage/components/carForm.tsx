import React from 'react'
import { TextFieldGroup, TextFieldInput, TextFieldTextArea } from '@/components/text-field';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shared/select";

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/shared/button"
import { Calendar } from "@/shared/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/popover"

const CarForm = ({ onSelectChange, deliveryOption }: any) => {

    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })
    return (
        <form >
            <Select  onValueChange={onSelectChange} >
                <SelectTrigger  className="w-full mb-3  bg-[#f2f4f8] font-medium   border-none text-placeholder  hover:text-placeholder">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="pickup">Взять из офиса</SelectItem>
                        <SelectItem value="delivery">Доставка по городу +100</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {
                deliveryOption === "delivery" && <TextFieldGroup className="mb-3">
                    <TextFieldInput placeholder="Адрес" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
                </TextFieldGroup>
            }
            <div className={cn("grid gap-2 mb-3")}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                                "p-2 w-fll justify-start text-left bg-[#f2f4f8] font-medium   border-none text-placeholder  hover:text-placeholder",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className='w-5 h-5 mr-2 text-placeholder' />
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "LLL dd, y")} -{" "}
                                        {format(date.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(date.from, "LLL dd, y")
                                )
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Имя и Фамилия" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Дата рождения" type="date" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Почта" type="email" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Номер телефона" type="tel" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldTextArea placeholder="Комментарии" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
        </form>
    )
}

export default CarForm