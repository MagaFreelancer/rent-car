import Title from '@/shared/Title.tsx';
import { Input } from '@/shared/input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/shared/button.tsx';
import { TypeUser } from '@/redux/slice/auth/auth-slice.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { changeDataUserSchema } from '@/utils/yup.ts';

type Inputs = {
    fullName: string;
    date: string;
    phone: string;
    password: string;
    repeat: string;
    email: string;
};

interface IProfileUser {
    userData: TypeUser;
}

const ProfileUser = ({ userData }: IProfileUser) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        defaultValues: {
            fullName: userData.name,
            email: userData.email,
            phone: userData.phone,
            date: userData.date,
        },
        resolver: yupResolver(changeDataUserSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        console.log(errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-[14px]">Ваш профиль</p>
            <Title className="text-[32px] font-extrabold mb-3">Базовые настройки</Title>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">личная информация</p>
                <Input
                    {...register('fullName')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Имя и фамилия"
                    type="text"
                />
                <Input
                    {...register('date')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Дата рождения"
                    type="date"
                />
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">дополнительная информация</p>
                <Input
                    {...register('phone')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Телефон"
                    type="number"
                />
                <Input
                    {...register('email')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Почта"
                    type="email"
                />
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">изменение пароля</p>
                <Input
                    {...register('password')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Новый пароль"
                    type="password"
                />
                <Input
                    {...register('repeat')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Повторите новый пароль"
                    type="password"
                />
            </div>

            <Button type="submit" variant="blue">
                Редактировать
            </Button>
        </form>
    );
};

export default ProfileUser;
