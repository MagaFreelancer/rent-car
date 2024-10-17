import useDateRange from '@/utils/hooks/useDateRange';
import useInput from '@/utils/hooks/useInput';
import { addDays } from 'date-fns';

const useFormFields = () => {
    const inputName = useInput();
    const inputEmail = useInput();
    const inputPhone = useInput();
    const inputTextarea = useInput();
    const { dateRange, onDateChange } = useDateRange({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 3),
    });

    const sumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted', { inputName, inputEmail, inputPhone, inputTextarea });
    };
    const onChangeSelectValue = (value: string) => {
        console.log(value);
    };
    return {
        inputName,
        inputEmail,
        inputPhone,
        inputTextarea,
        dateRange,
        onDateChange,
        sumbit,
        onChangeSelectValue,
    };
};
export default useFormFields;
