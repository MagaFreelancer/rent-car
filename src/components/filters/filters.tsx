import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import { getFilters } from '@/redux/slice/filters/filters-selectors.ts';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { RadioGroup, RadioGroupItem } from '@/shared/radio-group.tsx';
import { Label } from '@/shared/label.tsx';
import { setChangeBrands, setToggleDrives } from '@/redux/slice/filters/filters-slice.ts';
import { clsx } from 'clsx';
import { ChevronUp, CircleX } from 'lucide-react';
import { Checkbox } from '@/shared/checkbox.tsx';

const Filters = () => {
    const { brands, drives } = useAppSelector(getFilters);
    const dispatch = useAppDispatch();

    const brandsItemStatus = brands.find(item => item.status);
    const drivesItemStatus = drives.filter(item => item.status);

    console.log(brandsItemStatus);

    const handleChangeRadio = (value: string) => {
        dispatch(setChangeBrands(value));
    };

    const handleChangeCheckbox = (value: string) => {
        dispatch(setToggleDrives(value));
    };

    return (
        <div className="py-5">
            <div className="flex gap-3">
                <Popover>
                    <PopoverTrigger
                        className={clsx(
                            'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
                            brandsItemStatus?.value !== 'all' && '!bg-[#5394fd] text-white'
                        )}
                    >
                        Марка
                        {brandsItemStatus?.value !== 'all' && `: ${brandsItemStatus?.label}`}
                        {brandsItemStatus?.value !== 'all' ? (
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

                    <PopoverContent align="start" className="p-0 rounded-2xl">
                        <RadioGroup
                            className="block"
                            onValueChange={item => handleChangeRadio(item)}
                            defaultValue={brandsItemStatus?.value}
                        >
                            {brands?.map((item, index) => (
                                <li className="list-none flex" key={index}>
                                    <Label
                                        className={clsx(
                                            'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                            brandsItemStatus?.value === 'all' && ''
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

                <Popover>
                    <PopoverTrigger
                        className={clsx(
                            'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
                            drivesItemStatus[0].value !== 'all' && '!bg-[#5394fd] text-white'
                        )}
                    >
                        Привод
                        {drivesItemStatus[0].value !== 'all' &&
                            `: ${drivesItemStatus.find(item => item.value !== 'all' && item.status)?.label}`}
                        {drivesItemStatus[0].value !== 'all' ? (
                            <CircleX
                                onClick={e => {
                                    e.stopPropagation();
                                    handleChangeCheckbox('all');
                                }}
                                className=" z-50 w-4 z-55 h-4"
                            />
                        ) : (
                            <ChevronUp className="w-5 h-5" />
                        )}
                    </PopoverTrigger>

                    <PopoverContent align="start" className="p-0 rounded-2xl">
                        <RadioGroup
                            className="block"
                            onValueChange={item => handleChangeRadio(item)}
                            defaultValue={brandsItemStatus?.value}
                        >
                            {drives?.map((item, index) => (
                                <li className="list-none flex" key={index}>
                                    <Label
                                        className={clsx(
                                            'flex py-2 px-4 gap-2 items-center w-full text-[16px]',
                                            brandsItemStatus?.value === 'all' && ''
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
            </div>
        </div>
    );
};

export default Filters;

// import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
// import { getFilters } from '@/redux/slice/filters/filters-selectors.ts';
// import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
// import { RadioGroup, RadioGroupItem } from '@/shared/radio-group.tsx';
// import { Label } from '@/shared/label.tsx';
// import { setChangeBrands } from '@/redux/slice/filters/filters-slice.ts';
// import { clsx } from 'clsx';
// import { ChevronUp, CircleX } from 'lucide-react';
//
// const Filters = () => {
//     const { brands } = useAppSelector(getFilters);
//     const dispatch = useAppDispatch();
//
//     const searchItem = brands.find((item) => item.status);
//
//     const handleChangeRadio = (value: string) => {
//         dispatch(setChangeBrands(value));
//     }
//
//     return (
//         <div className="py-5">
//             <div>
//                 <Popover>
//                     <div className={clsx('items-center gap-2 py-2 px-4 rounded-xl shadow bg-white inline-flex', searchItem?.value !== 'all' && '!bg-[#5394fd] text-white')}>
//                         <PopoverTrigger>
//                             Марка
//                             {searchItem?.value !== 'all' && `: ${searchItem?.label}`}
//                         </PopoverTrigger>
//                         {searchItem?.value !== 'all' ? (
//                             <CircleX onClick={() => handleChangeRadio('all')} className="z-50 w-4 z-55 h-4" />
//                         ) : (
//                             <ChevronUp className="w-5 h-5" />
//                         )}
//                     </div>
//
//                     <PopoverContent sideOffset={15} align="start" className="absolute left-[-15px] p-0">
//                         <RadioGroup onValueChange={(item) => handleChangeRadio(item)} defaultValue={searchItem?.value}>
//                             {brands?.map((item, index) => (
//                                 <li className="list-none flex py-2 px-4 " key={index}>
//                                     <Label className={clsx('flex gap-2 items-center w-full text-[16px]', searchItem?.value === 'all' && '')} htmlFor={item.value}>
//                                         <RadioGroupItem className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300" value={item.value} id={item.value} />
//                                         {item.label}
//                                     </Label>
//                                 </li>
//                             ))}
//                         </RadioGroup >
//                     </PopoverContent>
//                 </Popover>
//             </div>
//         </div>
//     );
// };
//
// export default Filters;
