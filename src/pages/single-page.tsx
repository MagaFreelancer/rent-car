import { Heart } from 'lucide-react';
import { Rating, Collapse } from '@mui/material';
import { useState } from 'react';
import { Button } from '@/shared/button';
import Slider from '@/components/slider';
import Title from '@/shared/Title';
const SinglePage = () => {
    const [value, setValue] = useState<number | null>(2);
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="grid grid-cols-2 gap-12 p-3">
                <div className="relative">
                    <Slider />
                    <div className="absolute left-[15px] top-[15px] p-[10px] bg-darkOrange text-white text-xs uppercase">
                        -20%
                    </div>
                    <div className="absolute right-[15px] top-[15px]">
                        <Heart className="h-6 w-6 hover:fill-darkBlack bg-transparent cursor-pointer" />
                    </div>
                </div>
                <div className="">
                    <Title className="mb-3">Заголовок</Title>

                    <div className="flex items-center mr-4">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(_, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <span className="inline-block text-sm font-medium ml-2 mb-[-1px]">
                            {value}
                        </span>
                        <span className="inline-block text-[11px] mb-[-2px] ml-1">({21})</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePage;
