import React from 'react';
import { cn } from '@/lib/utils';
import useSlider from '@/utils/hooks/useSlider';
import clsx from 'clsx';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/carousel';
import {
    CardCarCol,
    CardCarGroup,
    CardCarHr,
    CardCarPrice,
    CardCarRating,
    CardCarReviews,
    CardCarTitle,
} from '../car';
import Title from '@/shared/Title';

interface Props {
    className?: string;
    objs: any[];
    title: string;
    beforeTitle?: string;
}

export const CategoryCarsSlider: React.FC<Props> = ({
    className,
    objs,
    title,
    beforeTitle,
}: Props) => {
    const { setApi } = useSlider();

    return (
        <div className={cn('my-[80px]', className)}>
            <div className="flex items-center mb-4">
                {beforeTitle && (
                    <span className="block mr-3 bg-[#172335] text-white font-bold text-[11px] rounded-[6px] uppercase py-[6px] px-[10px]">
                        {beforeTitle}
                    </span>
                )}
                <Title>{title}</Title>
            </div>
            <Carousel setApi={setApi} className={clsx('relative font-jakarta', className)}>
                <CarouselContent>
                    {objs.map((obj: any, index: number) => (
                        <CarouselItem
                            className="basis-1/4  max-md:basis-1/2 max-sm:basis-full "
                            key={index}
                        >
                            <CardCarGroup className="max-md:max-w-full" car={obj} type="card">
                                <CardCarTitle />

                                <CardCarCol>
                                    <CardCarRating />
                                    <CardCarReviews />
                                </CardCarCol>

                                <CardCarHr />
                                <CardCarPrice />
                            </CardCarGroup>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 h-[56px] w-[56px] rounded-[50%]  max-md:hidden " />
                <CarouselNext className="right-0 h-[56px] w-[56px] rounded-[50%] max-md:hidden  " />
            </Carousel>
        </div>
    );
};
