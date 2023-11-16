import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { characterSchema } from "schemas/characterSchema";

export const useCharacters = () => {
    return useQuery({
        queryKey: ["characters"],
        queryFn: fetchCharacters
    });
};

const fetchCharacters = async () => {
    const { data } = await axios.get(process.env.REACT_APP_CHARACTERS_URL);
    return characterSchema.array().parse(data);
};
