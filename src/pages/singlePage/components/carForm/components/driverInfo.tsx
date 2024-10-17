import {
    TextFieldError,
    TextFieldInput,
    TextFieldLabel,
    TextFieldGroup,
    TextFieldTextArea,
} from '@/components/textField';

const DriverInfo = ({ inputName, inputEmail, inputPhone, inputTextarea }: any) => {
    const textFieldsClsName = 'mb-2';

    return (
        <div>
            <div className="font-semiBold text-lg mb-4">Данные основного водителя</div>
            <TextFieldGroup className={textFieldsClsName} label="Name">
                <TextFieldLabel />
                <TextFieldInput
                    type="text"
                    value={inputName.value}
                    onChange={inputName.onChangeInputValue}
                />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup className={textFieldsClsName} label="Date">
                <TextFieldLabel />
                <TextFieldInput type="date" />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup className={textFieldsClsName} label="Email">
                <TextFieldLabel />
                <TextFieldInput
                    type="email"
                    value={inputEmail.value}
                    onChange={inputEmail.onChangeInputValue}
                />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup className={textFieldsClsName} label="Phone">
                <TextFieldLabel />
                <TextFieldInput
                    type="phone"
                    value={inputPhone.value}
                    onChange={inputPhone.onChangeInputValue}
                />
                <TextFieldError />
            </TextFieldGroup>
            <TextFieldGroup className={textFieldsClsName} label="Сообщение">
                <TextFieldLabel />
                <TextFieldTextArea
                    value={inputTextarea.value}
                    onChange={inputTextarea.onChangeInputValue}
                />
                <TextFieldError />
            </TextFieldGroup>
        </div>
    );
};

export default DriverInfo;
