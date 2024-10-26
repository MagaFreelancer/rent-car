import Slider from '@/components/slider';

import CarDetails from './components/carDetails/car-details';
import Container from '@/shared/container';

const obj = {
    id: 1,
    brand: 'BMW',
    model: 'X5',
    price: 20,
    imgs: [
        'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/041/407/client_card/MG-5-2021-blue.webp?1679988549',
        'https://s3-eu-west-1.amazonaws.com/localrent.images/images/files/000/186/968/fullscreen/WhatsApp_Image_2021-07-24_at_3.26.45_PM_(2).webp?1725271222',
        'https://s3-eu-west-1.amazonaws.com/localrent.images/images/files/000/186/969/fullscreen/WhatsApp_Image_2021-07-24_at_3.26.45_PM_(1).webp?1725271224',
    ],
    sale: 20,
    hit: true,
    features: {
        fuel: 70, //бензин
        transmission: 'Manual',
        capacity: 4,
        engine: 1.5,
        year: 2020,
    },
};

const SinglePage = () => {
    return (
        <Container>
            <div className="max-h-[500px] h-full grid grid-cols-2 gap-8 py-3 mb-8">
                <Slider imgs={obj.imgs} />
                <CarDetails obj={obj} />
            </div>
        </Container>
    );
};

export default SinglePage;
