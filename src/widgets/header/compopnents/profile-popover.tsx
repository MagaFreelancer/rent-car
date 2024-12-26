import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import ProfileAvatar from '@/widgets/header/compopnents/profile-avatar.tsx';
import ProfileMenu from '@/widgets/header/compopnents/profile-menu.tsx';
import { useState } from 'react';

interface IProfilePopoverProps {
    avatar: string;
}

const ProfilePopover = ({ avatar }: IProfilePopoverProps) => {
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

    return (
        <Popover open={isOpenPopover} onOpenChange={openStatus => setIsOpenPopover(openStatus)}>
            <PopoverTrigger className="relative items-center gap-2 flex">
                <ProfileAvatar avatar={avatar} toggleIcon={isOpenPopover} />
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
                <ProfileMenu onItemClick={toggle => setIsOpenPopover(toggle)} />
            </PopoverContent>
        </Popover>
    );
};

export default ProfilePopover;
