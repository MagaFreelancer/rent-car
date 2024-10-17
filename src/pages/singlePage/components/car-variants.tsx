import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/select.tsx';
import React from 'react';
interface ICarVariants {
    onChange: (value: string) => void;
}
const CarVariants: React.FC<ICarVariants> = ({ onChange }: ICarVariants): JSX.Element => {
    return (
        <div>
            <div className="font-semiBold text-lg mb-4">Получение</div>
            <Select onValueChange={onChange}>
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
    );
};

export default CarVariants;
