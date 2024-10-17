import CarVariants from '../car-variants';
import CarDate from '../car-date';

import useFormFields from './hooks/useFormFields';
import DriverInfo from './components/driverInfo';
const CarForm = () => {
    const {
        inputName,
        inputEmail,
        inputPhone,
        inputTextarea,
        dateRange,
        onDateChange,
        sumbit,
        onChangeSelectValue,
    } = useFormFields();

    return (
        <form onSubmit={sumbit} className="grid gap-4 py-4 max-h-[500px] overflow-y-scroll">
            <CarVariants onChange={onChangeSelectValue} />
            <CarDate dateRange={dateRange} onDateChange={onDateChange} />
            <DriverInfo
                inputName={inputName}
                inputEmail={inputEmail}
                inputPhone={inputPhone}
                inputTextarea={inputTextarea}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CarForm;
