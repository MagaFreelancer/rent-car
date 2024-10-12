import Container from '@/shared/Container.tsx';
import { NavLink } from 'react-router-dom';
import { Button } from '@/shared/button.tsx';

const Header = () => {
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

                    <Button className="ml-7">
                        <NavLink to="/login">Войти</NavLink>
                    </Button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
