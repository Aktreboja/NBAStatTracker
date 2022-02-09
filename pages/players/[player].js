import React from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from './Players.module.css';
import Table from 'react-bootstrap/Table';



/**
 * 
 * URL for getting NBA player's image
 *  - https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/(Number).png
 *  - (Number) : The ID of the player that is linked to the image / url below
 *  
 * URL for the list of all of the NBA Players 
 *  - http://data.nba.net/data/10s/prod/v1/(season)/players.json
 *  - (Season) : the most recent season the player has played
 * 
 * @param {*} param0 
 * @returns 
 */
const Player = ({ playerInfo, playerAverages, playerMeta }) => {    
    let router = useRouter()
    let { player } = router.query
    let { 
        first_name,
        last_name,
        height_feet,
        height_inches,
        position
    } = playerInfo

    let {playerID} = playerMeta
    console.log(playerID)

    let playerImage = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`

    let PlayerComponent = (
        <Card border = "dark" className = {styles.Card}>
             <div style ={{width: '50px', height: '50px', borderRadius: '50%', background: 'black'}}></div>
             <img className = {styles.playerImage} src = {playerImage} alt = {`${first_name} ${last_name}`}/> 
            <Card.Title>{ first_name } { last_name } </Card.Title>
            <Card.Text>{ position }</Card.Text>

        </Card>
    )
    
    // Table headers for the season averages.
    let avgHeaders = ['Points', 'FGM', 'FGA', '3pt-FGM', '3pt-FGA', 'FTM', 'FTA', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PF',  'FG PCT', '3PT PCT', 'FT PCT']

    let averagesCompoent = avgHeaders.map((header, key) => ( <th key = {key}>{ header }</th>))
    console.log(playerAverages)

    return (
        <div> 
            
            { PlayerComponent }
            <h1>Offensive Stats</h1>
            <Table>
                <thead>
                    <tr>
                        { averagesCompoent }
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
}


export async function getServerSideProps(context) {
    let player = context.params.player
    let playerFirstName = console.log(player.split('_')[0])
    
  

    // Get the player's Data
    let response = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    let data = response.data
    let playerInfo = data.data[0]

    // Get the player's current sesason averages
    let seasonAvgResponse = await Axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.id}`)
    let playerAverages = seasonAvgResponse.data.data[0]
 

    // 
    let playerImageData = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')
    let playersResponse = playerImageData.data
    let playersArray = playersResponse.league.standard

    let playerIndex = playersArray.findIndex(obj => obj.lastName == 'Morant')
    let playerId = playersArray[playerIndex].personId

    let playerMeta = {
        playerID: playerId
    }

    return {props : { playerInfo, playerAverages, playerMeta }}
}

export default Player;
