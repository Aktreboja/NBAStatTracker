import Axios from 'axios'

export const retrieveSearchResults =  () => {
    
}

/**
 * @description Retrieves the current Nba players from the JSON file.
 * @returns { Array } containing the names of all the nba players
 */
export const retrieveCurrentNbaPlayers = async () => {
    let nbaResponse = (await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')).data.league.standard

    let teamResponse = (await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/teams.json')).data.league.vegas
    let nbaPlayersArray = []

    nbaResponse.map((player) => {
        let teamIndex = teamResponse.findIndex((playerObject) => playerObject.teamId == player.teamId)
        console.log(teamIndex)
        let teamName = (teamIndex !== -1) ? teamResponse[teamIndex].fullName : ""
        nbaPlayersArray.push({'firstName': player.firstName, 'lastName': player.lastName, 'teamName': teamName, 'playerId': player.personId  })
    })
        
    return nbaPlayersArray
}