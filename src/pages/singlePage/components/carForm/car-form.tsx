import CarDate from '../car-date';
import useFormFields from './hooks/useFormFields';
import CarFormDriver from './components/car-form-drive';
import CarDelivery from '../car-delivery';
import { Button } from '@/shared/button';

const CarForm = () => {
    const {
        dateRange,
        onDateChange,
        onSumbit,
        onChangeSelectValue,
        showAddress,
        errors,
        register,
        handleSubmit,
    } = useFormFields();

    return (
        <form onSubmit={handleSubmit(onSumbit)} className="grid gap-4 pt-4 pb-20 overflow-y-scroll">
            <CarDelivery
                onChange={onChangeSelectValue}
                register={register}
                errors={errors}
                showAddress={showAddress}
            />
            <CarDate errors={errors} dateRange={dateRange} onDateChange={onDateChange} />
            <CarFormDriver register={register} errors={errors} />
            <div className="fixed flex justify-between items-center bottom-0 left-0 right-0 p-5 bg-white">
                <div className=" text-xl">Итого: 320$</div> <Button type="submit">Оформить</Button>
            </div>
        </form>
    );
};

export default CarForm;
