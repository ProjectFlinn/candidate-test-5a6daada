import React from "react";
import styles from "./CharacterControl.module.scss";

export const CharacterControl = () => {
    return (
        <form className={styles["Character-Control"]}>
            <div className={styles["Character-Control-Content"]}>
                <Select options={categories} />
                <Select options={categories} />
            </div>
        </form>
    );
};

const Select = ({ options }: SelectProps) => {
    
    return (
        <div className={styles["Select-Container"]}>
            <label htmlFor="category" className={styles["Select-Label"]}>
                Category
            </label>
            <select id="category">
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

const categories = [
    "Hobbit",
    "Wizard",
    "Human",
    "Elf",
    "Dwarf",
    "Dark Lord",
    "Corrupted Hobbit",
    "Spirit",
    "Horse",
    "Ent",
    "Spider"
];

type SelectProps = {
    options: string[];
};
