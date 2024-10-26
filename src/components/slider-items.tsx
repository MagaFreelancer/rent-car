import { Carousel, CarouselApi, CarouselContent } from '@/shared/carousel';
import SliderItem from './slider-item';
import { FC } from 'react';
interface IPropsSliderItems {
    imgs: string[];
    setApi?: (api: CarouselApi) => void;
}
const SliderItems: FC<IPropsSliderItems> = ({ imgs, setApi }: IPropsSliderItems) => {
    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {imgs.map((img, index) => (
                    <SliderItem key={index} ImgUrl={img} />
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default SliderItems;
