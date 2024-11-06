import { NavLink } from 'react-router-dom';
import Container from '@/shared/container.tsx';
import { Button } from '@/shared/button.tsx';
import useAuth from '@/utils/hooks/useAuth.ts';
import { Avatar, AvatarFallback } from '@/shared/avatar.tsx';

const Header = () => {
    const { status, storage } = useAuth();

    return (
        <header className="bg-white py-3">
            <Container>
                <nav className="flex justify-between items-center">
                    <NavLink className="transition hover:text-blue text-[25px] font-medium" to="/">
                        Rent-Car
                    </NavLink>
                    <ul className="flex gap-6">
                        <li>
                            <NavLink
                                className="transition hover:text-blue text-[15px] font-medium"
                                to="/"
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="transition hover:text-blue text-[15px] font-medium"
                                to="/cars"
                            >
                                Машины
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="transition hover:text-blue text-[15px] font-medium"
                                to="/about"
                            >
                                О нас
                            </NavLink>
                        </li>
                    </ul>

                    {status ? (
                        <Avatar className="ml-6 w-12 h-12">
                            <AvatarFallback className="bg-[#e5e5e5]">
                                {storage.name.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <div className="flex items-center">
                            <p>+7 999 999-99-99</p>
                            <NavLink to="auth/login">
                                <Button className="ml-5">Войти</Button>
                            </NavLink>
                        </div>
                    )}
                </nav>
            </Container>
        </header>
    );
};

export default Header;
