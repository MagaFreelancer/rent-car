import Title from '@/shared/Title.tsx';
import { Input } from '@/shared/input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/shared/button.tsx';
import InputMask from '@/shared/input-mask.tsx';

type Inputs = {
    fullName: string;
    date: string;
    phone: string;
};

const ProfileUser = () => {
    const {
        register,
        handleSubmit,
        setValue,
        // formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
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
                />
                <InputMask
                    type="date"
                    onChange={(value: string) => setValue('date', value)}
                    className="transition rounded py-6 px-5 mb-2"
                />
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">дополнительная информация</p>
                <InputMask
                    type="phone"
                    onChange={(value: string) => setValue('phone', value)}
                    className="transition rounded py-6 px-5 mb-2"
                />
                <Input
                    {...register('fullName')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Почта"
                    type="email"
                />
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">изменение пароля</p>
                <Input
                    {...register('fullName')}
                    className="transition rounded py-6 px-5 mb-2"
                    placeholder="Новый пароль"
                    type="password"
                />
                <Input
                    {...register('fullName')}
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
