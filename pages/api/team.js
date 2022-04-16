import Axios from 'axios'

export const retrieveTeamLogos = async () => {
    const logosArray = []
    let teamsRequest = await Axios.get('https://data.nba.net/data/10s/prod/v1/2021/teams.json')
    let teamResponse = teamsRequest.data
    return { teamData: teamResponse.league.sacramento }
}

/**
 * Retrieves information on an NBA team from the CDN.
 * @param {string} param the url param in the dynamic page
 * @returns {Object} SelectedTeam the object containing information.
 */
export const retrieveTeamMetaData = async (param) => {
    if (!param) return null

    const teamUrl = param
    let teamResponse = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/teams.json')
    let teamData = teamResponse.data.league.sacramento
    let selectedTeam = teamData.filter(team => team.urlName == teamUrl)[0]

    let secondaryMetaResponse = await Axios.get('https://www.balldontlie.io/api/v1/teams')
    let secondaryData =  secondaryMetaResponse.data.data.filter(team => team.name == param)[0]
    let metaDataObject = {
        primaryMeta: selectedTeam,
        secondaryMeta: secondaryData
    }
    return metaDataObject
}

export const getRecentGames = async () => {

}



/**
 * Retrieves the upcoming games for a team
 * @param {number} param The team id for to search for future games. 
 * @returns {Object} Team related data, or null if none available (Season Ended).
 */
export const getUpcomingGames = async (param) => {
    // helper Function to get the days in the month
    const getDaysInMonth = (year, month) =>  { return new Date(year, month, 0).getDate()}

    let endDate;

    let date = new Date()
    let startYear = date.getFullYear()
    let startDay = (date.getDate() < 10 ) ? `0${date.getDate()}` : date.getDate()
    let startMonth = (date.getMonth() < 10) ? `0${date.getMonth()}` : date.getMonth()
    let startDate = `${year}-${month}-${day}`

    if (startDay + 7 > getDaysInMonth(year, month)) {
        endDate = `${startYear}-${ startMonth + 1 }-${startDay + 7}`
    } else {
        endDate = `${year}-${month}-${day + 7}`
    }
  
    
    return startDate
    //console.log
    //let upcomingGamesResponse = Axios.get(`https://www.balldontlie.io/api/v1/games?start_date=2022-04-07&end_date=2022-04-09&team_ids[]=${param}`)
}
