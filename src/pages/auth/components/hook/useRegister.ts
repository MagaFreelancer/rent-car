import { TypeRegister } from '@/pages/auth/components/hook/useAuthForm.ts';
import { fetchRegister } from '@/redux/thunk/auth-fetch.ts';
import { useAppDispatch } from '@/redux/store.ts';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerUser = async (data: any, saveUser: any) => {
        const registerData = {
            name: (data as TypeRegister).name,
            email: data.email,
            password: data.password,
            date: '',
            favorites: [],
            phone: '',
            rewievs: [],
            moreInfo: { address: '', numberPhone: '' },
            createdProfile: '',
        };

        const newUser = await dispatch(fetchRegister(registerData));

        saveUser({ token: newUser.payload.token, name: newUser.payload.data.name }, data.remember);

        navigate('/');
    };

    return { registerUser };
};

export default useRegister;
