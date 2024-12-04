import { Button } from '@/shared/button';
import CarAddressForm from './components/car-address-form';
import CarDateForm from './components/car-date-form';
import CarDriverForm from './components/car-driver-form';
import useCarForm from '../../hooks/useCarForm';
import CarTotal from './components/car-total';

const CarRegistration = ({ price = 3000 }: { price: number }) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        onSelectChange,
        deliveryOption,
        errors,
        onChangeRentDate,
        dateRange,
        registrationObj,
    } = useCarForm(price);

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
                <CarDateForm
                    date={dateRange}
                    setDate={onChangeRentDate}
                    days={registrationObj.days}
                />
                <CarDriverForm register={register} errors={errors} />
                <Button type="submit" className="w-full py-6 bg-blue hover:bg-blue/90">
                    Забронировать
                </Button>
            </form>
            <CarTotal
                price={registrationObj.price}
                days={registrationObj.days}
                deliveryOption={registrationObj.deliveryOption}
                decrementSum={registrationObj.decrementSum}
                totalSum={registrationObj.totalSum}
                priceDays={registrationObj.price * registrationObj.days}
            />
        </div>
    );
};

export default CarRegistration;
