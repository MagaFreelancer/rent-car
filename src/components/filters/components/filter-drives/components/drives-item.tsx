import { Label } from '@/shared/label.tsx';
import { clsx } from 'clsx';
import { Checkbox } from '@/shared/checkbox.tsx';

interface IDrivesItemProps {
    value: string;
    status: boolean;
    label: string;
    onChange: (value: string) => void;
}

const DrivesItem = ({ value, status, label, onChange }: IDrivesItemProps) => {
    return (
        <li className="list-none flex">
            <Label
                className={clsx(
                    'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                    value === 'all' && ''
                )}
                htmlFor={value}
            >
                <Checkbox
                    onClick={() => onChange(value)}
                    checked={status}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    value={value}
                    id={value}
                />
                {label}
            </Label>
        </li>
    );
};

export default DrivesItem;
