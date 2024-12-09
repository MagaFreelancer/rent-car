import { PopoverContent, PopoverTrigger, Popover } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import { Input } from '@/shared/input.tsx';
import { setChangeBrands, TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getBrandActiveItem } from '@/redux/slice/filters/filters-selectors.ts';
import FiltersList from '@/components/filters/components/filters-all/components/filters-list.tsx';

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
                        <Input
                            onChange={e => setInputValue(e.currentTarget.value)}
                            value={inputValue}
                            ref={inputRef}
                            onBlur={() => {
                                setToggle(false);
                            }}
                            onFocus={() => {
                                setToggle(true);
                                setInputValue('');
                            }}
                            className="h-12 bg-[#f2f4f8] text-[16px] border-none"
                            placeholder={
                                brandActiveItem?.value === 'all' ? 'Марка' : brandActiveItem?.label
                            }
                        />
                        <FiltersList
                            onChange={handleChangeList}
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
