import React, {useState} from 'react'
import PlayerSearchCard from '../Components/Player/PlayerSearchCard'

export default function RosterContainer({ roster, currentPlayerId, teamName}) {
  let rosterComponents = roster.map((player, index) => {
    return (player.personId != currentPlayerId )?  <PlayerSearchCard first_name={player.firstName} last_name = {player.lastName} playerId = {player.personId} teamName = {teamName} key = {index}/> : null
  })
  return (
    <div className = "rosterContainer">
      {rosterComponents}
    </div>
  )
}
