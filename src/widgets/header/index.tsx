import { NavLink } from 'react-router-dom';
import Container from '@/shared/container.tsx';
import { Button } from '@/shared/button.tsx';
import useAuth from '@/utils/hooks/useAuth.ts';
import { Avatar, AvatarFallback } from '@/shared/avatar.tsx';
import { CircleUser, List, LogOut, Navigation } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { useState } from 'react';

const Header = () => {
    const { status, storage } = useAuth();
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

    return (
        <header className="bg-white py-3">
            <Container>
                <nav className="flex justify-between items-center">
                    <NavLink className="transition hover:text-blue text-[25px] font-medium" to="/">
                        Rent-Care
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
                        <li>
                            <NavLink
                                className="flex gap-1 transition hover:text-blackGray text-[15px] font-medium"
                                to="/about"
                            >
                                <Navigation className="transition hover:text-blackGray text-blue" />
                                Стамбул
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex items-center">
                        <p>+7 999 999-99-99</p>
                        {status ? (
                            <Popover
                                open={isOpenPopover}
                                onOpenChange={openStatus => setIsOpenPopover(openStatus)}
                            >
                                <PopoverTrigger className="flex">
                                    <Avatar className="ml-6 w-10 h-10">
                                        <AvatarFallback className="bg-[#e5e5e5]">
                                            {storage.name.slice(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="p-0" align="end">
                                    <ul>
                                        <li>
                                            <NavLink
                                                onClick={() => setIsOpenPopover(false)}
                                                className="flex transition hover:bg-[#EFF6FF] p-3 text-[16px] text-[#172335] gap-3"
                                                to="/profile"
                                            >
                                                <CircleUser className="text-[#C7CACF] h-6 w-6 " />
                                                Мой профиль
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() => setIsOpenPopover(false)}
                                                className="flex transition hover:bg-[#EFF6FF] p-3 text-[16px] text-[#172335] gap-3"
                                                to="/"
                                            >
                                                <List className="text-[#C7CACF] h-6 w-6 " />
                                                Мои заказы
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() => setIsOpenPopover(false)}
                                                className="flex transition hover:bg-[#EFF6FF] border-t-[1px] p-3 text-[16px] text-[#172335] gap-3"
                                                to="/"
                                            >
                                                <LogOut className="text-[#C7CACF] h-6 w-6 " />
                                                Выйти
                                            </NavLink>
                                        </li>
                                    </ul>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <NavLink to="auth/login">
                                <Button variant="gray" className="ml-5">
                                    Войти
                                </Button>
                            </NavLink>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
