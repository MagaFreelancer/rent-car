import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/popover.tsx';
import { Input } from '@/shared/input.tsx';

const FilterPrice = () => {
    const [inputPriceFrom, setInputPriceFrom] = useState<number | string>('');
    const [inputPriceTo, setInputPriceTo] = useState<number | string>('');

    return (
        <Popover>
            <PopoverTrigger className="gap-1 shadow transition items-center py-2 px-4 flex rounded-xl bg-white hover:shadow-md">
                Цена, ₽
            </PopoverTrigger>

            <PopoverContent className="flex rounded-xl justify-between" align="start">
                <Input
                    onChange={event => setInputPriceFrom(event.target.value)}
                    className="w-[120px] border-none bg-[#f2f4f8] text-[16px] focus:bg-white"
                    placeholder="1000 ₽"
                    type="input"
                    value={inputPriceFrom}
                />
                <Input
                    onChange={event => setInputPriceTo(event.target.value)}
                    className="w-[120px] border-none bg-[#f2f4f8] text-[16px] focus:bg-white"
                    placeholder="120 000 ₽"
                    type="input"
                    value={inputPriceTo}
                />
            </PopoverContent>
        </Popover>
    );
    // const [priceValue, setPriceValue] = useState([price.from, price.to]);
    // const dispatch = useAppDispatch();
    //
    // const changePrice = () => {
    //     const from = priceValue[0] === 0 ? undefined : priceValue[0];
    //     const to = priceValue[1] === 0 ? undefined : priceValue[1];
    //
    //     dispatch(
    //         setChangePrice({
    //             from: from,
    //             to: to,
    //         })
    //     );
    // };
    // const handleSubmitPrice = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
    //         changePrice();
    //     }
    // };
    // const clearPrice = (key: 'from' | 'to') => {
    //     const keyNum = key === 'from' ? 0 : 1;
    //     priceValue[keyNum] = undefined;
    //     changePrice();
    // };
    //
    // return (
    //     <>
    //         {price.from === undefined && price.to !== undefined ? null : (
    //             <Popover>
    //                 <PopoverTrigger
    //                     className={clsx(
    //                         'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
    //                         price.from && '!bg-[#5394fd] text-white'
    //                     )}
    //                 >
    //                     {price.from ? `от ${price.from} ₽` : 'Цена, ₽'}
    //                     {price.from !== undefined ? (
    //                         <CircleX
    //                             onClick={() => clearPrice('from')}
    //                             className=" z-50 w-4 z-55 h-4"
    //                         />
    //                     ) : (
    //                         <ChevronUp className="w-5 h-5" />
    //                     )}
    //                 </PopoverTrigger>
    //
    //                 <PopoverContent align="start" className="flex p-4 rounded-xl gap-4">
    //                     <Input
    //                         onKeyDown={event => handleSubmitPrice(event)}
    //                         className="h-12 border-none bg-[#f2f4f8] text-[16px] focus:bg-white"
    //                         type="number"
    //                         placeholder="500 ₽"
    //                         value={priceValue[0] || ''}
    //                         onInput={e => {
    //                             setPriceValue([Number(e.currentTarget.value), priceValue[1]]);
    //                         }}
    //                     />
    //                     <Input
    //                         onKeyDown={event => handleSubmitPrice(event)}
    //                         className="h-12 border-none bg-[#f2f4f8] text-[16px] focus:bg-white"
    //                         type="number"
    //                         placeholder="1000 ₽"
    //                         value={priceValue[1] || ''}
    //                         onInput={e => {
    //                             setPriceValue([priceValue[0], Number(e.currentTarget.value)]);
    //                         }}
    //                     />
    //                 </PopoverContent>
    //             </Popover>
    //         )}
    //
    //         {price.to !== undefined && (
    //             <Popover>
    //                 <PopoverTrigger
    //                     className={clsx(
    //                         'gap-1 shadow items-center py-2 px-4 flex rounded-xl bg-white',
    //                         price.to && '!bg-[#5394fd] text-white'
    //                     )}
    //                 >
    //                     {`До ${price.to} ₽`}
    //                     {price.to !== undefined ? (
    //                         <CircleX
    //                             onClick={() => clearPrice('to')}
    //                             className=" z-50 w-4 z-55 h-4"
    //                         />
    //                     ) : (
    //                         <ChevronUp className="w-5 h-5" />
    //                     )}
    //                 </PopoverTrigger>
    //
    //                 <PopoverContent align="start" className="flex p-4 rounded-xl gap-4">
    //                     <Input
    //                         onKeyDown={event => handleSubmitPrice(event)}
    //                         className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
    //                         type="number"
    //                         placeholder="500 ₽"
    //                         value={priceValue[0] || ''}
    //                         onInput={e => {
    //                             setPriceValue([Number(e.currentTarget.value), priceValue[1]]);
    //                         }}
    //                     />
    //                     <Input
    //                         onKeyDown={event => handleSubmitPrice(event)}
    //                         className="h-12 bg-[#f2f4f8] text-[16px] focus:bg-white"
    //                         type="number"
    //                         placeholder="1000 ₽"
    //                         value={priceValue[1] || ''}
    //                         onInput={e => {
    //                             setPriceValue([priceValue[0], Number(e.currentTarget.value)]);
    //                         }}
    //                     />
    //                 </PopoverContent>
    //             </Popover>
    //         )}
    //     </>
    // );
};

export default FilterPrice;
