import React from 'react'
import Card from 'react-bootstrap/Card'
import ScheduledGame from './ScheduledGame'

/**
 * Container holding the current day's Games.
 * @param { Object } gameData the game data for the current day 
 * @returns 
 */
export default function ScheduleContainer({ gameData }) {
    let Games = gameData.map((game) => {
        let gameStatus = {
            status: game.status,
            time: game.time,
            home_team_score: game.home_team_score,
            visitor_team_score: game.visitor_team_score
        }
        return <ScheduledGame home_team = { game.home_team } visitor_team = { game.visitor_team } date = { game.date } gameStatus = {gameStatus}/>
    })
    

  return (
    <div>{Games}</div>
    
  )
}
