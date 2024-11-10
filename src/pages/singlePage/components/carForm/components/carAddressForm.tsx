import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/select";
import { TextFieldGroup, TextFieldInput } from '@/components/text-field';

const CarAddressForm = ({ onSelectChange, deliveryOption }: any) => {
    return (
        <>
            <Select onValueChange={onSelectChange} >
                <SelectTrigger className="w-full mb-3  bg-[#f2f4f8] font-medium   border-none text-placeholder  hover:text-placeholder">
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
            }</>
    )
}

export default CarAddressForm