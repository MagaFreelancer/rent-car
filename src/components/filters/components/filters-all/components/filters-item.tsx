interface IFiltersItemProps {
    onChange: (value: string, label: string) => void;
    value: string;
    label: string;
}

const FiltersItem = ({ onChange, value, label }: IFiltersItemProps) => {
    return (
        <li
            onClick={() => onChange(value, label)}
            className="transition cursor-pointer hover:text-black hover:bg-[#ebebed] hover:opacity-50 p-4 text-[14px]"
        >
            {label}
        </li>
    );
};

export default FiltersItem;
