import React from 'react'
import { TextFieldGroup, TextFieldInput } from '@/components/text-field';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shared/select";
const CarForm = ({ onSelectChange, deliveryOption }: any) => {
    return (
        <form >
            <Select onValueChange={onSelectChange} >
                <SelectTrigger className="w-[180px]">
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
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Имя" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Фамилия" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Имя" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
        </form>
    )
}

export default CarForm