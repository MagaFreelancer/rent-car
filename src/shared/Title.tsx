import { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

interface ITitleProps {
    children: string;
    className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
    return <h1 className={cn('font-medium text-5xl', className)}>{children}</h1>;
};

export default Title;
