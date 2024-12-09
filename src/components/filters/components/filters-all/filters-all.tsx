import { PopoverContent, PopoverTrigger, Popover } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import { setChangeBrands, TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getBrandActiveItem } from '@/redux/slice/filters/filters-selectors.ts';
import FiltersList from '@/components/filters/components/filters-all/components/filters-list.tsx';
import FiltersBrands from '@/components/filters/components/filters-all/components/filters-brands.tsx';

interface IFiltersAllProps {
    brands: TypeBrands[];
}

const FiltersAll = ({ brands }: IFiltersAllProps) => {
    const brandActiveItem = useAppSelector(getBrandActiveItem);
    const [toggle, setToggle] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const searchInput = brands.filter(item => {
        return item.label.toLowerCase().includes(inputValue.toLowerCase());
    });

    useEffect(() => {
        setInputValue(brandActiveItem?.value === 'all' ? '' : brandActiveItem?.label);
    }, [brandActiveItem]);

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
        <div>
            <Popover onOpenChange={() => setToggle(false)}>
                <PopoverTrigger className="gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md">
                    Все фильтры
                    <ChevronUp className="w-5 h-5" />
                </PopoverTrigger>

                <PopoverContent
                    onOpenAutoFocus={e => e.preventDefault()}
                    align="start"
                    className="p-4 rounded-xl"
                >
                    <p className="mb-2 text-[14px] text-[#172335]">Марка и модель</p>
                    <div className="relative">
                        <FiltersBrands
                            onChange={value => setInputValue(value)}
                            onFocus={inputOnFocus}
                            onBlur={inputOnBlur}
                            value={inputValue}
                            inputRef={inputRef}
                            placeholder={
                                brandActiveItem?.value === 'all' ? 'Марка' : brandActiveItem?.label
                            }
                        />

                        <FiltersList
                            onChange={(value, label) => handleChangeList(value, label)}
                            list={searchInput}
                            toggle={toggle}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default FiltersAll;
