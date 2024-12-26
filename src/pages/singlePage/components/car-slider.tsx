import { SliderGroup, SliderBullets, SliderArrows } from '@/components/slider';
import { cn } from '@/lib/utils';

const CarSlider = ({ car, className }: any) => {
    return (
        <div className={cn('relative mb-4', className)}>
            <span className="absolute left-2 top-2 text-xs z-10 bg-[#3F71BC] text-white p-1 rounded px-2">
                Новинка
            </span>
            <SliderGroup imgs={car.imgs}>
                <SliderBullets />
                <SliderArrows />
            </SliderGroup>
        </div>
    );
};

export default CarSlider;
