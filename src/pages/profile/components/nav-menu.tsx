import { NavLink } from 'react-router-dom';
import { CircleUser, List } from 'lucide-react';

const NavMenu = () => {
    return (
        <ul className="bg-white rounded-md">
            <li>
                <NavLink className="flex transition p-3 text-[16px] text-[#172335] gap-3" to="/">
                    <CircleUser className="text-[#C7CACF] h-6 w-6 " />
                    Мой профиль
                </NavLink>
            </li>
            <li>
                <NavLink className="flex transition p-3 text-[16px] text-[#172335] gap-3" to="/">
                    <List className="text-[#C7CACF] h-6 w-6 " />
                    Заявки
                </NavLink>
            </li>
        </ul>
    );
};

export default NavMenu;
