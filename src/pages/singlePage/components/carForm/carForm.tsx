import { Button } from '@/shared/button';
import CarAddressForm from './components/carAddressForm';
import CarDateForm from './components/carDateForm';
import CarDriverForm from './components/carDriverForm';
import useCarForm from '../../hooks/useCarForm';
import CarTotal from './components/carTotal';
import useDateRange from '@/utils/hooks/useDateRange';
import { createContext, useContext } from 'react';
import { Provider } from 'react-redux';

// const TotalContext = createContext({

// });
// const useCarFormContext = () => {
//     const context = useContext(TotalContext);
//     if (!context) {
//         throw new Error('useCarFormContext must be used within a CarFormProvider');
//     }
//     return context;
// };

const CarForm = ({ price = 3000 }: any) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        onSelectChange,
        deliveryOption,
        errors,
        onChangeRentDate,
        RentDate,
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
                    date={RentDate}
                    setDate={onChangeRentDate}
                    days={registrationObj.days}
                />
                <CarDriverForm register={register} errors={errors} />
                <Button type="submit" className="w-full py-6 bg-blue hover:bg-blue/90">
                    Забронировать
                </Button>
            </form>
            <CarTotal sum={registrationObj.price} days={registrationObj.days} />
        </div>
    );
};

export default CarForm;
