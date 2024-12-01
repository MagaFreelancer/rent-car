import { TypeDrives } from '@/redux/slice/filters/filters-slice.ts';
import DrivesItem from '@/components/filters/components/filter-drives/components/drives-item.tsx';

interface IDrivesListProps {
    onChange: (value: string) => void;
    drives: TypeDrives[];
}

const DrivesList = ({ onChange, drives }: IDrivesListProps) => {
    return (
        <ul>
            {drives.map(item => (
                <DrivesItem
                    key={item.label + item.value}
                    onChange={onChange}
                    value={item.value}
                    status={item.status}
                    label={item.label}
                />
            ))}
        </ul>
    );
};

export default DrivesList;
