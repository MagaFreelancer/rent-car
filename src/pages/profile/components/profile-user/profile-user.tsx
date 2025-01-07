import Title from '@/shared/Title.tsx';
import { Button } from '@/shared/button.tsx';
import { TypeUser } from '@/redux/slice/auth/auth-slice.ts';
import UserInputs from '@/pages/profile/components/profile-user/components/user-inputs.tsx';
import useProfileChange from '@/pages/profile/components/profile-user/hook/useProfileChange.tsx';

interface IProfileUser {
    userData: TypeUser;
}

const ProfileUser = ({ userData }: IProfileUser) => {
    const { onSubmit, handleSubmit, register, errors, isDirty } = useProfileChange({ userData });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-[14px]">Ваш профиль</p>
            <Title className="text-[32px] font-extrabold mb-3">Базовые настройки</Title>

            <UserInputs register={register} errors={errors} />

            <Button type="submit" disabled={!isDirty} variant="blue">
                Редактировать
            </Button>
        </form>
    );
};

export default ProfileUser;
