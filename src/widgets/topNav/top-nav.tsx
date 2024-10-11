import { NavLink } from 'react-router-dom';
import Container from '@/shared/Container.tsx';

const TopNav = () => {
    return (
        <nav>
            <Container className="flex justify-between items-center">
                <ul className="flex text-[14px] text-[#585858] gap-10 py-4">
                    <li>
                        <NavLink to="/">О магазине</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Наш блог</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Оплата</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Индивидуальный заказ</NavLink>
                    </li>
                </ul>

                <p>RU</p>
            </Container>
        </nav>
    );
};

export default TopNav;
