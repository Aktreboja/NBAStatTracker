import { PlayersResponse } from "../../Types/Player"

interface playerSearch {
    search?: string;
}

// Gets all of the players 
export const getAllPlayers = async (search: playerSearch) => {
    const playersResponse = await fetch("https://www.balldontlie.io/api/v1/players")
    const players : PlayersResponse = await playersResponse.json();
    return players;
}