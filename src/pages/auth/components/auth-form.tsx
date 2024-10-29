import React from 'react';
import { Button } from '@/shared/button';
import Login from '@/pages/auth/components/login/login.tsx';
import Register from '@/pages/auth/components/register/register.tsx';
import {
    CheckboxLabelCustom,
    CheckboxLabelGroup,
    CheckboxLabelValue,
} from '@/components/checkbox-label.tsx';
import { useAppSelector } from '@/redux/store.ts';
import { getAuthError, getAuthStatus } from '@/redux/slice/auth-selectors.ts';
import { useAuthForm } from '@/pages/auth/components/hook/useAuthForm.ts';
import { useAuthStorage } from '@/pages/auth/components/hook/useAuthStorage.ts';
import ErrorText from '@/shared/error-text.tsx';

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
    const status = useAppSelector(getAuthStatus);
    const error = useAppSelector(getAuthError);
    const { saveUser } = useAuthStorage();

    const { handleSubmit, register, reset, errors, onSubmit, setValue } = useAuthForm(
        isLogin,
        saveUser
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 p-10">
            {isLogin ? (
                <Login register={register} errors={errors} reset={reset} />
            ) : (
                <Register register={register} errors={errors} reset={reset} />
            )}

            <Button className="w-full p-6 my-4" loading={status} variant="custom" type="submit">
                {isLogin ? 'Войти в кабинет' : 'Создать аккаунт'}
            </Button>

            <CheckboxLabelGroup name="remember">
                <CheckboxLabelCustom onChange={checked => setValue('remember', checked)} />
                <CheckboxLabelValue label="Запомнить меня" />
            </CheckboxLabelGroup>

            {error && <ErrorText text={error} />}
        </form>
    );
};

export default AuthForm;
