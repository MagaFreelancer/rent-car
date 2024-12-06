import { PopoverContent, PopoverTrigger, Popover } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import { Input } from '@/shared/input.tsx';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';

interface IFiltersAllProps {
    brands: TypeBrands[];
}

const FiltersAll = ({ brands }: IFiltersAllProps) => {
    console.log(brands);

    return (
        <Popover>
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
                <Input placeholder="Марка" />
            </PopoverContent>
        </Popover>
    );
};

export default FiltersAll;
