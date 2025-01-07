import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import {
    TextFieldError,
    TextFieldGroup,
    TextFieldInput,
    TextFieldLabel,
} from '@/components/text-field.tsx';
import { TypeLogin, TypeRegister } from '@/pages/auth/components/hook/useAuthForm.ts';

interface IPropsLogin {
    register: UseFormRegister<TypeRegister | TypeLogin>;
    errors: FieldErrors<TypeRegister>;
    reset: () => void;
    disabled: boolean;
}

const Register = ({ register, errors, reset, disabled }: IPropsLogin) => {
    return (
        <>
            <TextFieldGroup
                className="mb-3"
                error={!!errors.name}
                errorText={errors.name?.message}
                label="Имя"
            >
                <TextFieldLabel />
                <TextFieldInput
                    className="transition rounded py-6 px-5"
                    placeholder="Ваше имя"
                    register={register}
                    name="name"
                    disabled={disabled}
                />
                <TextFieldError />
            </TextFieldGroup>

            <TextFieldGroup
                className="mb-3"
                error={!!errors.email}
                errorText={errors.email?.message}
                label="Email"
            >
                <TextFieldLabel />
                <TextFieldInput
                    className="transition rounded py-6 px-5"
                    placeholder="Введите email адрес"
                    register={register}
                    name="email"
                    disabled={disabled}
                />
                <TextFieldError />
            </TextFieldGroup>

            <TextFieldGroup
                className="mb-3"
                error={!!errors.password}
                errorText={errors.password?.message}
                label="Пароль"
            >
                <TextFieldLabel />
                <TextFieldInput
                    className="transition rounded py-6 px-5"
                    placeholder="Придумайте пароль"
                    register={register}
                    name="password"
                    disabled={disabled}
                />
                <TextFieldError />
            </TextFieldGroup>

            <TextFieldGroup
                className="mb-3"
                error={!!errors.repeat}
                errorText={errors.repeat?.message}
                label="Повторите пароль"
            >
                <TextFieldLabel />
                <TextFieldInput
                    className="transition rounded py-6 px-5"
                    placeholder="Придумайте пароль"
                    register={register}
                    name="repeat"
                    disabled={disabled}
                />
                <TextFieldError />
            </TextFieldGroup>

            <p className="mt-3">
                Уже есть аккаунт?{'\u00A0'}
                <NavLink onClick={() => reset()} className="hover:underline" to="/auth/login">
                    Авторизоваться
                </NavLink>
            </p>
        </>
    );
};

export default Register;
