import { cn } from '@/lib/utils.ts';
import { createContext, memo, ReactNode, useContext, useRef, useState } from 'react';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { clsx } from 'clsx';
import useClickOutside from '@/components/filters/hook/useClickOutside.tsx';

interface ISelectGroupProps {
    className?: string;
    children: ReactNode;
    items?: TypeBrands[];
    onClick?: () => void;
}

interface ISelectContext {
    items?: TypeBrands[];
    isOpen?: boolean;
}

const SelectContext = createContext<ISelectContext | undefined>(undefined);

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error('useInputContext must be used within an InputProvider');
    }
    return context;
};

const SelectGroupComponent = ({ className, children, items, ...props }: ISelectGroupProps) => {
    const findStatus = items?.find(item => item.status);
    const [isOpen, setIsOpen] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    return (
        <SelectContext.Provider value={{ items, isOpen }}>
            <div ref={dropdownRef} className="relative inline-block">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    {...props}
                    className={clsx(
                        'bg-white p-3 rounded-2xl inline-flex cursor-pointer',
                        findStatus?.value !== 'all' && 'bg-red-700 text-white',
                        className
                    )}
                >
                    <p>{findStatus?.label}</p>
                    {children}
                </div>

                {isOpen && <SelectRadioComponent />}
            </div>
        </SelectContext.Provider>
    );
};

const SelectRadioItem = ({ title }: { title: string }) => {
    return <li>{title}</li>;
};

const SelectRadioComponent = ({ className }: { className?: string }) => {
    const { items, isOpen } = useSelectContext();

    return (
        <>
            {isOpen && (
                <ul
                    className={cn(
                        'absolute list-none w-[280px] max-h-[400px] custom-scrollbar top-14 left-0 bg-white p-2 z-10 rounded-xl shadow',
                        className
                    )}
                >
                    {items?.map((item, index) => (
                        <SelectRadioItem key={index} title={item.label} />
                    ))}
                </ul>
            )}
        </>
    );
};

export const SelectGroup = memo(SelectGroupComponent);
export const SelectRadio = memo(SelectRadioComponent);
