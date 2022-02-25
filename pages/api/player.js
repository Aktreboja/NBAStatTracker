import Axios from 'axios'

/**
 * @description Retrieves the players data in ball is life API
 * @param { Object } req the http request Object (Not needed) 
 * @param { Object } params The params from 'getServerSideProps'; used to get the player in the URL.
 * @returns { Object } An object containing the id of the player (BallDontLie API).
 */
export const retrievePlayerId = async ( params) => {
    let player = params.player
    let playerResponse = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    let playerData = playerResponse.data.data[0]
    return playerData;
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
 * @description Retrieves the player from the Nba database
 * @param { String } player The string that derives from the url (From Context.params.player)
 */
export const retrieveNbaPlayerStats = async ({ player }) => {
    if (!player) return null
    let playerFirstName = player.split('_')[0]
    let playerLastName = player.split('_')[1]

    let nbaPlayersResponse = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')
    let nbaPlayerData = nbaPlayersResponse.data.league.standard

    let playerIndex = nbaPlayerData.findIndex(obj => obj.lastName.toLowerCase().includes(playerLastName) && obj.firstName.toLowerCase().includes(playerFirstName))
    let playerStats = (playerIndex ? nbaPlayerData[playerIndex] : null)
    let { personId, teamId } = nbaPlayerData[playerIndex]

        // Meta data about the nba players
     let { jersey, heightFeet, heightInches, weightPounds, draft, nbaDebutYear, collegeName, teamSitesOnly } = playerStats

    if (playerStats) {
        let playerMeta = {
            playerID: personId,
            teamId: teamId,
            jersey: jersey,
            heightFeet: heightFeet,
            heightInches: heightInches, 
            weightPounds: weightPounds, 
            draft: draft, 
            nbaDebutYear: nbaDebutYear, 
            collegeName: collegeName,
            position: teamSitesOnly.posFull
        }

        return playerMeta
    }   
    else return null
}

/**
 * @description Retrieves the player's average season data
 * @returns { Object } The player's average season stats.
 */
export const retrieveAvgSeasonData = async (id) => {
    let currentSeason = new Date().getFullYear() - 1

    let avgResponse = await Axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${currentSeason}&player_ids[]=${id}`)
    let avgSeasonData = avgResponse.data.data[0]
    return avgSeasonData
}

/**
 * @description Retrieves the upcoming games for the NBA player
 * @param { Object } params 
 * @returns { Object } Object containing the games for the following week.
 */
export const retrieveUpcomingGames = async (req, params) => {
       
    /*
    // Last Thing ! Getting the Upcoming Games for the player
    let date = new Date()
    let todaysYear = date.getFullYear()
    let todaysDay = (date.getDate() < 10) ? '0' +  date.getDate() : date.getDate()
    let todaysMonth = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)

    let combinedDate = todaysYear + '-' + todaysMonth + '-' + todaysDay
    
    /*
    let upcomingRes = await Axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${combinedDate}&end_date=2022-02-28&team_ids[]=${playerInfo.team.id}}`)   
    let upcomingGames = await upcomingRes.data.data[0]
    console.log(upcomingGames)
    */ 
}

/**
 * 
 * @returns { Object }
 */
export const fetchPlayers = async () => {
   
}




export default function handler(req, res) {
    return res.status(200).json({text: 'yee'})
}
  