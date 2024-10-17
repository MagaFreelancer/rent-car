import Container from '@/shared/container.tsx';
import Title from '@/shared/Title.tsx';
import { useParams } from 'react-router-dom';
import Login from '@/pages/auth/login/login.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/shared/button.tsx';
import Register from '@/pages/auth/register/register.tsx';
import { loginSchema, registerSchema } from '@/utils/yup.ts';
import { Checkbox } from '@/shared/checkbox.tsx';

export type TypeForm = {
    name?: string;
    email: string;
    password: string;
};

const Auth = () => {
    const { type } = useParams();
    const isRegistered = type === 'login';

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TypeForm>({
        resolver: yupResolver(isRegistered ? loginSchema : registerSchema),
    });

    const onSubmit: SubmitHandler<TypeForm> = data => {
        console.log('register', errors.email?.message);
        if (isRegistered) {
            console.log('login', data);
            console.log('login', errors);
        } else {
            console.log('register', data);
            console.log('register', errors);
        }
    };

    return (
        <section className="max-w-[500px] mx-auto mb-[120px]">
            <Container>
                <Title className="mt-6 mb-12">
                    {type === 'login' ? 'Авторизация' : 'Регистрация'}
                </Title>

                <form className="border-2 p-10" onSubmit={handleSubmit(onSubmit)}>
                    {type === 'login' ? (
                        <Login register={register} />
                    ) : (
                        <Register register={register} />
                    )}

                    <Button className="w-full p-6 my-4" variant="custom" type="submit">
                        {isRegistered ? 'Войти в кабинет' : 'Создать аккаунт'}
                    </Button>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            className="w-6 h-6 border-[##D6D6D6] rounded-none"
                            id="remember"
                        />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Запомнить меня
                        </label>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Auth;
