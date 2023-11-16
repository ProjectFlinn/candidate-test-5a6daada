import React from "react";
import { useSearchParams } from "react-router-dom";
import { useCharacters } from "hooks/useCharacters";
import { Character as TCharacter } from "schemas/characterSchema";
import styles from "./CharacterList.module.scss";
import { capitaliseFirstLetter } from "utils/capitaliseFirstLetter";

const CharacterList = () => {
    const [searchParams] = useSearchParams();

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

    const category = searchParams.get("category");
    const orderBy = searchParams.get("order by");

    return (
        <ul className={styles["Character-List"]}>
            {characters
                .filter((character) => filterCharactersByCategory(character, category))
                .sort((character1, character2) =>
                    orderCharactersBy(character1, character2, orderBy)
                )
                .map((character) => (
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

const filterCharactersByCategory = (character: TCharacter, filterByCategory: string | null) => {
    if (!filterByCategory || filterByCategory === "any") {
        return true;
    }

    return character.category === filterByCategory;
};

const orderCharactersBy = (
    character1: TCharacter,
    character2: TCharacter,
    orderBy: string | null
) => {
    if (orderBy === "significance") {
        return character1.significanceIndex - character2.significanceIndex;
    }

    return character1.name.localeCompare(character2.name);
};

export default CharacterList;
