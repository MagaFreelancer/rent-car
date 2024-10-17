import { useState } from 'react';

const useSelect = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const onSelectChange = (newValue: string) => {
        setValue(newValue);
    };

    return { value, onSelectChange };
};

export default useSelect;
