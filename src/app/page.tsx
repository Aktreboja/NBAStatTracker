
import React from 'react';
import { retrieveAllNbaTeams } from '@/utils/Teams';
import TeamCard from '../Components/Team/TeamCard';
import Grid from '@mui/material/Grid';
import { MainContainer, LandingText} from '@/Theme/Landing';
import { Typography, Box, Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import LineChart from '@/Components/Charts/LineChart';
import {Inter} from 'next/font/google'
import { getPlayer, getPlayerByFullName, getNbaPlayer } from '@/pages/api/player';
import { PlayerResponse } from '@/Types/Player';

const inter = Inter({ subsets: ['latin']})

const Index = async () => {
    const teamData = await retrieveAllNbaTeams()

    // const player = await getPlayer(19)
    const lebron_data : PlayerResponse = await getPlayerByFullName('Lebron', 'James')
    const { data } = lebron_data

    const nba_data = await getNbaPlayer('Lebron', 'James')
    

    const gData = [12, 19, 3, 5, 2, 3];
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    return <main className={`${inter.className}`}>
        <MainContainer maxWidth = {false} disableGutters = {true} >
            
            <Typography variant='h2' fontWeight={700}>NBA Stat Tracker</Typography>
            <Typography variant='h4'>A Platform for everything NBA.</Typography>
            <Grid 
                container
                sx = {{
                    width: '80%',
                    marginY: '20px'
                }}>
                <Grid
                    item
                    xs = {4}>
                    <Typography variant = "h5" fontWeight={600} >Explore Player Stats</Typography>
                    <LandingText variant='body1' paragraph>
                        Explore Player Stats: Dive deep into the performance metrics of your favorite NBA players. From scoring averages to rebounds and assists, our web app provides comprehensive player statistics to satisfy every basketball enthusiast&apos;s curiosity.
                    </LandingText>
                </Grid>
                <Grid
                    item
                    xs = {4}>
                    <Typography variant = "h6" fontWeight={600}>Discover Team Insights</Typography>
                    <LandingText variant='body1' paragraph >
                        Gain valuable insights into NBA teams with our comprehensive team profiles. Explore win-loss records, team statistics, player rosters, and more. Whether you&apos;re a die-hard fan or a fantasy basketball aficionado, our web app equips you with the information you need to stay ahead of the game.
                    </LandingText>
                </Grid>
                <Grid
                    item
                    xs = {4}>
                    <Typography variant = "h6" fontWeight={600}>Stay Updated with Live Data</Typography>
                    <LandingText variant='body1' paragraph >
                        Stay in the loop with real-time updates on game scores, player performances, and league standings. Our web app keeps you informed with live data feeds, ensuring you never miss a beat during the NBA season. Whether you&apos;re tracking your favorite team&apos;s progress or following individual player stats, we&apos;ve got you covered with up-to-the-minute information.
                    </LandingText>
                </Grid>

            </Grid>

            <Box component = {"section"} sx = {{width: '100%', height: 'fit', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant = "h4" align = "center">Featured Player</Typography>

                {
                    data && data.length > 0  && nba_data.length > 0 &&
                    <Card
                        sx = {{width: '400px', height: '100%', display: 'flex', flexDirection: 'column',  alignItems: 'center', position: 'relative'}}>
                       
                        {/* <Image 
                                src = {`https://cdn.nba.com/headshots/nba/latest/1040x760/${nba_data[0].id}.png`}
                                width = {100}
                                height = {100}
                                alt = {data[0].first_name}
                                /> */}
                        <CardMedia
                            component={"img"}
                            image={`https://cdn.celtics.com/logos/teams/latest/svg/${data[0].team.abbreviation}.svg`} 
                            sx = {{width: '75%', height: 'auto', position:'absolute', top: '-30px'}}>
                        </CardMedia>
                        <CardMedia
                            component={"img"}
                            image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${nba_data[0].id}.png`}
                            sx = {{width: '80%', height: 'auto', paddingLeft: '5px', paddingRight: '5px', zIndex: '50'}}>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h5' fontWeight={600}>{data[0].first_name} {data[0].last_name}</Typography>
                            <Typography variant='body1'>{data[0].team.full_name}</Typography>
                            <Typography variant='body2'>{data[0].position}</Typography>
                        </CardContent>
                    </Card>
                }
                <Box component={'div'} sx={{width: '80%'}}>
                    <LineChart data={gData} labels={labels} />
                </Box>
                
            </Box>

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


