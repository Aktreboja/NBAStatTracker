
import React from 'react';
import TeamCard from '../Components/Team/TeamCard';
import Grid from '@mui/material/Grid';
import { MainContainer, LandingText} from '@/Theme/Landing';
import { Typography, Box, Card, CardHeader, CardContent, CardMedia } from '@mui/material';
import LineChart from '@/Components/Charts/LineChart';
import {Inter} from 'next/font/google'
import { BdlPlayer, NbaPlayer, PlayerResponse } from '@/Types/Player';
import { retrieveAllNbaTeams } from '@/utils/API/BDL/Team';
import { getPlayerByFullName } from '@/utils/API/BDL/Player';
import { getNbaPlayer } from '@/utils/API/NBA/player';
import { Team } from '@/Types/Team';


const inter = Inter({ subsets: ['latin']})

interface ChartDataProps {
    graphData: number[];
    labels: string[];
}

interface FeaturedPlayerProps {
    data: BdlPlayer[];
    nbaData: NbaPlayer[]
    chartData: ChartDataProps
}

const Index = async () => {
    const teamData = await retrieveAllNbaTeams()

    const lebron_data : PlayerResponse = await getPlayerByFullName('Lebron', 'James')
    const { data } = lebron_data

    const nba_data = await getNbaPlayer('Lebron', 'James')

    const gData = [12, 19, 3, 5, 2, 3];
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    return <Box component={'main'} className={`${inter.className}`}>
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
                <Grid
                    item
                    xs = {12}
                    lg = {4}
                    sx={{paddingX: '5px'}}
                    >
                    <Typography variant = "h6" fontWeight={600} >Explore Player Stats</Typography>
                    <LandingText variant='body2' paragraph>
                        Explore Player Stats: Dive deep into the performance metrics of your favorite NBA players. From scoring averages to rebounds and assists, our web app provides comprehensive player statistics to satisfy every basketball enthusiast&apos;s curiosity.
                    </LandingText>
                </Grid>
                <Grid
                    item
                    xs = {12}
                    lg = {4}
                    sx={{paddingX: '5px'}}>
                    <Typography variant = "h6" fontWeight={600}>Discover Team Insights</Typography>
                    <LandingText variant='body2' paragraph >
                        Gain valuable insights into NBA teams with our comprehensive team profiles. Explore win-loss records, team statistics, player rosters, and more. Whether you&apos;re a die-hard fan or a fantasy basketball aficionado, our web app equips you with the information you need to stay ahead of the game.
                    </LandingText>
                </Grid>
                <Grid
                    item
                    xs = {12}
                    lg = {4} 
                    sx={{paddingX: '5px'}}>
                    <Typography variant = "h6" fontWeight={600}>Stay Updated with Live Data</Typography>
                    <LandingText variant='body2' paragraph >
                        Stay in the loop with real-time updates on game scores, player performances, and league standings. Our web app keeps you informed with live data feeds, ensuring you never miss a beat during the NBA season. Whether you&apos;re tracking your favorite team&apos;s progress or following individual player stats, we&apos;ve got you covered with up-to-the-minute information.
                    </LandingText>
                </Grid>

            </Grid>

            <Box
                component = {"section"} sx = {{width: '100%', height: 'fit'}}>
                <Grid
                    container
                    >
                    <Grid
                        item
                        xs = {12}>
                        {/* Featured Player  */}
                        <FeaturedPlayer data={data} nbaData={nba_data} chartData={{graphData: gData, labels: labels}}/>
                    </Grid>

                    <Grid
                        item
                        xs = {12}>
                        {/* Current teams box */}
                        <CurrentTeams teams={teamData} />
                    </Grid>
                </Grid>
            </Box>
        </MainContainer>
    </Box>;
}


const FeaturedPlayer: React.FC<FeaturedPlayerProps> = ({ data, nbaData, chartData }) => {
    return (
    <Box component = {"section"} sx = {{ height: 'fit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant = "h4" sx = {{width: '100%' , marginY: '20px'}} align='center'>Featured Player</Typography>
        <Box component={'div'} sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', maxWidth: '1200px'}}>
            {
                (data && data.length > 0)  && ( nbaData && nbaData.length > 0 ) &&
                <Card
                    sx = {{width: '650px', minWidth: '400px', height: 'fit-content', display: 'flex', flexDirection: 'column',  alignItems: 'center', position: 'relative', marginX: '60px'}}>
                    <CardMedia
                        component={"img"}
                        image={`https://cdn.celtics.com/logos/teams/latest/svg/${data[0].team.abbreviation}.svg`} 
                        sx = {{width: '75%', height: 'auto', position:'absolute', top: '-30px'}}>
                    </CardMedia>
                    <CardMedia
                        component={"img"}
                        image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${nbaData[0].id}.png`}
                        sx = {{width: '80%', height: 'auto', paddingLeft: '5px', paddingRight: '5px', zIndex: '50'}}>
                    </CardMedia>
                    <CardContent>
                        <Typography variant='h5' fontWeight={600}>{data[0].first_name} {data[0].last_name}</Typography>
                        <Typography variant='body1'>{data[0].team.full_name}</Typography>
                        <Typography variant='body2'>{data[0].position}</Typography>
                    </CardContent>
                </Card>
            }
            {
                chartData && 
                <Box component={'div'} sx={{width: '80%'}}>
                    <LineChart data={chartData.graphData} labels={chartData.labels} />
                </Box>
            }
        </Box>
    </Box>
    )
}

const CurrentTeams: React.FC<{teams: Team[]}> = ({ teams }) => {
    if (!teams || teams.length == 0 ) return null
    return (
    <Box component={"div"}>
        <Typography variant='h3' align='center' marginY = "10px" >Current NBA Teams</Typography>
        <Grid
            container
            spacing={2}
            width={"80%"}
            maxWidth={'lg'}
            justifyItems={'center'}
            marginX = {'auto'}
            >
                {
                    teams && teams.map((team, key) => <Grid key = {key} item xs = {6} sm = {4} lg = {3} xl = {2}>
                        <TeamCard  team={team}/>
                    </Grid>)
                }
        </Grid>
    </Box>
    )
}



export default Index;


