import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { ChevronUp } from 'lucide-react';

const FiltersAll = () => {
    return (
        <Popover>
            <PopoverTrigger className="gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md">
                Все фильтры
                <ChevronUp className="w-5 h-5" />
            </PopoverTrigger>

            <PopoverContent align="start" className="p-0 rounded-xl">
                all filters
            </PopoverContent>
        </Popover>
    );
};

export default FiltersAll;
