import { Label } from '@/shared/label.tsx';
import { RadioGroupItem } from '@/shared/radio-group.tsx';

interface IItemSort {
    label: string;
    status: boolean;
    value: string;
}

const ItemSort = ({ label, status, value }: IItemSort) => {
    return (
        <li>
            <Label className="flex py-2 px-4 gap-2 items-center w-full text-[16px]" htmlFor={value}>
                <RadioGroupItem
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked={status}
                    value={value}
                    id={value}
                />
                {label}
            </Label>
        </li>
    );
};

export default ItemSort;
