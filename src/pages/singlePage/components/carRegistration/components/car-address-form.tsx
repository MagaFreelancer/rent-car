import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/select';
import { TextFieldError, TextFieldGroup, TextFieldInput } from '@/components/text-field';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ICarFormData } from '@/pages/singlePage/hooks/useCarForm';

interface ICarAddressFormProps {
    register: UseFormRegister<ICarFormData>;
    errors: FieldErrors<ICarFormData>;
    onSelectChange: (value: string) => void;
    deliveryOption: string;
}
const CarAddressForm = ({
    onSelectChange,
    deliveryOption,
    register,
    errors,
}: ICarAddressFormProps) => {
    return (
        <>
            <Select onValueChange={onSelectChange}>
                <SelectTrigger className="w-full mb-3  bg-[#f2f4f8] font-medium   border-none text-placeholder  hover:text-placeholder">
                    <SelectValue placeholder="Взять из офиса" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="pickup">Взять из офиса</SelectItem>
                        <SelectItem value="delivery">Доставка по городу +100</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {deliveryOption === 'delivery' && (
                <TextFieldGroup
                    className="mb-3"
                    error={!!errors.additionalInfo}
                    errorText={errors.additionalInfo?.message}
                >
                    <TextFieldInput
                        placeholder="Адрес"
                        register={register}
                        name="additionalInfo"
                        className="bg-[#f2f4f8] font-medium  placeholder:text-placeholder"
                    />
                    <TextFieldError />
                </TextFieldGroup>
            )}
        </>
    );
};

export default CarAddressForm;
