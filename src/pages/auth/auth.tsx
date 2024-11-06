import Container from '@/shared/container.tsx';
import Title from '@/shared/Title.tsx';
import { useParams } from 'react-router-dom';
import AuthForm from '@/pages/auth/components/auth-form.tsx';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
    repeat?: string;
};

export interface IUser {
    name: string;
    email: string;
    password: string;
    favorites: string[];
    rewievs: string[];
    moreInfo: { address: string; numberPhone: string };
    createdProfile: string;
}

const Auth = () => {
    const { type } = useParams();
    const isRegistered = type === 'login';

    return (
        <section className="mt-7 max-w-[500px] mx-auto mb-[120px] bg-white p-10 rounded-2xl shadow-xl">
            <Container>
                <Title className="mb-12">{type === 'login' ? 'Авторизация' : 'Регистрация'}</Title>

                <AuthForm isLogin={isRegistered} />
            </Container>
        </section>
    );
};

export default Auth;
