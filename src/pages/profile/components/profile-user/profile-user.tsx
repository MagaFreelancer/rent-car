import Title from '@/shared/Title.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/shared/button.tsx';
import { TypeUser } from '@/redux/slice/auth/auth-slice.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { changeDataUserSchema } from '@/utils/yup.ts';
import {
    TextFieldError,
    TextFieldGroup,
    TextFieldInput,
    TextFieldLabel,
} from '@/components/text-field.tsx';
import { authUser, fetchPatchProfile } from '@/redux/thunk/auth-fetch.ts';
import { useAuthStorage } from '@/pages/auth/components/hook/useAuthStorage.ts';
import { useAppDispatch } from '@/redux/store.ts';

export type Inputs = {
    name?: string;
    date?: string;
    phone?: string;
    email?: string;
};

interface IProfileUser {
    userData: TypeUser;
}

const ProfileUser = ({ userData }: IProfileUser) => {
    const { saveUser } = useAuthStorage();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { isDirty, errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            date: userData.date,
        },
        resolver: yupResolver<Inputs>(changeDataUserSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const id = userData.id;

        const changedData = {
            ...userData,
            name: data.name,
            date: data.date,
            phone: data.phone,
            email: data.email,
        };

        const changeData = await dispatch(fetchPatchProfile({ id, changedData }));

        const newData = await dispatch(
            authUser({
                password: changeData.payload.password,
                email: changeData.payload.email,
            })
        );

        saveUser({ token: newData.payload.token, name: newData.payload.data.name }, false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-[14px]">Ваш профиль</p>
            <Title className="text-[32px] font-extrabold mb-3">Базовые настройки</Title>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">личная информация</p>
                <TextFieldGroup error={!!errors.name} errorText={errors.name?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Имя и фамилия"
                        register={register}
                        name="name"
                        type="text"
                    />
                    <TextFieldError />
                </TextFieldGroup>

                <TextFieldGroup error={!!errors.date} type="date" errorText={errors.date?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Дата рождения"
                        register={register}
                        name="date"
                    />
                    <TextFieldError />
                </TextFieldGroup>
            </div>

            <div className="mb-10">
                <p className="text-[13px] mb-4 font-bold">дополнительная информация</p>

                <TextFieldGroup error={!!errors.phone} errorText={errors.phone?.message}>
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Телефон"
                        register={register}
                        name="phone"
                    />
                    <TextFieldError />
                </TextFieldGroup>

                <TextFieldGroup
                    error={!!errors.email}
                    type="email"
                    errorText={errors.email?.message}
                >
                    <TextFieldLabel />
                    <TextFieldInput
                        className="transition rounded py-6 px-5 mb-2"
                        placeholder="Почта"
                        register={register}
                        name="email"
                    />
                    <TextFieldError />
                </TextFieldGroup>
            </div>

            <Button type="submit" disabled={!isDirty} variant="blue">
                Редактировать
            </Button>
        </form>
    );
};

export default ProfileUser;
