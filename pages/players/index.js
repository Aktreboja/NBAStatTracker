import React from 'react'
import PlayerSearchForm from '../../Components/Player/PlayerSearchForm'
import TeamCard from '../../Components/Team/TeamCard'
import { retrieveAllNbaTeams } from '../api/team'


export default function index() {
  return (
    <div className = "playerContainer">
        <h1>Search for a player</h1>
        <p className='playersPageText'>
          Note: Player searches are only valid for current NBA players. Retired players like Kobe Bryant and Dirk Nowitzski will not return any results
          because the search results only contain current NBA players in the season. There will be an implementation supporting retired players soon.
        </p>
        <PlayerSearchForm />
    </div>
  )
}

export async function getStaticProps(context) {
  


  return {props: {} }
}

