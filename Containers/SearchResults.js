import React, {useState} from 'react'
import PlayerSearchCard from '../Components/Player/PlayerSearchCard'

export default function SearchResults({playerData, param}) {
  let [players, setPlayers] = useState(playerData);
 
  let playerComponents = players.map((player, index) => {
    let name = `${player.firstName} ${player.lastName}`.toLowerCase()
    if (name.includes(param.toLowerCase())) {
      return <PlayerSearchCard first_name={ player.firstName} last_name = {player.lastName} key = {index} teamName = {player.teamName} playerId = {player.playerId}/>
    }

  })

  return (
    <div className='searchResultsContainer'> 
      {param.length > 1 ? playerComponents : null}
    </div>
  )
}
