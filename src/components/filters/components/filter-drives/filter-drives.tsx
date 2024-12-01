import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { clsx } from 'clsx';
import { ChevronUp, CircleX } from 'lucide-react';
import { RadioGroup } from '@/shared/radio-group.tsx';
import { TypeDrives } from '@/redux/slice/filters/filters-slice.ts';
import DrivesList from '@/components/filters/components/filter-drives/components/drives-list.tsx';

interface IFilterDrivesProps {
    onChange: (value: string) => void;
    drives: TypeDrives[];
    activeItems: TypeDrives[];
}

const FilterDrives = ({ onChange, drives, activeItems }: IFilterDrivesProps) => {
    return (
        <>
            {activeItems.map((item, index) => (
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
                                    onChange(item.value);
                                }}
                                className=" z-50 w-4 z-55 h-4"
                            />
                        ) : (
                            <ChevronUp className="w-5 h-5" />
                        )}
                    </PopoverTrigger>
                    <PopoverContent align="start" className="p-0 rounded-xl">
                        <RadioGroup className="block" onValueChange={value => onChange(value)}>
                            <DrivesList onChange={onChange} drives={drives} />
                        </RadioGroup>
                    </PopoverContent>
                </Popover>
            ))}
        </>
    );
};

export default FilterDrives;
