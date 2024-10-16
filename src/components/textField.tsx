import { createContext, useContext, memo } from 'react';
import { Input } from '@/shared/input';
import { Eye, EyeClosed } from 'lucide-react';
import { Label } from '@/shared/label';
import clsx from 'clsx';
import { Textarea } from '@/shared/textarea';

// Создаем контекст
const InputContext = createContext<any | undefined>(undefined);

// Кастомный хук для доступа к контексту
function useInputContext() {
    const context = useContext(InputContext);
    if (!context) {
        throw new Error('useInputContext must be used within an InputProvider');
    }
    return context;
}

// Провайдер для управления состоянием компонента
const InputProviderComponent = ({ children, ...props }: any) => {
    return (
        <InputContext.Provider value={{ ...props }}>
            <div className="relative">{children}</div>
        </InputContext.Provider>
    );
};

// Компонент для отображения текстового input
const InputTextComponent = () => {
    const { type, value, onChange, error } = useInputContext();

    return (
        <>
            <Input
                className={clsx(error ? 'border-red-500' : '')}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    );
};
const InputTextAreaComponent = () => {
    const { value, onChange, error } = useInputContext();

    return (
        <>
            <Textarea
                className={clsx(error ? 'border-red-500 ' : '', 'resize-none')}
                value={value}
                onChange={onChange}
            />
        </>
    );
};
// Компонент для отображения кнопки переключения пароля
const InputToggleComponent = () => {
    const { type, handleChange } = useInputContext();

    return (
        <button onClick={handleChange} type="button">
            {type === 'password' ? (
                <EyeClosed className="absolute top-2 right-2" />
            ) : (
                <Eye className="absolute top-2 right-2" />
            )}
        </button>
    );
};
// Компонент для лейбла
const InputLabelComponent = () => {
    const { label, error } = useInputContext();

    return label ? (
        <Label className={clsx(error ? 'text-red-500' : '', 'font-medium')}>{label}</Label>
    ) : null;
};

// Компонент для ошибки
const InputErrorComponent = () => {
    const { errorText, error } = useInputContext();

    return error ? <span className="text-red-500">{errorText}</span> : null;
};
// Мемоизируем компоненты для оптимизации
export const TextFieldProvider = memo(InputProviderComponent);
export const TextFieldInput = memo(InputTextComponent);
export const TextFieldToggle = memo(InputToggleComponent);
export const TextFieldLabel = memo(InputLabelComponent);
export const TextFieldError = memo(InputErrorComponent);
export const TextFieldTextArea = memo(InputTextAreaComponent);
