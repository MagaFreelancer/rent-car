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

const Login = ({ register, errors, reset }: IPropsLogin) => {
    return (
        <>
            <TextFieldGroup error={!!errors.email} errorText={errors.email?.message} label="Email">
                <TextFieldLabel />
                <TextFieldInput
                    className="transition rounded py-6 px-5"
                    placeholder="Введите данные для авторизации"
                    register={register}
                    name="email"
                />
                <TextFieldError />
            </TextFieldGroup>

            <TextFieldGroup
                error={!!errors.password}
                errorText={errors.password?.message}
                label="Пароль"
            >
                <TextFieldLabel />
                <TextFieldInput
                    className="rounded-none py-6 px-5"
                    placeholder="Введите пароль от аккаунта"
                    register={register}
                    name="password"
                />
                <TextFieldError />
            </TextFieldGroup>

            <p className="mt-3">
                Еще нет аккаунта?{'\u00A0'}
                <NavLink onClick={() => reset()} className="hover:underline" to="/auth/register">
                    Зарегестироваться
                </NavLink>
            </p>
        </>
    );
};

export default Login;
