import Slider from '@/components/slider';

import CarDetails from './car-details';
import Container from '@/shared/container';
import { TextFieldInput, TextFieldProvider, TextFieldToggle } from '@/components/textField';
import usePasswordInput from '@/utils/hooks/usePasswordInput';
import useInput from '@/utils/hooks/useInput';

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
            <div>
                <div className="grid grid-cols-2 gap-12 p-3 mb-8">
                    <Slider />
                    <CarDetails obj={obj} />
                </div>
            </div>
        </Container>
    );
};

export default SinglePage;
