import { SelectGroup } from '@/shared/select-filter.tsx';
import { useAppSelector } from '@/redux/store.ts';
import { getFilters } from '@/redux/slice/filters/filters-selectors.ts';

const Filters = () => {
    const { brands } = useAppSelector(getFilters);

    return (
        <div className="py-5">
            <SelectGroup items={brands}>.{/*<SelectRadio/>*/}</SelectGroup>
        </div>
    );
};

export default Filters;
