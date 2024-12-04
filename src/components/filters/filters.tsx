import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import {
    getBrands,
    getBrandActiveItem,
    getDrives,
    getDrivesActiveItems,
    getPrice,
} from '@/redux/slice/filters/filters-selectors.ts';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { RadioGroup, RadioGroupItem } from '@/shared/radio-group.tsx';
import { Label } from '@/shared/label.tsx';
import {
    setChangeBrands,
    setChangePrice,
    setToggleDrives,
} from '@/redux/slice/filters/filters-slice.ts';
import { clsx } from 'clsx';
import { ChevronUp, CircleX } from 'lucide-react';
import { Checkbox } from '@/shared/checkbox.tsx';
import { Input } from '@/shared/input.tsx';

const Filters = () => {
    const brandsActiveItem = useAppSelector(getBrandActiveItem);
    const drivesActiveItems = useAppSelector(getDrivesActiveItems);
    const price = useAppSelector(getPrice);
    const brands = useAppSelector(getBrands);
    const drives = useAppSelector(getDrives);
    const [priceValue, setPriceValue] = React.useState([price.from, price.to]);

    const dispatch = useAppDispatch();

    const handleChangeRadio = (value: string) => {
        dispatch(setChangeBrands(value));
    };

    const handleChangeCheckbox = (value: string) => {
        dispatch(setToggleDrives(value));
    };
    const changePrice = () => {
        let from = priceValue[0] === 0 ? undefined : priceValue[0];
        let to = priceValue[1] === 0 ? undefined : priceValue[1];

        if (from !== undefined && to !== undefined) {
            if (from > to) {
                // to = from;
                // setPriceValue([from, from]);
                return false;
            }
        }
        dispatch(
            setChangePrice({
                from: from,
                to: to,
            })
        );
    };
    const handleSubmitPrice = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changePrice();
        }
    };
    const clearPrice = (key: 'from' | 'to') => {
        let keyNum = key === 'from' ? 0 : 1;
        priceValue[keyNum] = undefined;
        changePrice();
    };

    // const handleSubmitPriceTo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
    //         dispatch(setChangePriceTo(Number(event.currentTarget.value)));
    //     }
    // };

    return (
        <div className="py-5">
            <div className="flex gap-3">
                <Popover>
                    <PopoverTrigger
                        className={clsx(
                            'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
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
                            defaultValue={brandsActiveItem?.value}
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
                                'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
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
                                defaultValue={item?.value}
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

                {price.from === undefined && price.to !== undefined ? null : (
                    <Popover>
                        <PopoverTrigger
                            className={clsx(
                                'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
                                price.from && '!bg-[#5394fd] text-white'
                            )}
                        >
                            {price.from ? `Цена от ${price.from} ₽` : 'Цена, ₽'}
                            {price.from !== undefined ? (
                                <CircleX
                                    onClick={() => clearPrice('from')}
                                    className=" z-50 w-4 z-55 h-4"
                                />
                            ) : (
                                <ChevronUp className="w-5 h-5" />
                            )}
                        </PopoverTrigger>

                        <PopoverContent align="start" className="flex p-4 rounded-xl gap-4">
                            <Input
                                onKeyDown={event => handleSubmitPrice(event)}
                                className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
                                type="number"
                                placeholder="500 ₽"
                                value={priceValue[0] || ''}
                                onInput={e => {
                                    setPriceValue([Number(e.currentTarget.value), priceValue[1]]);
                                }}
                            />
                            <Input
                                onKeyDown={event => handleSubmitPrice(event)}
                                className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
                                type="number"
                                placeholder="1000 ₽"
                                value={priceValue[1] || ''}
                                onInput={e => {
                                    setPriceValue([priceValue[0], Number(e.currentTarget.value)]);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                )}

                {price.to !== undefined && (
                    <Popover>
                        <PopoverTrigger
                            className={clsx(
                                'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
                                price.to && '!bg-[#5394fd] text-white'
                            )}
                        >
                            {`Цена До ${price.to} ₽`}
                            {price.to !== undefined ? (
                                <CircleX
                                    onClick={() => clearPrice('to')}
                                    className=" z-50 w-4 z-55 h-4"
                                />
                            ) : (
                                <ChevronUp className="w-5 h-5" />
                            )}
                        </PopoverTrigger>

                        <PopoverContent align="start" className="flex p-4 rounded-xl gap-4">
                            <Input
                                onKeyDown={event => handleSubmitPrice(event)}
                                className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
                                type="number"
                                placeholder="500 ₽"
                                value={priceValue[0] || ''}
                                onInput={e => {
                                    setPriceValue([Number(e.currentTarget.value), priceValue[1]]);
                                }}
                            />
                            <Input
                                onKeyDown={event => handleSubmitPrice(event)}
                                className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
                                type="number"
                                placeholder="1000 ₽"
                                value={priceValue[1] || ''}
                                onInput={e => {
                                    setPriceValue([priceValue[0], Number(e.currentTarget.value)]);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>
    );
};

export default Filters;
