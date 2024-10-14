import Container from '@/shared/container.tsx';
import Title from '@/shared/Title.tsx';
import { NavLink, useParams } from 'react-router-dom';
import Login from '@/pages/auth/login/login.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/shared/button.tsx';
import Register from '@/pages/auth/register/register.tsx';
import { loginSchema, registerSchema } from '@/utils/yup.ts';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
};

const Auth = () => {
    const { type } = useParams();
    const isRegistered = type === 'login';

    const onSubmit: SubmitHandler<TypeForm> = data => {
        if (isRegistered) {
            console.log('login', data);
        } else {
            console.log('register', data);
        }
    };

    const formMethods = useForm<TypeForm>({
        resolver: yupResolver(isRegistered ? loginSchema : registerSchema),
    });

    return (
        <section>
            <Container>
                <Title className="mt-6 mb-12">
                    {type === 'login' ? 'Авторизация' : 'Регистрация'}
                </Title>

                <form className="border-2 p-10" onSubmit={formMethods.handleSubmit(onSubmit)}>
                    {type === 'login' ? (
                        <Login register={formMethods.register} />
                    ) : (
                        <Register register={formMethods.register} />
                    )}

                    <Button className="p-6" variant="custom" type="submit">
                        {isRegistered ? 'Войти в кабинет' : 'Создать аккаунт'}
                    </Button>
                </form>
                {isRegistered && <NavLink to="/auth/register">Если у вас не аккаунта</NavLink>}
            </Container>
        </section>
    );
};

export default Auth;
