import { calculateDaysBefore } from '@/utils'
import { getNbaTeam, retrieveTeamPlayers } from '@/utils/API/BDL/Team'
import React from 'react'
import { NbaTeam } from '@/Types/Team'
import { MainContainer } from '@/Theme/Landing'
import { AppBar, Box, Card, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material'
import { BdlPlayer, NbaRosterPlayer } from '@/Types/Player'
import { retrieveNbaTeam, retrieveTeamRoster } from '@/utils/API/NBA/team'
import Image from 'next/image'
import Navbar from '@/Components/UI/Navbar'
import Link from 'next/link'


const Team = async ({params} : {params: {team: string}}) => {

  // Retrieving roster
  const roster : NbaRosterPlayer[] = await retrieveTeamRoster(params.team)
  const team : NbaTeam = await retrieveNbaTeam(params.team)

  if (roster.length > 0)
  return (

    <Container maxWidth = "xl" sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar />
       <Box component={'section'} sx = {{display: 'flex'}}>
         <Image src = {`https://cdn.celtics.com/logos/teams/latest/svg/${team.abbreviation}.svg`} width={150} height = {150} alt = {`${team.full_name}`}/>
         <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
           <Typography fontWeight={700} sx = {{typography: {sm: 'h5', md: 'h3'}, fontWeight: {sm: 500, md: 700}}}>{team.full_name}</Typography>
           <Typography>{team.city}</Typography>
         </Box>
       </Box>
       <Typography fontWeight={'600'} marginY={3} sx = {{ typography: { sm: 'body1', md: 'h4'}}}>Current Roster</Typography>
       <Grid
         rowGap={4}
         columnSpacing={4}
         container
         >
           {roster.map((player, key) => <Grid key={key} item xs = {12} sm = {6} lg = {4} xl = {3}>
             <PlayerCard player = {player}/>
           </Grid>)}
       </Grid>
    </Container>
    // <MainContainer>
    //   <Navbar />

    // </MainContainer>
  )
}


const PlayerCard: React.FC<{player: NbaRosterPlayer}> = ({ player }) => {
  let {player_name, player_id, jersey_number, position, height, weight, experience} = player

  if (experience == 'R') experience = 'Rookie'
  return (
  <Link href={`/players/${player_name}`} style={{textDecoration: 'none'}}>
  <Card variant='outlined'>
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
    </Card>
  </Link>)
}


export default Team