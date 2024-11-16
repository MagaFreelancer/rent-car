import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useGetCar from './hooks/useGetCar'
import useCarForm from './hooks/useCarForm';
import CarForm from './components/carForm/carForm';
import CarSlider from './components/carSlider';
import Container from '@/shared/container';

const SinglePage = () => {
    const { car, statusCar } = useGetCar()
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        onSubmit,
        onSelectChange,
        date,
        setDate,
        deliveryOption,
        errors
    } = useCarForm()

    if (!statusCar) {
        return <h1>Loading</h1>
    }
    return (
        <Container>
            <div className='font-inter'>
            <CarSlider car={car} />
            

            <div className='bg-white py-6 px-4 mb-4 rounded-lg'>
                <h2 className="mb-3">{car.brand} {car.title}, {car.year}</h2>
                <Rating
                    name="text-feedback"
                    value={0}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </div>
            <div className='bg-white py-6 px-4 mb-4 rounded-lg'>
                <div>
                    <h3>Правила аренды</h3>
                </div>
                <div>
                    <h3>
                        Характеристики автомобиля
                    </h3>
                </div>
            </div>
            <CarForm
                date={date}
                setDate={setDate}
                errors={errors}
                onSelectChange={onSelectChange}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                deliveryOption={deliveryOption}
            />
        </div>
        </Container>
    )
}

export default SinglePage