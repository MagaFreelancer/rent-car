import { CFormInput } from '@coreui/react';
import { IMaskMixin } from 'react-imask';
import { Ref } from 'react';
import { cn } from '@/lib/utils.ts';

interface IInputMask {
    onChange: (value: string) => void;
    className?: string;
    type: 'date' | 'phone';
    placeholder?: string;
    value?: string;
}

export const InputMask = ({ onChange, className, type, placeholder, value }: IInputMask) => {
    const CFormInputWithMask = IMaskMixin(
        ({ inputRef, ...props }: { inputRef: Ref<HTMLInputElement> }) => (
            <CFormInput {...props} ref={inputRef} />
        )
    );

    const typeFormat: Record<IInputMask['type'], string | DateConstructor> = {
        date: Date,
        phone: '+{0}(000)000-00-00',
    };

    return (
        <CFormInputWithMask
            className={cn(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            mask={typeFormat[type]}
            min={new Date(1990, 0, 1)}
            max={new Date(2020, 0, 1)}
            lazy={!!placeholder}
            placeholder={placeholder}
            onAccept={onChange}
            value={value}
        />
    );
};

export default InputMask;
