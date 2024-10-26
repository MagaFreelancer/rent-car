import { CarouselItem } from '@/shared/carousel';
interface IPropsSliderItem {
    ImgUrl: string;
}
const SliderItem = ({ ImgUrl }: IPropsSliderItem) => {
    return (
        <CarouselItem>
            <img
                className="w-full h-full object-cover object-center"
                src={ImgUrl}
                alt="slider-img"
            />
        </CarouselItem>
    );
};

export default SliderItem;
