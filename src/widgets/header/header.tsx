import Container from '@/shared/container.tsx';
import { NavLink } from 'react-router-dom';
import { Button } from '@/shared/button.tsx';
import useAuth from '@/utils/hooks/useAuth.ts';
import { Avatar } from '@/shared/avatar.tsx';

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
                                <NavLink to="/">Каталог</NavLink>
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
                        <Avatar className="p-4">{storage.name[0]}</Avatar>
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
