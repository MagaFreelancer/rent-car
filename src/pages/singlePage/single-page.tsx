import Slider from '@/components/slider';

import CarDetails from './components/carDetails/car-details';
import Container from '@/shared/container';

const obj = {
    id: 1,
    brand: 'BMW',
    model: 'X5',
    price: 20,
    imgs: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
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
            <div className="grid grid-cols-2 gap-12 py-3 mb-8">
                <Slider />
                <CarDetails obj={obj} />
            </div>
        </Container>
    );
};

export default SinglePage;
