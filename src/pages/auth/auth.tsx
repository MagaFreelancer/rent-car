import Container from '@/shared/container.tsx';
import Title from '@/shared/Title.tsx';
import { useParams } from 'react-router-dom';
import AuthForm from '@/pages/auth/components/auth-form.tsx';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
};

const Auth = () => {
    const { type } = useParams();
    const isRegistered = type === 'login';

    return (
        <section className="max-w-[500px] mx-auto mb-[120px]">
            <Container>
                <Title className="mt-6 mb-12">
                    {type === 'login' ? 'Авторизация' : 'Регистрация'}
                </Title>

                <AuthForm isLogin={isRegistered} />
            </Container>
        </section>
    );
};

export default Auth;
