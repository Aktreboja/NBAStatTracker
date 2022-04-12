import Axios from 'axios'

export const retrieveTeamLogos = async () => {
    const logosArray = []
    let teamsRequest = await Axios.get('https://data.nba.net/data/10s/prod/v1/2021/teams.json')
    let teamResponse = teamsRequest.data
    return { teamData: teamResponse.league.sacramento}
}