import { Input } from '@/shared/input.tsx';
import { Ref } from 'react';

interface IFiltersBrandsProps {
    onChange: (value: string) => void;
    onBlur: () => void;
    onFocus: () => void;
    value: string;
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
}

const FiltersBrands = ({
    onChange,
    onBlur,
    onFocus,
    placeholder,
    value,
    inputRef,
}: IFiltersBrandsProps) => {
    return (
        <Input
            onChange={e => onChange(e.currentTarget.value)}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            className="h-12 bg-[#f2f4f8] text-[16px] border-none"
            placeholder={placeholder}
        />
    );
};

export default FiltersBrands;
