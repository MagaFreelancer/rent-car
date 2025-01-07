import { useAuthStorage } from '@/pages/auth/components/hook/useAuthStorage.ts';
import { useAppDispatch } from '@/redux/store.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changeDataUserSchema } from '@/utils/yup.ts';
import { authUser, fetchPatchProfile } from '@/redux/thunk/auth-fetch.ts';
import { TypeUser } from '@/redux/slice/auth/auth-slice.ts';

interface IUseProfileChange {
    userData: TypeUser;
}

export type InputsProfileChange = {
    name?: string;
    date?: string;
    phone?: string;
    email?: string;
};

const UseProfileChange = ({ userData }: IUseProfileChange) => {
    const { saveUser } = useAuthStorage();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { isDirty, errors },
    } = useForm<InputsProfileChange>({
        defaultValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            date: userData.date,
        },
        resolver: yupResolver<InputsProfileChange>(changeDataUserSchema),
    });

    const onSubmit: SubmitHandler<InputsProfileChange> = async data => {
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

    return {
        onSubmit,
        register,
        errors,
        isDirty,
        handleSubmit,
    };
};

export default UseProfileChange;
