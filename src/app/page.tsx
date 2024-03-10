
import React, {useEffect} from 'react';
import { retrieveAllNbaTeams } from '@/utils/Teams';
import TeamCard from '../Components/Team/TeamCard';

import Grid from '@mui/material/Grid';

import { MainContainer, LandingText} from '@/Theme/Landing';
import { Typography, Box } from '@mui/material';



const Index = async () => {

    const teamData = await retrieveAllNbaTeams()

    return <main className=''>
        <MainContainer maxWidth = {false} disableGutters = {true} >
            
            <Typography variant='h2' fontWeight={700}>NBA Stat Tracker</Typography>
            <Typography variant='h4'>A Platform for everything NBA.</Typography>
            <Grid 
                container
                padding={2}
                columns={12}
                sx = {{
                    width: '80%',
                    border: '1px solid black'
                }}>
                <Grid
                    item
                    xs = {4}>
                    <Typography variant = "h6" >Explore Player Stats</Typography>
                    <LandingText variant='body1' paragraph>
                        Explore Player Stats: Dive deep into the performance metrics of your favorite NBA players. From scoring averages to rebounds and assists, our web app provides comprehensive player statistics to satisfy every basketball enthusiast&apos;s curiosity.
                    </LandingText>
                </Grid>
                <Grid
                    item
                    xs = {4}>
                    <Typography variant = "h6" >Explore Player Stats</Typography>
                    <LandingText variant='body1' paragraph >
                    Discover Team Insights: Gain valuable insights into NBA teams with our comprehensive team profiles. Explore win-loss records, team statistics, player rosters, and more. Whether you&apos;re a die-hard fan or a fantasy basketball aficionado, our web app equips you with the information you need to stay ahead of the game.
                    </LandingText>
                </Grid>


                <LandingText variant='body1' paragraph sx = {{width: '33%'}}>
                    Stay Updated with Live Data: Stay in the loop with real-time updates on game scores, player performances, and league standings. Our web app keeps you informed with live data feeds, ensuring you never miss a beat during the NBA season. Whether you&apos;re tracking your favorite team&apos;s progress or following individual player stats, we&apos;ve got you covered with up-to-the-minute information.
                </LandingText>
            </Grid>
            <Box component={"section"}>
                <Typography variant='h3' align='center' marginY = "10px" >Current NBA Teams</Typography>
                <Grid
                    container
                    spacing={2}
                    width={"80%"}
                    maxWidth={'xl'}
                    marginX = {'auto'}
                    >
                        {
                            teamData && teamData.map((team, key) => <Grid key = {key} item xs = {12} sm = {6} md = {4}>
                                <TeamCard  team={team}/>
                            </Grid>)
                        }
                </Grid>

            </Box>


        </MainContainer>
    </main>;
}

export default Index;


