// chatgpt
import { useState, useRef, useEffect } from "react";

type Option = {
    label: string;
    value: boolean;
};

type DropdownProps = {
    options: Option[];
    setFiltered: (state: boolean) => void;
    refreshTasks: () => void;
};

const FilterDropdown: React.FC<DropdownProps> = ({
    options,
    setFiltered,
    refreshTasks,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options[0]
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setFiltered(option.value);
        refreshTasks();
    };

    return (
        <div ref={dropdownRef} className="relative max-w-max">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                {selectedOption ? selectedOption.label : "Select an option"}
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md mt-2 py-1">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
