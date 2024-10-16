import { useState } from 'react';
import { Rating } from '@mui/material';

const CarRating = () => {
    const [value, setValue] = useState<number | null>(2);

    return (
        <div className="flex items-center mb-5">
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
            />
            <span className="inline-block text-sm font-medium ml-2 mb-[-1px]">{value}</span>
            <span className="inline-block text-[11px] mb-[-2px] ml-1">({21})</span>
        </div>
    );
};

export default CarRating;
