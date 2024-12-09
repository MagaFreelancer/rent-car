import { clsx } from 'clsx';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';

interface IFiltersListProps {
    onChange: (value: string, label: string) => void;
    list: TypeBrands[];
    toggle: boolean;
}

const FiltersList = ({ toggle, list, onChange }: IFiltersListProps) => {
    return (
        <ul
            onMouseDown={e => e.preventDefault()}
            className={clsx(
                'absolute w-full max-h- bg-white overflow-hidden shadow opacity-0 rounded-xl top-14 pointer-events-none transition-opacity duration-150',
                toggle && 'opacity-100 pointer-events-auto'
            )}
        >
            {list.map((item, index) => (
                <li
                    onClick={() => onChange(item.value, item.label)}
                    key={index}
                    className="transition cursor-pointer hover:text-black hover:bg-[#ebebed] hover:opacity-50 p-4 text-[14px]"
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

export default FiltersList;
