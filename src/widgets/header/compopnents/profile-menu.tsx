import { NavLink } from 'react-router-dom';
import { CircleUser, List, LogOut } from 'lucide-react';

interface IProfileMenu {
    onItemClick: (status: boolean) => void;
}

const ProfileMenu = ({ onItemClick }: IProfileMenu) => {
    return (
        <ul>
            <li>
                <NavLink
                    onClick={() => onItemClick(false)}
                    className="flex transition hover:bg-[#EFF6FF] p-3 text-[16px] text-[#172335] gap-3"
                    to="/profile"
                >
                    <CircleUser className="text-[#C7CACF] h-6 w-6 " />
                    Мой профиль
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => onItemClick(false)}
                    className="flex transition hover:bg-[#EFF6FF] p-3 text-[16px] text-[#172335] gap-3"
                    to="profile/applications"
                >
                    <List className="text-[#C7CACF] h-6 w-6 " />
                    Мои заказы
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => onItemClick(false)}
                    className="flex transition hover:bg-[#EFF6FF] border-t-[1px] p-3 text-[16px] text-[#172335] gap-3"
                    to="/"
                >
                    <LogOut className="text-[#C7CACF] h-6 w-6 " />
                    Выйти
                </NavLink>
            </li>
        </ul>
    );
};

export default ProfileMenu;
