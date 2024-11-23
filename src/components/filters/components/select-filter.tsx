import { cn } from '@/lib/utils.ts';
import { createContext, memo, ReactNode, useContext } from 'react';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';

interface ISelectGroupProps {
    className?: string;
    children: ReactNode;
    items?: TypeBrands[];
}

interface ISelectContext {
    items?: TypeBrands[];
}

const SelectContext = createContext<ISelectContext | undefined>(undefined);

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error('useInputContext must be used within an InputProvider');
    }
    return context;
};

const SelectGroupComponent = ({ className, children, items }: ISelectGroupProps) => {
    return <SelectContext.Provider value={{ items }}>{children}</SelectContext.Provider>;
};

const SelectListGroupComponent = ({
    className,
    children,
    items,
}: {
    className?: string;
    children: ReactNode;
    items: TypeBrands[];
}) => {
    return <div>{children}</div>;
};

export const SelectGroup = memo(SelectGroupComponent);
export const SelectListGroup = memo(SelectListGroupComponent);
