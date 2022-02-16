import React from 'react'
import Card from 'react-bootstrap/Card'

/**
 * Container holding the current day's Games.
 * @param { Object } gameData the game data for the current day 
 * @returns 
 */
export default function ScheduleContainer({ gameData }) {

    let ScheduledGame = ({home_team, visitor_team, date}) => {
        return (
            <Card>
                <h1>{home_team.full_name}</h1>
            </Card>
        )
    }

    let Games = gameData.map((game) => {
        return <ScheduledGame home_team={ game.home_team }/>
    })
    

  return (
    <div>{Games}</div>
    
  )
}
