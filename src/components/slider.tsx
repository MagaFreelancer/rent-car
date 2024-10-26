import { FC } from 'react';
import SliderBullets from './slider-bullets';
import useSlider from '@/utils/hooks/useSlider';
import SliderItems from './slider-items';
interface IPropsSlider {
    imgs: string[];
}

const Slider: FC<IPropsSlider> = ({ imgs }: IPropsSlider) => {
    const { setApi, onClickBullets, current, count } = useSlider();

    return (
        <div className="relative">
            <SliderItems imgs={imgs} setApi={setApi} />
            <SliderBullets count={count} current={current - 1} setCurrent={onClickBullets} />
        </div>
    );
};

export default Slider;
