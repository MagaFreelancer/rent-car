import { cn } from '@/lib/utils.ts';
import { createContext, memo, ReactNode, useContext, useRef, useState } from 'react';
import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import { clsx } from 'clsx';
import useClickOutside from '@/components/filters/hook/useClickOutside.tsx';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '@/shared/label.tsx';

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
    const [isOpen, setIsOpen] = useState(false);
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

                {isOpen && <SelectRadioComponent findStatus={findStatus} />}
            </div>
        </SelectContext.Provider>
    );
};

const SelectRadioItem = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>{title}</Label>
        </div>
    );
};

const SelectRadioComponent = ({
    className,
    findStatus,
}: {
    className?: string;
    findStatus: any;
}) => {
    const { items, isOpen } = useSelectContext();

    return (
        <>
            {isOpen && (
                <RadioGroup
                    onValueChange={item => console.log(item)}
                    className={cn(
                        'absolute list-none w-[280px] max-h-[400px] custom-scrollbar top-14 left-0 bg-white p-2 z-10 rounded-xl shadow',
                        className
                    )}
                    defaultValue={findStatus.value}
                >
                    {items?.map((item, index) => (
                        <SelectRadioItem key={index} value={item.value} title={item.label} />
                    ))}
                </RadioGroup>
            )}
        </>
    );
};

export const SelectGroup = memo(SelectGroupComponent);
export const SelectRadio = memo(SelectRadioComponent);
