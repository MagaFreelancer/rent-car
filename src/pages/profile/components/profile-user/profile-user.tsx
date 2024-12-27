import Title from '@/shared/Title.tsx';
import { Input } from '@/shared/input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/shared/button.tsx';

type Inputs = {
    fullName: string;
    data: string;
};

const ProfileUser = () => {
    const {
        register,
        handleSubmit,
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
                    className="transition rounded py-6 px-5"
                    placeholder="Имя и фамилия"
                />
            </div>

            <Button type="submit" variant="blue">
                Редактировать
            </Button>
        </form>
    );
};

export default ProfileUser;
