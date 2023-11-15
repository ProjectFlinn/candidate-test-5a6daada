import React from "react";
import { useCharacters } from "hooks/useCharacters";

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
        <ul>
            {characters.map((character) => (
                <li>{character.name}</li>
            ))}
        </ul>
    );
};

export default CharacterList;
