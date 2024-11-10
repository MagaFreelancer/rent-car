import { TextFieldGroup, TextFieldInput, TextFieldTextArea } from '@/components/text-field';

const carDriverForm = () => {
    return (
        <>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Имя и Фамилия" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Дата рождения" type="date" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Почта" type="email" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldInput placeholder="Номер телефона" type="tel" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
            <TextFieldGroup className="mb-3">
                <TextFieldTextArea placeholder="Комментарии" className="bg-[#f2f4f8] font-medium   border-none placeholder:text-placeholder" />
            </TextFieldGroup>
        </>
    )
}

export default carDriverForm