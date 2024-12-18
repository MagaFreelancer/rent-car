import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import FiltersItem from '@/components/filters/components/filters-all/components/filters-brands/components/filters-item';

interface IFiltersListProps {
    onChange: (value: string, label: string) => void;
    list: TypeBrands[];
}

const FiltersList = ({ list, onChange }: IFiltersListProps) => {
    return (
        <ul
            onMouseDown={e => e.preventDefault()}
            className="absolute w-full max-h- bg-white overflow-hidden shadow rounded-xl top-14 transition-opacity duration-150"
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
