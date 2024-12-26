import { createContext, useContext } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/carousel.tsx';
import useSlider from '@/utils/hooks/useSlider.ts';
import { memo } from 'react';
import clx from 'clsx';
// interface IPropsSliderItems {
//     imgs: string[];
//     setApi?: (api: CarouselApi) => void;
// }
const sliderContext = createContext<any | undefined>(undefined);

const useSliderContext = () => {
    const context = useContext(sliderContext);
    if (!context) {
        throw new Error('useSliderContext must be used within a SliderProvider');
    }
    return context;
};
const SliderProviderComponent = ({ children, imgs, className }: any) => {
    const { setApi, current, count } = useSlider();
    return (
        <sliderContext.Provider value={{ imgs, current, count }}>
            <Carousel setApi={setApi} className={clx('relative font-jakarta', className)}>
                <CarouselContent>
                    {imgs.map((url: any, index: number) => (
                        <CarouselItem key={index}>
                            <img
                                className="rounded-lg w-full h-[100%]"
                                src={url}
                                alt={`car ${index + 1}`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {children}
            </Carousel>
        </sliderContext.Provider>
    );
};

const SliderBulletsComponent = () => {
    const { current, count } = useSliderContext();
    return (
        <>
            <span className="absolute text-xs text-white bg-[rgba(23,35,53,.56)] p-1 rounded px-2  bottom-3 left-1/2 translate-x-[-50%] ">
                {current} / {count}
            </span>
        </>
    );
};
const SliderArrowsComponent = () => {
    return (
        <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </>
    );
};

export const SliderGroup = memo(SliderProviderComponent);
export const SliderBullets = memo(SliderBulletsComponent);
export const SliderArrows = memo(SliderArrowsComponent);
