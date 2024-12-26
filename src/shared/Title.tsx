import { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

interface ITitleProps {
    children: ReactNode;
    className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
    return <h1 className={cn('font-medium text-5xl max-sm:text-3xl', className)}>{children}</h1>;
};

export default Title;
