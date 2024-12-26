import { Avatar, AvatarFallback } from '@/shared/avatar.tsx';
import { Menu, X } from 'lucide-react';

interface IProfileAvatarProps {
    avatar: string;
    toggleIcon: boolean;
}
// storage.name.slice(0, 2
const ProfileAvatar = ({ avatar, toggleIcon }: IProfileAvatarProps) => {
    return (
        <>
            <Avatar className="ml-6 w-10 h-10">
                <AvatarFallback className="bg-[#e5e5e5]">{avatar}</AvatarFallback>
            </Avatar>
            {toggleIcon ? <X /> : <Menu />}
        </>
    );
};

export default ProfileAvatar;
