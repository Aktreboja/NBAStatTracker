import { Team } from "@/Types/Team"
import { Box, Typography, Grid } from "@mui/material"
import TeamCard from "@/Components/Team/TeamCard"

const CurrentTeams: React.FC<{teams: Team[]}> = ({ teams }) => {
    if (!teams || teams.length == 0 ) return null
    return (
    <Box component={"div"}>
        <Typography align='center' marginY = "10px"  sx = {{typography: {xs: 'h4', md: 'h3'}}}>Current NBA Teams</Typography>
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

export default CurrentTeams