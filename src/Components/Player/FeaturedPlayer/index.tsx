import { FeaturedPlayerProps } from "@/Types/Player"
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material"
import LineChart from "@/Components/Charts/LineChart"

const FeaturedPlayer: React.FC<FeaturedPlayerProps> = ({ data, nbaData, chartData }) => {
    return (
    <Box component = {"section"} sx = {{ height: 'fit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant = "h4" sx = {{width: '100%' , marginY: '20px'}} align='center'>Featured Player</Typography>
        <Box component={'div'} sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', maxWidth: '1200px'}}>
            {
                (data)  && ( nbaData ) ?
                <Card
                    sx = {{width: '650px', minWidth: '400px', height: 'fit-content', display: 'flex', flexDirection: 'column',  alignItems: 'center', position: 'relative', marginX: '60px'}}>
                    <CardMedia
                        component={"img"}
                        image={`https://cdn.celtics.com/logos/teams/latest/svg/${data.team.abbreviation}.svg`} 
                        sx = {{width: '75%', height: 'auto', position:'absolute', top: '-30px'}}>
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
                    <LineChart data={chartData.graphData} labels={chartData.labels} />
                </Box>
            }
        </Box>
    </Box>
    )
}

export default FeaturedPlayer;