import {
    CardCarCol,
    CardCarGroup,
    CardCarHr,
    CardCarPrice,
    CardCarRating,
    CardCarReviews,
    CardCarTitle,
} from '@/components/car.tsx';

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
    new: true,
    delivery: true,
    carRentDate: {
        from: '2023-01-01',
        to: '2023-01-03',
    },
    carDetails: {
        rentalRules: {
            mileageMax: {
                text: '5 000 км',
                supp: null,
            },
            deposit: {
                text: '10 000 ₽',
                supp: 'Депозит замораживается за 3 дня до аренды и возвращается через 7 дней после ее окончания.',
            },
            minimumExperience: {
                text: '3 года',
                supp: null,
            },
            minimumAge: {
                text: '21 год',
                supp: null,
            },
            insurance: {
                text: 'ОСАГО мультидрайв',
                supp: 'Полис распространяется на всех водителей автомобиля',
            },
        },
        carSpecifications: {
            engine: {
                text: 'бензин, 1.5 литров',
                supp: null,
            },
            drive: {
                text: 'передний',
                supp: null,
            },
            year: {
                text: '2023',
                supp: null,
            },
            seats: {
                text: '4',
                supp: null,
            },
            transmission: {
                text: 'автоматическая',
                supp: null,
            },
            mileage: {
                text: '< 50 тыс.км',
                supp: null,
            },
            body: {
                text: 'универсал',
                supp: null,
            },
            class: {
                text: 'стандарт',
                supp: null,
            },
            steering: {
                text: 'руль слева',
                supp: null,
            },
        },
    },
    reviews: [
        {
            id: 1,
            name: 'Вася',
            rating: 5,
            text: 'Все очень понравилось! Авто просто превосходно!',
            createdDate: '2022-01-01',
        },
    ],
};

const CarsLikeItem = () => {
    return (
        <li>
            <CardCarGroup car={car}>
                <CardCarTitle />

                <CardCarCol>
                    <CardCarRating />
                    <CardCarReviews />
                </CardCarCol>

                <CardCarHr />
                <CardCarPrice />
            </CardCarGroup>
        </li>
    );
};

export default CarsLikeItem;
