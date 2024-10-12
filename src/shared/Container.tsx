import { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

interface IContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
    return <div className={cn('max-w-[1390px] w-full px-[15px] ', className)}>{children}</div>;
};

export default Container;
