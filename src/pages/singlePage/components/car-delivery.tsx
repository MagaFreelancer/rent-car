import { useState } from 'react';
import CarVariants from './car-variants';
import { TextFieldGroup, TextFieldInput } from '@/components/textField';
interface ICarVariants {
    onChange: (value: string) => void;
    register?: any;
    errors?: any;
}
const CarDelivery = ({ onChange, register, errors }: ICarVariants) => {
    return (
        <>
            <CarVariants onChange={onChange} />
            {/* {showAddress && (
                <TextFieldGroup
                    className="mb-2"
                    error={!!errors.address}
                    errorText={errors.address?.message}
                >
                    <TextFieldInput register={register} type="text" name="address" />
                </TextFieldGroup>
            )} */}
        </>
    );
};

export default CarDelivery;
