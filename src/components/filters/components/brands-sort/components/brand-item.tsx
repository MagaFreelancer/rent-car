import { Label } from '@/shared/label.tsx';
import { RadioGroupItem } from '@/shared/radio-group.tsx';

interface IBrandItemProps {
    value: string;
    status: boolean;
    label: string;
}

const BrandItem = ({ value, status, label }: IBrandItemProps) => {
    return (
        <li className="list-none flex">
            <Label className="flex py-2 px-4 gap-2 items-center w-full text-[16px]" htmlFor={value}>
                <RadioGroupItem
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

export default BrandItem;
