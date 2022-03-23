import React from 'react';
import Image from 'next/image'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Players.module.css';
import PlayerAverages from '../Components/PlayerAverages';
import PageLayout from '../Components/PageLayout';

// 3/22 rest day
// Api Route
import { retrieveAvgSeasonData, retrieveNbaPlayerStats, retrievePlayerId } from './api/player'

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
const Player = ({ playerInfo, avgSeasonData, playerMeta, playerSchedule }) => {    
    let { 
        first_name,
        last_name,
        team
    } = playerInfo

    let { playerID, teamId, position, heightFeet, heightInches, weightPounds, draft, nbaDebutYear, jersey} = playerMeta
    let { pickNum, roundNum } = draft

    let playerImage = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`
    let teamLogoUrl = `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`
    let PlayerComponent = (
        <Card className = {styles.Card}>
            <Container className = {styles.imageWrapper}>
                <div className= {styles.logoWrapper}>
                    <Image className={styles.logo} src = {teamLogoUrl} layout = "fill" alt = {`${first_name} ${last_name}`} />
                </div>
                <Image className={styles.playerImage} src = {playerImage}  width = { 260 } height = { 190 } alt = {`${first_name} ${last_name}`} />
            </Container>
            <Card.Body className = {styles.metaData}>
                <Card.Title className = {styles.playerName}>{ first_name } { last_name } (#{jersey}) </Card.Title>
                <Card.Text><strong>Position</strong> { position }</Card.Text>
                <Card.Text><strong>Height: </strong> { heightFeet } &lsquo; { heightInches } &lsquo;&lsquo;</Card.Text>
                <Card.Text><strong>Weight:</strong> { weightPounds } lbs</Card.Text>
                <Card.Text><strong>Draft:</strong> {roundNum} round, {pickNum} pick</Card.Text>
                <Card.Text><strong>Debut Year:</strong> { nbaDebutYear }</Card.Text>
            </Card.Body>
        </Card>
    )
        
    return (
        <PageLayout> 
            { PlayerComponent }
            <h1 className = {styles.statsHeader}><u>Season Averages</u></h1>
            <PlayerAverages stats = { avgSeasonData } />
            
            <h1>Player&lsquo;s Upcoming Games</h1>
        </PageLayout>
    )
}


export async function getServerSideProps(context) {
    try {
        // Retrieve the name of the player from the url.
        let player = context.params.player
        let playerInfo = await retrievePlayerId( context.params)
        let avgSeasonData = await retrieveAvgSeasonData(playerInfo.id)
        let playerMeta = await retrieveNbaPlayerStats(context.params)
        return {props : { playerInfo, avgSeasonData, playerMeta }}
    }
    catch (e) {
        return {
            redirect: {
                destination: '/500'
            }
        }
    }
}

export default Player;
