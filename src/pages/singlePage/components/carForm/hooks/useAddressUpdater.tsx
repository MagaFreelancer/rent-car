import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';

const useAddressUpdater = (value: boolean, setValue: UseFormSetValue<any>) => {
    useEffect(() => {
        if (!value) {
            setValue('address', 'inOffice'); // Очищаем поле адреса, если value = false
        } else {
            setValue('address', ''); // Устанавливаем адрес, если value = true
        }
    }, [value, setValue]);
};

export default useAddressUpdater;
