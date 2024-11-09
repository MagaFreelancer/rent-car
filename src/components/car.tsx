import { createContext, memo, ReactNode, useContext } from 'react';
import { cn } from '@/lib/utils.ts';
import { Star } from 'lucide-react';
import { SliderArrows, SliderBullets, SliderGroup } from '@/components/slider';

// Интерфейс для контекста автомобиля
interface IContextCar {
    model: string;
    brand: string;
    imgs: string;
}

interface IProviderCar {
    car: any;
    children: ReactNode;
    className?: string;
}

const ContextCar = createContext<IContextCar | undefined>(undefined);

const useCarContext = () => {
    const context = useContext(ContextCar);
    if (!context) {
        throw new Error('useCarContext must be used within a CarProvider');
    }
    return context;
};

const CardCarProviderComponent = ({ children, className, car }: IProviderCar) => (
    <ContextCar.Provider value={car}>
        <div className={cn('w-[365px] p-[6px] bg-white rounded-lg', className)}>
            <CardCarSlider />

            <div className="p-[10px]">{children}</div>
        </div>
    </ContextCar.Provider>
);

const CardCarSlider = () => {
    const { imgs } = useCarContext();
    return (
        <SliderGroup imgs={imgs}>
            <SliderBullets />
            <SliderArrows />
        </SliderGroup>
    );
};

const CardCarTitleComponent = ({ className }: { className?: string }) => {
    const { model, brand } = useCarContext();
    return (
        <p className={cn('text-[16px] font-medium', className)}>
            {brand}, {model}
        </p>
    );
};

const CardCarColComponent = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center">{children}</div>
);

const CardCarRatingComponent = ({ className }: { className?: string }) => (
    <p className={cn('flex items-center text-red-500 text-[14px]', className)}>
        5
        <Star className="text-red-500 w-[13px] h-[13px] ml-1" />
    </p>
);

const CardCarReviewsComponent = ({ className }: { className?: string }) => {
    return <p className={cn('text-gray-400 text-[14px] ml-2', className)}>8 отзывов</p>;
};

const CardCarPriceComponent = ({ className }: { className?: string }) => {
    return <p className={cn('text-[20px] font-bold', className)}>от 1900$ / сутки</p>;
};

const CardCarHrComponent = ({ className }: { className?: string }) => {
    return <hr className={cn('mb-[14px] mt-[10px]', className)} />;
};

export const CardCarGroup = memo(CardCarProviderComponent);
export const CardCarTitle = memo(CardCarTitleComponent);
export const CardCarRating = memo(CardCarRatingComponent);
export const CardCarCol = memo(CardCarColComponent);
export const CardCarReviews = memo(CardCarReviewsComponent);
export const CardCarPrice = memo(CardCarPriceComponent);
export const CardCarHr = memo(CardCarHrComponent);
