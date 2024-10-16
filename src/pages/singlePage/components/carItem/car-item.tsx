import React from 'react';
interface CarItemProps {
    className?: string;
    icon: React.ReactNode;
    label: string;
}
const CarItem: React.FC<CarItemProps> = ({ className, icon, label }: CarItemProps): JSX.Element => {
    return (
        <li className={className}>
            {icon}
            <span className="font-medium text-sm text-black">{label}</span>
        </li>
    );
};

export default CarItem;
