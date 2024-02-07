import React, {  useState } from 'react'
import { Team } from '@/Types/Team';
import Image from 'next/image';

/**
 * Team Card for the player page
 */
export default function TeamCard({team}: {team: Team}) {
  

  const {full_name, name, abbreviation, city, conference, division, id} = team;

  return (
    <div className='shadow-lg px-4 py-2 flex min-w-max cursor-pointer hover:shadow-xl duration-100'>
      <div>
        {/* todo: Add Team Logo here */}
        <Image 
          src = {`https://cdn.celtics.com/logos/teams/latest/svg/${abbreviation}.svg`} 
          alt = {`${abbreviation} Icon`} 
          width = {100} 
          height = {100}/>
      </div>
      <div>
        <strong>{full_name}</strong>
        <p>{abbreviation}</p>
        <p><strong>Conference:</strong> {conference}</p>
        <p><strong>Division:</strong> {division}</p>
      </div>

    </div>
  )
}


