import { ResponseError } from '@/Types'
import { Team } from '@/Types/Team'



// Retrieves a specific NBA team
export const getNbaTeam = async (teamId : number) : Promise<Team | ResponseError> => {
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/bdl/teams/${teamId}`)
        if (!response.ok) return await response.json() as ResponseError
        return await response.json() as Team
    } catch (error) {
        throw new Error(`Error with retrieving specific Team: ${(error as Error).message}`)
    }

}

// Retrieve all NBA teams from the API.
export const retrieveAllNbaTeams = async () : Promise<Team[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASEURL + '/api/bdl/teams');
        if (!response.ok) throw new Error(`Error fetching all teams: ${response.status}`);
        const teams = await response.json();
        return teams.data;
    } catch (error) {
        console.error('Error retrieving NBA teams:', error);
        return [];
    }
}

