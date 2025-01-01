import { cn } from '@/lib/utils.ts';
import { ArrowDownUp } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { TypeSort } from '@/redux/slice/filters/filters-slice.ts';
import { RadioGroup } from '@/shared/radio-group.tsx';
import ListSort from '@/components/filters/components/sort/component/list-sort.tsx';

interface ISortPriceProvider {
    className?: string;
    list: TypeSort[];
    title: string | undefined;
    onChange: (value: string) => void;
}

const Sort = ({ onChange, className, list, title }: ISortPriceProvider) => {
    return (
        <div
            className={cn(
                'flex gap-1 shadow items-center py-2 px-4 rounded-xl bg-white hover:shadow-md transition hover:cursor-pointer',
                className
            )}
        >
            <Popover>
                <PopoverTrigger>
                    <div className="flex gap-2">
                        <div className="bg-[#f0f6ff] rounded-full p-1">
                            <ArrowDownUp className="h-4 w-4 text-blue" />
                        </div>
                        {title}
                    </div>
                </PopoverTrigger>

                <PopoverContent side="top" align="center" className="p-0 rounded-xl">
                    <RadioGroup onValueChange={item => onChange(item)}>
                        <ListSort list={list} />
                    </RadioGroup>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Sort;
