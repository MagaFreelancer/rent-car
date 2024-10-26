import CarDate from '../car-date';
import CarFormDriver from './components/car-form-drive';
import CarDelivery from '../car-delivery';
import { Button } from '@/shared/button';
import useDateRange from '@/utils/hooks/useDateRange';
import useSelectForm from './hooks/useSelectForm';
import useAddressUpdater from './hooks/useAddressUpdater';
import useHookForm from './hooks/useHookForm';

const CarForm = () => {
    const { dateRange, onChangeDateRange } = useDateRange();
    const { value, onSelectFormChange } = useSelectForm('inOffice');
    const { handleSubmit, register, setValue, errors, onSumbit } = useHookForm();
    const checkValueSelect = value === 'delivery';
    useAddressUpdater(checkValueSelect, setValue);

    const sum = 300;
    const delivery = 100;
    return (
        <form onSubmit={handleSubmit(onSumbit)} className="grid gap-4 pt-4 pb-20 overflow-y-scroll">
            <CarDelivery
                onChange={onSelectFormChange}
                register={register}
                errors={errors}
                showAddress={checkValueSelect}
            />
            <CarDate dateRange={dateRange} onDateChange={onChangeDateRange} />
            <CarFormDriver register={register} errors={errors} />
            <div className="fixed flex justify-between items-center bottom-0 left-0 right-0 p-5 bg-white">
                <div className="text-xl">Итого: {sum + delivery}$</div>{' '}
                <Button type="submit">Оформить</Button>
            </div>
        </form>
    );
};

export default CarForm;
