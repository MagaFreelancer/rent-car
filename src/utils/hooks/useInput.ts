import { ChangeEvent, useState } from 'react';
interface UseInputReturn {
    value: string;
    onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
const useInput = (): UseInputReturn => {
    const [value, setValue] = useState<string>('');

    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChangeInputValue,
    };
};

export default useInput;
