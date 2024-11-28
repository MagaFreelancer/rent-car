import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import {
    getBrands,
    getBrandActiveItem,
    getDrives,
    getDrivesActiveItems,
    getPrice,
    getSort,
    getSortActiveItem,
} from '@/redux/slice/filters/filters-selectors.ts';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { RadioGroup, RadioGroupItem } from '@/shared/radio-group.tsx';
import { Label } from '@/shared/label.tsx';
import {
    setChangeBrands,
    setChangeSort,
    setToggleDrives,
} from '@/redux/slice/filters/filters-slice.ts';
import { clsx } from 'clsx';
import { ChevronUp, CircleX } from 'lucide-react';
import { Checkbox } from '@/shared/checkbox.tsx';
import FilterPrice from '@/components/filters/components/filter-price.tsx';
import Sort from '@/components/filters/components/sort/sort.tsx';

const Filters = () => {
    const brandsActiveItem = useAppSelector(getBrandActiveItem);
    const drivesActiveItems = useAppSelector(getDrivesActiveItems);
    const sortActive = useAppSelector(getSortActiveItem);
    const sort = useAppSelector(getSort);
    const price = useAppSelector(getPrice);
    const brands = useAppSelector(getBrands);
    const drives = useAppSelector(getDrives);
    const dispatch = useAppDispatch();

    const handleChangeRadio = (value: string) => {
        dispatch(setChangeBrands(value));
    };

    const handleChangeCheckbox = (value: string) => {
        dispatch(setToggleDrives(value));
    };

    return (
        <div className="flex justify-between py-5">
            <div className="flex gap-3">
                <Popover>
                    <PopoverTrigger
                        className={clsx(
                            'gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md',
                            brandsActiveItem?.value !== 'all' && '!bg-[#5394fd] text-white'
                        )}
                    >
                        Марка
                        {brandsActiveItem?.value !== 'all' && `: ${brandsActiveItem?.label}`}
                        {brandsActiveItem?.value !== 'all' ? (
                            <CircleX
                                onClick={e => {
                                    e.stopPropagation();
                                    handleChangeRadio('all');
                                }}
                                className=" z-50 w-4 z-55 h-4"
                            />
                        ) : (
                            <ChevronUp className="w-5 h-5" />
                        )}
                    </PopoverTrigger>

                    <PopoverContent align="start" className="p-0 rounded-xl">
                        <RadioGroup
                            className="block"
                            onValueChange={item => handleChangeRadio(item)}
                        >
                            {brands?.map((item, index) => (
                                <li className="list-none flex" key={index}>
                                    <Label
                                        className={clsx(
                                            'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                            brandsActiveItem?.value === 'all' && ''
                                        )}
                                        htmlFor={item.value}
                                    >
                                        <RadioGroupItem
                                            checked={item?.status}
                                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                            value={item.value}
                                            id={item.value}
                                        />
                                        {item.label}
                                    </Label>
                                </li>
                            ))}
                        </RadioGroup>
                    </PopoverContent>
                </Popover>

                {drivesActiveItems.map((item, index) => (
                    <Popover key={index}>
                        <PopoverTrigger
                            className={clsx(
                                'gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md',
                                item.value !== 'all' && '!bg-[#5394fd] text-white'
                            )}
                        >
                            Привод {item.value !== 'all' && `: ${item.label}`}
                            {item.value !== 'all' ? (
                                <CircleX
                                    onClick={e => {
                                        e.stopPropagation();
                                        handleChangeCheckbox(item.value);
                                    }}
                                    className=" z-50 w-4 z-55 h-4"
                                />
                            ) : (
                                <ChevronUp className="w-5 h-5" />
                            )}
                        </PopoverTrigger>
                        <PopoverContent align="start" className="p-0 rounded-xl">
                            <RadioGroup
                                className="block"
                                onValueChange={item => handleChangeRadio(item)}
                            >
                                {drives?.map((item, index) => (
                                    <li className="list-none flex" key={index}>
                                        <Label
                                            className={clsx(
                                                'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                                item?.value === 'all' && ''
                                            )}
                                            htmlFor={item.value}
                                        >
                                            <Checkbox
                                                onClick={() => handleChangeCheckbox(item.value)}
                                                checked={item.status}
                                                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                value={item.value}
                                                id={item.value}
                                            />
                                            {item.label}
                                        </Label>
                                    </li>
                                ))}
                            </RadioGroup>
                        </PopoverContent>
                    </Popover>
                ))}

                <FilterPrice price={price} />
            </div>

            <Sort
                onChange={value => dispatch(setChangeSort(value))}
                title={sortActive?.label}
                list={sort}
            />
        </div>
    );
};

export default Filters;
