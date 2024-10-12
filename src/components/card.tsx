import React, { createContext, memo, useContext, useState } from 'react';

interface ICard {
    id: number;
    transmission: string;
    engine: number;
    name: string;
    price: number;
    imgs: string[];
    sale: number;
    hit: boolean;
}

type CardProps = ICard & {
    children: React.ReactNode;
};
type CardContextType = ICard;

const CardContext = createContext<CardContextType | undefined>(undefined);

function useCardContext() {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error('useInputContext must be used within an InputProvider');
    }
    return context;
}

const CardProviderComponent = ({ children, ...props }: CardProps): JSX.Element => {
    return (
        <CardContext.Provider value={props}>
            <a href="#" className="block w-full max-w-[238px]  relative">
                {children}
            </a>
        </CardContext.Provider>
    );
};

const CardSliderComponent = () => {
    return (
        <div className="mb-6">
            <img
                className="w-full  object-cover"
                src="https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/041/681/client_card/Peugeot-108-Open-Top-2019-white.webp?1680529864"
                alt=""
            />
        </div>
    );
};
const CardTypeComponent = () => {
    const { transmission } = useCardContext();
    return <span className="block text-sm text-grey font-medium">{transmission}</span>;
};

const CardNameComponent = () => {
    const { name } = useCardContext();
    return <h3 className="mb-2 font-bold text-xl">{name}</h3>;
};
const CardPriceComponent = () => {
    const { price } = useCardContext();
    return <span className="text-xl text-darkBlack font-medium">{price}$ </span>;
};
const CardSaleComponent = () => {
    const { sale } = useCardContext();
    return (
        <div className="absolute left-[10px] top-[10px] p-[10px] bg-darkOrange text-white text-xs uppercase">
            -{sale}%
        </div>
    );
};
const CardFavoriteComponent = () => {
    return <div className="absolute right-[10px] top-[10px]">+</div>;
};
export const CardProvider = memo(CardProviderComponent);
export const CardSlider = memo(CardSliderComponent);
export const CardType = memo(CardTypeComponent);
export const CardName = memo(CardNameComponent);
export const CardPrice = memo(CardPriceComponent);
export const CardSale = memo(CardSaleComponent);
export const CardFavorite = memo(CardFavoriteComponent);
