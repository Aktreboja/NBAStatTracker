
import { NbaPlayer } from "@/Types/Player"
import { make_nba_api_request } from "./wrapper"
// Retrieve player from nba  api

export const getNbaPlayer = async (firstName: string, lastName:string) : Promise<NbaPlayer[]> => {
    try {
        const params = {'first_name': firstName, 'last_name': lastName}
        const response = await make_nba_api_request('/players/player', params)
        return await response
    } catch (error) {
        throw new Error((error as Error).message)
    }
}