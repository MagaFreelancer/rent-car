import { TextFieldError, TextFieldGroup, TextFieldInput, TextFieldLeftIcon, TextFieldTextArea } from '@/components/text-field';
import { Camera } from 'lucide-react';

interface ICarDriverFormProps {
    errors: any;
    register: any;
}

const carDriverForm = ({ errors, register }: ICarDriverFormProps) => {
    console.log(!!errors.email);

    return (
        <>
            <TextFieldGroup
                error={!!errors.name}
                errorText={errors.name?.message}
                className="mb-3" >
                <TextFieldInput
                    register={register}
                    name="name"
                    placeholder="Имя и Фамилия"
                    className="bg-[#f2f4f8] font-medium  placeholder:text-placeholder" />
                <TextFieldLeftIcon icon={<Camera size={48} />} />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup
                error={!!errors.dateOfBirth}
                errorText={errors.dateOfBirth?.message}
                className="mb-3">
                <TextFieldInput
                    placeholder="Дата рождения"
                    type="date"
                    name="dateOfBirth"
                    className="bg-[#f2f4f8] font-medium border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup
                error={!!errors.email}
                errorText={errors.email?.message}
                className="mb-3">
                <TextFieldInput
                    placeholder="Почта"
                    name="email"
                    type="email"
                    className="bg-[#f2f4f8] font-medium border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup
                error={!!errors.phone}
                errorText={errors.phone?.message}
                className="mb-3">
                <TextFieldInput
                    placeholder="Номер телефона"
                    name="tel"
                    type="tel"
                    className="bg-[#f2f4f8] font-medium border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup
                className="mb-3">
                <TextFieldTextArea placeholder="Комментарии" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
        </>
    )
}

export default carDriverForm