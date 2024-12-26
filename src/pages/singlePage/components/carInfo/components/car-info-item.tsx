import { Button } from '@/shared/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover';

const CarInfoItem = ({ properties, text, supp }: any) => {
    return (
        <li className=" text-sm flex  justify-between items-center py-1">
            <span className="text-nowrap text-gray-500 mr-2">{properties}</span>
            {supp !== null && (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="
                         min-w-[20px] h-[20px] w-[20px] text-[11px]
                         text-gray-500 bg-grey border-none
                          p-0 mr-2 rounded-[50%]"
                        >
                            ?
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 mr-[-100px]">
                        <div className="text-sm ">{supp}</div>
                    </PopoverContent>
                </Popover>
            )}
            <div className="max-w-[100%] w-full border-dashed border-b-[1px] mr-4"></div>
            <span className="block text-nowrap">{text}</span>
        </li>
    );
};

export default CarInfoItem;
