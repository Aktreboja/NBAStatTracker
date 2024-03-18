import React from 'react';
import FeaturedPlayer from '@/Components/Player/FeaturedPlayer';

import { calculateDaysBefore } from '@/utils';
import { PlayerInfo, retrievePlayerInformation } from '@/utils';
import { Container } from '@mui/material';
import { retrievePreviousGameStats } from '@/utils/API/BDL/stats';
import { PlayerStats } from '@/Types/stats';

const Player = async ({params} : {params: { player: string }}) => {   

    let player_name = params.player.split('%20')
    const player_info = await retrievePlayerInformation(player_name[0], player_name[1]) as PlayerInfo
    const {bdlData, nbaData} = player_info

    // Get recent games
    const recentGames : PlayerStats[] = await retrievePreviousGameStats(bdlData.id.toString(), calculateDaysBefore(14))

    const dateLabels = []
    const ptsData = []
    for (let i = 0; i < recentGames.length; i++) {
        ptsData.push(recentGames[i].pts)
        dateLabels.push(recentGames[i].game.date)
    }

    console.log(ptsData)

    return (
        <Container>
            <FeaturedPlayer data={bdlData} nbaData={nbaData} chartData={{graphData: ptsData, chartData: dateLabels}}/>
        </Container>
    )
}

// export const getServerSideProps = (async (context) => {
//     const player = context.params?.player;
//     if (!player){
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         }
//     }

//     return { props : {}}
// }) satisfies GetServerSideProps

export default Player;
