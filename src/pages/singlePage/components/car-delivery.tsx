import CarVariants from './car-variants';
import { TextFieldError, TextFieldGroup, TextFieldInput } from '@/components/textField';
interface ICarVariants {
    onChange: (value: string) => void;
    register?: any;
    errors?: any;
    showAddress?: boolean;
}
const CarDelivery = ({ onChange, register, errors, showAddress }: ICarVariants) => {
    return (
        <>
            <CarVariants onChange={onChange} />
            {showAddress && (
                <TextFieldGroup
                    className="mb-2"
                    error={!!errors.address}
                    errorText={errors.address?.message}
                >
                    <TextFieldInput register={register} type="text" name="address" />
                    <TextFieldError />
                </TextFieldGroup>
            )}
        </>
    );
};

export default CarDelivery;
