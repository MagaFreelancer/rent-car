import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { carRegistrationSchema } from '@/utils/yup';
import { ICarFormData } from './useCarForm';

const useFormLogic = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ICarFormData>({
        resolver: yupResolver(carRegistrationSchema),
    });

    return {
        register,
        handleSubmit,
        watch,
        setValue,
        errors,
    };
};

export default useFormLogic;
