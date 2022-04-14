import React from 'react'
import TeamLogoButton from '../../Components/Team/TeamLogoButton'
import { retrieveTeamLogos } from '../api/team'

/**
 * API  to get the team Logo: https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg
 * 
 * @returns 
 */
export default function index({ teamLogos }) {
  let TeamComponents = teamLogos.map((team, index) => {
    if (team.isNBAFranchise)
    return <TeamLogoButton  index = {index} 
                            urlName = {team.urlName} 
                            teamId = {team.teamId} 
                            fullName = {team.fullName}
            />
  })

  return (
    <div className = "teamLogoContainer">
        {TeamComponents}
    </div>
  )
}

export async function getStaticProps() {
  let teamLogos = (await retrieveTeamLogos()).teamData
  return { props:  { teamLogos } }
}