import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { Label } from '@/shared/label.tsx';
import { RadioGroup } from '@/shared/radio-group.tsx';
import { clsx } from 'clsx';
import { Checkbox } from '@/shared/checkbox.tsx';

interface IFilterModelProps {
    onChange: (value: string) => void;
    modelAllItem: TypeBrands;
    list: any;
}

const FilterModel = ({ onChange, modelAllItem, list }: IFilterModelProps) => {
    return (
        <Popover>
            <PopoverTrigger className="gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md">
                Модель
                <ChevronUp className="w-5 h-5" />
            </PopoverTrigger>

            <PopoverContent align="start" className="p-0 rounded-xl">
                <RadioGroup className="block" /*onValueChange={item => onChange(item)}*/>
                    <ul>
                        <li className="list-none flex">
                            <Label
                                className={clsx(
                                    'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                    modelAllItem.value === 'all' && ''
                                )}
                                htmlFor={modelAllItem.value}
                            >
                                <Checkbox
                                    onClick={() => onChange(modelAllItem.value)}
                                    checked={modelAllItem.status}
                                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    value={modelAllItem.value}
                                    id={modelAllItem.value}
                                />
                                {modelAllItem.label}
                            </Label>
                        </li>
                        {list.map((item, index) => (
                            <li key={index} className="list-none flex">
                                <Label
                                    className={clsx(
                                        'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                        item.value === 'all' && ''
                                    )}
                                    htmlFor={item.value}
                                >
                                    <Checkbox
                                        onClick={() => onChange(item.value)}
                                        checked={item.status}
                                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        value={item.value}
                                        id={item.value}
                                    />
                                    {item.label}
                                </Label>
                            </li>
                        ))}
                    </ul>
                </RadioGroup>
            </PopoverContent>
        </Popover>
    );
};

export default FilterModel;
