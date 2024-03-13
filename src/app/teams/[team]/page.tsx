import { calculateDaysBefore } from '@/utils'
import { getNbaTeam } from '@/utils/API/BDL/Team'
import React from 'react'

const Team = async ({params} : {params: {team: number}}) => {

  // const team = await getNbaTeam(params.team)
  // console.log(team)


  return (
    <div className=''>
      <h1>Team ID: {params.team}</h1>
    </div>
  )
}


export default Team