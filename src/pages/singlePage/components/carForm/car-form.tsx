import CarVariants from '../car-variants';
import CarDate from '../car-date';

import useFormFields from './hooks/useFormFields';
import CarFormDriver from './components/car-form-drive';

import CarDelivery from '../car-delivery';
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
        <form
            onSubmit={handleSubmit(onSumbit)}
            className="grid gap-4 py-4 max-h-[500px] overflow-y-scroll"
        >
            <CarDelivery
                onChange={onChangeSelectValue}
                register={register}
                errors={errors}
                showAddress={showAddress}
            />
            <CarDate dateRange={dateRange} onDateChange={onDateChange} />
            <CarFormDriver register={register} errors={errors} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CarForm;
