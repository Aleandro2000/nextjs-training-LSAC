import { GET } from "./methods";

export const API = async (page = 1) => {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page, GET);
    const payload = await response.json();
    return payload;
}