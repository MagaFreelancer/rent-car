import { PopoverContent, PopoverTrigger, Popover } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';
import FiltersBrands from '@/components/filters/components/filters-all/components/filters-brands/filters-brands';

const FiltersAll = () => {
    return (
        <div>
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
                    <FiltersBrands />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default FiltersAll;
