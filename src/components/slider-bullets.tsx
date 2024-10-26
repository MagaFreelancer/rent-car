import SliderBullet from './slider-bullet';
interface IPropsSliderBullet {
    count: number;
    current: number;
    setCurrent: (current: number) => void;
}
const SliderBullets = ({ count, current, setCurrent }: IPropsSliderBullet) => {
    return (
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex items-center gap-1">
            {[...Array(count)].map((_, index) => (
                <SliderBullet
                    isActive={current === index}
                    onClick={() => setCurrent(index)}
                    key={index}
                />
            ))}
        </div>
    );
};

export default SliderBullets;
