import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { clsx } from 'clsx';
import { ChevronUp, CircleX } from 'lucide-react';
import { RadioGroup } from '@/shared/radio-group.tsx';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import BrandList from '@/components/filters/components/brands-sort/components/brand-list.tsx';

interface IBrandsSortProps {
    onChange: (value: string) => void;
    activeItem: TypeBrands | undefined;
    list: TypeBrands[];
}

const BrandsSort = ({ onChange, activeItem, list }: IBrandsSortProps) => {
    return (
        <Popover>
            <PopoverTrigger
                className={clsx(
                    'gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md',
                    activeItem?.value !== 'all' && '!bg-[#5394fd] text-white'
                )}
            >
                Марка
                {activeItem?.value !== 'all' && `: ${activeItem?.label}`}
                {activeItem?.value !== 'all' ? (
                    <CircleX
                        onClick={e => {
                            e.stopPropagation();
                            onChange('all');
                        }}
                        className=" z-50 w-4 z-55 h-4"
                    />
                ) : (
                    <ChevronUp className="w-5 h-5" />
                )}
            </PopoverTrigger>

            <PopoverContent align="start" className="p-0 rounded-xl">
                <RadioGroup className="block" onValueChange={item => onChange(item)}>
                    <BrandList brands={list} />
                </RadioGroup>
            </PopoverContent>
        </Popover>
    );
};

export default BrandsSort;
