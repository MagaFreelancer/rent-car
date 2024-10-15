import * as React from 'react';
import { cn } from '@/lib/utils';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, text, error, ...props }, ref) => {
        return (
            <>
                {text && <p className="text-[15px] mb-1">{text}</p>}
                <input
                    type={type}
                    className={cn(
                        `${error && `border-b-red-700`} flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className={clsx(error, 'text-red-700')}>{error}</p>}
            </>
        );
    }
);
Input.displayName = 'Input';

export { Input };
