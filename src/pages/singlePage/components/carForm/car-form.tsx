import CarDate from '../car-date';

import CarFormDriver from './components/car-form-drive';

import CarDelivery from '../car-delivery';
import { Button } from '@/shared/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { carRegistrationSchema } from '@/utils/yup';
import useDateRange from '@/utils/hooks/useDateRange';
import { addDays } from 'date-fns';
import useSelectForm from './hooks/useSelectForm';
import useAddressUpdater from './hooks/useAddressUpdater';
const CarForm = () => {
    const {
        handleSubmit,
        formState: { errors },
        setValue,
        register,
    } = useForm({
        resolver: yupResolver(carRegistrationSchema),
    });
    const { dateRange, onChangeDateRange } = useDateRange({
        from: new Date(),
        to: addDays(new Date(), 3),
    });
    const { value, onSelectFormChange } = useSelectForm('inOffice');

    useAddressUpdater(value === 'delivery', setValue);
    const onSumbit = (data: any) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSumbit)} className="grid gap-4 pt-4 pb-20 overflow-y-scroll">
            <CarDelivery
                onChange={onSelectFormChange}
                register={register}
                errors={errors}
                showAddress={value === 'delivery'}
            />
            <CarDate dateRange={dateRange} onDateChange={onChangeDateRange} />
            <CarFormDriver register={register} errors={errors} />
            <div className="fixed flex justify-between items-center bottom-0 left-0 right-0 p-5 bg-white">
                <div className=" text-xl">Итого: 320$</div> <Button type="submit">Оформить</Button>
            </div>
        </form>
    );
};

export default CarForm;
