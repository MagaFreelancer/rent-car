import { cn } from '@/lib/utils.ts';

interface IContainerProps {
    children: string;
    className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
    return (
        <div className={cn('max-w-[1390px] px-[15px] mx-auto w-full', className)}>{children}</div>
    );
};

export default Container;
