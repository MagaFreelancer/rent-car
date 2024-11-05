import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TypeForm } from '@/pages/auth/auth.tsx';
import { NavLink } from 'react-router-dom';
import {
    TextFieldError,
    TextFieldGroup,
    TextFieldInput,
    TextFieldLabel,
} from '@/components/text-field';

interface IPropsLogin {
    register: UseFormRegister<TypeForm>;
    errors: FieldErrors<TypeForm>;
    reset: () => void;
}

const Register = ({ register, errors, reset }: IPropsLogin) => {
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
                    className="rounded-none py-6 px-5"
                    placeholder="Ваше имя"
                    register={register}
                    name="name"
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
                    className="rounded-none py-6 px-5"
                    placeholder="Введите email адрес"
                    register={register}
                    name="email"
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
                    className="rounded-none py-6 px-5"
                    placeholder="Придумайте пароль"
                    register={register}
                    name="password"
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
                    className="rounded-none py-6 px-5"
                    placeholder="Придумайте пароль"
                    register={register}
                    name="repeat"
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
