import { GameParams, Game } from "../../../Types/Game"
import { make_bdl_api_request } from "./wrapper";
import { todaysDate } from "@/utils";

// Gets all the games
// todo: Add in query parameters for games
export const getAllGames = async (gameParams: GameParams) => {
    try {
        const gamesResponse = await fetch("https://www.balldontlie.io/api/v1/games")
        return gamesResponse.json();
    } catch (error) {
        console.log("Error retrieving games: ", error);
        return []
    }

}

// Retrieve a specific game.
export const getGame = async (gameId: number) => {
    try {
        const gameResponse = await fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
        const game : Game = await gameResponse.json();
        return game;
    } catch (error) {
        console.error("Error retrieveing Game.")
        return null;
    }
}


export const getUpcomingGames = async (teamId: number) => {
    try{
        const response = await make_bdl_api_request(`/games/${teamId}/upcoming_games?start_date=${todaysDate()}`)
        return await response
    } catch (error) {
        throw new Error(`Error fetching upcoming games: ${(error as Error).message}`)
    }
}