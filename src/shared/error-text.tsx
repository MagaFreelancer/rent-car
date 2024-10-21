import { cn } from '@/lib/utils.ts';

interface IPropsErrorText {
    className?: string;
    text: string;
}

const ErrorText = ({ className, text }: IPropsErrorText) => {
    return <div className={cn('text-red-500', className)}>{text}</div>;
};

export default ErrorText;
