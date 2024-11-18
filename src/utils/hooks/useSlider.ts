import { type CarouselApi } from '@/shared/carousel';
import { useEffect, useState } from 'react';

const useSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api, current, count]);

    const onClickBullets = (index: number) => {
        api?.scrollTo(index);
    };

    return {
        setApi,
        onClickBullets,
        current,
        count,
    };
};

export default useSlider;
