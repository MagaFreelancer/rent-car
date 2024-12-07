import { PopoverContent, PopoverTrigger, Popover } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import { Input } from '@/shared/input.tsx';
import { setChangeBrands, TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getBrandActiveItem } from '@/redux/slice/filters/filters-selectors.ts';

interface IFiltersAllProps {
    brands: TypeBrands[];
}

const FiltersAll = ({ brands }: IFiltersAllProps) => {
    const brandActiveItem = useAppSelector(getBrandActiveItem);
    const [toggle, setToggle] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();

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
                            ref={inputRef}
                            onBlur={() => setToggle(false)}
                            onFocus={() => setToggle(true)}
                            className="h-12 bg-[#f2f4f8] text-[16px] border-none"
                            placeholder="Марка"
                        />
                        <ul
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => inputRef.current?.focus()}
                            className={clsx(
                                'absolute w-full bg-white overflow-hidden shadow opacity-0 rounded-xl top-14 pointer-events-none transition-opacity duration-150',
                                toggle && 'opacity-100 pointer-events-auto'
                            )}
                        >
                            {brands.map((item, index) => (
                                <li
                                    onClick={() => dispatch(setChangeBrands(item.value))}
                                    key={index}
                                    className="transition cursor-pointer hover:text-black hover:bg-[#ebebed] hover:opacity-50 p-4 text-[14px]"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default FiltersAll;
