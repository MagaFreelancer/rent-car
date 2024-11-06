import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, registerSchema } from '@/utils/yup.ts';
import useLogin from '@/pages/auth/components/hook/useLogin.ts';
import useRegister from '@/pages/auth/components/hook/useRegister.ts';
import { useDispatch } from 'react-redux';
import { resetError } from '@/redux/slice/auth/auth-slice.ts';

export interface TypeLogin {
    email: string;
    password: string;
    remember?: boolean;
}

export interface TypeRegister {
    name: string;
    repeat: string;
    email: string;
    password: string;
    remember?: boolean;
}

export const useAuthForm = (isLogin: boolean, saveUser: any) => {
    const dispatch = useDispatch();
    const { authLogin } = useLogin();
    const { registerUser } = useRegister();

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: { errors },
    } = useForm<TypeLogin | TypeRegister>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    const resetUseFormRedux = () => {
        reset();
        dispatch(resetError());
    };

    const onSubmit: SubmitHandler<TypeRegister | TypeLogin> = async data => {
        if (isLogin) {
            await authLogin(data, saveUser);
        } else {
            await registerUser(data, saveUser);
        }
    };

    return { handleSubmit, register, reset, errors, onSubmit, setValue, resetUseFormRedux };
};
