import { calculateDaysBefore } from '@/utils'
import { getNbaTeam, retrieveTeamPlayers } from '@/utils/API/BDL/Team'
import React from 'react'
import { NbaTeam } from '@/Types/Team'
import { MainContainer } from '@/Theme/Landing'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { BdlPlayer, NbaRosterPlayer } from '@/Types/Player'
import { retrieveNbaTeam, retrieveTeamRoster } from '@/utils/API/NBA/team'
import Image from 'next/image'

const Team = async ({params} : {params: {team: string}}) => {

  // Retrieving roster
  const roster : NbaRosterPlayer[] = await retrieveTeamRoster(params.team)
  const team : NbaTeam = await retrieveNbaTeam(params.team)
  console.log(team)

 ""


  if (roster.length > 0)
  return (
    <MainContainer>
      <Typography variant='h3' textAlign={'center'} fontWeight={700} border={'1px solid black'}>{team.full_name}</Typography>
      <Grid 
        container
        >
          <Grid
            item
            xs = {4}>
              <Image src = {`https://cdn.celtics.com/logos/teams/latest/svg/${team.abbreviation}.svg`} width={100} height = {100} alt = {`${team.full_name}`}/>
          </Grid>

          <Grid
            item
            xs ={8}
            >
              <Box>
                <Typography variant='h3' fontWeight={700} border={'1px solid black'}>{team.full_name}</Typography>
                <Typography>{team.city}</Typography>
            </Box>
          </Grid>
        
      </Grid>
      <Typography variant='h4' fontWeight={'600'} marginY={3}>Current Roster</Typography>
      <Grid
        rowGap={4}
        columnSpacing={4}
        container
        >
          {roster.map((player, key) => <Grid key={key} item xs = {12} sm = {6} lg = {4} xl = {3}>
            <PlayerCard player = {player}/>
          </Grid>)}
      </Grid>
    </MainContainer>
  )
}


const PlayerCard: React.FC<{player: NbaRosterPlayer}> = ({ player }) => {
  let {player_name, player_id, jersey_number, position, height, weight, experience} = player

  if (experience == 'R') experience = 'Rookie'
  return (<Card variant='outlined'>
      <CardContent>
        <CardMedia
          sx={{height: 250, width: '100%'}}
          image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player_id}.png`}/>
          <Box sx={{width: '100%', marginTop: '10px'}}>
            <Typography variant='h6' textAlign={'center'} fontWeight={600} noWrap>{`${player_name} (${jersey_number})`}</Typography>
            <Typography variant='body1' textAlign={'center'}>Height: {height}</Typography>
            <Typography variant='body1' textAlign={'center'}>Weight: {weight} lbs</Typography>
            <Typography variant='body1' textAlign={'center'}>Position: {position}</Typography>
            <Typography variant='body1' textAlign={'center'}>Years: {experience}</Typography>
          </Box>
        
      </CardContent>
  </Card>)
}


export default Team