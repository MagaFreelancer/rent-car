import Container from '@/shared/container.tsx';
import { NavLink } from 'react-router-dom';
import { Button } from '@/shared/button.tsx';
import useAuth from '@/utils/hooks/useAuth.ts';
import { Avatar, AvatarFallback } from '@/shared/avatar.tsx';

const Header = () => {
    const { status, storage } = useAuth();

    return (
        <header className="border-y-2">
            <Container>
                <div className="flex items-center justify-between">
                    <p className="mr-8 text-[20px] font-medium">RS</p>

                    <nav className="p-7 w-full border-x-2">
                        <ul className="flex text-[15px] justify-center font-medium gap-[57px]">
                            <li>
                                <NavLink to="/cars">Каталог</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Мужские</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Женские</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Детские</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Распродажа</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {status ? (
                        <Avatar className="ml-6 w-12 h-12">
                            <AvatarFallback className="bg-[#e5e5e5]">
                                {storage.name.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <NavLink to="auth/login">
                            <Button className="ml-7">Войти</Button>
                        </NavLink>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;
