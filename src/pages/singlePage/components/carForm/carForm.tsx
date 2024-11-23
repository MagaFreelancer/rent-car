import { Button } from '@/shared/button';
import CarAddressForm from './components/carAddressForm';
import CarDateForm from './components/carDateForm';
import CarDriverForm from './components/carDriverForm';
import useCarForm from '../../hooks/useCarForm';
import CarTotal from './components/carTotal';
import useDateRange from '@/utils/hooks/useDateRange';
const CarForm = ({ price }: any) => {
    const { register, handleSubmit, onSubmit, onSelectChange, deliveryOption, errors } =
        useCarForm();
    const { dateRange, onChangeDateRange } = useDateRange();

    return (
        <div className="bg-white rounded-lg py-6 px-4 mb-4">
            <h3 className="mb-5  font-semibold ">Оформление</h3>
            <form className=" mb-4" onSubmit={handleSubmit(onSubmit)}>
                <CarAddressForm
                    onSelectChange={onSelectChange}
                    register={register}
                    errors={errors}
                    deliveryOption={deliveryOption}
                />
                <CarDateForm date={dateRange} setDate={onChangeDateRange} />
                <CarDriverForm register={register} errors={errors} />
                <Button type="submit" className="w-full py-6 bg-blue hover:bg-blue/90">
                    Забронировать
                </Button>
            </form>
            <CarTotal />
        </div>
    );
};

export default CarForm;
