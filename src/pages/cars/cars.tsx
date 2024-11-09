// import Filters from '@/components/filters/filters.tsx';
// import Car from '@/components/car.tsx';

import {
    CardCarCol,
    CardCarGroup,
    CardCarHr,
    CardCarPrice,
    CardCarRating,
    CardCarReviews,
    CardCarTitle,
} from '@/components/car.tsx';
import Container from '@/shared/container.tsx';

const Cars = () => {
    const car = {
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
            fuel: 70,
            transmission: 'Manual',
            capacity: 4,
            engine: 1.5,
            year: 2020,
        },
    };

    return (
        <div>
            <Container>
                {/*<Filters />*/}
                {/*<Car/>*/}
                <CardCarGroup car={car}>
                    <CardCarTitle />

                    <CardCarCol>
                        <CardCarRating />
                        <CardCarReviews />
                    </CardCarCol>

                    <CardCarHr />
                    <CardCarPrice />
                </CardCarGroup>
            </Container>
        </div>
    );
};

export default Cars;
