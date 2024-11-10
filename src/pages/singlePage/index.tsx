import { SliderGroup, SliderBullets, SliderArrows } from '@/components/slider'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useGetCar from './hooks/useGetCar'
import CarForm from './components/carForm';
import useCarForm from './hooks/useForm';




const SinglePage = () => {
    const { car, statusCar } = useGetCar()
    const {
         register,
        handleSubmit,
        control,
        watch,
        setValue,
        onSelectChange,
        deliveryOption,
        formState: { errors } 
    } = useCarForm()

    if (!statusCar) {
        return <h1>Loading</h1>
    }
    return (
        <div className='font-inter'>
            <div className='relative'>
                <span className='absolute left-2 top-2 text-xs z-10 bg-[#3F71BC] text-white p-1 rounded px-2'>
                    Новинка
                </span>
                <SliderGroup imgs={car.imgs}>
                    <SliderBullets />
                    <SliderArrows />
                </SliderGroup>
            </div>
            <div className='bg-white py-6 px-4'>
                <h3 className='mb-3'>оформление</h3>
                <CarForm onSelectChange={onSelectChange} register={register} deliveryOption={deliveryOption} />
            </div>
            <div className='bg-white py-6 px-4'>
                <h2 className="mb-3">{car.brand} {car.title}, {car.year}</h2>
                <Rating
                    name="text-feedback"
                    value={0}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </div>
            <div className='bg-white py-6 px-4'>
                <div>
                    <h3>Правила аренды</h3>
                </div>
                <div>
                    <h3>
                        Характеристики автомобиля
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default SinglePage