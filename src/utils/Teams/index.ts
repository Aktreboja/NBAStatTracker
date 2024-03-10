import { Team } from '@/Types/Team'

// Retrieves a specific NBA team
export const getNbaTeam = async (teamId : number) : Promise<Team> => {
    let teamResponse = await fetch(`https://www.balldontlie.io/api/v1/teams/${teamId}`)
    let team : Team = await teamResponse.json()
    return team
}

// Retrieve all NBA teams from the API.
export const retrieveAllNbaTeams = async () : Promise<Team[]> => {
    try {
        const response = await fetch('https://www.balldontlie.io/api/v1/teams');
        const teams = await response.json();
        return teams.data;
    } catch (error) {
        console.error('Error retrieving NBA teams:', error);
        return [];
    }
}

