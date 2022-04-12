import React from 'react'
import Image from 'next/image'
import { retrieveTeamLogos } from '../api/team'


/**
 * API  to get the team Logo: https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg
 * 
 * @returns 
 */
export default function index({ teamLogos }) {
  console.log(teamLogos)


  let TeamComponents = teamLogos.map((team, index) => {
    if (team.isNBAFranchise)
    return <div className = "">
      <h2 >{team.fullName}</h2>
      <Image src={`https://cdn.nba.com/logos/nba/${team.teamId}/primary/L/logo.svg`} width = {300} height = {300}/>
    </div>
  })

  return (
    <div className = " flex-center teamLogoContainer gridColsTwo">
        {TeamComponents}
    </div>
  )
}


export async function getStaticProps() {
  let teamLogos = (await retrieveTeamLogos()).teamData
  console.log(' Logos : ', teamLogos)
  return { props:  {teamLogos } }
}