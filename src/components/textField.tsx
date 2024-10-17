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

// Провайдер для глобальных состояний, например, label, error, errorText
const InputProviderComponent = ({ children, label, error, errorText, type, className }: any) => {
    return (
        <InputContext.Provider value={{ label, error, errorText, type }}>
            <div className={clsx('relative', className)}>{children}</div>
        </InputContext.Provider>
    );
};

// Компонент для отображения текстового input (получает prop напрямую)
const InputTextComponent = ({ value, onChange, placeholder, register, name }: any) => {
    const { error, type } = useInputContext(); // Берем только error из контекста

    return (
        <Input
            className={clsx(error ? 'border-red-500' : '')}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...(register ? register(name) : {})} // Привязываем register напрямую
        />
    );
};

// Компонент для отображения Textarea (получает prop напрямую)
const InputTextAreaComponent = ({ value, onChange, register, name }: any) => {
    const { error } = useInputContext(); // Берем только error из контекста

    return (
        <Textarea
            className={clsx(error ? 'border-red-500 ' : '', 'resize-none')}
            value={value}
            onChange={onChange}
            {...(register ? register(name) : {})} // Привязываем register напрямую
        />
    );
};

// Компонент для лейбла (получает prop из контекста)
const InputLabelComponent = () => {
    const { label, error } = useInputContext(); // Берем label и error из контекста

    return label ? (
        <Label className={clsx(error ? 'text-red-500' : '', 'font-medium')}>{label}</Label>
    ) : null;
};

// Компонент для отображения ошибки (получает errorText из контекста)
const InputErrorComponent = () => {
    const { errorText, error } = useInputContext();

    return error ? <span className="text-red-500">{errorText}</span> : null;
};
const InputToggleComponent = ({ onToggle }: { onToggle: () => void }) => {
    const { type } = useInputContext();
    return (
        <button onClick={onToggle} type="button">
            {type === 'password' ? (
                <EyeClosed className="absolute top-2 right-2" />
            ) : (
                <Eye className="absolute top-2 right-2" />
            )}
        </button>
    );
};
// Мемоизируем компоненты для оптимизации
export const TextFieldGroup = memo(InputProviderComponent);
export const TextFieldInput = memo(InputTextComponent);
export const TextFieldTextArea = memo(InputTextAreaComponent);
export const TextFieldLabel = memo(InputLabelComponent);
export const TextFieldError = memo(InputErrorComponent);
export const TextFieldShow = memo(InputToggleComponent);
