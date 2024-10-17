import clsx from 'clsx';
import { Heart, LifeBuoy, Users } from 'lucide-react';
import React, { memo } from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const CardProviderComponent = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className="font-jakarta font-bold w-full max-w-[300px] relative bg-white p-4 rounded-md">
            {children}
        </div>
    );
};

const CardSliderComponent = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className="mb-8">
            <img className="w-full object-cover" src={imgUrl} alt="Car" />
        </div>
    );
};

const CardBrandComponent = ({ brand }: { brand: string }) => {
    return <div className="font-medium text-sm text-[#90A3BF]">{brand}</div>;
};

const CardModelComponent = ({ model }: { model: string }) => {
    return <div className="mb-1 font-bold text-xl">{model}</div>;
};

const CardInfoComponent = ({
    fuel,
    transmission,
    capacity,
}: {
    fuel: number;
    transmission: string;
    capacity: number;
}) => {
    const itemClasses = clsx('flex items-center gap-[5px] text-[#90A3BF]');
    return (
        <ul className="flex justify-between items-center mb-6">
            <li className={itemClasses}>
                <LocalGasStationIcon className="h-5 w-5" />
                <span className="font-medium text-sm">{fuel}L</span>
            </li>
            <li className={itemClasses}>
                <LifeBuoy className="h-5 w-5" />
                <span className="font-medium text-sm"> {transmission}</span>
            </li>
            <li className={itemClasses}>
                <Users className="h-5 w-5" />
                <span className="font-medium text-sm"> {capacity}</span>
            </li>
        </ul>
    );
};

const CardPriceComponent = ({ price }: { price: number }) => {
    return (
        <div className="font-bold text-lg">
            ${price}/ <span className="text-[#90A3BF] text-sm">day</span>
        </div>
    );
};

const CardButtonComponent = () => {
    return (
        <a
            href="#"
            className="bg-black text-white transition ease-in-out duration-200 py-2 px-3 font-semibold text-sm rounded hover:bg-primary/90"
        >
            Rental Now
        </a>
    );
};

const CardGroupComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center justify-between gap-2">{children}</div>;
};

const CardFavoriteComponent = () => {
    return (
        <div className="absolute right-4 top-4">
            <Heart className="h-6 w-6 transition-all duration-200 ease-in-out text-[#90A3BF] hover:fill-[#ED3F3F] hover:text-[#ED3F3F] bg-transparent cursor-pointer" />
        </div>
    );
};

export const CardProvider = memo(CardProviderComponent);
export const CardSlider = memo(CardSliderComponent);
export const CardModel = memo(CardModelComponent);
export const CardBrand = memo(CardBrandComponent);
export const CardInfo = memo(CardInfoComponent);
export const CardPrice = memo(CardPriceComponent);
export const CardButton = memo(CardButtonComponent);
export const CardGroup = memo(CardGroupComponent);
export const CardFavorite = memo(CardFavoriteComponent);
