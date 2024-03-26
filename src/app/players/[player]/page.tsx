
import React from 'react';
import FeaturedPlayer from '@/Components/Player/FeaturedPlayer';

import { calculateDaysBefore } from '@/utils';
import { PlayerInfo, retrievePlayerInformation } from '@/utils';
import { Card, Container, Typography, Box, Grid, CardMedia, CardContent } from '@mui/material';
import { retrievePreviousGameStats } from '@/utils/API/BDL/stats';
import { PlayerStats } from '@/Types/stats';
import Navbar from '@/Components/UI/Navbar';
import { getUpcomingGames } from '@/utils/API/BDL/Game';
import { Game } from '@/Types/Game';

const Player = async ({params = {}} : {params?: { player?: string }}) => {   

    const { player } = params;

    if (!player) return (
        <Container>
            <Typography>Error: Team Paramter is missing</Typography>
      </Container>
    )

    let player_name = player.split('%20')
    const player_info = await retrievePlayerInformation(player_name[0], player_name[1]) as PlayerInfo
    const {bdlData, nbaData} = player_info

    // Get recent games
    const recentGames : PlayerStats[] = await retrievePreviousGameStats(bdlData.id.toString(), calculateDaysBefore(14))
    const dateLabels = []
    const points = []
    const assists = []
    const rebounds = []
    const minutes = []
 
    for (let i = 0; i < recentGames.length; i++) {
        points.push(recentGames[i].pts)
        assists.push(recentGames[i].ast)
        rebounds.push(recentGames[i].oreb + recentGames[i].dreb)
        minutes.push(recentGames[i].min)
        dateLabels.push(recentGames[i].game.date)
    }

    const graphData = {
        data: {
            points,
            assists,
            rebounds,
            minutes
        },
        labels: dateLabels
    }

    const upcomingGames : Game[] = await getUpcomingGames(bdlData.team.id)

    return (
        <Container maxWidth = "xl" sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Navbar />
            <Box
                sx = {{marginBottom: '30px'}}>
                <FeaturedPlayer data={bdlData} nbaData={nbaData} chartData={graphData} />
            </Box>
            <Typography variant = "h4">Upcoming Games</Typography>
            <Grid
                container
                >
                {
                    upcomingGames.map((game, key) => <Grid
                        item
                        xs = {12}
                        sm = {6}
                        md = {4}
                        key = {key}>
                            <GameCard awayTeam={game.visitor_team.abbreviation} homeTeam={game.home_team.abbreviation} date={game.date}/>
                        </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default Player;


const GameCard : React.FC<{ awayTeam: string, homeTeam: string, date: string }> = ({ awayTeam, homeTeam, date } : {awayTeam: string, homeTeam: string, date: string}) => {
    return (
        <Card
        sx = {{ width: '70%', height: 'fit-content', display: 'flex', flexDirection: 'column',  alignItems: 'center', position: 'relative', marginX: '60px', marginTop: '20px'}}>
            <Box sx = {{display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '-10px'}}>
                <CardMedia
                    component={'img'}
                    image={`https://cdn.celtics.com/logos/teams/latest/svg/${awayTeam}.svg`}
                    sx = {{width: '30%', height: 'auto'}}>
                </CardMedia>
                <CardMedia
                    component={'img'}
                    image={`https://cdn.celtics.com/logos/teams/latest/svg/${homeTeam}.svg`}
                    sx = {{width: '30%', height: 'auto'}}>
                </CardMedia>
            </Box>
            <CardContent
                component='span'>
                    <Typography variant='h6'>{`${awayTeam} vs ${homeTeam}`}</Typography>
                    <Typography sx= {{textAlign: 'center'}}>{date}</Typography>
            </CardContent>
        </Card>
    )
}