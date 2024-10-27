import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/store';
import { fetchRegister } from '@/redux/thunk/auth-fetch';
import { loginSchema, registerSchema } from '@/utils/yup';
import { TypeForm } from '@/pages/auth/auth.tsx';

export const useAuthForm = (isLogin: boolean, saveUser: any) => {
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
        if (!isLogin && data.password !== data.repeat) {
            setError('password', { type: 'custom', message: 'Пароли не совпадают' });
            setError('repeat', { type: 'custom', message: 'Пароли не совпадают' });
            return;
        }

        const registerData = {
            name: data.name,
            email: data.email,
            password: data.password,
            favorites: [],
            rewievs: [],
            moreInfo: { address: '', numberPhone: '' },
            createdProfile: '',
        };

        const newUser = await dispatch(fetchRegister(registerData));

        if (newUser.meta.requestStatus === 'fulfilled') {
            saveUser(
                { token: newUser.payload.token, name: newUser.payload.data.name },
                data.remember
            );
            navigate('/');
        }
    };

    return { handleSubmit, register, reset, errors, onSubmit, setValue };
};
