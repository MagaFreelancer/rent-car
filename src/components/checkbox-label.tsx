import { createContext, memo, ReactNode, useContext } from 'react';
import { cn } from '@/lib/utils.ts';
import { Checkbox } from '@/shared/checkbox.tsx';
import { UseFormRegister } from 'react-hook-form';
import { TypeForm } from '@/pages/auth/components/auth-form.tsx';

interface ICheckboxLabelProps {
    className?: string;
    name: string;
}

interface ICheckboxProvider {
    children: ReactNode;
    className?: string;
    name: string;
}

const ContextCheckbox = createContext<ICheckboxLabelProps | undefined>(undefined);

const useCheckboxContext = () => {
    const context = useContext(ContextCheckbox);
    if (!context) {
        throw new Error('useInputContext must be used within an InputProvider');
    }
    return context;
};

const checkboxProvider = ({ children, className, name }: ICheckboxProvider) => (
    <ContextCheckbox.Provider value={{ name }}>
        <div className={cn('flex items-center space-x-2', className)}>{children}</div>
    </ContextCheckbox.Provider>
);

const CheckboxLabelText = ({ className, label }: { className?: string; label: string }) => {
    const { name } = useCheckboxContext();

    return (
        <label
            htmlFor={name}
            className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                className
            )}
        >
            {label}
        </label>
    );
};

const CheckBoxLabel = ({
    className,
    register,
    registerName,
}: {
    className?: string;
    register?: UseFormRegister<TypeForm>;
    registerName?: any;
}) => {
    const { name } = useCheckboxContext();

    return (
        <Checkbox
            {...(register ? register(registerName) : {})}
            className={cn('w-6 h-6 border-[##D6D6D6] rounded-none', className)}
            id={name}
        />
    );
};

export const CheckboxLabelGroup = memo(checkboxProvider);
export const CheckboxLabelValue = memo(CheckboxLabelText);
export const CheckboxLabelCustom = memo(CheckBoxLabel);
