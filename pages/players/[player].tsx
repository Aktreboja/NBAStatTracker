import React from 'react';
import PlayerAverages from '../../Components/PlayerAverages';
import PlayerCard from '../../Components/Player/PlayerCard';
import { PlayerMeta, playerAverages, NbaPlayerMeta, PlayerCardProps } from '../../Types/Player';
import { AiOutlineInfoCircle, AiOutlineClose }  from 'react-icons/ai'

// Api Route
import { retrieveAvgSeasonData, retrieveNbaPlayerStats, retrievePlayerId } from '../api/player';

const Player = ({ playerProps, avgSeasonData }) => {   
    console.log(playerProps)  
    return (
        <section className = "playerContainer"> 
            <PlayerCard {...playerProps}/>
            <h1 style = {{color: 'white'}}><u>Season Averages</u></h1>
            <div className = "tooltipContainer">
                <p >Glossary <AiOutlineInfoCircle /></p>
                <div className='tooltips'>
                    <p><b>FGM</b> - Field Goals made per game</p>
                    <p><b>FGA</b> - Field Goals attempted per game</p>
                    <p><b>FTM</b> - Free Throws made per game</p>
                    <p><b>FGA</b> - Free Throws Attempted game</p>
                    <p><b>OREB</b> - Offensive Rebounds per game</p>
                    <p><b>DREB</b> - Defensive Rebounds per game</p>
                    <p><b>STL</b> - Steals per game</p>
                    <p><b>BLK</b> - Blocks per game</p>
                    <p><b>PF</b> - Personal Fouls per game</p>
                    <p><b>TO</b> - Turnovers per game</p>
                </div>
            </div>
            <PlayerAverages stats = { avgSeasonData } />
            <h1 style={{color: 'white'}}>Players also on the "Insert Team Name here"</h1>
            <div style={{width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style = {{color: 'white'}}>Support for this coming soon...</p>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {

        // Retrieve the name of the player from the url.
        let player = context.params.player
        let playerInfo : PlayerMeta = await retrievePlayerId(context.params)
        let avgSeasonData : playerAverages = await retrieveAvgSeasonData(playerInfo.id)
        let playerMeta: NbaPlayerMeta = await retrieveNbaPlayerStats(context.params)

        let { playerID, teamId, position, heightFeet, heightInches, weightPounds, draft, nbaDebutYear, jersey} = playerMeta
        let { first_name, last_name } = playerInfo

        let playerProps : PlayerCardProps = {
            playerID,
            teamId,
            heightFeet,
            heightInches,
            weightPounds,
            draft,
            nbaDebutYear,
            jersey,
            first_name,
            last_name,
            position
        }
        
        return {props : { playerProps, avgSeasonData, playerMeta }}

}

export default Player;
