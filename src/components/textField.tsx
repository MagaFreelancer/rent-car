import React, { createContext, useContext, useState, ReactNode, memo } from 'react';
import { Input } from '@/shared/input';
import { Eye, EyeClosed } from 'lucide-react';

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
const InputProviderComponent = ({ children, value, onChange, handleChange, type }: any) => {
    return (
        <InputContext.Provider value={{ value, onChange, handleChange, type }}>
            <div className="relative">{children}</div>
        </InputContext.Provider>
    );
};

// Компонент для отображения текстового input
const InputTextComponent = () => {
    const { type, value, onChange } = useInputContext();

    return <Input type={type} value={value} onChange={onChange} />;
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

// Мемоизируем компоненты для оптимизации
export const TextFieldProvider = memo(InputProviderComponent);
export const TextFieldInput = memo(InputTextComponent);
export const TextFieldToggle = memo(InputToggleComponent);
