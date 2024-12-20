import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getBrandActiveItem, getBrands } from '@/redux/slice/filters/filters-selectors.ts';
import { setChangeBrands } from '@/redux/slice/filters/filters-slice.ts';

const useFiltersBrands = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const brands = useAppSelector(getBrands);
    const brandActiveItem = useAppSelector(getBrandActiveItem);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const searchInput = brands.filter(item => {
        return item.label.toLowerCase().includes(inputValue.toLowerCase());
    });

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

    return {
        setToggle,
        handleChangeList,
        inputOnFocus,
        inputOnBlur,
        setInputValue,
        toggle,
        brandActiveItem,
        searchInput,
        inputValue,
        inputRef,
    };
};

export default useFiltersBrands;
