
import { NbaPlayer } from "@/Types/Player";

interface playerSearch {
    search?: string;
}

interface TeamData {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
  }
  
  interface PlayerData {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    country: string;
    draft_year: number;
    draft_round: number;
    draft_number: number;
    team: TeamData;
  }
  
interface PlayerResponse {
    data: PlayerData[]
}

// Gets all of the players 
export const getAllPlayers = async (search: playerSearch) => {
    const playersResponse = await fetch("https://www.balldontlie.io/api/v1/players")
    const players = await playersResponse.json();
    return players;
}


export const getPlayer = async (playerId : number) : Promise<PlayerData[] | any> => {
    try {
        const playerResponse = await fetch(`https://www.balldontlie.io/api/v1/players/${playerId}`)
        if (!playerResponse.ok) throw new Error(`Error retrieving player: ${playerResponse.status}`)
        const player : PlayerResponse = await playerResponse.json()
        return player.data;
    } catch (error) {
        console.log(error)
        // throw new Error(`Unable to fetch player data: ${(error as Error).message}`)
    }
}


export const getPlayerByFullName = async (firstName: string, lastName: string) => {
    try{
        const response = await fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/bdl/players/search?first_name=${firstName}&last_name=${lastName}`)
        if (!response.ok) throw new Error(`Error retrieving player: ${response.status}` )
        return await response.json() 
    }   catch (error) {
        throw new Error(`Error fetching player by full name: ${(error as Error).message}`)
    }
}

// Retrieve player from nba  api
// todo: modularize into its own file for nba-api functions
export const getNbaPlayer = async (firstName: string, lastName:string) : Promise<NbaPlayer[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/nba/players/player?first_name=${firstName}&last_name=${lastName}`)
        if (!response.ok) throw new Error(`Error Retrieving Player: `)
        return await response.json()
    } catch (error) {
        throw new Error((error as Error).message)
    }
}