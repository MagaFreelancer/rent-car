import { Heart } from 'lucide-react';

import Title from '@/shared/Title';
import CarRating from './car-rating';
import CarFeatures from './car-features';
import CarRegistration from './car-registration';

const CarDetails = ({ obj }: any) => {
    return (
        <div className="relative">
            <Heart className="absolute top-2 right-2 h-6 w-6 transition-all duration-200 ease-in-out text-grey hover:fill-[#ED3F3F] hover:text-[#ED3F3F] bg-transparent cursor-pointer" />
            <Title className="mb-1">X5</Title>
            <span className="block mb-3 font-medium text-sm text-grey">BMW</span>
            <CarRating />
            <CarFeatures obj={obj.features} />

            <div className="flex justify-between items-center">
                <div className="text-2xl font-medium">
                    $29/<span className="text-[#90A3BF] text-xl">day</span>
                </div>
                <CarRegistration />
            </div>
        </div>
    );
};

export default CarDetails;
