import React from "react";
import { useCharacters } from "hooks/useCharacters";
import { Character as TCharacter } from "schemas/CharacterSchema";
import styles from "./CharacterList.module.scss";

const CharacterList = () => {
    const {
        data: characters,
        isPending: isPendingCharacters,
        isError: isChractersError,
        refetch: refetchCharacters
    } = useCharacters();

    if (isPendingCharacters) {
        return <p>Loading...</p>;
    }

    if (isChractersError) {
        return <button onClick={() => refetchCharacters()}>Try again?</button>;
    }

    return (
        <ul className={styles["Character-List"]}>
            {characters.map((character) => (
                <Character key={character.name} {...character} />
            ))}
        </ul>
    );
};

const Character = ({ name, category, description, avatar }: TCharacter) => {
    return (
        <li className={styles["Character"]}>
            <div className={styles["Character-Content"]}>
                <img className={styles["Character-Avatar"]} src={`/characters/${avatar}`} alt="" />
                <div className={styles["Character-Info"]}>
                    <p className={styles["Character-Name"]}>
                        <strong>{name}</strong>
                    </p>
                    <p className={styles["Character-Category"]}>
                        {capitaliseFirstLetter(category)}
                    </p>
                    <p className={styles["Character-Description"]}>{description}</p>
                </div>
            </div>
        </li>
    );
};

const capitaliseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export default CharacterList;
