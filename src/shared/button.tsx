import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                more: 'border-dotted border-b-2 border-[#4B4B4B] rounded-none text-[#4B4B4B] font-medium',
                custom: 'bg-lightBlack text-white rounded-none font-medium text-[16px]',
                gray: 'transition bg-grey hover:bg-[#ebebeb]',
                blue: 'transition bg-[#5394fd] text-white hover:bg-[#307efd]',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}

const ButtonLoader: React.FC = () => (
    <span className="flex items-center justify-center">
        <LoaderCircle className="animate-spin text-lightBlack" />
    </span>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, loading, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, className }),
                    loading && 'bg-transparent border-lightBlack border-2'
                )}
                ref={ref}
                disabled={loading}
                {...props}
            >
                {loading && <ButtonLoader />}
                {loading || children}
            </Comp>
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
