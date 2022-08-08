import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from 'axios'

/**
 * Team Card for the player page
 * # Note: To receive the team Data: http://data.nba.net/data/10s/prod/v1/2021/teams.json
 * # Note to Retrieve logo: https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg
 * @returns 
 */
export default function TeamCard() {
  let [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    async function retrieveNbaTeamId() {
      let response = await Axios.get()
    }
  })


  return (
    <div className='teamCard'>
        <h1>Atlanta Hawks</h1>
        {/* <Image /> */}
    </div>
  )
}


