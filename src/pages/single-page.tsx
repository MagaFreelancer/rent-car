import Slider from '@/components/slider';
import Title from '@/shared/Title';
import { Heart } from 'lucide-react';
import Rating from '@/components/rating';

const SinglePage = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-12 py-5">
                <div className="relative">
                    <Slider />
                    <div className="absolute left-[15px] top-[15px] p-[10px] bg-darkOrange text-white text-xs uppercase">
                        -20%
                    </div>
                    <div className="absolute right-[15px] top-[15px]">
                        <Heart className="h-6 w-6 hover:fill-darkBlack bg-transparent cursor-pointer" />
                    </div>
                </div>
                <div className="">
                    <Title className="mb-3">Заголовок</Title>
                    <p>
                        Кроссовки Nike Air VaporMax 2023 Flyknit с поддерживающей амортизацией,
                        созданной для плавного бега, представляет собой совершенно новый взгляд на
                        знакомую коллекцию.
                    </p>
                    <Rating />
                </div>
            </div>
        </>
    );
};

export default SinglePage;
