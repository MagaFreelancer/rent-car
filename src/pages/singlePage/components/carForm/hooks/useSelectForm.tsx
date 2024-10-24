import useSelect from '@/utils/hooks/useSelect';
import { useState } from 'react';

const useSelectForm = (valueSelect: string) => {
    const { value, onSelectChange } = useSelect(valueSelect);

    const onSelectFormChange = (selectValue: string) => {
        onSelectChange(selectValue);
    };

    return { onSelectFormChange, value };
};
export default useSelectForm;
