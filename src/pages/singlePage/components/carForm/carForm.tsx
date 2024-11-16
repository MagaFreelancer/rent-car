
import { Button } from "@/shared/button"
import CarAddressForm from './components/carAddressForm';
import CarDateForm from './components/carDateForm';
import CarDriverForm from './components/carDriverForm';
import useCarForm from "../../hooks/useCarForm";

const CarForm = () => {
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
    return (
        <div className='bg-white py-6 px-4 rounded-lg'>
            <h3 className='mb-3'>оформление</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <CarAddressForm onSelectChange={onSelectChange} register={register} errors={errors} deliveryOption={deliveryOption} />
                <CarDateForm date={date} setDate={setDate} />
                <CarDriverForm register={register} errors={errors} />
                <Button type='submit' className='w-full py-6 bg-blue hover:bg-blue/90'>Забронировать</Button>
            </form>
        </div>
    )
}

export default CarForm