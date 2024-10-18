import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/shared/button';
import Login from '@/pages/auth/components/login/login.tsx';
import Register from '@/pages/auth/components/register/register.tsx';
import { loginSchema, registerSchema } from '@/utils/yup.ts';
import { Checkbox } from '@/shared/checkbox.tsx';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
};

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TypeForm>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    const onSubmit: SubmitHandler<TypeForm> = data => {
        if (isLogin) {
            console.log('login', data);
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

            <div className="flex items-center space-x-2">
                <Checkbox className="w-6 h-6 border-[##D6D6D6] rounded-none" id="remember" />
                <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Запомнить меня
                </label>
            </div>
        </form>
    );
};

export default AuthForm;
