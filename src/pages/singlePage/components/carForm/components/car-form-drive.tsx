import {
    TextFieldError,
    TextFieldInput,
    TextFieldLabel,
    TextFieldGroup,
    TextFieldTextArea,
} from '@/components/textField';

const CarFormDriver = ({ register, errors }: any) => {
    const textFieldsClsName = 'mb-2';

    return (
        <div>
            <div className="font-semiBold text-lg mb-4">Данные основного водителя</div>
            <TextFieldGroup
                className={textFieldsClsName}
                error={!!errors.name}
                errorText={errors.name?.message}
                label="Name"
            >
                <TextFieldLabel />
                <TextFieldInput register={register} type="text" name="name" />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup
                className={textFieldsClsName}
                label="Date of Birth"
                error={!!errors.dateOfBirth}
                errorText={errors.dateOfBirth?.message}
            >
                <TextFieldLabel />
                <TextFieldInput type="dateOfBirth" register={register} name="dateOfBirth" />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup
                className={textFieldsClsName}
                label="Email"
                error={!!errors.email}
                errorText={errors.email?.message}
            >
                <TextFieldLabel />
                <TextFieldInput type="email" register={register} name="email" />

                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup
                className={textFieldsClsName}
                label="Phone"
                error={!!errors.phone}
                errorText={errors.phone?.message}
            >
                <TextFieldLabel />
                <TextFieldInput register={register} name="phone" type="phone" />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup
                className={textFieldsClsName}
                label="Message"
                error={!!errors.message}
                errorText={errors.message?.message}
            >
                <TextFieldLabel />
                <TextFieldTextArea register={register} name="message" />
                <TextFieldError />
            </TextFieldGroup>
        </div>
    );
};

export default CarFormDriver;
