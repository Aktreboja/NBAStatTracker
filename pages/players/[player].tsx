import React from 'react';
import PlayerAverages from '../../Components/PlayerAverages';
import PlayerCard from '../../Components/Player/PlayerCard';
import { PlayerMeta, playerAverages, NbaPlayerMeta, PlayerCardProps } from '../../Types/Player';

// Api Route
import { retrieveAvgSeasonData, retrieveNbaPlayerStats, retrievePlayerId } from '../api/player';

const Player = ({ playerProps, avgSeasonData }) => {   
    console.log(playerProps)  
    return (
        <section className = "playerContainer"> 
            <PlayerCard {...playerProps}/>
            <h1><u>Season Averages</u></h1>
            <PlayerAverages stats = { avgSeasonData } />
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


// export async function getStaticPaths() {
//     let teamArray = []
//     let playersObject = await Axios.get('http://data.nba.net/data/10s/prod/v1/2021/players.json')
//     let playersResponseArray = playersObject.data.league.standard
//     playersResponseArray.map((player) => {
//       playersResponseArray.push({params: {team: player.playerCode }})
//     })
//     return {
//       paths: playersResponseArray,
//       fallback: true
//     }
//   }


export default Player;
