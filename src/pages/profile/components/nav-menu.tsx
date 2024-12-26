import { NavLink } from 'react-router-dom';
import { CircleUser, List } from 'lucide-react';
import { cn } from '@/lib/utils.ts';

const NavMenu = () => {
    return (
        <ul className="bg-white rounded-md">
            <li className="group transition">
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        cn(
                            'flex group-hover:text-blue  p-3 text-[16px] text-[#172335] gap-3',
                            isActive && 'text-blue font-bold'
                        )
                    }
                    end
                >
                    <CircleUser className="group-hover:text-blue h-6 w-6" />
                    Мой профиль
                </NavLink>
            </li>
            <li className="group transition">
                <NavLink
                    to="/profile/applications"
                    className={({ isActive }) =>
                        cn(
                            'group-hover:text-blue flex n p-3 text-[16px] text-[#172335] gap-3',
                            isActive && 'text-blue font-bold'
                        )
                    }
                >
                    <List className="group-hover:text-blue h-6 w-6" />
                    Заявки
                </NavLink>
            </li>
        </ul>
    );
};

export default NavMenu;
