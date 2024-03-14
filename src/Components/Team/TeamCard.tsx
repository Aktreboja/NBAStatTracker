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
  if (conference.trim().length === 0) return null
  return (
    <Link href = {`/teams/${id}`} style = {{textDecoration: 'none'}}>
      <Card sx = {{marginX: '3px', cursor: 'pointer', width: 'fit-content'}}>
        <Box>
          <Image 
            src = {`https://cdn.celtics.com/logos/teams/latest/svg/${abbreviation}.svg`} 
            alt = {`${abbreviation} Icon`} 
            width = {150} 
            height = {150}/>
        </Box>
      </Card>
    </Link>
  )
}


