import { UseFormRegister } from 'react-hook-form';
import { Input } from '@/shared/input.tsx';
import { TypeForm } from '@/pages/auth/auth.tsx';
import { NavLink } from 'react-router-dom';

interface IPropsLogin {
    register: UseFormRegister<TypeForm>;
}

const Login = ({ register }: IPropsLogin) => {
    return (
        <>
            <Input {...register('email')} text="Email" error="test" className="px-5 py-4" />
            <Input {...register('password')} className="px-5 py-4" />
            <p>
                Еще нет аккаунта?{'\u00A0'}
                <NavLink className="hover:underline" to="/auth/register">
                    Зарегестироваться
                </NavLink>
            </p>
        </>
    );
};

export default Login;
