import { make_nba_api_request } from "./wrapper"


export const retrieveTeamRoster = async (abbreviation: string) => {
    try {
        const response = await make_nba_api_request(`/teams/roster/${abbreviation}`)
        return response
    } catch (error) {

    }
}


export const retrieveNbaTeam = async (abbreviation: string) => {
    try {
        const response = await make_nba_api_request(`/teams/${abbreviation}`)
        return response
    } catch (error) {

    }
}