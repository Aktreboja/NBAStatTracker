'use client'
import { FeaturedPlayerProps } from "@/Types/Player"
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material"
import LineChart from "@/Components/Charts/LineChart"
import { ReactNode, useState } from "react"
import ChartButton from "@/Components/Charts/ChartButton"



const FeaturedPlayer: React.FC<FeaturedPlayerProps> = ({ data, nbaData, chartData }) => {
    const { points, assists, rebounds, minutes } = chartData.data
    const [active, setActive] = useState('Points')
    const [activeData, setActiveData] = useState(points)

    const setGraphView = (view: string, graphData: any[]) => {
        setActive(view)
        setActiveData(graphData)
    }

    return (
    <Box component = {"section"} sx = {{ height: 'fit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant = "h4" sx = {{width: '100%' , marginY: '20px'}} align='center'>Featured Player</Typography>
        <Box component={'div'} sx = {{display: 'flex', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', width: '90%', maxWidth: '1200px'}}>
            {
                (data)  && ( nbaData ) ?
                <Card
                    sx = {{width: '80%', minWidth: {md: '400px'}, height: 'fit-content', display: 'flex', flexDirection: 'column',  alignItems: 'center', position: 'relative', marginX: '60px'}}>
                    <CardMedia
                        component={"img"}
                        image={`https://cdn.celtics.com/logos/teams/latest/svg/${data.team.abbreviation}.svg`} 
                        sx = {{width: '65%', height: 'auto', position:'absolute', top: '-20px'}}>
                    </CardMedia>
                    <CardMedia
                        component={"img"}
                        image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${nbaData.id}.png`}
                        sx = {{width: '80%', height: 'auto', paddingLeft: '5px', paddingRight: '5px', zIndex: '50'}}>
                    </CardMedia>
                    <CardContent>
                        <Typography variant='h5' fontWeight={600}>{data.first_name} {data.last_name}</Typography>
                        <Typography variant='body1'>{data.team.full_name}</Typography>
                        <Typography variant='body2'>{data.position}</Typography>
                    </CardContent>
                </Card> : <p>heehee</p>
            }
            {
                chartData && 
                <Box component={'div'} sx={{width: '80%'}}>
                    <LineChart data={activeData} labels={chartData.labels} title={active}/>
                    <Box component='div' sx = {{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                        <ChartButton active= { active } handler={() => setGraphView("Points", points)}>Points</ChartButton>
                        <ChartButton active= { active } handler={() => setGraphView("Assists", assists)}>Assists</ChartButton>
                        <ChartButton active= { active } handler={() => setGraphView("Rebounds", rebounds)}>Rebounds</ChartButton>
                        <ChartButton active= { active } handler={() => setGraphView("Minutes", minutes)}>Minutes</ChartButton>
                    </Box>
                </Box>
            }
        </Box>
    </Box>
    )
}

export default FeaturedPlayer;
