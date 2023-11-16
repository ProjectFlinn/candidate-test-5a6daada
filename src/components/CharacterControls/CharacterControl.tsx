import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./CharacterControl.module.scss";
import { capitaliseFirstLetter } from "utils/capitaliseFirstLetter";

export const CharacterControl = () => {
    return (
        <div className={styles["Character-Control"]}>
            <div className={styles["Character-Control-Content"]}>
                <Select label="category" options={categoryOptions} />
                <Select label="order by" options={orderByOptions} />
            </div>
        </div>
    );
};

const Select = ({ options, label }: SelectProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectOption = (option: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set(label, option);
        setSearchParams(newSearchParams.toString());
    };

    const defaultValue = searchParams.get(label) || options[0].value;

    return (
        <div className={styles["Select-Container"]}>
            <label htmlFor={label} className={styles["Select-Label"]}>
                {capitaliseFirstLetter(label)}
            </label>
            <select
                id={label}
                onChange={(e) => handleSelectOption(e.target.value)}
                defaultValue={defaultValue}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.display}
                    </option>
                ))}
            </select>
        </div>
    );
};

const categoryOptions = [
    { value: "any", display: "Any" },
    { value: "hobbit", display: "Hobbit" },
    { value: "wizard", display: "wizard" },
    { value: "human", display: "Human" },
    { value: "elf", display: "Elf" },
    { value: "dwarf", display: "Dwarf" },
    { value: "dark lord", display: "Dark Lord" },
    { value: "corrupted hobbit", display: "Corrupted Hobbit" },
    { value: "spirit", display: "Spirit" },
    { value: "horse", display: "Horse" },
    { value: "ent", display: "Ent" },
    { value: "spider", display: "Spider" }
];

const orderByOptions = [
    { value: "name", display: "Name" },
    { value: "significance", display: "Significance" }
];

type SelectProps = {
    label: string;
    options: { value: string; display: string }[];
};
