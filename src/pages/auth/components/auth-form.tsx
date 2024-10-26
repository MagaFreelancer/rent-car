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
import { fetchRegister } from '@/redux/thunk/auth-fetch.ts';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getAuthStatus } from '@/redux/slice/auth-selectors.ts';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage, useSessionStorage } from 'usehooks-ts';

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
    const [geggr, setValueLocal, removeLocal] = useLocalStorage('user', {});
    const [testrh, setValueSession] = useSessionStorage('user', {});
    const status = useAppSelector(getAuthStatus);
    // const user = useAppSelector(getAuthData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    const onSubmit: SubmitHandler<TypeForm> = async data => {
        const registerData = {
            name: data.name,
            email: data.email,
            password: data.password,
            favorites: [],
            rewievs: [],
            moreInfo: {
                address: '',
                numberPhone: '',
            },
            createdProfile: '',
        };

        if (isLogin) {
            console.log('login', data);
        } else if (data.password !== data.repeat) {
            setError('password', { type: 'custom', message: 'Пароли не совпадают' });
            setError('repeat', { type: 'custom', message: 'Пароли не совпадают' });
        } else {
            const newUser = await dispatch(fetchRegister(registerData));

            console.log('register', data);

            if (newUser.meta.requestStatus === 'fulfilled' && data.remember) {
                setValueLocal({
                    token: newUser.payload.token,
                    name: newUser.payload.data.name,
                });

                navigate('/');
            } else {
                removeLocal();

                setValueSession({
                    token: newUser.payload.token,
                    name: newUser.payload.data.name,
                });
            }
        }
    };

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
        </form>
    );
};

export default AuthForm;
