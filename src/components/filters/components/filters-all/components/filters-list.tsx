import { clsx } from 'clsx';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import FiltersItem from '@/components/filters/components/filters-all/components/filters-item.tsx';

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
                <FiltersItem
                    key={index}
                    onChange={onChange}
                    value={item.value}
                    label={item.label}
                />
            ))}
        </ul>
    );
};

export default FiltersList;
