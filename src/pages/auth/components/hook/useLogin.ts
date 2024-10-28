import { authUser } from '@/redux/thunk/auth-fetch.ts';
import { useAppDispatch } from '@/redux/store.ts';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const authLogin = async (data: any, saveUser: any) => {
        // const { remember, ...loginData } = data;
        const loginData = {
            email: data.email,
            password: data.password,
        };

        const loginUser = await dispatch(authUser(loginData));

        saveUser(
            { token: loginUser.payload.token, name: loginUser.payload.data.name },
            data.remember
        );

        navigate('/');
    };

    return { authLogin };
};

export default useLogin;
