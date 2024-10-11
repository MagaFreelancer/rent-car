import { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

interface IContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
    return <div className={cn('max-w-[1390px] px-[15px] mx-auto', className)}>{children}</div>;
};

export default Container;
