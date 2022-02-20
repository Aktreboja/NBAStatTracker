import Axios from 'axios'

/**
 * @description Retrieves the players data in ball is life API
 * @param { Object } req the http request Object (Not needed) 
 * @param { Object } params The params from 'getServerSideProps'; used to get the player in the URL.
 * @returns { Object } An object containing the id of the player (BallDontLie API).
 */
export const retrievePlayerInformation = async (req, params) => {
    let player = params.player
    let playerResponse = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    let data = playerResponse.data
    let { id } = data.data[0]
    return { playerId: id };
}

/**
 * @description Retrieves the meta data of the player from the CMS.
 * @param { Object } params the context.params to retrieve the player from the URL.  
 * @returns { Object } Object containing player's metadata
 */
export const retrievePlayerMetaData = async (req, params) => {
    let playerName = params.player
    let playerFirstName = player.split('_')[0]
    let playerLastName = player.split('_')[1]   

    let playersObject = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')
    let playersResponseArray = playerObject.data.league.standard

    let playerIndex = playersResponseArray.findIndex(obj => obj.lastName.toLowerCase().includes(playerLastName) && obj.firstName.toLowerCase().includes(playerFirstName))
    let playerMetaData = playersResponseArray[playerIndex]

}


/**
 * @description Retrieves the player's average season data
 * @returns { Object } The player's average season stats.
 */
export const retrieveAvgSeasonData = async (req) => {

}

/**
 * @description Retrieves the upcoming games for the NBA player
 * @param { Object} req 
 * @param { Object } params 
 * @returns { Object } Object containing the games for the following week.
 */
export const retrieveUpcomingGames = async (req, params) => {

}



export default function handler(req, res) {
    return res.status(200).json({text: 'yee'})
}
  