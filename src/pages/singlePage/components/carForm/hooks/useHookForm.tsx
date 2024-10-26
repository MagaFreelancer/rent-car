import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { carRegistrationSchema } from '@/utils/yup';
const useHookForm = () => {
    const {
        handleSubmit,
        formState: { errors },
        setValue,
        register,
    } = useForm({
        resolver: yupResolver(carRegistrationSchema),
    });
    const onSumbit = (data: any) => {
        console.log(data);
    };

    return {
        handleSubmit,
        errors,
        setValue,
        register,
        onSumbit,
    };
};

export default useHookForm;
