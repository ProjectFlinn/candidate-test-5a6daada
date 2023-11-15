import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { characterSchema } from "schemas/CharacterSchema";

export const useCharacters = () => {
    return useQuery({
        queryKey: ["characters"],
        queryFn: fetchCharacters
    });
};

const fetchCharacters = async () => {
    const { data } = await axios.get("/characters.json");
    return characterSchema.array().parse(data);
};
