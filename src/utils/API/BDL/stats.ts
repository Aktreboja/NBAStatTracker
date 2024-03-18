import { make_bdl_api_request } from "./wrapper"

// Retrieves the previous 5 games for a player
export const retrievePreviousGameStats = async (playerId: string, startDate: string) => {
    try {
        const query = {'player_id': playerId , 'start_date': startDate}
        console.log('Query: ', query)
        const response = await make_bdl_api_request('/stats/player/previous_games', query);

        return await response
    }  catch (error) {
        return 
    }
 
} 