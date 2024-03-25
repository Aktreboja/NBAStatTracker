'use client'
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material"
import { NbaRosterPlayer } from "@/Types/Player";
import { styled } from "@mui/system";

const StyledPlayerCard = styled(Card)({
    padding: '0px',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    '&:hover': {
        backgroundColor: 'rgba(200,200,200,0.15)',
        transitionDuration: 'background-color 0.1s'
    }
})

// Utility function to parse the position of a player
const generatePosition = (pos: string) => {
    switch(pos) {
        case 'G':
            return 'Guard';
        case 'F':
            return 'Forward';
        case 'C':
            return 'Center';
        case 'G-F':
            return 'Guard - Forward';
        case 'F-C':
            return 'Forward - Center';
        case 'C-F':
            return 'Center - Forward';
        default:
            return 'NA'
    }
}

const PlayerCard: React.FC<{player: NbaRosterPlayer}> = ({ player }) => {
    if (!player) return 
    let { player_id, player_name, jersey_number, height, weight, position, experience } = player
    
    return (
        <StyledPlayerCard>
            <CardContent>
                <CardMedia
                    sx={{height: 250, width: '100%'}}
                    image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player_id}.png`}
                    // todo: Troubleshoot here for unloaded images.
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = 'https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png'
                    }}
                    />
                    <Box sx={{width: '100%', marginTop: '10px'}}>
                        <Typography variant='h6' textAlign={'center'} fontWeight={600} noWrap>{`${player_name} (${jersey_number})`}</Typography>
                        <Typography variant='body1' textAlign={'center'}>Height: {height}</Typography>
                        <Typography variant='body1' textAlign={'center'}>Weight: {weight} lbs</Typography>
                        <Typography variant='body1' textAlign={'center'}>Position: {generatePosition(position)}</Typography>
                        <Typography variant='body1' textAlign={'center'}>Years: {experience}</Typography>
                    </Box>
            </CardContent>
        </StyledPlayerCard>
    )
}

export default PlayerCard;