import React from 'react'
import { Team } from '@/Types/Team';
import Image from 'next/image';
import Link from 'next/link'
import { Box, Card, CardMedia } from '@mui/material';

/**
 * Team Card for the player page
 */
export default function TeamCard({ team }: {team: Team}) {
  const {full_name,abbreviation, conference, division, id} = team;
  return (
    <Link href = {`/teams/${id}`} style = {{textDecoration: 'none'}}>
      <Card sx = {{marginX: '3px', display: 'flex', cursor: 'pointer'}}>
        <Box>
          <Image 
            src = {`https://cdn.celtics.com/logos/teams/latest/svg/${abbreviation}.svg`} 
            alt = {`${abbreviation} Icon`} 
            width = {100} 
            height = {100}/>
        </Box>
        <Box component={"div"} >
          <strong>{full_name}</strong>
          <p></p>
          <p><strong>Conference:</strong> {conference}</p>
          <p><strong>Division:</strong> {division}</p>
        </Box>
      </Card>
    </Link>
  )
}


