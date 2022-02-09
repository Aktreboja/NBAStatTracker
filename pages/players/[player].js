import React from 'react';
import { useRouter } from 'next/router'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

import styles from './Players.module.css'



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
const Player = ({ playerInfo, playerAverages }) => {    
    let router = useRouter()
    let { player } = router.query
    let { 
        first_name,
        last_name,
        height_feet,
        height_inches,
        position
    } = playerInfo

    let PlayerComponent = (
        <Card border = "dark" className = {styles.Card}>
             <div style ={{width: '50px', height: '50px', borderRadius: '50%', background: 'black'}}></div>
            <Card.Title>{ first_name } { last_name } </Card.Title>
            <Card.Text>{ position }</Card.Text>
            <ListGroup>
                <ListGroup.Item>Games Played</ListGroup.Item>
            </ListGroup>
        </Card>
    )
    console.log({playerAverages})

    return (
        <div> 
            
            { PlayerComponent }
        </div>
    )
}


export async function getServerSideProps(context) {
    let player = context.params.player

    let response = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    let data = response.data
    let playerInfo = data.data[0]

    let seasonAvgResponse = await Axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.id}`)
    let playerAverages = seasonAvgResponse.data.data[0]
    return {props : { playerInfo, playerAverages }}
}

export default Player;
