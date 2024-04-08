
import React from 'react';
import Grid from '@mui/material/Grid';
import { MainContainer, LandingText} from '@/Theme/Landing';
import { Typography, Box } from '@mui/material';
import {Inter} from 'next/font/google'
import { retrieveAllNbaTeams } from '@/utils/API/BDL/Team';
import { retrievePreviousGameStats } from '@/utils/API/BDL/stats';
import { PlayerStats } from '@/Types/stats';
import FeaturedPlayer from '@/Components/Player/FeaturedPlayer';
import { PlayerInfo, retrievePlayerInformation } from '@/utils';
import { calculateDaysBefore } from '@/utils';
import CurrentTeams from '@/Components/UI/Teams/CurrentTeams';
import Navbar from '@/Components/UI/Navbar';
import { aboutText } from '../../data.json'

const inter = Inter({ subsets: ['latin']})

const Index = async () => {
    // const teamData = await retrieveAllNbaTeams()
    const player_data  = await retrievePlayerInformation('Lebron', 'James') as PlayerInfo;
    const { bdlData, nbaData } = player_data

    // Get recent games from the past month
    const recentGames : PlayerStats[] = await retrievePreviousGameStats((bdlData.id).toString(), calculateDaysBefore(30))
    
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

    return <Box component={'main'} className={`${inter.className}`} >
        <Navbar />
        <MainContainer maxWidth = {false} disableGutters = {true} >
            <Typography variant='h4' fontWeight={700} marginTop={'40px'} textAlign={'center'}>NBA Stat Tracker</Typography>
            <Typography variant='h6' textAlign={'center'}>A Platform for everything NBA.</Typography>
            <Grid 
                container
                justifyItems={'center'}
                sx = {{
                    width: '80%',
                    marginY: '20px',
                    maxWidth: '1200px'
                }}>

                    {
                        aboutText.map((text, key) => (
                        <Grid
                            key = { key }
                            item
                            xs = {12}
                            lg = {4}
                            sx={{paddingX: '5px'}}
                            >
                            <Typography variant = "h6" fontWeight={600} >{text.headline}</Typography>
                            <LandingText variant='body2' paragraph>
                                { text.description }
                            </LandingText>
                        </Grid>
                        ))
                    }
            </Grid>
            <Box
                component = {"section"} sx = {{width: '100%', height: 'fit'}}>
                <Grid
                    container
                    >
                    <Grid
                        item
                        xs = {12}
                        sx={{ marginBottom: '20px'}}>
                        
                        <FeaturedPlayer data={bdlData} nbaData={nbaData} chartData={graphData} />
                    </Grid>

                    <Grid
                        item
                        xs = {12}>
                        {/* Current teams box */}
                        {/* <CurrentTeams teams={teamData} /> */}
                    </Grid>
                </Grid>
            </Box>
        </MainContainer>
    </Box>;
}





export default Index;

