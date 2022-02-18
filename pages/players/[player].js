import React from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Image from 'next/image'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import styles from './Players.module.css';

import PlayerAverageRow from '../../Components/PlayerAverageRow';

import PageLayout from '../../Components/PageLayout';

/**
 * 
 * 
 * URL for getting NBA player's image
 *  - https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/(Number).png
 *  - (Number) : The ID of the player that is linked to the image / url below
 *  
 * URL for the list of all of the NBA Players 
 *  - http://data.nba.net/data/10s/prod/v1/(season)/players.json
 *  - (Season) : the most recent season the player has played
 * 
 *  URL for the logos of all the NBA Teams
 *  - https://cdn.nba.com/logos/nba/(TeamID)/primary/L/logo.svg
 * 
 * @param {*} param0 
 * @returns 
 */
const Player = ({ playerInfo, seasonAveragesArray, playerMeta }) => {    
    let router = useRouter()
    let { 
        first_name,
        last_name,
        team
    } = playerInfo

    let { playerID, position, heightFeet, heightInches, weightPounds, draft, nbaDebutYear, jersey} = playerMeta
    let { pickNum, roundNum } = draft

    let playerImage = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`
    let PlayerComponent = (
        <Card className = {styles.Card}>
            <Container className = {styles.imageWrapper}>
                <img className = {styles.playerImage} src = {playerImage} alt = {`${first_name} ${last_name}`}/> 
            </Container>
           
            <div className = {styles.metaData}>
                <Card.Title className = {styles.playerName}>{ first_name } { last_name } (#{jersey}) </Card.Title>
                <Card.Text>Position: { position }</Card.Text>
                <Card.Text><Card.Title>Height: </Card.Title> { heightFeet } ' { heightInches } ''</Card.Text>
                <Card.Text>Weight: { weightPounds } lbs</Card.Text>
                <Card.Text>Draft: {roundNum} round, {pickNum} pick</Card.Text>
                <Card.Text>Debut Year: { nbaDebutYear }</Card.Text>
            </div>
        </Card>
    )
    
    // Table headers for the season averages.
    let avgHeaders = ['Season', 'Mins', 'Points', 'FGM', 'FGA', 'FG_PCT', '3pt-FGM', '3pt-FGA', 'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'AST', 'REB', 'OREB', 'DREB', 'STL', 'BLK', 'TO']
    let averagesComponent = avgHeaders.map((header, key) => ( <th key = {key}>{ header }</th>))
    
    
    return (
        <PageLayout> 
            { PlayerComponent }
            <h1 className = {styles.statsHeader}>Stats</h1>
            <Table hover responsive striped className = {styles.Table}>
                <thead >
                    <tr>
                        { averagesComponent }
                    </tr>
                </thead>
                <tbody>
                    <PlayerAverageRow  stats = {seasonAveragesArray} />
                </tbody>
            </Table>
        </PageLayout>
    )
}


export async function getServerSideProps(context) {
    // Retrieve the name of the player from the url.
    let player = context.params.player
    let playerFirstName = player.split('_')[0]
    let playerLastName = player.split('_')[1]


    // Get the player's Data
    let response = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    let data = response.data
    let playerInfo = data.data[0]

    // Get the player's current season averages
    /*
    let seasonAvgResponse = await Axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.id}`)
    let playerAverages = seasonAvgResponse.data.data[0]
    console.log(playerAverages)
    */

    // Retrieving the player from the nba database JSON file
    let playerImageData = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')
    let playersResponse = playerImageData.data
    

    // Parsing through the data to retrieve the id required for player's image.
    let playersArray = playersResponse.league.standard
    let playerIndex = playersArray.findIndex(obj =>  obj.lastName.toLowerCase().includes(playerLastName) && obj.firstName.toLowerCase().includes(playerFirstName))
    let playerMetaData = playersArray[playerIndex]
    // Player ID required for image.
    let playerId = playersArray[playerIndex].personId

    // Meta data about the nba players
    let { jersey, heightFeet, heightInches, weightPounds, draft, nbaDebutYear, collegeName, teamSitesOnly } = playerMetaData

    // Getting all of the season averages of a player.
    let seasonAveragesArray = []
    let currentSeason = new Date().getFullYear() - 1


    /*
    for (let season = currentSeason; season > nbaDebutYear; season--) {
        let avgResponse = await Axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${playerInfo.id}`)
        let avgSeasonData = avgResponse.data.data[0]
        seasonAveragesArray.push(avgSeasonData)
    }
    */
    

    console.log(seasonAveragesArray)
    let playerMeta = {
        playerID: playerId,
        jersey: jersey,
        heightFeet: heightFeet,
        heightInches: heightInches, 
        weightPounds: weightPounds, 
        draft: draft, 
        nbaDebutYear: nbaDebutYear, 
        collegeName: collegeName,
        position: teamSitesOnly.posFull
    }

    return {props : { playerInfo, seasonAveragesArray, playerMeta }}
}

export default Player;
