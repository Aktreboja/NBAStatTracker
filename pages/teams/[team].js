import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { retrieveTeamMetaData } from '../api/team'

export default function Team({primaryMeta, secondaryMeta}) {
  return (
    <div className='flexCenterColContainer'>
      <h3>{primary.fullName}</h3>
      <Image src={`https://cdn.nba.com/logos/nba/${teamName.teamId}/primary/L/logo.svg`} alt = "player snapshot" width = {300} height = {300}/>
    </div>
  )
}

export async function getStaticProps(context) {
  const teamUrl = context.params.team
  let selectedTeam = await retrieveTeamMetaData(teamUrl)
  let teamId = selectedTeam.secondaryMeta.id
  

  return {props: {
    primaryMeta: selectedTeam.primaryMeta,
    secondaryMeta: selectedTeam.secondaryMeta
  }}

}


export async function getStaticPaths() {
  let teamArray = []
  let response = await axios.get('http://data.nba.net/data/10s/prod/v1/2021/teams.json')
  let teamNickNames = response.data.league.sacramento
  teamNickNames.map((team) => {
    teamArray.push({params: {team: team.urlName }})
  })
  return {
    paths: teamArray,
    fallback: true
  }
}