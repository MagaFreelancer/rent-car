import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useGetCar from './hooks/useGetCar';
import CarForm from './components/carForm/carForm';
import CarSlider from './components/car-slider';
import Container from '@/shared/container';
import CarInfo from './components/carInfo';
import CarsLike from '@/components/cars-like';

const SinglePage = () => {
    const { car, statusCar } = useGetCar();

    if (!statusCar) {
        return <h1>Loading</h1>;
    }
    return (
        <Container>
            <div className="font-inter">
                <CarSlider car={car} />
                <div className="bg-white py-6 px-4 mb-4 rounded-lg">
                    <h2 className="mb-2">
                        {car.brand} {car.title}, {car.year}
                    </h2>
                    <Rating
                        size="small"
                        name="text-feedback"
                        value={0}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </div>
                <CarForm />
                <CarInfo />
                <CarsLike />
            </div>
        </Container>
    );
};

export default SinglePage;
