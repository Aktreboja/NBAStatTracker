
import { NbaPlayer } from "@/Types/Player"
// Retrieve player from nba  api

export const getNbaPlayer = async (firstName: string, lastName:string) : Promise<NbaPlayer[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/nba/players/player?first_name=${firstName}&last_name=${lastName}`)
        if (!response.ok) throw new Error(`Error Retrieving Player: ${response.status}`)
        return await response.json()
    } catch (error) {
        throw new Error((error as Error).message)
    }
}