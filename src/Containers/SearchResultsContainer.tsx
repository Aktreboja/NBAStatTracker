import React, {useState} from 'react'
import PlayerSearchCard from '../Components/Player/PlayerSearchCard'

interface SearchResultsProps {
  playerData: any;
  searchParam: string;
}

// Container for Search results within from the form.
export default function SearchResultsContainer({playerData, searchParam}: SearchResultsProps ) {
  let [players, setPlayers] = useState(playerData);
 
  let playerComponents = players.map((player : any, index : number) => {
    let name = `${player.firstName} ${player.lastName}`.toLowerCase()
    if (name.includes(searchParam.toLowerCase())) {
      return <PlayerSearchCard first_name={ player.firstName} last_name = {player.lastName} key = {index} teamName = {player.teamName} playerId = {player.playerId}/>
    }

  })

  return (
    <div className='searchResultsContainer'> 
      {searchParam.length > 1 ? playerComponents : null}
    </div>
  )
}
