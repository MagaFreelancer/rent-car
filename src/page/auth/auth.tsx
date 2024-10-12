import Container from '@/shared/Container.tsx';

interface IAuthProps {
    type: 'login' | 'register';
}

const Auth = ({ type }: IAuthProps) => {
    return (
        <section>
            <Container>
                <h1 className="font-medium text-[45px]">
                    {type === 'login' ? 'Авторизация' : 'Регистрация'}
                </h1>
            </Container>
        </section>
    );
};

export default Auth;
