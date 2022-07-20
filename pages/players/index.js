import React from 'react'
import PlayerSearchForm from '../../Components/Player/PlayerSearchForm'
import TeamCard from '../../Components/Team/TeamCard'

export default function index() {
  return (
    <div className = "playerContainer">
        <h1>Welcome to the players Page</h1>
        <PlayerSearchForm />
        <h4>Search By Team</h4>
        <div>
          <TeamCard />
        </div>
    </div>
  )
}
// 7/20: UI Check
export async function getStaticProps(context) {
  return {props: {} }
}

