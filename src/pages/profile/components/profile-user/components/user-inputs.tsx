import {
    TextFieldError,
    TextFieldGroup,
    TextFieldInput,
    TextFieldLabel,
} from '@/components/text-field.tsx';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputsProfileChange } from '@/pages/profile/components/profile-user/profile-user.tsx';

interface IUserInputsProps {
    register: UseFormRegister<InputsProfileChange>;
    errors: FieldErrors<InputsProfileChange>;
}

const UserInputs = ({ register, errors }: IUserInputsProps) => {
    return (
        <>
            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">личная информация</p>
                <TextFieldGroup error={!!errors.name} errorText={errors.name?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Имя и фамилия"
                        register={register}
                        name="name"
                        type="text"
                    />
                    <TextFieldError />
                </TextFieldGroup>

                <TextFieldGroup error={!!errors.date} type="date" errorText={errors.date?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Дата рождения"
                        register={register}
                        name="date"
                    />
                    <TextFieldError />
                </TextFieldGroup>
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">дополнительная информация</p>

                <TextFieldGroup error={!!errors.phone} errorText={errors.phone?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Телефон"
                        register={register}
                        name="phone"
                    />
                    <TextFieldError />
                </TextFieldGroup>

                <TextFieldGroup
                    error={!!errors.email}
                    type="email"
                    errorText={errors.email?.message}
                >
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Почта"
                        register={register}
                        name="email"
                    />
                    <TextFieldError />
                </TextFieldGroup>
            </div>
        </>
    );
};

export default UserInputs;
