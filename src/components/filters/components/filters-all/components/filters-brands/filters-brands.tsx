import { Input } from '@/shared/input.tsx';
import FiltersList from '@/components/filters/components/filters-all/components/filters-brands/components/filters-list';
import useFiltersBrands from '@/components/filters/components/filters-all/components/filters-brands/hooks/useFiltersBrands.ts';

const FiltersBrands = () => {
    const {
        setInputValue,
        inputOnFocus,
        inputOnBlur,
        inputValue,
        inputRef,
        brandActiveItem,
        toggle,
        searchInput,
        handleChangeList,
    } = useFiltersBrands();

    return (
        <div className="relative">
            <p className="mb-2 text-[14px] text-[#172335]">Марка и модель</p>
            <Input
                className="h-12 bg-[#f2f4f8] text-[16px] border-none"
                onChange={event => setInputValue(event.target.value)}
                onFocus={inputOnFocus}
                onBlur={inputOnBlur}
                value={inputValue}
                ref={inputRef}
                placeholder={brandActiveItem?.value === 'all' ? 'Марка' : brandActiveItem?.label}
            />

            {toggle && (
                <FiltersList
                    onChange={(value, label) => handleChangeList(value, label)}
                    list={searchInput}
                />
            )}
        </div>
    );
};

export default FiltersBrands;
