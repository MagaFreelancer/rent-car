
import { Button } from "@/shared/button"
import CarAddressForm from './components/carAddressForm';
import CarDateForm from './components/carDateForm';
import CarDriverForm from './components/carDriverForm';
import useCarForm from "../../hooks/useCarForm";
import CarTotal from "./components/carTotal";

const CarForm = ({ price }: any) => {
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
        <div className='bg-white rounded-lg mb-4'>
            <h3 className='mb-3'>оформление</h3>
            <form className="py-6 px-4 " onSubmit={handleSubmit(onSubmit)} >
                <CarAddressForm onSelectChange={onSelectChange} register={register} errors={errors} deliveryOption={deliveryOption} />
                <CarDateForm date={date} setDate={setDate} />
                <CarDriverForm register={register} errors={errors} />
                <Button type='submit' className='w-full py-6 bg-blue hover:bg-blue/90'>Забронировать</Button>
            </form>
            <CarTotal />
        </div>
    )
}

export default CarForm