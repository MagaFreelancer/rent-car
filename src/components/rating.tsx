import { Star } from 'lucide-react';
import React from 'react';

const Rating = () => {
    const arr = [...new Array(5)];
    console.log(arr);

    return (
        <div className="flex group">
            <div className="rating_item hover:text-[#989898] group-hover:text-[#989898]">★</div>
            <div className="rating_item hover:text-[#989898] group-hover:text-[#989898]">★</div>
            <div className="rating_item hover:text-[#989898] group-hover:text-[#989898]">★</div>
            <div className="rating_item hover:text-[#989898] group-hover:text-[#989898]">★</div>
            <div className="rating_item hover:text-[#989898] group-hover:text-[#989898]">★</div>
        </div>
    );
};

export default Rating;
