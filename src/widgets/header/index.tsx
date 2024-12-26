import { NavLink } from 'react-router-dom';
import Container from '@/shared/container.tsx';
import { Button } from '@/shared/button.tsx';
import useAuth from '@/utils/hooks/useAuth.ts';
import { Navigation } from 'lucide-react';
import ProfilePopover from '@/widgets/header/compopnents/profile-popover.tsx';

const Header = () => {
    const { status, storage } = useAuth();

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
                            <ProfilePopover avatar={storage.name.slice(0, 2)} />
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
