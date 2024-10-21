import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/shared/button';
import Login from '@/pages/auth/components/login/login.tsx';
import Register from '@/pages/auth/components/register/register.tsx';
import { loginSchema, registerSchema } from '@/utils/yup.ts';
import {
    CheckboxLabelCustom,
    CheckboxLabelGroup,
    CheckboxLabelValue,
} from '@/components/checkbox-label.tsx';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
    repeat?: string;
    remember?: boolean;
};

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
    const {
        handleSubmit,
        register,
        reset,
        setError,
        setValue,
        formState: { errors },
    } = useForm<TypeForm>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    const onSubmit: SubmitHandler<TypeForm> = data => {
        const { password, repeat } = data;

        if (isLogin) {
            console.log('login', data);
        } else if (password !== repeat) {
            setError('password', { type: 'custom', message: 'Пароли не совпадают' });
            setError('repeat', { type: 'custom', message: 'Пароли не совпадают' });
        } else {
            console.log('register', data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 p-10">
            {isLogin ? (
                <Login register={register} errors={errors} reset={reset} />
            ) : (
                <Register register={register} errors={errors} reset={reset} />
            )}

            <Button className="w-full p-6 my-4" variant="custom" type="submit">
                {isLogin ? 'Войти в кабинет' : 'Создать аккаунт'}
            </Button>

            <CheckboxLabelGroup name="remember">
                <CheckboxLabelCustom
                    onChange={checked => setValue('remember', checked)}
                    register={register}
                />
                <CheckboxLabelValue label="Запомнить меня" />
            </CheckboxLabelGroup>
        </form>
    );
};

export default AuthForm;
