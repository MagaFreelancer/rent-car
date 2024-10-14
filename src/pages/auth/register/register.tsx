import { UseFormRegister } from 'react-hook-form';
import { Input } from '@/shared/input.tsx';
import { TypeForm } from '@/pages/auth/auth.tsx';

interface IPropsLogin {
    register: UseFormRegister<TypeForm>;
}

const Register = ({ register }: IPropsLogin) => {
    return (
        <>
            <p className="text-[15px] mb-1">Имя</p>
            <Input {...register('name')} />
            <p className="text-[15px] mb-1">Email</p>
            <Input {...register('email')} className="px-5 py-4" />
            <p className="text-[15px] mb-1">Пароль</p>
            <Input {...register('password')} className="px-5 py-4" />
        </>
    );
};

export default Register;
