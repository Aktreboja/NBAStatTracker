const {retrieveTeamMetaData, getUpcomingGames ,retrieveTeamLogos} = require('../pages/api/team')

// RetrieveTeamLogos Tests
describe('RetrieveTeamLogos', () => {
    it('Returns an object containing all of the teams in the nba', async () => {
        let teamsResponse = await retrieveTeamLogos()
        console.log(teamsResponse)
        expect(teamsResponse).toBeDefined()
    })
})

// RetrieveTeamMetaData Tests
describe('RetrieveTeamMetaData Tests', () => {

    // nba.net JSON file tests
    it('Returns null when a param is not defined', async () => {
        let response = await retrieveTeamMetaData()
        expect(response).toBeNull()
    })
    it('Returns Hawks data when a the param is Hawks is defined, Accessing the teams Full Name', async () => {
        let response = await retrieveTeamMetaData("hawks")
        let primaryMeta = response.primaryMeta
        expect(primaryMeta.fullName).toBe('Atlanta Hawks')
    })


    // BallDontLie API tests
    it('Fetches the data from BallDontLie API specific to the team name ', async () => {
        let secondaryMeta = await retrieveTeamMetaData('Hawks')
        expect(secondaryMeta.secondaryMeta.name).toBe('Hawks')
    })
    
});

// getRecentGames Tests
describe('Getting the recent games of a team', () => {
    it('Returns information when a team is set', async () => {
    
    })
    
    it('Returns undefined when no team is provided', async () => {

    })
})

// Get upcoming games tests
describe('Getting the upcoming Games of a team', () => {
    it('Returns null because there are no games upcoming (Season has ended', async () => {
        let upcomingGamesResponse = await getUpcomingGames(2)
        

    })

    it('Returns data that is at least either today or at a future date', async () => {
        let upcomingGamesResponse = await getUpcomingGames()
        console.log(upcomingGamesResponse)
        expect(upcomingGamesResponse).toBeDefined()
    })

})