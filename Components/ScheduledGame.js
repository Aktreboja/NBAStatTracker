import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './Schedule.module.css'

export default function ScheduledGame({home_team, visitor_team, gameStatus}) {
  let {time, status, visitor_team_score, home_team_score} = gameStatus

    // Convert the
  return (
    <Card className = {styles.ScheduleCard}>
        <h1>{visitor_team.name} vs {home_team.name} </h1>
         <p> <h4>Status:</h4> {status}, {time} Remaining </p>
        <p>Score: { visitor_team_score } to { home_team_score }</p>
    </Card>
  )
}
