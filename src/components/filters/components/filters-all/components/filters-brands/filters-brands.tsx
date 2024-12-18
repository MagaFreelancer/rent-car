import { Input } from '@/shared/input.tsx';
import { useRef, useState } from 'react';
import FiltersList from '@/components/filters/components/filters-all/components/filters-brands/components/filters-list';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getBrandActiveItem, getBrands } from '@/redux/slice/filters/filters-selectors';
import { setChangeBrands } from '@/redux/slice/filters/filters-slice';

const FiltersBrands = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const brands = useAppSelector(getBrands);
    const brandActiveItem = useAppSelector(getBrandActiveItem);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const searchInput = brands.filter(item => {
        return item.label.toLowerCase().includes(inputValue.toLowerCase());
    });

    // useEffect(() => {
    //     setInputValue(brandActiveItem?.value === 'all' ? '' : brandActiveItem?.label);
    // }, [brandActiveItem]);

    const handleChangeList = (value: string, label: string) => {
        dispatch(setChangeBrands(value));
        if (value === 'all') {
            setInputValue('');
        } else {
            setInputValue(label);
        }
        setToggle(false);
        inputRef.current?.blur();
    };

    const inputOnFocus = () => {
        setToggle(true);
        setInputValue('');
    };

    const inputOnBlur = () => {
        setToggle(false);
    };

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
